# Requirements: Fort Property Developments

_Generated: 2026-03-12 | Based on research in `.planning/research/`_

---

## Scope Statement

A professional 4-page marketing website for Fort Property Developments — a pre-launch BC real estate developer focused on 4–6 unit multiplex infill. Primary goal: generate qualified leads and establish credibility before the first project completes.

**Out of scope for v1:** CMS, backend, investor portal, individual project sub-pages, blog, social feeds.

---

## V1 Requirements (Launch)

### REQ-001: Brand Identity System
**Priority:** P0 — Blocker for everything else
- Design logo in Canva: Option 1 (chevron/battlement mark + "FORT" wordmark) and Option 2 (clean serif wordmark)
- Test both logos with color palettes A (Charcoal+Copper) and C (Forest+Stone)
- Verify logo legibility at 32px (favicon), 150px (mobile header), 300px (desktop header)
- Export final logo as SVG (primary) + PNG with transparent background
- Define brand color tokens in `tailwind.config.js`:
  - Palette A: `fort-dark` #1C1C1E, `fort-accent` #B87333, `fort-bg` #F5F0EB
  - Palette C (alternative): `fort-dark` #1E3A2F, `fort-stone` #8B7355, `fort-bg` #FAFAF8
- Typography: Cormorant Garamond (headings H1–H3), Inter (body + nav + labels)

### REQ-002: Next.js Project Setup
**Priority:** P0
- Initialize Next.js 14+ project with App Router in root directory
- Install and configure Tailwind CSS 3.4+ with Fort custom color tokens
- Install Framer Motion for scroll animations
- Set up Google Fonts: Cormorant Garamond + Inter via `next/font/google`
- Configure `next.config.js` for image optimization
- Add `.env.local` template with `FORMSPREE_ENDPOINT` placeholder
- Project structure: `app/`, `components/`, `public/images/`, `public/logo/`

### REQ-003: Shared Components
**Priority:** P0
- **Navigation:** Logo left, links right (Home · About · Projects · Contact), "Register Interest" CTA button, mobile hamburger menu with slide-out drawer
- **Footer:** Logo, nav links, contact info (email + phone), Privacy Policy link, copyright with dynamic year, service area text
- **Button component:** Primary (accent fill) and secondary (outline) variants
- **Section container:** Consistent max-width + horizontal padding wrapper

### REQ-004: Home Page
**Priority:** P0
- **Hero:** Full-width with dark overlay on architectural image/render, H1 headline, subheadline, dual CTAs ("View Our Projects" + "Register Interest")
- **Value strip:** 3-column — Experience · Location · Quality (icons + short text)
- **Projects preview:** 2–3 project cards (can be "Coming Soon" placeholders)
- **About teaser:** 2-column layout — Dennis photo left, intro paragraph + "Learn More" CTA right
- **Trust bar:** CHBA / HAVAN / affiliation logos (placeholder if not yet members)
- **CTA banner:** Dark background, email interest capture or "Get In Touch" button
- **Performance:** Hero image via `next/image` with priority flag, <3s load target

### REQ-005: About Page
**Priority:** P0
- **Page hero:** Subpage header with brand background
- **Founder section:** Dennis photo + bio paragraph (story, BC roots, motivation)
- **Mission section:** 3 company values with icons
- **The Fort Difference:** Why 4–6 unit multiplex? Why this approach?
- **Service area:** Visual representation of Metro Vancouver + Fraser Valley + North Shore + Tri-Cities coverage
- **Affiliations row:** CHBA, HAVAN, UDI logos (placeholder if pending)
- **Page CTA:** "Ready to talk?" → links to Contact

### REQ-006: Projects Page
**Priority:** P0
- **Page header:** "Our Developments"
- **Project cards grid:** Each card has render/photo, project name, type (e.g., "4-unit multiplex"), location (e.g., "Burnaby, BC"), status badge ("Planning" with styled indicator), CTA ("Register Interest")
- **Register Interest modal or inline form:** Email capture tied to specific project
- **Empty/pre-launch state:** "More projects coming soon. Register for early access." with email capture
- **Legal compliance:** All CTAs say "Register Interest" or "Join Waitlist" — NEVER "reserve" or "deposit"

### REQ-007: Contact Page
**Priority:** P0
- **Split layout:** Contact info left, form right
- **Contact info block:** Email address, phone number, LinkedIn, service area statement
- **Form fields:** Name (required), Email (required), Phone, Project Interest (dropdown), Message
- **Formspree integration:** Form action points to Formspree endpoint (no backend)
- **Response expectation:** "We respond within 1 business day"
- **Real contact info:** Email and phone MUST be visible text, not just in the form

### REQ-008: SEO & Meta
**Priority:** P1
- Unique `<title>` and `<meta name="description">` for all 4 pages via Next.js Metadata API
- `<h1>` tag on every page
- Open Graph tags (og:title, og:description, og:image) for social sharing
- Location signals in copy: mention Burnaby, Surrey, North Vancouver, Coquitlam, Fraser Valley
- BC New Home Warranty reference on appropriate pages
- `robots.txt` and `sitemap.xml` (auto-generated via Next.js)

### REQ-009: Privacy Policy Page
**Priority:** P1 (required before launch under PIPA BC)
- Separate `/privacy` route
- Content: free generator output from TermsFeed or Termly
- Linked in footer on all pages
- Required because site collects personal data via contact/interest forms

### REQ-010: Performance & Technical
**Priority:** P1
- All images via `next/image` (auto WebP conversion, lazy loading)
- Hero image < 300KB; card images < 100KB
- Lighthouse performance score > 85 on mobile
- HTTPS enforced (Vercel handles automatically)
- Favicon: simplified logo version at 32px, exported as `.ico` and 192px PNG for PWA
- Google Analytics 4 or Plausible analytics installed

---

## V2 Requirements (Post-Launch)

_Not in scope for launch — tracked here to avoid over-engineering v1._

- Individual project detail pages (when projects advance past planning)
- "Project update" email newsletter integration (Mailchimp/ConvertKit)
- Google Maps embed showing service area or project locations
- Testimonials section (when available from trades, city planning, early buyers)
- Pricing range display (when appropriate per BCFSA stage)
- Founder video embed (60-second intro — high-impact when produced)
- Press / media mentions section
- Investor interest separate form (with appropriate legal disclaimers)
- Blog / news section for SEO content

---

## Out of Scope

- Any deposit collection or financial commitments (BCFSA compliance)
- CMS or admin panel for content editing
- Backend server or database
- Authentication or user accounts
- Multi-language support
- Custom email server (Formspree handles form; real email via existing provider)
- Social media integration beyond link icons

---

## Constraints

1. **Legal (BCFSA):** No deposits, reservations, or binding commitments. "Register Interest" only.
2. **Legal (PIPA BC):** Privacy Policy page required before collecting any personal data.
3. **Legal (FINTRAC):** Website itself doesn't trigger registration; flag for Dennis when actual sales process begins.
4. **Brand:** No stock photos of generic homes/families. Architectural renders or genuine local photography only.
5. **Copy:** No "committed to excellence" or generic corporate language. Be specific and geographic.
6. **Performance:** Mobile-first. 60%+ of target audience browses on mobile.

---

## Success Criteria

- [ ] Site loads in < 3 seconds on mobile (4G)
- [ ] Contact form submissions reach Dennis's email within 5 minutes
- [ ] "Register Interest" flow works end-to-end on all 4 pages
- [ ] All 4 pages pass mobile viewport test (375px iPhone SE minimum)
- [ ] Logo is legible at 32px favicon size
- [ ] Lighthouse accessibility score > 90
- [ ] No visible real email/phone is hidden behind forms only
- [ ] Privacy Policy is linked in footer and accessible at `/privacy`
