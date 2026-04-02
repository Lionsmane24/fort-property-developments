import type { Metadata } from 'next'
import { inter, playfair } from '../fonts'
import '../globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import FortAgentChat from '@/components/AgentChat'
import PlausibleProvider from 'next-plausible'

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

export default function FortLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${playfair.variable} bg-fort-bg text-fort-gray font-sans`}>
      <PlausibleProvider domain="www.FortPropertyDevelopments.com">
        <Nav />
        <main>{children}</main>
        <Footer />
        <ExitIntentPopup />
        <FortAgentChat />
      </PlausibleProvider>
    </div>
  )
}
