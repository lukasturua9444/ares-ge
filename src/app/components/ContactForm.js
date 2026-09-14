'use client';
import { useState } from 'react';

const field = {
  padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px',
  fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%',
};

const EMPTY = { name: '', company: '', email: '', phone: '', projectType: '', message: '', website: '' };

/**
 * Contact form. All visible strings come from `t` so each language page owns its copy.
 * t = { name, company, email, phone, selectType, types: {residential, commercial, mixed, public, other},
 *       message, send, sending, success, error, required }
 */
export default function ContactForm({ t, lang }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | invalid
  const [touched, setTouched] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const invalid = {
    name: !form.name.trim(),
    email: !emailOk,
    message: !form.message.trim(),
  };
  const hasErrors = invalid.name || invalid.email || invalid.message;
  const errBorder = (k) => (touched && invalid[k] ? { borderColor: 'var(--accent)' } : null);

  async function submit(e) {
    e.preventDefault();
    setTouched(true);
    if (hasErrors) { setStatus('invalid'); return; }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        // Meta Pixel: Lead fires only on a confirmed send (never for bots caught by the honeypot)
        if (!form.website && typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', {
            content_name: 'contact_form',
            content_category: form.projectType || 'unspecified',
            language: lang === 'ka' ? 'ka' : 'en',
          });
        }
        setStatus('success');
        setForm(EMPTY);
        setTouched(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const statusStyle = {
    padding: '14px 18px', borderRadius: '6px', fontSize: '14px', lineHeight: 1.5,
    border: '1px solid',
  };
  const statusBox = {
    success: { ...statusStyle, borderColor: 'rgba(160,201,203,0.5)', background: 'rgba(160,201,203,0.08)', color: '#a0c9cb' },
    error: { ...statusStyle, borderColor: 'rgba(232,68,30,0.5)', background: 'rgba(232,68,30,0.08)', color: 'var(--accent)' },
    invalid: { ...statusStyle, borderColor: 'rgba(232,68,30,0.5)', background: 'rgba(232,68,30,0.08)', color: 'var(--accent)' },
  };
  const statusText = { success: t.success, error: t.error, invalid: hasErrors ? t.required : null };

  return (
    <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <input type="text" name="name" placeholder={t.name} value={form.name} onChange={set('name')} autoComplete="name" style={{ ...field, ...errBorder('name') }} />
        <input type="text" name="company" placeholder={t.company} value={form.company} onChange={set('company')} autoComplete="organization" style={field} />
      </div>
      <input type="email" name="email" placeholder={t.email} value={form.email} onChange={set('email')} autoComplete="email" style={{ ...field, ...errBorder('email') }} />
      <input type="tel" name="phone" placeholder={t.phone} value={form.phone} onChange={set('phone')} autoComplete="tel" style={field} />
      <select name="projectType" value={form.projectType} onChange={set('projectType')} style={{ ...field, color: form.projectType ? 'var(--text)' : 'var(--text2)' }}>
        <option value="">{t.selectType}</option>
        <option value="residential">{t.types.residential}</option>
        <option value="commercial">{t.types.commercial}</option>
        <option value="mixed">{t.types.mixed}</option>
        <option value="public">{t.types.public}</option>
        <option value="other">{t.types.other}</option>
      </select>
      <textarea name="message" placeholder={t.message} rows={5} value={form.message} onChange={set('message')} style={{ ...field, resize: 'vertical', ...errBorder('message') }}></textarea>
      {/* Honeypot — hidden from humans, bots tend to fill it */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
      </div>
      {statusText[status] && (
        <div role="status" style={statusBox[status]}>{statusText[status]}</div>
      )}
      <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: 'fit-content', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}>
        {status === 'sending' ? t.sending : t.send}
      </button>
    </form>
  );
}
