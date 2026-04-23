'use client';
import { useEffect, useState } from 'react';

export default function ContactPageKa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.title = 'კონტაქტი | ARES';
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
            <a href="/ka/contact" className="active-link" onClick={handleNavClick}>კონტაქტი</a>
          </div>
          <div className="nav-right">
            <div className="lang-sw"><a href="/ka/contact" className="active">GE</a><a href="/contact">EN</a></div>
            <a href="/ka/contact" className="nav-cta">დაგვიკავშირდით</a>
          </div>
          <button type="button" className={`hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="მენიუს გადართვა"><span></span><span></span><span></span></button>
        </div>
      </nav>

      <section className="page-header">
        <div className="wrap">
          <div className="section-label anim">კონტაქტი</div>
          <h1 className="page-title anim anim-d1">დაუკავშირდით<br /><em>ჩვენს გუნდს</em></h1>
          <p className="section-sub anim anim-d2">მზად ხართ განიხილოთ თქვენი პროექტი? დაგვიკავშირდით კონსულტაციისა და წინასწარი ხარჯთაღრიცხვისთვის.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div className="anim">
              <h2 className="section-title" style={{ fontSize: '28px', marginBottom: '24px' }}>მოგვწერეთ</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <input type="text" placeholder="თქვენი სახელი" style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }} />
                  <input type="text" placeholder="კომპანია" style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }} />
                </div>
                <input type="email" placeholder="ელ. ფოსტა" style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }} />
                <input type="tel" placeholder="ტელეფონი" style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }} />
                <select style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text2)', fontFamily: 'var(--font)', outline: 'none', width: '100%' }}>
                  <option value="">აირჩიეთ პროექტის ტიპი</option>
                  <option value="residential">საცხოვრებელი კომპლექსი</option>
                  <option value="commercial">კომერციული ობიექტი</option>
                  <option value="mixed">შერეული დანიშნულების შენობა</option>
                  <option value="public">საჯარო შენობა</option>
                  <option value="other">სხვა</option>
                </select>
                <textarea placeholder="მოგვიყევით თქვენი პროექტის შესახებ" rows={5} style={{ padding: '14px 18px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '6px', fontSize: '14px', color: 'var(--text)', fontFamily: 'var(--font)', outline: 'none', width: '100%', resize: 'vertical' }}></textarea>
                <button className="btn-primary" style={{ width: 'fit-content' }}>გაგზავნა</button>
              </div>
            </div>
            <div className="anim anim-d2">
              <h2 className="section-title" style={{ fontSize: '28px', marginBottom: '24px' }}>საკონტაქტო ინფორმაცია</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="val-card"><h4>ელ. ფოსტა</h4><p><a href="mailto:info@ares.ge" style={{ color: 'var(--accent)' }}>info@ares.ge</a></p></div>
                <div className="val-card"><h4>ტელეფონი (კომერციული შეკითხვები)</h4><p><a href="tel:+995595396139" style={{ color: 'var(--accent)' }}>+995 595 39 61 39</a></p></div>
                <div className="val-card"><h4>მისამართი</h4><p>ს. ვირსალაძის ქ. 8<br />თბილისი 0108, საქართველო</p></div>
                <div className="val-card"><h4>სამუშაო საათები</h4><p>ორშაბათი — პარასკევი: 09:00 — 18:00</p></div>
              </div>
              <div style={{ marginTop: '24px', height: '240px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text3)', fontSize: '13px' }}>რუკა — ს. ვირსალაძის ქ. 8, თბილისი</div>
            </div>
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
