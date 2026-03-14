// app/fonts.ts
// Fort Property Developments — Font Configuration
//
// Georgia and Arial are system fonts (universally available — no CDN loading).
// Apply via Tailwind: font-serif (Georgia) and font-sans (Arial).
// Usage in layout.tsx: <html className="font-sans"> — sets Arial as the default.
// For headings: className="font-serif" applies Georgia.

export const fontConfig = {
  serif: {
    family: "Georgia, 'Times New Roman', serif",
    tailwindClass: 'font-serif',
    // Use for: H1–H3, taglines, pull-quotes, brand name
    // Do not use below 18px — Georgia is a display face at small sizes
  },
  sans: {
    family: "Arial, 'Helvetica Neue', sans-serif",
    tailwindClass: 'font-sans',
    // Use for: body text, nav, labels, buttons, captions, tables
  },
} as const

export type FontRole = keyof typeof fontConfig
