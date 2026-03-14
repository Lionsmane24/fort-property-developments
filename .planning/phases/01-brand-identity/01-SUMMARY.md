---
phase: 01-brand-identity
plan: 01
status: complete
completed: 2026-03-14
---

# Summary: Brand Identity

## One-liner
Fort Property Developments brand system locked — wordmark logo, colors, and fonts confirmed matching existing website style.

## What Was Decided

**Logo direction:** "Fort" wordmark — Inter Bold 700, mixed case, charcoal `#1A1A2E` on light / white on dark. "PROPERTY DEVELOPMENTS" in Inter SemiBold 600, letter-spacing 6px, gold `#C4973A`. Matches existing website aesthetic.

**Palette:** Charcoal + Gold, consistent with old website:
- Charcoal `#1A1A2E` — nav, logo, footer, primary dark
- Deep Blue `#1B3A6B` — section backgrounds, accents
- Gold `#C4973A` — CTAs, eyebrows, highlights, dividers
- Off-white `#F8F6F1` — page/card backgrounds
- Gray `#374151` — body text

**Fonts:** Playfair Display (serif headings) + Inter (sans body/nav) — via `next/font/google`

## Files Produced

| File | Purpose |
|------|---------|
| `public/logo/fort-logo-primary.svg` | Primary logo — charcoal wordmark + gold sub-text |
| `public/logo/fort-logo-reversed.svg` | Reversed logo — white wordmark for dark nav/footer |
| `app/icon.svg` | Favicon — "F" monogram on charcoal square, gold accent bar |
| `tailwind.config.js` | Brand color tokens + font CSS variable references |
| `app/fonts.ts` | Playfair Display + Inter font exports via next/font/google |
| `.planning/brand/colors.md` | Color token documentation (FINAL) |

## Tailwind Tokens

```
fort-charcoal → #1A1A2E  (bg-fort-charcoal, text-fort-charcoal)
fort-blue     → #1B3A6B  (bg-fort-blue, text-fort-blue)
fort-gold     → #C4973A  (bg-fort-gold, text-fort-gold)
fort-bg       → #F8F6F1  (bg-fort-bg, text-fort-bg)
fort-gray     → #374151  (text-fort-gray)
```

## Notes for Phase 2 (Project Setup)

- `tailwind.config.js` is ready — Phase 2 runs `npm install` and it works
- Font usage in `app/layout.tsx`: import `{ inter, playfair }` from `./fonts`, apply `className={\`\${inter.variable} \${playfair.variable}\`}` to `<html>`
- Use `font-sans` (Inter) as the default body font, `font-serif` (Playfair Display) for H1–H5
- Reversed logo (`fort-logo-reversed.svg`) goes in dark nav header and footer
- Existing website at `C:/Users/denni/fort-property-developments/` is the reference for content and layout
