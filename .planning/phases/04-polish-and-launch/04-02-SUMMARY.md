---
phase: 04-polish-and-launch
plan: 02
subsystem: seo-metadata
tags: [seo, metadata, opengraph, next.js, typescript]
dependency_graph:
  requires: [04-01]
  provides: [page-seo-metadata, og-tags, title-templates]
  affects: [all-pages, social-sharing, google-indexing]
tech_stack:
  added: []
  patterns: [next.js-metadata-api, og-shallow-merge-guard, title-template-bypass]
key_files:
  created: []
  modified:
    - app/layout.tsx
    - app/page.tsx
    - app/about/page.tsx
    - app/projects/page.tsx
    - app/contact/page.tsx
decisions:
  - "NEXT_TURBOPACK=0 required for next build on this Windows machine — Turbopack 16.1.6 panics with internal error on every build attempt; webpack fallback via env var produces clean output"
  - "About and Projects pages had basic untyped metadata before this plan — upgraded to typed Metadata with full OG block"
metrics:
  duration_seconds: 152
  completed_date: "2026-03-14"
  tasks_completed: 2
  files_modified: 5
---

# Phase 4 Plan 02: SEO Page Metadata Summary

Typed Next.js Metadata API exports added to root layout and all 4 pages — metadataBase, title template, Open Graph tags, and location keywords for Metro Vancouver SEO.

---

## What Was Built

Full SEO metadata coverage across the entire site:

- **Root layout** (`app/layout.tsx`): `metadataBase` set to `https://www.FortPropertyDevelopments.com`, title template `%s | Fort Property Developments`, and root-level `openGraph` defaults (siteName, images, locale `en_CA`).
- **Home page** (`app/page.tsx`): `title.absolute` to produce the full-sentence brand title without template duplication. OG block with all fields including images array.
- **About page** (`app/about/page.tsx`): Upgraded from untyped basic metadata to typed `Metadata` with `title: 'About'` (uses template), location-keyword description, and full OG block.
- **Projects page** (`app/projects/page.tsx`): Same upgrade — `title: 'Our Developments'`, location keywords in description, OG with images.
- **Contact page** (`app/contact/page.tsx`): New metadata export added (none existed before) — `title: 'Contact'`, response time + location in description, OG with images.

---

## Decisions Made

1. **NEXT_TURBOPACK=0 build workaround:** Next.js 16.1.6 defaults to Turbopack for `next build`, but Turbopack panics immediately on this Windows machine with a Rust-level internal error (`Dependency tracking is disabled so invalidation is not allowed`). Running `NEXT_TURBOPACK=0 npx next build` forces webpack fallback and produces a clean build. This is a pre-existing Turbopack bug in this version — not caused by this plan's changes. The workaround is documented here; the build script should be updated to add `NEXT_TURBOPACK=0` prefix when running on this machine.

2. **About and Projects pages had pre-existing untyped metadata:** Both pages already had `export const metadata = { ... }` (untyped). This plan upgraded them to `export const metadata: Metadata = { ... }` (typed) and added the missing `openGraph` block with `images` array — required to prevent shallow-merge OG image loss.

3. **OG images array on every page:** Per the plan's critical note, Next.js shallow-merges `openGraph` — if any page sets any OG key without including `images`, the root layout's OG image is lost. Every page that sets `openGraph` includes `images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }]`.

---

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Turbopack build panic on Windows**
- **Found during:** Task 1 verification
- **Issue:** `next build` (Next.js 16.1.6) uses Turbopack by default and panics with a Rust internal error before compiling any code. Cache clearing did not help.
- **Fix:** Used `NEXT_TURBOPACK=0 npx next build` to force webpack fallback. Build completed cleanly.
- **Files modified:** None — runtime workaround only.
- **Commit:** N/A (environment workaround, not a code change)

---

## Commits

| Hash | Message |
|------|---------|
| `3ad5a86` | feat(04-02): add metadataBase, title template, and root OG defaults to layout |
| `50101ac` | feat(04-02): add typed metadata exports to all 4 pages |

---

## Self-Check: PASSED

- [x] `app/layout.tsx` contains `metadataBase` — verified in file
- [x] `app/page.tsx` contains `title.absolute` — verified in file
- [x] `app/about/page.tsx` contains `export const metadata` — verified in file
- [x] `app/projects/page.tsx` contains `export const metadata` — verified in file
- [x] `app/contact/page.tsx` contains `export const metadata` — verified in file
- [x] Build passed (webpack fallback via `NEXT_TURBOPACK=0`)
- [x] All page OG blocks include `images` array
- [x] Location keywords (Burnaby, Surrey, North Vancouver, Coquitlam, Fraser Valley) in descriptions
