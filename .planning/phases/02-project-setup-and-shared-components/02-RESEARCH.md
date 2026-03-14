# Phase 2: Project Setup and Shared Components - Research

**Researched:** 2026-03-14
**Domain:** Next.js App Router scaffolding, Tailwind CSS, Framer Motion scroll animations, Formspree integration
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- Nav links (4): Home, Projects, About, Contact — in that order
- Home link = `/`; logo also links home; "Home" may be hidden on desktop but present in mobile overlay
- Nav CTA label: "Book a Call"; target: `#booking` placeholder; style: `bg-fort-gold`
- Nav: sticky (fixed to top), solid `bg-fort-charcoal` always (no transparency), subtle drop shadow after ~50px scroll
- Mobile nav: full-screen overlay, centered links + CTA, overlay background `#1A1A2E`, text white + vertically centered
- Scroll animations: fade-in only (opacity 0→1), viewport trigger, 400–600ms ease-out, reusable `FadeIn` wrapper component
- Card stagger: 100ms between each card, first card first, via `FadeInGroup` or `motion.div` parent
- Reduced motion: respect `prefers-reduced-motion` via Framer Motion's `useReducedMotion()` hook — skip animation, render at full opacity immediately

### Claude's Discretion

- Exact hamburger icon (X vs three-line toggle animation)
- Footer column layout (3-column or 2-column)
- Button hover/focus states (within brand palette)
- Section component padding values
- Exact Framer Motion variant names

### Deferred Ideas (OUT OF SCOPE)

- None raised during discussion — scope stayed within Phase 2 boundary
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| REQ-002 | Next.js 14+ App Router, TypeScript, Tailwind 3.4+, Framer Motion, Google Fonts via next/font/google, next.config.js image optimization, .env.local template, project structure app/components/public | Manual package install into existing dir; `npm i next@latest react react-dom`; tailwind.config.js already done; fonts.ts already done; next.config.ts for images |
| REQ-003 | Nav (logo left, links right, CTA button, mobile hamburger overlay), Footer (logo, links, contact, copyright, privacy), Button (primary/secondary), Section (max-width wrapper) | All implemented as 'use client' components for Nav; sticky scroll shadow via useEffect/useState; FadeIn + FadeInGroup animation utilities via motion package |
</phase_requirements>

---

## Summary

Phase 2 installs and configures Next.js into an existing non-empty directory that already contains brand assets (`tailwind.config.js`, `app/fonts.ts`, `public/logo/`, `app/icon.svg`). Because `create-next-app` always scaffolds a new folder, the correct approach is a **manual package installation**: `npm install next@latest react@latest react-dom@latest`, then hand-write `package.json` scripts, `tsconfig.json`, `next.config.ts`, and `app/layout.tsx`. Tailwind is already configured — only `postcss.config.mjs` and the Tailwind CSS import in a globals file are missing.

For animations, the library has rebranded: **`motion`** (not `framer-motion`) is the current package name as of v11+, supporting React 19 and Next.js 15. The `motion` package is a drop-in replacement and exports `motion`, `useReducedMotion`, `AnimatePresence`, and `MotionConfig` from `motion/react`. All motion components require `'use client'` in Next.js App Router.

Formspree uses the `@formspree/react` package with a `useForm` hook. The form endpoint hash (8 characters) lives in `.env.local` as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`. Because the account isn't created yet, `.env.local` gets a placeholder; Phase 3 will swap in the real hash.

**Primary recommendation:** Manual install Next.js into the existing directory, wrap animation components in `'use client'`, use the `motion` package (not `framer-motion`), keep `Nav.tsx` as a dedicated client component.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | latest (15.x) | Framework, routing, SSR/SSG, image optimization | Official — only reasonable choice |
| react | latest (19.x) | UI library | Required by Next.js 15 |
| react-dom | latest (19.x) | DOM renderer | Required by Next.js |
| typescript | ^5 | Type safety | Already in tailwind.config.js, fonts.ts |
| tailwindcss | ^3.4 | Utility CSS — brand tokens already in config | Already configured in repo |
| postcss | ^8 | Tailwind processing pipeline | Required by Tailwind |
| autoprefixer | ^10 | Vendor prefix automation | Required by Tailwind |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| motion | latest (12.x) | Scroll fade-in animations, FadeIn/FadeInGroup components | This phase — all animation utilities |
| @formspree/react | latest (^2) | useForm hook for contact/interest forms | .env.local placeholder now; real integration Phase 3 |
| @types/react | ^19 | TypeScript types for React | Always with TypeScript |
| @types/react-dom | ^19 | TypeScript types for react-dom | Always with TypeScript |
| @types/node | ^20 | TypeScript types for Node.js (next.config.ts) | Always with TypeScript + Next.js |
| eslint | ^9 | Linting | Standard code quality |
| eslint-config-next | latest | Next.js ESLint rules | Complements ESLint |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `motion` package | `framer-motion` | framer-motion v11 was renamed to `motion`; framer-motion is a legacy alias that still works but `motion` is current |
| Manual install | `create-next-app` in temp dir then merge | More complex file copying; manual install is cleaner for an existing structured repo |
| `useEffect` scroll listener | Framer Motion `useScroll` | useEffect is simpler and sufficient for a single shadow toggle; no need for spring physics here |

**Installation:**
```bash
npm install next@latest react@latest react-dom@latest
npm install motion @formspree/react
npm install -D typescript @types/react @types/react-dom @types/node tailwindcss postcss autoprefixer eslint eslint-config-next
```

---

## Architecture Patterns

### Recommended Project Structure

```
/                           # repo root (existing)
├── app/                    # Next.js App Router (already has fonts.ts, icon.svg)
│   ├── fonts.ts            # EXISTS — Inter + Playfair Display exports
│   ├── icon.svg            # EXISTS — favicon monogram
│   ├── globals.css         # CREATE — Tailwind @layer directives + CSS variables
│   ├── layout.tsx          # CREATE — root layout: html, body, Nav, Footer, fonts
│   └── page.tsx            # CREATE — home page placeholder
├── components/             # CREATE directory
│   ├── Nav.tsx             # 'use client' — sticky nav with scroll shadow + mobile overlay
│   ├── Footer.tsx          # Server component — static content
│   ├── Button.tsx          # Server component — primary/secondary variants
│   ├── Section.tsx         # Server component — max-width wrapper
│   └── animations/
│       ├── FadeIn.tsx      # 'use client' — single element fade-in wrapper
│       └── FadeInGroup.tsx # 'use client' — staggered children with 100ms delay
├── public/                 # EXISTS
│   └── logo/               # EXISTS — fort-logo-reversed.svg, fort-logo-primary.svg
├── tailwind.config.js      # EXISTS — all fort-* color tokens + font families
├── next.config.ts          # CREATE — image domains, turbopack
├── tsconfig.json           # CREATE (auto-created on first `next dev` or create manually)
├── postcss.config.mjs      # CREATE — Tailwind/Autoprefixer plugins
├── .env.local              # CREATE — NEXT_PUBLIC_FORMSPREE_ENDPOINT=xxx (placeholder)
└── package.json            # CREATE/MODIFY — add next/react deps + scripts
```

### Pattern 1: Manual Next.js Bootstrap into Existing Directory

**What:** Install Next.js packages and write the minimum required files rather than running `create-next-app` (which creates a new directory).

**When to use:** When brand assets, config, and directory structure already exist.

**Example:**
```bash
# Install packages
npm install next@latest react@latest react-dom@latest
npm install -D typescript @types/react @types/react-dom @types/node

# next dev auto-creates tsconfig.json on first run
# OR create it manually for explicit control
```

Minimum `package.json` scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

### Pattern 2: Server vs Client Component Split

**What:** Keep components as Server Components by default; only add `'use client'` when the component uses browser APIs, state, or hooks.

**When to use:** Every component decision.

| Component | Type | Reason |
|-----------|------|--------|
| `Nav.tsx` | Client (`'use client'`) | `useState` (mobile overlay), `useEffect` (scroll listener), `useReducedMotion` |
| `Footer.tsx` | Server | No interactivity; static links and text |
| `Button.tsx` | Server | No interactivity; pure presentational |
| `Section.tsx` | Server | Pure layout wrapper |
| `FadeIn.tsx` | Client (`'use client'`) | `motion` requires client-side rendering |
| `FadeInGroup.tsx` | Client (`'use client'`) | `motion` requires client-side rendering |
| `app/layout.tsx` | Server | Imports Nav + Footer; applies font CSS variables |

### Pattern 3: Sticky Nav with Scroll Shadow

**What:** `position: fixed` navbar that adds a drop shadow after scrolling past 50px.

**When to use:** Nav component.

```typescript
// Source: standard React scroll listener pattern — verified multiple sources
'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-fort-charcoal transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      {/* nav content */}
    </header>
  )
}
```

**Pitfall:** Do NOT set `overflow: hidden` on a parent element — it breaks `position: fixed`. Use `overflow-x: clip` instead if horizontal clipping is needed.

### Pattern 4: Full-Screen Mobile Overlay

**What:** Hamburger button toggles a fixed full-screen overlay with centered links.

**When to use:** Nav component — mobile breakpoint.

```typescript
// Inside Nav.tsx 'use client' component
const [menuOpen, setMenuOpen] = useState(false)

// Overlay
{menuOpen && (
  <div className="fixed inset-0 z-40 bg-fort-charcoal flex flex-col items-center justify-center">
    <nav className="flex flex-col items-center gap-8">
      {/* links */}
    </nav>
  </div>
)}
```

**Note:** Close menu on route change — use `usePathname()` from `next/navigation` in a `useEffect` watching the pathname.

### Pattern 5: FadeIn Wrapper via Motion

**What:** Reusable wrapper that fades children into view when they enter the viewport. Respects `prefers-reduced-motion`.

**When to use:** Any section or card that should animate in.

```typescript
// Source: motion.dev documentation patterns + community verification
'use client'
import { motion, useReducedMotion } from 'motion/react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: shouldReduce ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
```

### Pattern 6: FadeInGroup with 100ms Stagger

**What:** Wraps a list of items and applies a 100ms sequential delay to each child.

**When to use:** Project cards, value strip items — anywhere multiple sibling items should stagger.

```typescript
'use client'
import { FadeIn } from './FadeIn'

interface FadeInGroupProps {
  children: React.ReactNode[]
  className?: string
}

export function FadeInGroup({ children, className }: FadeInGroupProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          {child}
        </FadeIn>
      ))}
    </div>
  )
}
```

### Pattern 7: Root Layout with Fonts

**What:** `app/layout.tsx` imports font exports from `app/fonts.ts` and applies their `.variable` CSS class names to `<html>`.

**When to use:** Root layout — one time setup.

```typescript
// Source: app/fonts.ts already exists; pattern from nextjs.org/docs
import { inter, playfair } from './fonts'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-fort-bg text-fort-gray font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### Anti-Patterns to Avoid

- **Importing `motion` from `framer-motion`:** The package is now `motion`; import from `motion/react` for React components.
- **Using `motion` in Server Components:** Always add `'use client'` to any file importing from `motion/react`. Forgetting this causes a build error.
- **Putting font `.variable` classes on `<body>` only:** They must be on `<html>` so the CSS variables are available to all descendants including `:root`-scoped styles.
- **Hardcoding hex colors in components:** Always use `fort-*` Tailwind tokens. The tailwind.config.js is already configured — never use raw hex in className.
- **Setting `overflow: hidden` on body:** Breaks `position: fixed` navbar. Do not add `overflow-hidden` to `<body>` or the main layout wrapper.
- **Closing mobile menu without resetting body scroll lock:** If you add `overflow-hidden` to body when the mobile overlay opens (to prevent background scroll), make sure to remove it on close.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form state + AJAX + error display | Custom fetch + state machine | `@formspree/react useForm` | Handles submission, error states, success state, spam protection |
| Scroll animations | Custom IntersectionObserver | `motion` `whileInView` | Handles SSR, viewport detection, reduced motion, cleanup |
| Reduced motion detection | `window.matchMedia('(prefers-reduced-motion)')` | `useReducedMotion()` from `motion/react` | Handles SSR (no window), state sync, and React lifecycle |
| Font loading + FOUT prevention | Manual `<link>` tags | `next/font/google` (already in fonts.ts) | Auto-subset, `font-display: swap`, zero layout shift |
| Image optimization | `<img>` tags | `next/image` | Auto WebP, lazy load, size optimization, Core Web Vitals |

**Key insight:** All form complexity and all animation accessibility complexity already have battle-tested solutions. Custom implementations inevitably miss edge cases like SSR window checks, reduced motion preference changes, and concurrent submissions.

---

## Common Pitfalls

### Pitfall 1: `motion` vs `framer-motion` Import Confusion

**What goes wrong:** Developer installs `framer-motion` (the old package name) and imports from it. The library works but is the legacy package; `framer-motion` now re-exports from `motion`. Worse, some tutorials use `import { motion } from 'framer-motion'` while newer ones use `import { motion } from 'motion/react'` — mixing both causes duplicate bundle issues.

**Why it happens:** The library rebranded from `framer-motion` to `motion` around v11.

**How to avoid:** Install `motion`, import from `motion/react`. Do not install `framer-motion`.

**Warning signs:** `package.json` contains both `motion` and `framer-motion`.

### Pitfall 2: Missing `'use client'` on Motion Components

**What goes wrong:** `FadeIn.tsx` or `Nav.tsx` imports from `motion/react` without `'use client'` directive. Build fails or hydration errors occur.

**Why it happens:** Next.js App Router defaults to Server Components; motion requires browser APIs.

**How to avoid:** Any file importing from `motion/react` must have `'use client'` as the first line.

**Warning signs:** `Error: useState can only be used in a Client Component` or motion-related hydration mismatch errors.

### Pitfall 3: Tailwind Classes Not Purged / Not Working

**What goes wrong:** Custom `fort-*` color classes appear in source but render as gray or default browser styling. Tailwind's content scanner missed the file.

**Why it happens:** `tailwind.config.js` content array must match all files using Tailwind classes. The existing config covers `./app/**/*.{js,ts,jsx,tsx,mdx}` and `./components/**/*.{js,ts,jsx,tsx,mdx}` — any component outside these paths won't be scanned.

**How to avoid:** Keep all components under `app/` or `components/`. Do not put Tailwind-using files at root level.

**Warning signs:** Classes appear in source but have no CSS effect in dev or production.

### Pitfall 4: `create-next-app` Overwrites Existing Files

**What goes wrong:** Running `create-next-app` in or pointed at the existing directory overwrites `tailwind.config.js` and `app/fonts.ts` with the default scaffold versions, destroying Phase 1 work.

**Why it happens:** create-next-app generates its own tailwind.config and layout files.

**How to avoid:** Do NOT run `create-next-app`. Use manual package installation only.

**Warning signs:** `tailwind.config.js` reverts to default without `fort-*` tokens.

### Pitfall 5: Scroll Listener on Server

**What goes wrong:** Scroll position logic runs on the server during SSR, throwing `window is not defined`.

**Why it happens:** `useEffect` without `'use client'` in Server Component context.

**How to avoid:** Nav.tsx is a Client Component (`'use client'`). All `window`/`document` access is inside `useEffect`.

**Warning signs:** `ReferenceError: window is not defined` at build or runtime.

### Pitfall 6: Mobile Overlay Blocks Background Scroll but Doesn't Release

**What goes wrong:** Background page is scrollable while mobile overlay is open, creating a confusing UX. Or: body scroll-lock is applied but not released on close.

**Why it happens:** Not managing `document.body.style.overflow` or not cleaning up.

**How to avoid:** In the `useEffect` that watches `menuOpen`, set `document.body.style.overflow = menuOpen ? 'hidden' : ''` and return a cleanup function.

---

## Code Examples

### globals.css — Tailwind directives

```css
/* app/globals.css */
/* Source: tailwindcss.com/docs/installation — standard App Router pattern */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### postcss.config.mjs

```javascript
// postcss.config.mjs
// Source: nextjs.org manual installation docs
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
export default config
```

### next.config.ts

```typescript
// next.config.ts
// Source: nextjs.org/docs/app/api-reference/config/next-config-js
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Add external image domains here when needed (Phase 3/4)
    // formats: ['image/avif', 'image/webp'], // enabled by default in Next.js 14+
  },
}

export default nextConfig
```

### .env.local template

```bash
# .env.local
# Formspree — replace xxx with 8-character form hash from formspree.io dashboard
NEXT_PUBLIC_FORMSPREE_ENDPOINT=xxx
```

### Button.tsx — primary and secondary variants

```typescript
// components/Button.tsx
// Server component — no interactivity, pure presentational

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  href?: string
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export function Button({ variant = 'primary', href, children, className, disabled }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded font-sans font-semibold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2'
  const variants = {
    primary: 'bg-fort-gold text-white hover:bg-amber-600 disabled:opacity-50',
    secondary: 'border-2 border-fort-gold text-fort-gold hover:bg-fort-gold hover:text-white disabled:opacity-50',
  }
  const classes = `${base} ${variants[variant]} ${className ?? ''}`

  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return <button type="button" disabled={disabled} className={classes}>{children}</button>
}
```

### Section.tsx — max-width container

```typescript
// components/Section.tsx
interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className ?? ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `import { motion } from 'framer-motion'` | `import { motion } from 'motion/react'` | v11 (2024) | Install `motion` not `framer-motion` |
| `create-next-app` for all setups | Manual install when existing files exist | N/A | Preserves Phase 1 brand files |
| `next.config.js` (CJS) | `next.config.ts` (TypeScript) | Next.js 15 | Type-safe config |
| `@next/font` | `next/font/google` | Next.js 13.2 | Already used in fonts.ts — no action needed |
| Custom scroll reveal via IntersectionObserver | `motion` `whileInView` | Framer Motion v5+ | Cleaner, accessible, SSR-safe |

**Deprecated/outdated:**
- `framer-motion` package name: still works as a re-export shim but `motion` is canonical.
- `pages/` router: project uses App Router — do not create a `pages/` directory.
- `next.config.js` with `images.formats`: auto-detected in Next.js 14+; no manual config needed for basic WebP.

---

## Open Questions

1. **Next.js version: 14 vs 15**
   - What we know: Requirements say "Next.js 14+" and the project was planned when 14 was current. As of March 2026, Next.js 15 (with React 19) is the latest stable.
   - What's unclear: Is there a preference to pin to 14 for stability, or use 15?
   - Recommendation: Install `next@latest` (15.x) — it is stable, React 19 is stable, and `motion` v12 supports React 19. Pinning to 14 is unnecessary extra maintenance.

2. **Formspree account — not yet created**
   - What we know: STATE.md notes "need account — action for Dennis before Phase 2."
   - What's unclear: Will the account be created during this phase or after?
   - Recommendation: Create `.env.local` with placeholder `xxx`. The Formspree form won't work until the real hash is set, but the code can be written and tested for form structure now.

3. **TypeScript strict mode**
   - What we know: fonts.ts uses TypeScript; tailwind.config.js is JS (not TS).
   - What's unclear: Desired TypeScript strictness level.
   - Recommendation: Use Next.js default tsconfig (strict: true). tailwind.config.js stays as JS — that's fine, no need to convert it.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None detected — visual/manual UAT is the gate for this phase |
| Config file | None — Wave 0 creates none (not needed for component scaffolding) |
| Quick run command | `npm run dev` then manual browser check |
| Full suite command | `npm run build` — zero TypeScript errors = passing gate |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| REQ-002 | Next.js dev server starts at localhost:3000 | smoke | `npm run dev` (manual verify) | ❌ Wave 0: `app/page.tsx` placeholder |
| REQ-002 | TypeScript compiles without errors | build | `npm run build` | ❌ Wave 0: requires all files |
| REQ-002 | Tailwind fort-* tokens render correctly | visual | manual browser inspect | ❌ Wave 0: requires layout.tsx + globals.css |
| REQ-003 | Nav renders logo + links + CTA on desktop | visual | manual browser check at localhost:3000 | ❌ Wave 0: Nav.tsx |
| REQ-003 | Nav hamburger opens full-screen overlay on mobile (375px) | visual | Chrome DevTools mobile simulation | ❌ Wave 0: Nav.tsx |
| REQ-003 | Nav drop shadow appears after 50px scroll | visual | manual scroll test | ❌ Wave 0: Nav.tsx |
| REQ-003 | FadeIn animation fires on scroll (and skips if reduced motion) | visual | manual scroll + OS reduced motion toggle | ❌ Wave 0: FadeIn.tsx |
| REQ-003 | Footer renders, links work, copyright year is current | visual | manual browser check | ❌ Wave 0: Footer.tsx |

### Sampling Rate

- **Per task commit:** `npm run build` — zero TypeScript/ESLint errors
- **Per wave merge:** `npm run build` clean + manual browser walkthrough at 375px and 1280px
- **Phase gate:** `npm run build` passes + UAT checklist from ROADMAP.md green before `/gsd:verify-work`

### Wave 0 Gaps

All of the following must be created before implementation tasks can run:

- [ ] `package.json` — Next.js + React + TypeScript deps + scripts
- [ ] `next.config.ts` — minimum config
- [ ] `postcss.config.mjs` — Tailwind pipeline
- [ ] `tsconfig.json` — TypeScript config (auto-created by `next dev` or manual)
- [ ] `app/globals.css` — Tailwind directives
- [ ] `app/layout.tsx` — root layout with fonts + Nav + Footer
- [ ] `app/page.tsx` — home placeholder (enables `npm run build` to pass)
- [ ] `components/` — directory scaffold
- [ ] `.env.local` — Formspree placeholder

---

## Sources

### Primary (HIGH confidence)

- [nextjs.org/docs/app/api-reference/cli/create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app) — CLI flags, manual install guidance, confirmed `create-next-app` always creates a new directory
- [nextjs.org/docs/app/getting-started/installation](https://nextjs.org/docs/app/getting-started/installation) — manual installation steps, package.json scripts, layout.tsx pattern (fetched 2026-02-27)
- Existing repo files: `tailwind.config.js`, `app/fonts.ts` — verified by direct read

### Secondary (MEDIUM confidence)

- [formspree.io/guides/nextjs/](https://formspree.io/guides/nextjs/) — `@formspree/react` install, `useForm` hook pattern, `NEXT_PUBLIC_FORM` env var, `'use client'` requirement — fetched and verified against official source
- [motion.dev](https://motion.dev/) — `motion` package is canonical successor to `framer-motion`; `motion/react` import path; `whileInView`, `useReducedMotion` patterns — confirmed by npm registry (v12.36.0 latest as of search date)
- WebSearch cross-reference: multiple sources confirm `'use client'` requirement for motion in Next.js App Router

### Tertiary (LOW confidence)

- Community reports re: sticky nav `overflow: hidden` breaking `position: fixed` — widely cited, plausible, verify during implementation
- Framer community posts re: React 19 compatibility in motion v12 — positive signals but not verified against official motion changelog

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — official Next.js docs confirmed via WebFetch; motion npm version confirmed; Formspree guide verified
- Architecture: HIGH — patterns derived from official docs + existing repo files
- Pitfalls: MEDIUM — pitfalls 1-5 well-verified; pitfall 6 (overflow/scroll lock) is HIGH probability from multiple community sources

**Research date:** 2026-03-14
**Valid until:** 2026-04-14 (stable ecosystem — Next.js 15, motion 12, Formspree React are all mature)
