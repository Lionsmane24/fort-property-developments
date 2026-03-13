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
