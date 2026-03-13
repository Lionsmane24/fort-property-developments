# Architecture Research: Fort Property Developments

## Page Structure

### Home Page
```
[Navigation Bar] — Logo left | Home · About · Projects · Contact right | CTA button
[Hero Section] — Full-width, dark overlay on architectural render/photo
  - Headline: "Building Quality Homes Across Greater Vancouver"
  - Subheadline: "Mid-market multi-plex development. Thoughtfully designed."
  - CTA: "View Our Projects" + secondary "Register Interest"
[Value Proposition Strip] — 3 columns: Experience · Location · Quality
[Projects Preview] — 2-3 project cards (even if "Coming Soon")
[About Teaser] — 2-col: photo of Dennis | brief intro paragraph + "Learn More"
[Trust Bar] — Logos: CHBA · HAVAN · any affiliations
[CTA Banner] — Dark background: "Interested in our next project?" + form or button
[Footer] — Logo, nav links, contact info, privacy policy, copyright
```

### About Page
```
[Hero] — Subpage header with brand background image
[Founder Section] — Dennis photo + bio paragraph (story, motivation, BC roots)
[Mission Section] — What Fort stands for (3 values with icons)
[The Fort Difference] — Why 4-6 unit multiplex? Why this approach?
[Service Area Map] — Visual of Metro Van + Fraser Valley coverage
[Affiliations] — CHBA, HAVAN, UDI logos
[CTA] — "Ready to talk about your next project?" → Contact
```

### Projects Page
```
[Page Header] — "Our Developments"
[Status Filter Bar] — All | Planning | Coming Soon | In Progress | Complete
[Project Cards Grid] — Each card:
  - Render/photo
  - Project name (e.g., "Fort Kingsway" or address)
  - Type: 4-unit multiplex
  - Location: Burnaby, BC
  - Status badge: "Planning" (with soft glow)
  - CTA: "Learn More" → individual project page OR "Register Interest" modal
[Empty State] — "More projects coming soon. Register for early access."
[Register Interest CTA] — Email capture form
```

### Contact Page
```
[Split Layout]
  Left: Contact info (email, phone, LinkedIn, service area)
  Right: Contact form
    Fields: Name*, Email*, Phone, Project Interest (dropdown), Message
    Submit: "Send Message"
[Response Expectation] — "We respond within 1 business day"
[Map] — Optional: Google Maps embed showing service area
```

## Visual Design System

### Color Palette

Based on research of top BC developer websites, two palettes tested well:

**Option A — Charcoal + Warm White + Copper/Bronze Accent** (Recommended)
```
Primary Dark:    #1C1C1E  (near-black charcoal — main nav, footer, headings)
Secondary:       #2D2D2D  (slightly lighter charcoal — card backgrounds)
Accent:          #B87333  (copper/bronze — CTAs, highlights, logo accent)
Light:           #F5F0EB  (warm white — page background)
Text Light:      #FFFFFF  (white on dark backgrounds)
Text Dark:       #1C1C1E  (on light backgrounds)
```
*Rationale: "Fort" evokes permanence and strength. Copper/bronze is architectural — used in high-end BC builds. Feels modern without being cold.*

**Option B — Navy + White + Gold**
```
Primary:         #0F2240  (deep navy)
Accent:          #C5A028  (gold)
Light:           #FFFFFF
Text:            #1A1A1A
```
*Rationale: Classic BC real estate trust palette — used by Anthem, Bosa tier. Risk: feels generic without strong typography.*

**Option C — Forest + Stone + White** (distinctive)
```
Primary:         #1E3A2F  (deep forest green)
Secondary:       #8B7355  (warm stone/tan)
Light:           #FAFAF8  (off-white)
Accent:          #E8E0D5  (light stone)
```
*Rationale: Pacific NW identity — connects Fort to BC's landscape. Strong visual differentiation from every navy developer.*

**Recommendation for Fort:** Option A (Charcoal + Copper) or Option C (Forest + Stone). Both are more distinctive than navy+gold, which is saturated in BC real estate.

### Typography

```
Headings (H1-H3):  Cormorant Garamond — elegant, architectural, premium
Navigation/Labels: Inter — clean, modern, highly readable
Body Copy:         Inter — pairs perfectly with Cormorant
```

Alternative heading: Playfair Display (slightly more traditional, equally premium)

### Spacing Principle
- Generous padding: 80-120px section vertical padding on desktop
- Mobile: 48-64px
- White space is a signal of confidence — premium developers don't crowd

### Logo Direction

**Option 1 — Wordmark with Geometric Mark**
```
[▲] FORT
     PROPERTY DEVELOPMENTS
```
A chevron/fort battlement shape above "FORT" — angular, architectural, strong.
Color: Copper/charcoal on light | White/copper on dark

**Option 2 — Clean Wordmark Only**
```
FORT
PROPERTY DEVELOPMENTS
```
Strong serif (Cormorant) for "FORT", lighter weight sans for "PROPERTY DEVELOPMENTS"
Color: Charcoal + copper accent underscore

**Option 3 — Shield Monogram**
```
[Shield containing F]
Fort Property Developments
```
A simplified heraldic shield with "F" inside — fortress reference is direct and memorable

**Recommendation:** Build Option 1 (geometric mark + wordmark) and Option 2 (clean wordmark) in Canva — present both. Option 3 risks looking like a sports team without strong execution.

## Build Order

```
Phase 1: Brand Identity
  1. Logo (2-3 Canva options)
  2. Color palette finalized
  3. Typography selected

Phase 2: Site Structure
  1. Project setup (Next.js + Tailwind)
  2. Component library (nav, footer, buttons, cards)
  3. Layout system

Phase 3: Page Build
  1. Home page (most important)
  2. Contact page (lead gen)
  3. About page (credibility)
  4. Projects page (placeholder + CTA)

Phase 4: Polish & Launch
  1. SEO metadata
  2. Analytics setup
  3. Form testing
  4. Performance optimization
  5. Domain + hosting setup
```
