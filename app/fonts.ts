// app/fonts.ts
// Fort Property Developments — Font Configuration
// Playfair Display (serif) for headings + Inter (sans) for body/nav/buttons
// Source: https://nextjs.org/docs/14/app/building-your-application/optimizing/fonts
// Import { inter, playfair } in layout.tsx and apply .variable classNames to <html>.

import { Inter, Playfair_Display } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})
