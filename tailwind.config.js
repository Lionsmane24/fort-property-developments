/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-inter)', 'Helvetica Neue', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        // Fort Property Developments Brand Palette
        'fort-charcoal': '#1A1A2E',   // Primary dark — nav, logo, headings, footer
        'fort-blue':     '#1B3A6B',   // Deep blue — section backgrounds, accents
        'fort-gold':     '#C4973A',   // Gold — CTAs, highlights, eyebrows, dividers
        'fort-bg':       '#F8F6F1',   // Off-white — page background, card backgrounds
        'fort-gray':     '#374151',   // Body text
      },
    },
  },
  plugins: [],
}
