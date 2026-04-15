'use client';
import { useEffect } from 'react';

export default function Home() {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/images/ARES_White_Horizontal.png" alt="ARES" />
          </a>
          <div className="nav-links">
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Us</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projects</a>
            <a href="#partners" onClick={(e) => { e.preventDefault(); scrollTo('partners'); }}>Partners</a>
            <a href="/certifications">Certifications</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw">
              <a href="/ka/">GE</a>
              <a href="/" className="active">EN</a>
              <a href="/ru/">RU</a>
            </div>
            <button className="nav-cta" onClick={() => scrollTo('contact')}>Get in touch</button>
          </div>
          <button className="hamburger" id="hamburger">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg"><div className="hero-grid-pattern"></div></div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-label">MEPF Engineering</div>
            <h1>Engineering the <em>invisible systems</em> that power buildings</h1>
            <p className="hero-sub">Integrated mechanical, electrical, plumbing &amp; fire protection solutions for developers and construction companies across Georgia.</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => scrollTo('contact')}>Request consultation</button>
              <a href="#projects" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>View projects</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-visual">
              <img src="/images/ARES_White_Vertical.png" alt="ARES Logo" />
            </div>
            <div className="hero-badge">
              <div className="num">450K+</div>
              <div className="lab">Square meters designed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div className="stats-grid anim">
            <div className="stat-item"><span className="stat-num">8+</span><span className="stat-label">Years of experience</span></div>
            <div className="stat-item"><span className="stat-num">20+</span><span className="stat-label">Completed projects</span></div>
            <div className="stat-item"><span className="stat-num">450K+</span><span className="stat-label">m² designed</span></div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="wrap">
          <div className="section-label anim">What we do</div>
          <h2 className="section-title anim anim-d1">Full-cycle MEPF<br />engineering solutions</h2>
          <p className="section-sub anim anim-d2">From initial design through final commissioning — we handle all four building service disciplines under one contract.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1">
              <div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 0L9 5m3 3l3-3"/><rect x="4" y="10" width="16" height="10" rx="2"/><line x1="8" y1="14" x2="8" y2="18"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="16" y1="14" x2="16" y2="18"/></svg></div>
              <h3>Mechanical</h3>
              <p>HVAC systems, ventilation, heating and cooling. Climate control engineered for efficiency and comfort.</p>
            </div>
            <div className="srv-card anim anim-d2">
              <div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/></svg></div>
              <h3>Electrical</h3>
              <p>Power distribution, lighting design, low-voltage and automation systems for modern buildings.</p>
            </div>
            <div className="srv-card anim anim-d3">
              <div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 20V10a6 6 0 1112 0v10"/><line x1="4" y1="20" x2="20" y2="20"/><path d="M12 10v6"/></svg></div>
              <h3>Plumbing</h3>
              <p>Water supply, drainage, sewerage and irrigation systems. Designed for reliability and regulatory compliance.</p>
            </div>
            <div className="srv-card anim anim-d4">
              <div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L8 8h3v6H8l4 6 4-6h-3V8h3L12 2z"/></svg></div>
              <h3>Fire protection</h3>
              <p>Fire alarm systems, automatic sprinklers, evacuation systems, fire ventilation and automation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section value" id="about">
        <div className="wrap">
          <div className="value-grid">
            <div className="value-left">
              <div className="section-label anim">Why ARES</div>
              <p className="value-statement anim anim-d1">We don&apos;t sell engineering.<br />We sell <em>project economics</em>.</p>
              <p className="section-sub anim anim-d2">One contractor instead of five to seven. Unified procurement. Zero system conflicts. Predictable timelines. Lower total cost of ownership.</p>
            </div>
            <div className="value-cards">
              <div className="val-card anim anim-d1"><h4>Direct cost savings</h4><p>Single contract eliminates coordination overhead. Unified purchasing reduces material costs. Early conflict prevention saves rework budgets.</p></div>
              <div className="val-card anim anim-d2"><h4>Operational efficiency</h4><p>Faster project delivery. Accelerated capital turnover. Reduced management resources. We handle regulatory authorities and quality control.</p></div>
              <div className="val-card anim anim-d3"><h4>Strategic impact</h4><p>Higher property value through better engineering. Brand protection for developers. Risk reduction — legal, reputational, and technical. Lower post-commissioning costs.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="wrap">
          <div className="section-label anim">Selected projects</div>
          <h2 className="section-title anim anim-d1">From design to<br />commissioning</h2>
          <p className="section-sub anim anim-d2">Residential complexes, commercial spaces, public buildings — across Tbilisi, Batumi, Kutaisi and beyond.</p>
          <div className="projects-grid">
            {[
              { name: 'Thalasa Group', location: 'Batumi — Residential complex', tags: ['Fire ventilation', 'Electrical', 'Plumbing'] },
              { name: 'M1 Group Kutaisi', location: 'Kutaisi — Residential & Commercial', tags: ['Fire ventilation', 'Fire alarm', 'Automation'] },
              { name: 'Archi Iasamnebi', location: 'Tbilisi — Residential complex', tags: ['Fire alarm', 'Sprinkler'] },
            ].map((proj, i) => (
              <div className={`proj-card anim anim-d${i + 1}`} key={proj.name}>
                <div className="proj-img">
                  <div className="proj-overlay"></div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text3)', fontSize: '12px' }}>Project photo</div>
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

      <section className="section" id="partners">
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
        <div className="wrap">
          <div className="cta-box anim">
            <h2>Ready to start your next project?</h2>
            <p>Get a consultation and preliminary cost estimate for your development</p>
            <div className="cta-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Email or phone" />
              <input type="text" placeholder="Project type" />
              <button type="submit">Send request</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div>
              <p className="footer-desc">Integrated MEPF engineering solutions for developers and construction companies across Georgia. From design to commissioning.</p>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <a href="/services">Services</a>
              <a href="/about">About Us</a>
              <a href="/projects">Projects</a>
              <a href="/partners">Partners</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="/services">Mechanical</a>
              <a href="/services">Electrical</a>
              <a href="/services">Plumbing</a>
              <a href="/services">Fire protection</a>
            </div>
            <div className="footer-col footer-contact">
              <h4>Contact</h4>
              <p><a href="mailto:info@ares.ge">info@ares.ge</a></p>
              <p><a href="tel:+995595396139">+995 595 39 61 39</a></p>
              <p>8 S. Virsaladze Street<br />Tbilisi 0108, Georgia</p>
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
