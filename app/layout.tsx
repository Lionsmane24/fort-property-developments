import type { Metadata } from 'next'
import { inter, playfair } from './fonts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fort Property Developments',
  description: 'Multiplex infill developer serving Metro Vancouver and the Fraser Valley.',
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
