---
phase: 04-polish-and-launch
plan: 01
subsystem: infra
tags: [next-sitemap, next-plausible, seo, sitemap, robots-txt]

# Dependency graph
requires:
  - phase: 03-page-build
    provides: All 5 app routes built and verified

provides:
  - next-sitemap postbuild hook generating sitemap.xml and robots.txt on every build
  - next-plausible package available for analytics integration in layout.tsx
  - next-sitemap.config.js wired with FortPropertyDevelopments.com siteUrl

affects:
  - 04-02 (privacy page — /privacy route will auto-appear in next sitemap)
  - 04-03 (analytics — next-plausible ready to import)
  - 04-04 (launch — sitemap URL ready to submit to Google Search Console)

# Tech tracking
tech-stack:
  added:
    - next-sitemap@4.2.3 (devDependency)
    - next-plausible@3.12.5 (dependency)
  patterns:
    - postbuild npm lifecycle hook runs next-sitemap automatically after every production build

key-files:
  created:
    - next-sitemap.config.js
    - public/sitemap.xml
    - public/sitemap-0.xml
    - public/robots.txt
  modified:
    - package.json
    - package-lock.json

key-decisions:
  - "next-sitemap generates sitemap-0.xml for pages and sitemap.xml as the index — both committed to public/"
  - "All current routes (/, /about, /projects, /contact) indexed with no exclusions for v1"

patterns-established:
  - "postbuild hook: next-sitemap binary runs automatically after npm run build — no manual invocation needed"

requirements-completed: [REQ-008, REQ-010]

# Metrics
duration: 10min
completed: 2026-03-14
---

# Phase 4 Plan 01: SEO Infrastructure Summary

**next-sitemap and next-plausible installed, postbuild hook wired — every production build auto-generates sitemap.xml and robots.txt at FortPropertyDevelopments.com**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-03-14T23:30:00Z
- **Completed:** 2026-03-14T23:40:00Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments

- Installed next-sitemap (devDep) and next-plausible (dep) — zero vulnerabilities
- Added `"postbuild": "next-sitemap"` to package.json scripts — runs automatically after every `npm run build`
- Created next-sitemap.config.js with correct siteUrl and generateRobotsTxt: true
- Build green: public/sitemap.xml, public/sitemap-0.xml, and public/robots.txt all generated correctly

## Task Commits

Each task was committed atomically:

1. **Task 1: Install packages and add postbuild script** - `caa5568` (chore)
2. **Task 2: Write next-sitemap.config.js and verify build** - `1abefe0` (feat)

## Files Created/Modified

- `next-sitemap.config.js` - Sitemap config with FortPropertyDevelopments.com siteUrl, generateRobotsTxt enabled
- `public/sitemap.xml` - Sitemap index referencing sitemap-0.xml
- `public/sitemap-0.xml` - All current routes: /, /about, /projects, /contact
- `public/robots.txt` - Auto-generated; references sitemap URL and Host
- `package.json` - Added postbuild script, next-plausible in dependencies, next-sitemap in devDependencies
- `package-lock.json` - Updated with 4 new packages

## Decisions Made

- next-sitemap produces a sitemap index (sitemap.xml) + page file (sitemap-0.xml) by default — both committed to public/
- /privacy route not yet in sitemap (page doesn't exist yet); it will auto-appear after Plan 02 adds it

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Plan 02 (Privacy page) can proceed — sitemap will auto-update after that build
- Plan 03 (Analytics) can proceed — next-plausible package is installed and importable
- Plan 04 (Launch) sitemap URL ready: https://www.FortPropertyDevelopments.com/sitemap.xml

---
*Phase: 04-polish-and-launch*
*Completed: 2026-03-14*
