# Roadmap: Fort Property Developments

_Created: 2026-03-12_

---

## Milestone 1: Launch-Ready Website

**Goal:** Fort Property Developments goes live at www.FortPropertyDevelopments.com with a professional brand, 4-page website, working lead capture, and BC legal compliance.

**Success:** Dennis can share the URL with potential investors and buyers, and receive qualified inquiries via the contact form.

---

### Phase 1: Brand Identity

**Goal:** Finalized logo, color palette, and typography system. All brand assets exported and ready for the website build.

**Requirements:** REQ-001

**Deliverables:**
- Logo Option 1 (chevron mark + FORT wordmark) built in Canva — exported as SVG + PNG
- Logo Option 2 (clean Cormorant Garamond wordmark) built in Canva — exported as SVG + PNG
- Both options tested with Palette A (Charcoal+Copper) and Palette C (Forest+Stone)
- Logo tested at 32px, 150px, 300px sizes
- Favicon version created (simplified monogram or mark at 32px)
- Color tokens documented: hex codes for all palette colors
- Font selection confirmed: Cormorant Garamond (headings) + Inter (body)
- Final brand decision: which logo + which palette

**Key decisions Dennis must make:**
1. Logo direction: Option 1 (mark+wordmark) or Option 2 (wordmark only)?
2. Color palette: A (Charcoal+Copper) or C (Forest+Stone)?

---

### Phase 2: Project Setup and Shared Components

**Goal:** Next.js project initialized with brand system baked in. Navigation, footer, and core UI components built and working.

**Requirements:** REQ-002, REQ-003

**Deliverables:**
- `npx create-next-app` initialized with App Router + TypeScript + Tailwind
- `tailwind.config.js` with Fort color tokens and font config
- Logo SVG placed in `/public/logo/`
- `components/Nav.tsx` — responsive navigation with mobile hamburger
- `components/Footer.tsx` — contact info, nav links, privacy link, dynamic copyright year
- `components/Button.tsx` — primary and secondary variants
- `components/Section.tsx` — max-width container wrapper
- Formspree account created, endpoint URL in `.env.local`
- Google Fonts loaded via `next/font/google`
- Framer Motion installed and basic scroll animation utility ready
- `app/layout.tsx` with shared Nav + Footer rendering on all pages

**UAT:** Navigate to localhost:3000 — see nav with logo, working hamburger on mobile, footer with real contact info.

---

### Phase 3: Page Build

**Goal:** All 4 pages built with real copy and working interactive elements.

**Requirements:** REQ-004, REQ-005, REQ-006, REQ-007

**Deliverables:**

**Home Page (`app/page.tsx`):**
- Hero section: full-bleed image with overlay, H1, subheadline, 2 CTAs
- Value strip: 3-column Experience / Location / Quality
- Projects preview: 2–3 cards (placeholder/Coming Soon state)
- About teaser: photo + paragraph + Learn More CTA
- Trust bar: affiliation logos
- CTA banner: interest capture

**About Page (`app/about/page.tsx`):**
- Subpage hero
- Dennis founder section with photo + bio
- 3 company values with icons
- "Fort Difference" section (why multiplex infill, why this approach)
- Service area visual
- Affiliations row
- CTA to Contact

**Projects Page (`app/projects/page.tsx`):**
- Page header
- Project cards grid (at least 1 Planning-stage project)
- Register Interest form/modal (email capture per project)
- Pre-launch empty state with email capture

**Contact Page (`app/contact/page.tsx`):**
- Split layout: info left, form right
- Formspree-connected form (Name, Email, Phone, Project Interest, Message)
- Real email + phone visible as text
- "Responds within 1 business day" note

**UAT:**
- Submit contact form — Dennis receives email
- Submit Register Interest — captured by Formspree
- All pages mobile-responsive at 375px
- No broken images or missing copy

---

### Phase 4: Polish and Launch

**Goal:** Site is production-ready: SEO complete, performance optimized, legal pages in place, deployed to Vercel on custom domain.

**Requirements:** REQ-008, REQ-009, REQ-010

**Deliverables:**
- SEO: `metadata` export on all 4 pages (title, description, OG tags)
- Location keywords woven into copy (Burnaby, Surrey, North Vancouver, Coquitlam, Fraser Valley)
- Privacy Policy page at `/privacy` (generated via TermsFeed, linked in footer)
- Lighthouse audit run — performance > 85, accessibility > 90, best practices > 90
- All images through `next/image` (auto WebP, lazy load)
- Hero image < 300KB, card images < 100KB
- `sitemap.xml` and `robots.txt` generated
- Favicon: `.ico` + 192px PNG added to `/public/`
- Google Analytics 4 or Plausible installed and tracking
- Vercel deployment: `git push` auto-deploy pipeline working
- Custom domain `www.FortPropertyDevelopments.com` connected in Vercel
- SSL certificate active (Vercel auto-provisions)
- Final pre-launch review: test all forms, test all pages on iPhone + Android

**UAT:**
- Navigate to https://www.FortPropertyDevelopments.com — site loads over HTTPS
- Submit contact form on live site — Dennis receives notification email
- Mobile: all pages usable on iPhone SE (375px) without horizontal scroll

---

## Phase Order Summary

| Phase | Name | Depends On | Effort |
|-------|------|------------|--------|
| 1 | Brand Identity | Nothing | 1–2 sessions (Canva work) |
| 2 | Project Setup and Shared Components | Phase 1 | 1 session |
| 3 | Page Build | Phase 2 | 2–3 sessions |
| 4 | Polish and Launch | Phase 3 | 1 session |

---

## Notes

- **Phase 1 requires Dennis's input** — logo and color palette decision cannot be automated
- **Phase 3 copy** depends on Dennis providing: founder bio, real phone number, real email, project details
- **Renders:** For the Projects page, even a rough architectural sketch or AI-generated render beats a blank card
- **BCFSA reminder:** Do not accept any form of deposit or financial commitment until a Disclosure Statement is filed with BC Financial Services Authority
