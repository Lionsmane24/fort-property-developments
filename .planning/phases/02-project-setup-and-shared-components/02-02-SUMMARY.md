---
phase: 02-project-setup-and-shared-components
plan: 02
subsystem: ui
tags: [nextjs, react, typescript, tailwindcss, navigation, mobile]

requires:
  - phase: 02-project-setup-and-shared-components
    plan: 01
    provides: Working Next.js project with stub Nav.tsx, fort-* Tailwind tokens, npm run build passing

provides:
  - Full Nav component with sticky scroll shadow, desktop links, mobile full-screen overlay
  - components/Nav.tsx (replaces Plan 01 stub)

affects:
  - 02-03 (Footer replaces its own stub next)
  - 03-content-pages (Nav renders on all pages via root layout)

tech-stack:
  added: []
  patterns:
    - "'use client' component with useState + useEffect for scroll and menu state"
    - "usePathname from next/navigation for route-change menu close"
    - "document.body.style.overflow for body scroll lock without breaking fixed positioning"
    - "Conditional Tailwind shadow class on scroll threshold"

key-files:
  created: []
  modified:
    - components/Nav.tsx

key-decisions:
  - "Home link marked mobileOnly=true so it shows in overlay but not desktop nav (logo already links home)"
  - "Body scroll lock via document.body.style.overflow, not CSS overflow:hidden on container (would break position:fixed)"

requirements-completed: [REQ-003]

duration: 5min
completed: 2026-03-14
---

# Phase 2 Plan 02: Nav Component Summary

**Full sticky Nav with scroll shadow, desktop links, and mobile full-screen hamburger overlay — replaces Plan 01 stub, npm run build passes**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-03-14T18:32:06Z
- **Completed:** 2026-03-14T18:37:00Z
- **Tasks:** 1 (of 2 — plan has checkpoint after Task 1)
- **Files modified:** 1

## Accomplishments

- Replaced the empty Nav stub with a full client component (138 lines)
- Implemented sticky charcoal header that never changes background, adds shadow-lg after 50px scroll
- Desktop layout: logo (next/image fort-logo-reversed.svg) left, Projects/About/Contact links right, gold "Book a Call" CTA targeting #booking
- Mobile: hamburger button (md:hidden) opens full-screen fort-charcoal overlay with all 4 links centered and CTA
- Overlay closes on X click, any link tap, and automatically on route change via usePathname
- Body scroll lock uses document.body.style.overflow (not CSS overflow:hidden on parent — avoids breaking fixed positioning)
- All styles use fort-* Tailwind tokens, no raw hex values in className
- npm run build passes with zero TypeScript errors

## Task Commits

1. **Task 1: Build Nav.tsx with sticky scroll shadow and desktop layout** - `a5b7899` (feat)

**Checkpoint:** human-verify (awaiting visual verification at localhost:3000)

## Files Created/Modified

- `components/Nav.tsx` — Full client component replacing stub: 'use client', useState (scrolled, menuOpen), useEffect (scroll listener, route change, body lock), usePathname, next/image logo, next/link navigation

## Decisions Made

- **Home mobileOnly:** Home link has `mobileOnly: true` — hidden in desktop nav (logo already links home), visible in mobile overlay
- **Body scroll lock approach:** Used `document.body.style.overflow` in a useEffect cleanup pattern rather than adding overflow:hidden to a parent container. This is critical — CSS overflow:hidden on a parent element that contains fixed children breaks their fixed positioning.

## Deviations from Plan

None - plan executed exactly as written. Full implementation from plan specification applied verbatim and builds cleanly.

## Issues Encountered

None.

## User Setup Required

None for this plan. Visual verification required at the checkpoint.

## Next Phase Readiness

- Nav renders on all pages via app/layout.tsx (already importing Nav)
- Plan 03 (Footer component) can proceed after checkpoint approval
- All fort-* tokens, scroll behavior, and mobile overlay are live

## Self-Check: PASSED

- FOUND: components/Nav.tsx
- FOUND: .planning/phases/02-project-setup-and-shared-components/02-02-SUMMARY.md
- FOUND: commit a5b7899

---
*Phase: 02-project-setup-and-shared-components*
*Completed: 2026-03-14*
