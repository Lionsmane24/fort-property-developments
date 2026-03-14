---
phase: 4
slug: polish-and-launch
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-14
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — Next.js build + manual browser checks |
| **Config file** | none — Wave 0 installs next-sitemap.config.js |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && cat public/sitemap.xml && cat public/robots.txt` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && cat public/sitemap.xml && cat public/robots.txt`
- **Before `/gsd:verify-work`:** Full suite must be green + manual checklist complete
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 4-01-01 | 01 | 1 | REQ-008/010 | build smoke | `npm run build` | ❌ Wave 0 | ⬜ pending |
| 4-01-02 | 01 | 1 | REQ-010 | build smoke | `npm run build` | ❌ Wave 0 | ⬜ pending |
| 4-02-01 | 02 | 1 | REQ-008 | build smoke | `npm run build` | ✅ | ⬜ pending |
| 4-02-02 | 02 | 1 | REQ-008 | manual | Check `<head>` in DevTools on all 4 pages | ✅ | ⬜ pending |
| 4-03-01 | 03 | 2 | REQ-009 | build smoke | `npm run build` | ❌ Wave 0 | ⬜ pending |
| 4-04-01 | 04 | 2 | REQ-010 | manual | DevTools Network → filter plausible | ❌ Wave 0 | ⬜ pending |
| 4-05-01 | 05 | 3 | REQ-010 | manual | Lighthouse mobile audit | ❌ Manual | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `next-sitemap` installed — `npm install next-sitemap --save-dev`
- [ ] `next-plausible` installed — `npm install next-plausible`
- [ ] `package.json` `postbuild` script added — `"postbuild": "next-sitemap"`
- [ ] `next-sitemap.config.js` created at project root
- [ ] `app/privacy/` directory structure ready

*Wave 0 must complete before plans that depend on these packages execute.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| OG tags present on all pages | REQ-008 | No headless testing setup | DevTools → Elements → `<head>` on each page; check og:title, og:description, og:image |
| Location keywords in descriptions | REQ-008 | Content quality check | Review metadata strings in page.tsx files |
| Lighthouse performance > 85 mobile | REQ-010 | Requires running server + audit | `npx @lhci/cli collect --url=http://localhost:3000` or Chrome DevTools Lighthouse tab |
| Lighthouse accessibility > 90 | REQ-010 | Requires running server + audit | Same as above |
| favicon.ico served at /favicon.ico | REQ-010 | Browser-only check | Visit site — favicon visible in browser tab |
| Analytics script in DOM | REQ-010 | External service dependency | DevTools → Network → filter "plausible" — script loads |
| Contact form works on live URL | REQ-010 | Requires live deployment + Formspree active | Submit form on https://www.FortPropertyDevelopments.com/contact — Dennis receives email |
| Footer Privacy Policy link → /privacy | REQ-009 | Browser navigation check | Click Privacy Policy in footer — loads /privacy without 404 |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
