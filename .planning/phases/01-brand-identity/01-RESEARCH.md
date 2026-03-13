# Phase 1: Brand Identity - Research

**Researched:** 2026-03-13
**Domain:** Visual brand system — Canva logo design, Tailwind CSS custom tokens, Next.js font loading, favicon pipeline
**Confidence:** HIGH (core technical procedures verified against official docs)

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| REQ-001 | Brand Identity System: logo design in Canva (Options 1 + 2), color palettes A + C, Tailwind color tokens, Cormorant Garamond + Inter typography, logo legibility at 32/150/300px, SVG + PNG export, favicon | All six research questions answered below with verified procedures |
</phase_requirements>

---

## Summary

Phase 1 is a design-first phase: the primary output is static brand assets (SVG/PNG logo files) plus the Tailwind configuration that encodes those decisions into code. No Next.js pages are built in this phase.

The technical work splits into two streams. The first stream is Dennis working in Canva: building both logo options, color-testing them against both palettes, exporting finals. The second stream is Claude setting up the Tailwind config and font loading in the Next.js project so Phase 2 can begin immediately after Dennis approves assets.

The key constraint is that Canva SVG export and transparent-background PNG export both require a Canva Pro account. If Dennis does not have Pro, the fallback is PNG-only (which is acceptable for web use). The SVG export from Canva also has a known limitation: text layers are exported as paths, which means the font rendering is baked into the file — this is a feature, not a bug, for logo use.

**Primary recommendation:** Execute Canva design first (Dennis-driven), then immediately wire Tailwind config using the chosen palette — the two tasks are independent and can run in parallel once palette A vs C is decided.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS | 3.4.x | Utility-first CSS including custom color tokens | Already committed in project stack (REQ-002) |
| next/font/google | Next.js 14 built-in | Self-hosted Google Fonts with zero layout shift | Official Next.js font system, no CDN requests |
| Cormorant Garamond | Google Fonts | Serif heading typeface | Selected in research; elegant, architectural |
| Inter | Google Fonts | Body, nav, label typeface | Industry standard readable sans-serif |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| realfavicongenerator.net | web tool | Generate all favicon variants from a single PNG | Use after logo finalized — produces ICO, PNG set, manifest |
| favicon.io | web tool | Quick PNG-to-ICO conversion | Alternative if realfavicongenerator is too complex |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Canva (logo design) | Figma, Adobe Illustrator | Canva is the stated user tool — no alternative considered |
| next/font/google | Google Fonts CDN link in `<head>` | CDN approach sends requests to Google; next/font self-hosts, better privacy and performance |
| tailwind.config.js tokens | CSS custom properties only | Tokens in tailwind.config.js generate all utility classes automatically (bg-, text-, border-) |

---

## Architecture Patterns

### Recommended Asset File Structure

```
public/
├── logo/
│   ├── fort-logo-primary.svg        # Final logo (chosen option, chosen palette)
│   ├── fort-logo-primary.png        # PNG with transparent background
│   ├── fort-logo-reversed.svg       # White version for dark backgrounds
│   └── fort-logo-reversed.png
app/
├── favicon.ico                      # 32x32 .ico — placed in /app/ root for Next.js auto-detection
├── icon.svg                         # SVG favicon for modern browsers
├── apple-icon.png                   # 180x180 PNG for Apple devices
├── fonts.ts                         # Shared font exports (DO NOT inline in layout.tsx)
└── layout.tsx                       # Applies font CSS variables to <html>
```

### Pattern 1: Font Loading via CSS Variables (Official Next.js 14 Pattern)

**What:** Load both fonts with the `variable` option, export from a shared `fonts.ts`, apply to `<html>` in layout, reference in tailwind.config.js via CSS var names.

**When to use:** Always — this is the only correct pattern for multi-font + Tailwind integration in Next.js 14 App Router.

**Example:**

```typescript
// app/fonts.ts
// Source: https://nextjs.org/docs/14/app/building-your-application/optimizing/fonts
import { Inter, Cormorant_Garamond } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})
```

```typescript
// app/layout.tsx
import { inter, cormorant } from './fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

```javascript
// tailwind.config.js
// Source: https://nextjs.org/docs/14/app/building-your-application/optimizing/fonts (With Tailwind section)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-cormorant)'],
      },
      colors: {
        // Palette A — Charcoal + Copper (activate if Dennis chooses A)
        'fort-dark':   '#1C1C1E',
        'fort-accent': '#B87333',
        'fort-bg':     '#F5F0EB',
        // Palette C — Forest + Stone (swap these values if Dennis chooses C)
        // 'fort-dark':   '#1E3A2F',
        // 'fort-stone':  '#8B7355',
        // 'fort-bg':     '#FAFAF8',
      },
    },
  },
  plugins: [],
}
```

```css
/* app/globals.css — usage examples */
/* font-serif applies Cormorant Garamond */
/* font-sans applies Inter (also the default body font) */
```

### Pattern 2: Custom Color Tokens as Flat Named Keys

**What:** Define brand colors as flat named keys (not Tailwind scales) in `theme.extend.colors`.
**When to use:** When you have a finite, named brand palette rather than a generative color scale.

**Example:**
```javascript
// Source: https://v3.tailwindcss.com/docs/customizing-colors
theme: {
  extend: {
    colors: {
      'fort-dark':   '#1C1C1E',
      'fort-accent': '#B87333',
      'fort-bg':     '#F5F0EB',
    }
  }
}

// Generates these utilities automatically:
// bg-fort-dark, text-fort-dark, border-fort-dark
// bg-fort-accent, text-fort-accent, border-fort-accent
// bg-fort-bg, text-fort-bg, border-fort-bg
```

### Pattern 3: Favicon — File-Based Convention (Next.js App Router)

**What:** Place specific files in `/app` root. Next.js auto-generates the correct `<link>` tags.
**When to use:** Always for App Router projects — no metadata API code needed for basic favicon setup.

```
app/
├── favicon.ico        → <link rel="icon" href="/favicon.ico" sizes="any" />
├── icon.svg           → <link rel="icon" href="/icon.svg" type="image/svg+xml" />
└── apple-icon.png     → <link rel="apple-touch-icon" href="/apple-icon.png" />
```

Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

### Anti-Patterns to Avoid

- **Inlining font definitions in layout.tsx:** Call font functions once in `fonts.ts`, export constants, import where needed. Multiple calls to the same font function create multiple hosted instances.
- **Using `theme.colors` instead of `theme.extend.colors`:** Replacing `colors` entirely removes all Tailwind defaults. Always use `extend`.
- **PNG export without transparent background:** A white-background PNG cannot be used on dark nav backgrounds. Always export with transparent background (requires Canva Pro).
- **Committing both palettes as active tokens:** Pick one palette per palette token name (`fort-dark`, `fort-accent`, `fort-bg`). Comment out the alternative — do not create `fort-dark-a` and `fort-dark-c` variants.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Favicon file generation | Manual Photoshop resize + ICO packing | realfavicongenerator.net | Handles all sizes, ICO multi-resolution packing, Apple touch icon, manifest |
| Font self-hosting | Download .woff2 files, add to `/public`, write `@font-face` | `next/font/google` | Handles subsetting, self-hosting, `size-adjust` for zero layout shift, build-time optimization |
| Color scale generation | Manually define 50-900 shades | Flat tokens in `theme.extend.colors` | Fort brand uses a finite palette; scales add noise and unused CSS |

**Key insight:** The build-time font optimization in `next/font` prevents flash of unstyled text (FOUT) and eliminates Google Fonts CDN dependency — hand-rolling this correctly is non-trivial.

---

## Common Pitfalls

### Pitfall 1: Canva SVG Export — Text Not as Outlines

**What goes wrong:** When the Canva SVG is placed in a browser, text may render in a fallback font if the SVG embeds font names rather than path outlines.
**Why it happens:** Canva's SVG export outlines text by default for logos, but behavior varies by element type. If you use a "text box" element rather than a converted text element, it may embed font references.
**How to avoid:** After export, open the SVG in a text editor and check for `font-family` attributes. If present, re-export using the "Flatten" option, or accept that the logo SVG relies on the font being available. For a logo SVG used as `<img src>`, this is safe because it renders as a bitmap. For inline SVG, outlines are safer.
**Warning signs:** SVG file size under 2KB for a complex logo (text was referenced, not outlined).

### Pitfall 2: Logo Illegibility at 32px

**What goes wrong:** The full "FORT / PROPERTY DEVELOPMENTS" wordmark with geometric mark is unreadable at favicon size.
**Why it happens:** Three lines of text and a geometric shape at 32px results in visual noise.
**How to avoid:** Create a simplified favicon-only version: just the geometric chevron/battlement mark (Option 1) or just "F" in Cormorant at high contrast (Option 2). Test by exporting a 32x32 PNG from Canva and viewing it in a browser tab.
**Warning signs:** More than two visual elements in the favicon design.

### Pitfall 3: Canva Pro Requirement for SVG + Transparent PNG

**What goes wrong:** Dennis cannot export SVG or transparent-background PNG without Canva Pro.
**Why it happens:** Both SVG export and transparent background are Pro-only features.
**How to avoid:** Confirm Pro status before starting. If free plan only: use PNG on white background for development, plan SVG export upgrade before launch. PNG on white background is functional but not ideal for dark nav placement.
**Warning signs:** Download dialog does not show SVG option or transparent background checkbox.

### Pitfall 4: Cormorant Garamond Weight Gap

**What goes wrong:** `weight: ['400']` alone produces thin letterforms that look weak at small sizes.
**Why it happens:** Cormorant Garamond is designed as a display face — it's optimized for large sizes. At body/small sizes, 400 weight can appear too delicate.
**How to avoid:** Load weights `['300', '400', '600', '700']` so the design system can use 600 for H2/H3 and 400 for H1 display use. Do not use Cormorant below 24px.
**Warning signs:** Headings look thin or hard to read on mobile at H3 size.

### Pitfall 5: Font Variable Not Applied to `<html>`

**What goes wrong:** `font-serif` utility class in Tailwind produces no custom font — browser falls back to system serif.
**Why it happens:** CSS variables `--font-inter` and `--font-cormorant` only exist when the `.variable` class names are applied to a parent element. If they're applied to `<body>` instead of `<html>`, SVG and some browser UI elements may not inherit them.
**How to avoid:** Always apply both `.variable` classNames to `<html>`, not `<body>`.

### Pitfall 6: Palette Confusion — Token Name Collision

**What goes wrong:** Both palettes are left active in tailwind.config.js with different token names, and components are built using Palette A tokens — switching to Palette C later requires a mass find-and-replace.
**Why it happens:** Trying to keep both options "live" during development.
**How to avoid:** After Dennis picks a palette, immediately update the single token set (`fort-dark`, `fort-accent`, `fort-bg`). Use these three names everywhere. The commented-out alternative palette stays in the config for reference.

---

## Code Examples

### Complete tailwind.config.js for Palette A

```javascript
// Source: https://v3.tailwindcss.com/docs/customizing-colors + Next.js font docs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-inter)'],
        serif: ['var(--font-cormorant)'],
      },
      colors: {
        'fort-dark':   '#1C1C1E',   // Charcoal — nav, footer, headings
        'fort-accent': '#B87333',   // Copper — CTAs, highlights
        'fort-bg':     '#F5F0EB',   // Warm white — page background
        // Palette C (uncomment and replace above if Dennis picks C):
        // 'fort-dark':   '#1E3A2F',
        // 'fort-stone':  '#8B7355',
        // 'fort-bg':     '#FAFAF8',
      },
    },
  },
  plugins: [],
}
```

### Complete fonts.ts

```typescript
// app/fonts.ts
// Source: https://nextjs.org/docs/14/app/building-your-application/optimizing/fonts
import { Inter, Cormorant_Garamond } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})
```

### Complete layout.tsx font application

```typescript
// app/layout.tsx (font portion)
import { inter, cormorant } from './fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-fort-bg text-fort-dark">
        {children}
      </body>
    </html>
  )
}
```

### Tailwind usage examples

```tsx
// H1 heading in Cormorant Garamond
<h1 className="font-serif text-5xl font-semibold text-fort-dark">Building Quality Homes</h1>

// CTA button with copper accent
<button className="bg-fort-accent text-white font-sans text-sm tracking-widest uppercase px-6 py-3">
  Register Interest
</button>

// Page background
<main className="bg-fort-bg">
```

### Canva Export Steps (verified from Canva Help Center)

**Canvas setup:**
1. Click "Create a design" → "Logo" (default 500x500px) OR use custom dimensions
2. For a horizontal wordmark: set custom dimensions 800x300px

**Option 1 (Chevron + FORT wordmark):**
1. Elements tab → Shapes → search "triangle" or "chevron" → place and resize
2. Tint the shape to `#B87333` (copper) using the color picker
3. Text tab → Add heading → type "FORT" → set font to Cormorant Garamond → weight 700 → size ~120pt
4. Add second text box → type "PROPERTY DEVELOPMENTS" → set font to Inter → weight 400 → size ~24pt → letter spacing +200
5. Arrange: chevron above "FORT", "PROPERTY DEVELOPMENTS" below
6. Select all → Group (Ctrl/Cmd+G)

**Option 2 (Clean wordmark):**
1. Text tab → Add heading → "FORT" → Cormorant Garamond → weight 700 → size ~120pt → color `#1C1C1E`
2. Add second text box → "PROPERTY DEVELOPMENTS" → Inter → weight 400 → letter spacing +300 → color `#B87333`
3. Add a thin horizontal rule between: Elements → Lines → 1px line in copper
4. Group all elements

**Export SVG (requires Canva Pro):**
- Top right "Share" → Download → File type: SVG → check "Transparent background" → Download

**Export PNG (requires Canva Pro for transparent bg):**
- Top right "Share" → Download → File type: PNG → check "Transparent background" → Download

**Export PNG (free plan):**
- Same as above but "Transparent background" is grayed out — download with white background

### Favicon Generation Workflow

1. Design simplified favicon version in Canva: just the chevron mark (32x32px canvas)
2. Export as PNG at maximum size (500x500 from Canva, or use 32x32 custom canvas)
3. Upload to https://realfavicongenerator.net
4. Download the package — it includes `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`
5. Place `favicon.ico` → `app/favicon.ico`
6. Place `apple-touch-icon.png` → `app/apple-icon.png` (rename to match Next.js convention)
7. Optional: place `icon.svg` → `app/icon.svg` for SVG favicon support

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Google Fonts `<link>` in `_document.js` | `next/font/google` CSS variables | Next.js 13 (2022) | Self-hosted, zero layout shift, no Google CDN request |
| `tailwind.config.js` for all config | Tailwind v4 uses `@theme` in CSS | Tailwind v4 (2025) | Project uses Tailwind v3 — JS config is correct approach |
| Multiple favicon sizes (16, 32, 48, 64...) | Three files: `favicon.ico`, `icon.svg`, `apple-touch-icon.png` | 2021+ | Dramatically simpler — browsers downscale SVG |
| Separate `pages/_document.js` for fonts | `app/layout.tsx` with `next/font` | Next.js 13 App Router | Single location, better caching |

**Note on Tailwind v4:** The project targets Tailwind v3 (per REQ-002). Do not use the `@theme` CSS directive approach — that is v4-only. Use `tailwind.config.js` with `theme.extend`.

---

## Open Questions

1. **Does Dennis have Canva Pro?**
   - What we know: SVG export and transparent PNG require Pro
   - What's unclear: Current account tier
   - Recommendation: Confirm before starting Canva work. If free tier, PNG-only workflow is acceptable for initial build; add SVG export note to launch checklist.

2. **Which palette does Dennis prefer after seeing both?**
   - What we know: Both A (Charcoal+Copper) and C (Forest+Stone) are viable; A is recommended
   - What's unclear: Dennis's visual preference until he sees the actual logos
   - Recommendation: Build Option 1 in Palette A first, then create a copy in Palette C for side-by-side comparison. Decision point before Tailwind config is finalized.

3. **Will the Next.js project already be initialized in Phase 2, or should Phase 1 include project init?**
   - What we know: REQ-002 (project setup) is Phase 2; Phase 1 is brand assets + Tailwind config
   - What's unclear: Whether `tailwind.config.js` changes in this phase assume the repo already exists
   - Recommendation: Phase 1 plan should include the Tailwind config as a file-ready artifact (the exact content), with application deferred to Phase 2 project init. The planner should structure this as "produce the config" not "apply the config."

---

## Validation Architecture

nyquist_validation is enabled in config.json.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual visual inspection + file existence checks |
| Config file | None — no automated test framework applies to design asset validation |
| Quick run command | `ls public/logo/ app/favicon.ico app/icon.svg app/apple-icon.png` |
| Full suite command | See acceptance tests below |

This phase produces static files, not executable code. Automated tests validate file existence and format; visual quality requires Dennis's approval.

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| REQ-001 | Logo SVG exists in /public/logo/ | file-existence | `test -f public/logo/fort-logo-primary.svg && echo PASS` | Wave 0 gap |
| REQ-001 | Logo PNG with transparent bg exists | file-existence | `test -f public/logo/fort-logo-primary.png && echo PASS` | Wave 0 gap |
| REQ-001 | Reversed (white) logo exists | file-existence | `test -f public/logo/fort-logo-reversed.png && echo PASS` | Wave 0 gap |
| REQ-001 | favicon.ico exists in app/ | file-existence | `test -f app/favicon.ico && echo PASS` | Wave 0 gap |
| REQ-001 | apple-icon.png exists in app/ | file-existence | `test -f app/apple-icon.png && echo PASS` | Wave 0 gap |
| REQ-001 | tailwind.config.js has fort-dark token | grep | `grep -q 'fort-dark' tailwind.config.js && echo PASS` | Wave 0 gap |
| REQ-001 | tailwind.config.js has fort-accent token | grep | `grep -q 'fort-accent' tailwind.config.js && echo PASS` | Wave 0 gap |
| REQ-001 | fonts.ts exports inter and cormorant | grep | `grep -q 'Cormorant_Garamond' app/fonts.ts && echo PASS` | Wave 0 gap |
| REQ-001 | Logo legibility at 32px | visual/manual | Dennis reviews favicon in browser tab | Manual |
| REQ-001 | Logo legibility at 150px | visual/manual | Dennis reviews on mobile viewport | Manual |
| REQ-001 | Logo legibility at 300px | visual/manual | Dennis reviews on desktop | Manual |
| REQ-001 | Palette choice documented | file | `grep -q 'fort-dark' tailwind.config.js && echo PASS` | Wave 0 gap |

### Sampling Rate

- **Per task commit:** `ls public/logo/ app/favicon.ico app/apple-icon.png 2>/dev/null`
- **Per wave merge:** Run all file-existence grep checks above
- **Phase gate:** All file-existence checks pass + Dennis visual approval of logo at all three sizes before `/gsd:verify-work`

### Wave 0 Gaps

All test targets are new files produced by this phase — none exist yet:

- [ ] `public/logo/fort-logo-primary.svg` — REQ-001 primary logo
- [ ] `public/logo/fort-logo-primary.png` — REQ-001 PNG fallback
- [ ] `public/logo/fort-logo-reversed.png` — REQ-001 white version for dark backgrounds
- [ ] `app/favicon.ico` — REQ-001 favicon
- [ ] `app/apple-icon.png` — REQ-001 Apple touch icon
- [ ] `app/icon.svg` — REQ-001 SVG favicon
- [ ] `app/fonts.ts` — REQ-001 font loading
- [ ] `tailwind.config.js` — REQ-001 color + font tokens

Framework install: None required for this phase (no test runner needed — shell file checks only).

### Dennis Approval Gate

The following cannot be validated programmatically and require explicit Dennis sign-off before Phase 2 begins:

1. Logo option chosen (Option 1 or Option 2)
2. Color palette chosen (A or C)
3. Logo readable at 32px in an actual browser tab (not just in Canva)
4. Logo readable at 150px (mobile header simulation)
5. Typography pairing feels correct (Cormorant heading + Inter body sample)

---

## Sources

### Primary (HIGH confidence)

- Next.js 14 official docs — https://nextjs.org/docs/14/app/building-your-application/optimizing/fonts — font loading, CSS variables, Tailwind integration
- Next.js App Router file conventions — https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons — favicon.ico, icon.svg, apple-icon.png placement
- Tailwind CSS v3 official docs — https://v3.tailwindcss.com/docs/customizing-colors — theme.extend.colors flat token syntax

### Secondary (MEDIUM confidence)

- Evil Martians favicon guide (2026 update) — https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs — three-file favicon strategy, SVG favicon support
- Canva Help Center — https://www.canva.com/help/transparent-background/ — transparent background PNG (Pro required)
- Canva Help Center — https://dailycreativeco.com/export-canva-logo-as-vector-file/ — SVG export steps, Pro requirement

### Tertiary (LOW confidence — needs validation by Dennis)

- Canva logo design steps synthesized from multiple tutorial sources — exact UI labels may vary by Canva version

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — next/font, Tailwind v3 config, and file-based favicon conventions all verified against official current docs
- Architecture: HIGH — Next.js file conventions are stable and version-specific (v14)
- Canva steps: MEDIUM — Canva UI steps verified across multiple tutorial sources but UI labels change with Canva updates; core workflow is stable
- Pitfalls: HIGH — Cormorant weight behavior, favicon sizing requirement, and palette token strategy all grounded in known technical facts

**Research date:** 2026-03-13
**Valid until:** 2026-06-13 (Tailwind v3 config is stable; Next.js 14 font API is stable; Canva UI may shift sooner)
