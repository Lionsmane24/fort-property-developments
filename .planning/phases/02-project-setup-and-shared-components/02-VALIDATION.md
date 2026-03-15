---
phase: 2
slug: project-setup-and-shared-components
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-14
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — visual/manual UAT is the gate for this phase |
| **Config file** | None — Wave 0 creates none (not needed for component scaffolding) |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build` (zero TypeScript/ESLint errors = passing gate) |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build` clean + manual browser walkthrough at 375px and 1280px
- **Before `/gsd:verify-work`:** Full build passes + UAT checklist from ROADMAP.md green

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 2-01-01 | 01 | 1 | REQ-002 | build | `npm run build` | ❌ Wave 0 | ⬜ pending |
| 2-01-02 | 01 | 1 | REQ-002 | build | `npm run build` | ❌ Wave 0 | ⬜ pending |
| 2-01-03 | 01 | 1 | REQ-002 | build | `npm run build` | ❌ Wave 0 | ⬜ pending |
| 2-02-01 | 02 | 2 | REQ-003 | visual | manual browser check at 1280px + 375px | ❌ Wave 0 | ⬜ pending |
| 2-02-02 | 02 | 2 | REQ-003 | visual | manual scroll test (shadow at 50px) | ❌ Wave 0 | ⬜ pending |
| 2-02-03 | 02 | 2 | REQ-003 | visual | Chrome DevTools mobile (375px) hamburger test | ❌ Wave 0 | ⬜ pending |
| 2-03-01 | 03 | 2 | REQ-003 | visual | manual browser check + scroll animation | ❌ Wave 0 | ⬜ pending |
| 2-03-02 | 03 | 2 | REQ-003 | visual | manual browser check footer links | ❌ Wave 0 | ⬜ pending |
| 2-03-03 | 03 | 2 | REQ-003 | build | `npm run build` | ❌ Wave 0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `package.json` — Next.js + React + TypeScript deps + scripts
- [ ] `next.config.ts` — minimum config
- [ ] `postcss.config.mjs` — Tailwind pipeline
- [ ] `tsconfig.json` — TypeScript config
- [ ] `app/globals.css` — Tailwind directives (@tailwind base/components/utilities)
- [ ] `app/layout.tsx` — root layout with fonts + Nav + Footer placeholder
- [ ] `app/page.tsx` — home placeholder (enables `npm run build` to pass)
- [ ] `components/` — directory scaffold
- [ ] `.env.local` — Formspree placeholder

*All files above must exist before per-wave `npm run build` validation can pass.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Nav drop shadow after 50px scroll | REQ-003 | No automated scroll test framework in scope | Open localhost:3000, scroll >50px, inspect nav shadow |
| Mobile hamburger opens full-screen overlay | REQ-003 | Requires viewport simulation | Chrome DevTools → 375px → click hamburger |
| FadeIn fires on scroll, disabled with reduced motion | REQ-003 | Requires OS-level setting toggle | Scroll page; toggle OS reduced motion; verify elements appear instantly |
| Footer copyright year is current (2026) | REQ-003 | Dynamic render check | View page source or browser, verify year = 2026 |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
