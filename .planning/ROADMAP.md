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

**Plans:** 1 plan

Plans:
- [ ] 01-01-PLAN.md — Scaffold brand docs, Canva design brief, logo exports, tailwind.config.js + fonts.ts

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

**Plans:** 3/3 plans complete

Plans:
- [x] 02-01-PLAN.md — Bootstrap Next.js into existing repo (packages, config files, layout, globals, page placeholder)
- [ ] 02-02-PLAN.md — Nav component (sticky, scroll shadow, desktop links, mobile full-screen overlay)
- [ ] 02-03-PLAN.md — Footer, Button, Section, FadeIn, FadeInGroup components

**Deliverables:**
- Next.js 15 manually installed into existing directory (no create-next-app)
- `tailwind.config.js` with Fort color tokens and font config (preserved from Phase 1)
- Logo SVG in `/public/logo/` (preserved from Phase 1)
- `components/Nav.tsx` — sticky nav, scroll shadow, desktop links, mobile hamburger overlay
- `components/Footer.tsx` — logo, nav links, contact info, privacy link, dynamic copyright year
- `components/Button.tsx` — primary and secondary variants
- `components/Section.tsx` — max-width container wrapper
- `components/animations/FadeIn.tsx` — viewport-triggered fade (motion/react)
- `components/animations/FadeInGroup.tsx` — 100ms staggered children
- `.env.local` with Formspree placeholder
- `app/layout.tsx` with shared Nav + Footer rendering on all pages

**UAT:** Navigate to localhost:3000 — see nav with logo, working hamburger on mobile, footer with contact info.

---

### Phase 3: Page Build

**Goal:** All 4 pages built with real copy and working interactive elements.

**Requirements:** REQ-004, REQ-005, REQ-006, REQ-007

**Plans:** 5/6 plans executed

Plans:
- [ ] 03-01-PLAN.md — Foundation: fix Nav CTA, update Footer contact info, download hero image
- [ ] 03-02-PLAN.md — Home page: hero, value strip, projects preview, about teaser, trust bar, CTA banner
- [ ] 03-03-PLAN.md — About page: subpage hero, founder bio, values, Fort Difference, service area, affiliations, CTA
- [ ] 03-04-PLAN.md — Projects page: project card grid, RegisterInterestForm, pre-launch empty state
- [ ] 03-05-PLAN.md — Contact page: split layout, ContactForm with Formspree integration and fallback
- [ ] 03-06-PLAN.md — Human verify checkpoint: all 4 pages at localhost:3000 desktop + mobile

**Deliverables:**

**Home Page (`app/page.tsx`):**
- Hero section: full-bleed image with overlay, H1, subheadline, 2 CTAs
- Value strip: 3-column Experience / Location / Quality
- Projects preview: 2–3 project cards (placeholder/Coming Soon state)
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
- Register Interest inline form (email capture per project)
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

**Plans:** 3/5 plans executed

Plans:
- [ ] 04-01-PLAN.md — Install next-sitemap + next-plausible, add postbuild script, write sitemap config
- [ ] 04-02-PLAN.md — SEO metadata on root layout and all 4 pages (titles, descriptions, OG tags)
- [ ] 04-03-PLAN.md — Privacy Policy page at /privacy + favicon.ico + icon.png
- [ ] 04-04-PLAN.md — Plausible analytics via PlausibleProvider in root layout
- [ ] 04-05-PLAN.md — Launch sequence: Formspree activation, Lighthouse audit, Vercel deploy, domain DNS

**Deliverables:**
- SEO: `metadata` export on all 4 pages (title, description, OG tags)
- Location keywords woven into copy (Burnaby, Surrey, North Vancouver, Coquitlam, Fraser Valley)
- Privacy Policy page at `/privacy` (generated via TermsFeed, linked in footer)
- Lighthouse audit run — performance > 85, accessibility > 90, best practices > 90
- All images through `next/image` (auto WebP, lazy load)
- Hero image < 300KB, card images < 100KB
- `sitemap.xml` and `robots.txt` generated
- Favicon: `.ico` + 192px PNG added to `app/`
- Plausible analytics installed and tracking
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
| 2 | 3/3 | Complete   | 2026-03-14 |
| 3 | 5/6 | In Progress|  |
| 4 | 3/5 | In Progress|  |

---

## Notes

- **Phase 1 requires Dennis's input** — logo and color palette decision cannot be automated
- **Phase 3 copy** depends on Dennis providing: founder bio, real phone number, real email, project details
- **Renders:** For the Projects page, even a rough architectural sketch or AI-generated render beats a blank card
- **BCFSA reminder:** Do not accept any form of deposit or financial commitment until a Disclosure Statement is filed with BC Financial Services Authority
