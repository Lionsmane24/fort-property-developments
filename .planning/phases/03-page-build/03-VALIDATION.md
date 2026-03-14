---
phase: 3
slug: page-build
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-14
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None installed — no jest/vitest/playwright configured |
| **Config file** | none — Wave 0 creates placeholder pages |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run lint` |
| **Estimated runtime** | ~15 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run lint`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** ~15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 3-01-01 | 01 | 0 | REQ-004 | smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 3-01-02 | 01 | 1 | REQ-004 | smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 3-02-01 | 02 | 1 | REQ-005 | smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 3-03-01 | 03 | 1 | REQ-006 | smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 3-04-01 | 04 | 2 | REQ-007 | smoke | `npm run build` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `public/images/` directory created
- [ ] Hero background image downloaded to `public/images/hero-bg.jpg` (< 300KB)
- [ ] `app/about/page.tsx` — stub file created
- [ ] `app/projects/page.tsx` — stub file created
- [ ] `app/contact/page.tsx` — stub file created

*Note: `app/page.tsx` exists but will be replaced. Other page routes do not yet exist.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Hero image loads with visible height | REQ-004 | No visual test framework | Browse localhost:3000, confirm hero is full-viewport-height with image visible |
| Register Interest form shows fallback when endpoint=xxx | REQ-006 | Runtime env check | Browse localhost:3000/projects, confirm mailto link renders instead of form |
| Contact form degrades to mailto when endpoint=xxx | REQ-007 | Runtime env check | Browse localhost:3000/contact, confirm mailto fallback |
| Real email + phone visible as clickable text | REQ-007 | Visual check | Inspect contact page — Dennis@fortpropertydevelopment.com and 604-290-6046 must be visible |
| All pages mobile-responsive at 375px | REQ-004–007 | No visual regression tool | DevTools → iPhone SE → check all 4 pages for horizontal scroll |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 20s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
