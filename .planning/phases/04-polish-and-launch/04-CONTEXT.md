# Phase 4: Polish and Launch - Context

**Gathered:** 2026-03-14
**Status:** Ready for planning

<domain>
## Phase Boundary

Make the site production-ready: SEO metadata on all 4 pages, Privacy Policy at /privacy, analytics installed, all images optimized, sitemap + robots.txt generated, favicon added, and deployed to Vercel with www.FortPropertyDevelopments.com connected. Out of scope: content rewrites, new pages, backend.

</domain>

<decisions>
## Implementation Decisions

### Analytics
- Use **Plausible Analytics** — simpler setup, no cookie banner required under GDPR/PIPEDA, privacy-first
- Install via `<Script>` in `app/layout.tsx` with Plausible's data-domain script
- No Google Analytics — avoids cookie consent banner complexity for a pre-launch site
- Claude's discretion: if Plausible account setup is a blocker, use GA4 as fallback (env var gated)

### Privacy Policy
- Generate via **TermsFeed** (free tier) — matches REQUIREMENTS.md spec
- Add `/privacy` route at `app/privacy/page.tsx` with the generated content as static copy
- Link in Footer (already has Privacy Policy placeholder) — replace placeholder href with `/privacy`
- Required fields for TermsFeed: company name (Fort Property Developments), email (Dennis@fortpropertydevelopment.com), website (www.FortPropertyDevelopments.com), BC jurisdiction

### SEO Metadata
- Each page exports its own `metadata` object via Next.js Metadata API
- Titles follow pattern: `[Page Name] | Fort Property Developments`
  - Home: "Fort Property Developments | Multiplex Infill Developer — Metro Vancouver"
  - About: "About | Fort Property Developments"
  - Projects: "Our Developments | Fort Property Developments"
  - Contact: "Contact | Fort Property Developments"
- Descriptions are location-specific and action-oriented (mention Burnaby, Surrey, Fraser Valley, etc.)
- OG image: use hero image (`/images/hero-bg.jpg`) as default og:image for all pages
- Root layout default metadata stays as fallback; individual pages override it

### Formspree Activation
- This is a **Dennis task** — create account at formspree.io, get 8-char endpoint hash
- In code: update `.env.local` NEXT_PUBLIC_FORMSPREE_ENDPOINT value (replace `xxx`)
- Plan should include a clear checkpoint task documenting exactly what Dennis needs to do and where to paste the value
- Form already built with graceful fallback — live form works immediately once endpoint is set

### Images and Performance
- All images already use `next/image` — audit needed for sizes
- Hero image already optimized to 256KB (q=25) — already under 300KB REQ-010 limit
- Card images: architectural render placeholder is a styled div — no image to optimize
- Favicon: create from fort-logo-primary.svg at 32px (.ico) and 192px (.png) — export from SVG

### Sitemap + robots.txt
- Use `next-sitemap` package — generates both automatically from App Router routes
- Config: `www.FortPropertyDevelopments.com` as siteUrl
- Exclude nothing — all 4 pages + /privacy should be indexed

### Deployment
- Vercel via CLI (`vercel --prod`) or GitHub integration
- Domain: www.FortPropertyDevelopments.com — Dennis connects in Vercel DNS settings
- SSL: auto-provisioned by Vercel
- Environment variable: set NEXT_PUBLIC_FORMSPREE_ENDPOINT in Vercel project settings (not just .env.local)

### Claude's Discretion
- Exact OG image dimensions and cropping
- Lighthouse audit remediation approach (likely image format, font preloading)
- robots.txt exclusions (none needed for v1)
- Exact Privacy Policy copy (use TermsFeed generator output as-is)

</decisions>

<specifics>
## Specific Ideas

- Privacy Policy must link in footer — Footer already has a placeholder; wire it to /privacy
- Plausible script goes in layout.tsx so it tracks all pages
- Formspree endpoint should also be set as Vercel env var — otherwise forms break in production even if .env.local is set locally
- Favicon: the existing `app/icon.svg` already serves as the SVG favicon in Next.js 13+ App Router — may just need to verify it shows correctly and add the PNG fallback

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `app/layout.tsx` — root metadata already set; individual page metadata objects override via export
- `app/icon.svg` — Next.js App Router auto-serves this as favicon; already exists
- `components/Footer.tsx` — has Privacy Policy link placeholder; just needs `/privacy` href wired
- `components/ContactForm.tsx` — Formspree-wired, already has mailto fallback; just needs real endpoint
- `public/images/hero-bg.jpg` — already optimized (256KB); use as og:image

### Established Patterns
- All pages are server components — `metadata` export works natively, no client-side workaround
- `next/image` already used everywhere — no changes needed to image components
- `process.env.NEXT_PUBLIC_*` pattern established for Formspree — same for analytics if env-gated

### Integration Points
- `app/layout.tsx` — Plausible `<Script>` goes here (strategy="afterInteractive")
- Footer Privacy Policy `href` — update from placeholder to `/privacy`
- New route: `app/privacy/page.tsx` — static page, no special components needed
- `next.config.js` — add next-sitemap post-build hook

</code_context>

<deferred>
## Deferred Ideas

- None raised — discussion stayed within Phase 4 scope

</deferred>

---

*Phase: 04-polish-and-launch*
*Context gathered: 2026-03-14*
