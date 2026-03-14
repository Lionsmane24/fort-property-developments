---
phase: 04-polish-and-launch
plan: 03
subsystem: ui
tags: [privacy-policy, favicon, next-app-router, sharp, pipa-bc]

# Dependency graph
requires:
  - phase: 02-project-setup-and-shared-components
    provides: Next.js App Router structure with app/ directory conventions
  - phase: 03-content-pages
    provides: Footer with /privacy link already wired

provides:
  - Static /privacy route with PIPA BC placeholder content
  - app/favicon.ico (32x32 PNG-format) auto-served by Next.js App Router
  - /privacy in sitemap-0.xml for SEO crawlability

affects: [04-04-deployment, future-privacy-content-update]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Next.js App Router file-based favicon: app/favicon.ico auto-served at /favicon.ico"
    - "Privacy route as static server component with export const metadata"

key-files:
  created:
    - app/privacy/page.tsx
    - app/favicon.ico
  modified: []

key-decisions:
  - "icon.png omitted: adding app/icon.png alongside existing app/icon.svg triggers Turbopack internal panic — Next.js App Router conflict between two icon.* metadata files. icon.svg continues as SVG favicon."
  - "prose Tailwind class not used: replaced with text-sm + space-y-6 + leading-relaxed to avoid @tailwindcss/typography dependency"
  - "favicon.ico is PNG-format file named .ico: sharp generates PNG, Next.js App Router accepts it, browsers render it correctly"

patterns-established:
  - "Static compliance pages: server component with export const metadata, max-w-3xl centered layout"

requirements-completed: [REQ-009, REQ-010]

# Metrics
duration: 25min
completed: 2026-03-14
---

# Phase 4 Plan 03: Privacy Policy and Favicon Summary

**PIPA BC privacy policy route at /privacy and favicon.ico from fort-logo-primary.svg, both auto-served by Next.js App Router file conventions**

## Performance

- **Duration:** 25 min
- **Started:** 2026-03-14T23:41:00Z
- **Completed:** 2026-03-14T23:56:00Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- /privacy route live with h1, PIPA BC rights section, contact links, and TermsFeed replacement instructions
- app/favicon.ico (32x32, generated from fort-logo-primary.svg via sharp) auto-linked in all page <head> elements
- /privacy appears in sitemap-0.xml — crawlable immediately
- Footer's existing /privacy link now resolves (no 404)

## Task Commits

1. **Task 1: Create Privacy Policy page at /privacy** - `7612fec` (feat)
2. **Task 2: Generate favicon.ico and icon.png** - `4cee242` (feat)

**Plan metadata:** (docs commit follows)

## Files Created/Modified

- `app/privacy/page.tsx` - Static server component, Metadata export, placeholder PIPA BC content with TermsFeed instructions
- `app/favicon.ico` - 32x32 PNG-format favicon generated from public/logo/fort-logo-primary.svg via sharp

## Decisions Made

- **icon.png not created:** Adding `app/icon.png` alongside the existing `app/icon.svg` causes a Turbopack internal panic (`Dependency tracking is disabled so invalidation is not allowed`). Next.js App Router treats both as competing metadata files for the same `icon` slot. Removed `icon.png`; `icon.svg` continues serving as the SVG favicon (already present from Phase 1).
- **favicon.ico is PNG bytes named .ico:** sharp outputs PNG regardless of file extension. Next.js App Router's file-based metadata system accepts it; browsers render PNG-format .ico files correctly.
- **prose class not used:** Replaced `prose prose-sm` with `text-sm space-y-6 leading-relaxed` to avoid needing `@tailwindcss/typography` plugin.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] app/icon.png causes Turbopack internal panic — not added**
- **Found during:** Task 2 (Generate favicon.ico and icon.png)
- **Issue:** Adding `app/icon.png` alongside existing `app/icon.svg` caused `TurbopackInternalError: Dependency tracking is disabled so invalidation is not allowed` — build completely broken. Confirmed by toggling the file in/out.
- **Fix:** Omitted `icon.png`. `icon.svg` already provides PWA/Android icon support as SVG. `favicon.ico` covers the browser tab use case.
- **Files modified:** N/A (file was created then removed)
- **Verification:** Build passes with favicon.ico + icon.svg, fails with icon.png present
- **Committed in:** 4cee242 (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (Rule 1 — build-blocking bug)
**Impact on plan:** icon.png requirement dropped; favicon.ico delivered as specified. icon.svg (Phase 1) continues serving Android/PWA use case.

## Issues Encountered

- Turbopack internal panic on app/icon.png coexisting with app/icon.svg — isolated by binary search (add/remove file). Root cause: Next.js App Router metadata conflict between two `icon.*` files in same directory.

## User Setup Required

- **Dennis must replace Privacy Policy content:** Visit termsfeed.com, generate policy using Company = Fort Property Developments, Email = Dennis@fortpropertydevelopment.com, Website = www.FortPropertyDevelopments.com, Jurisdiction = BC (PIPA). Replace the placeholder sections in `app/privacy/page.tsx`.
- **Dennis may manually export icon.png:** If a 192x192 PNG icon is needed for PWA manifests, export from fort-logo-primary.svg using favicon.io or Figma and place in `public/` (not `app/`) to avoid the App Router conflict.

## Next Phase Readiness

- Privacy route live and crawlable — REQ-009 satisfied
- favicon.ico serving — REQ-010 partially satisfied (icon.png deferred to manual step)
- Ready for Phase 4 Plan 04 (deployment / launch checklist)

---
*Phase: 04-polish-and-launch*
*Completed: 2026-03-14*
