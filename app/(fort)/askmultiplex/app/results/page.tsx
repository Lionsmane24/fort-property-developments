'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import jsPDF from 'jspdf'
import QRCode from 'qrcode'

const GHL_BOOKING_URL = 'https://link.fortpropertydevelopments.com/book-call'

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
    designCosts: string
    developerFeePct: string
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
  design: number
  devFee: number
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
  const design = parseFloat(data.costs.designCosts) || 0
  const devFeePct = parseFloat(data.costs.developerFeePct) || 0

  const hard = gfa * hardPsf
  const soft = (land + hard) * (softPct / 100)
  const contingency = hard * (contingencyPct / 100)
  const devFee = (land + hard + soft + contingency + design) * (devFeePct / 100)
  const totalCost = land + hard + soft + contingency + design + devFee

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
    land, hard, soft, contingency, design, devFee, totalCost,
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

// ─── PDF Generation ──────────────────────────────────────────────────────────

async function generatePDF(data: FormData, a: Analysis) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'letter' })
  const W = 215.9 // letter width mm
  const margin = 18
  const colW = (W - margin * 2 - 8) / 2
  let y = margin

  // Brand colors
  const charcoal: [number, number, number] = [27, 42, 68]
  const gold: [number, number, number] = [196, 151, 58]
  const gray: [number, number, number] = [55, 65, 81]
  const lightBg: [number, number, number] = [248, 246, 241]
  const white: [number, number, number] = [255, 255, 255]

  const verdictColors: Record<string, { bg: [number, number, number]; text: [number, number, number] }> = {
    Go: { bg: [220, 252, 231], text: [5, 150, 105] },
    Marginal: { bg: [254, 243, 199], text: [217, 119, 6] },
    'No-Go': { bg: [254, 226, 226], text: [220, 38, 38] },
  }

  const verdictMessages: Record<string, string> = {
    Go: 'Deal looks viable — margins and returns meet typical developer thresholds.',
    Marginal: 'Returns are below target — explore ways to reduce costs or increase revenue.',
    'No-Go': 'Deal does not pencil at current assumptions — revisit land price or unit mix.',
  }

  // Helper: horizontal rule
  function hr() {
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(0.3)
    doc.line(margin, y, W - margin, y)
    y += 4
  }

  // Helper: section header
  function sectionHeader(text: string) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7)
    doc.setTextColor(...gold)
    doc.text(text.toUpperCase(), margin, y)
    y += 5
  }

  // Helper: line item row
  function lineItem(label: string, value: string, bold = false, x = margin, w = colW) {
    doc.setFont('helvetica', bold ? 'bold' : 'normal')
    doc.setFontSize(9)
    doc.setTextColor(...(bold ? charcoal : gray))
    doc.text(label, x + 2, y)
    doc.text(value, x + w - 2, y, { align: 'right' })
    y += 5
  }

  // ── Header: Logo + Title ──
  doc.setFillColor(...charcoal)
  doc.rect(0, 0, W, 28, 'F')

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(22)
  doc.setTextColor(...white)
  doc.text('Fort', margin, 14)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6)
  doc.setTextColor(...gold)
  doc.text('PROPERTY  DEVELOPMENTS', margin, 20)

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...white)
  doc.text('Feasibility Summary', W - margin, 12, { align: 'right' })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(180, 180, 190)
  doc.text('fortpropertydevelopments.com', W - margin, 19, { align: 'right' })

  y = 36

  // ── Property Info ──
  sectionHeader('Property Details')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...charcoal)
  doc.text(data.site.address || 'Property Analysis', margin, y)
  y += 5

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...gray)
  const details = [
    data.site.lotSizeSqft ? `${parseInt(data.site.lotSizeSqft).toLocaleString()} sq ft` : '',
    data.site.zoning || '',
    `${a.totalUnits} units proposed`,
  ].filter(Boolean).join('  ·  ')
  doc.text(details, margin, y)
  y += 3

  doc.setFontSize(8)
  doc.text(`Generated ${new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}`, margin, y + 3)
  y += 8

  hr()

  // ── Verdict ──
  const vc = verdictColors[a.verdict]
  doc.setFillColor(...vc.bg)
  doc.roundedRect(margin, y, W - margin * 2, 14, 2, 2, 'F')
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...vc.text)
  doc.text(a.verdict.toUpperCase(), margin + 5, y + 6)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...gray)
  doc.text(verdictMessages[a.verdict], margin + 5, y + 11)
  y += 20

  // ── Key Metrics (2x2) ──
  sectionHeader('Key Metrics')
  const metricW = (W - margin * 2 - 6) / 4
  const metrics = [
    { label: 'Net Profit', value: fmt(a.profit) },
    { label: 'Net Margin', value: fmtPct(a.marginPct) },
    { label: 'Cash-on-Cash', value: fmtPct(a.cashOnCash) },
    { label: 'Equity Uplift', value: fmtPct(a.equityUplift) },
  ]
  metrics.forEach((m, i) => {
    const mx = margin + i * (metricW + 2)
    doc.setFillColor(...lightBg)
    doc.roundedRect(mx, y, metricW, 16, 1.5, 1.5, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    doc.setTextColor(...gray)
    doc.text(m.label, mx + 3, y + 5)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.setTextColor(...charcoal)
    doc.text(m.value, mx + 3, y + 12)
  })
  y += 22

  hr()

  // ── Two-column: Pro Forma + Returns ──
  const colX1 = margin
  const colX2 = margin + colW + 8
  const savedY = y

  // Left column: Pro Forma
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setTextColor(...gold)
  doc.text('PRO FORMA', colX1, y)
  y += 5

  lineItem('Land / Acquisition', fmt(a.land), false, colX1, colW)
  lineItem('Hard Construction', fmt(a.hard), false, colX1, colW)
  lineItem('Soft Costs', fmt(a.soft), false, colX1, colW)
  lineItem('Contingency', fmt(a.contingency), false, colX1, colW)
  lineItem('Design Costs', fmt(a.design), false, colX1, colW)
  lineItem('Developer Fee', fmt(a.devFee), false, colX1, colW)

  // Divider
  doc.setDrawColor(220, 220, 220)
  doc.setLineWidth(0.2)
  doc.line(colX1, y, colX1 + colW, y)
  y += 3

  lineItem('Total Project Cost', fmt(a.totalCost), true, colX1, colW)
  lineItem('Total Revenue', fmt(a.totalRevenue), true, colX1, colW)
  lineItem('Gross Profit', fmt(a.profit), true, colX1, colW)
  lineItem('Margin', fmtPct(a.marginPct), false, colX1, colW)

  const leftEnd = y

  // Right column: Returns
  y = savedY
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setTextColor(...gold)
  doc.text('RETURNS & FINANCING', colX2, y)
  y += 5

  lineItem('Loan Amount', fmt(a.loanAmount), false, colX2, colW)
  lineItem('Interest Cost', fmt(a.interestCost), false, colX2, colW)
  lineItem('Equity In', fmt(a.equityIn), false, colX2, colW)

  doc.setDrawColor(220, 220, 220)
  doc.setLineWidth(0.2)
  doc.line(colX2, y, colX2 + colW, y)
  y += 3

  lineItem('Net Profit (after financing)', fmt(a.netProfit), true, colX2, colW)
  lineItem('Cash-on-Cash Return', fmtPct(a.cashOnCash), true, colX2, colW)
  lineItem('Equity Uplift', fmtPct(a.equityUplift), false, colX2, colW)
  lineItem('Annualised Return', fmtPct(a.annualizedReturn), false, colX2, colW)

  y = Math.max(leftEnd, y) + 4
  hr()

  // ── Footer: Contact + QR Code ──
  doc.setFillColor(...charcoal)
  doc.rect(0, 252, W, 28, 'F')

  // QR code — Book a 15-min call with Dennis
  try {
    const qrDataUrl = await QRCode.toDataURL(GHL_BOOKING_URL, {
      width: 200,
      margin: 1,
      color: { dark: '#1B2A44', light: '#FFFFFF' },
    })
    doc.addImage(qrDataUrl, 'PNG', W - margin - 20, 254, 20, 20)
  } catch { /* QR generation failed — skip silently */ }

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(...white)
  doc.text('Fort Property Developments', margin, 261)

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(180, 180, 190)
  doc.text('Dennis Donovan  ·  Dennis@fortpropertydevelopment.com  ·  604-290-6046', margin, 267)

  doc.setFontSize(7)
  doc.setTextColor(...gold)
  doc.text('Scan to book a free 15-min call with Dennis', margin, 273)

  doc.setFontSize(6.5)
  doc.setTextColor(140, 140, 150)
  doc.text('For illustrative purposes only. Not financial advice. Always consult a qualified professional.', W / 2, 278, { align: 'center' })

  // Save
  const filename = data.site.address
    ? `Fort-Feasibility-${data.site.address.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 40)}.pdf`
    : 'Fort-Feasibility-Summary.pdf'
  doc.save(filename)
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

// ─── Email Gate ───────────────────────────────────────────────────────────────

function EmailGate({ onUnlock }: { onUnlock: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source: 'Feasibility Calculator', tags: ['calculator-lead'] }),
      })
    } catch { /* non-blocking — still unlock */ }
    localStorage.setItem('askMultiplexEmailGate', '1')
    setSubmitting(false)
    onUnlock()
  }

  return (
    <div className="fixed inset-0 z-50 bg-fort-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <p className="font-sans text-fort-gold text-xs font-semibold uppercase tracking-widest">Your Report is Ready</p>
        <h2 className="font-serif text-2xl text-fort-charcoal mt-2">Get Your Full Feasibility Results</h2>
        <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">
          Enter your details below to unlock your full report and receive a free copy by email. A Fort advisor will also be in touch to walk you through the numbers.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-fort-charcoal/20 font-sans text-sm text-fort-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fort-gold/50 focus:border-fort-gold"
          />
          <input
            type="email"
            placeholder="Your email address *"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-fort-charcoal/20 font-sans text-sm text-fort-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fort-gold/50 focus:border-fort-gold"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 disabled:opacity-60"
          >
            {submitting ? 'Sending…' : 'Unlock My Report'}
          </button>
        </form>
        <button
          type="button"
          onClick={() => { localStorage.setItem('askMultiplexEmailGate', '1'); onUnlock() }}
          className="mt-4 w-full text-center font-sans text-xs text-fort-gray hover:text-fort-charcoal transition-colors cursor-pointer"
        >
          Skip — view without saving
        </button>
        <p className="font-sans text-xs text-fort-gray/60 text-center mt-3">
          No spam. Unsubscribe anytime. Your data is only used to follow up on your analysis.
        </p>
      </div>
    </div>
  )
}

// ─── Main results page ─────────────────────────────────────────────────────────

export default function ResultsPage() {
  const [data, setData] = useState<FormData | null>(null)
  const [gateOpen, setGateOpen] = useState(false)
  const printRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const raw = localStorage.getItem('askMultiplexAnalysis')
    if (raw) {
      try { setData(JSON.parse(raw)) } catch { /* ignore */ }
    }
    const gateCleared = localStorage.getItem('askMultiplexEmailGate')
    if (!gateCleared) setGateOpen(true)
  }, [])

  const handlePrint = () => window.print()
  const handlePDF = async () => {
    if (!data) return
    const a = analyse(data)
    await generatePDF(data, a)
    // Send feasibility summary to GHL as a note on the lead
    try {
      await fetch('/api/capture-lead-note', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: data.site.address || 'Unknown',
          verdict: a.verdict,
          totalCost: Math.round(a.totalCost),
          totalRevenue: Math.round(a.totalRevenue),
          profit: Math.round(a.profit),
          marginPct: a.marginPct.toFixed(1),
          cashOnCash: a.cashOnCash.toFixed(1),
          equityUplift: a.equityUplift.toFixed(1),
          totalUnits: a.totalUnits,
          netProfit: Math.round(a.netProfit),
        }),
      })
    } catch { /* non-blocking */ }
  }

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
      {gateOpen && <EmailGate onUnlock={() => setGateOpen(false)} />}
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
              onClick={handlePDF}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-gray-300 font-sans text-xs font-medium hover:border-white/40 hover:text-white transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              Download PDF
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
              <LineItem label="Design Costs" value={fmt(a.design)} indent />
              <LineItem label="Developer Fee" value={fmt(a.devFee)} indent />
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

        {/* Book a Call CTA */}
        <div className="bg-fort-charcoal rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div>
            <p className="font-serif text-white text-lg">Want a free expert review of these numbers?</p>
            <p className="font-sans text-gray-400 text-sm mt-1">Book a 20-minute call with Dennis — no obligation, just clarity on your deal.</p>
          </div>
          <a
            href={GHL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200"
          >
            Ask Dennis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          </a>
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
            onClick={handlePDF}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Download PDF Report
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
