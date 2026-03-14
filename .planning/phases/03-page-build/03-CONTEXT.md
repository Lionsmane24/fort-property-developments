# Phase 3: Page Build - Context

**Gathered:** 2026-03-14
**Status:** Ready for planning

<domain>
## Phase Boundary

Build all 4 pages (Home, About, Projects, Contact) with real copy and working interactive elements. Pages use shared components from Phase 2 (Nav, Footer, Button, Section, FadeIn). Out of scope: SEO metadata, analytics, deployment, Privacy Policy page — those are Phase 4.

</domain>

<decisions>
## Implementation Decisions

### Real Contact Information
- **Email:** Dennis@fortpropertydevelopment.com
- **Phone:** 604-290-6046
- Use these in Footer (replacing placeholders), Contact page info block, and any CTA sections

### Founder Bio
- Write a draft bio for the About page based on project context:
  - BC roots, Metro Vancouver + Fraser Valley focus
  - Multiplex infill specialist (4–6 units)
  - Fort mission: strength, solidity, community
  - Pre-launch stage — credibility from brand quality and commitment, not completed projects yet
- Dennis can refine the draft copy before launch

### Projects Page
- Use a realistic placeholder project card: **"Burnaby Multiplex — 4-unit infill, Planning"**
- Include status badge styled as "Planning" with appropriate indicator color
- Show the pre-launch empty state alongside: "More projects coming soon. Register for early access."
- Register Interest = inline email capture form (not a modal — simpler, no JS overhead, works on mobile)

### Formspree Integration
- Build Contact form wired to Formspree with `process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT` from `.env.local`
- Current value in `.env.local` is placeholder `xxx` — Dennis to create account at formspree.io before Phase 4 launch
- Form should degrade gracefully if endpoint not set (show a mailto link fallback)

### Claude's Discretion
- Hero image: select a high-quality architectural/urban architectural free stock photo (Unsplash) as the hero background — use `next/image` with priority flag and dark overlay for legibility
- H1 headline copy direction: "Building Metro Vancouver's Next Generation of Homes" or similar — strong, geographic, forward-looking
- Home page value strip icons: use inline SVG or Heroicons (already likely available via Tailwind ecosystem)
- About page service area: text-based with a styled list/grid of covered regions (Metro Van, Fraser Valley, North Shore, Tri-Cities) — no map embed (Phase 4 V2)
- Affiliations (CHBA, HAVAN): use text placeholders styled as logo boxes — "CHBA Member" etc. — until real logos are provided
- Founder photo: use a professional placeholder (gray silhouette or avatar) — Dennis to swap for real headshot before launch

</decisions>

<specifics>
## Specific Ideas

- BCFSA compliance: all CTAs must say "Register Interest" or "Join Waitlist" — NEVER "reserve" or "deposit"
- Contact page must show email and phone as visible, clickable text — not hidden behind form only
- "Responds within 1 business day" note on contact form
- Projects page: project cards from REQUIREMENTS: render/photo, project name, type, location, status badge, CTA
- Register Interest on Projects page captures email per-project — send to Formspree same endpoint as Contact form
- Trust bar on Home page: if no real affiliation logos, use styled text badges ("CHBA" / "HAVAN" / "UDI") with brand colors

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/Button.tsx` — primary (gold fill) and secondary (outline) variants; renders as `<a>` when href is provided
- `components/Section.tsx` — `py-16 md:py-24` vertical rhythm, `max-w-6xl` container, consistent horizontal padding
- `components/animations/FadeIn.tsx` — viewport-triggered opacity fade, `delay` prop for staggering
- `components/animations/FadeInGroup.tsx` — 100ms stagger across children
- `components/Nav.tsx` — sticky charcoal header, scroll shadow, mobile hamburger overlay; already renders on all pages via `app/layout.tsx`
- `components/Footer.tsx` — already built; update `info@fortpropertydev.com` → `Dennis@fortpropertydevelopment.com` and `604-555-0000` → `604-290-6046`

### Established Patterns
- `font-serif` → Playfair Display (all H1–H3 headings)
- `font-sans` → Inter (body, nav, labels, buttons)
- Always use `fort-` prefixed color tokens (`fort-charcoal`, `fort-gold`, `fort-bg`, `fort-gray`) — never raw hex
- Dark backgrounds: use `fort-charcoal` or `bg-zinc-900`; light backgrounds: `fort-bg`
- Reversed logo (`fort-logo-reversed.svg`) on dark backgrounds; primary logo (`fort-logo-primary.svg`) on light
- Images via `next/image` (auto WebP, lazy load by default; add `priority` for hero/above-fold)

### Integration Points
- New pages go in `app/` directory: `app/about/page.tsx`, `app/projects/page.tsx`, `app/contact/page.tsx`
- Home page is `app/page.tsx` (replace placeholder)
- All pages automatically get Nav + Footer from `app/layout.tsx`
- Formspree endpoint from `process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT` (set in `.env.local`)

</code_context>

<deferred>
## Deferred Ideas

- None raised — discussion stayed within Phase 3 scope

</deferred>

---

*Phase: 03-page-build*
*Context gathered: 2026-03-14*
