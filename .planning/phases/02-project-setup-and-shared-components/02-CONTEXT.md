# Phase 2: Project Setup and Shared Components - Context

**Gathered:** 2026-03-14
**Status:** Ready for planning

<domain>
## Phase Boundary

Next.js project initialized with brand system baked in. Navigation, footer, and core UI components built and working. Deliverables: Next.js App Router + TypeScript + Tailwind initialized; Nav, Footer, Button, Section components; Framer Motion installed with scroll animation utility; `app/layout.tsx` rendering Nav + Footer on all pages.

</domain>

<decisions>
## Implementation Decisions

### Nav Links
- 4 links: **Home, Projects, About, Contact**
- Order: Home → Projects → About → Contact
- Home link = `/` (logo also links home, so "Home" may be hidden on desktop but present on mobile)

### Nav CTA
- Label: **"Book a Call"**
- Target: **`#booking`** placeholder (swap for real Calendly URL before launch)
- Styling: gold button (`bg-fort-gold`) matching old site "Get Started" CTA style

### Nav Scroll Behavior
- **Sticky** (fixed to top)
- **Subtle drop shadow** appears after scrolling ~50px
- No transparency-on-scroll — starts solid charcoal (`bg-fort-charcoal`)

### Mobile Navigation
- Hamburger icon opens a **full-screen overlay**
- Links and CTA **centered** in the overlay
- Overlay background: charcoal (`#1A1A2E`)
- Text: white, large, vertically centered

### Scroll Animations
- **Fade-in only** (opacity 0 → 1) — no slide/scale
- Trigger: element enters viewport
- Duration: ~400–600ms, ease-out
- Implement via a reusable `FadeIn` wrapper component using Framer Motion

### Card Stagger
- Project/property cards stagger **100ms** between each card
- First card animates first, subsequent cards follow in sequence
- Stagger applies within a `FadeInGroup` or `motion.div` parent

### Reduced Motion
- **Respect `prefers-reduced-motion`** — use Framer Motion's built-in `useReducedMotion()` hook
- When reduced motion is preferred: skip animation, elements render at full opacity immediately

### Claude's Discretion
- Exact hamburger icon (X vs three-line toggle animation)
- Footer column layout (3-column or 2-column)
- Button hover/focus states (within brand palette)
- Section component padding values
- Exact Framer Motion variant names

</decisions>

<specifics>
## Specific Ideas

- Old site reference: `C:/Users/denni/fort-property-developments/index.html` — 6-link nav (trim to 4), "Get Started" gold CTA, scroll-reveal on sections
- Old site scroll behavior: sections faded in as user scrolled — replicate this feel with Framer Motion
- Logo in nav: `fort-logo-reversed.svg` (white wordmark for dark nav background)
- Reversed logo already exists at `public/logo/fort-logo-reversed.svg`

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `public/logo/fort-logo-reversed.svg` — white wordmark for nav/footer (dark backgrounds)
- `public/logo/fort-logo-primary.svg` — charcoal wordmark for light backgrounds
- `app/icon.svg` — favicon monogram
- `tailwind.config.js` — all 5 brand color tokens ready (`fort-charcoal`, `fort-blue`, `fort-gold`, `fort-bg`, `fort-gray`)
- `app/fonts.ts` — Inter + Playfair Display exports, import and apply CSS variables in `app/layout.tsx`

### Established Patterns
- Font usage: `font-sans` = Inter (body/nav), `font-serif` = Playfair Display (headings H1–H5)
- Color naming: always use `fort-` prefixed tokens, never raw hex in components
- Logo placement: reversed logo on all dark-background elements (nav, footer)

### Integration Points
- `app/layout.tsx` must: import fonts from `./fonts`, apply `inter.variable` + `playfair.variable` to `<html>`, render `<Nav>` + `<Footer>` wrapping `{children}`
- Nav component receives no props — links and CTA are hardcoded per Phase 2 scope (dynamic routing in Phase 3)

</code_context>

<deferred>
## Deferred Ideas

- None raised during discussion — scope stayed within Phase 2 boundary

</deferred>

---

*Phase: 02-project-setup-and-shared-components*
*Context gathered: 2026-03-14*
