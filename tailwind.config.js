/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // System fonts — no loading overhead, universally available
        sans:  ['Arial', 'Helvetica Neue', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        // Fort Property Developments Brand Palette — from Fort_PD_Brand_Guide.docx
        'fort-green':  '#2C4A2E',   // Heritage Green — headings, logo, borders, nav background
        'fort-gold':   '#B8860B',   // Fort Gold — CTAs, highlights, dividers, accents
        'fort-cream':  '#F5F0E8',   // Craftsman Cream — page background, card backgrounds
        'fort-black':  '#2D2D2D',   // Estate Black — body text, footer, legal copy
      },
    },
  },
  plugins: [],
}
