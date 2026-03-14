# Phase 4: Polish and Launch - Research

**Researched:** 2026-03-14
**Domain:** Next.js SEO metadata, analytics integration, sitemap generation, Vercel deployment
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Analytics:** Plausible Analytics — install via `<Script>` (or `next-plausible` package) in `app/layout.tsx`, no GA4
- **Privacy Policy:** Generated via TermsFeed free tier; static page at `app/privacy/page.tsx`; footer link already wired to `/privacy`
- **SEO title pattern:** `[Page Name] | Fort Property Developments` — Home title is full sentence, others are short
- **OG image:** Use `/images/hero-bg.jpg` as default og:image across all pages
- **Formspree activation:** Dennis task — create account, get 8-char hash, update `.env.local` AND Vercel env vars
- **Sitemap/robots.txt:** Use `next-sitemap` package, `siteUrl = www.FortPropertyDevelopments.com`, exclude nothing
- **Deployment:** Vercel via GitHub integration; custom domain connected in Vercel DNS settings
- **Favicon:** `app/icon.svg` already exists and auto-serves as SVG favicon; add `.ico` + 192px PNG fallback

### Claude's Discretion
- Exact OG image dimensions and cropping
- Lighthouse audit remediation approach (likely image format, font preloading)
- robots.txt exclusions (none needed for v1)
- Exact Privacy Policy copy (use TermsFeed generator output as-is)

### Deferred Ideas (OUT OF SCOPE)
- None raised — discussion stayed within Phase 4 scope
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| REQ-008 | Unique title + description on all 4 pages; H1 on every page; OG tags; location keywords in copy; robots.txt + sitemap.xml | Next.js Metadata API `export const metadata` on each page; `next-sitemap` post-build; `metadataBase` in root layout |
| REQ-009 | Privacy Policy at `/privacy`; linked in footer; required under PIPA BC before collecting personal data | Static `app/privacy/page.tsx` server component; footer already links to `/privacy` (confirmed in code) |
| REQ-010 | All images via `next/image`; hero < 300KB; card images < 100KB; Lighthouse perf > 85; HTTPS; favicon .ico + 192px PNG; analytics installed | Images confirmed; hero at 256KB; `next-plausible` or manual Script; favicon file-based API; Vercel auto-HTTPS |
</phase_requirements>

---

## Summary

Phase 4 is an integration and polish phase — all the underlying page code is done. The work is wiring metadata onto server components that already exist, installing two small packages (`next-sitemap`, `next-plausible`), creating one new static route (`/privacy`), generating favicon files from the existing SVG, and deploying to Vercel with a custom domain.

The stack is well-established: Next.js 16 App Router's `export const metadata` pattern works natively on all existing server components with zero structural changes. The `next-sitemap` post-build hook requires only a config file and a `postbuild` script addition. Plausible via `next-plausible` wraps `layout.tsx` with one component and no client-side JavaScript changes.

The only human-gated blockers are Dennis: Formspree account, TermsFeed policy generation, and domain DNS configuration. Code tasks can proceed in parallel; Dennis tasks need checkpoint documentation so they don't silently block the live site.

**Primary recommendation:** Structure the plan as sequential waves — metadata first (build must pass), then analytics + sitemap, then privacy page, then favicon generation, then Vercel deployment. Each wave is independently verifiable.

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next (already installed) | 16.1.6 | Metadata API, App Router routing, `next/image` | Already in project |
| next-plausible | 3.12.5 | Plausible script injection + App Router support | Official Plausible recommendation for Next.js |
| next-sitemap | latest (^4.x) | Auto-generates `sitemap.xml` + `robots.txt` post-build | Battle-tested, App Router compatible, minimal config |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/script (built-in) | — | Script loading strategy control | Alternative if not using next-plausible package |
| sharp (likely already resolved by Next.js) | — | Image optimization at build time | Needed by `next/image` in production builds |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| next-plausible | Manual `<Script>` in layout.tsx | Manual approach works fine; next-plausible adds `usePlausible()` hook for future custom events — worth the one-liner install |
| next-sitemap | Next.js built-in `app/sitemap.ts` | Built-in requires TypeScript file returning array; next-sitemap is config-file-driven and auto-discovers all routes without code |

**Installation:**
```bash
npm install next-plausible
npm install next-sitemap --save-dev
```

---

## Architecture Patterns

### Recommended Project Structure (additions only)
```
app/
├── privacy/
│   └── page.tsx          # Static privacy policy page
├── layout.tsx            # Add: metadataBase + PlausibleProvider wrapper
├── page.tsx              # Add: export const metadata
├── about/page.tsx        # Add: export const metadata
├── projects/page.tsx     # Add: export const metadata
└── contact/page.tsx      # Add: export const metadata
public/
├── favicon.ico           # Generated from fort-logo-primary.svg (32px)
└── icon-192.png          # Generated from fort-logo-primary.svg (192px)
next-sitemap.config.js    # New: sitemap config at project root
```

### Pattern 1: Root Layout — metadataBase + title template

Set `metadataBase` in root layout so page-level metadata can use relative image paths. Use `title.template` so child pages only need to export their short name.

```typescript
// Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.FortPropertyDevelopments.com'),
  title: {
    template: '%s | Fort Property Developments',
    default: 'Fort Property Developments | Multiplex Infill Developer — Metro Vancouver',
  },
  description: 'Fort Property Developments builds 4–6 unit multiplex infill across Metro Vancouver and the Fraser Valley.',
  openGraph: {
    siteName: 'Fort Property Developments',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
}
```

### Pattern 2: Per-Page Metadata Override

Each page exports its own `metadata` object. Because `openGraph` is shallow-merged (NOT deep-merged), each page must repeat `images` if overriding any `openGraph` field.

```typescript
// Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',  // Renders as: "About | Fort Property Developments"
  description: 'Dennis founded Fort Property Developments to bring multiplex infill to Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley.',
  openGraph: {
    title: 'About | Fort Property Developments',
    description: 'Meet the team behind Fort Property Developments — BC multiplex infill developers.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}
```

**CRITICAL:** If a page sets any `openGraph` field, it MUST re-include `images` — the root layout's `openGraph.images` will NOT inherit into the page if the page defines any `openGraph` key.

### Pattern 3: Plausible via next-plausible

Wrap body content in `PlausibleProvider`. This is a server-compatible wrapper that injects the script tag.

```typescript
// Source: https://github.com/4lejandrito/next-plausible
// app/layout.tsx
import PlausibleProvider from 'next-plausible'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-fort-bg text-fort-gray font-sans">
        <PlausibleProvider domain="www.FortPropertyDevelopments.com">
          <Nav />
          <main>{children}</main>
          <Footer />
        </PlausibleProvider>
      </body>
    </html>
  )
}
```

### Pattern 4: next-sitemap config

```javascript
// Source: https://www.npmjs.com/package/next-sitemap
// next-sitemap.config.js (project root)
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.FortPropertyDevelopments.com',
  generateRobotsTxt: true,
  // All 5 routes should be indexed — no exclusions for v1
}
```

Add to `package.json` scripts:
```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

The generated files land in `/public/` — `sitemap.xml` and `robots.txt` — and are served by Next.js automatically.

### Pattern 5: Favicon — file-based approach

Next.js App Router serves `app/icon.svg` automatically as the SVG favicon. For `.ico` and 192px PNG fallbacks, place files in the `app/` directory (preferred) or `public/`:

- `app/favicon.ico` → served as `/favicon.ico`, auto-linked in `<head>`
- `app/icon.png` (192×192) → served as `/icon.png`, auto-linked

Files in `app/` take higher priority than `metadata.icons` config. No code changes required — just file placement.

For SVG-to-ICO/PNG conversion: use a free tool like [favicon.io](https://favicon.io/favicon-converter/) or [squoosh.app](https://squoosh.app) to export from `public/logo/fort-logo-primary.svg`.

### Anti-Patterns to Avoid

- **Relying on root layout `openGraph` to cascade:** Deep merge does not happen. Any page that sets any `openGraph` key must include `images` or the OG image will be missing on that page.
- **Using `next/head` for metadata:** Deprecated in App Router. Use `export const metadata` only.
- **Setting `metadataBase` on individual pages:** Set it once in `app/layout.tsx` — it cascades automatically.
- **Forgetting Vercel env vars:** `.env.local` is not deployed. `NEXT_PUBLIC_FORMSPREE_ENDPOINT` must be added in Vercel project settings → Environment Variables, or forms will break in production.
- **Running `next-sitemap` without `postbuild`:** If only run manually, sitemap falls out of sync. Use `postbuild` in `package.json` so it runs on every `next build`.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Sitemap generation | Manual XML template | next-sitemap | Auto-discovers all App Router routes; handles index sitemaps, lastmod, changefreq |
| robots.txt | Static file in /public | next-sitemap `generateRobotsTxt: true` | Keeps robots.txt in sync with sitemap URL |
| Analytics script injection | Raw `<script>` in layout | next-plausible `PlausibleProvider` | Handles script loading strategy, deduplication, and SSR compatibility |
| OG image resizing | Custom image manipulation | Use existing hero-bg.jpg with explicit width/height in metadata | Already optimal size; no generation needed |

**Key insight:** This phase is almost entirely configuration — the framework handles the heavy lifting. The risk is misconfiguration (especially the openGraph deep-merge trap), not missing functionality.

---

## Common Pitfalls

### Pitfall 1: openGraph Shallow Merge Wipes OG Image
**What goes wrong:** Page exports `openGraph: { title: '...' }` without `images`. Root layout's `openGraph.images` is NOT inherited. Social share shows no image.
**Why it happens:** Next.js merges metadata objects shallowly — if a child sets `openGraph`, the entire `openGraph` object from the parent is replaced.
**How to avoid:** Every page that sets any `openGraph` key must also set `openGraph.images`.
**Warning signs:** Check with [opengraph.xyz](https://www.opengraph.xyz) after deployment — missing preview image on any page.

### Pitfall 2: metadataBase Missing Causes Build Error
**What goes wrong:** OG image specified as `/images/hero-bg.jpg` (relative) but `metadataBase` not set in root layout → Next.js throws build error: "metadataBase required for absolute URL resolution."
**Why it happens:** Metadata fields with URLs require a base to resolve relative paths.
**How to avoid:** Set `metadataBase: new URL('https://www.FortPropertyDevelopments.com')` in `app/layout.tsx`.
**Warning signs:** `npm run build` fails with metadata URL error.

### Pitfall 3: Formspree Works Locally But Not in Production
**What goes wrong:** Form appears to submit but Dennis never receives emails after deployment.
**Why it happens:** `.env.local` is excluded from Vercel deployments by design. The env var must be set in Vercel project settings.
**How to avoid:** Document the Vercel env var step explicitly as a Dennis checkpoint task. Test form submission on the live URL before declaring launch complete.

### Pitfall 4: next-sitemap Generates Before Build Completes
**What goes wrong:** Running `next-sitemap` manually before `next build` generates a sitemap from stale or missing routes.
**How to avoid:** Always use `"postbuild": "next-sitemap"` — npm `postbuild` runs automatically after `build` completes.

### Pitfall 5: Hero Image OG Dimensions
**What goes wrong:** OG image appears cropped or rejected by social platforms.
**Why it happens:** OG spec recommends 1200×630px (1.91:1). The actual hero image dimensions may differ.
**How to avoid:** Specify `width` and `height` in the metadata `images` array matching the actual file dimensions. Check with `identify` or an image editor.
**Warning sign:** LinkedIn/Facebook debug tools show "image too small" or wrong aspect ratio.

### Pitfall 6: Privacy Policy Page Missing from Sitemap
**What goes wrong:** `app/privacy/page.tsx` created after `next-sitemap` config is written — verify that all 5 routes (/, /about, /projects, /contact, /privacy) appear in the generated `sitemap.xml`.
**How to avoid:** Run `npm run build` after creating the privacy page and inspect `public/sitemap.xml`.

---

## Code Examples

### Verified: Home Page Metadata (full title override)
```typescript
// app/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Fort Property Developments | Multiplex Infill Developer — Metro Vancouver',
  },
  description: 'Fort Property Developments builds 4–6 unit multiplex infill in Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley.',
  openGraph: {
    title: 'Fort Property Developments | Multiplex Infill Developer — Metro Vancouver',
    description: 'Density done right — 4–6 unit multiplex infill across Metro Vancouver and the Fraser Valley.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630, alt: 'Fort Property Developments — Metro Vancouver multiplex infill' }],
    type: 'website',
  },
}
```

Note: `title.absolute` used on Home page to bypass the `%s | Fort Property Developments` template and produce the exact title specified in CONTEXT.md.

### Verified: Simple Child Page Metadata
```typescript
// app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',  // → "About | Fort Property Developments"
  description: 'Meet Dennis and the Fort Property Developments team — BC-rooted multiplex infill developers serving Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley.',
  openGraph: {
    title: 'About | Fort Property Developments',
    description: 'BC-rooted multiplex infill development — the Fort difference.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}
```

### Verified: Privacy Page (minimal metadata)
```typescript
// app/privacy/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',  // → "Privacy Policy | Fort Property Developments"
  description: 'Privacy Policy for Fort Property Developments — how we collect, use, and protect your personal information under PIPA BC.',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-3xl text-fort-charcoal mb-8">Privacy Policy</h1>
      {/* TermsFeed-generated content pasted here as JSX */}
    </main>
  )
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `<Head>` from `next/head` for meta tags | `export const metadata` in page/layout files | Next.js 13 (App Router) | No `'use client'` required; SSR-native |
| Manual `sitemap.xml` in /public | `next-sitemap` postbuild or built-in `app/sitemap.ts` | ~2022 | Auto-discovery, no maintenance |
| GA4 (cookies required) | Plausible (cookie-free) | Ongoing choice | No cookie banner needed; PIPEDA compliant |
| `viewport` in metadata object | `export const viewport` (separate export) | Next.js 14 | `viewport` in `metadata` is deprecated |

**Deprecated/outdated:**
- `metadata.viewport`: Deprecated since Next.js 14. Use `export const viewport: Viewport` separately if needed (not required for this phase).
- `metadata.themeColor`: Same — use `generateViewport`.
- `next/head` component: Do not use in App Router pages.

---

## Vercel Deployment Reference

### GitHub Integration (auto-deploy pipeline)
1. Connect GitHub repo in Vercel dashboard → "Import Project"
2. Framework: Next.js (auto-detected)
3. Every `git push` to `main` triggers auto-build + deploy
4. Build command: `npm run build` (which also runs `postbuild` → `next-sitemap`)

### Environment Variables in Vercel
Set in Project Settings → Environment Variables:
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = `[8-char hash from Dennis's Formspree account]`
- Scope: Production + Preview

### Custom Domain DNS (CNAME method for www subdomain)
1. In domain registrar DNS settings: Add CNAME record
   - Name: `www`
   - Value: `cname.vercel-dns.com.` (note trailing period — required)
2. In Vercel Project Settings → Domains: Add `www.FortPropertyDevelopments.com`
3. Also add naked domain redirect: `FortPropertyDevelopments.com` → `www.FortPropertyDevelopments.com`
4. SSL: Auto-provisioned by Vercel via Let's Encrypt within minutes of DNS propagation

---

## Open Questions

1. **Hero image actual dimensions**
   - What we know: File is 256KB, serves from `/images/hero-bg.jpg`
   - What's unclear: Exact pixel dimensions (needed for accurate OG metadata `width`/`height`)
   - Recommendation: Run `file public/images/hero-bg.jpg` or check in an image editor; use actual dimensions in metadata `images` array. Common Unsplash download is 1920×1280 — use those if confirmed.

2. **Plausible account setup timing**
   - What we know: Plausible requires a paid/trial account to register the domain
   - What's unclear: Whether Dennis has created a Plausible account yet
   - Recommendation: Include a checkpoint task. If account is blocked, the `PlausibleProvider` can be installed with `enabled={false}` as a placeholder and activated when account is ready.

3. **TermsFeed privacy policy content**
   - What we know: Dennis needs to visit termsfeed.com, fill in company details, and copy the output
   - What's unclear: When Dennis will do this
   - Recommendation: Create the `app/privacy/page.tsx` file with a placeholder heading so the route exists and the build passes; swap in real content when Dennis provides it.

---

## Validation Architecture

> `nyquist_validation` is `true` in `.planning/config.json` — this section is required.

### Test Framework
| Property | Value |
|----------|-------|
| Framework | None installed — Next.js build + manual browser checks |
| Config file | None — see Wave 0 |
| Quick run command | `npm run build` (verifies metadata compiles, sitemap generates) |
| Full suite command | `npm run build && npx lighthouse http://localhost:3000 --output=json --quiet` |

This phase has no unit-testable logic — all deliverables are configuration, static content, and external service integration. The validation strategy is build-time verification + manual browser + Lighthouse audit.

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | Exists? |
|--------|----------|-----------|-------------------|---------|
| REQ-008 | `<title>` correct on all pages | Build smoke | `npm run build` (build fails on metadata errors) | ✅ |
| REQ-008 | OG tags present on all pages | Manual | Open DevTools → Elements → `<head>` on each page | ❌ Manual |
| REQ-008 | Location keywords in descriptions | Manual | Review metadata strings in page.tsx files | ❌ Manual |
| REQ-008 | `sitemap.xml` generated at /sitemap.xml | Build smoke | `npm run build && cat public/sitemap.xml` | ❌ Wave 0 |
| REQ-008 | `robots.txt` generated at /robots.txt | Build smoke | `npm run build && cat public/robots.txt` | ❌ Wave 0 |
| REQ-009 | `/privacy` route returns 200 | Build smoke | `npm run build` (missing page = build error) | ❌ Wave 0 |
| REQ-009 | Footer Privacy Policy link goes to /privacy | Manual | Click Footer link in browser | ✅ (href already set) |
| REQ-010 | Lighthouse performance > 85 mobile | Lighthouse audit | `npx @lhci/cli collect --url=http://localhost:3000` (post-deploy) | ❌ Manual |
| REQ-010 | Lighthouse accessibility > 90 | Lighthouse audit | Same as above | ❌ Manual |
| REQ-010 | favicon.ico served at /favicon.ico | Manual | Browser address bar favicon visible | ❌ Wave 0 |
| REQ-010 | Analytics script present in DOM | Manual | DevTools → Network → filter plausible | ❌ Manual |
| REQ-010 | Contact form works on live URL | Manual | Submit form on https://... domain | ❌ Manual (Dennis) |

### Sampling Rate
- **Per task commit:** `npm run build` — confirms no TypeScript/metadata errors
- **Per wave merge:** `npm run build && cat public/sitemap.xml && cat public/robots.txt`
- **Phase gate:** Full manual checklist + Lighthouse audit before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] `next-sitemap` installed — `npm install next-sitemap --save-dev`
- [ ] `next-plausible` installed — `npm install next-plausible`
- [ ] `package.json` `postbuild` script added
- [ ] `next-sitemap.config.js` created at project root
- [ ] `app/privacy/` directory created (can be placeholder content initially)

*(No test framework required — build + manual browser verification covers all deliverables)*

---

## Sources

### Primary (HIGH confidence)
- [Next.js generateMetadata docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) — metadata API, openGraph structure, metadataBase, title template (fetched 2026-03-14, version 16.1.6)
- [next-plausible GitHub](https://github.com/4lejandrito/next-plausible) — PlausibleProvider usage in App Router layout
- [Plausible Next.js integration docs](https://plausible.io/docs/nextjs-integration) — official Plausible recommendation to use next-plausible
- [Vercel custom domain docs](https://vercel.com/docs/domains/working-with-domains/add-a-domain) — CNAME setup, SSL auto-provision

### Secondary (MEDIUM confidence)
- [next-sitemap guide](https://www.buttercups.tech/blog/react/ultimate-guide-to-next-sitemap-with-nextjs-app-router) — App Router postbuild config pattern (verified against npm package)
- [Next.js favicon docs](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons) — file-based icon API

### Tertiary (LOW confidence)
- None — all critical claims verified against official docs

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — official Next.js 16 docs confirmed; next-plausible is Plausible's own recommendation
- Architecture patterns: HIGH — verified against official Next.js generateMetadata reference
- Pitfalls: HIGH — openGraph shallow-merge behavior confirmed in official docs "Merging" section
- Deployment: MEDIUM — Vercel docs confirmed; specific domain DNS timing varies by registrar

**Research date:** 2026-03-14
**Valid until:** 2026-06-14 (90 days — Next.js metadata API is stable; next-sitemap/next-plausible are mature packages)
