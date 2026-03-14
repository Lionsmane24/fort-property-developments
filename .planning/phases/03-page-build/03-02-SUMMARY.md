---
phase: 03-page-build
plan: 02
subsystem: ui
tags: [nextjs, react, tailwind, home-page, hero, animations]

# Dependency graph
requires:
  - phase: 03-page-build
    plan: 01
    provides: hero-bg.jpg, Nav CTA fixed, Footer real contact info
  - phase: 02-project-setup-and-shared-components
    provides: Button, Section, FadeIn, FadeInGroup components
provides:
  - app/page.tsx — complete Home page with all 6 sections
  - Hero section with next/image, overlay, H1, dual CTAs
  - Value strip with Fort brand tokens and FadeInGroup stagger
  - Projects preview with Burnaby Multiplex card
  - About teaser with 2-column layout
  - Trust bar with CHBA, HAVAN, UDI BC badges
  - CTA banner with dark charcoal background
affects: [REQ-004]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Hero: relative parent with explicit height + next/image fill + priority for LCP"
    - "FadeInGroup wrapping grid children as array for 100ms stagger"
    - "Inline SVG icons with stroke-fort-gold class for brand token consistency"
    - "BCFSA pattern: CTAs say Register Interest/View Our Projects, never reserve/deposit"

key-files:
  created: []
  modified:
    - app/page.tsx

key-decisions:
  - "FadeInGroup children passed as explicit JSX array — component requires React.ReactNode[] not single child"
  - "Sections 3-5 use Section component for py-16/24 and container; Section 6 (CTA banner) uses raw section for full dark bleed"
  - "Project card rendered inside FadeIn wrapper — gives card scroll reveal without stagger since single card"

# Metrics
duration: 2min
completed: 2026-03-14
---

# Phase 03 Plan 02: Home Page Build Summary

**Complete Home page server component with all 6 REQ-004 sections: hero with next/image + overlay, value strip with FadeInGroup stagger, projects preview with Burnaby Multiplex card, about teaser with 2-column layout, trust bar with affiliation badges, and dark CTA banner — build green, BCFSA-compliant**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-03-14
- **Completed:** 2026-03-14
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- **Section 1 — Hero:** Full-viewport (`h-[90vh] min-h-[600px]`) with `next/image fill priority`, charcoal/70 dark overlay, H1 "Building Metro Vancouver's Next Generation of Homes", body copy, and two CTA buttons (`View Our Projects` primary, `Register Interest` secondary). `pt-16 md:pt-20` compensates for fixed Nav height.
- **Section 2 — Value strip:** Three-column grid wrapped in `FadeInGroup` for 100ms stagger. Each column has an inline SVG icon (`stroke-fort-gold`), serif heading, and sans body text covering Experience, Location, and Quality pillars.
- **Section 3 — Projects preview:** `bg-fort-bg` Section with heading, subheading, and card grid. Burnaby Multiplex card includes placeholder image area, Planning status badge (amber), h3, type + location, and "Register Interest" secondary CTA. "More projects coming soon" note below grid. Entire section body wrapped in `FadeIn`.
- **Section 4 — About teaser:** Two-column grid (photo left, copy right) inside `FadeIn`. Founder photo placeholder div, Fort's Foundation heading, Dennis founder bio paragraph, and `Learn More` secondary CTA to `/about`.
- **Section 5 — Trust bar:** `bg-fort-bg` Section with uppercase tracking label and three bordered text badges: CHBA Member, HAVAN Member, UDI BC. Code comment marks badges as TODO for logo replacement.
- **Section 6 — CTA banner:** Full-width `bg-fort-charcoal` dark section (no `Section` wrapper — intentional full bleed). "Stay Ahead of the Market" heading, description copy confirming no commitment/no deposit, primary gold CTA to `/contact`.

## Task Commits

1. **Task 1: Hero + value strip** - `af0d1f9` (feat)
2. **Task 2: Projects preview, about teaser, trust bar, CTA banner** - `3bc2c5e` (feat)

## Files Created/Modified

- `app/page.tsx` — Replaced placeholder stub with 200-line server component containing all 6 Home sections

## Decisions Made

- **FadeInGroup children as JSX array:** The FadeInGroup component requires `React.ReactNode[]` (explicit array), not a single wrapped child. Value strip columns were passed as a JSX array literal `{[<div key="experience">...</div>, ...]}`.
- **CTA banner outside Section component:** Section 6 uses a raw `<section>` tag with `bg-fort-charcoal` to achieve full-viewport-width dark bleed. Using the `Section` component would have constrained the background color to the content container.
- **Single project card in FadeIn (not FadeInGroup):** With only one card, FadeInGroup stagger provides no UX value. Used `FadeIn` on the whole section body instead.

## Deviations from Plan

None - plan executed exactly as written.

## Self-Check: PASSED

- FOUND: app/page.tsx
- FOUND commit: af0d1f9 (Task 1 — hero + value strip)
- FOUND commit: 3bc2c5e (Task 2 — sections 3-6)
- Build: green (all 6 routes static, no TypeScript errors)

---
*Phase: 03-page-build*
*Completed: 2026-03-14*
