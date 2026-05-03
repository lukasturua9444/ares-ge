'use client';
import { useEffect, useState } from 'react';

export default function AboutPageKa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'ჩვენ შესახებ | ARES';
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
          <a href="/ka" className="nav-logo">
            <img src="/images/ARES_White_Horizontal.png" alt="ARES" />
          </a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="/ka/services" onClick={handleNavClick}>სერვისები</a>
            <a href="/ka/about" className="active-link" onClick={handleNavClick}>ჩვენ შესახებ</a>
            <a href="/ka/projects" onClick={handleNavClick}>პროექტები</a>
            <a href="/ka/partners" onClick={handleNavClick}>პარტნიორები</a>
            <a href="/ka/certifications" onClick={handleNavClick}>სერტიფიკატები</a>
            <a href="/ka/contact" onClick={handleNavClick}>კონტაქტი</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw">
              <a href="/ka/about" className="active">GE</a>
              <a href="/about">EN</a>
            </div>
            <a href="/ka/contact" className="nav-cta">დაგვიკავშირდით</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="მენიუს გადართვა"><span></span><span></span><span></span></button>
        </div>
      </nav>

      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-photo" />
        <div className="about-hero-overlay" />
        <div className="wrap about-hero-inner">
          <div className="section-label anim">ჩვენ შესახებ</div>
          <h1 className="page-title anim anim-d1">საინჟინრო სიზუსტე.<br /><em>სისტემატური აღსრულება.</em></h1>
          <p className="section-sub anim anim-d2">ARES არის საინჟინრო კომპანია, რომელიც სპეციალიზირებულია სამშენებლო პროექტებისთვის MEPF სისტემების პროექტირებასა და მონტაჟში.</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-left anim">
              <div className="section-label">ვინ ვართ ჩვენ</div>
              <h2 className="section-title">დაფუძნებული 2024 წელს.<br />გამოცდილება 2017 წლიდან.</h2>
              <p className="section-sub" style={{ maxWidth: '100%' }}>ARES დაარსდა 2024 წელს, ჩვენი გუნდი კი MEPF საინჟინრო გადაწყვეტილებებს 2017 წლიდან ახორციელებს. ჩვენი მიზანია უზრუნველვყოთ საინჟინრო სისტემების სწორი ინტეგრირება პროექტში — ტექნიკურად სწორი, ეკონომიკურად ეფექტური და სამშენებლო გრაფიკთან შესაბამისი.</p>
            </div>
            <div className="about-right anim anim-d2">
              <div className="stats-grid" style={{ maxWidth: '100%' }}>
                <div className="stat-item"><span className="stat-num">8+</span><span className="stat-label">წლიანი გამოცდილება</span></div>
                <div className="stat-item"><span className="stat-num">20+</span><span className="stat-label">დასრულებული პროექტი</span></div>
                <div className="stat-item"><span className="stat-num">450K+</span><span className="stat-label">დაპროექტებული მ²</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section services">
        <div className="wrap">
          <div className="section-label anim">რას ვაკეთებთ</div>
          <h2 className="section-title anim anim-d1">MEPF ინჟინერიის სრული ციკლი</h2>
          <p className="section-sub anim anim-d2">ინტეგრირებული MEPF სისტემების პროექტირება, მონტაჟი და ექსპლუატაციაში გაშვება სამშენებლო პროექტებისთვის.</p>
          <div className="value-grid" style={{ marginTop: '48px' }}>
            <div className="value-cards">
              <div className="val-card anim anim-d1"><h4>ტექნიკური სიზუსტე</h4><p>საინჟინრო გადაწყვეტილებები საერთაშორისო სტანდარტების საფუძველზე, რაც უზრუნველყოფს ყველა სისტემის უმაღლესი ხარისხის სტანდარტებით დაპროექტებასა და მონტაჟს.</p></div>
              <div className="val-card anim anim-d2"><h4>სისტემური კოორდინაცია</h4><p>სტრუქტურირებული სამუშაო პროცესი, შეთანხმებული სამშენებლო გრაფიკთან, რაც აღმოფხვრის კონფლიქტებს მიმართულებებს შორის და თავიდან აცილებს ძვირადღირებულ გადაკეთებას.</p></div>
              <div className="val-card anim anim-d3"><h4>სტანდარტებთან შესაბამისობა</h4><p>ყველა საინჟინრო გადაწყვეტილება ეფუძნება ISO 9001, NFPA, IEC, ASHRAE და EN Standards სტანდარტებს საიმედოობისა და რეგულაციებთან შესაბამისობისთვის.</p></div>
            </div>
            <div className="value-cards">
              <div className="val-card anim anim-d1"><h4>ვისთვის ვმუშაობთ</h4><p>დეველოპერები, სამშენებლო კომპანიები და პროექტის დაინტერესებული მხარეები, რომლებიც საცხოვრებელ, კომერციულ და შერეული დანიშნულების შენობებს აშენებენ საქართველოს მასშტაბით.</p></div>
              <div className="val-card anim anim-d2"><h4>ჩვენი გეოგრაფია</h4><p>აქტიური საქართველოს მასშტაბით — თბილისი, ბათუმი, ქუთაისი, რუსთავი, ყვარელი და ვაშლოვანი — ვახორციელებთ პროექტებს ყველგან, სადაც საჭიროა.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section">
        <div className="wrap">
          <div className="section-label anim">ვისთვის ვმუშაობთ</div>
          <h2 className="section-title anim anim-d1">შენობების ტიპები</h2>
          <p className="section-sub anim anim-d2">ჩვენ ვახორციელებთ MEPF გადაწყვეტილებებს სამშენებლო პროექტების ფართო სპექტრისთვის.</p>
          <div className="services-grid" style={{ marginTop: '48px' }}>
            <div className="srv-card anim anim-d1"><h3>საცხოვრებელი კომპლექსები</h3><p>მრავალბინიანი საცხოვრებელი შენობები სრული MEPF სისტემებითა და ჭკვიანი სახლის ინტეგრაციით.</p></div>
            <div className="srv-card anim anim-d2"><h3>კომერციული ობიექტები</h3><p>საოფისე შენობები, სავაჭრო ცენტრები, სასტუმროები და ბიზნეს-პარკები, რომლებიც საჭიროებენ HVAC-ს, ელექტრული ენერგიის განაწილებასა და ხანძარსაწინააღმდეგო დაცვას.</p></div>
            <div className="srv-card anim anim-d3"><h3>შერეული დანიშნულების შენობები</h3><p>პროექტები, რომლებიც აერთიანებენ საცხოვრებელ, კომერციულ და სავაჭრო ფუნქციებს ერთიანი საინჟინრო გადაწყვეტილებით.</p></div>
            <div className="srv-card anim anim-d4"><h3>საჯარო და ტექნიკური ნაგებობები</h3><p>სკოლები, საგანმანათლებლო დაწესებულებები, ინდუსტრიული შენობები, საწყობები და სპეციალიზებული ტექნიკური ნაგებობები.</p></div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE AT EVERY STAGE */}
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

      {/* CTA */}
      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>მზად ხართ შემდეგი პროექტის დასაწყებად?</h2>
            <p>მიიღეთ კონსულტაცია და წინასწარი ხარჯთაღრიცხვა თქვენი პროექტისთვის</p>
            <div style={{ marginTop: '24px' }}><a href="/ka/contact" className="btn-primary" style={{ color: 'var(--black)', textDecoration: 'none' }}>დაგვიკავშირდით</a></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></div>
              <p className="footer-desc">ინტეგრირებული MEPF საინჟინრო გადაწყვეტილებები დეველოპერებისა და სამშენებლო კომპანიებისთვის. პროექტირებიდან ექსპლუატაციაში გაშვებამდე.</p>
            </div>
            <div className="footer-col">
              <h4>ნავიგაცია</h4>
              <a href="/ka/services">სერვისები</a><a href="/ka/about">ჩვენ შესახებ</a><a href="/ka/projects">პროექტები</a><a href="/ka/partners">პარტნიორები</a><a href="/ka/contact">კონტაქტი</a>
            </div>
            <div className="footer-col">
              <h4>სერვისები</h4>
              <a href="/ka/services">მექანიკური</a><a href="/ka/services">ელექტრული</a><a href="/ka/services">სანტექნიკა</a><a href="/ka/services">ხანძარსაწინააღმდეგო</a>
            </div>
            <div className="footer-col footer-contact">
              <h4>კონტაქტი</h4>
              <p><a href="mailto:info@ares.ge">info@ares.ge</a></p>
              <p><a href="tel:+995595396139">+995 595 39 61 39</a></p>
              <p>ს. ვირსალაძის ქ. 8<br />თბილისი 0108, საქართველო</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 ARES. ყველა უფლება დაცულია.</p>
            <p>MEPF საინჟინრო გადაწყვეტილებები</p>
          </div>
        </div>
      </footer>
    </>
  );
}
