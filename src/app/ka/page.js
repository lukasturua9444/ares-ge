'use client';
import { useEffect, useState } from 'react';

const ICON_LIGHTNING = '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';
const ICON_CLIPBOARD = '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';
const ICON_SHIELD = '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';

const SRV_TOOLS = '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';
const SRV_LIGHTNING = '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';
const SRV_PIPE = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAE3UlEQVR42u2dTYgcRRTHf9PTu46Jm1V3NbAkxsUYjYpmFQSjgh68iHjx4kUPUfDg0VPw4t2DKHjxogkEBBFPKosiiKd4MBq/EEQEoxgUyWbY7Owm2+OhXtM1vd2b2Zntj535/6AYprtn6Hn/eq+qq17VgBBCCCGEEEIIIepDo0b3Mg/sBaKc8/uABeAP4GzOdV1gDfgBWJcgg/Mm8CwQbnJNaCUyo+dxBfgbOAosy+e2zgFgyWr3dpanahYB+iKswT1cbzX+kr0PvNfIXkPvOHY8Mm9Is2bXz6iuD0YT+LEAD5lTGzI4U8DjwL0mUNfurQPst/BzwDwiNG/6GDgDTNr1MX8Ci8A51fXhK0folQkTZy/wvhl92V5/Bx6082GqBDvZCGGN7qWb0yYsARe9tiNuJ/7ZqV3bzdgJtamZUXECC1VIkOq8p59jEkRIEAkiJIgEERJESBAJsh1EZE9GRRKkuif1Zs7xkWOYsawGcAi4uaDaGgCruKndu+xYPFwyDTwNfGW/oeqn9q7Z4SHgF+Ak2eNyfRl10M+dxE27BgWHjyDHk6OahS3/Hn8CjlDi4Och3GhrVyWzrAIvlBmydpv6nRLboiDljVGNPCPtxVeA28oU5CzwF27ySB2R3jAa4OZrTpcpyDrwMPAocDfJtGuRP3SeJC/rTA08pGGhacY6GAueIBHwX9m9rBXgM+DzEj2jaT+2DjOFDauELbuvBZI5/4E7TMNO4XZL7HJGg3YlC6aDm2bW0EmNGvUJCVIvuhJkhN1NSBAhQSSIkCASREgQCSIkiAQREkRIkAJppd5fbS29BCm4Uk+n7BkBbQlSDU3g1tSxeIGq2EJF3A/syjg3i0t665cbzBtWgcskq4SnZOb+mAU+AL4BvsCtgY9Feg342srrfUaQwyZCGzfX3wV+k5n794yX6U1q+w7YAxxkY8LbfX2Eq7fs2hXvc2+rl9Uf1wD3WA/oAsm+KAetpseJFB17PbzJdzVwqbQvkWSbRPa97w56g+GYesqkiTFpRmxYCVJlHrjR2od4p4kWbh+VJ4FXvO+IOWfhUIIMESW6KaPGkeN5C1sdOzZlAh31bOcnfYcWEiMJMjiR1fLbM87daSWLS/a5OFyFwHHcEgkkyODEXdU7Ms7F7UmWVwWpp/TjwBsMmRIkQeBa3CZq7Rz7XHeVz38CvIPbLmrozMpxFCRKtRNzwIs5D4nncetg4rC0gtuZqG0Pf6eBT9nGVNJxYw/wIcmimrwFN/ED3ilcdv8tuPUec7hxq1ZRNxiOoSAPkCwbwHv2SC+8iRv7nylx6cO4PRi2cfs7BikbTNK7G10szLcKKsVzBLf6q209rCWvxONRy8CvOe1KoTTGVJRZG/L4NxWSduE24rwAnDDBhBBCCCHEjqcpEwBwk9liTaaolglcMsOXuA38n5NJqqMBPMGI/M3FKLAb+B43XLJCkld1Sqaphkfo/QsMv1T27zzjmkraAo7Ru1lMTAQ8o/paLjO42cDLJHPqfllkfAdeK2EfG9M//dKuSpBxDVkNLzwFOSFNbUiJrOLSe1psnJ6NcPm+EqRELgIfkSS6pW1yghH9B58685jX7V332pJ1trY+RGxj13cxo0F/VaapjmlcFsp5K++pu1s9IXA/LhFOYgghhBBCCCGEEMLjf8lAjpprMr/LAAAAAElFTkSuQmCC';
const SRV_FLAME = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFC0lEQVR42u2dW4hVVRiAvzOO2TBZM01NGaWimEzNZGg+FJQSFIFJ0YMYKOaDQTfDl0xhip4qjAgiKLILBkFkZRZpeCEo04JxFG/ZBSnIcjJsyGkctdk97H3o6Jw5Z++9/rUva/8f/I97/fv8376uvdY6oCiKoijFpgm4X8uQHSYAJ4CJWops0AF4wBagpOVIn7mBEA94TMuRPisqhAwCnVqSdHm7QogH7AIatCzpceg8IR7wuJYlHaZVkeEBA8AULU/yPDmKEA/YpOVJnj01hHjAIi1RcsypI8MDjgGXaKmSYX0IIR7wvJbKPp3A2ZBChoBrtWR2+SSkjHJ8rCWzx20RZZRjrpZOnsYQT1ajxVdaPnlWx5ShZ4kFOoB/DIV8oWWUYRzQayijHLdqOc1ZIyTDA97Vcpq/kf8rKGQIaM/iDx2TAxmtwOdAi/Dv/hPYocd6dD4UPDMq40ctbXQesSSjHF1a4vB0Cjzi1ovVWuZwNAMHLcvwgJ1a6nC8mYAML3hyu1TLXZuFCckox+1Z+vFZGypzFfBKwjlnqJDqlIC1KVxCZqBUZWnCl6pyfK2lH0kb0JeSkENa/pG8lZIMD/hNy38uNwHDKQo5pQrOZatgcY8Dm2Ns16QafO6ycIOOMjyoHJmZeZX2Y2+3cHuHgf3Bm34UZum5AbOx11nYDvRH2G6d6oD3LQiZV9H+sxG2GwQmF1nGFcAZYRlDwEUVOSZFvJdsJh9fUK2w3MLZsb1Knk8jtvFSUYXstCBkVZU8S2K0s7JoMiZaehGcXiXX9JhtraFA892XkFwHYbNBm+uAsdpvFS8erJFv0KDdrcDFrgs5IizjJLWnrP1i2P4uYLyrMiZYODterZNzo0CObcCFLgqZJyxjGLi+Ts5FQrnWu3ij7xYWsiVEzib8pZsk8i13TchHwkLmJ3wgDADX6A199LG5YXurxwHfCeV9xxUZDcL9Vysi5r8FOC2Q90zQT5Z7rhTuSGyLsQ8rhfI/44KQmYJCNsTchxLxPvGeHwdcEDJfUMh9BvvRDhwV2Id2W9f1pJB62z2N2bJLfcisy3hD3oVIffz5NuifMuGDkO8wtejKuxCpXF8KtbPKcPupKsRHapJND/CNwfateRcyJNTOT4L7tKHIQvqE2pEci2sy8r0570KOCbVzUnCfvjfYdkCF+Eh+Vj2RkQMjFSHHgb8F2mnLyO/vz7uQYWCvQDuXCe6TyfS5H/IuBGC3QBuSC+2bdH8cdkFIr0AbkmtdzTTYdj8OcDXmg+QkLxVrY+7DzzhED+Y9rXME9qMR+DVm/tez3p0RhY0CbTwk0Mbd+AsVxMGpRf6vE7hsncVs1lMJf8nYOLn/AC7AMSQmeu4JLjtxeMAg74s4yD3IfDl8OUbuDvzl/eIOcJjmopAxwXO8hJSnI+SdHDwhxc31Bg4jdZZ4+F8AW+rkW4DZCMZTODL8pxbbBaX8BbwA3Bz0d7UANwIPI7MA81MUgK7gyPMyHr0UZPIO2JkAKj3/pFCrl5bwP6VmUcZwcO8pHC3ILbQvGU9QYC5HboS6RHSjMIlk1uut1y3zqKr4n/HAZynJ6APuVAUjGQs8h/x6KLViE/6kVKUGs4F9lkUcAe7VUoenEVhs4YZ/AFiGo9Odk6AhOJLfwx+kFkfCUeA14A4yOsU5r/Oum/H//m5WEFPxx9q2BuL6g/gdfzDCXvwRLz3By56iKIqiKIqiKIoS8B/iiz4oOLW0YgAAAABJRU5ErkJggg==';
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
        <div className="hero-photo"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-label">MEPF ინჟინერია</div>
          <h1><em>უხილავი</em> სისტემები.<br />ხილული <em>ღირებულება</em>.</h1>
          <p className="hero-sub">ინტეგრირებული მექანიკური, ელექტრული, სანტექნიკური და ხანძარსაწინააღმდეგო გადაწყვეტილებები დეველოპერებისა და სამშენებლო კომპანიებისთვის.</p>
          <div className="hero-btns">
            <a href="/ka/contact" className="btn-primary" style={{ textDecoration: 'none' }}>მოითხოვეთ კონსულტაცია</a>
            <a href="/ka/projects" className="btn-outline">პროექტების ნახვა</a>
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
            <div className="srv-card anim anim-d1"><div className="srv-icon"><img src={`data:image/png;base64,${SRV_TOOLS}`} alt="" /></div><h3>მექანიკური სისტემები</h3><p>HVAC სისტემები, ვენტილაცია, გათბობა და გაგრილება. კლიმატის კონტროლი ენერგოეფექტურობისა და კომფორტისთვის.</p></div>
            <div className="srv-card anim anim-d2"><div className="srv-icon"><img src={`data:image/png;base64,${SRV_LIGHTNING}`} alt="" /></div><h3>ელექტრული სისტემები</h3><p>ელექტროენერგიის განაწილება, განათების სისტემები, დაბალი ძაბვისა და ავტომატიზაციის სისტემები თანამედროვე შენობებისთვის.</p></div>
            <div className="srv-card anim anim-d3"><div className="srv-icon"><img src={`data:image/png;base64,${SRV_PIPE}`} alt="" /></div><h3>სანტექნიკა</h3><p>წყალმომარაგების, დრენაჟისა და კანალიზაციის სისტემები. დაპროექტებული საიმედოობისა და სტანდარტებთან შესაბამისობისთვის.</p></div>
            <div className="srv-card anim anim-d4"><div className="srv-icon"><img src={`data:image/png;base64,${SRV_FLAME}`} alt="" /></div><h3>ხანძარსაწინააღმდეგო სისტემები</h3><p>ხანძარსაწინააღმდეგო სიგნალიზაცია, ავტომატური სპრინკლერები, ევაკუაციის სისტემები, ხანძარსაწინააღმდეგო ვენტილაცია და ავტომატიზაცია.</p></div>
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
            <div className="val-card anim anim-d1"><div className="val-icon"><img src={`data:image/png;base64,${ICON_LIGHTNING}`} alt="" /></div><div className="val-body"><h4>პირდაპირი ხარჯების დაზოგვა</h4><p>ერთიანი კონტრაქტი აღმოფხვრის პროექტის მართვის ზედნადებ ხარჯებს. ერთიანი შესყიდვები ამცირებს მასალის ღირებულებას.</p></div></div>
            <div className="val-card anim anim-d2"><div className="val-icon"><img src={`data:image/png;base64,${ICON_CLIPBOARD}`} alt="" /></div><div className="val-body"><h4>ოპერაციული ეფექტურობა</h4><p>პროექტის სწრაფი ჩაბარება. დაჩქარებული კაპიტალის ბრუნვა. მართვის რესურსების შემცირება.</p></div></div>
            <div className="val-card anim anim-d3"><div className="val-icon"><img src={`data:image/png;base64,${ICON_SHIELD}`} alt="" /></div><div className="val-body"><h4>სტრატეგიული გავლენა</h4><p>უკეთესი ინჟინერიით გაზრდილი უძრავი ქონების ღირებულება. დეველოპერების ბრენდის გაძლიერება. რისკის შემცირება.</p></div></div>
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
          <div className="footer-col"><h4>ნავიგაცია</h4><a href="/ka/services">სერვისები</a><a href="/ka/about">ჩვენ შესახებ</a><a href="/ka/projects">პროექტები</a><a href="/ka/contact">კონტაქტი</a></div>
          <div className="footer-col"><h4>სერვისები</h4><a href="/ka/services">მექანიკური</a><a href="/ka/services">ელექტრული</a><a href="/ka/services">სანტექნიკა</a><a href="/ka/services">ხანძარსაწინააღმდეგო</a></div>
          <div className="footer-col footer-contact"><h4>კონტაქტი</h4><p><a href="mailto:info@ares.ge">info@ares.ge</a></p><p><a href="tel:+995595396139">+995 595 39 61 39</a></p><p>ს. ვირსალაძის ქ. 8<br />თბილისი 0108, საქართველო</p></div>
        </div>
        <div className="footer-bottom"><p>&copy; 2026 ARES. ყველა უფლება დაცულია.</p><p>MEPF საინჟინრო გადაწყვეტილებები</p></div>
      </div></footer>
    </>
  );
}
