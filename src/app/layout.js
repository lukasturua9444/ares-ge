import './globals.css';

export const metadata = {
  title: 'ARES — MEPF Engineering Solutions | Georgia',
  description: 'ARES delivers integrated Mechanical, Electrical, Plumbing & Fire Protection engineering solutions for developers across Georgia. 8+ years experience, 20+ projects, 450K+ m² designed.',
  keywords: 'MEPF engineering, mechanical engineering Georgia, electrical engineering Tbilisi, plumbing, fire protection',
  openGraph: {
    title: 'ARES — MEPF Engineering Solutions',
    description: 'Integrated mechanical, electrical, plumbing & fire protection solutions for developers across Georgia.',
    url: 'https://ares.ge',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
