# Fort Property Developments — Brand Color Tokens

_Status: FINAL — Palette confirmed from Fort_PD_Brand_Guide.docx — 2026-03-14_

---

## Brand Palette — Official (from Brand Guide)

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `fort-green` | Heritage Green | `#2C4A2E` | Headings, logo, borders, nav background |
| `fort-gold` | Fort Gold | `#B8860B` | CTAs, highlights, dividers, accents |
| `fort-cream` | Craftsman Cream | `#F5F0E8` | Page background, card backgrounds, pull-quote boxes |
| `fort-black` | Estate Black | `#2D2D2D` | Body text, footer, legal copy |

**Character:** Heritage and nature — deep Fraser Valley forest greens, warm gold of aged wood and historic brick, creamy neutrals evoking craftsmanship and quality.

---

## Typography

| Role | Typeface | Type | Tailwind Class |
|------|----------|------|----------------|
| Headlines, taglines, pull-quotes, brand name | Georgia | System serif | `font-serif` |
| Body text, nav, labels, buttons, captions | Arial | System sans | `font-sans` (default) |

**System fonts** — universally available, zero loading overhead. No Google Fonts CDN needed.

**Do not use Georgia below 18px** — it is a display face optimized for larger sizes.

---

## Tailwind Token Names

| Token Name | Hex | Tailwind Utilities Generated |
|------------|-----|------------------------------|
| `fort-green` | `#2C4A2E` | `bg-fort-green`, `text-fort-green`, `border-fort-green` |
| `fort-gold` | `#B8860B` | `bg-fort-gold`, `text-fort-gold`, `border-fort-gold` |
| `fort-cream` | `#F5F0E8` | `bg-fort-cream`, `text-fort-cream`, `border-fort-cream` |
| `fort-black` | `#2D2D2D` | `bg-fort-black`, `text-fort-black`, `border-fort-black` |

---

## Brand Tagline

**Built on Heritage. Designed for Today.**

Use on every touchpoint: email signatures, signage, social media bios, printed materials.

---

## Decision Log

- [x] Palette confirmed from Fort_PD_Brand_Guide.docx — 2026-03-14
- [x] Logo: battlement mark + wordmark (fort/merlon icon) — 2026-03-14
- [x] Fonts: Georgia (serif) + Arial (sans) — system fonts — 2026-03-14
- [x] tailwind.config.js updated with fort-green, fort-gold, fort-cream, fort-black — 2026-03-14
