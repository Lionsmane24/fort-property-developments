# Fort Property Developments — Brand Color Tokens

_Status: FINAL — Palette confirmed, matching existing website — 2026-03-14_

---

## Brand Palette

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `fort-charcoal` | Charcoal | `#1A1A2E` | Primary dark — nav, logo wordmark, footer, headings |
| `fort-blue` | Deep Blue | `#1B3A6B` | Section backgrounds, accents, links |
| `fort-gold` | Gold | `#C4973A` | CTAs, eyebrows, highlights, dividers, logo sub-text |
| `fort-bg` | Off-white | `#F8F6F1` | Page background, card backgrounds |
| `fort-gray` | Gray | `#374151` | Body text |

---

## Typography

| Role | Typeface | Weights | CSS Variable |
|------|----------|---------|--------------|
| Headings (H1–H5), taglines | Playfair Display | 400, 500, 600, 700, 900 | `--font-playfair` / `font-serif` |
| Body, nav, labels, buttons | Inter | 300, 400, 500, 600, 700 | `--font-inter` / `font-sans` |

Both loaded via `next/font/google` in `app/fonts.ts`.

---

## Logo

- **Wordmark:** "Fort" in Inter Bold 700, mixed case, charcoal (`#1A1A2E`) on light / white on dark
- **Sub-text:** "PROPERTY DEVELOPMENTS" in Inter SemiBold 600, letter-spacing 6px, gold (`#C4973A`)
- **Favicon:** "F" in Inter Bold on charcoal square, gold accent bar at bottom

---

## Tailwind Token Names

| Token | Hex | Tailwind Utilities |
|-------|-----|--------------------|
| `fort-charcoal` | `#1A1A2E` | `bg-fort-charcoal`, `text-fort-charcoal` |
| `fort-blue` | `#1B3A6B` | `bg-fort-blue`, `text-fort-blue` |
| `fort-gold` | `#C4973A` | `bg-fort-gold`, `text-fort-gold` |
| `fort-bg` | `#F8F6F1` | `bg-fort-bg`, `text-fort-bg` |
| `fort-gray` | `#374151` | `text-fort-gray` |

---

## Decision Log

- [x] Palette confirmed — matching existing website style — 2026-03-14
- [x] Logo: "Fort" wordmark (Inter Bold, mixed case) — 2026-03-14
- [x] Fonts: Playfair Display (serif) + Inter (sans) via next/font — 2026-03-14
- [x] tailwind.config.js updated with fort-charcoal, fort-blue, fort-gold, fort-bg, fort-gray — 2026-03-14
