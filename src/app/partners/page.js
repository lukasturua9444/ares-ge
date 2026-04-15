'use client';
import { useEffect } from 'react';

export default function PartnersPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('v'); observer.unobserve(entry.target); } }); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.anim').forEach((el) => observer.observe(el));
  }, []);

  const partners = [
    { name: 'Thalasa Group', type: 'Developer', location: 'Batumi' },
    { name: 'AIA Plaza', type: 'Developer', location: 'Batumi' },
    { name: 'Wondernet Express Investment Group', type: 'Industrial', location: 'Batumi' },
    { name: 'Riverside Balakhvani', type: 'Developer', location: 'Kutaisi' },
    { name: 'M1 Group', type: 'Developer', location: 'Kutaisi' },
    { name: 'Casio Development', type: 'Developer', location: 'Tbilisi' },
    { name: 'Archi', type: 'Developer', location: 'Tbilisi' },
    { name: 'Compact Mukhiani', type: 'Developer', location: 'Tbilisi' },
    { name: 'Baustar', type: 'Developer', location: 'Rustavi' },
  ];

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className="nav-links"><a href="/services">Services</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/partners" className="active-link">Partners</a><a href="/certifications">Certifications</a><a href="/contact">Contact</a></div>
          <div className="nav-right"><div className="lang-sw"><a href="/ka/">GE</a><a href="/" className="active">EN</a><a href="/ru/">RU</a></div><a href="/contact" className="nav-cta">Get in touch</a></div>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">Partners</div>
          <h1 className="page-title anim anim-d1">Companies that<br /><em>trust ARES</em></h1>
          <p className="section-sub anim anim-d2">We work with leading developers and construction companies across Georgia.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-label anim">Our clients</div>
          <h2 className="section-title anim anim-d1">Development partners</h2>
          <p className="section-sub anim anim-d2">Developers and construction companies who have entrusted ARES with their MEPF engineering.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }}>
            {partners.map((partner, i) => (
              <div key={partner.name} className={`srv-card anim anim-d${(i % 4) + 1}`} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--dark)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--text3)', fontSize: '11px', border: '1px solid var(--border)' }}>Logo</div>
                <h3 style={{ fontSize: '18px' }}>{partner.name}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>{partner.type} — {partner.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label anim center">Why partner with ARES</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>The integrated advantage</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto 48px' }}>One contractor for all MEPF disciplines. Single point of responsibility.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1"><h3>Single contract</h3><p>One contractor instead of five to seven. Simplified project management and clear accountability.</p></div>
            <div className="srv-card anim anim-d2"><h3>Cost efficiency</h3><p>Unified procurement reduces material costs. Early conflict prevention saves rework budgets.</p></div>
            <div className="srv-card anim anim-d3"><h3>Quality assurance</h3><p>We handle regulatory compliance, testing, commissioning, and final handover documentation.</p></div>
            <div className="srv-card anim anim-d4"><h3>Predictable timelines</h3><p>Systematic coordination with construction schedules. Zero system conflicts between disciplines.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>Become a partner</h2>
            <p>Let us discuss how ARES can support your next development project</p>
            <div style={{ marginTop: '24px' }}><a href="/contact" className="btn-primary" style={{ color: 'var(--black)', textDecoration: 'none' }}>Get in touch</a></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div><div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div><p className="footer-desc">Integrated MEPF engineering solutions for developers and construction companies across Georgia.</p></div>
            <div className="footer-col"><h4>Navigation</h4><a href="/services">Services</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/partners">Partners</a><a href="/contact">Contact</a></div>
            <div className="footer-col"><h4>Services</h4><a href="/services">Mechanical</a><a href="/services">Electrical</a><a href="/services">Plumbing</a><a href="/services">Fire protection</a></div>
            <div className="footer-col footer-contact"><h4>Contact</h4><p><a href="mailto:info@ares.ge">info@ares.ge</a></p><p><a href="tel:+995595396139">+995 595 39 61 39</a></p><p>8 S. Virsaladze Street<br />Tbilisi 0108, Georgia</p></div>
          </div>
          <div className="footer-bottom"><p>&copy; 2026 ARES. All rights reserved.</p><p>MEPF Engineering Solutions</p></div>
        </div>
      </footer>
    </>
  );
}
