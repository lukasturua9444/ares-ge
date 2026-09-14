import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const TO = process.env.CONTACT_TO || 'info@ares.ge';
const FROM = process.env.CONTACT_FROM || 'ARES Website <onboarding@resend.dev>';
const MAX = { name: 120, company: 120, email: 200, phone: 40, message: 4000 };

const PROJECT_TYPES = {
  residential: 'Residential complex',
  commercial: 'Commercial property',
  mixed: 'Mixed-use building',
  public: 'Public building',
  other: 'Other',
};

function clean(value, max) {
  return String(value ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const company = clean(body.company, MAX.company);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const projectType = PROJECT_TYPES[body.projectType] || '';
  const message = String(body.message ?? '').trim().slice(0, MAX.message);
  const lang = body.lang === 'ka' ? 'ka' : 'en';

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'validation' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json({ ok: false, error: 'config' }, { status: 500 });
  }

  const rows = [
    ['Name', name],
    ['Company', company || '—'],
    ['Email', email],
    ['Phone', phone || '—'],
    ['Project type', projectType || '—'],
    ['Language', lang === 'ka' ? 'Georgian (/ka)' : 'English'],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nMessage:\n${message}\n`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#111;max-width:640px">
      <h2 style="margin:0 0 16px;color:#E8441E">New inquiry from ares.ge</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows.map(([k, v]) => `<tr><td style="color:#666;padding-right:16px"><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join('')}
      </table>
      <p style="margin:20px 0 6px;color:#666"><b>Message</b></p>
      <p style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:6px">${escapeHtml(message)}</p>
    </div>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: TO.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: email,
        subject: `Website inquiry — ${name}${company ? ` (${company})` : ''}`,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[contact] Resend error', res.status, detail);
      return NextResponse.json({ ok: false, error: 'send' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json({ ok: false, error: 'send' }, { status: 502 });
  }
}
