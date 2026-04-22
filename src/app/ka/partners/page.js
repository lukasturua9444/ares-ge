'use client';
import { useEffect, useState } from 'react';

export default function PartnersPageKa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'პარტნიორები | ARES';
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

  const partners = [
    { name: 'Thalasa Group', type: 'დეველოპერი', location: 'ბათუმი' },
    { name: 'AIA Plaza', type: 'დეველოპერი', location: 'ბათუმი' },
    { name: 'Wondernet Express Investment Group', type: 'ინდუსტრიული', location: 'ბათუმი' },
    { name: 'Riverside Balakhvani', type: 'დეველოპერი', location: 'ქუთაისი' },
    { name: 'M1 Group', type: 'დეველოპერი', location: 'ქუთაისი' },
    { name: 'Casio Development', type: 'დეველოპერი', location: 'თბილისი' },
    { name: 'Archi', type: 'დეველოპერი', location: 'თბილისი' },
    { name: 'Compact Mukhiani', type: 'დეველოპერი', location: 'თბილისი' },
    { name: 'Baustar', type: 'დეველოპერი', location: 'რუსთავი' },
  ];

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/ka" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="/ka/services" onClick={handleNavClick}>სერვისები</a>
            <a href="/ka/about" onClick={handleNavClick}>ჩვენ შესახებ</a>
            <a href="/ka/projects" onClick={handleNavClick}>პროექტები</a>
            <a href="/ka/partners" className="active-link" onClick={handleNavClick}>პარტნიორები</a>
            <a href="/ka/certifications" onClick={handleNavClick}>სერტიფიკატები</a>
            <a href="/ka/contact" onClick={handleNavClick}>კონტაქტი</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw"><a href="/ka/partners" className="active">GE</a><a href="/partners">EN</a></div>
            <a href="/ka/contact" className="nav-cta">დაგვიკავშირდით</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="მენიუს გადართვა"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">პარტნიორები</div>
          <h1 className="page-title anim anim-d1">კომპანიები, რომლებიც<br /><em>ენდობიან ARES-ს</em></h1>
          <p className="section-sub anim anim-d2">ვთანამშრომლობთ წამყვან დეველოპერებთან და სამშენებლო კომპანიებთან საქართველოს მასშტაბით.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-label anim">ჩვენი კლიენტები</div>
          <h2 className="section-title anim anim-d1">სამშენებლო პარტნიორები</h2>
          <p className="section-sub anim anim-d2">დეველოპერები და სამშენებლო კომპანიები, რომლებმაც MEPF ინჟინერია ARES-ს ანდეს.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }}>
            {partners.map((partner, i) => (
              <div key={partner.name} className={`srv-card anim anim-d${(i % 4) + 1}`} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--dark)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--text3)', fontSize: '11px', border: '1px solid var(--border)' }}>ლოგო</div>
                <h3 style={{ fontSize: '18px' }}>{partner.name}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text2)', marginTop: '4px' }}>{partner.type} — {partner.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label anim center">რატომ უნდა ვითანამშრომლო ARES-თან</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>ინტეგრირებული უპირატესობა</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto 48px' }}>ერთი კონტრაქტორი ყველა MEPF მიმართულებისთვის. ერთიანი პასუხისმგებლობის წერტილი.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1"><h3>ერთიანი კონტრაქტი</h3><p>ერთი კონტრაქტორი ხუთი-შვიდის ნაცვლად. გამარტივებული პროექტის მართვა და მკაფიო ანგარიშვალდებულება.</p></div>
            <div className="srv-card anim anim-d2"><h3>ხარჯთეფექტურობა</h3><p>ერთიანი შესყიდვები ამცირებს მასალის ღირებულებას. კონფლიქტების ადრეული პრევენცია ზოგავს გადაკეთების ბიუჯეტს.</p></div>
            <div className="srv-card anim anim-d3"><h3>ხარისხის უზრუნველყოფა</h3><p>ჩვენ ვაწარმოებთ მუშაობას მარეგულირებელ ორგანოებთან, ტესტირებას, ექსპლუატაციაში გაშვებასა და საბოლოო ჩაბარების დოკუმენტაციას.</p></div>
            <div className="srv-card anim anim-d4"><h3>პროგნოზირებადი ვადები</h3><p>სისტემური კოორდინაცია სამშენებლო გრაფიკთან. ნულოვანი სისტემური კონფლიქტები მიმართულებებს შორის.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>გახდით პარტნიორი</h2>
            <p>განვიხილოთ როგორ შეიძლება დაგეხმაროთ ARES თქვენს შემდეგ სამშენებლო პროექტში</p>
            <div style={{ marginTop: '24px' }}><a href="/ka/contact" className="btn-primary" style={{ color: 'var(--black)', textDecoration: 'none' }}>დაგვიკავშირდით</a></div>
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
