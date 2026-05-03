'use client';
import { useEffect, useState } from 'react';

const ICON_LIGHTNING = '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';
const ICON_CLIPBOARD = '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';
const ICON_SHIELD = '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';
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
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
          if (entry.isIntersecting) {
            entry.target.classList.add('v');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.anim').forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (nav) {
        nav.style.background = window.scrollY > 60 ? 'rgba(5,5,5,0.95)' : 'rgba(5,5,5,0.85)';
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Mobile hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
      });
      // Close menu when a link is clicked
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('open');
        });
      });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="/services" onClick={handleNavClick}>Services</a>
            <a href="/about" onClick={handleNavClick}>About Us</a>
            <a href="/projects" onClick={handleNavClick}>Projects</a>
            <a href="/partners" onClick={handleNavClick}>Partners</a>
            <a href="/certifications" onClick={handleNavClick}>Certifications</a>
            <a href="/contact" onClick={handleNavClick}>Contact</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw"><a href="/ka">GE</a><a href="/" className="active">EN</a></div>
            <a href="/contact" className="nav-cta">Get in touch</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-photo"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-label">MEPF Engineering</div>
          <h1><em>Invisible</em> systems.<br />Visible <em>value</em>.</h1>
          <p className="hero-sub">Integrated mechanical, electrical, plumbing &amp; fire protection solutions for developers and construction companies.</p>
          <div className="hero-btns">
            <a href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Request consultation</a>
            <a href="/projects" className="btn-outline">View projects</a>
          </div>
        </div>
      </section>

      <section className="stats"><div className="wrap"><div className="stats-grid anim">
        <div className="stat-item"><span className="stat-num">8+</span><span className="stat-label">Years of experience</span></div>
        <div className="stat-item"><span className="stat-num">20+</span><span className="stat-label">Completed projects</span></div>
        <div className="stat-item"><span className="stat-num">450K+</span><span className="stat-label">m² designed</span></div>
      </div></div></section>

      <section className="section services" id="services">
        <div className="wrap">
          <div className="section-label anim">What we do</div>
          <h2 className="section-title anim anim-d1">Full-cycle MEPF<br />engineering solutions</h2>
          <p className="section-sub anim anim-d2">From initial design through final commissioning — we handle all four engineering disciplines under one contract.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1"><div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M12 2v6m0 0L9 5m3 3l3-3"/><rect x="4" y="10" width="16" height="10" rx="2"/></svg></div><h3>Mechanical systems</h3><p>HVAC systems, ventilation, heating and cooling. Climate control engineered for efficiency and comfort.</p></div>
            <div className="srv-card anim anim-d2"><div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/></svg></div><h3>Electrical systems</h3><p>Power distribution, lighting systems, low-voltage and automation systems for modern buildings.</p></div>
            <div className="srv-card anim anim-d3"><div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M6 20V10a6 6 0 1112 0v10"/><line x1="4" y1="20" x2="20" y2="20"/></svg></div><h3>Plumbing</h3><p>Water supply, drainage and sewerage systems. Designed for reliability and compliance.</p></div>
            <div className="srv-card anim anim-d4"><div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M12 2L8 8h3v6H8l4 6 4-6h-3V8h3L12 2z"/></svg></div><h3>Fire protection</h3><p>Fire alarm systems, automatic sprinklers, evacuation systems, fire ventilation and automation.</p></div>
          </div>
        </div>
      </section>

      <section className="section value" id="about">
        <div className="wrap"><div className="value-grid">
          <div className="value-left">
            <div className="section-label anim">Why ARES</div>
            <p className="value-statement anim anim-d1">We don&apos;t sell engineering.<br />We sell <em>project economics</em>.</p>
            <p className="section-sub anim anim-d2">One contractor instead of five to seven. Unified procurement. Zero system conflicts. Predictable timelines. Lower total cost of ownership.</p>
          </div>
          <div className="value-cards">
            <div className="val-card anim anim-d1"><div className="val-icon"><img src={`data:image/png;base64,${ICON_LIGHTNING}`} alt="" /></div><div className="val-body"><h4>Direct cost savings</h4><p>Single contract eliminates coordination overhead. Unified purchasing reduces material costs.</p></div></div>
            <div className="val-card anim anim-d2"><div className="val-icon"><img src={`data:image/png;base64,${ICON_CLIPBOARD}`} alt="" /></div><div className="val-body"><h4>Operational efficiency</h4><p>Faster project delivery. Accelerated capital turnover. Reduced management resources.</p></div></div>
            <div className="val-card anim anim-d3"><div className="val-icon"><img src={`data:image/png;base64,${ICON_SHIELD}`} alt="" /></div><div className="val-body"><h4>Strategic impact</h4><p>Higher property value through better engineering. Enhancing developers&apos; brand value. Risk reduction.</p></div></div>
          </div>
        </div></div>
      </section>

      <section className="section projects" id="projects">
        <div className="wrap">
          <div className="section-label anim">Selected projects</div>
          <h2 className="section-title anim anim-d1">From design to<br />commissioning</h2>
          <p className="section-sub anim anim-d2">Residential complexes, commercial spaces, public buildings — across Tbilisi, Batumi, Kutaisi and beyond.</p>
          <div className="projects-grid">
            {[
              { name: 'Thalasa Group', location: 'Batumi — Residential complex', img: '/images/proj-thalasa.jpg', tags: ['Fire ventilation', 'Electrical', 'Plumbing'] },
              { name: 'M1 Group Kutaisi', location: 'Kutaisi — Residential & Commercial', img: '/images/proj-m1-group.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Automation'] },
              { name: 'Archi Iasamnebi', location: 'Tbilisi — Residential complex', img: '/images/proj-archi.jpg', tags: ['Fire alarm', 'Sprinkler'] },
            ].map((proj, i) => (
              <div className={`proj-card anim anim-d${i + 1}`} key={proj.name}>
                <div className="proj-img">
                  <img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="proj-overlay"></div>
                </div>
                <div className="proj-body">
                  <h3>{proj.name}</h3>
                  <p className="proj-meta">{proj.location}</p>
                  <div className="proj-tags">
                    {proj.tags.map((tag) => (<span className="proj-tag" key={tag}>{tag}</span>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all anim"><a href="/projects" className="btn-outline">View all projects</a></div>
        </div>
      </section>

      <section className="section" id="certifications">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label anim center">Standards &amp; qualifications</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>Built on international standards</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto' }}>Our engineering solutions follow international standards and professional guidelines.</p>
          <div className="certs-grid anim anim-d3">
            {['ISO 9001', 'NFPA', 'IEC', 'ASHRAE', 'EN Standards'].map((cert) => (
              <div className="cert-item" key={cert}><span>{cert}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="wrap"><div className="cta-box anim">
          <h2>Ready to start your next project?</h2>
          <p>Get a consultation and preliminary cost estimate for your development</p>
          <div className="cta-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email or phone" />
            <input type="text" placeholder="Project type" />
            <button type="submit">Send request</button>
          </div>
        </div></div>
      </section>

      <footer><div className="wrap">
        <div className="footer-grid">
          <div><div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div><p className="footer-desc">Integrated MEPF engineering solutions for developers and construction companies across Georgia. From design to commissioning.</p></div>
          <div className="footer-col"><h4>Navigation</h4><a href="/services">Services</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/partners">Partners</a><a href="/contact">Contact</a></div>
          <div className="footer-col"><h4>Services</h4><a href="/services">Mechanical</a><a href="/services">Electrical</a><a href="/services">Plumbing</a><a href="/services">Fire protection</a></div>
          <div className="footer-col footer-contact"><h4>Contact</h4><p><a href="mailto:info@ares.ge">info@ares.ge</a></p><p><a href="tel:+995595396139">+995 595 39 61 39</a></p><p>8 S. Virsaladze Street<br />Tbilisi 0108, Georgia</p></div>
        </div>
        <div className="footer-bottom"><p>&copy; 2026 ARES. All rights reserved.</p><p>MEPF Engineering Solutions</p></div>
      </div></footer>
    </>
  );
}
