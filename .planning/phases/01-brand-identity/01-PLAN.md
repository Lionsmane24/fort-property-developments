---
phase: 01-brand-identity
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - .planning/brand/colors.md
  - .planning/brand/canva-brief.md
  - tailwind.config.js
  - app/fonts.ts
  - public/logo/fort-logo-primary.svg
  - public/logo/fort-logo-primary.png
  - public/logo/fort-logo-reversed.png
  - app/favicon.ico
  - app/apple-icon.png
  - app/icon.svg
autonomous: false
requirements:
  - REQ-001
must_haves:
  truths:
    - "A final logo file exists at public/logo/fort-logo-primary.svg or .png"
    - "A reversed (white) logo exists at public/logo/fort-logo-reversed.png for dark backgrounds"
    - "Favicon files exist at app/favicon.ico and app/apple-icon.png"
    - "tailwind.config.js contains fort-dark, fort-accent, and fort-bg color tokens"
    - "app/fonts.ts exports cormorant and inter font objects with CSS variable names"
    - "Dennis has chosen one logo direction (Option 1 or Option 2)"
    - "Dennis has chosen one color palette (A: Charcoal+Copper or C: Forest+Stone)"
    - "Brand decisions are documented in .planning/brand/colors.md"
  artifacts:
    - path: ".planning/brand/colors.md"
      provides: "Color token documentation with chosen palette hex values and usage guidelines"
      contains: "fort-dark, fort-accent, fort-bg"
    - path: ".planning/brand/canva-brief.md"
      provides: "Step-by-step Canva design instructions for Dennis"
      contains: "Option 1, Option 2, Palette A, Palette C"
    - path: "tailwind.config.js"
      provides: "Tailwind CSS configuration with Fort color tokens and font CSS variable references"
      contains: "fort-dark"
    - path: "app/fonts.ts"
      provides: "Next.js font loading — Cormorant Garamond + Inter with CSS variable exports"
      exports: ["inter", "cormorant"]
    - path: "public/logo/fort-logo-primary.svg"
      provides: "Primary logo (chosen option + chosen palette) — SVG format"
    - path: "public/logo/fort-logo-reversed.png"
      provides: "White reversed logo for dark nav/footer backgrounds"
    - path: "app/favicon.ico"
      provides: "Browser favicon — simplified mark at 32px"
  key_links:
    - from: "app/fonts.ts"
      to: "app/layout.tsx (Phase 2)"
      via: "import { inter, cormorant } then className={`${inter.variable} ${cormorant.variable}`} on <html>"
      pattern: "inter\\.variable.*cormorant\\.variable"
    - from: "tailwind.config.js fontFamily"
      to: "CSS classes font-serif, font-sans"
      via: "var(--font-cormorant) and var(--font-inter) CSS variables set by next/font"
      pattern: "var\\(--font-cormorant\\)"
    - from: "tailwind.config.js colors"
      to: "Tailwind utilities bg-fort-dark, text-fort-accent, bg-fort-bg"
      via: "theme.extend.colors flat token definition"
      pattern: "fort-dark.*fort-accent.*fort-bg"
---

<objective>
Produce all brand assets and configuration files for Fort Property Developments — ready for Phase 2's Next.js project setup.

Purpose: Phase 2 cannot begin until Dennis has approved a logo direction and color palette, and until tailwind.config.js + app/fonts.ts exist with the correct token definitions. This plan gates all downstream website work.

Output:
- .planning/brand/colors.md — color token documentation
- .planning/brand/canva-brief.md — Canva design instructions for Dennis
- tailwind.config.js — Fort color tokens + font CSS variable references
- app/fonts.ts — Cormorant Garamond + Inter font exports
- public/logo/ — final logo files (SVG + PNG primary, reversed PNG)
- app/ — favicon.ico, apple-icon.png, icon.svg
</objective>

<execution_context>
@C:/Users/denni/.claude/get-shit-done/workflows/execute-plan.md
@C:/Users/denni/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/STATE.md
@.planning/phases/01-brand-identity/01-RESEARCH.md
@.planning/phases/01-brand-identity/01-VALIDATION.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Scaffold brand directories and brand documentation files</name>
  <files>
    .planning/brand/colors.md
    .planning/brand/canva-brief.md
    public/logo/.gitkeep
  </files>
  <action>
    Create three items:

    1. `public/logo/` directory with a `.gitkeep` file so the directory is tracked by git before Dennis adds logo files.

    2. `.planning/brand/colors.md` — the brand color token reference document. Write it with this exact structure:

    ```markdown
    # Fort Property Developments — Brand Color Tokens

    _Status: PENDING Dennis palette decision_

    ---

    ## Color Palettes

    ### Palette A — Charcoal + Copper (CANDIDATE)

    | Token | Hex | Usage |
    |-------|-----|-------|
    | `fort-dark` | `#1C1C1E` | Nav background, footer, headings, body text on light bg |
    | `fort-accent` | `#B87333` | CTAs, highlights, active states, dividers |
    | `fort-bg` | `#F5F0EB` | Page background, card backgrounds |

    **Character:** Refined, warm authority. Copper against charcoal reads as a heritage craft company with modern discipline.

    ### Palette C — Forest + Stone (CANDIDATE)

    | Token | Hex | Usage |
    |-------|-----|-------|
    | `fort-dark` | `#1E3A2F` | Nav background, footer, headings, body text on light bg |
    | `fort-accent` (use `fort-stone` in config) | `#8B7355` | CTAs, highlights, active states |
    | `fort-bg` | `#FAFAF8` | Page background, card backgrounds |

    **Character:** Grounded, sustainable, BC-rooted. Forest green signals environmental responsibility; stone reads as solid and enduring.

    ---

    ## Typography

    | Role | Typeface | Weights | CSS Class |
    |------|----------|---------|-----------|
    | Headings (H1–H3) | Cormorant Garamond | 300, 400, 600, 700 | `font-serif` |
    | Body, nav, labels, buttons | Inter | 400, 500, 600 | `font-sans` (default) |

    **Do not use Cormorant Garamond below 24px** — it is a display face optimized for large sizes.

    ---

    ## Tailwind Token Names (stable regardless of palette choice)

    The token NAMES below are fixed. Only the HEX VALUES change depending on which palette Dennis selects.

    | Token Name | Tailwind Utilities Generated |
    |------------|------------------------------|
    | `fort-dark` | `bg-fort-dark`, `text-fort-dark`, `border-fort-dark` |
    | `fort-accent` | `bg-fort-accent`, `text-fort-accent`, `border-fort-accent` |
    | `fort-bg` | `bg-fort-bg`, `text-fort-bg`, `border-fort-bg` |

    **Critical:** Use only these three names throughout all components. Never use `fort-dark-a` or `fort-dark-c` variants.

    ---

    ## Decision Log

    - [ ] Palette selected: __ (A or C) — Date: __
    - [ ] Logo option selected: __ (Option 1 or Option 2) — Date: __
    - [ ] Final tailwind.config.js updated with chosen palette: __
    ```

    3. `.planning/brand/canva-brief.md` — Canva design brief for Dennis. Write it with this exact structure:

    ```markdown
    # Canva Design Brief — Fort Property Developments Logo

    _Prepared for Dennis. Complete these steps in Canva before Phase 2 begins._

    ---

    ## Before You Start: Check Canva Pro

    Open Canva and click Share → Download on any design. If you see "SVG" in the file type list and a "Transparent background" checkbox: you have Canva Pro.

    - **Canva Pro:** Export SVG + PNG with transparent background (preferred)
    - **Free plan:** Export PNG only (white background). Functional for development; note to upgrade before launch for transparent versions.

    ---

    ## Step 1: Create the Design Canvases

    Create two separate Canva designs with these dimensions:

    - **Primary logo (horizontal):** 800 x 300 px — for website header
    - **Favicon mark:** 500 x 500 px — for browser tab icon

    ---

    ## Step 2: Build Option 1 — Chevron Mark + Wordmark

    ### Primary logo canvas (800x300):

    1. Elements tab → Shapes → search "chevron" or "triangle" → place top-center
    2. Tint the shape to copper `#B87333` (Palette A) or stone `#8B7355` (Palette C)
    3. Text tab → Add heading → type **FORT** → font: Cormorant Garamond → weight: Bold (700) → size: ~120pt → color: `#1C1C1E` (A) or `#1E3A2F` (C)
    4. Add second text box → type **PROPERTY DEVELOPMENTS** → font: Inter → weight: Regular (400) → size: ~18pt → letter spacing: +200 → color: same as step 3
    5. Arrange: chevron above FORT, PROPERTY DEVELOPMENTS below FORT
    6. Select all → Group (Ctrl+G or Cmd+G)

    ### Test Palette A vs Palette C:
    - Duplicate the design
    - On the duplicate: change `#1C1C1E` to `#1E3A2F` and `#B87333` to `#8B7355`
    - You now have Option 1A (Charcoal+Copper) and Option 1C (Forest+Stone) side by side

    ---

    ## Step 3: Build Option 2 — Clean Serif Wordmark

    ### Primary logo canvas (800x300):

    1. Text tab → Add heading → type **FORT** → font: Cormorant Garamond → weight: Bold (700) → size: ~120pt → color: `#1C1C1E` (A) or `#1E3A2F` (C)
    2. Add second text box → type **PROPERTY DEVELOPMENTS** → font: Inter → weight: Light or Regular → size: ~18pt → letter spacing: +300 → color: `#B87333` (A) or `#8B7355` (C)
    3. Add a thin horizontal line between the two text blocks: Elements → Lines → set line to 1px → color matches PROPERTY DEVELOPMENTS text
    4. Group all elements

    ### Test Palette A vs Palette C: same duplicate process as Option 1.

    ---

    ## Step 4: Build the Favicon Version

    On the 500x500 canvas:

    - **If you choose Option 1:** Use only the chevron mark — no text. Color: copper or stone on transparent/white background.
    - **If you choose Option 2:** Use only the letter **F** in Cormorant Garamond Bold, large, centered. Color: fort-dark on transparent/white background.

    **Test at 32px:** Export as PNG and view in a browser tab. If you can tell what it is at thumbnail size, it passes.

    ---

    ## Step 5: Test Logo Sizes

    Before exporting final versions, zoom the Canva canvas to approximate these widths:

    | Size | Context | Pass Criteria |
    |------|---------|---------------|
    | 32px | Favicon (browser tab) | Mark or letter is recognizable, not a blur |
    | 150px | Mobile header | FORT wordmark is readable |
    | 300px | Desktop header | Full logo including PROPERTY DEVELOPMENTS is crisp |

    ---

    ## Step 6: Export the Final Files

    After you decide on one option + one palette, export these files:

    | File | Canvas | Export Settings | Destination |
    |------|--------|-----------------|-------------|
    | `fort-logo-primary.svg` | Primary logo | SVG, Transparent bg (Pro) | `public/logo/` |
    | `fort-logo-primary.png` | Primary logo | PNG, Transparent bg (Pro) or white (Free) | `public/logo/` |
    | `fort-logo-reversed.png` | Primary logo — change all colors to white `#FFFFFF` | PNG, Transparent bg | `public/logo/` |
    | `fort-favicon-source.png` | Favicon mark | PNG, max size (500x500) | Give to Claude for favicon generation |

    **For the reversed logo:** duplicate your primary logo design, select all text and shapes, change all colors to `#FFFFFF`. Export as PNG with transparent background.

    ---

    ## Step 7: Generate Favicons

    Give Claude the `fort-favicon-source.png` file (or upload to https://realfavicongenerator.net yourself):

    1. Upload to https://realfavicongenerator.net
    2. Click "Generate your Favicons and HTML code"
    3. Download the package
    4. From the package, keep: `favicon.ico`, `android-chrome-192x192.png`, `apple-touch-icon.png`
    5. Rename `apple-touch-icon.png` to keep as-is, rename `android-chrome-192x192.png` to `icon-192.png`
    6. Tell Claude which files you have — Claude will place them in the correct locations

    ---

    ## Decision Points

    After completing the above, you need to answer two questions before Phase 2 can begin:

    1. **Logo direction:** Option 1 (chevron mark + wordmark) or Option 2 (clean wordmark)?
    2. **Color palette:** A (Charcoal #1C1C1E + Copper #B87333) or C (Forest #1E3A2F + Stone #8B7355)?

    Share your decision with Claude along with the exported files.
    ```
  </action>
  <verify>
    <automated>ls /c/Users/denni/.notebooklm-mcp-cli/.planning/brand/colors.md /c/Users/denni/.notebooklm-mcp-cli/.planning/brand/canva-brief.md /c/Users/denni/.notebooklm-mcp-cli/public/logo/.gitkeep && echo "PASS: all scaffold files exist"</automated>
  </verify>
  <done>Three files exist: .planning/brand/colors.md, .planning/brand/canva-brief.md, public/logo/.gitkeep. Content in colors.md includes both palette hex tables. Content in canva-brief.md includes step-by-step Canva instructions for both logo options.</done>
</task>

<task type="checkpoint:human-action" gate="blocking">
  <name>Task 2: Dennis designs logos in Canva and exports brand assets</name>
  <files>
    public/logo/fort-logo-primary.png
    public/logo/fort-logo-reversed.png
    app/favicon.ico
    app/apple-icon.png
  </files>
  <action>
    Human action required. Dennis must complete Canva design work following .planning/brand/canva-brief.md and place the exported files in the correct directories. Claude cannot execute this task — it requires human design judgment and Canva access. Resume after Dennis confirms files are placed.
  </action>
  <what-built>
    Task 1 produced a complete Canva design brief at .planning/brand/canva-brief.md. That file contains step-by-step instructions to build both logo options (Option 1: chevron+wordmark, Option 2: clean wordmark), test them with both palettes (A: Charcoal+Copper, C: Forest+Stone), and export all required files.
  </what-built>
  <how-to-verify>
    1. Read .planning/brand/canva-brief.md for the full design brief
    2. Open Canva and complete Steps 1–7 in the brief
    3. Check Canva Pro status first (Step 1 in brief) — determines whether you can export SVG + transparent PNG
    4. Build both logo options, test both palettes (4 combinations total)
    5. Test logos at 32px, 150px, 300px (Step 5 in brief)
    6. Select final logo direction + palette
    7. Export the following files (Step 6 in brief):
       - fort-logo-primary.svg (or .png if no Canva Pro)
       - fort-logo-primary.png
       - fort-logo-reversed.png
       - fort-favicon-source.png (for favicon generation)
    8. Place logo files in: public/logo/
    9. Generate favicons via realfavicongenerator.net (Step 7 in brief) — OR hand the favicon source PNG to Claude and Claude will handle the generation
    10. When done, return here with:
        - Your logo direction choice (Option 1 or Option 2)
        - Your palette choice (A or C)
        - Confirmation that files are in public/logo/
        - The favicon source PNG (if you want Claude to generate favicons)
  </how-to-verify>
  <verify>
    <automated>ls /c/Users/denni/.notebooklm-mcp-cli/public/logo/ && echo "PASS: logo directory has files"</automated>
  </verify>
  <done>Logo files (at minimum fort-logo-primary.png and fort-logo-reversed.png) are present in public/logo/. Dennis has indicated logo direction choice and palette choice.</done>
  <resume-signal>
    Type your decisions and file status, e.g.:
    "Logo: Option 1, Palette: A, files in public/logo/, favicon PNG attached"
    or
    "Logo: Option 2, Palette: C, files in public/logo/, I ran realfavicongenerator.net and placed favicon.ico and apple-icon.png in app/"
  </resume-signal>
</task>

<task type="checkpoint:decision" gate="blocking">
  <name>Task 3: Lock logo direction and palette before writing config files</name>
  <files>
    tailwind.config.js
    .planning/brand/colors.md
  </files>
  <action>
    Decision gate required before Task 4 can execute. After Dennis provides his choice (logo direction + palette), note the selection and proceed to Task 4 with the correct palette hex values. No files are written in this task — it exists solely to capture Dennis's decision before committing it to code.
  </action>
  <decision>
    Confirm the final brand direction so tailwind.config.js is written with the correct hex values and colors.md is updated from PENDING to FINAL.
  </decision>
  <context>
    tailwind.config.js must encode exactly one palette — the token names (fort-dark, fort-accent, fort-bg) are fixed, but the hex values differ between the two palettes:

    Palette A: fort-dark=#1C1C1E, fort-accent=#B87333, fort-bg=#F5F0EB
    Palette C: fort-dark=#1E3A2F, fort-accent=#8B7355, fort-bg=#FAFAF8

    This decision cannot be changed cheaply later — all Phase 2/3 components will use these utility class names. Pick once, use consistently.
  </context>
  <options>
    <option id="option-1a">
      <name>Logo Option 1 + Palette A (Chevron mark + Charcoal/Copper)</name>
      <pros>Mark gives icon-level branding; copper has highest contrast and warmth</pros>
      <cons>More complex mark may be harder to read at smallest sizes</cons>
    </option>
    <option id="option-1c">
      <name>Logo Option 1 + Palette C (Chevron mark + Forest/Stone)</name>
      <pros>Mark provides icon versatility; forest green signals BC/environmental grounding</pros>
      <cons>Stone accent is lower contrast than copper — test CTA button legibility carefully</cons>
    </option>
    <option id="option-2a">
      <name>Logo Option 2 + Palette A (Clean wordmark + Charcoal/Copper)</name>
      <pros>Simplest and most versatile; copper accent on charcoal reads as premium real estate</pros>
      <cons>No standalone icon for favicon — "F" monogram must work at 32px</cons>
    </option>
    <option id="option-2c">
      <name>Logo Option 2 + Palette C (Clean wordmark + Forest/Stone)</name>
      <pros>Clean modern look; forest green differentiates from conventional real estate brands</pros>
      <cons>Stone (#8B7355) is a muted accent — verify it passes WCAG AA on fort-bg background</cons>
    </option>
  </options>
  <verify>
    <automated>echo "Decision checkpoint — no automated verification. Proceed when Dennis has stated his choice."</automated>
  </verify>
  <done>Dennis has confirmed one of: option-1a, option-1c, option-2a, option-2c. The correct palette hex values are known and Task 4 can proceed.</done>
  <resume-signal>Select: option-1a, option-1c, option-2a, or option-2c. If your Canva work led you to a different combination, describe it and Claude will derive the correct hex values.</resume-signal>
</task>

<task type="auto">
  <name>Task 4: Write tailwind.config.js and app/fonts.ts with finalized brand tokens</name>
  <files>
    tailwind.config.js
    app/fonts.ts
    .planning/brand/colors.md
  </files>
  <action>
    After Dennis's decision from Task 3, write three files:

    **1. tailwind.config.js**

    Write to the repo root. Use the confirmed palette values. The token names (fort-dark, fort-accent, fort-bg) are ALWAYS the same — only the hex values differ. Palette A values are the default; swap in Palette C values if Dennis chose C.

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          fontFamily: {
            sans:  ['var(--font-inter)'],
            serif: ['var(--font-cormorant)'],
          },
          colors: {
            // Palette A — Charcoal + Copper
            // (replace these three values with Palette C values if Dennis chose C)
            'fort-dark':   '#1C1C1E',   // Charcoal — nav, footer, headings, body text on light bg
            'fort-accent': '#B87333',   // Copper — CTAs, buttons, highlights, dividers
            'fort-bg':     '#F5F0EB',   // Warm white — page background, card backgrounds
            // Palette C (uncomment and replace the three values above if Dennis picks C):
            // 'fort-dark':   '#1E3A2F',  // Forest
            // 'fort-accent': '#8B7355',  // Stone
            // 'fort-bg':     '#FAFAF8',  // Near-white
          },
        },
      },
      plugins: [],
    }
    ```

    If Dennis chose Palette C, activate the C values and comment out the A values — do NOT leave both active simultaneously (Pitfall 6 in research).

    **2. app/fonts.ts**

    Create the `app/` directory if it does not exist. Write the file exactly as follows — no deviations. This is the official Next.js 14 pattern (Pattern 1 in research). Font functions must be called ONCE here, never inline in layout.tsx.

    ```typescript
    // app/fonts.ts
    // Font loading for Fort Property Developments
    // Source: https://nextjs.org/docs/14/app/building-your-application/optimizing/fonts
    // Both fonts loaded with CSS variable option for Tailwind integration.
    // Import { inter, cormorant } in layout.tsx and apply .variable classNames to <html>.
    import { Inter, Cormorant_Garamond } from 'next/font/google'

    export const inter = Inter({
      subsets: ['latin'],
      display: 'swap',
      variable: '--font-inter',
    })

    export const cormorant = Cormorant_Garamond({
      weight: ['300', '400', '600', '700'],
      style: ['normal', 'italic'],
      subsets: ['latin'],
      display: 'swap',
      variable: '--font-cormorant',
    })
    ```

    Note: `next/font/google` will not be importable until the Next.js project is initialized in Phase 2. This file is written now as a ready-to-use artifact — TypeScript type errors before project init are expected and do not indicate a problem.

    **3. Update .planning/brand/colors.md**

    Replace the `_Status: PENDING Dennis palette decision_` line with `_Status: FINAL — Palette [A or C] selected by Dennis on [date]_`.

    In the Decision Log section, mark the two checkboxes with the choices Dennis made:
    - `- [x] Palette selected: [A or C] — Date: [today]`
    - `- [x] Logo option selected: [1 or 2] — Date: [today]`
  </action>
  <verify>
    <automated>grep -q 'fort-dark' /c/Users/denni/.notebooklm-mcp-cli/tailwind.config.js && grep -q 'fort-accent' /c/Users/denni/.notebooklm-mcp-cli/tailwind.config.js && grep -q 'fort-bg' /c/Users/denni/.notebooklm-mcp-cli/tailwind.config.js && grep -q 'Cormorant_Garamond' /c/Users/denni/.notebooklm-mcp-cli/app/fonts.ts && echo "PASS: tailwind tokens and font exports confirmed"</automated>
  </verify>
  <done>
    tailwind.config.js exists at repo root with fort-dark, fort-accent, and fort-bg tokens set to the chosen palette hex values. The inactive palette is present but commented out. app/fonts.ts exports `inter` and `cormorant` with `--font-inter` and `--font-cormorant` CSS variable names. colors.md Decision Log shows both choices confirmed.
  </done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 5: Dennis verifies all brand assets and approves Phase 1 complete</name>
  <files>
    public/logo/fort-logo-primary.png
    app/favicon.ico
    tailwind.config.js
    app/fonts.ts
    .planning/brand/colors.md
  </files>
  <action>
    Visual verification checkpoint — Claude has produced all files; Dennis must confirm the visual quality of exported assets. No new files are written. Resume after Dennis's approval.
  </action>
  <what-built>
    Tasks 1–4 have produced: brand documentation (.planning/brand/), Canva design brief, logo files (public/logo/), favicon files (app/), tailwind.config.js with color tokens, and app/fonts.ts with font exports.
  </what-built>
  <how-to-verify>
    Run these file-existence checks to confirm everything is in place:

    ```bash
    ls .planning/brand/colors.md .planning/brand/canva-brief.md
    ls public/logo/
    ls app/favicon.ico app/apple-icon.png
    grep 'fort-dark' tailwind.config.js
    grep 'Cormorant_Garamond' app/fonts.ts
    ```

    Then visually confirm:
    1. Open public/logo/fort-logo-primary.svg (or .png) — does it look correct at full size?
    2. Open app/favicon.ico or the favicon PNG in a browser tab — is the mark legible at 32px?
    3. View the logo PNG at 150px width — is the FORT wordmark readable on mobile?
    4. Open .planning/brand/colors.md — does the Decision Log show both choices marked?
    5. Open tailwind.config.js — does it show the correct hex values for your chosen palette (only one palette active)?
  </how-to-verify>
  <verify>
    <automated>test -f /c/Users/denni/.notebooklm-mcp-cli/public/logo/fort-logo-primary.png && test -f /c/Users/denni/.notebooklm-mcp-cli/app/favicon.ico && grep -q 'fort-dark' /c/Users/denni/.notebooklm-mcp-cli/tailwind.config.js && grep -q 'Cormorant_Garamond' /c/Users/denni/.notebooklm-mcp-cli/app/fonts.ts && echo "PASS: all required files confirmed"</automated>
  </verify>
  <done>All file-existence checks pass. Dennis has visually confirmed logo quality at 32px, 150px, and 300px and typed "approved".</done>
  <resume-signal>
    Type "approved" if all checks pass and you are satisfied with the brand assets.
    Or describe any issues (e.g., "favicon is too detailed at 32px — need to simplify the mark").
  </resume-signal>
</task>

</tasks>

<verification>
Run all file-existence checks from the VALIDATION.md test map:

```bash
test -f public/logo/fort-logo-primary.svg && echo "PASS: primary SVG" || echo "SKIP: PNG-only (no Canva Pro)"
test -f public/logo/fort-logo-primary.png && echo "PASS: primary PNG" || echo "FAIL: primary PNG missing"
test -f public/logo/fort-logo-reversed.png && echo "PASS: reversed PNG" || echo "FAIL: reversed PNG missing"
test -f app/favicon.ico && echo "PASS: favicon.ico" || echo "FAIL: favicon.ico missing"
test -f app/apple-icon.png && echo "PASS: apple-icon" || echo "FAIL: apple-icon missing"
grep -q 'fort-dark' tailwind.config.js && echo "PASS: fort-dark token" || echo "FAIL"
grep -q 'fort-accent' tailwind.config.js && echo "PASS: fort-accent token" || echo "FAIL"
grep -q 'fort-bg' tailwind.config.js && echo "PASS: fort-bg token" || echo "FAIL"
grep -q 'Cormorant_Garamond' app/fonts.ts && echo "PASS: Cormorant font" || echo "FAIL"
grep -q 'inter' app/fonts.ts && echo "PASS: Inter font" || echo "FAIL"
grep -q 'FINAL' .planning/brand/colors.md && echo "PASS: palette decision documented" || echo "FAIL"
```

All file-existence checks must pass. Dennis visual approval must be obtained in Task 5 before running /gsd:verify-work.
</verification>

<success_criteria>
Phase 1 is complete when ALL of the following are true:
- [ ] public/logo/ contains at minimum: fort-logo-primary.png + fort-logo-reversed.png (SVG versions preferred if Canva Pro available)
- [ ] app/favicon.ico exists (browser tab icon at 32px)
- [ ] app/apple-icon.png exists (Apple touch icon)
- [ ] tailwind.config.js exists at repo root with fort-dark, fort-accent, fort-bg tokens set to one active palette
- [ ] app/fonts.ts exports `inter` (Inter, --font-inter) and `cormorant` (Cormorant_Garamond, --font-cormorant)
- [ ] .planning/brand/colors.md Decision Log shows both choices confirmed with date
- [ ] Dennis has visually approved the logo at 32px, 150px, and 300px
- [ ] Phase 2 can begin: brand system is locked, no pending decisions remain
</success_criteria>

<output>
After Dennis approves in Task 5, create `.planning/phases/01-brand-identity/01-SUMMARY.md` with:
- Logo option chosen and why
- Palette chosen and why
- Files produced (list with paths)
- Any deferred items (e.g., SVG export pending Canva Pro upgrade)
- Tailwind token values confirmed
- Notes for Phase 2 (font application instructions for layout.tsx)
</output>
