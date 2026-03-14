import type { Metadata } from 'next'
import { inter, playfair } from './fonts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.FortPropertyDevelopments.com'),
  title: {
    template: '%s | Fort Property Developments',
    default: 'Fort Property Developments | Multiplex Infill Developer — Metro Vancouver',
  },
  description: 'Fort Property Developments builds 4–6 unit multiplex infill across Metro Vancouver and the Fraser Valley.',
  openGraph: {
    siteName: 'Fort Property Developments',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630, alt: 'Fort Property Developments — Metro Vancouver multiplex infill' }],
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-fort-bg text-fort-gray font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
