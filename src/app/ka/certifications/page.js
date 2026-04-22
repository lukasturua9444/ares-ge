'use client';
import { useEffect, useState } from 'react';

export default function CertificationsPageKa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'სერტიფიკატები | ARES';
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

  const certifications = [
    { name: 'ISO 9001', desc: 'ხარისხის მართვის სისტემები — საერთაშორისო სტანდარტი, რომელიც უზრუნველყოფს თანმიმდევრულ მიწოდებას და საინჟინრო პროცესების უწყვეტ გაუმჯობესებას.', category: 'ხარისხის მართვა' },
    { name: 'NFPA', desc: 'ხანძარსაწინააღმდეგო დაცვის ეროვნული ასოციაცია — საერთაშორისო კოდექსები და სტანდარტები ხანძრისგან დაცვის, სიცოცხლის უსაფრთხოებისა და შენობებში ელექტროუსაფრთხოებისთვის.', category: 'ხანძარსაწინააღმდეგო' },
    { name: 'IEC', desc: 'საერთაშორისო ელექტროტექნიკური კომისია — გლობალური სტანდარტები ელექტრული, ელექტრონული და მასთან დაკავშირებული ტექნოლოგიებისთვის, რომლებიც უზრუნველყოფენ უსაფრთხოებასა და ეფექტურობას.', category: 'ელექტრული' },
    { name: 'ASHRAE', desc: 'გათბობის, გაგრილებისა და კონდიცირების ინჟინერების ამერიკული საზოგადოება — სტანდარტები HVAC პროექტირებისთვის, ენერგოეფექტურობისა და შიდა ჰაერის ხარისხისთვის.', category: 'HVAC' },
    { name: 'EN Standards', desc: 'ევროპული ნორმები — ჰარმონიზებული ტექნიკური სტანდარტები სამშენებლო, ელექტრული, მექანიკური და ხანძარსაწინააღმდეგო სისტემებისთვის ევროპის მასშტაბით.', category: 'ზოგადი ინჟინერია' },
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
            <a href="/ka/partners" onClick={handleNavClick}>პარტნიორები</a>
            <a href="/ka/certifications" className="active-link" onClick={handleNavClick}>სერტიფიკატები</a>
            <a href="/ka/contact" onClick={handleNavClick}>კონტაქტი</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw"><a href="/ka/certifications" className="active">GE</a><a href="/certifications">EN</a></div>
            <a href="/ka/contact" className="nav-cta">დაგვიკავშირდით</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="მენიუს გადართვა"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">სერტიფიკატები</div>
          <h1 className="page-title anim anim-d1">დაფუძნებული საერთაშორისო<br /><em>სტანდარტებზე</em></h1>
          <p className="section-sub anim anim-d2">ჩვენი საინჟინრო გადაწყვეტილებები საერთაშორისო სტანდარტებსა და პროფესიონალურ სახელმძღვანელო პრინციპებს მიჰყვება.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-label anim">სტანდარტები და კვალიფიკაცია</div>
          <h2 className="section-title anim anim-d1">საინჟინრო სტანდარტები, რომლებსაც ვიცავთ</h2>
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
          <div className="section-label anim center">ჩვენი ვალდებულება</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>შესაბამისობა ყველა ეტაპზე</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto 48px' }}>პროექტირებიდან ექსპლუატაციაში გაშვებამდე, ყოველი სისტემა აკმაყოფილებს ან აღემატება საერთაშორისო მოთხოვნებს.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1"><h3>პროექტირების ეტაპი</h3><p>ყველა საინჟინრო პროექტი მიჰყვება საერთაშორისო კოდექსებსა და ადგილობრივ მარეგულირებელ მოთხოვნებს პირველივე დღიდან.</p></div>
            <div className="srv-card anim anim-d2"><h3>მონტაჟი</h3><p>მონტაჟის პროცედურები მიჰყვება მწარმოებლის სპეციფიკაციებს და ყოველი მიმართულებისთვის მოქმედ სტანდარტებს.</p></div>
            <div className="srv-card anim anim-d3"><h3>ტესტირება</h3><p>სისტემის მუშაობის შემოწმება და ფუნქციური ტესტირება საერთაშორისო ექსპლუატაციაში გაშვების პროტოკოლების შესაბამისად.</p></div>
            <div className="srv-card anim anim-d4"><h3>ექსპლუატაციაში გაშვება</h3><p>სისტემის გაშვება, მუშაობის დაბალანსება და საბოლოო ჩაბარება — ყოველი სისტემა ვალიდირებული და ოპერირებისთვის მზად მიწოდებული.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>გჭირდებათ სერტიფიცირებული MEPF ინჟინერია?</h2>
            <p>ჩვენი გადაწყვეტილებები აკმაყოფილებს საერთაშორისო სტანდარტებს ხარისხის, უსაფრთხოებისა და მუშაობის მხრივ</p>
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
