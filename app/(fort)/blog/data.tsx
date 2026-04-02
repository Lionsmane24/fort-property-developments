import React from 'react'

export type BlogPost = {
  slug: string
  date: string
  category: string
  title: string
  excerpt: string
  readTime: string
  image: string
  content: React.ReactNode
}

export const posts: BlogPost[] = [
  {
    slug: 'bc-bill-44-what-it-means-for-your-lot',
    date: 'January 2025',
    category: 'Zoning & Policy',
    title: 'BC Bill 44: What It Means for Your Single-Family Lot',
    excerpt: "BC's new small-scale multi-unit housing legislation now allows 3-6 unit multiplexes on most single-family lots province-wide. Here's what that means for property owners in Metro Vancouver and the Fraser Valley.",
    readTime: '5 min read',
    image: '/images/blog/bill-44.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>In November 2023, the BC government passed Bill 44, the <em>Housing Statutes (Residential Development) Amendment Act</em>. It&apos;s the most significant upzoning in BC&apos;s history &mdash; and if you own a single-family lot in Metro Vancouver, it likely affects what you can build.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What Changed</h2>
        <p>Before Bill 44, most RS-zoned lots in Metro Vancouver allowed only one or two units. A homeowner wanting to build a triplex needed a rezoning &mdash; a multi-year process costing $50,000&ndash;$100,000+ in consultant and city fees, with no guarantee of approval.</p>
        <p>Bill 44 bypasses that. It requires municipalities to allow small-scale multi-unit housing (SSMUH) as a matter of right on most residential lots. Depending on lot size and proximity to transit, that means:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong>3 units</strong> on most lots under 280 m&sup2; (3,000 sq ft)</li>
          <li><strong>4 units</strong> on most lots 280 m&sup2;+</li>
          <li><strong>6 units</strong> on lots near frequent transit corridors</li>
        </ul>
        <p>The key phrase is <em>as of right</em>: no rezoning required. You apply for a building permit the same way you would for a renovation.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What &ldquo;As of Right&rdquo; Actually Means</h2>
        <p>&ldquo;As of right&rdquo; means the use is permitted &mdash; but it doesn&apos;t mean the process is simple. You still need to meet:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Floor space ratio (FSR) limits set by each municipality</li>
          <li>Setback requirements (front, rear, side yards)</li>
          <li>Height limits</li>
          <li>Parking minimums (though many municipalities have relaxed these near transit)</li>
          <li>Design guidelines (some municipalities require character-compatible massing)</li>
        </ul>
        <p>The rezoning hurdle is gone. The development permit and building permit process remains. In Burnaby, for example, you can expect 6&ndash;12 months from permit application to issuance on a straightforward multiplex project.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Which Municipalities Are Affected</h2>
        <p>All municipalities with populations over 5,000 are required to comply. In Metro Vancouver, this includes:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Burnaby, Surrey, Richmond, Coquitlam, North Vancouver (City and District), New Westminster</li>
          <li>Langley City and Township, Abbotsford, Chilliwack</li>
          <li>The City of Vancouver &mdash; which has its own parallel zoning update under the Broadway Plan and citywide rezoning</li>
        </ul>
        <p>Each municipality sets its own FSR, height, and design guidelines within the provincial minimums. Burnaby and Surrey have been relatively permissive. The City of Vancouver has a more complex overlay system.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What It Means for Property Owners</h2>
        <p>If you own a single-family lot in Metro Vancouver or the Fraser Valley, you likely now have the right to build a 4&ndash;6 unit multiplex. The question isn&apos;t permission &mdash; it&apos;s feasibility.</p>
        <p>The math has to work: land value + construction cost must leave room for a margin at current sale prices. On many lots, particularly in Burnaby and Surrey where land is relatively affordable and new construction sells at $800&ndash;$950/sq ft, the numbers pencil. On lots in West Vancouver or east Vancouver where land is very expensive, the spread is tighter.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What to Do Next</h2>
        <p>Run a rough feasibility check before spending money on consultants. The three numbers you need: current land value, estimated build cost (typically $250&ndash;$325/sq ft for wood-frame multiplex in Metro Vancouver), and comparable sales for new construction in your area.</p>
        <p>If the rough margin looks promising, the next step is a pre-application meeting with the municipality and an architect&apos;s massing study &mdash; usually $3,000&ndash;$5,000 to confirm what the site can actually support under current zoning parameters.</p>
      </div>
    ),
  },
  {
    slug: 'multiplex-roi-what-returns-can-you-expect',
    date: 'February 2025',
    category: 'Investment',
    title: 'Multiplex ROI in Metro Vancouver: What Returns Can You Expect?',
    excerpt: 'We break down a real-world pro forma for a 6-unit infill project in Burnaby — land cost, hard costs, soft costs, and the returns that make the deal pencil.',
    readTime: '7 min read',
    image: '/images/blog/multiplex-roi.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>Everyone asks about returns on a multiplex. The honest answer: it depends on four variables — land cost, hard costs, soft costs, and end value. In the right Burnaby or Surrey location, a 6-unit infill project can generate an 18&ndash;24% gross margin. Here&apos;s how the math actually works.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">A Real-World Pro Forma</h2>
        <p>The example below is based on a 4-unit project on a 6,000 sq ft lot in Burnaby — representative of the infill opportunities Fort targets. Numbers are approximate and project-specific.</p>
        <div className="bg-fort-charcoal rounded-xl p-6 text-white font-sans">
          <p className="text-fort-gold text-xs font-semibold uppercase tracking-widest mb-4">Sample Pro Forma — Burnaby 4-Unit</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Land Cost</span><span className="font-semibold">$1,200,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Hard Costs (construction)</span><span className="font-semibold">$1,050,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Soft Costs (permits, design, fees)</span><span className="font-semibold">$210,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Financing (construction loan interest)</span><span className="font-semibold">$130,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2 font-semibold"><span>Total Project Cost</span><span>$2,590,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Sale Revenue (4 units @ ~$820K avg)</span><span className="font-semibold">$3,280,000</span></div>
            <div className="flex justify-between pt-1 font-bold text-fort-gold"><span>Gross Margin</span><span>~$690,000 (21%)</span></div>
          </div>
        </div>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Breaking Down the Costs</h2>
        <p><strong className="text-fort-charcoal">Land cost</strong> is your biggest variable. In Burnaby, a 6,000 sq ft RS-zoned lot currently trades for $1.0M&ndash;$1.4M depending on location and lot dimensions. The land cost per buildable unit is what matters — divide land cost by the number of units you can build. On a 4-unit project, $1.2M land = $300,000/unit. That&apos;s workable.</p>
        <p><strong className="text-fort-charcoal">Hard costs</strong> in Metro Vancouver currently run $250&ndash;$325/sq ft for wood-frame 3-storey construction. The range depends on spec level, site conditions, and contractor market at the time of tender. For a 4,800 sq ft project (4 units at 1,200 sq ft avg), budget $1.0M&ndash;$1.2M for construction.</p>
        <p><strong className="text-fort-charcoal">Soft costs</strong> typically run 15&ndash;22% of hard costs and include: architect and engineering fees, development cost charges (DCCs), building permit fees, geotechnical report, surveying, legal, and marketing. DCCs alone in Burnaby can be $25,000&ndash;$40,000 per unit — budget for them early.</p>
        <p><strong className="text-fort-charcoal">Financing costs</strong> depend on your capital structure. With a 65% LTC construction loan at current rates (6.5&ndash;8% depending on lender), a 22-month build carries roughly $100,000&ndash;$150,000 in interest on a $2.5M project.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Thresholds Fort Uses</h2>
        <p>Before committing to any site, Fort runs a quick screen using three benchmarks:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong>Go</strong>: Gross margin above 18% with conservative end-value assumptions</li>
          <li><strong>Marginal</strong>: 12&ndash;17% — proceed only with exceptional site characteristics or strong pre-sale interest</li>
          <li><strong>No-Go</strong>: Below 12% or requires aggressive appreciation assumptions to pencil</li>
        </ul>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What Moves the Needle</h2>
        <p>The single biggest lever is land cost relative to unit count. A lot that supports 6 units instead of 4 — all else equal — drops your land cost per unit by 33%. That&apos;s why transit corridors where you get 6 units as of right are so valuable.</p>
        <p>The second lever is spec level. Mid-spec finishes sell just as fast as high-spec in the infill market because buyers are buying location and newness. Value-engineering the finishes (not the structure) can add 3&ndash;5 points of margin without affecting saleability.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Bottom Line</h2>
        <p>Multiplex infill in Metro Vancouver works — but the math is tighter than it was in 2021. Higher land values, elevated construction costs, and higher financing rates have compressed margins. The deals that pencil are on well-selected lots where the unit count is maximized and the build is disciplined.</p>
      </div>
    ),
  },
  {
    slug: 'is-your-lot-eligible-for-a-multiplex',
    date: 'March 2025',
    category: 'Getting Started',
    title: "Is Your Lot Eligible for a Multiplex? A BC Owner's Checklist",
    excerpt: 'Not every single-family lot is a good multiplex candidate. Lot size, topography, boulevard trees, FSR limits, and zoning overlays all affect feasibility.',
    readTime: '6 min read',
    image: '/images/blog/lot-eligibility.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>Bill 44 gave most BC single-family lots the right to build a multiplex. But &ldquo;eligible&rdquo; and &ldquo;feasible&rdquo; are different things. Before spending money on an architect or consultant, walk through this checklist to see if your lot is a realistic multiplex candidate.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The 6-Point Eligibility Checklist</h2>
        <div className="space-y-5">
          <div className="flex gap-4 p-5 bg-fort-bg rounded-xl border border-fort-charcoal/10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fort-gold/15 flex items-center justify-center"><span className="font-sans text-fort-gold font-bold text-xs">01</span></div>
            <div><h3 className="font-serif text-lg text-fort-charcoal">Lot Size</h3><p className="font-sans text-fort-gray text-sm mt-1 leading-relaxed">Most municipalities require a minimum lot size of 280&ndash;330 m&sup2; (3,000&ndash;3,500 sq ft) for 4 units. Smaller lots may only support 3 units. For 6 units, most municipalities require proximity to a frequent transit corridor AND a lot size of 450+ m&sup2;.</p></div>
          </div>
          <div className="flex gap-4 p-5 bg-fort-bg rounded-xl border border-fort-charcoal/10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fort-gold/15 flex items-center justify-center"><span className="font-sans text-fort-gold font-bold text-xs">02</span></div>
            <div><h3 className="font-serif text-lg text-fort-charcoal">Current Zoning</h3><p className="font-sans text-fort-gray text-sm mt-1 leading-relaxed">Most RS-1, RS-5, and RS-6 zones in Burnaby and Surrey are eligible. Some heritage zones, ALR land, and floodplain areas are exempt. Check your municipality&apos;s zoning map — most have an interactive online tool.</p></div>
          </div>
          <div className="flex gap-4 p-5 bg-fort-bg rounded-xl border border-fort-charcoal/10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fort-gold/15 flex items-center justify-center"><span className="font-sans text-fort-gold font-bold text-xs">03</span></div>
            <div><h3 className="font-serif text-lg text-fort-charcoal">FSR and Height</h3><p className="font-sans text-fort-gray text-sm mt-1 leading-relaxed">Floor space ratio (FSR) determines how much total floor area you can build relative to lot size. A 0.6 FSR on a 6,000 sq ft lot = 3,600 sq ft of buildable area — split across 4 units, that&apos;s 900 sq ft each. Height limits of 9.5&ndash;11 m are standard for SSMUH.</p></div>
          </div>
          <div className="flex gap-4 p-5 bg-fort-bg rounded-xl border border-fort-charcoal/10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fort-gold/15 flex items-center justify-center"><span className="font-sans text-fort-gold font-bold text-xs">04</span></div>
            <div><h3 className="font-serif text-lg text-fort-charcoal">Topography and Site Conditions</h3><p className="font-sans text-fort-gray text-sm mt-1 leading-relaxed">Steep slopes significantly increase construction costs. A slope of more than 15% typically requires engineered retaining walls. Rocky soil conditions (common on the North Shore) can double foundation costs.</p></div>
          </div>
          <div className="flex gap-4 p-5 bg-fort-bg rounded-xl border border-fort-charcoal/10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fort-gold/15 flex items-center justify-center"><span className="font-sans text-fort-gold font-bold text-xs">05</span></div>
            <div><h3 className="font-serif text-lg text-fort-charcoal">Boulevard Trees and Protected Features</h3><p className="font-sans text-fort-gray text-sm mt-1 leading-relaxed">Boulevard trees along the street frontage are protected under most BC municipal bylaws. A mature boulevard tree can affect your setbacks and driveway placement. Similarly, protected slopes and riparian areas within 30 m of a watercourse can restrict building envelope.</p></div>
          </div>
          <div className="flex gap-4 p-5 bg-fort-bg rounded-xl border border-fort-charcoal/10">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fort-gold/15 flex items-center justify-center"><span className="font-sans text-fort-gold font-bold text-xs">06</span></div>
            <div><h3 className="font-serif text-lg text-fort-charcoal">Services and Infrastructure</h3><p className="font-sans text-fort-gray text-sm mt-1 leading-relaxed">Multiplexes typically require upgraded water and sewer service connections. In older neighbourhoods, the lateral from the main to your property may be undersized for 4&ndash;6 units. Service upgrades can cost $15,000&ndash;$50,000+ depending on condition and distance.</p></div>
          </div>
        </div>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Quick Pre-Screen: The 5-Minute Test</h2>
        <p>Before doing anything else, answer these three questions:</p>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>Is your lot at least 280 m&sup2; (3,000 sq ft)?</li>
          <li>Is your zoning RS, R1, or equivalent residential single-family?</li>
          <li>Is the lot reasonably flat (less than 15% slope)?</li>
        </ol>
        <p>If you answered yes to all three, your lot has basic multiplex potential. The next step is running the numbers — use the Fort Feasibility Calculator to get a rough pro forma in under two minutes.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">When to Call a Professional</h2>
        <p>If the quick screen looks promising, the first professional you need is an <strong>architect or building designer</strong>, not a lawyer or real estate agent. A $3,000&ndash;$5,000 massing study will tell you exactly what can be built on your site within the zoning envelope. That&apos;s the document you need before making any commitments.</p>
        <p>Fort offers free 20-minute lot assessments for BC property owners considering a multiplex. Bring your address and we&apos;ll tell you what we see in the numbers before you spend anything on consultants.</p>
      </div>
    ),
  },
  {
    slug: 'missing-middle-housing-why-bc-needs-it-now',
    date: 'April 2025',
    category: 'Zoning & Policy',
    title: 'Missing Middle Housing: Why BC Needs It Now',
    excerpt: 'Between single-family homes and high-rise towers, there is a housing gap that has starved Metro Vancouver of attainable homes for decades. Multiplexes fill that gap — and the numbers prove it.',
    readTime: '6 min read',
    image: '/images/blog/missing-middle.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>Drive through any Metro Vancouver neighbourhood built before 2000 and you will see the same pattern: single-family houses on one side of the arterial, concrete towers on the other, and almost nothing in between. That gap — the &ldquo;missing middle&rdquo; — is the single biggest structural problem in BC&apos;s housing market.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What Is Missing Middle Housing?</h2>
        <p>Missing middle refers to housing forms between a detached house and a high-rise apartment: duplexes, triplexes, fourplexes, sixplexes, townhouses, and courtyard apartments. These building types were common in North American cities before World War II. Post-war zoning effectively banned them in most residential neighbourhoods, reserving those areas exclusively for single-family homes.</p>
        <p>The result: in Burnaby, roughly 55% of residential land is zoned exclusively for single-family use. In Surrey, it is closer to 60%. That land houses 15&ndash;20% of the population while consuming over half the serviced residential area. The math does not work when your region needs to absorb 35,000+ new residents per year.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Why Towers Alone Cannot Solve the Crisis</h2>
        <p>High-rise development adds density, but it comes with limitations. A 30-storey tower in Metrotown takes 4&ndash;6 years from land assembly to occupancy and requires $150M+ in capital. It produces 200&ndash;400 units, almost all of which are one and two bedrooms. Families need ground-oriented housing with three bedrooms, private entrances, and small yards — and towers do not deliver that at scale.</p>
        <p>Multiplexes do. A 6-unit infill project on a former single-family lot takes 18&ndash;24 months from permit to occupancy, requires $2.5&ndash;3.5M in capital, and produces family-sized units with direct street access. Scale that across 5,000 eligible lots in Burnaby alone, and you are talking about 20,000&ndash;30,000 new homes — without rezoning a single parcel.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Economics of Gentle Density</h2>
        <p>Missing middle housing is efficient on every metric that matters. Infrastructure cost per unit is 40&ndash;60% lower than greenfield suburban development because the roads, sewers, water mains, and transit routes already exist. Construction cost per square foot is 25&ndash;35% lower than concrete high-rise because multiplexes use wood-frame construction. And the sale price per square foot is 15&ndash;25% below equivalent new condo product because there are no amenity fees, strata management overhead, or tower premium markups.</p>
        <p>For a buyer, that translates to a new 1,200 sq ft three-bedroom multiplex unit in Burnaby at $850,000&ndash;$950,000, compared to $1.1M&ndash;$1.3M for a comparable new condo with strata fees of $400&ndash;600/month on top. The value proposition is clear.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What Bill 44 Changed</h2>
        <p>BC&apos;s Bill 44, passed in November 2023, was the provincial government&apos;s response to decades of missing middle obstruction at the municipal level. It requires all municipalities over 5,000 population to allow 3&ndash;6 units on most single-family lots as of right — no rezoning required. This was not a suggestion. It was a mandate, and it removed the single biggest barrier to missing middle construction: political risk at the municipal level.</p>
        <p>Before Bill 44, a developer proposing a fourplex in an RS zone faced a public hearing where 30 neighbours could show up and kill the project. Now, that fourplex is a permitted use. The neighbours can still comment on design, but they cannot veto the density.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Where the Opportunity Is Greatest</h2>
        <p>The best missing middle opportunities in Metro Vancouver are in established neighbourhoods with three characteristics: (1) land prices under $250/buildable sq ft, (2) strong end-sale values above $750/sq ft for new construction, and (3) proximity to transit corridors that unlock 6-unit density. In practical terms, that means Burnaby south of Kingsway, parts of New Westminster, Surrey&apos;s Fleetwood and Guildford corridors, and Coquitlam&apos;s Lougheed and Austin Heights areas.</p>
        <p>Fort Property Developments focuses exclusively on these corridors. Every lot we assess is screened against these fundamentals before we commit capital. The missing middle is not just a policy talking point — it is the most compelling real estate development opportunity in BC right now.</p>
      </div>
    ),
  },
  {
    slug: 'fourplex-vs-sixplex-which-build-makes-more-sense',
    date: 'April 2025',
    category: 'Investment',
    title: 'Fourplex vs Sixplex: Which Build Makes More Financial Sense?',
    excerpt: 'More units means more revenue — but also more complexity and cost. We compare the real numbers on 4-unit vs 6-unit multiplex builds to help you decide which path fits your lot and your budget.',
    readTime: '7 min read',
    image: '/images/blog/fourplex-vs-sixplex.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>When BC&apos;s Bill 44 opened up multiplex development, property owners immediately asked: should I build four units or six? The answer depends on your lot, your location, and your tolerance for complexity. Here is how the two options compare on the metrics that matter.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Zoning Threshold</h2>
        <p>Under Bill 44, most single-family lots allow 4 units as of right. To get 6 units, your lot typically needs to be within 400 metres of a frequent transit corridor (bus routes with 15-minute service or better, or a SkyTrain station). Not every lot qualifies for 6. Check your municipality&apos;s transit proximity map before assuming you can build more than 4.</p>
        <p>Lot size also matters. Most municipalities require a minimum of 450&ndash;500 m&sup2; for 6 units. On a standard 6,000 sq ft (557 m&sup2;) lot, you are fine. On a narrower 4,500 sq ft lot, 6 units may not be physically possible even if zoning permits them.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Comparing the Pro Formas</h2>
        <div className="bg-fort-charcoal rounded-xl p-6 text-white font-sans">
          <p className="text-fort-gold text-xs font-semibold uppercase tracking-widest mb-4">Side-by-Side — Same 6,000 sq ft Burnaby Lot</p>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="text-gray-400"></div><div className="font-semibold text-center">4-Unit</div><div className="font-semibold text-center">6-Unit</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Land Cost</div><div className="text-center border-b border-white/10 pb-2">$1,200,000</div><div className="text-center border-b border-white/10 pb-2">$1,200,000</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Hard Costs</div><div className="text-center border-b border-white/10 pb-2">$1,050,000</div><div className="text-center border-b border-white/10 pb-2">$1,500,000</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Soft Costs</div><div className="text-center border-b border-white/10 pb-2">$210,000</div><div className="text-center border-b border-white/10 pb-2">$285,000</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Financing</div><div className="text-center border-b border-white/10 pb-2">$130,000</div><div className="text-center border-b border-white/10 pb-2">$165,000</div>
            <div className="font-semibold border-b border-white/10 pb-2">Total Cost</div><div className="text-center font-semibold border-b border-white/10 pb-2">$2,590,000</div><div className="text-center font-semibold border-b border-white/10 pb-2">$3,150,000</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Revenue</div><div className="text-center border-b border-white/10 pb-2">$3,280,000</div><div className="text-center border-b border-white/10 pb-2">$4,500,000</div>
            <div className="font-bold text-fort-gold pt-1">Gross Margin</div><div className="text-center font-bold text-fort-gold pt-1">$690K (21%)</div><div className="text-center font-bold text-fort-gold pt-1">$1,350K (30%)</div>
          </div>
        </div>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Why the 6-Unit Numbers Look Better</h2>
        <p>Land cost is fixed regardless of unit count — you are buying the same lot. That means every additional unit spreads the land cost thinner. On a $1.2M lot, land cost per unit drops from $300,000 (4-unit) to $200,000 (6-unit). That $100,000 per unit difference flows straight to margin.</p>
        <p>Hard costs do increase — roughly 40&ndash;45% more construction for 50% more units — but the increase is not proportional because the foundation, servicing, and site prep costs are largely fixed. You are adding floor area, not starting from scratch.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">When a Fourplex Makes More Sense</h2>
        <p>Not every project should be a sixplex. A fourplex is the better play when: (1) your lot does not qualify for 6 units under transit proximity rules, (2) the lot is narrow or irregular and cannot physically accommodate 6 units within setback requirements, (3) you want larger units (1,200&ndash;1,400 sq ft three-bedrooms) that command premium per-unit pricing, or (4) your capital is limited and you want a simpler, lower-risk first project.</p>
        <p>Fourplexes are also faster to permit and build. Less complexity in structural engineering, simpler fire separation requirements, and fewer units to coordinate through the sales process. For a first-time multiplex developer, starting with a fourplex and scaling to sixplex on the second project is a smart approach.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Fort Recommendation</h2>
        <p>Build the maximum units your lot supports within the zoning envelope. If you can get 6, build 6 — the economics are meaningfully better. If your lot supports 4, build 4 — the deal still works on well-selected sites. The mistake is building fewer units than your lot allows. Every unit you leave on the table is $100,000+ of margin you are walking away from.</p>
        <p>Run your specific lot through our feasibility calculator, or book a free 20-minute lot assessment. We will tell you whether you are looking at a 4-unit or 6-unit site, and what the numbers look like either way.</p>
      </div>
    ),
  },
  {
    slug: 'how-real-estate-agents-earn-on-multiplex-deals',
    date: 'May 2025',
    category: 'For Agents',
    title: 'How Real Estate Agents Can Earn on Multiplex Deals',
    excerpt: 'Multiplex development is creating a new commission stream for agents who understand the product. Here is how the referral model works and what agents earn on a typical Fort project.',
    readTime: '5 min read',
    image: '/images/blog/agent-commissions.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>Most real estate agents in Metro Vancouver are still focused on resale — listing and selling existing homes. But the multiplex wave is creating a parallel revenue stream that smart agents are already tapping into. If you are an agent with clients who own single-family lots in Burnaby, Surrey, or Coquitlam, you are sitting on a referral pipeline you may not realize you have.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Agent Opportunity</h2>
        <p>Every single-family lot in Metro Vancouver that qualifies for multiplex development represents two potential transactions: (1) the land acquisition (buying the lot from the current owner), and (2) the end-unit sales (selling the finished multiplex units to buyers). On a 4-unit project, that is 5 total transaction sides. On a 6-unit, it is 7.</p>
        <p>At average sale prices of $800,000&ndash;$950,000 per unit and standard commission rates, a single 6-unit multiplex project generates $135,000&ndash;$170,000 in total buy-side and sell-side commissions. Compare that to listing a single $1.5M house at 3% — the multiplex deal is worth 3&ndash;4x the commission on a comparable-value single transaction.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">How the Referral Model Works</h2>
        <p>Fort Property Developments works with a network of referring agents across Metro Vancouver. The model is simple:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-fort-charcoal">You identify the lot.</strong> Your client owns a single-family home on a lot that qualifies for multiplex development. They may want to sell the land, partner on the development, or redevelop themselves with Fort&apos;s guidance.</li>
          <li><strong className="text-fort-charcoal">Fort runs the feasibility.</strong> We assess the lot — zoning, FSR, unit count, estimated costs, and projected returns — at no cost to you or your client. If the numbers work, we present the options.</li>
          <li><strong className="text-fort-charcoal">You earn on every transaction.</strong> If the lot is acquired, you earn the buy-side commission. When the finished units sell, you have first right to list them. On a typical 4-unit project, that is one buy-side commission plus four sell-side listings.</li>
        </ul>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What Makes a Good Referral</h2>
        <p>Not every lot is a winner. The best referrals share three characteristics: lot size of 6,000+ sq ft, RS or equivalent single-family zoning, and a location where new construction sells above $750/sq ft. Burnaby, New Westminster, Surrey (Fleetwood/Guildford), and Coquitlam are currently the strongest markets.</p>
        <p>The easiest referrals come from clients who are already thinking about their next move: empty nesters in 40-year-old homes, estate situations where heirs want to maximize value, or investors who bought single-family homes years ago and are sitting on significant land value they have not unlocked.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Commission Structure</h2>
        <p>Fort pays standard market commissions — we do not ask agents to discount. On the land acquisition side, expect 2.5&ndash;3% on the first $100,000 and 1&ndash;1.25% on the balance, consistent with BCFSA guidelines. On end-unit sales, standard buyer-side co-operating commissions apply. We also offer a referral bonus of $5,000&ndash;$10,000 for agents who introduce lots that result in a completed project, paid at closing on the land acquisition.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Getting Started</h2>
        <p>If you are an agent in Metro Vancouver and you have clients with single-family lots in multiplex-eligible zones, reach out. We will walk you through the process, show you how to identify qualifying lots in your farm area, and set you up as a referring agent in our network. No fees, no exclusivity — just a straightforward referral relationship that pays you on every deal.</p>
        <p>The agents who build expertise in multiplex development now will own this niche for the next decade. The product is new, the inventory is growing, and the buyers are already looking. Be the agent who understands what they are buying.</p>
      </div>
    ),
  },
  {
    slug: 'understanding-development-costs-metro-vancouver',
    date: 'May 2025',
    category: 'Getting Started',
    title: 'Understanding Development Costs in Metro Vancouver (2025 Numbers)',
    excerpt: 'Every multiplex budget has four layers: hard costs, soft costs, financing, and contingency. Here is what each one actually costs in Metro Vancouver right now, with real numbers from recent projects.',
    readTime: '8 min read',
    image: '/images/blog/development-costs.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>The number one reason multiplex projects fail is not zoning — it is cost estimation. Developers who underestimate soft costs, forget about DCCs, or ignore financing carry costs end up with a project that looked profitable on paper but lost money in reality. Here is the full cost breakdown for a Metro Vancouver multiplex project in 2025, based on real numbers from Fort&apos;s recent builds.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Hard Costs: The Build Itself</h2>
        <p>Hard costs are the physical construction: foundation, framing, plumbing, electrical, HVAC, finishing, and landscaping. In Metro Vancouver, wood-frame multiplex construction currently runs:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-fort-charcoal">Basic spec:</strong> $250&ndash;$275/sq ft — builder-grade finishes, standard appliances, basic landscaping</li>
          <li><strong className="text-fort-charcoal">Mid spec:</strong> $275&ndash;$310/sq ft — engineered hardwood, quartz counters, soft-close cabinets, quality fixtures</li>
          <li><strong className="text-fort-charcoal">High spec:</strong> $310&ndash;$350/sq ft — custom millwork, premium appliances, designer lighting, high-end landscaping</li>
        </ul>
        <p>Fort builds at mid spec. The price-per-square-foot premium over basic is small ($25&ndash;$35/sq ft), but the sale price premium is significant ($50&ndash;$75/sq ft higher end value). Mid spec is where the margin lives.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Soft Costs: Everything Except the Build</h2>
        <p>Soft costs typically run 18&ndash;25% of hard costs. On a $1.2M construction budget, that is $216,000&ndash;$300,000. The major line items:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-fort-charcoal">Architecture and engineering:</strong> $60,000&ndash;$90,000 for a full set of construction drawings, structural engineering, mechanical/electrical design, and energy modelling</li>
          <li><strong className="text-fort-charcoal">Development Cost Charges (DCCs):</strong> $25,000&ndash;$45,000 per unit depending on municipality. Burnaby is on the higher end. These are non-negotiable fees paid to the city.</li>
          <li><strong className="text-fort-charcoal">Building permit fees:</strong> $15,000&ndash;$25,000 for a 4&ndash;6 unit multiplex</li>
          <li><strong className="text-fort-charcoal">Geotechnical report:</strong> $5,000&ndash;$8,000 — required for all new construction</li>
          <li><strong className="text-fort-charcoal">Survey:</strong> $3,000&ndash;$5,000 for a legal survey and building location certificate</li>
          <li><strong className="text-fort-charcoal">Legal fees:</strong> $15,000&ndash;$25,000 for strata subdivision, title work, and sales contracts</li>
          <li><strong className="text-fort-charcoal">Marketing and sales:</strong> $20,000&ndash;$40,000 for photography, staging, MLS listing, and marketing materials</li>
        </ul>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Financing: The Hidden Cost</h2>
        <p>Construction loans in BC currently carry interest rates of 6.5&ndash;8.5% (prime + 2&ndash;4%) with lender fees of 1&ndash;2% of the loan amount. On a typical project with a 65% loan-to-cost ratio and an 18-month draw period, financing costs add $100,000&ndash;$175,000 to the total budget. This is money that does not build anything — it just pays for the time value of capital. Every month of delay in permitting or construction adds $8,000&ndash;$12,000 in carry costs.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Contingency: Plan for It or Pay for It</h2>
        <p>Every experienced developer budgets a contingency of 8&ndash;12% of hard costs. On a $1.2M build, that is $96,000&ndash;$144,000 set aside for surprises: contaminated soil (common on older residential lots), unexpected rock, weather delays, material price increases, or trade availability issues. If you do not need the contingency, it flows to profit. If you need it and did not budget it, the money comes from your margin.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Total All-In Cost Example</h2>
        <div className="bg-fort-charcoal rounded-xl p-6 text-white font-sans">
          <p className="text-fort-gold text-xs font-semibold uppercase tracking-widest mb-4">All-In Budget — 4-Unit Fort Langley Multiplex</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Land</span><span className="font-semibold">$1,200,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Hard Costs (4,800 sq ft @ $290/sf)</span><span className="font-semibold">$1,392,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Soft Costs (22% of hard)</span><span className="font-semibold">$306,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Financing (18 months)</span><span className="font-semibold">$145,000</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Contingency (10%)</span><span className="font-semibold">$139,000</span></div>
            <div className="flex justify-between pt-1 font-bold text-fort-gold"><span>Total All-In</span><span>$3,182,000</span></div>
          </div>
        </div>
        <p>At a sale price of $875/sq ft across 4,800 sq ft, gross revenue is $4,200,000 — leaving a gross margin of approximately $1,018,000 or 24%. That is a healthy margin, but notice how quickly it compresses if construction costs rise 10% or sale prices drop 5%. This is why accurate cost estimation is not optional — it is the difference between a profitable project and an expensive education.</p>
      </div>
    ),
  },
  {
    slug: 'condo-market-vs-new-multiplexes-what-buyers-want',
    date: 'June 2025',
    category: 'Market Insights',
    title: 'The Condo Market vs New Multiplexes: What Buyers Actually Want',
    excerpt: 'Buyers in Metro Vancouver are shifting away from aging condo towers toward new ground-oriented multiplexes. Here is why, and what it means for developers and investors.',
    readTime: '6 min read',
    image: '/images/blog/condo-vs-multiplex.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>Something is shifting in Metro Vancouver&apos;s housing market. Resale condos in 20&ndash;30 year old towers are sitting on the market for 45&ndash;60+ days. Meanwhile, new multiplex units in Burnaby and Surrey are selling in under 30 days at asking price. The buyer has spoken — and they want ground-oriented, new construction housing.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Why Buyers Are Moving Away from Condos</h2>
        <p>The aging condo problem in Metro Vancouver is real. Buildings constructed in the 1990s and early 2000s are hitting the 25&ndash;30 year mark when major systems start failing: envelopes, elevators, plumbing risers, parkade membranes. Special assessments of $30,000&ndash;$80,000+ per unit are becoming common. Strata insurance costs have tripled since 2018 in many buildings. Monthly strata fees of $500&ndash;$700 are now standard for older buildings, and buyers know that number only goes up.</p>
        <p>Meanwhile, the buyer demographic is evolving. Millennials — now in their late 30s and early 40s — are the largest buyer cohort in Metro Vancouver. They are starting families, working from home part-time, and looking for more space. A 650 sq ft one-bedroom condo with $500/month in strata fees does not meet their needs. A 1,200 sq ft three-bedroom multiplex unit with a private entrance, a small yard, and no strata fees does.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Multiplex Value Proposition</h2>
        <p>New multiplex units offer several advantages that resale condos cannot match:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-fort-charcoal">No strata fees</strong> — or minimal fees for shared landscaping maintenance. A buyer saves $6,000&ndash;$8,000/year compared to a typical older condo.</li>
          <li><strong className="text-fort-charcoal">Ground-oriented living</strong> — private entrance, often a small yard or patio, no shared hallways or elevators.</li>
          <li><strong className="text-fort-charcoal">New construction warranty</strong> — 2-5-10 warranty coverage means no surprise assessments for a decade.</li>
          <li><strong className="text-fort-charcoal">Modern building code</strong> — energy efficiency, sound separation, and seismic standards that 1990s condos were not built to.</li>
          <li><strong className="text-fort-charcoal">Family-sized layouts</strong> — 3 bedrooms and 1,100&ndash;1,400 sq ft, compared to the 1&ndash;2 bedroom focus of most condo towers.</li>
        </ul>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Numbers: Price Per Square Foot</h2>
        <p>In Burnaby, a 20-year-old 2-bedroom condo (900 sq ft) trades at roughly $650&ndash;$750/sq ft. A new multiplex unit (1,200 sq ft) trades at $800&ndash;$950/sq ft. On a per-square-foot basis, the multiplex is more expensive — but on a monthly carrying cost basis, the multiplex is cheaper because there are no strata fees. A buyer comparing a $675,000 condo with $550/month strata fees to a $960,000 multiplex unit with no strata is actually paying roughly the same monthly at current mortgage rates. But the multiplex buyer has 300 more square feet, a yard, and a new home.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What This Means for Developers</h2>
        <p>The demand side of the multiplex equation is strong and growing. Builders who deliver well-designed, mid-spec multiplex units in transit-accessible neighbourhoods are finding ready buyers. The constraint is not demand — it is supply. There are not enough multiplex units on the market to meet the demand from family buyers who have outgrown condos but cannot afford detached homes.</p>
        <p>For developers, this means: build to the family buyer. Three bedrooms, open-concept kitchens, in-unit laundry, and some outdoor space. Keep the finishes mid-spec — quartz counters and engineered hardwood, not marble and custom millwork. Price at a slight premium to resale condos but a significant discount to detached homes. That is the sweet spot where deals close fast.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Resale Condo Warning</h2>
        <p>If you own a condo in a building approaching its 25-year mark, pay attention. The convergence of special assessments, rising strata fees, and buyer preference for new ground-oriented housing is creating downward pressure on older condo values. This is not a prediction — it is already happening in Burnaby, New Westminster, and parts of Surrey. The buildings that will hold value are newer (under 15 years), well-maintained, and in prime locations. Everything else faces headwinds.</p>
      </div>
    ),
  },
  {
    slug: 'land-value-assessment-finding-hidden-density',
    date: 'June 2025',
    category: 'Investment',
    title: 'Land Value Assessment: Finding Hidden Density Potential',
    excerpt: 'Bill 44 created millions of dollars in unrealized land value across Metro Vancouver overnight. Here is how to identify lots where the density potential exceeds what the current owner thinks they have.',
    readTime: '6 min read',
    image: '/images/blog/land-value.jpg',
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>When Bill 44 passed, it quietly changed the value equation on hundreds of thousands of single-family lots across BC. A lot that was worth $1.2M as a single-family teardown may now be worth $1.4&ndash;$1.6M as a multiplex development site — but most owners do not know it yet. That gap is where the opportunity lives.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Residual Land Value Method</h2>
        <p>Professional developers do not value land by comparing it to neighbouring sales of similar houses. They use <strong className="text-fort-charcoal">residual land value</strong> — working backwards from the end product. The formula is simple: total revenue from the finished units minus all development costs (construction, soft costs, financing, profit margin) equals the maximum you can pay for the land and still make the deal work.</p>
        <p>Example: a 6-unit multiplex in Burnaby generates $4.5M in sales revenue. Total development costs (excluding land) are $2.1M. Developer requires an 18% margin ($810,000). Residual land value = $4,500,000 - $2,100,000 - $810,000 = <strong className="text-fort-charcoal">$1,590,000</strong>. If the current owner thinks their lot is worth $1.2M based on comparable house sales, there is a $390,000 gap that benefits both parties.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">What Creates Hidden Value</h2>
        <p>Several factors create situations where a lot&apos;s development value significantly exceeds its current market value as a single-family site:</p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li><strong className="text-fort-charcoal">Transit proximity:</strong> Lots within 400m of a frequent transit corridor qualify for 6 units instead of 4. That extra 50% in unit count can add $200,000&ndash;$400,000 in residual land value.</li>
          <li><strong className="text-fort-charcoal">Corner lots:</strong> Two street frontages often allow more flexible building placement and better unit layouts. Some municipalities offer corner lot bonuses on FSR.</li>
          <li><strong className="text-fort-charcoal">Oversized lots:</strong> A 7,000&ndash;8,000 sq ft lot with higher FSR capacity may support larger units that sell at a premium, even with the same unit count.</li>
          <li><strong className="text-fort-charcoal">Neighbourhood trajectory:</strong> Lots in areas where new development is already occurring sell faster and at higher per-square-foot prices because buyer confidence is established.</li>
        </ul>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Assessment Gap in Metro Vancouver</h2>
        <p>BC Assessment values still lag the reality of Bill 44 density in most cases. A lot assessed at $1.1M for property tax purposes based on its single-family use may have a development value of $1.4M+ under the new zoning. This creates an opportunity for both buyers and sellers — sellers get more than they expected, and developers pay a premium but still make the numbers work because the added density covers the higher land cost.</p>
        <p>The gap is largest in areas where few multiplex projects have been completed — there are no comparable sales to push land values up yet. As more projects complete and sell, land prices in those areas will adjust upward. The early mover advantage is real and it is time-limited.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">How to Screen for Opportunity</h2>
        <p>Fort screens lots using a five-factor model: (1) lot size and dimensions, (2) FSR capacity, (3) transit proximity and unit count potential, (4) comparable sale prices for new construction in the area, and (5) current asking price or BC Assessment value relative to calculated residual value. When the residual value exceeds the asking price by 15%+, we have a deal worth pursuing.</p>
        <p>If you own a single-family lot and want to know what your land is really worth under current multiplex zoning, we offer a free assessment. We will run the residual land value calculation based on your specific lot dimensions, zoning, and local market conditions — and give you a number you can use to make an informed decision about selling, partnering, or developing.</p>
      </div>
    ),
  },
  {
    slug: "burnaby-multiplex-boom-market-update-2025",
    date: "July 2025",
    category: "Market Insights",
    title: "Burnaby's Multiplex Boom: 2025 Market Update",
    excerpt: "Burnaby has emerged as the epicentre of BC multiplex development. Here is what is happening on the ground.",
    readTime: "7 min read",
    image: "/images/blog/burnaby-market.jpg",
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>If you want to see the future of BC housing, look at Burnaby. The city has embraced multiplex development more aggressively than almost any other municipality in Metro Vancouver.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Permit Activity</h2>
        <p>Burnaby has processed more multiplex building permit applications than any other Metro Vancouver municipality since Bill 44 took effect. The majority are 4-unit projects on standard 6,000 sq ft RS-5 lots. Six-unit applications are concentrated along the Kingsway, Hastings, and Canada Way corridors. Average permit processing time is currently 8&ndash;14 months from initial application to building permit issuance.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Sale Prices by Neighbourhood</h2>
        <div className="bg-fort-charcoal rounded-xl p-6 text-white font-sans">
          <p className="text-fort-gold text-xs font-semibold uppercase tracking-widest mb-4">New Multiplex Sale Prices &mdash; Burnaby 2025</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">Metrotown / Central Park</span><span className="font-semibold">$900&ndash;$1,000/sq ft</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">South Burnaby (Edmonds)</span><span className="font-semibold">$825&ndash;$925/sq ft</span></div>
            <div className="flex justify-between border-b border-white/10 pb-2"><span className="text-gray-300">East Burnaby / Cariboo</span><span className="font-semibold">$800&ndash;$875/sq ft</span></div>
            <div className="flex justify-between"><span className="text-gray-300">North Burnaby (Hastings)</span><span className="font-semibold">$850&ndash;$950/sq ft</span></div>
          </div>
        </div>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Where the Best Opportunities Remain</h2>
        <p>The most competitive areas have already seen land prices adjust upward. The best risk-adjusted returns are now in South Burnaby around Edmonds Station, East Burnaby near the Cariboo corridor, and parts of North Burnaby along Hastings where land is still priced closer to single-family teardown value. Land can still be acquired at $1.0&ndash;$1.3M while end-unit values track $825&ndash;$925/sq ft. That spread supports gross margins of 18&ndash;24% on 4-unit projects and 25&ndash;32% on 6-unit projects near transit.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Challenges to Watch</h2>
        <p>Permit timelines have lengthened as the planning department processes a surge in applications. Some applicants report 12&ndash;16 months from application to building permit. DCCs in Burnaby have also increased to $35,000&ndash;$45,000 per unit &mdash; on a 6-unit project, that is $210,000&ndash;$270,000 in municipal charges alone.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Outlook</h2>
        <p>Burnaby's multiplex market is transitioning from early-mover to mainstream. The opportunity is still strong but requires sharper execution, more accurate cost estimation, and faster decision-making than it did 12 months ago. The developers who will win are those with established contractor relationships, pre-approved designs, and the ability to close on land quickly.</p>
      </div>
    ),
  },
  {
    slug: "step-by-step-guide-first-multiplex-project",
    date: "July 2025",
    category: "Getting Started",
    title: "A Step-by-Step Guide to Your First Multiplex Project",
    excerpt: "From finding the right lot to handing over the keys &mdash; the complete timeline and process for building a multiplex in Metro Vancouver.",
    readTime: "9 min read",
    image: "/images/blog/first-multiplex.jpg",
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>Building your first multiplex is the hardest one. Not because the construction is complex &mdash; wood-frame multiplexes are straightforward builds &mdash; but because the process has more steps than most people expect. Here is the complete roadmap from site search to occupancy.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Phase 1: Site Selection (Month 1&ndash;3)</h2>
        <p>Everything starts with finding the right lot. You are looking for an RS-zoned lot of 6,000+ sq ft in a neighbourhood where new multiplex units sell at $800+/sq ft. Run a quick feasibility on every lot before making an offer. The three numbers you need: current land value, estimated build cost per square foot, and comparable sale prices for new construction. If the rough margin is above 18%, the site is worth pursuing. Below 15%, walk away.</p>
        <p>Make your offer conditional on a satisfactory geotechnical report and municipal pre-application meeting. These two diligence items will catch 90% of deal-killers before you commit.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Phase 2: Design and Permitting (Month 3&ndash;12)</h2>
        <p>Engage an architect experienced in multiplex design &mdash; not a residential designer who has only done single-family renovations. The design process typically takes 6&ndash;8 weeks for schematic design and 4&ndash;6 weeks for detailed construction drawings. In parallel, you will need structural, mechanical, electrical, and geotechnical engineering reports.</p>
        <p>Submit your development permit application as soon as schematic design is complete. In Burnaby, expect 4&ndash;6 months for DP review. Once approved, submit the building permit &mdash; another 4&ndash;8 months. Total permitting: 8&ndash;14 months.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Phase 3: Financing (Month 6&ndash;10)</h2>
        <p>Start lining up financing while permits are in review. Construction lenders want to see: approved development permit, construction drawings, a cost estimate from your general contractor, and a market appraisal. Most multiplex projects finance at 65&ndash;75% loan-to-cost with a construction draw schedule over 12&ndash;18 months.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Phase 4: Construction (Month 12&ndash;24)</h2>
        <p>Construction on a 4-unit wood-frame multiplex typically takes 10&ndash;14 months. Critical path milestones: Foundation (4&ndash;6 weeks), Framing (6&ndash;8 weeks), Rough-in for plumbing, electrical, HVAC (4&ndash;6 weeks), Drywall and finishing (8&ndash;12 weeks), and Exterior/landscaping (4&ndash;6 weeks). The most common cause of delay is trade scheduling &mdash; lock in trades early and use a GC with established subcontractor relationships.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Phase 5: Sales and Closing (Month 20&ndash;26)</h2>
        <p>Start marketing 3&ndash;4 months before anticipated completion. Well-priced multiplex units in good locations sell within 30&ndash;45 days of listing. Strata subdivision must be completed before individual units can be sold &mdash; this takes 6&ndash;10 weeks through the Land Title Office.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Total Timeline: 22&ndash;28 Months</h2>
        <p>From initial lot identification to final unit sale, expect 22&ndash;28 months. The biggest variable is permitting. Every month of delay adds $8,000&ndash;$12,000 in financing costs, which is why experienced developers submit the highest-quality applications possible on the first try.</p>
        <p>Fort Property Developments offers turnkey development management for property owners who want to build a multiplex on their own lot without managing the process themselves. We handle everything from design through sales. If you are interested in developing your lot but not in becoming a full-time project manager, reach out for a free consultation.</p>
      </div>
    ),
  },
  {
    slug: "investor-returns-private-lending-vs-equity",
    date: "August 2025",
    category: "Investment",
    title: "Investor Returns: Private Lending vs Equity Partnership",
    excerpt: "Two ways to invest in multiplex development &mdash; lending capital for fixed returns or partnering for equity upside. Here is how each structure works and what returns to expect.",
    readTime: "6 min read",
    image: "/images/blog/investor-returns.jpg",
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>Not every investor wants to be a developer. Some want to deploy capital into real estate development without managing permits, contractors, and sales. Multiplex development offers two primary paths for passive or semi-passive investors: private lending and equity partnership. The right choice depends on your risk tolerance, return expectations, and how involved you want to be.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Option 1: Private Lending</h2>
        <p>Private lending is the lower-risk path. You lend money to the developer at a fixed interest rate, secured by a mortgage registered against the property. Your return is contractual &mdash; you earn interest regardless of whether the project makes a profit or a loss, as long as the developer can service the debt.</p>
        <p>Current private lending rates for multiplex construction in Metro Vancouver range from 8&ndash;12% annually depending on the loan-to-value ratio, the borrower's track record, and the project's risk profile. A typical structure: 10% annual interest, interest-only payments monthly, 18&ndash;24 month term, second mortgage position behind the construction lender. On a $300,000 private loan, that is $30,000/year or $2,500/month in interest income.</p>
        <p>The risk: if the project stalls or the developer defaults, you are in second position behind the construction lender. Your recovery depends on the property's value relative to total debt. This is why loan-to-value discipline matters &mdash; never lend more than 75% of the current land value in second position.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Option 2: Equity Partnership</h2>
        <p>Equity partnership means you invest capital in exchange for a share of the project's profits. There is no fixed return &mdash; you participate in both the upside and the downside. The typical structure is a joint venture corporation where the developer contributes expertise and project management, and the investor contributes capital.</p>
        <p>Common profit splits range from 50/50 to 70/30 (investor/developer) depending on who is contributing what. If the investor puts up 100% of the equity and the developer contributes only sweat equity, a 60/40 split favouring the investor is standard. If both contribute capital, it is usually proportional to investment plus a management override for the developer.</p>
        <p>On a well-executed 4-unit project with a 20% gross margin, the equity investor's return can be 25&ndash;40% on invested capital over 22&ndash;28 months. Annualized, that is 12&ndash;20% &mdash; significantly higher than private lending, but with meaningful risk if the project underperforms.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Comparing the Two</h2>
        <div className="bg-fort-charcoal rounded-xl p-6 text-white font-sans">
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="text-gray-400"></div><div className="font-semibold text-center">Private Lending</div><div className="font-semibold text-center">Equity Partnership</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Target Return</div><div className="text-center border-b border-white/10 pb-2">8&ndash;12% annual</div><div className="text-center border-b border-white/10 pb-2">12&ndash;20%+ annual</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Risk Level</div><div className="text-center border-b border-white/10 pb-2">Lower</div><div className="text-center border-b border-white/10 pb-2">Higher</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Security</div><div className="text-center border-b border-white/10 pb-2">Mortgage on title</div><div className="text-center border-b border-white/10 pb-2">Equity in corp</div>
            <div className="text-gray-300 border-b border-white/10 pb-2">Involvement</div><div className="text-center border-b border-white/10 pb-2">Passive</div><div className="text-center border-b border-white/10 pb-2">Semi-active</div>
            <div className="text-gray-300"><span>Liquidity</span></div><div className="text-center">Fixed term</div><div className="text-center">Locked until sale</div>
          </div>
        </div>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Which Is Right for You?</h2>
        <p>Choose private lending if you want predictable income, lower risk, and minimal involvement. Choose equity if you want higher returns, are comfortable with project risk, and want exposure to real estate development upside. Many sophisticated investors do both &mdash; lending on some projects and taking equity on others to balance their portfolio.</p>
        <p>Fort works with both private lenders and equity partners on our multiplex projects. If you have capital to deploy and want to explore either structure, book a call. We will walk you through the specific opportunity, the risk profile, and the projected returns based on real numbers.</p>
      </div>
    ),
  },
  {
    slug: "why-fort-langley-is-ground-zero-housing-future",
    date: "August 2025",
    category: "Market Insights",
    title: "Why Fort Langley Is Ground Zero for BC's Housing Future",
    excerpt: "A heritage village with a development mindset. Fort Langley is where old BC meets new housing &mdash; and where Fort Property Developments got its start.",
    readTime: "5 min read",
    image: "/images/blog/fort-langley.jpg",
    content: (
      <div className="space-y-6 font-sans text-fort-gray leading-relaxed">
        <p>Fort Langley is a village of 3,400 people on the south bank of the Fraser River, 45 minutes east of Vancouver. It has a 200-year-old Hudson's Bay Company fort, a main street with independent shops and restaurants, and a community that takes heritage seriously. It is also the birthplace of Fort Property Developments &mdash; and the reason we build the way we do.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Fort Langley Model</h2>
        <p>Fort Langley proves that density and character are not mutually exclusive. The village has evolved over decades by adding gentle density &mdash; laneway houses, duplexes, small apartment buildings &mdash; without losing its identity. The streets are walkable. The buildings are human-scaled. The community is tight-knit. This is what good infill development looks like when it is done with respect for the existing neighbourhood.</p>
        <p>That principle &mdash; adding density while preserving character &mdash; is the foundation of everything Fort Property Developments builds. We are not trying to turn single-family neighbourhoods into Metrotown. We are building 4&ndash;6 unit multiplexes that look like they belong on the street, that add housing where it is needed, and that create value for the neighbourhood rather than extracting it.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Market Opportunity</h2>
        <p>The Township of Langley &mdash; which includes Fort Langley &mdash; is one of the fastest-growing municipalities in Metro Vancouver. Population growth is driven by families priced out of Vancouver and Burnaby who are willing to trade commute time for space and community. New construction in Langley sells at $700&ndash;$850/sq ft, and land prices remain 20&ndash;30% below comparable Burnaby lots. That spread creates some of the strongest margins in the region for multiplex developers.</p>
        <p>Fort Langley itself has limited development land due to ALR (Agricultural Land Reserve) boundaries and heritage protections. But the surrounding areas &mdash; Walnut Grove, Murrayville, and Willoughby &mdash; offer significant multiplex potential under Bill 44 zoning. Several SkyTrain extension studies have also identified Langley as a future rapid transit terminus, which would unlock 6-unit density along key corridors.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">Why We Started Here</h2>
        <p>Dennis Donovan, Fort's founder, grew up in Fort Langley. The company name is not a coincidence &mdash; it is a statement of values. Fort Langley taught us that the best development enhances a community rather than overwhelming it. A well-designed fourplex on a residential street should feel like a natural evolution of the neighbourhood, not a disruption.</p>
        <p>That philosophy extends to every project Fort takes on across Metro Vancouver. Whether we are building in Burnaby, Surrey, or Coquitlam, we design for the neighbourhood, not against it. Character-compatible massing, quality materials, and thoughtful landscaping are not extras &mdash; they are requirements on every Fort project.</p>
        <h2 className="font-serif text-2xl text-fort-charcoal pt-2">The Bigger Picture</h2>
        <p>BC needs 600,000+ new homes over the next decade to address the housing shortage. Most of those homes will not come from high-rise towers or suburban sprawl &mdash; they will come from gentle density in existing neighbourhoods. Multiplexes, townhouses, and small apartment buildings built on single-family lots are the fastest, most cost-effective way to add housing supply where infrastructure already exists.</p>
        <p>Fort Langley showed us what that future looks like when it is done well. Our job is to bring that model to every neighbourhood in Metro Vancouver that is ready for it. If you own a lot, represent a buyer, or want to invest in the missing middle &mdash; Fort Property Developments is where to start.</p>
      </div>
    ),
  },
]
