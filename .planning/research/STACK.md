# Stack Research: Fort Property Developments Website

## Recommended Stack

### Framework: Next.js 14+ (App Router)
- **Why:** Best balance of static generation + future flexibility; easy Vercel deployment; strong ecosystem
- **Alternative:** Astro 4+ — slightly lighter, better for pure content sites with no interactivity beyond forms
- **Verdict:** Next.js for Fort — gives room to grow (project galleries, future filtering, investor pages)

### Styling: Tailwind CSS 3+
- **Why:** Utility-first, fast to build custom designs, no CSS bloat, pairs perfectly with Canva-exported assets
- **Version:** 3.4+

### Hosting: Vercel (free tier)
- **Why:** Zero-config Next.js deployment, automatic HTTPS, global CDN, preview URLs per commit
- **Alternative:** Netlify — equally good, slightly better form handling natively

### Contact Forms: Formspree
- **Why:** No backend needed, free tier handles 50 submissions/month, spam protection, email notifications
- **Setup:** Drop HTML form pointing to Formspree endpoint — works with static Next.js
- **Alternative:** Netlify Forms (if switching to Netlify hosting)

### Image Optimization: Next.js Image component + Cloudinary (optional)
- **Why:** Auto-resizes/WebP converts property images; critical for fast load on photo-heavy pages
- **For launch:** Next.js Image component is sufficient; add Cloudinary when project photos are needed

### Analytics: Google Analytics 4 or Plausible
- **Why:** Track lead form conversions, page visits — essential for measuring site performance
- **Recommendation:** Plausible for privacy-respecting lightweight analytics; GA4 for full funnel tracking

### Maps: Google Maps Embed API
- **Why:** Show project locations — free embed tier is sufficient for v1

### Font: Google Fonts or Fontsource (self-hosted)
- **Recommendations:**
  - Headings: Playfair Display (elegant, premium) OR Cormorant Garamond
  - Body: Inter (clean, modern, highly readable)

## Canva Integration

Canva exports assets as:
- **Logo:** Export as SVG (best) or PNG with transparent background — drop directly into `/public/` directory
- **Brand assets:** Export color palette swatches → enter hex codes into `tailwind.config.js` as custom colors
- **Section backgrounds:** Export as WebP for web use
- **Workflow:** Design in Canva → export → place in Next.js `/public/images/` → reference in components

## What NOT to Use

| Technology | Why Not |
|------------|---------|
| WordPress | Overkill for v1; security burden; slow unless heavily optimized |
| Wix/Squarespace | Template-locked; hard to achieve custom premium feel; SEO limitations |
| Webflow | Expensive ($23+/mo); vendor lock-in; harder to hand off to developer later |
| Create React App | Deprecated; no SSG; bad for SEO |
| Plain HTML/CSS | No components; painful to maintain as pages grow |

## Development Dependencies

```json
{
  "next": "14+",
  "react": "18+",
  "tailwindcss": "3.4+",
  "framer-motion": "^11" // subtle animations on scroll
}
```

## Confidence Levels

| Decision | Confidence |
|----------|-----------|
| Next.js + Tailwind | High — industry standard for custom developer sites |
| Vercel hosting | High — zero-config, free tier sufficient |
| Formspree | High — proven, no backend needed |
| Canva → SVG workflow | High — standard asset pipeline |
