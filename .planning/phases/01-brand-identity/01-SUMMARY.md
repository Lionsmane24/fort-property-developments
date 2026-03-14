---
phase: 01-brand-identity
plan: 01
status: complete
completed: 2026-03-14
---

# Summary: Brand Identity

## One-liner
Fort Property Developments brand system locked — logo, colors, fonts, and Tailwind tokens all confirmed from the official Brand Guide.

## What Was Decided

**Logo direction:** Battlement/fort mark + wordmark (Heritage Green mark with Fort Gold accent line, FORT in Georgia, PROPERTY DEVELOPMENT in Arial). Sourced from `fort_property_development_logo.svg` in Downloads and updated to official brand colors.

**Palette:** Confirmed from `Fort_PD_Brand_Guide.docx`:
- Heritage Green `#2C4A2E` — primary brand color (headings, logo, nav, borders)
- Fort Gold `#B8860B` — accent (CTAs, highlights, dividers)
- Craftsman Cream `#F5F0E8` — backgrounds (page, cards)
- Estate Black `#2D2D2D` — body text, footer, legal copy

**Fonts:** Georgia (serif) + Arial (sans) — system fonts. No Google Fonts CDN needed. Zero loading overhead.

**Tagline:** Built on Heritage. Designed for Today.

## Files Produced

| File | Purpose |
|------|---------|
| `public/logo/fort-logo-primary.svg` | Primary logo — Heritage Green + Fort Gold |
| `public/logo/fort-logo-reversed.svg` | White reversed logo — for dark nav/footer backgrounds |
| `app/icon.svg` | Favicon mark — battlement only, no text (Next.js App Router format) |
| `tailwind.config.js` | Brand color tokens + system font families |
| `app/fonts.ts` | Font configuration with Tailwind class references |
| `.planning/brand/colors.md` | Color token documentation (FINAL) |

## Tailwind Tokens

```
fort-green  → #2C4A2E  (bg-fort-green, text-fort-green, border-fort-green)
fort-gold   → #B8860B  (bg-fort-gold,  text-fort-gold,  border-fort-gold)
fort-cream  → #F5F0E8  (bg-fort-cream, text-fort-cream, border-fort-cream)
fort-black  → #2D2D2D  (bg-fort-black, text-fort-black, border-fort-black)
```

## Deferred Items

- `app/favicon.ico` and `app/apple-icon.png` — binary files requiring PNG source. Use `app/icon.svg` for modern browser support (Next.js App Router reads it automatically). Generate `.ico` from favicon mark at realfavicongenerator.net when ready for production.

## Notes for Phase 2 (Project Setup)

- `tailwind.config.js` is written — Phase 2 just needs to run `npm install` and it's ready
- Font usage in `app/layout.tsx`: set `className="font-sans"` on `<html>` (Arial default), use `className="font-serif"` on heading elements
- `app/fonts.ts` exports `fontConfig` — import in layout if you need programmatic access to font strings
- Reversed logo (`fort-logo-reversed.svg`) is used in the dark nav header and footer
- Brand tagline "Built on Heritage. Designed for Today." goes in footer, email signatures, and site meta description
