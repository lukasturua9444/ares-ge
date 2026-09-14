import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

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
    url: 'https://www.ares.ge',
    siteName: 'ARES',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/ARES_On_Square.png', width: 1080, height: 1080, alt: 'ARES Logo' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Meta Pixel — ARES Ad Account */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2187931008604912');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2187931008604912&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang = location.pathname.startsWith('/ka') ? 'ka' : 'en';`
          }}
        />
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
      <GoogleAnalytics gaId="G-94EBHPQY0W" />
    </html>
  );
}
