# Fort Property Developments — Brand Color Tokens

_Status: PENDING Dennis palette decision_

---

## Color Palettes

### Palette A — Charcoal + Copper (CANDIDATE)

| Token | Hex | Usage |
|-------|-----|-------|
| `fort-dark` | `#1C1C1E` | Nav background, footer, headings, body text on light bg |
| `fort-accent` | `#B87333` | CTAs, highlights, active states, dividers |
| `fort-bg` | `#F5F0EB` | Page background, card backgrounds |

**Character:** Refined, warm authority. Copper against charcoal reads as a heritage craft company with modern discipline.

### Palette C — Forest + Stone (CANDIDATE)

| Token | Hex | Usage |
|-------|-----|-------|
| `fort-dark` | `#1E3A2F` | Nav background, footer, headings, body text on light bg |
| `fort-accent` (use `fort-stone` in config) | `#8B7355` | CTAs, highlights, active states |
| `fort-bg` | `#FAFAF8` | Page background, card backgrounds |

**Character:** Grounded, sustainable, BC-rooted. Forest green signals environmental responsibility; stone reads as solid and enduring.

---

## Typography

| Role | Typeface | Weights | CSS Class |
|------|----------|---------|-----------|
| Headings (H1–H3) | Cormorant Garamond | 300, 400, 600, 700 | `font-serif` |
| Body, nav, labels, buttons | Inter | 400, 500, 600 | `font-sans` (default) |

**Do not use Cormorant Garamond below 24px** — it is a display face optimized for large sizes.

---

## Tailwind Token Names (stable regardless of palette choice)

The token NAMES below are fixed. Only the HEX VALUES change depending on which palette Dennis selects.

| Token Name | Tailwind Utilities Generated |
|------------|------------------------------|
| `fort-dark` | `bg-fort-dark`, `text-fort-dark`, `border-fort-dark` |
| `fort-accent` | `bg-fort-accent`, `text-fort-accent`, `border-fort-accent` |
| `fort-bg` | `bg-fort-bg`, `text-fort-bg`, `border-fort-bg` |

**Critical:** Use only these three names throughout all components. Never use `fort-dark-a` or `fort-dark-c` variants.

---

## Decision Log

- [ ] Palette selected: __ (A or C) — Date: __
- [ ] Logo option selected: __ (Option 1 or Option 2) — Date: __
- [ ] Final tailwind.config.js updated with chosen palette: __
