# Pitfalls Research: Real Estate Developer Brand & Website

## Credibility Killers

### No Completed Projects + No Story = No Trust
**Warning signs:** About page with no founder info, no project history, nothing personal
**Prevention:** Lead with Dennis's story. Any real estate experience (personal investing, trades background, anything) goes on the About page. The person IS the credibility when there's no portfolio.
**Phase:** Brand/About page (Phase 3)

### Generic Template Look
**Warning signs:** Site looks like every other developer — same hero format, same navy colors, same stock imagery
**Prevention:** Distinctive color palette (charcoal+copper or forest+stone). Custom renders or local photography. Never use stock photos of smiling families.
**Phase:** Brand identity (Phase 1)

### Render Quality Mismatch
**Warning signs:** Low-quality concept renders next to premium brand language
**Prevention:** Invest in one good architectural render per project, even at planning stage. SketchUp + professional renderer or commission one render ($300-800) — worth it.
**Phase:** Projects page (Phase 3)

### Contact Form as the ONLY Contact Method
**Warning signs:** No email address, no phone number visible
**Prevention:** Display email and phone in footer and on Contact page. Formspree handles the form but the real contact info must be visible.
**Phase:** Contact page (Phase 3)

## Brand Mistakes

### "Fort" Without Meaning
**Warning signs:** Name used without any explanation — just "Fort Property Developments" with no connection to what it means
**Prevention:** Create a brief brand narrative: "Fort — because every home we build is a permanent mark on the landscape, built to last generations." Use this in About page, maybe in a hero subheading.
**Phase:** Brand/Copy (Phase 1-3)

### Logo That Doesn't Scale
**Warning signs:** Logo that looks great at 300px but unreadable at 32px (browser tab favicon)
**Prevention:** Test logo at: 300px (desktop header), 150px (mobile), 32px (favicon), 1200px (OG image). The Canva-built logo must work at all sizes. May need simplified monogram version for small sizes.
**Phase:** Logo design (Phase 1)

### Forgetting the Mobile Buyer
**Warning signs:** Site only tested on desktop
**Prevention:** Over 60% of real estate interest browsing happens on mobile. Design mobile-first — test on iPhone and Android before any other device. Tailwind makes this manageable.
**Phase:** All phases

### Tagline That's Too Developer-Speak
**Warning signs:** "Innovative solutions for the modern housing landscape" — sounds like every other developer
**Prevention:** Be specific and geographic. "Building quality 4-6 unit homes across the Lower Mainland" is 10x better than any vague innovation statement.
**Phase:** Brand/Copy (Phase 1)

## Legal / Compliance (BC-Specific)

### Pre-Sale Marketing Without Disclosure Statement
**Risk level:** HIGH — BCFSA can issue cease and desist
**What triggers it:** Accepting deposits, "reservations," or "priority registration" commitments for units not yet built
**Prevention:** "Register Interest" or "Join Waitlist" for notification only (no deposit) is safe. DO NOT take any form of payment or binding commitment without a filed Disclosure Statement.
**Phase:** Contact/Projects pages copy review

### Privacy Policy Missing
**Risk level:** Medium — PIPA BC requires privacy policy if collecting personal data
**Prevention:** Add a simple Privacy Policy page (generator at TermsFeed or Termly — free). Link in footer.
**Phase:** Launch checklist (Phase 4)

### FINTRAC Registration
**Risk level:** Medium — required for developers selling pre-sale condos or multi-family
**Prevention:** Register with FINTRAC as a real estate developer before accepting any buyer info in sales context. Website itself doesn't trigger registration but actual sales process does.
**Phase:** Pre-launch legal review (outside website scope but flag it)

### Copyright on Images/Renders
**Risk level:** Medium — using renders you don't own rights to
**Prevention:** Ensure any renders commissioned give Fort full usage rights. Canva-generated graphics are safe under Canva license. Google Street View embeds are fine; screenshots are not.
**Phase:** Asset creation (Phase 1-3)

## SEO Pitfalls

### No Local SEO Signals
**Warning signs:** No location pages, no neighborhood mentions, generic copy
**Prevention:** Include city/neighborhood names naturally in copy: "We develop in Burnaby, Surrey, North Vancouver..." Google needs these signals to rank for local searches.
**Phase:** All page copy

### No Google Business Profile
**Warning signs:** Search "Fort Property Developments" and nothing comes up
**Prevention:** Create Google Business Profile (free) immediately after site launches. Tied to the domain and physical address or service area.
**Phase:** Launch (Phase 4)

### Missing Meta Descriptions
**Warning signs:** Social shares show ugly URL snippets instead of compelling descriptions
**Prevention:** Write unique meta title + description for every page. Next.js metadata API makes this easy.
**Phase:** Phase 4 Polish

### Images Not Optimized
**Warning signs:** 3MB hero image making site slow (kills SEO and user experience)
**Prevention:** Use Next.js Image component — auto-optimizes and serves WebP. All images under 300KB for hero, 100KB for thumbnails.
**Phase:** Phase 3-4

## Copy Mistakes

### "We Are Committed to Excellence"
**Warning signs:** Any sentence starting with "We are committed to..."
**Prevention:** Eliminate all corporate filler language. Replace with specifics: instead of "commitment to quality," say "Every Fort building is built to Step 4 BC Energy Code requirements."

### No Call to Action on Every Page
**Warning signs:** Visitors read About page and then leave — no prompt to do anything
**Prevention:** Every page ends with a clear CTA. About → "See Our Projects." Projects → "Register Interest." Home → multiple CTAs at different scroll depths.

### Missing "Why You / Why Now"
**Warning signs:** About page describes what the company does but not WHY Dennis started it or why now
**Prevention:** The founder story + the BC housing context (missing middle housing demand, multiplex zoning changes) is a powerful narrative. Use it.
