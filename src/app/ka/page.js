'use client';
import { useEffect, useState } from 'react';

export default function HomeKa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'მთავარი | ARES';
  }, []);

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
      navLinks.querySelectorAll('a').forEach((link) => {
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
          <a href="/ka" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="/ka/services" onClick={handleNavClick}>სერვისები</a>
            <a href="/ka/about" onClick={handleNavClick}>ჩვენ შესახებ</a>
            <a href="/ka/projects" onClick={handleNavClick}>პროექტები</a>
            <a href="/ka/partners" onClick={handleNavClick}>პარტნიორები</a>
            <a href="/ka/certifications" onClick={handleNavClick}>სერტიფიკატები</a>
            <a href="/ka/contact" onClick={handleNavClick}>კონტაქტი</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw"><a href="/ka" className="active">GE</a><a href="/">EN</a></div>
            <a href="/ka/contact" className="nav-cta">დაგვიკავშირდით</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="მენიუს გადართვა"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg"><div className="hero-grid-pattern"></div></div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-label">MEPF ინჟინერია</div>
            <h1><em>უხილავი სისტემები</em>, რომლებიც შენობებს ამუშავებს</h1>
            <p className="hero-sub">ინტეგრირებული მექანიკური, ელექტრული, სანტექნიკური და ხანძარსაწინააღმდეგო გადაწყვეტილებები დეველოპერებისა და სამშენებლო კომპანიებისთვის.</p>
            <div className="hero-btns">
              <a href="/ka/contact" className="btn-primary" style={{ textDecoration: 'none' }}>მოითხოვეთ კონსულტაცია</a>
              <a href="/ka/projects" className="btn-outline">პროექტების ნახვა</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-visual"><img src="/images/ARES_White_Vertical.png" alt="ARES Logo" /></div>
            <div className="hero-badge"><div className="num">450K+</div><div className="lab">დაპროექტებული მ²</div></div>
          </div>
        </div>
      </section>

      <section className="stats"><div className="wrap"><div className="stats-grid anim">
        <div className="stat-item"><span className="stat-num">8+</span><span className="stat-label">წლიანი გამოცდილება</span></div>
        <div className="stat-item"><span className="stat-num">20+</span><span className="stat-label">დასრულებული პროექტი</span></div>
        <div className="stat-item"><span className="stat-num">450K+</span><span className="stat-label">დაპროექტებული მ²</span></div>
      </div></div></section>

      <section className="section services" id="services">
        <div className="wrap">
          <div className="section-label anim">რას ვაკეთებთ</div>
          <h2 className="section-title anim anim-d1">სრული ციკლის MEPF<br />საინჟინრო გადაწყვეტილებები</h2>
          <p className="section-sub anim anim-d2">საწყისი პროექტირებიდან საბოლოო ექსპლუატაციაში გაშვებამდე — ჩვენ ვმართავთ შენობის ოთხივე საინჟინრო მიმართულებას ერთი კონტრაქტით.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1"><div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M12 2v6m0 0L9 5m3 3l3-3"/><rect x="4" y="10" width="16" height="10" rx="2"/></svg></div><h3>მექანიკური სისტემები</h3><p>HVAC სისტემები, ვენტილაცია, გათბობა და გაგრილება. კლიმატის კონტროლი ენერგოეფექტურობისა და კომფორტისთვის.</p></div>
            <div className="srv-card anim anim-d2"><div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83"/></svg></div><h3>ელექტრული სისტემები</h3><p>ელექტროენერგიის განაწილება, განათების სისტემები, დაბალი ძაბვისა და ავტომატიზაციის სისტემები თანამედროვე შენობებისთვის.</p></div>
            <div className="srv-card anim anim-d3"><div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M6 20V10a6 6 0 1112 0v10"/><line x1="4" y1="20" x2="20" y2="20"/></svg></div><h3>სანტექნიკა</h3><p>წყალმომარაგების, დრენაჟისა და კანალიზაციის სისტემები. დაპროექტებული საიმედოობისა და სტანდარტებთან შესაბამისობისთვის.</p></div>
            <div className="srv-card anim anim-d4"><div className="srv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M12 2L8 8h3v6H8l4 6 4-6h-3V8h3L12 2z"/></svg></div><h3>ხანძარსაწინააღმდეგო სისტემები</h3><p>ხანძარსაწინააღმდეგო სიგნალიზაცია, ავტომატური სპრინკლერები, ევაკუაციის სისტემები, ხანძარსაწინააღმდეგო ვენტილაცია და ავტომატიზაცია.</p></div>
          </div>
        </div>
      </section>

      <section className="section value" id="about">
        <div className="wrap"><div className="value-grid">
          <div className="value-left">
            <div className="section-label anim">რატომ ARES</div>
            <p className="value-statement anim anim-d1">ჩვენ არ ვყიდით მხოლოდ ინჟინერიას.<br />ჩვენ ვყიდით <em>პროექტის ეკონომიკას</em>.</p>
            <p className="section-sub anim anim-d2">ერთი კონტრაქტორი ხუთი-შვიდის ნაცვლად. ერთიანი შესყიდვები. ნულოვანი სისტემური კონფლიქტები. პროგნოზირებადი ვადები. შემცირებული ჯამური ღირებულება.</p>
          </div>
          <div className="value-cards">
            <div className="val-card anim anim-d1"><h4>პირდაპირი ხარჯების დაზოგვა</h4><p>ერთიანი კონტრაქტი აღმოფხვრის პროექტის მართვის ზედნადებ ხარჯებს. ერთიანი შესყიდვები ამცირებს მასალის ღირებულებას.</p></div>
            <div className="val-card anim anim-d2"><h4>ოპერაციული ეფექტურობა</h4><p>პროექტის სწრაფი ჩაბარება. დაჩქარებული კაპიტალის ბრუნვა. მართვის რესურსების შემცირება.</p></div>
            <div className="val-card anim anim-d3"><h4>სტრატეგიული გავლენა</h4><p>უკეთესი ინჟინერიით გაზრდილი უძრავი ქონების ღირებულება. დეველოპერების ბრენდის გაძლიერება. რისკის შემცირება.</p></div>
          </div>
        </div></div>
      </section>

      <section className="section projects" id="projects">
        <div className="wrap">
          <div className="section-label anim">შერჩეული პროექტები</div>
          <h2 className="section-title anim anim-d1">პროექტირებიდან<br />ექსპლუატაციაში გაშვებამდე</h2>
          <p className="section-sub anim anim-d2">საცხოვრებელი კომპლექსები, კომერციული სივრცეები, საჯარო შენობები — თბილისში, ბათუმში, ქუთაისში და მის მიღმა.</p>
          <div className="projects-grid">
            {[
              { name: 'Thalasa Group', location: 'ბათუმი — საცხოვრებელი კომპლექსი', img: '/images/proj-thalasa.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ელექტრული', 'სანტექნიკა'] },
              { name: 'M1 Group Kutaisi', location: 'ქუთაისი — საცხოვრებელი და კომერციული', img: '/images/proj-m1-group.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ავტომატიზაცია'] },
              { name: 'Archi Iasamnebi', location: 'თბილისი — საცხოვრებელი კომპლექსი', img: '/images/proj-archi.jpg', tags: ['ხანძარსაწინააღმდეგო სიგნალიზაცია', 'სპრინკლერი'] },
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
          <div className="view-all anim"><a href="/ka/projects" className="btn-outline">ყველა პროექტის ნახვა</a></div>
        </div>
      </section>

      <section className="section" id="certifications">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label anim center">სტანდარტები და კვალიფიკაცია</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>დაფუძნებული საერთაშორისო სტანდარტებზე</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto' }}>ჩვენი საინჟინრო გადაწყვეტილებები ეფუძნება საერთაშორისო სტანდარტებსა და პროფესიონალურ მოთხოვნებს.</p>
          <div className="certs-grid anim anim-d3">
            {['ISO 9001', 'NFPA', 'IEC', 'ASHRAE', 'EN Standards'].map((cert) => (
              <div className="cert-item" key={cert}><span>{cert}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="wrap"><div className="cta-box anim">
          <h2>მზად ხართ შემდეგი პროექტის დასაწყებად?</h2>
          <p>მიიღეთ კონსულტაცია და წინასწარი ხარჯთაღრიცხვა თქვენი პროექტისთვის</p>
          <div className="cta-form">
            <input type="text" placeholder="თქვენი სახელი" />
            <input type="email" placeholder="ელ. ფოსტა ან ტელეფონი" />
            <input type="text" placeholder="პროექტის ტიპი" />
            <button type="submit">გამოგზავნეთ მოთხოვნა</button>
          </div>
        </div></div>
      </section>

      <footer><div className="wrap">
        <div className="footer-grid">
          <div><div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div><p className="footer-desc">ინტეგრირებული MEPF საინჟინრო გადაწყვეტილებები დეველოპერებისა და სამშენებლო კომპანიებისთვის. პროექტირებიდან ექსპლუატაციაში გაშვებამდე.</p></div>
          <div className="footer-col"><h4>ნავიგაცია</h4><a href="/ka/services">სერვისები</a><a href="/ka/about">ჩვენ შესახებ</a><a href="/ka/projects">პროექტები</a><a href="/ka/partners">პარტნიორები</a><a href="/ka/contact">კონტაქტი</a></div>
          <div className="footer-col"><h4>სერვისები</h4><a href="/ka/services">მექანიკური</a><a href="/ka/services">ელექტრული</a><a href="/ka/services">სანტექნიკა</a><a href="/ka/services">ხანძარსაწინააღმდეგო</a></div>
          <div className="footer-col footer-contact"><h4>კონტაქტი</h4><p><a href="mailto:info@ares.ge">info@ares.ge</a></p><p><a href="tel:+995595396139">+995 595 39 61 39</a></p><p>ს. ვირსალაძის ქ. 8<br />თბილისი 0108, საქართველო</p></div>
        </div>
        <div className="footer-bottom"><p>&copy; 2026 ARES. ყველა უფლება დაცულია.</p><p>MEPF საინჟინრო გადაწყვეტილებები</p></div>
      </div></footer>
    </>
  );
}
