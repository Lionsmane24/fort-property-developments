# Phase 3: Page Build - Research

**Researched:** 2026-03-14
**Domain:** Next.js App Router page composition, Formspree form integration, static marketing page patterns
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Real Contact Information:**
- Email: Dennis@fortpropertydevelopment.com
- Phone: 604-290-6046
- Use in Footer (replacing placeholders), Contact page info block, and any CTA sections

**Founder Bio:**
- Write a draft bio for the About page based on project context:
  - BC roots, Metro Vancouver + Fraser Valley focus
  - Multiplex infill specialist (4–6 units)
  - Fort mission: strength, solidity, community
  - Pre-launch stage — credibility from brand quality and commitment, not completed projects yet
- Dennis can refine the draft copy before launch

**Projects Page:**
- Realistic placeholder: "Burnaby Multiplex — 4-unit infill, Planning"
- Status badge styled as "Planning" with appropriate indicator color
- Pre-launch empty state: "More projects coming soon. Register for early access."
- Register Interest = inline email capture form (not a modal)

**Formspree Integration:**
- Build Contact form wired to Formspree with `process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT` from `.env.local`
- Current value in `.env.local` is placeholder `xxx` — Dennis to create account before Phase 4 launch
- Form should degrade gracefully if endpoint not set (show a mailto link fallback)

### Claude's Discretion
- Hero image: select a high-quality architectural/urban architectural free stock photo (Unsplash) as the hero background — use `next/image` with priority flag and dark overlay for legibility
- H1 headline copy direction: "Building Metro Vancouver's Next Generation of Homes" or similar — strong, geographic, forward-looking
- Home page value strip icons: use inline SVG or Heroicons (already likely available via Tailwind ecosystem)
- About page service area: text-based with a styled list/grid of covered regions (Metro Van, Fraser Valley, North Shore, Tri-Cities) — no map embed
- Affiliations (CHBA, HAVAN): use text placeholders styled as logo boxes ("CHBA Member" etc.) — until real logos are provided
- Founder photo: use a professional placeholder (gray silhouette or avatar) — Dennis to swap for real headshot before launch

### Deferred Ideas (OUT OF SCOPE)
- None raised — discussion stayed within Phase 3 scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| REQ-004 | Home page: hero, value strip, projects preview, about teaser, trust bar, CTA banner | Next.js page composition with Section + FadeIn + Button components; next/image for hero with priority |
| REQ-005 | About page: subpage hero, founder section, 3 values, Fort Difference, service area, affiliations, CTA | Static server component; inline SVG icons; text-badge pattern for affiliations |
| REQ-006 | Projects page: project card grid, Register Interest inline form, pre-launch empty state, BCFSA-compliant CTAs | @formspree/react useForm hook in 'use client' component; inline form pattern confirmed |
| REQ-007 | Contact page: split layout, info + form, Formspree-connected, real contact info visible, 1-business-day note | @formspree/react useForm + ValidationError; graceful fallback to mailto when env var is placeholder |
</phase_requirements>

---

## Summary

Phase 3 builds four static marketing pages (Home, About, Projects, Contact) that compose shared components from Phase 2. The technical work is primarily JSX composition and one client-side form integration — no new infrastructure needed. The `@formspree/react` package is already installed (`^3.0.0`) and provides a `useForm` hook that handles AJAX submission, success state, and field-level validation errors. All other page sections are server components.

The Nav currently has a "Book a Call" CTA linking to `#booking` — this anchor does not exist anywhere. Per REQUIREMENTS, the Nav CTA should say "Register Interest." This is a carryover gap from Phase 2 that Phase 3 must fix as part of the Contact page work (or as a standalone first task).

The Formspree endpoint is a placeholder (`xxx`) in `.env.local`. The form must degrade gracefully — if `NEXT_PUBLIC_FORMSPREE_ENDPOINT === 'xxx'` or is unset, show a mailto fallback. This ensures the site is functional for Dennis before he creates a Formspree account.

**Primary recommendation:** Build pages as server components where possible; isolate all `useForm` / interactive state into small `'use client'` leaf components. Use the existing `Section`, `Button`, `FadeIn`, and `FadeInGroup` components consistently throughout.

---

## Standard Stack

### Core (already installed)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | ^16.1.6 | App Router pages, `next/image`, `Link` | Project baseline |
| react | ^19.2.4 | Component model | Project baseline |
| @formspree/react | ^3.0.0 | Form submission without backend | Already installed; handles AJAX, state, validation errors |
| motion | ^12.36.0 | FadeIn animations (already built) | Already built in Phase 2 |
| tailwindcss | ^3.4.19 | All styling | Project baseline |

### No new installs required

All dependencies for Phase 3 are already present. No `npm install` step needed.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| @formspree/react | Native fetch to Formspree endpoint | @formspree/react gives state machine (submitting/succeeded/errors) for free; native fetch requires hand-rolling the same logic |
| @formspree/react | react-hook-form | react-hook-form is more powerful but overkill for a 5-field form; @formspree/react is already installed |

---

## Architecture Patterns

### Page Directory Structure

```
app/
├── page.tsx                  # Home (replace placeholder stub)
├── about/
│   └── page.tsx              # About
├── projects/
│   └── page.tsx              # Projects
└── contact/
    └── page.tsx              # Contact (imports ContactForm client component)

components/
├── ContactForm.tsx           # 'use client' — useForm hook, Formspree, fallback
├── RegisterInterestForm.tsx  # 'use client' — inline email capture for Projects page
└── [existing Phase 2 components unchanged]
```

### Pattern 1: Server Page + Client Leaf

All four pages are server components by default (no `'use client'` at the top). Interactive pieces are extracted into small client components that are imported inside server pages.

```typescript
// app/contact/page.tsx — SERVER component, no directive needed
import { Section } from '@/components/Section'
import ContactForm from '@/components/ContactForm'  // client component

export default function ContactPage() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12">
        {/* info block — pure JSX, no client */}
        <div>
          <h2 className="font-serif text-3xl text-fort-charcoal">Get in Touch</h2>
          <a href="mailto:Dennis@fortpropertydevelopment.com">
            Dennis@fortpropertydevelopment.com
          </a>
          <a href="tel:+16042906046">604-290-6046</a>
        </div>
        {/* form — client component */}
        <ContactForm />
      </div>
    </Section>
  )
}
```

### Pattern 2: Formspree useForm Hook

```typescript
// components/ContactForm.tsx
'use client'
import { useForm, ValidationError } from '@formspree/react'

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

export default function ContactForm() {
  const [state, handleSubmit] = useForm(ENDPOINT ?? '')

  // Graceful fallback when endpoint is placeholder or unset
  if (!ENDPOINT || ENDPOINT === 'xxx') {
    return (
      <p className="text-fort-gray">
        To reach us directly:{' '}
        <a href="mailto:Dennis@fortpropertydevelopment.com" className="text-fort-gold underline">
          Dennis@fortpropertydevelopment.com
        </a>
      </p>
    )
  }

  if (state.succeeded) {
    return (
      <p className="text-fort-gray font-semibold">
        Thank you — we'll respond within 1 business day.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* fields */}
      <input name="name" type="text" required placeholder="Name" />
      <ValidationError field="name" prefix="Name" errors={state.errors} />
      <input name="email" type="email" required placeholder="Email" />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <input name="phone" type="tel" placeholder="Phone" />
      <select name="project_interest">
        <option value="">Project Interest</option>
        <option value="burnaby-multiplex">Burnaby Multiplex</option>
        <option value="general">General Inquiry</option>
      </select>
      <textarea name="message" required placeholder="Message" rows={5} />
      <ValidationError errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
```

Source: Cloudflare Pages / Formspree tutorial (verified against @formspree/react v3 package behavior)

### Pattern 3: Hero with next/image + Dark Overlay

```typescript
// Hero section inside app/page.tsx
import Image from 'next/image'
import { Button } from '@/components/Button'

// Hero uses relative positioning; overlay uses absolute inset-0
<section className="relative w-full h-[80vh] min-h-[560px] flex items-center">
  <Image
    src="/images/hero-bg.jpg"
    alt="Modern multiplex development in Metro Vancouver"
    fill
    priority
    className="object-cover object-center"
    sizes="100vw"
  />
  {/* Dark overlay for legibility */}
  <div className="absolute inset-0 bg-fort-charcoal/70" />
  {/* Content above overlay */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
      Building Metro Vancouver's Next Generation of Homes
    </h1>
    <div className="flex gap-4 mt-8">
      <Button href="/projects">View Our Projects</Button>
      <Button href="/contact" variant="secondary">Register Interest</Button>
    </div>
  </div>
</section>
```

Note: `next/image` with `fill` requires the parent to have `position: relative` and a defined height. The image domain config in `next.config.ts` is empty — Unsplash images must be downloaded to `public/images/` (not fetched from `images.unsplash.com` at runtime) OR the remote domain must be added to `next.config.ts`.

### Pattern 4: Project Card

```typescript
// Inline in app/projects/page.tsx or extracted to components/ProjectCard.tsx
interface Project {
  name: string
  type: string
  location: string
  status: 'Planning' | 'Under Construction' | 'Complete'
  image?: string
}

const STATUS_COLORS = {
  Planning: 'bg-amber-100 text-amber-800',
  'Under Construction': 'bg-blue-100 text-blue-800',
  Complete: 'bg-green-100 text-green-800',
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      {/* placeholder image area */}
      <div className="h-48 bg-fort-charcoal/10 flex items-center justify-center">
        <span className="text-fort-gray text-sm">Render coming soon</span>
      </div>
      <div className="p-6">
        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${STATUS_COLORS[project.status]}`}>
          {project.status}
        </span>
        <h3 className="font-serif text-xl mt-2">{project.name}</h3>
        <p className="text-fort-gray text-sm">{project.type} · {project.location}</p>
        {/* Register Interest inline form below card */}
      </div>
    </div>
  )
}
```

### Pattern 5: Subpage Hero (About / Projects / Contact)

Simpler than the home hero — no background image, uses brand background:

```typescript
<section className="bg-fort-charcoal py-16 md:py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="font-serif text-4xl md:text-5xl text-white">About Fort Property</h1>
    <p className="text-gray-300 mt-4 max-w-xl">
      BC-rooted. Metro Vancouver focused. Building for the long term.
    </p>
  </div>
</section>
```

### Anti-Patterns to Avoid

- **`use client` on entire pages:** Defeats server-rendering. Keep client boundaries small — only form components and interactive widgets need `'use client'`.
- **Hardcoding the Formspree endpoint string:** Always read from `process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT`. The env var is already wired in `.env.local`.
- **Using `next/image` with a remote Unsplash URL without adding the domain to `next.config.ts`:** Will throw a runtime error. Download images locally to `public/images/` instead.
- **`<img>` tags instead of `next/image`:** Loses WebP conversion and lazy loading.
- **"reserve", "deposit", "buy" language in CTAs:** BCFSA legal violation. All CTAs must say "Register Interest" or "Join Waitlist."
- **Nav CTA says "Book a Call":** Current Nav links to `#booking` which doesn't exist. This must be updated to "Register Interest" linking to `/contact` (or a `#register-interest` anchor on the home page).

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form submission + state | Custom fetch + useState | @formspree/react `useForm` | Handles submitting/succeeded/errors state machine, CSRF, validation errors — already installed |
| Form validation display | Custom error rendering | `ValidationError` from @formspree/react | Per-field and form-level error display handled |
| Scroll animation | Custom IntersectionObserver | `FadeIn` / `FadeInGroup` from Phase 2 | Already built and tested |
| Page layout padding/max-width | Custom wrapper divs | `Section` component | Consistent rhythm already established |
| Button styles | Inline Tailwind on `<a>` | `Button` component | Primary/secondary variants, focus ring, disabled state, a-vs-button rendering |

**Key insight:** Phase 3 is a composition phase, not a build phase. The infrastructure is done. The work is wiring copy and layout into existing primitives.

---

## Common Pitfalls

### Pitfall 1: Hero image rendered from Unsplash remote URL

**What goes wrong:** `next/image` with a `src` from `images.unsplash.com` throws `Error: Invalid src prop` at runtime unless the domain is whitelisted in `next.config.ts`.
**Why it happens:** Next.js Image Optimization requires explicit domain allowlisting for security.
**How to avoid:** Download the chosen Unsplash image locally to `public/images/hero-bg.jpg`. Use `src="/images/hero-bg.jpg"` (local). No config change needed.
**Warning signs:** Build passes but runtime throws on page load.

### Pitfall 2: next/image `fill` with no explicit parent height

**What goes wrong:** Image renders as 0px height, invisible.
**Why it happens:** `fill` positions the image absolutely; parent needs defined height.
**How to avoid:** Parent element must have `position: relative` (via `relative` class) and a defined height (`h-[80vh]` or similar). Always pair `fill` with `sizes` prop for responsive optimization.

### Pitfall 3: Formspree returns 422 when endpoint is placeholder

**What goes wrong:** Form submits but Formspree returns a 422 error, `state.errors` is populated, UX breaks.
**Why it happens:** `useForm('xxx')` sends to a non-existent form hash.
**How to avoid:** Check `ENDPOINT === 'xxx'` before rendering the form. Show the mailto fallback instead. This is already specified in locked decisions.

### Pitfall 4: Forgetting pt-16 / pt-20 padding for fixed Nav

**What goes wrong:** Page content renders beneath the fixed Nav header, cutting off the top of hero sections.
**Why it happens:** Nav is `position: fixed`, so it's out of flow — content starts at the top of the viewport.
**How to avoid:** Either add `pt-16 md:pt-20` (matching Nav height `h-16 md:h-20`) to the first section of each page, or make the hero full-bleed by intentionally overlapping (then ensure overlay text is above the nav z-index, which is `z-50`).
**Warning signs:** Text or top of hero image is cut off behind the charcoal nav bar.

### Pitfall 5: FadeInGroup requires `React.ReactNode[]` (array), not a single child

**What goes wrong:** TypeScript error when passing a single child to `FadeInGroup`.
**Why it happens:** `FadeInGroup` types `children` as `React.ReactNode[]` — a typed array, not the union type React normally accepts.
**How to avoid:** Wrap multiple items as an array or use `FadeIn` directly for single elements.

### Pitfall 6: Nav "Book a Call" links to non-existent `#booking` anchor

**What goes wrong:** Clicking the Nav CTA scrolls to nothing.
**Why it happens:** The Nav CTA was built as a placeholder. No page has `id="booking"`.
**How to avoid:** Update Nav CTA text to "Register Interest" and href to `/contact` (or `/contact#form`) as a first task in this phase.

---

## Code Examples

### Verified: @formspree/react useForm hook
```typescript
// Source: Cloudflare Pages Formspree tutorial (verified)
import { useForm, ValidationError } from '@formspree/react'

const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '')
// state.succeeded — boolean, true after successful submit
// state.submitting — boolean, true while in-flight
// state.errors — array of field errors
```

### Verified: next/image with fill for full-bleed hero
```typescript
// Source: Next.js docs — next/image fill mode
<div className="relative w-full h-[80vh] min-h-[560px]">
  <Image
    src="/images/hero-bg.jpg"
    alt="..."
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
</div>
```

### Verified: Section component signature (from Phase 2 source)
```typescript
// Source: components/Section.tsx (read directly)
<Section id="projects" className="bg-white">
  {/* py-16 md:py-24 and max-w-6xl container applied automatically */}
</Section>
```

### Verified: Button variants (from Phase 2 source)
```typescript
// Source: components/Button.tsx (read directly)
<Button href="/projects">View Our Projects</Button>           // primary gold fill
<Button href="/contact" variant="secondary">Register Interest</Button>  // gold outline
<Button type="submit" disabled={state.submitting}>Send</Button>         // renders as <button>
```

### Verified: Font usage pattern
```typescript
// Playfair Display (serif) for headings
<h1 className="font-serif text-5xl text-fort-charcoal">...</h1>

// Inter (sans) for body, labels, nav
<p className="font-sans text-fort-gray">...</p>
```

---

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| `pages/` directory in Next.js | `app/` directory with App Router | New pages go in `app/about/page.tsx`, etc. |
| `getServerSideProps` / `getStaticProps` | Default server components (no fetch needed for static content) | Pages are static by default; no data fetching needed |
| Framer Motion package | `motion` package (rebranded) | Already using `motion/react` import in FadeIn — consistent |
| `<img>` tags | `next/image` | All images must go through `next/image` |

**Note on Tailwind colors:** The project uses a customized palette. The actual colors in `tailwind.config.js` differ slightly from the original REQUIREMENTS.md — the implemented palette uses `fort-charcoal` (#1A1A2E) and `fort-gold` (#C4973A), not the Charcoal+Copper from REQ-001. These are the canonical values to use. Never reference `fort-dark`, `fort-accent` (from old requirements) — those tokens don't exist in the config.

---

## Open Questions

1. **Hero image source**
   - What we know: Must be architectural/urban, free stock (Unsplash suggested)
   - What's unclear: Specific image to use — Claude's discretion per CONTEXT.md
   - Recommendation: Download a suitable Unsplash image to `public/images/hero-bg.jpg`. Suggested search: "modern residential architecture Vancouver" or "multiplex housing urban". Keep under 300KB (REQ-010 constraint).

2. **Nav CTA alignment**
   - What we know: Nav currently shows "Book a Call" linking to `#booking` (non-existent anchor). REQUIREMENTS say "Register Interest."
   - What's unclear: Whether to update Nav as task 0 of this phase or inline with contact page
   - Recommendation: Make it task 1 — a small isolated change to `Nav.tsx` before building any pages.

3. **Formspree form hash timing**
   - What we know: Dennis must create a Formspree account to get a real hash; current `.env.local` has `xxx`
   - What's unclear: Whether Dennis will do this during or after Phase 3
   - Recommendation: Build with graceful fallback as specified. Form will show mailto link until real hash is set. Document the swap steps clearly in plan verification notes.

4. **`public/images/` directory**
   - What we know: `next.config.ts` has empty `images` config; no `public/images/` directory confirmed
   - What's unclear: Does `public/images/` exist?
   - Recommendation: Create `public/images/` as part of the hero image task. A Wave 0 task.

---

## Validation Architecture

nyquist_validation is enabled (config.json).

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None installed — no jest, vitest, or playwright config found in project root |
| Config file | None |
| Quick run command | `npm run build` (type-checks + build validation as proxy for unit tests) |
| Full suite command | `npm run build && npm run lint` |

No automated unit/component test framework is installed in this project. The validation strategy for Phase 3 relies on build compilation (TypeScript catches type errors) and manual browser verification. This is consistent with Phase 2 verification patterns (checkpoint: verify at localhost:3000).

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| REQ-004 | Home page renders all sections | smoke | `npm run build` (no TS errors) | Wave 0 — `app/page.tsx` gets replaced |
| REQ-004 | Hero image loads, not 0px height | manual | Browse localhost:3000 | N/A |
| REQ-005 | About page renders, no broken links | smoke | `npm run build` | Wave 0 — `app/about/page.tsx` |
| REQ-006 | Projects page: project card visible, inline form rendered | smoke | `npm run build` | Wave 0 — `app/projects/page.tsx` |
| REQ-006 | Register Interest form: graceful fallback shown when endpoint=xxx | manual | Browse localhost:3000/projects | N/A |
| REQ-007 | Contact page: form rendered, info block visible | smoke | `npm run build` | Wave 0 — `app/contact/page.tsx` |
| REQ-007 | Contact form degrades to mailto when endpoint=xxx | manual | Browse localhost:3000/contact | N/A |
| REQ-007 | Real email + phone visible as text | manual | Browser inspect | N/A |

### Sampling Rate

- **Per task commit:** `npm run build` — fast, catches TypeScript and import errors
- **Per wave merge:** `npm run build && npm run lint`
- **Phase gate:** Full build green + manual browser check of all 4 pages before `/gsd:verify-work`

### Wave 0 Gaps

- [ ] `public/images/` directory — needed for hero image; create with hero-bg.jpg
- [ ] `app/about/page.tsx` — does not exist yet
- [ ] `app/projects/page.tsx` — does not exist yet
- [ ] `app/contact/page.tsx` — does not exist yet
- [ ] `components/ContactForm.tsx` — does not exist yet (client component for Formspree)
- [ ] `components/RegisterInterestForm.tsx` — does not exist yet (inline email capture)

---

## Sources

### Primary (HIGH confidence)
- `components/Button.tsx`, `components/Section.tsx`, `components/Footer.tsx`, `components/Nav.tsx`, `components/animations/FadeIn.tsx`, `components/animations/FadeInGroup.tsx` — read directly from project source
- `tailwind.config.js` — read directly; canonical color tokens confirmed
- `package.json` — read directly; confirmed @formspree/react ^3.0.0 already installed
- `.env.local` — read directly; confirmed placeholder `xxx` value
- `next.config.ts` — read directly; confirmed empty images config

### Secondary (MEDIUM confidence)
- [Cloudflare Pages / Formspree tutorial](https://developers.cloudflare.com/pages/tutorials/add-a-react-form-with-formspree/) — useForm hook pattern, state shape (succeeded/submitting/errors), ValidationError component
- Next.js official docs (training knowledge, stable API) — next/image fill mode, App Router page conventions

### Tertiary (LOW confidence)
- None — all critical findings verified from project source or official documentation

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all packages read from package.json directly
- Architecture: HIGH — patterns derived from existing Phase 2 source code
- Pitfalls: HIGH (nav anchor, hero image domain) / MEDIUM (FadeInGroup array type edge case)
- Formspree integration: MEDIUM — verified from Cloudflare/Formspree tutorial against installed package version

**Research date:** 2026-03-14
**Valid until:** 2026-04-14 (stable stack; no fast-moving dependencies)
