import './globals.css';

export const metadata = {
  title: 'ARES \u2014 MEPF Engineering Solutions | Georgia',
  description: 'ARES delivers integrated Mechanical, Electrical, Plumbing & Fire Protection engineering solutions for developers across Georgia. 8+ years experience, 20+ projects, 450K+ m\u00B2 designed.',
  keywords: 'MEPF engineering, mechanical engineering Georgia, electrical engineering Tbilisi, plumbing, fire protection',
  openGraph: {
    title: 'ARES \u2014 MEPF Engineering Solutions',
    description: 'Integrated mechanical, electrical, plumbing & fire protection solutions for developers across Georgia.',
    url: 'https://ares.ge',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                document.addEventListener('click', function(e) {
                  var hamburger = e.target.closest('.hamburger');
                  if (hamburger) {
                    hamburger.classList.toggle('active');
                    var navLinks = document.querySelector('.nav-links');
                    if (navLinks) navLinks.classList.toggle('open');
                  }
                  var navLink = e.target.closest('.nav-links a');
                  if (navLink) {
                    var h = document.querySelector('.hamburger');
                    var n = document.querySelector('.nav-links');
                    if (h) h.classList.remove('active');
                    if (n) n.classList.remove('open');
                  }
                });
              });
            `
          }}
        />
      </body>
    </html>
  );
}
