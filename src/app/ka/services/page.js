'use client';
import { useEffect, useState } from 'react';

export default function ServicesPageKa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'სერვისები | ARES';
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

  const services = [
    {
      title: 'HVAC სისტემები',
      desc: 'გათბობის, ვენტილაციისა და კონდიცირების სისტემების პროექტირება და მონტაჟი. კლიმატის კონტროლი ენერგოეფექტურობის, კომფორტისა და ენერგომოხმარების ოპტიმიზაციისთვის.',
      items: ['ცენტრალური გათბობის სისტემები', 'ვენტილაციის დიზაინი', 'კონდიცირება', 'ენერგოეფექტური კლიმატის კონტროლი', 'შიდა ჰაერის ხარისხის მართვა']
    },
    {
      title: 'ელექტრული სისტემები',
      desc: 'ელექტროენერგიის განაწილება, სარეზერვო და სასწრაფო სისტემები, დამიწება და ელვისგან დაცვა. სრული ელექტროტექნიკური ინფრასტრუქტურა თანამედროვე შენობებისთვის.',
      items: ['ელექტროენერგიის განაწილების ქსელები', 'სასწრაფო/სარეზერვო სისტემები', 'დამიწება და ელვისგან დაცვა', 'განათების სისტემები', 'გადამრთველები და პანელები']
    },
    {
      title: 'სანტექნიკა და დრენაჟი',
      desc: 'წყალმომარაგების, დრენაჟისა და სანიაღვრე წყლის სისტემები. დაპროექტებული საიმედოობის, ეფექტურობისა და რეგულაციებთან სრული შესაბამისობისთვის.',
      items: ['წყალმომარაგების სისტემები', 'დრენაჟის ქსელები', 'კანალიზაციის სისტემები', 'სანიაღვრე წყლის მართვა']
    },
    {
      title: 'ხანძარსაწინააღმდეგო უსაფრთხოება',
      desc: 'ხანძრის აღმოჩენისა და სიგნალიზაციის, სპრინკლერის, კვამლის კონტროლისა და სასწრაფო ევაკუაციის სისტემები, საერთაშორისო სტანდარტებთან სრულ შესაბამისობაში.',
      items: ['ხანძარსაწინააღმდეგო სიგნალიზაცია', 'ავტომატური სპრინკლერები', 'კვამლის კონტროლი და ვენტილაცია', 'ევაკუაციის სისტემები', 'ხანძარსაწინააღმდეგო ავტომატიზაცია']
    },
    {
      title: 'დაბალი ძაბვისა და ELV სისტემები',
      desc: 'დაშვების კონტროლი, CCTV, სტრუქტურირებული კაბელირება, BMS ინტეგრაცია და საკომუნიკაციო ინფრასტრუქტურა ჭკვიანი შენობებისთვის.',
      items: ['დაშვების კონტროლის სისტემები', 'CCTV და ვიდეო მეთვალყურეობა', 'სტრუქტურირებული კაბელირება', 'BMS ინტეგრაცია', 'ხმის და საკომუნიკაციო სისტემები']
    },
    {
      title: 'ტესტირება და ექსპლუატაციაში გაშვება',
      desc: 'სისტემის მუშაობის შემოწმება, ფუნქციური ტესტირება, გაშვება და საბოლოო ჩაბარება. ყოველი სისტემის მუშაობის უზრუნველყოფა პროექტის შესაბამისად.',
      items: ['მუშაობის შემოწმება', 'ფუნქციური ტესტირება', 'სისტემის გაშვება', 'საბოლოო ჩაბარება', 'დოკუმენტაცია და ტრენინგი']
    }
  ];

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner">
          <a href="/ka" className="nav-logo"><img src="/images/ARES_White_Horizontal.png" alt="ARES" /></a>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="/ka/services" className="active-link" onClick={handleNavClick}>სერვისები</a>
            <a href="/ka/about" onClick={handleNavClick}>ჩვენ შესახებ</a>
            <a href="/ka/projects" onClick={handleNavClick}>პროექტები</a>
            <a href="/ka/partners" onClick={handleNavClick}>პარტნიორები</a>
            <a href="/ka/certifications" onClick={handleNavClick}>სერტიფიკატები</a>
            <a href="/ka/contact" onClick={handleNavClick}>კონტაქტი</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw"><a href="/ka/services" className="active">GE</a><a href="/services">EN</a></div>
            <a href="/ka/contact" className="nav-cta">დაგვიკავშირდით</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="მენიუს გადართვა"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">სერვისები</div>
          <h1 className="page-title anim anim-d1">სრული ციკლის MEPF<br /><em>საინჟინრო გადაწყვეტილებები</em></h1>
          <p className="section-sub anim anim-d2">საწყისი პროექტირებიდან საბოლოო ექსპლუატაციაში გაშვებამდე — ჩვენ ვმართავთ შენობის ოთხივე საინჟინრო მიმართულებას ერთი კონტრაქტით.</p>
        </div>
      </section>

      <section className="discipline-cards anim">
        <div className="wrap">
          <div className="discipline-grid">
            <a href="#hvac-სისტემები" className="disc-card">
              <div className="disc-photo" style={{ backgroundImage: "url('/images/services/mechanical.jpg')" }}></div>
              <div className="disc-overlay"><span>M · მექანიკური</span><span className="disc-arrow">→</span></div>
            </a>
            <a href="#ელექტრული-სისტემები" className="disc-card">
              <div className="disc-photo" style={{ backgroundImage: "url('/images/services/electrical.jpg')" }}></div>
              <div className="disc-overlay"><span>E · ელექტრული</span><span className="disc-arrow">→</span></div>
            </a>
            <a href="#სანტექნიკა-და-დრენაჟი" className="disc-card">
              <div className="disc-photo" style={{ backgroundImage: "url('/images/services/plumbing.jpg')" }}></div>
              <div className="disc-overlay"><span>P · სანტექნიკა</span><span className="disc-arrow">→</span></div>
            </a>
            <a href="#ხანძარსაწინააღმდეგო-უსაფრთხოება" className="disc-card">
              <div className="disc-photo" style={{ backgroundImage: "url('/images/services/fire-protection.jpg')" }}></div>
              <div className="disc-overlay"><span>F · სახანძრო</span><span className="disc-arrow">→</span></div>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {services.map((service, i) => (
            <div key={service.title} id={service.title.toLowerCase().replace(/[\s&]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')} className={`service-detail anim anim-d${Math.min(i + 1, 4)}`} style={{ marginBottom: '40px' }}>
              <div className="val-card" style={{ borderLeft: '3px solid var(--accent)', padding: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px' }}>{service.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.7' }}>{service.desc}</p>
                  </div>
                  <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {service.items.map((item) => (
                        <li key={item} style={{ fontSize: '13px', color: 'var(--text2)', padding: '6px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--accent)', fontSize: '16px' }}>›</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section services">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="section-label anim center">რატომ ერთი კონტრაქტორი</div>
          <h2 className="section-title anim anim-d1" style={{ margin: '0 auto 8px' }}>ინტეგრირებული MEPF სისტემის უპირატესობა</h2>
          <p className="section-sub anim anim-d2" style={{ margin: '0 auto 48px' }}>ერთი კონტრაქტორი ხუთი-შვიდის ნაცვლად. ერთიანი შესყიდვები. ნულოვანი სისტემური კონფლიქტები.</p>
          <div className="services-grid">
            <div className="srv-card anim anim-d1"><h3>ხარჯების დაზოგვა</h3><p>ერთიანი კონტრაქტი აღმოფხვრის პროექტის მართვის ზედნადებ ხარჯებს. ერთიანი შესყიდვები ამცირებს მასალის ღირებულებას.</p></div>
            <div className="srv-card anim anim-d2"><h3>სწრაფი ჩაბარება</h3><p>დაჩქარებული პროექტის ვადები. შემცირებული მართვის რესურსები. პროგნოზირებადი გრაფიკები.</p></div>
            <div className="srv-card anim anim-d3"><h3>ნულოვანი კონფლიქტები</h3><p>მიმართულებებს შორის კონფლიქტების ადრეული პრევენცია ზოგავს გადაკეთების ბიუჯეტს და აღმოფხვრის შეფერხებებს.</p></div>
            <div className="srv-card anim anim-d4"><h3>ხარისხის კონტროლი</h3><p>ჩვენ ვაწარმოებთ მუშაობას მარეგულირებელ ორგანოებთან, ტესტირებას, ექსპლუატაციაში გაშვებასა და საბოლოო ჩაბარების დოკუმენტაციას.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">
          <div className="cta-box anim">
            <h2>გჭირდებათ MEPF ინჟინერია თქვენი პროექტისთვის?</h2>
            <p>მიიღეთ კონსულტაცია და წინასწარი ხარჯთაღრიცხვა</p>
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
