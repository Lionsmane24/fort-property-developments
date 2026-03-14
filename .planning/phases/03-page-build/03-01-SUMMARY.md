---
phase: 03-page-build
plan: 01
subsystem: ui
tags: [nextjs, react, tailwind, nav, footer, images]

# Dependency graph
requires:
  - phase: 02-project-setup-and-shared-components
    provides: Nav.tsx and Footer.tsx components with placeholder values
provides:
  - Nav CTA "Register Interest" linking to /contact (broken anchor eliminated)
  - Footer with real contact info: Dennis@fortpropertydevelopment.com, 604-290-6046
  - public/images/hero-bg.jpg — 1920px wide, 256KB, ready for next/image
affects: [03-02-home, 03-03-projects, 03-04-about, 03-05-contact]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Hero image served locally from public/images/ — avoids next/image domain allowlist requirements"

key-files:
  created:
    - public/images/hero-bg.jpg
  modified:
    - components/Nav.tsx
    - components/Footer.tsx

key-decisions:
  - "Unsplash q=25 parameter used to bring 1920px image under 300KB (256KB result)"
  - "Both desktop and mobile CTA anchors in Nav.tsx updated (two separate anchor elements)"

patterns-established:
  - "Nav CTA pattern: <a href='/contact'> with fort-gold styling, text 'Register Interest'"

requirements-completed: [REQ-004, REQ-005, REQ-006, REQ-007]

# Metrics
duration: 2min
completed: 2026-03-14
---

# Phase 03 Plan 01: Phase 2 Carryover Fixes + Hero Image Summary

**Nav CTA corrected to "Register Interest" linking /contact, Footer updated with real Dennis contact details, and 1920px hero-bg.jpg added at 256KB for Wave 2 page builds**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-03-14T22:42:33Z
- **Completed:** 2026-03-14T22:44:48Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments
- Nav "Book a Call" / `#booking` replaced with "Register Interest" / `/contact` in both desktop and mobile overlays
- Footer placeholder email and phone replaced with Dennis@fortpropertydevelopment.com and 604-290-6046 (both href and display text)
- Hero background image downloaded to `public/images/hero-bg.jpg` at 1920px wide, 256KB — under the 300KB REQ-010 constraint

## Task Commits

Each task was committed atomically:

1. **Task 1: Fix Nav CTA** - `6959368` (fix)
2. **Task 2: Update Footer contact info** - `89311e6` (fix)
3. **Task 3: Download hero background image** - `a067b73` (feat)

## Files Created/Modified
- `components/Nav.tsx` - CTA text and href updated in both desktop nav and mobile overlay
- `components/Footer.tsx` - Real email and phone in href attributes and display text; removed placeholder comment
- `public/images/hero-bg.jpg` - Unsplash architectural residential photo, 1920x1280, 256KB JPEG

## Decisions Made
- **Unsplash quality parameter q=25:** Default q=80 gave 706KB; q=40 gave 385KB; q=25 gave 256KB which is under the 300KB limit while maintaining acceptable visual quality at full-bleed hero scale.
- **Both Nav CTAs updated:** Nav.tsx contains two separate `<a>` anchor elements — one in the desktop nav bar and one in the mobile full-screen overlay. Both were updated to maintain consistency across breakpoints.

## Deviations from Plan

None - plan executed exactly as written. The q=25 download was an expected iteration to meet the 300KB constraint, not a deviation.

## Issues Encountered
- First download attempt at q=80 returned 706KB, exceeding the 300KB limit. Retried at q=40 (385KB), then q=25 (256KB). Standard iteration to meet the constraint.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All three Wave 2 blockers resolved
- Wave 2 plans (03-02 home, 03-03 projects, 03-04 about, 03-05 contact) can now proceed in parallel
- Hero image is available at `/images/hero-bg.jpg` for use with `next/image`
- Nav CTA now navigates to the Contact page, creating a clear user flow

## Self-Check: PASSED

- FOUND: components/Nav.tsx
- FOUND: components/Footer.tsx
- FOUND: public/images/hero-bg.jpg
- FOUND: .planning/phases/03-page-build/03-01-SUMMARY.md
- FOUND commit: 6959368 (Nav CTA fix)
- FOUND commit: 89311e6 (Footer contact info)
- FOUND commit: a067b73 (hero image)
- FOUND commit: 42083a5 (metadata)

---
*Phase: 03-page-build*
*Completed: 2026-03-14*
