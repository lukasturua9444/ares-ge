'use client';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('v'); observer.unobserve(entry.target); } }); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.anim').forEach((el) => observer.observe(el));
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}><a href="/services" onClick={handleNavClick}>Services</a><a href="/about" onClick={handleNavClick}>About Us</a><a href="/projects" onClick={handleNavClick}>Projects</a><a href="/partners" onClick={handleNavClick}>Partners</a><a href="/certifications" onClick={handleNavClick}>Certifications</a><a href="/contact" className="active-link" onClick={handleNavClick}>Contact</a></div>
          <div className="nav-right"><div className="lang-sw"><a href="/ka/">GE</a><a href="/" className="active">EN</a><a href="/ru/">RU</a></div><a href="/contact" className="nav-cta">Get in touch</a></div>
          <button
            type="button"
            className={`hamburger${menuOpen ? ' active' : ''}`}
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">Contact</div>
          <h1 className="page-title anim anim-d1">Get in touch<br /><em>with our team</em></h1>
          <p className="section-sub anim anim-d2">Ready to discuss your project? Reach out for a consultation and preliminary cost estimate.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div className="anim">
              <h2 className="section-title" style={{ fontSize: '28px', marginBottom: '24px' }}>Send us a message</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input type="text" placeholder="Your name" style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }} />
                  <input type="text" placeholder="Company" style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }} />
                </div>
                <input type="email" placeholder="Email" style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }} />
                <input type="tel" placeholder="Phone" style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }} />
                <select style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text2)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }}>
                  <option value="">Select project type</option>
                  <option value="residential">Residential complex</option>
                  <option value="commercial">Commercial property</option>
                  <option value="mixed">Mixed-use building</option>
                  <option value="public">Public building</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Tell us about your project" rows={5} style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%', resize: 'vertical' }}></textarea>
                <button className="btn-primary" style={{ width: 'fit-content' }}>Send message</button>
              </div>
            </div>
            <div className="anim anim-d2">
              <h2 className="section-title" style={{ fontSize: '28px', marginBottom: '24px' }}>Contact information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="val-card"><h4>Email</h4><p><a href="mailto:info@ares.ge" style={{ color: 'var(--accent)' }}>info@ares.ge</a></p></div>
                <div className="val-card"><h4>Phone (Commercial Inquiries)</h4><p><a href="tel:+995595396139" style={{ color: 'var(--accent)' }}>+995 595 39 61 39</a></p></div>
                <div className="val-card"><h4>Address</h4><p>8 S. Virsaladze Street<br />Tbilisi 0108, Georgia</p></div>
                <div className="val-card"><h4>Working hours</h4><p>Monday — Friday: 09:00 — 18:00</p></div>
              </div>
              <div style={{ marginTop: '24px', height: '240px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text3)', fontSize: '13px' }}>Map — 8 S. Virsaladze Street, Tbilisi</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div><div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div><p className="footer-desc">Integrated MEPF engineering solutions for developers and construction companies across Georgia.</p></div>
            <div className="footer-col"><h4>Navigation</h4><a href="/services" onClick={handleNavClick}>Services</a><a href="/about" onClick={handleNavClick}>About Us</a><a href="/projects" onClick={handleNavClick}>Projects</a><a href="/partners" onClick={handleNavClick}>Partners</a><a href="/contact" onClick={handleNavClick}>Contact</a></div>
            <div className="footer-col"><h4>Services</h4><a href="/services" onClick={handleNavClick}>Mechanical</a><a href="/services" onClick={handleNavClick}>Electrical</a><a href="/services" onClick={handleNavClick}>Plumbing</a><a href="/services" onClick={handleNavClick}>Fire protection</a></div>
            <div className="footer-col footer-contact"><h4>Contact</h4><p><a href="mailto:info@ares.ge">info@ares.ge</a></p><p><a href="tel:+995595396139">+995 595 39 61 39</a></p><p>8 S. Virsaladze Street<br />Tbilisi 0108, Georgia</p></div>
          </div>
          <div className="footer-bottom"><p>&copy; 2026 ARES. All rights reserved.</p><p>MEPF Engineering Solutions</p></div>
        </div>
      </footer>
    </>
  );
}
