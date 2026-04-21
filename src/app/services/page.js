'use client';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'Services | ARES';
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('v'); observer.unobserve(entry.target); }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.anim').forEach((el) => observer.observe(el));
  }, []);

  const services = [
    { title: 'HVAC Systems', desc: 'Design and installation of heating, ventilation, and air conditioning systems. Climate control engineered for efficiency, comfort, and energy performance.', items: ['Central heating systems', 'Ventilation design', 'Air conditioning', 'Energy-efficient climate control', 'Indoor air quality management'] },
    { title: 'Electrical Systems', desc: 'Energy distribution, emergency and backup systems, grounding, and lightning protection. Complete electrical infrastructure for modern buildings.', items: ['Power distribution networks', 'Emergency/backup systems', 'Grounding & lightning protection', 'Lighting design', 'Switchgear & panels'] },
    { title: 'Plumbing & Drainage', desc: 'Water supply, drainage, and rainwater systems. Designed for reliability, efficiency, and full regulatory compliance.', items: ['Water supply systems', 'Drainage networks', 'Sewerage systems', 'Rainwater management', 'Irrigation systems'] },
    { title: 'Fire Safety', desc: 'Fire detection and alarm, sprinkler, smoke control, and emergency evacuation systems, in full compliance with international standards.', items: ['Fire alarm systems', 'Automatic sprinklers', 'Smoke control & ventilation', 'Evacuation systems', 'Fire automation'] },
    { title: 'Low Voltage & ELV Systems', desc: 'Access control, CCTV, structured cabling, BMS integration, and communication infrastructure for intelligent buildings.', items: ['Access control systems', 'CCTV & surveillance', 'Structured cabling', 'BMS integration', 'Sound & communication systems'] },
    { title: 'Testing & Commissioning', desc: 'System performance verification, functional testing, startup, and final handover. Ensuring every system operates as designed.', items: ['Performance verification', 'Functional testing', 'System startup', 'Final handover', 'Documentation & training'] }
  ];

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="/services" className="active-link" onClick={handleNavClick}>Services</a>
            <a href="/about" onClick={handleNavClick}>About Us</a>
            <a href="/projects" onClick={handleNavClick}>Projects</a>
            <a href="/partners" onClick={handleNavClick}>Partners</a>
            <a href="/certifications" onClick={handleNavClick}>Certifications</a>
            <a href="/contact" onClick={handleNavClick}>Contact</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw"><a href="/ka/">GE</a><a href="/" className="active">EN</a><a href="/ru/">RU</a></div>
            <a href="/contact" className="nav-cta">Get in touch</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">Services</div>
          <h1 className="page-title anim anim-d1">Full-cycle MEPF<br /><em>engineering solutions</em></h1>
          <p className="section-sub anim anim-d2">From initial design through final commissioning — we handle all building service disciplines under one contract.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {services.map((service, i) => (
            <div key={service.title} className={`service-detail anim anim-d${Math.min(i + 1, 4)}`} style={{ marginBottom: '40px' }}>
              <div className="val-card" style={{ borderLeft: '3px solid var(--accent)', padding: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px' }}>{service.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.7' }}>{service.desc}</p>
                  </div>
                  <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {service.items.map((item) => (
                        <li key={item} style={{ fontSize: '13px', color: 'var(--text2)', padding: '6px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--accent)', fontSize: '16px' }}>›</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section services">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label anim center">Why one contractor</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>Integrated MEPF advantage</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto 48px' }}>One contractor instead of five to seven. Unified procurement. Zero system conflicts.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1"><h3>Cost savings</h3><p>Single contract eliminates coordination overhead. Unified purchasing reduces material costs.</p></div>
            <div className="srv-card anim anim-d2"><h3>Faster delivery</h3><p>Accelerated project timelines. Reduced management resources. Predictable schedules.</p></div>
            <div className="srv-card anim anim-d3"><h3>Zero conflicts</h3><p>Early conflict prevention between disciplines saves rework budgets and eliminates delays.</p></div>
            <div className="srv-card anim anim-d4"><h3>Quality control</h3><p>We handle regulatory authorities, testing, commissioning, and final handover documentation.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>Need MEPF engineering for your project?</h2>
            <p>Get a consultation and preliminary cost estimate</p>
            <div style={{ marginTop: '24px' }}><a href="/contact" className="btn-primary" style={{ color: 'var(--black)', textDecoration: 'none' }}>Request consultation</a></div>
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
