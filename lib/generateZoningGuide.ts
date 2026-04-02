import jsPDF from 'jspdf'

const GHL_BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/0Yp28PYUWW2jnkHDddK8'

export default async function generateZoningGuide() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' })
  const W = 215.9
  const H = 279.4
  const margin = 20
  const contentW = W - margin * 2

  // Brand colors
  const charcoal: [number, number, number] = [27, 42, 68]
  const gold: [number, number, number] = [196, 151, 58]
  const gray: [number, number, number] = [55, 65, 81]
  const lightBg: [number, number, number] = [248, 246, 241]
  const white: [number, number, number] = [255, 255, 255]

  let y = 0

  // ─── Helper functions ───
  function newPage() {
    doc.addPage()
    y = margin
  }

  function heading(text: string, size = 18) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(size)
    doc.setTextColor(...charcoal)
    doc.text(text, margin, y)
    y += size * 0.6
  }

  function subheading(text: string) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(...gold)
    doc.text(text.toUpperCase(), margin, y)
    y += 6
  }

  function body(text: string) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(...gray)
    const lines = doc.splitTextToSize(text, contentW)
    doc.text(lines, margin, y)
    y += lines.length * 4.5
  }

  function bullet(text: string) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(...gray)
    const lines = doc.splitTextToSize(text, contentW - 8)
    doc.setTextColor(...gold)
    doc.text('\u2022', margin + 2, y)
    doc.setTextColor(...gray)
    doc.text(lines, margin + 8, y)
    y += lines.length * 4.5 + 1
  }

  function spacer(n = 6) { y += n }

  function hr() {
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(0.3)
    doc.line(margin, y, W - margin, y)
    y += 6
  }

  function checkPage(needed = 40) {
    if (y + needed > H - 30) newPage()
  }

  function pageFooter(pageNum: number) {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(160, 160, 170)
    doc.text('Fort Property Developments  |  fortpropertydevelopments.com  |  Dennis@fortpropertydevelopment.com', W / 2, H - 12, { align: 'center' })
    doc.text(`${pageNum}`, W - margin, H - 12, { align: 'right' })
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE 1 — COVER
  // ═══════════════════════════════════════════════════════════════════════════
  doc.setFillColor(...charcoal)
  doc.rect(0, 0, W, H, 'F')

  // Gold accent line
  doc.setFillColor(...gold)
  doc.rect(margin, 60, 40, 3, 'F')

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...gold)
  doc.text('FORT PROPERTY DEVELOPMENTS', margin, 75)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(36)
  doc.setTextColor(...white)
  doc.text('BC Multiplex', margin, 100)
  doc.text('Zoning Guide', margin, 115)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(14)
  doc.setTextColor(180, 180, 190)
  doc.text('What Bill 44 means for your lot, how to check', margin, 135)
  doc.text('eligibility, and how to run a quick feasibility study.', margin, 145)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(140, 140, 150)
  doc.text('Written by Dennis Donovan  |  Fort Property Developments  |  2025', margin, 170)

  doc.setFillColor(...gold)
  doc.rect(margin, H - 40, contentW, 0.5, 'F')

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(120, 120, 130)
  doc.text('For educational purposes only. This guide does not constitute legal, financial, or development advice.', margin, H - 30)
  doc.text('Always consult qualified professionals before making investment or development decisions.', margin, H - 25)

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE 2 — TABLE OF CONTENTS
  // ═══════════════════════════════════════════════════════════════════════════
  newPage()

  heading('Table of Contents', 22)
  spacer(8)

  const chapters = [
    { num: '01', title: 'What Bill 44 Actually Changes', page: '3' },
    { num: '02', title: 'Lot Eligibility Criteria', page: '4' },
    { num: '03', title: 'The Quick Feasibility Formula', page: '5' },
    { num: '04', title: 'Burnaby & Surrey Deep Dive', page: '6' },
    { num: '05', title: 'Common Mistakes to Avoid', page: '7' },
  ]

  chapters.forEach(ch => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.setTextColor(...gold)
    doc.text(ch.num, margin, y)
    doc.setTextColor(...charcoal)
    doc.text(ch.title, margin + 14, y)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(...gray)
    doc.text(ch.page, W - margin, y, { align: 'right' })
    y += 10
  })

  spacer(12)
  hr()
  spacer(4)

  doc.setFont('helvetica', 'italic')
  doc.setFontSize(10)
  doc.setTextColor(...gray)
  const introLines = doc.splitTextToSize(
    'This guide was written by a working BC multiplex developer — not a consultant, not a lawyer. Everything in here comes from real projects in Metro Vancouver and the Fraser Valley. If you have a lot and you want to know whether a multiplex makes sense, this is your starting point.',
    contentW
  )
  doc.text(introLines, margin, y)
  y += introLines.length * 4.5

  pageFooter(2)

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE 3 — CHAPTER 1: What Bill 44 Actually Changes
  // ═══════════════════════════════════════════════════════════════════════════
  newPage()

  subheading('Chapter 01')
  heading('What Bill 44 Actually Changes', 20)
  spacer(4)

  body('In November 2023, the BC government passed Bill 44 — the Housing Statutes Amendment Act. It is the single biggest change to residential zoning in BC history. Here is what it actually does, in plain English.')
  spacer(4)

  subheading('The Core Change')
  body('Bill 44 requires every municipality in BC with a population over 5,000 to allow small-scale multi-unit housing (multiplexes) on lots that were previously zoned for single-family homes only. This is not optional — municipalities must comply.')
  spacer(3)

  subheading('What Is Now Allowed')
  bullet('3-4 units on most single-family lots across BC')
  bullet('Up to 6 units on lots within 400 metres of a frequent transit corridor')
  bullet('Secondary suites in addition to the primary units in many cases')
  bullet('No rezoning application required — this is as-of-right zoning')
  spacer(3)

  subheading('What Did NOT Change')
  bullet('Building code requirements (BC Building Code still applies in full)')
  bullet('Development permit processes (you still need municipal approval)')
  bullet('Setback and height limits (these are set by each municipality)')
  bullet('Servicing requirements (water, sewer, storm — still apply)')
  bullet('DCCs and development charges (still payable)')
  spacer(3)

  subheading('Why This Matters for Lot Owners')
  body('If you own a single-family lot in Metro Vancouver, the Fraser Valley, or any BC municipality over 5,000 people, your land is now worth more than it was before Bill 44. The development potential of your lot increased overnight — even if you have no intention of building. Understanding that potential is the first step to making an informed decision about your property.')

  pageFooter(3)

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE 4 — CHAPTER 2: Lot Eligibility Criteria
  // ═══════════════════════════════════════════════════════════════════════════
  newPage()

  subheading('Chapter 02')
  heading('Lot Eligibility Criteria', 20)
  spacer(4)

  body('Not every single-family lot is equally suited for a multiplex. Here are the 6 factors that determine whether your lot is a strong candidate — or whether the numbers will be a stretch.')
  spacer(4)

  subheading('1. Lot Size')
  body('Most municipalities require a minimum lot size of 5,500-6,000 sq ft for a 4-unit multiplex. Larger lots (7,000+ sq ft) give you more design flexibility and can support larger units that sell at a premium. Corner lots are particularly valuable because two street frontages allow better building placement.')
  spacer(3)

  subheading('2. Floor Space Ratio (FSR)')
  body('FSR determines how much total floor area you can build relative to your lot size. A typical 6,000 sq ft lot with 0.75 FSR allows 4,500 sq ft of gross floor area. Some municipalities allow FSR bonuses for transit proximity or energy efficiency. Check your municipal zoning bylaw for exact numbers.')
  spacer(3)

  subheading('3. Transit Proximity')
  body('If your lot is within 400 metres of a frequent transit corridor (bus routes running every 15 minutes or better), you may qualify for 6 units instead of 4. This single factor can increase your development potential by 50%. Use TransLink\'s route maps to check.')
  spacer(3)

  subheading('4. Setbacks & Height')
  body('Front, side, and rear setbacks eat into your buildable area. Municipal bylaws typically require 6m front, 1.5m side, and 6m rear setbacks. Height limits of 11-12m (roughly 3 storeys) are standard. Narrow lots under 40 ft wide can be challenging.')
  spacer(3)

  subheading('5. Topography & Soil')
  body('Sloped lots add significant cost — retaining walls, drainage, and foundation engineering. Lots with known contamination (former gas stations, industrial use) require remediation. Both factors hit your budget hard.')
  spacer(3)

  subheading('6. Zoning Overlays')
  body('Heritage conservation areas, flood plains, environmentally sensitive areas, and tree protection bylaws can all restrict what you can build. Check your municipal zoning map for overlays before running any numbers.')

  pageFooter(4)

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE 5 — CHAPTER 3: The Quick Feasibility Formula
  // ═══════════════════════════════════════════════════════════════════════════
  newPage()

  subheading('Chapter 03')
  heading('The Quick Feasibility Formula', 20)
  spacer(4)

  body('Before spending money on architects, engineers, or consultants, you can screen a lot in under 10 minutes using this back-of-napkin formula. This is what Fort uses to pre-screen every lot before committing resources.')
  spacer(4)

  subheading('The Formula')
  spacer(2)

  // Formula box
  doc.setFillColor(...lightBg)
  doc.roundedRect(margin, y, contentW, 28, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  doc.setTextColor(...charcoal)
  doc.text('Revenue  -  Total Costs  =  Profit', W / 2, y + 10, { align: 'center' })
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...gray)
  doc.text('Target: 15%+ margin on revenue  |  15%+ cash-on-cash return on equity', W / 2, y + 20, { align: 'center' })
  y += 34

  subheading('Step 1: Estimate Revenue')
  body('Count your units and multiply by local comparable sale prices. Example: 4 units x 1,200 sq ft x $850/sq ft = $4,080,000 total revenue. Use recent sales of new construction multiplex units in your area — not resale condos or single-family homes.')
  spacer(3)

  subheading('Step 2: Estimate Total Costs')
  bullet('Land: Current market value or asking price of the lot')
  bullet('Hard costs: $280-320/sq ft for wood-frame construction in Metro Vancouver (2025)')
  bullet('Soft costs: 18-25% of hard costs (permits, design, engineering, legal, marketing)')
  bullet('Contingency: 8-12% of hard costs (budget for the unexpected)')
  bullet('Financing: 6.5-8.5% interest on a construction loan, 18-24 month term')
  spacer(3)

  subheading('Step 3: Check the Margin')
  body('Subtract total costs from revenue. If the margin is 15% or higher, the deal is worth investigating further. Between 8-15% is marginal — it could work but leaves little room for error. Below 8%, the deal does not pencil and you should move on or negotiate a lower land price.')
  spacer(3)

  subheading('Example: 6,000 sq ft Lot in Burnaby')

  // Example table
  doc.setFillColor(...charcoal)
  doc.roundedRect(margin, y, contentW, 50, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setTextColor(...gold)
  doc.text('QUICK FEASIBILITY — 4-UNIT BURNABY EXAMPLE', margin + 6, y + 8)

  const items = [
    ['Revenue (4 x 1,200sf x $850/sf)', '$4,080,000'],
    ['Land', '-$1,300,000'],
    ['Hard Costs (4,800sf x $300/sf)', '-$1,440,000'],
    ['Soft Costs (22%)', '-$316,800'],
    ['Contingency (10%)', '-$144,000'],
    ['Financing (18mo)', '-$140,000'],
    ['Estimated Profit', '$739,200'],
    ['Margin', '18.1%'],
  ]

  let ty = y + 14
  items.forEach(([label, val], i) => {
    const isBold = i >= 6
    doc.setFont('helvetica', isBold ? 'bold' : 'normal')
    doc.setFontSize(9)
    doc.setTextColor(isBold ? 255 : 200, isBold ? 255 : 200, isBold ? 255 : 210)
    doc.text(label, margin + 6, ty)
    doc.text(val, W - margin - 6, ty, { align: 'right' })
    ty += 4.5
  })
  y += 56

  body('This is a pre-screen only. Actual numbers will vary based on site-specific conditions, municipal requirements, and market timing.')

  pageFooter(5)

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE 6 — CHAPTER 4: Burnaby & Surrey Deep Dive
  // ═══════════════════════════════════════════════════════════════════════════
  newPage()

  subheading('Chapter 04')
  heading('Burnaby & Surrey Deep Dive', 20)
  spacer(4)

  body('Every municipality in BC is implementing Bill 44 slightly differently. Here is how the two largest Metro Vancouver markets are handling it.')
  spacer(4)

  subheading('Burnaby')
  bullet('Permit volume: Burnaby has processed more multiplex applications than any other Metro Vancouver municipality since Bill 44')
  bullet('FSR: 0.75 base, with bonuses available for energy efficiency and accessibility')
  bullet('Height: 11m maximum (3 storeys) on most RS lots')
  bullet('Parking: 1 space per unit minimum, no visitor parking required')
  bullet('Timeline: 8-14 months from application to building permit')
  bullet('Hot spots: Kingsway corridor, Hastings corridor, Metrotown fringe (6-unit eligible)')
  bullet('New construction sale prices: $800-950/sq ft for ground-oriented multiplex units')
  spacer(4)

  subheading('Surrey')
  bullet('Permit volume: Second highest in Metro Vancouver, concentrated in Cloverdale and Fleetwood')
  bullet('FSR: 0.6-0.75 depending on lot size and zone')
  bullet('Height: 10.5-12m depending on zone designation')
  bullet('Parking: 1.25 spaces per unit in most zones')
  bullet('Timeline: 6-12 months (generally faster than Burnaby)')
  bullet('Hot spots: Cloverdale, Fleetwood, Newton (near SkyTrain stations for 6-unit)')
  bullet('New construction sale prices: $700-850/sq ft — lower entry point, strong demand')
  spacer(4)

  subheading('Other Markets to Watch')
  bullet('Coquitlam & Port Coquitlam: Strong demand, moderate land prices, good transit access')
  bullet('North Vancouver: Premium pricing ($950+/sq ft) but constrained supply and complex topography')
  bullet('Langley (City & Township): Emerging market with competitive land prices and growing buyer interest')
  bullet('New Westminster: Small lots are challenging but transit-adjacent sites are viable')

  pageFooter(6)

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE 7 — CHAPTER 5: Common Mistakes to Avoid
  // ═══════════════════════════════════════════════════════════════════════════
  newPage()

  subheading('Chapter 05')
  heading('Common Mistakes to Avoid', 20)
  spacer(4)

  body('These are the 5 errors that trip up first-time multiplex owners and developers. Every one of them is avoidable if you know what to look for.')
  spacer(4)

  subheading('Mistake 1: Using Assessed Value as Land Value')
  body('BC Assessment values are backward-looking and based on single-family use. They do not reflect the development potential created by Bill 44. A lot assessed at $1.1M may have a residual land value of $1.4M+ as a multiplex site. Use comparable development site sales or the residual land value method — never assessed value.')
  spacer(3)

  subheading('Mistake 2: Underestimating Soft Costs')
  body('First-time developers routinely budget 10-12% for soft costs when the real number is 18-25%. Permits, DCCs, design, engineering, legal, marketing, GST on construction, and property tax during development all add up. Budget 22% of hard costs as your baseline.')
  spacer(3)

  subheading('Mistake 3: Skipping the Geotechnical Report')
  body('A $5,000 geotech report can save you $100,000+. If the lot has fill, high water table, contamination, or requires deep foundations, you need to know before you buy — not after. This is not optional.')
  spacer(3)

  subheading('Mistake 4: Over-Finishing the Units')
  body('The multiplex buyer wants quality, not luxury. Quartz counters, engineered hardwood, and quality appliances sell units. Custom millwork, imported tile, and smart home systems eat margin without increasing sale price proportionally. Build to the market — mid-spec finishes that photograph well and hold up over time.')
  spacer(3)

  subheading('Mistake 5: Not Understanding Your Buyer')
  body('Your buyer is a millennial family who has outgrown a condo but cannot afford a detached home. They want 3 bedrooms, open-concept kitchen, in-unit laundry, outdoor space, and a private entrance. They are comparing your unit to a 25-year-old condo with $550/month strata fees. Design for them.')

  pageFooter(7)

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE 8 — NEXT STEPS / CTA
  // ═══════════════════════════════════════════════════════════════════════════
  newPage()

  heading('What To Do Next', 22)
  spacer(6)

  body('Now that you understand the basics of BC\'s new multiplex zoning rules, here are three concrete next steps you can take today:')
  spacer(6)

  // Step 1
  doc.setFillColor(...lightBg)
  doc.roundedRect(margin, y, contentW, 22, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...gold)
  doc.text('01', margin + 6, y + 9)
  doc.setTextColor(...charcoal)
  doc.text('Run Your Lot Through the Calculator', margin + 20, y + 9)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...gray)
  doc.text('Use Fort\'s free AskMultiPlex tool to get a professional feasibility summary in minutes.', margin + 20, y + 16)
  doc.setTextColor(...gold)
  doc.text('fortpropertydevelopments.com/askmultiplex', margin + 20, y + 20)
  y += 28

  // Step 2
  doc.setFillColor(...lightBg)
  doc.roundedRect(margin, y, contentW, 22, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...gold)
  doc.text('02', margin + 6, y + 9)
  doc.setTextColor(...charcoal)
  doc.text('Book a Free 15-Minute Call with Dennis', margin + 20, y + 9)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...gray)
  doc.text('Get a personal walkthrough of your lot\'s potential. No obligation, no pressure.', margin + 20, y + 16)
  doc.setTextColor(...gold)
  doc.text('Scan the QR code below or visit our booking page', margin + 20, y + 20)
  y += 28

  // Step 3
  doc.setFillColor(...lightBg)
  doc.roundedRect(margin, y, contentW, 22, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...gold)
  doc.text('03', margin + 6, y + 9)
  doc.setTextColor(...charcoal)
  doc.text('Register Interest in Our Projects', margin + 20, y + 9)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...gray)
  doc.text('Get early access to floor plans and pricing for Fort\'s upcoming developments.', margin + 20, y + 16)
  doc.setTextColor(...gold)
  doc.text('fortpropertydevelopments.com/projects', margin + 20, y + 20)
  y += 34

  // QR Code
  try {
    const QRCode = (await import('qrcode')).default
    const qrDataUrl = await QRCode.toDataURL(GHL_BOOKING_URL, {
      width: 300,
      margin: 1,
      color: { dark: '#1B2A44', light: '#FFFFFF' },
    })
    doc.addImage(qrDataUrl, 'PNG', W / 2 - 20, y, 40, 40)
    y += 44
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...charcoal)
    doc.text('Scan to Book a Free Call with Dennis', W / 2, y, { align: 'center' })
    y += 5
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...gray)
    doc.text('15 minutes  |  No obligation  |  Real answers about your lot', W / 2, y, { align: 'center' })
  } catch { /* QR failed — skip */ }

  // Footer
  doc.setFillColor(...charcoal)
  doc.rect(0, H - 24, W, 24, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.setTextColor(...white)
  doc.text('Fort Property Developments', margin, H - 14)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(180, 180, 190)
  doc.text('Dennis Donovan  |  Dennis@fortpropertydevelopment.com  |  604-290-6046', margin, H - 8)
  doc.setTextColor(...gold)
  doc.text('Building the Next Generation of Homes', W - margin, H - 11, { align: 'right' })

  // Save
  doc.save('Fort-BC-Multiplex-Zoning-Guide.pdf')
}
