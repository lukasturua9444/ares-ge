import './globals.css';

export const metadata = {
  title: {
    default: 'ARES — MEPF Engineering Solutions | Georgia',
    template: '%s | ARES'
  },
  description: 'Integrated mechanical, electrical, plumbing & fire protection engineering solutions for developers and construction companies across Georgia. Design, installation, commissioning.',
  keywords: ['MEPF', 'engineering', 'Georgia', 'Tbilisi', 'mechanical', 'electrical', 'plumbing', 'fire protection', 'HVAC', 'construction'],
  authors: [{ name: 'ARES' }],
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ARES — MEPF Engineering Solutions',
    description: 'Integrated MEPF engineering for developers and construction companies across Georgia.',
    url: 'https://ares-ge.vercel.app',
    siteName: 'ARES',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/ARES_On_Square.png', width: 1080, height: 1080, alt: 'ARES Logo' }],
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
