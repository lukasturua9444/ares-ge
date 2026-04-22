'use client';
import { useEffect, useState } from 'react';

export default function ProjectsPageKa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'პროექტები | ARES';
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
  }, []);

  const projects = [
    { name: 'Thalasa Group', location: 'ბათუმი', type: 'საცხოვრებელი კომპლექსი', img: '/images/proj-thalasa.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ელექტრული', 'წყლის დრენაჟი', 'კანალიზაცია'] },
    { name: 'AIA Plaza', location: 'ბათუმი', type: 'საცხოვრებელი კომპლექსი', img: '/images/proj-aia-plaza.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ელექტრული', 'წყლის დრენაჟი', 'კანალიზაცია'] },
    { name: 'Wondernet Express Investment Group', location: 'ბათუმი', type: 'ინდუსტრიული ობიექტი', img: '/images/proj-wondernet.jpg', tags: ['სპრინკლერის დიაგნოსტიკა', 'ხანძარსაწინააღმდეგო სიგნალიზაცია'] },
    { name: 'Riverside Balakhvani Kutaisi', location: 'ქუთაისი', type: 'საცხოვრებელი კომპლექსი', img: '/images/proj-riverside.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ელექტრული'] },
    { name: 'M1 Group Kutaisi', location: 'ქუთაისი', type: 'საცხოვრებელი და კომერციული კომპლექსი', img: '/images/proj-m1-group.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ხმის სისტემა'] },
    { name: 'Shopping Mall in Kutaisi', location: 'ქუთაისი', type: 'კომერციული ობიექტი', img: '/images/proj-shopping-mall.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ხმის სისტემა'] },
    { name: 'Casio Development', location: 'თბილისი', type: 'საცხოვრებელი კომპლექსი', img: '/images/proj-casio.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ხმის სისტემა'] },
    { name: 'Archi Iasamnebi', location: 'თბილისი', type: 'საცხოვრებელი კომპლექსი', img: '/images/proj-archi.jpg', tags: ['ხანძარსაწინააღმდეგო სიგნალიზაცია', 'სპრინკლერი'] },
    { name: 'Compact Mukhiani', location: 'თბილისი', type: 'საცხოვრებელი კომპლექსი', img: '/images/proj-compact.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ელექტრული'] },
    { name: 'Baustar Rustavi', location: 'რუსთავი', type: 'საცხოვრებელი კომპლექსი', img: '/images/proj-baustar.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ელექტრული'] },
    { name: 'Kvareli School', location: 'ყვარელი', type: 'საჯარო შენობა', img: null, tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ელექტრული'] },
    { name: 'Vashlovani School and Campus', location: 'ვაშლოვანი', type: 'საჯარო შენობა', img: '/images/proj-vashlovani.jpg', tags: ['ხანძარსაწინააღმდეგო ვენტილაცია', 'ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ევაკუაცია', 'სპრინკლერი', 'ავტომატიზაცია', 'ელექტრული'] },
  ];

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/ka" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="/ka/services" onClick={handleNavClick}>სერვისები</a>
            <a href="/ka/about" onClick={handleNavClick}>ჩვენ შესახებ</a>
            <a href="/ka/projects" className="active-link" onClick={handleNavClick}>პროექტები</a>
            <a href="/ka/partners" onClick={handleNavClick}>პარტნიორები</a>
            <a href="/ka/certifications" onClick={handleNavClick}>სერტიფიკატები</a>
            <a href="/ka/contact" onClick={handleNavClick}>კონტაქტი</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw"><a href="/ka/projects" className="active">GE</a><a href="/projects">EN</a></div>
            <a href="/ka/contact" className="nav-cta">დაგვიკავშირდით</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="მენიუს გადართვა"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">პროექტები</div>
          <h1 className="page-title anim anim-d1">პროექტირებიდან<br /><em>ექსპლუატაციაში გაშვებამდე</em></h1>
          <p className="section-sub anim anim-d2">საცხოვრებელი კომპლექსები, კომერციული სივრცეები, საჯარო შენობები — თბილისში, ბათუმში, ქუთაისში და მის მიღმა.</p>
        </div>
      </section>

      <section style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="stats-grid anim" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="stat-item"><span className="stat-num">20+</span><span className="stat-label">დასრულებული პროექტი</span></div>
            <div className="stat-item"><span className="stat-num">450K+</span><span className="stat-label">დაპროექტებული მ²</span></div>
            <div className="stat-item"><span className="stat-num">6</span><span className="stat-label">ქალაქი საქართველოში</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-label anim">შერჩეული პროექტები</div>
          <h2 className="section-title anim anim-d1">ჩვენი პორტფოლიო</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '48px' }}>
            {projects.map((proj, i) => (
              <div key={proj.name} className={"proj-card anim anim-d" + ((i % 4) + 1)}>
                <div className="proj-img">
                  {proj.img ? (
                    <img src={proj.img} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)', color: 'var(--text3)', fontSize: '12px' }}>მალე</div>
                  )}
                  <div className="proj-overlay"></div>
                </div>
                <div className="proj-body">
                  <h3>{proj.name}</h3>
                  <p className="proj-meta">{proj.location} — {proj.type}</p>
                  <div className="proj-tags">
                    {proj.tags.map((tag) => (<span className="proj-tag" key={tag}>{tag}</span>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label anim center">გეოგრაფია</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>აქტიური საქართველოს მასშტაბით</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto 48px' }}>ვახორციელებთ პროექტებს ყველგან, სადაც საჭიროა.</p>
          <div className="certs-grid anim anim-d3">
            {['თბილისი', 'ბათუმი', 'ქუთაისი', 'რუსთავი', 'ყვარელი', 'ვაშლოვანი'].map((city) => (
              <div className="cert-item" key={city}><span>{city}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>გაქვთ მიმდინარე პროექტი?</h2>
            <p>მიიღეთ კონსულტაცია და წინასწარი ხარჯთაღრიცხვა თქვენი პროექტისთვის</p>
            <div style={{ marginTop: '24px' }}><a href="/ka/contact" className="btn-primary" style={{ color: 'var(--black)', textDecoration: 'none' }}>მოითხოვეთ კონსულტაცია</a></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div><div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div><p className="footer-desc">ინტეგრირებული MEPF საინჟინრო გადაწყვეტილებები დეველოპერებისა და სამშენებლო კომპანიებისთვის. პროექტირებიდან ექსპლუატაციაში გაშვებამდე.</p></div>
            <div className="footer-col"><h4>ნავიგაცია</h4><a href="/ka/services">სერვისები</a><a href="/ka/about">ჩვენ შესახებ</a><a href="/ka/projects">პროექტები</a><a href="/ka/partners">პარტნიორები</a><a href="/ka/contact">კონტაქტი</a></div>
            <div className="footer-col"><h4>სერვისები</h4><a href="/ka/services">მექანიკური</a><a href="/ka/services">ელექტრული</a><a href="/ka/services">სანტექნიკა</a><a href="/ka/services">ხანძარსაწინააღმდეგო</a></div>
            <div className="footer-col footer-contact"><h4>კონტაქტი</h4><p><a href="mailto:info@ares.ge">info@ares.ge</a></p><p><a href="tel:+995595396139">+995 595 39 61 39</a></p><p>ს. ვირსალაძის ქ. 8<br />თბილისი 0108, საქართველო</p></div>
          </div>
          <div className="footer-bottom"><p>&copy; 2026 ARES. ყველა უფლება დაცულია.</p><p>MEPF საინჟინრო გადაწყვეტილებები</p></div>
        </div>
      </footer>
    </>
  );
}
