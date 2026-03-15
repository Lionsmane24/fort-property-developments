'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  site: {
    address: string
    lotSizeSqft: string
    zoning: string
    currentUse: string
    proposedUnits: string
  }
  costs: {
    landValue: string
    hardCostPerSqft: string
    grossFloorAreaSqft: string
    softCostPct: string
    contingencyPct: string
  }
  revenue: {
    studios: string
    studioPricePer: string
    oneBeds: string
    oneBedPricePer: string
    twoBeds: string
    twoBedPricePer: string
    threeBeds: string
    threeBedPricePer: string
    priceMode: 'per_unit' | 'per_sqft'
    avgUnitSqft: string
  }
  financing: {
    ltvPct: string
    interestRatePct: string
    termMonths: string
    equityIn: string
  }
}

interface Analysis {
  land: number
  hard: number
  soft: number
  contingency: number
  totalCost: number
  totalRevenue: number
  profit: number
  marginPct: number
  loanAmount: number
  interestCost: number
  equityIn: number
  netProfit: number
  cashOnCash: number
  equityUplift: number
  annualizedReturn: number
  termMonths: number
  totalUnits: number
  verdict: 'Go' | 'Marginal' | 'No-Go'
}

// ─── Calculations ──────────────────────────────────────────────────────────────

function calcUnitRevenue(count: string, price: string, mode: 'per_unit' | 'per_sqft', avgSqft: string): number {
  const n = parseInt(count) || 0
  const p = parseFloat(price) || 0
  const sqft = parseFloat(avgSqft) || 700
  if (n === 0 || p === 0) return 0
  return mode === 'per_unit' ? n * p : n * p * sqft
}

function analyse(data: FormData): Analysis {
  const land = parseFloat(data.costs.landValue) || 0
  const gfa = parseFloat(data.costs.grossFloorAreaSqft) || 0
  const hardPsf = parseFloat(data.costs.hardCostPerSqft) || 0
  const softPct = parseFloat(data.costs.softCostPct) || 0
  const contingencyPct = parseFloat(data.costs.contingencyPct) || 0

  const hard = gfa * hardPsf
  const soft = (land + hard) * (softPct / 100)
  const contingency = hard * (contingencyPct / 100)
  const totalCost = land + hard + soft + contingency

  const mode = data.revenue.priceMode
  const avgSqft = data.revenue.avgUnitSqft
  const studioRev = calcUnitRevenue(data.revenue.studios, data.revenue.studioPricePer, mode, avgSqft)
  const oneRev = calcUnitRevenue(data.revenue.oneBeds, data.revenue.oneBedPricePer, mode, avgSqft)
  const twoRev = calcUnitRevenue(data.revenue.twoBeds, data.revenue.twoBedPricePer, mode, avgSqft)
  const threeRev = calcUnitRevenue(data.revenue.threeBeds, data.revenue.threeBedPricePer, mode, avgSqft)
  const totalRevenue = studioRev + oneRev + twoRev + threeRev

  const profit = totalRevenue - totalCost
  const marginPct = totalRevenue > 0 ? (profit / totalRevenue) * 100 : 0

  const ltvPct = parseFloat(data.financing.ltvPct) || 0
  const ratePct = parseFloat(data.financing.interestRatePct) || 0
  const termMonths = parseFloat(data.financing.termMonths) || 24
  const equityIn = parseFloat(data.financing.equityIn) || 0

  const loanAmount = totalCost * (ltvPct / 100)
  const interestCost = loanAmount * (ratePct / 100) * (termMonths / 12)
  const netProfit = profit - interestCost

  const cashOnCash = equityIn > 0 ? (netProfit / equityIn) * 100 : 0
  const equityUplift = equityIn > 0 ? (profit / equityIn) * 100 : 0
  const annualizedReturn = termMonths > 0 ? cashOnCash / (termMonths / 12) : 0

  const totalUnits =
    (parseInt(data.revenue.studios) || 0) +
    (parseInt(data.revenue.oneBeds) || 0) +
    (parseInt(data.revenue.twoBeds) || 0) +
    (parseInt(data.revenue.threeBeds) || 0)

  let verdict: 'Go' | 'Marginal' | 'No-Go' = 'No-Go'
  if (marginPct >= 15 && cashOnCash >= 15) verdict = 'Go'
  else if (marginPct >= 8 || cashOnCash >= 8) verdict = 'Marginal'

  return {
    land, hard, soft, contingency, totalCost,
    totalRevenue, profit, marginPct,
    loanAmount, interestCost, equityIn, netProfit,
    cashOnCash, equityUplift, annualizedReturn, termMonths,
    totalUnits, verdict,
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString('en-CA')
}

function fmtPct(n: number) {
  return n.toFixed(1) + '%'
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricCard({ label, value, sub, highlight }: { label: string; value: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-5 ${highlight ? 'bg-fort-gold/8 border-fort-gold/30' : 'bg-white border-fort-charcoal/10'}`}>
      <p className="font-sans text-xs text-fort-gray uppercase tracking-wider">{label}</p>
      <p className={`font-serif text-2xl mt-1 ${highlight ? 'text-fort-gold' : 'text-fort-charcoal'}`}>{value}</p>
      {sub && <p className="font-sans text-xs text-fort-gray mt-0.5">{sub}</p>}
    </div>
  )
}

function LineItem({ label, value, bold, indent }: { label: string; value: string; bold?: boolean; indent?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-2.5 border-b border-fort-charcoal/8 last:border-0 ${indent ? 'pl-4' : ''}`}>
      <span className={`font-sans text-sm ${bold ? 'font-semibold text-fort-charcoal' : 'text-fort-gray'}`}>{label}</span>
      <span className={`font-sans text-sm tabular-nums ${bold ? 'font-semibold text-fort-charcoal' : 'text-fort-gray'}`}>{value}</span>
    </div>
  )
}

const verdictConfig = {
  Go: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Deal Looks Viable',
    body: 'Your margins and returns meet typical developer thresholds. Proceed to detailed design and formal appraisals.',
  },
  Marginal: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: 'Marginal — Proceed with Caution',
    body: 'Returns are below target thresholds. Explore ways to reduce costs or increase revenue before committing.',
  },
  'No-Go': {
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-800',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    title: 'Deal Does Not Pencil',
    body: 'At current assumptions this project does not generate acceptable returns. Revisit land price, unit mix, or construction costs.',
  },
}

// ─── Main results page ─────────────────────────────────────────────────────────

export default function ResultsPage() {
  const [data, setData] = useState<FormData | null>(null)
  const printRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const raw = localStorage.getItem('askMultiplexAnalysis')
    if (raw) {
      try { setData(JSON.parse(raw)) } catch { /* ignore */ }
    }
  }, [])

  const handlePrint = () => window.print()

  if (!data) {
    return (
      <main className="min-h-screen bg-fort-bg flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-xl text-fort-charcoal mb-4">No analysis data found.</p>
          <Link href="/askmultiplex/app/new" className="font-sans text-sm text-fort-gold hover:underline cursor-pointer">
            Start a new analysis
          </Link>
        </div>
      </main>
    )
  }

  const a = analyse(data)
  const v = verdictConfig[a.verdict]

  return (
    <main className="min-h-screen bg-fort-bg print:bg-white">
      {/* Top bar — hidden on print */}
      <header className="bg-fort-charcoal border-b border-white/5 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/askmultiplex/app" className="font-serif text-fort-gold text-xl tracking-tight hover:opacity-80 transition-opacity">
              AskMultiPlex
            </Link>
            <span className="text-gray-500 text-sm font-sans">/ Results</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-gray-300 font-sans text-xs font-medium hover:border-white/40 hover:text-white transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              Export / Print
            </button>
            <Link
              href="/askmultiplex/app/new"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-fort-gold text-white font-sans font-semibold text-xs hover:bg-amber-600 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
            >
              New Analysis
            </Link>
          </div>
        </div>
      </header>

      <div ref={printRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* Print header */}
        <div className="hidden print:block mb-6">
          <p className="font-serif text-2xl text-fort-charcoal">AskMultiPlex — Feasibility Summary</p>
          <p className="font-sans text-sm text-fort-gray mt-1">{data.site.address || 'Property Analysis'} · Generated {new Date().toLocaleDateString('en-CA')}</p>
        </div>

        {/* Property info strip */}
        {data.site.address && (
          <div className="bg-fort-charcoal rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-serif text-white text-lg">{data.site.address}</p>
              <p className="font-sans text-gray-400 text-xs mt-0.5">
                {data.site.lotSizeSqft && `${parseInt(data.site.lotSizeSqft).toLocaleString()} sq ft · `}
                {data.site.zoning && `${data.site.zoning} · `}
                {a.totalUnits} units proposed
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold font-sans self-start sm:self-auto ${v.badge}`}>
              {a.verdict}
            </span>
          </div>
        )}

        {/* Verdict card */}
        <div className={`rounded-xl border-2 ${v.bg} ${v.border} p-6 flex gap-4`}>
          <div className="shrink-0 mt-0.5">{v.icon}</div>
          <div>
            <h2 className="font-serif text-xl text-fort-charcoal">{v.title}</h2>
            <p className="font-sans text-sm text-fort-gray mt-1 leading-relaxed">{v.body}</p>
          </div>
        </div>

        {/* Key metrics grid */}
        <div>
          <h3 className="font-sans text-xs text-fort-gold font-semibold uppercase tracking-widest mb-4">Key Metrics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <MetricCard label="Net Profit" value={fmt(a.profit)} highlight />
            <MetricCard label="Net Margin" value={fmtPct(a.marginPct)} sub="on total revenue" />
            <MetricCard label="Cash-on-Cash" value={fmtPct(a.cashOnCash)} sub={`over ${a.termMonths}mo`} />
            <MetricCard label="Equity Uplift" value={fmtPct(a.equityUplift)} sub="on equity invested" />
          </div>
        </div>

        {/* Two-column: Pro forma + ROI */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* Pro Forma */}
          <div className="bg-white rounded-xl border border-fort-charcoal/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-fort-charcoal/8">
              <h3 className="font-serif text-lg text-fort-charcoal">Pro Forma</h3>
            </div>
            <div className="px-6 py-4">
              <LineItem label="Land / Acquisition" value={fmt(a.land)} indent />
              <LineItem label="Hard Construction" value={fmt(a.hard)} indent />
              <LineItem label="Soft Costs" value={fmt(a.soft)} indent />
              <LineItem label="Contingency" value={fmt(a.contingency)} indent />
              <LineItem label="Total Project Cost" value={fmt(a.totalCost)} bold />
              <div className="my-3 border-t border-fort-charcoal/10" />
              <LineItem label="Total Revenue" value={fmt(a.totalRevenue)} bold />
              <LineItem label="Gross Profit" value={fmt(a.profit)} bold />
              <LineItem label="Margin" value={fmtPct(a.marginPct)} />
            </div>
          </div>

          {/* Returns */}
          <div className="bg-white rounded-xl border border-fort-charcoal/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-fort-charcoal/8">
              <h3 className="font-serif text-lg text-fort-charcoal">Returns & Financing</h3>
            </div>
            <div className="px-6 py-4">
              <LineItem label="Loan Amount" value={fmt(a.loanAmount)} indent />
              <LineItem label="Interest Cost" value={fmt(a.interestCost)} indent />
              <LineItem label="Equity In" value={fmt(a.equityIn)} indent />
              <LineItem label="Net Profit (after financing)" value={fmt(a.netProfit)} bold />
              <div className="my-3 border-t border-fort-charcoal/10" />
              <LineItem label="Cash-on-Cash Return" value={fmtPct(a.cashOnCash)} bold />
              <LineItem label="Equity Uplift" value={fmtPct(a.equityUplift)} />
              <LineItem label="Annualised Return" value={fmtPct(a.annualizedReturn)} />
            </div>
          </div>
        </div>

        {/* Thresholds guide */}
        <div className="bg-white rounded-xl border border-fort-charcoal/10 overflow-hidden print:hidden">
          <div className="px-6 py-4 border-b border-fort-charcoal/8">
            <h3 className="font-serif text-lg text-fort-charcoal">How to Read This</h3>
          </div>
          <div className="px-6 py-5 grid sm:grid-cols-3 gap-4">
            {[
              { verdict: 'Go', range: 'Margin ≥ 15% AND CoC ≥ 15%', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
              { verdict: 'Marginal', range: 'Margin ≥ 8% OR CoC ≥ 8%', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
              { verdict: 'No-Go', range: 'Below both thresholds', color: 'text-red-700', bg: 'bg-red-50 border-red-200' },
            ].map(t => (
              <div key={t.verdict} className={`rounded-lg border px-4 py-3 ${t.bg}`}>
                <p className={`font-sans font-semibold text-sm ${t.color}`}>{t.verdict}</p>
                <p className="font-sans text-xs text-fort-gray mt-0.5 leading-relaxed">{t.range}</p>
              </div>
            ))}
          </div>
          <div className="px-6 pb-5">
            <p className="font-sans text-xs text-fort-gray leading-relaxed">
              These thresholds are general guidelines for BC multiplex development. Actual viability depends on your specific lender requirements, holding period, exit strategy, and risk tolerance.
              Always consult a qualified real estate professional before making investment decisions.
            </p>
          </div>
        </div>

        {/* Action row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
          <Link
            href="/askmultiplex/app/new"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-fort-gold text-fort-gold font-sans font-semibold text-sm hover:bg-fort-gold hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
          >
            Adjust Assumptions
          </Link>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Export / Print Report
          </button>
          <Link
            href="/askmultiplex/app"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-fort-charcoal/20 text-fort-gray font-sans font-semibold text-sm hover:border-fort-charcoal/40 hover:text-fort-charcoal transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
          >
            Dashboard
          </Link>
        </div>

        {/* Footer note */}
        <p className="font-sans text-xs text-fort-gray text-center leading-relaxed print:mt-8">
          Generated by AskMultiPlex · Fort Property Developments · For illustrative purposes only. Not financial advice.
        </p>
      </div>
    </main>
  )
}
