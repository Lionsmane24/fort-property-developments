---
phase: 02-project-setup-and-shared-components
plan: 01
subsystem: ui
tags: [nextjs, react, typescript, tailwindcss, postcss, formspree, motion]

requires:
  - phase: 01-brand-identity
    provides: tailwind.config.js with fort-* color tokens, app/fonts.ts with inter+playfair exports, public/logo/ SVGs

provides:
  - Working Next.js 16 project that passes npm run build
  - Root layout with font CSS variables applied to html element
  - Tailwind v3 CSS pipeline (globals.css, postcss.config.mjs)
  - Stub Nav and Footer components enabling build without Plan 02/03
  - TypeScript strict config, Next.js image optimization config
  - .env.local placeholder for Formspree endpoint

affects:
  - 02-02 (Nav component replaces components/Nav.tsx stub)
  - 02-03 (Footer component replaces components/Footer.tsx stub)
  - 03-content-pages (builds pages in working Next.js app)
  - 04-deploy (deploys this Next.js build)

tech-stack:
  added:
    - next@16.1.6
    - react@19.x
    - react-dom@19.x
    - motion@12.x
    - "@formspree/react@3.x"
    - typescript@5.x
    - tailwindcss@3.x
    - postcss@8.x
    - autoprefixer@10.x
    - eslint-config-next@16.x
  patterns:
    - Next.js App Router with root layout pattern
    - CSS variable font injection via html className
    - Tailwind v3 with fort-* color token design system

key-files:
  created:
    - package.json
    - package-lock.json
    - next.config.ts
    - postcss.config.mjs
    - tsconfig.json
    - .env.local
    - app/globals.css
    - app/layout.tsx
    - app/page.tsx
    - components/Nav.tsx
    - components/Footer.tsx
  modified:
    - tsconfig.json (Next.js auto-adjusted jsx to react-jsx, added target ES2017)

key-decisions:
  - "Used tailwindcss@3 instead of v4 (auto-fix: existing tailwind.config.js uses v3 module.exports format incompatible with v4)"
  - "Next.js 16.1.6 resolved as latest (plan specified v15, v16 is backwards compatible)"
  - "Nav.tsx and Footer.tsx created as minimal stubs to allow build before Plans 02 and 03"

patterns-established:
  - "Root layout pattern: import fonts from ./fonts, apply .variable classNames to html element"
  - "Tailwind v3: @tailwind directives in globals.css, postcss processes via tailwindcss/autoprefixer pipeline"
  - "Component path alias: @/* maps to project root"

requirements-completed: [REQ-002]

duration: 15min
completed: 2026-03-14
---

# Phase 2 Plan 01: Next.js Bootstrap Summary

**Next.js 16 project bootstrapped into existing repo using Tailwind v3 + fort-* color tokens, Inter/Playfair fonts, and passing npm run build with stub Nav/Footer components**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-03-14T11:20:00Z
- **Completed:** 2026-03-14T11:35:00Z
- **Tasks:** 2
- **Files modified:** 11

## Accomplishments

- Installed all required packages (Next.js 16, React 19, TypeScript, Tailwind v3, motion, @formspree/react) into existing repo without create-next-app
- Created app/globals.css, app/layout.tsx, app/page.tsx enabling npm run build to pass with zero TypeScript/ESLint errors
- Created stub Nav.tsx and Footer.tsx components allowing layout.tsx to build before Plans 02 and 03
- Preserved all Phase 1 deliverables unchanged (tailwind.config.js, app/fonts.ts, public/logo/, app/icon.svg)

## Task Commits

Each task was committed atomically:

1. **Task 1: Install packages and write config files** - `02e7681` (feat)
2. **Task 2: Create globals.css, layout.tsx, and page.tsx placeholder** - `ef12ebc` (feat)

**Plan metadata:** (docs commit to follow)

## Files Created/Modified

- `package.json` - Next.js 16 project manifest with dev/build/start/lint scripts
- `package-lock.json` - Lockfile for reproducible installs
- `next.config.ts` - TypeScript Next.js config with image optimization stub
- `postcss.config.mjs` - Tailwind + Autoprefixer postcss pipeline
- `tsconfig.json` - TypeScript strict config (auto-adjusted by Next.js: jsx=react-jsx, target=ES2017)
- `.env.local` - NEXT_PUBLIC_FORMSPREE_ENDPOINT placeholder
- `app/globals.css` - @tailwind base/components/utilities directives
- `app/layout.tsx` - Root layout: inter+playfair font variables on html, Nav, main, Footer wrappers
- `app/page.tsx` - Minimal home page placeholder (font-serif heading, fort-charcoal color)
- `components/Nav.tsx` - Stub: `export default function Nav() { return <header /> }`
- `components/Footer.tsx` - Stub: `export default function Footer() { return <footer /> }`

## Decisions Made

- **Tailwind v3 over v4:** npm install resolved tailwindcss@4, but existing `tailwind.config.js` uses v3 CommonJS format (`module.exports`) incompatible with v4. Auto-downgraded to tailwindcss@^3 to preserve Phase 1 file.
- **Next.js 16:** `npm install next@latest` resolved to 16.1.6 (plan specified v15). Accepted — v16 is backwards compatible and the plan's intent is satisfied.
- **Stub components:** Nav.tsx and Footer.tsx created as minimal stubs per plan instructions, to be replaced in Plans 02 and 03.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Downgraded tailwindcss from v4 to v3**
- **Found during:** Task 2 (create globals.css with @tailwind directives)
- **Issue:** `npm install tailwindcss` resolved to v4.2.1. Tailwind v4 uses `@import "tailwindcss"` syntax and does not support the v3-format `tailwind.config.js` (module.exports with content/theme/plugins). The @tailwind directives in globals.css would fail, and the fort-* color token config would be ignored.
- **Fix:** Ran `npm install -D tailwindcss@^3` to downgrade to 3.4.x
- **Files modified:** package.json, package-lock.json
- **Verification:** npm run build exits 0; fort-* tokens visible in tailwind.config.js with full v3 format
- **Committed in:** ef12ebc (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (Rule 1 - compatibility bug)
**Impact on plan:** Necessary to preserve Phase 1 tailwind.config.js integrity. No scope creep.

## Issues Encountered

None beyond the tailwindcss v4 version conflict documented above.

## User Setup Required

None - no external service configuration required for this plan. Formspree endpoint (`.env.local`) requires Dennis to create a Formspree account and replace the `xxx` placeholder before the contact form in Phase 3.

## Next Phase Readiness

- Next.js project is fully operational — `npm run build` passes, `npm run dev` starts at localhost:3000
- Plan 02 (Nav component) and Plan 03 (Footer component) can now replace the stubs
- All fort-* color tokens and font variables are active in the Tailwind pipeline
- No blockers for Plans 02 or 03

---
*Phase: 02-project-setup-and-shared-components*
*Completed: 2026-03-14*
