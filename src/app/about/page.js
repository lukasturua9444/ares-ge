'use client';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'About Us | ARES';
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

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
      });
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('open');
        });
      });
    }
  }, []);

  return (
    <>
      {/* NAVIGATION */}
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/images/ARES_White_Horizontal.png" alt="ARES" />
          </a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="/services" onClick={handleNavClick}>Services</a>
            <a href="/about" className="active-link" onClick={handleNavClick}>About Us</a>
            <a href="/projects" onClick={handleNavClick}>Projects</a>
            <a href="/partners" onClick={handleNavClick}>Partners</a>
            <a href="/certifications" onClick={handleNavClick}>Certifications</a>
            <a href="/contact" onClick={handleNavClick}>Contact</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw">
              <a href="/ka/about">GE</a>
              <a href="/about" className="active">EN</a>
            </div>
            <a href="/contact" className="nav-cta">Get in touch</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span></span><span></span><span></span></button>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">About Us</div>
          <h1 className="page-title anim anim-d1">Engineering precision.<br /><em>Delivered systematically.</em></h1>
          <p className="section-sub anim anim-d2">ARES is an engineering company specializing in the design and installation of MEPF systems for construction projects.</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-left anim">
              <div className="section-label">Who we are</div>
              <h2 className="section-title">Founded in 2024.<br />Experience since 2017.</h2>
              <p className="section-sub" style={{ maxWidth: '100%' }}>ARES was founded in 2024, and our team has been delivering MEPF engineering solutions since 2017. Our goal is to ensure that engineering systems are properly integrated into the project — technically sound, economically efficient, and coordinated with the construction schedule.</p>
            </div>
            <div className="about-right anim anim-d2">
              <div className="stats-grid" style={{ maxWidth: '100%' }}>
                <div className="stat-item"><span className="stat-num">8+</span><span className="stat-label">Years of experience</span></div>
                <div className="stat-item"><span className="stat-num">20+</span><span className="stat-label">Completed projects</span></div>
                <div className="stat-item"><span className="stat-num">450K+</span><span className="stat-label">m² designed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section services">
        <div className="wrap">
          <div className="section-label anim">What we do</div>
          <h2 className="section-title anim anim-d1">End-to-end MEPF engineering</h2>
          <p className="section-sub anim anim-d2">Design, installation, and commissioning of integrated MEPF systems for construction projects.</p>
          <div className="value-grid" style={{ marginTop: '48px' }}>
            <div className="value-cards">
              <div className="val-card anim anim-d1"><h4>Technical precision</h4><p>Engineering solutions based on international standards, ensuring every system is designed and installed to the highest quality benchmarks.</p></div>
              <div className="val-card anim anim-d2"><h4>Systematic coordination</h4><p>Structured workflow coordinated with construction schedules, eliminating conflicts between disciplines and preventing costly rework.</p></div>
              <div className="val-card anim anim-d3"><h4>Compliance with standards</h4><p>All engineering solutions follow ISO 9001, NFPA, IEC, ASHRAE, and EN Standards for reliability and regulatory compliance.</p></div>
            </div>
            <div className="value-cards">
              <div className="val-card anim anim-d1"><h4>Who we serve</h4><p>Developers, construction companies and project stakeholders delivering residential, commercial, and mixed-use buildings across Georgia.</p></div>
              <div className="val-card anim anim-d2"><h4>Our geography</h4><p>Active across Georgia — Tbilisi, Batumi, Kutaisi, Rustavi, Kvareli, and Vashlovani — delivering projects wherever they are needed.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section">
        <div className="wrap">
          <div className="section-label anim">Who we serve</div>
          <h2 className="section-title anim anim-d1">Building types</h2>
          <p className="section-sub anim anim-d2">We deliver MEPF solutions for a wide range of construction projects.</p>
          <div className="services-grid" style={{ marginTop: '48px' }}>
            <div className="srv-card anim anim-d1"><h3>Residential Complexes</h3><p>Multi-apartment residential buildings with full MEPF systems and smart home integration.</p></div>
            <div className="srv-card anim anim-d2"><h3>Commercial Properties</h3><p>Office buildings, shopping centers, hotel complexes, and business parks requiring HVAC, electrical distribution, and fire protection.</p></div>
            <div className="srv-card anim anim-d3"><h3>Mixed-Use Buildings</h3><p>Projects combining residential, commercial, and retail functions under one integrated engineering solution.</p></div>
            <div className="srv-card anim anim-d4"><h3>Public and Technical Facilities</h3><p>Schools, educational institutions, industrial buildings, warehouses, and specialized technical facilities.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>Ready to start your next project?</h2>
            <p>Get a consultation and preliminary cost estimate for your development</p>
            <div style={{ marginTop: '24px' }}><a href="/contact" className="btn-primary" style={{ color: 'var(--black)', textDecoration: 'none' }}>Contact us</a></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div>
              <p className="footer-desc">Integrated MEPF engineering solutions for developers and construction companies across Georgia. From design to commissioning.</p>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <a href="/services">Services</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/partners">Partners</a><a href="/contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="/services">Mechanical</a><a href="/services">Electrical</a><a href="/services">Plumbing</a><a href="/services">Fire protection</a>
            </div>
            <div className="footer-col footer-contact">
              <h4>Contact</h4>
              <p><a href="mailto:info@ares.ge">info@ares.ge</a></p>
              <p><a href="tel:+995595396139">+995 595 39 61 39</a></p>
              <p>8 S. Virsaladze Street<br />Tbilisi 0108, Georgia </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 ARES. All rights reserved.</p>
            <p>MEPF Engineering Solutions</p>
          </div>
        </div>
      </footer>
    </>
  );
}
