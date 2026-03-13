---
phase: 1
slug: brand-identity
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-12
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | File system checks + manual visual review (no automated test framework — this is a design/asset phase) |
| **Config file** | none |
| **Quick run command** | `ls .planning/brand/ .planning/phases/01-brand-identity/` |
| **Full suite command** | `ls public/logo/ public/ && cat tailwind.config.js` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `ls` check to confirm files exist
- **After every plan wave:** Visual review of exported assets + tailwind config correctness check
- **Before `/gsd:verify-work`:** All assets present + Dennis's visual approval obtained
- **Max feedback latency:** N/A (design phase — human review is primary validation)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | REQ-001 | file-exists | `ls .planning/brand/colors.md` | ❌ W0 | ⬜ pending |
| 1-01-02 | 01 | 1 | REQ-001 | file-exists | `ls public/logo/*.svg public/logo/*.png` | ❌ W0 | ⬜ pending |
| 1-01-03 | 01 | 2 | REQ-001 | file-exists | `ls public/favicon.ico app/icon.svg` | ❌ W0 | ⬜ pending |
| 1-01-04 | 01 | 2 | REQ-001 | syntax-check | `node -e "require('./tailwind.config.js')"` | ❌ W0 | ⬜ pending |
| 1-01-05 | 01 | 2 | REQ-001 | syntax-check | `node -e "require('./app/fonts.ts')"` or grep check | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `public/logo/` directory created
- [ ] `app/` directory exists (Next.js project scaffold must exist by end of Phase 1 or these checks defer to Phase 2)
- [ ] `.planning/brand/` directory created for brand documentation

*Note: Because Phase 1 is primarily a design phase (Canva work + config files), most validation is manual visual review. The automated checks are lightweight file-existence tests.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Logo readability at 32px | REQ-001 | Requires human visual judgment | Open logo SVG, resize browser to 32px wide, confirm mark is legible |
| Logo readability at 150px | REQ-001 | Requires human visual judgment | View PNG at 150px, confirm wordmark is readable on mobile |
| Color palette visual appeal | REQ-001 | Aesthetic judgment | View both palettes A and C side-by-side, confirm chosen palette projects trust + modernity |
| Logo+palette combination | REQ-001 | Aesthetic judgment | View both logo options with chosen palette, confirm visual harmony |
| Dennis approval of final brand | REQ-001 | Stakeholder sign-off required | Dennis reviews both logo options + palettes, selects final direction |

---

## Validation Sign-Off

- [ ] Brand color tokens documented in `.planning/brand/colors.md`
- [ ] Logo exported as SVG (transparent background) and PNG (transparent background)
- [ ] Favicon variant created and exported
- [ ] `tailwind.config.js` contains `fort-dark`, `fort-accent`, `fort-bg` token names
- [ ] `app/fonts.ts` exports `cormorant` and `inter` font objects
- [ ] Dennis has reviewed both logo options and selected final direction
- [ ] Dennis has confirmed color palette choice (A or C)
- [ ] `nyquist_compliant: true` set in frontmatter after all above checked

**Approval:** pending
