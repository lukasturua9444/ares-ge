'use client';
import { useEffect } from 'react';

export default function CertificationsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('v'); observer.unobserve(entry.target); } }); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.anim').forEach((el) => observer.observe(el));
  }, []);

  const certifications = [
    { name: 'ISO 9001', desc: 'Quality Management Systems — international standard ensuring consistent delivery and continuous improvement in engineering processes.', category: 'Quality Management' },
    { name: 'NFPA', desc: 'National Fire Protection Association — international codes and standards for fire protection, life safety, and electrical safety in buildings.', category: 'Fire Protection' },
    { name: 'IEC', desc: 'International Electrotechnical Commission — global standards for electrical, electronic, and related technologies ensuring safety and performance.', category: 'Electrical' },
    { name: 'ASHRAE', desc: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers — standards for HVAC design, energy efficiency, and indoor air quality.', category: 'HVAC' },
    { name: 'EN Standards', desc: 'European Norms — harmonized technical standards for construction, electrical, mechanical, and fire safety systems across Europe.', category: 'General Engineering' },
  ];

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className="nav-links"><a href="/services">Services</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/partners">Partners</a><a href="/certifications" className="active-link">Certifications</a><a href="/contact">Contact</a></div>
          <div className="nav-right"><div className="lang-sw"><a href="/ka/">GE</a><a href="/" className="active">EN</a><a href="/ru/">RU</a></div><a href="/contact" className="nav-cta">Get in touch</a></div>
          <button className="hamburger" id="hamburger"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">Certifications</div>
          <h1 className="page-title anim anim-d1">Built on international<br /><em>standards</em></h1>
          <p className="section-sub anim anim-d2">Our engineering solutions are based on international standards and professional guidelines.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-label anim">Standards and qualifications</div>
          <h2 className="section-title anim anim-d1">Engineering standards we follow</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '48px' }}>
            {certifications.map((cert, i) => (
              <div key={cert.name} className={`val-card anim anim-d${Math.min(i + 1, 4)}`} style={{ padding: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '32px', alignItems: 'center' }}>
                  <div style={{ background: 'var(--dark)', border: '1px solid var(--border)', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--accent)' }}>{cert.name}</span>
                    <div style={{ fontSize: '10px', color: 'var(--text3)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>{cert.category}</div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{cert.name}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.7' }}>{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label anim center">Our commitment</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>Compliance at every stage</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto 48px' }}>From design through commissioning, every system meets or exceeds international requirements.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1"><h3>Design phase</h3><p>All engineering designs follow international codes and local regulatory requirements from day one.</p></div>
            <div className="srv-card anim anim-d2"><h3>Installation</h3><p>Installation procedures follow manufacturer specifications and applicable standards for each discipline.</p></div>
            <div className="srv-card anim anim-d3"><h3>Testing</h3><p>System performance verification and functional testing per international commissioning protocols.</p></div>
            <div className="srv-card anim anim-d4"><h3>Documentation</h3><p>Complete as-built documentation, test reports, and compliance certificates for project handover.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>Need certified MEPF engineering?</h2>
            <p>Our solutions meet international standards for quality, safety, and performance</p>
            <div style={{ marginTop: '24px' }}><a href="/contact" className="btn-primary" style={{ color: 'var(--black)', textDecoration: 'none' }}>Contact us</a></div>
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
