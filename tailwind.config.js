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
        // Fort Property Developments Brand Palette (matched to Zoom backdrop)
        'fort-charcoal': '#1B2A44',   // Deep navy — nav, headings, footer, hero
        'fort-blue':     '#162236',   // Darker navy — contrast sections
        'fort-gold':     '#C9A84C',   // Warm gold — CTAs, highlights, brackets, dividers
        'fort-bg':       '#F8F6F1',   // Off-white — page background, card backgrounds
        'fort-gray':     '#374151',   // Body text
      },
    },
  },
  plugins: [],
}
