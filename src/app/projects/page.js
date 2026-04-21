'use client';
import { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('v'); observer.unobserve(entry.target); } }); },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.anim').forEach((el) => observer.observe(el));
  }, []);

  const projects = [
    { name: 'Thalasa Group', location: 'Batumi', type: 'Residential complex', img: '/images/proj-thalasa.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Electrical', 'Water drainage', 'Sewerage'] },
    { name: 'AIA Plaza', location: 'Batumi', type: 'Residential complex', img: '/images/proj-aia-plaza.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Electrical', 'Water drainage', 'Sewerage'] },
    { name: 'Wondernet Express Investment Group', location: 'Batumi', type: 'Industrial facility', img: '/images/proj-wondernet.jpg', tags: ['Sprinkler diagnostics', 'Fire alarm'] },
    { name: 'Riverside Balakhvani Kutaisi', location: 'Kutaisi', type: 'Residential complex', img: '/images/proj-riverside.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Electrical'] },
    { name: 'M1 Group Kutaisi', location: 'Kutaisi', type: 'Residential & Commercial complex', img: '/images/proj-m1-group.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Sound system'] },
    { name: 'Shopping Mall in Kutaisi', location: 'Kutaisi', type: 'Commercial facility', img: '/images/proj-shopping-mall.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Sound system'] },
    { name: 'Casio Development', location: 'Tbilisi', type: 'Residential complex', img: '/images/proj-casio.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Sound system'] },
    { name: 'Archi Iasamnebi', location: 'Tbilisi', type: 'Residential complex', img: '/images/proj-archi.jpg', tags: ['Fire alarm', 'Sprinkler'] },
    { name: 'Compact Mukhiani', location: 'Tbilisi', type: 'Residential complex', img: '/images/proj-compact.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Electrical'] },
    { name: 'Baustar Rustavi', location: 'Rustavi', type: 'Residential complex', img: '/images/proj-baustar.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Electrical'] },
    { name: 'Kvareli School', location: 'Kvareli', type: 'Public building', img: null, tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Electrical'] },
    { name: 'Vashlovani School and Campus', location: 'Vashlovani', type: 'Public building', img: '/images/proj-vashlovani.jpg', tags: ['Fire ventilation', 'Fire alarm', 'Evacuation', 'Sprinkler', 'Automation', 'Electrical'] },
  ];

  return (<>
    <nav className="nav" id="nav"><div className="nav-inner">
      <a href="/" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
      <div className={`nav-links${menuOpen ? ' open' : ''}`}><a href="/services" onClick={handleNavClick}>Services</a><a href="/about" onClick={handleNavClick}>About Us</a><a href="/projects" className="active-link" onClick={handleNavClick}>Projects</a><a href="/partners" onClick={handleNavClick}>Partners</a><a href="/certifications" onClick={handleNavClick}>Certifications</a><a href="/contact" onClick={handleNavClick}>Contact</a></div>
      <div className="nav-right"><div className="lang-sw"><a href="/ka/">GE</a><a href="/" className="active">EN</a><a href="/ru/">RU</a></div><a href="/contact" className="nav-cta">Get in touch</a></div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span></span><span></span><span></span></button>
        </div>
      </nav>
    <section className="page-header"><div className="wrap"><div className="section-label anim">Projects</div><h1 className="page-title anim anim-d1">From design to<br /><em>commissioning</em></h1><p className="section-sub anim anim-d2">Residential complexes, commercial spaces, public buildings — across Tbilisi, Batumi, Kutaisi and beyond.</p></div></section>
    <section style={{ padding: '0 0 60px' }}><div className="wrap"><div className="stats-grid anim" style={{ maxWidth: '800px', margin: '0 auto' }}><div className="stat-item"><span className="stat-num">20+</span><span className="stat-label">Completed projects</span></div><div className="stat-item"><span className="stat-num">450K+</span><span className="stat-label">m² designed</span></div><div className="stat-item"><span className="stat-num">6</span><span className="stat-label">Cities in Georgia</span></div></div></div></section>
    <section className="section"><div className="wrap"><div className="section-label anim">Selected projects</div><h2 className="section-title anim anim-d1">Our portfolio</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '48px' }}>
        {projects.map((proj, i) => (<div key={proj.name} className={"proj-card anim anim-d" + ((i % 4) + 1)}><div className="proj-img">{proj.img ? (<img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />) : (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)', color: 'var(--text3)', fontSize: '12px' }}>Coming soon</div>)}<div className="proj-overlay"></div></div><div className="proj-body"><h3>{proj.name}</h3><p className="proj-meta">{proj.location} — {proj.type}</p><div className="proj-tags">{proj.tags.map((tag) => (<span className="proj-tag" key={tag}>{tag}</span>))}</div></div></div>))}
      </div></div></section>
    <section className="section services"><div className="wrap" style={{ textAlign: 'center' }}><div className="section-label anim center">Geography</div><h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>Active across Georgia</h2><p className="section-sub anim anim-d2" style={{ margin: '0 auto 48px' }}>We deliver projects wherever they are needed.</p><div className="certs-grid anim anim-d3">{['Tbilisi', 'Batumi', 'Kutaisi', 'Rustavi', 'Kvareli', 'Vashlovani'].map((city) => (<div className="cert-item" key={city}><span>{city}</span></div>))}</div></div></section>
    <section className="cta-section"><div className="wrap"><div className="cta-box anim"><h2>Have a project in mind?</h2><p>Get a consultation and preliminary cost estimate for your development</p><div style={{ marginTop: '24px' }}><a href="/contact" className="btn-primary" style={{ color: 'var(--black)', textDecoration: 'none' }}>Request consultation</a></div></div></div></section>
    <footer><div className="wrap"><div className="footer-grid"><div><div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div><p className="footer-desc">Integrated MEPF engineering solutions for developers and construction companies across Georgia.</p></div><div className="footer-col"><h4>Navigation</h4><a href="/services">Services</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/partners">Partners</a><a href="/contact">Contact</a></div><div className="footer-col"><h4>Services</h4><a href="/services">Mechanical</a><a href="/services">Electrical</a><a href="/services">Plumbing</a><a href="/services">Fire protection</a></div><div className="footer-col footer-contact"><h4>Contact</h4><p><a href="mailto:info@ares.ge">info@ares.ge</a></p><p><a href="tel:+995595396139">+995 595 39 61 39</a></p><p>8 S. Virsaladze Street<br />Tbilisi 0108, Georgia</p></div></div><div className="footer-bottom"><p>&copy; 2026 ARES. All rights reserved.</p><p>MEPF Engineering Solutions</p></div></div></footer>
  </>);
}