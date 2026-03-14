---
phase: 03-page-build
plan: 04
subsystem: ui
tags: [nextjs, react, tailwind, formspree, forms, lead-generation]

# Dependency graph
requires:
  - phase: 03-page-build
    plan: 01
    provides: Nav CTA pointing to /contact, shared components (Section, FadeIn, Button)
  - phase: 02-project-setup-and-shared-components
    provides: Section, FadeIn, Button components, global CSS tokens
provides:
  - app/projects/page.tsx — Projects listing page as server component
  - components/RegisterInterestForm.tsx — Reusable inline email capture form
affects: [03-05-contact, 04-launch-readiness]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "@formspree/react useForm hook with three render states: fallback/success/form"
    - "NEXT_PUBLIC_FORMSPREE_ENDPOINT env var with 'xxx' placeholder for graceful fallback"
    - "Subpage hero pattern: bg-fort-charcoal with pt-32 clearance for sticky Nav"

key-files:
  created:
    - components/RegisterInterestForm.tsx
    - app/projects/page.tsx
  modified: []

key-decisions:
  - "RegisterInterestForm reads endpoint at module level (const ENDPOINT = process.env...) — works in Next.js client components where NEXT_PUBLIC_ vars are inlined at build time"
  - "Fallback condition checks both !ENDPOINT and ENDPOINT === 'xxx' — handles both unset and placeholder states"
  - "mailto fallback uses Dennis@fortpropertydevelopment.com — real contact established in Phase 3 Plan 01"

patterns-established:
  - "RegisterInterestForm pattern: reusable client component accepting projectName prop, routed via hidden field to Formspree"
  - "Pre-launch empty state: card grid + general interest capture below the fold, BCFSA disclaimer footer"

requirements-completed: [REQ-006]

# Metrics
duration: 3min
completed: 2026-03-14
---

# Phase 03 Plan 04: Projects Page + RegisterInterestForm Summary

**Projects page with Burnaby Multiplex placeholder card, per-project inline email capture via Formspree, and pre-launch general interest form — all BCFSA-compliant with graceful mailto fallback**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-03-14T22:46:27Z
- **Completed:** 2026-03-14T22:49:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- `RegisterInterestForm` client component with useForm hook, fallback/success/form states, and "Register Interest" button (BCFSA compliant)
- `app/projects/page.tsx` server component with dark hero, Burnaby Multiplex project card (Planning badge), and pre-launch empty state
- Graceful mailto fallback renders immediately since Formspree endpoint is currently `xxx` placeholder
- Build passes with `/projects` route prerendered as static content

## Task Commits

Each task was committed atomically:

1. **Task 1: Create RegisterInterestForm client component** - `d449479` (feat)
2. **Task 2: Build Projects page with card grid and pre-launch empty state** - `388f66f` (feat)

## Files Created/Modified
- `components/RegisterInterestForm.tsx` — `'use client'` component, useForm hook, three render states, hidden project field for Formspree routing
- `app/projects/page.tsx` — Server component, dark hero, Burnaby Multiplex card, RegisterInterestForm x2, pre-launch empty state

## Decisions Made
- **ENDPOINT at module level:** `const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT` declared outside the component function. Next.js inlines `NEXT_PUBLIC_` vars at build time, so module-level declaration is equivalent to inside the component but is idiomatic.
- **Double fallback check:** `!ENDPOINT || ENDPOINT === 'xxx'` — covers both genuinely unset env vars and the explicit placeholder value used during development.
- **No `next/image` for project card placeholder:** The placeholder is a styled `<div>` (no real image yet). Using `next/image` would require an actual src, so a descriptive text placeholder was used instead — matches the plan spec exactly.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- Stale `.next/lock` file from previous build session prevented second build. Removed with `rm -f .next/lock`, build succeeded immediately after.

## User Setup Required
When Dennis creates a Formspree account and obtains a form hash:
1. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT=<8-char-hash>` to `.env.local`
2. The fallback mailto text disappears and the live form renders automatically
3. Both forms (per-project and general early access) route via the `project` hidden field

## Next Phase Readiness
- Projects page live at `/projects` — ready for visual review
- RegisterInterestForm is reusable — Contact page (Plan 05) or any future page can import it
- Formspree integration pending Dennis account creation (tracked in STATE.md Key Decisions Pending)
- REQ-006 satisfied: project card grid, inline Register Interest form, pre-launch empty state

## Self-Check: PASSED

- FOUND: components/RegisterInterestForm.tsx
- FOUND: app/projects/page.tsx
- FOUND commit: d449479 (RegisterInterestForm)
- FOUND commit: 388f66f (Projects page)

---
*Phase: 03-page-build*
*Completed: 2026-03-14*
