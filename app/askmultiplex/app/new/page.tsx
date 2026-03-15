'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface SiteDetails {
  address: string
  lotSizeSqft: string
  zoning: string
  currentUse: string
  proposedUnits: string
}

interface CostInputs {
  landValue: string
  hardCostPerSqft: string
  grossFloorAreaSqft: string
  softCostPct: string
  contingencyPct: string
}

interface RevenueInputs {
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

interface FinancingInputs {
  ltvPct: string
  interestRatePct: string
  termMonths: string
  equityIn: string
}

interface FormData {
  site: SiteDetails
  costs: CostInputs
  revenue: RevenueInputs
  financing: FinancingInputs
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STEPS = [
  { num: 1, label: 'Site Details' },
  { num: 2, label: 'Cost Inputs' },
  { num: 3, label: 'Revenue' },
  { num: 4, label: 'Financing' },
]

const ZONING_OPTIONS = [
  'RS-1 (Single Family)',
  'RS-2 (Single Family)',
  'RT-5 (Duplex/Multiplex)',
  'RT-10 (Multiplex)',
  'RM-1 (Multiple Family)',
  'C-1 (Neighbourhood Commercial)',
  'CD (Comprehensive Development)',
  'Other',
]

const CURRENT_USE_OPTIONS = [
  'Single Family Home',
  'Duplex',
  'Vacant Land',
  'Commercial',
  'Mixed Use',
  'Other',
]

// ─── Field helpers ─────────────────────────────────────────────────────────────

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-sans text-sm font-medium text-fort-charcoal mb-1">
        {label}
        {hint && <span className="ml-1 text-fort-gray font-normal text-xs">({hint})</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls =
  'w-full px-3 py-2.5 rounded-lg border border-fort-charcoal/20 font-sans text-sm text-fort-charcoal bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fort-gold/50 focus:border-fort-gold transition-colors duration-150'

const selectCls =
  'w-full px-3 py-2.5 rounded-lg border border-fort-charcoal/20 font-sans text-sm text-fort-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-fort-gold/50 focus:border-fort-gold transition-colors duration-150 cursor-pointer'

// ─── Step components ───────────────────────────────────────────────────────────

function StepSiteDetails({ data, onChange }: { data: SiteDetails; onChange: (d: SiteDetails) => void }) {
  const set = (key: keyof SiteDetails) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    onChange({ ...data, [key]: e.target.value })

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="sm:col-span-2">
        <Field label="Property Address">
          <input className={inputCls} type="text" value={data.address} onChange={set('address')} placeholder="e.g. 4521 Oak St, Vancouver, BC" />
        </Field>
      </div>
      <Field label="Lot Size" hint="sq ft">
        <input className={inputCls} type="number" min="0" value={data.lotSizeSqft} onChange={set('lotSizeSqft')} placeholder="e.g. 6000" />
      </Field>
      <Field label="Proposed Units">
        <input className={inputCls} type="number" min="1" max="12" value={data.proposedUnits} onChange={set('proposedUnits')} placeholder="e.g. 6" />
      </Field>
      <Field label="Current Zoning">
        <select className={selectCls} value={data.zoning} onChange={set('zoning')}>
          <option value="">Select zoning…</option>
          {ZONING_OPTIONS.map(z => <option key={z} value={z}>{z}</option>)}
        </select>
      </Field>
      <Field label="Current Use">
        <select className={selectCls} value={data.currentUse} onChange={set('currentUse')}>
          <option value="">Select current use…</option>
          {CURRENT_USE_OPTIONS.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </Field>
    </div>
  )
}

function StepCostInputs({ data, onChange }: { data: CostInputs; onChange: (d: CostInputs) => void }) {
  const set = (key: keyof CostInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...data, [key]: e.target.value })

  const land = parseFloat(data.landValue) || 0
  const gfa = parseFloat(data.grossFloorAreaSqft) || 0
  const hardPsf = parseFloat(data.hardCostPerSqft) || 0
  const softPct = parseFloat(data.softCostPct) || 0
  const contingencyPct = parseFloat(data.contingencyPct) || 0
  const hard = gfa * hardPsf
  const soft = (land + hard) * (softPct / 100)
  const contingency = hard * (contingencyPct / 100)
  const total = land + hard + soft + contingency

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <Field label="Land / Purchase Price" hint="$">
        <input className={inputCls} type="number" min="0" value={data.landValue} onChange={set('landValue')} placeholder="e.g. 1800000" />
      </Field>
      <Field label="Gross Floor Area" hint="sq ft">
        <input className={inputCls} type="number" min="0" value={data.grossFloorAreaSqft} onChange={set('grossFloorAreaSqft')} placeholder="e.g. 5400" />
      </Field>
      <Field label="Hard Cost" hint="$/sq ft">
        <input className={inputCls} type="number" min="0" value={data.hardCostPerSqft} onChange={set('hardCostPerSqft')} placeholder="e.g. 325" />
      </Field>
      <Field label="Soft Costs" hint="% of land + hard">
        <input className={inputCls} type="number" min="0" max="100" step="0.5" value={data.softCostPct} onChange={set('softCostPct')} placeholder="e.g. 15" />
      </Field>
      <Field label="Contingency" hint="% of hard cost">
        <input className={inputCls} type="number" min="0" max="100" step="0.5" value={data.contingencyPct} onChange={set('contingencyPct')} placeholder="e.g. 10" />
      </Field>

      {/* Live cost preview */}
      {total > 0 && (
        <div className="sm:col-span-2 rounded-lg bg-fort-blue/5 border border-fort-blue/15 p-4">
          <p className="font-sans text-xs font-semibold text-fort-blue uppercase tracking-wider mb-3">Cost Preview</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Land', val: land },
              { label: 'Hard', val: hard },
              { label: 'Soft', val: soft },
              { label: 'Total', val: total },
            ].map(({ label, val }) => (
              <div key={label}>
                <p className="font-sans text-xs text-fort-gray">{label}</p>
                <p className={`font-sans font-semibold text-sm ${label === 'Total' ? 'text-fort-charcoal' : 'text-fort-gray'}`}>
                  ${val > 0 ? val.toLocaleString('en-CA', { maximumFractionDigits: 0 }) : '—'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function StepRevenue({ data, onChange }: { data: RevenueInputs; onChange: (d: RevenueInputs) => void }) {
  const set = (key: keyof RevenueInputs) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    onChange({ ...data, [key]: e.target.value })

  const setMode = (mode: 'per_unit' | 'per_sqft') => onChange({ ...data, priceMode: mode })

  const unitTypes = [
    { key: 'studios', priceKey: 'studioPricePer', label: 'Studio', sqft: 420 },
    { key: 'oneBeds', priceKey: 'oneBedPricePer', label: '1 Bedroom', sqft: 580 },
    { key: 'twoBeds', priceKey: 'twoBedPricePer', label: '2 Bedroom', sqft: 820 },
    { key: 'threeBeds', priceKey: 'threeBedPricePer', label: '3 Bedroom', sqft: 1050 },
  ] as const

  const avgSqft = parseFloat(data.avgUnitSqft) || 0

  return (
    <div className="space-y-5">
      {/* Price mode toggle */}
      <div className="flex items-center gap-1 p-1 bg-fort-charcoal/5 rounded-lg w-fit">
        {(['per_unit', 'per_sqft'] as const).map(m => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`px-4 py-1.5 rounded-md font-sans text-xs font-semibold transition-colors duration-150 cursor-pointer ${
              data.priceMode === m
                ? 'bg-white text-fort-charcoal shadow-sm'
                : 'text-fort-gray hover:text-fort-charcoal'
            }`}
          >
            {m === 'per_unit' ? 'Price per Unit' : 'Price per Sq Ft'}
          </button>
        ))}
      </div>

      {data.priceMode === 'per_sqft' && (
        <Field label="Avg Unit Size" hint="sq ft (used for per-sqft pricing)">
          <input className={inputCls} type="number" min="0" value={data.avgUnitSqft} onChange={set('avgUnitSqft')} placeholder="e.g. 700" />
        </Field>
      )}

      {/* Unit mix table */}
      <div className="rounded-lg border border-fort-charcoal/15 overflow-hidden">
        <div className="grid grid-cols-3 px-4 py-2 bg-fort-charcoal/5 border-b border-fort-charcoal/10">
          <p className="font-sans text-xs font-semibold text-fort-gray uppercase tracking-wider">Unit Type</p>
          <p className="font-sans text-xs font-semibold text-fort-gray uppercase tracking-wider text-center"># Units</p>
          <p className="font-sans text-xs font-semibold text-fort-gray uppercase tracking-wider text-right">
            {data.priceMode === 'per_unit' ? 'Price / Unit ($)' : 'Price / Sq Ft ($)'}
          </p>
        </div>
        {unitTypes.map(({ key, priceKey, label }) => (
          <div key={key} className="grid grid-cols-3 items-center px-4 py-3 border-b border-fort-charcoal/8 last:border-0">
            <p className="font-sans text-sm text-fort-charcoal">{label}</p>
            <div className="px-2">
              <input
                className={`${inputCls} text-center`}
                type="number"
                min="0"
                max="20"
                value={(data as unknown as Record<string, string>)[key]}
                onChange={set(key)}
                placeholder="0"
              />
            </div>
            <div>
              <input
                className={`${inputCls} text-right`}
                type="number"
                min="0"
                value={(data as unknown as Record<string, string>)[priceKey]}
                onChange={set(priceKey)}
                placeholder={data.priceMode === 'per_unit' ? 'e.g. 850000' : 'e.g. 1100'}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StepFinancing({ data, onChange }: { data: FinancingInputs; onChange: (d: FinancingInputs) => void }) {
  const set = (key: keyof FinancingInputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...data, [key]: e.target.value })

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <Field label="Loan-to-Cost (LTC)" hint="%">
        <input className={inputCls} type="number" min="0" max="85" step="1" value={data.ltvPct} onChange={set('ltvPct')} placeholder="e.g. 65" />
      </Field>
      <Field label="Interest Rate" hint="% per annum">
        <input className={inputCls} type="number" min="0" max="25" step="0.25" value={data.interestRatePct} onChange={set('interestRatePct')} placeholder="e.g. 7.5" />
      </Field>
      <Field label="Loan Term" hint="months">
        <input className={inputCls} type="number" min="1" max="60" value={data.termMonths} onChange={set('termMonths')} placeholder="e.g. 24" />
      </Field>
      <Field label="Equity In" hint="$ (your cash contribution)">
        <input className={inputCls} type="number" min="0" value={data.equityIn} onChange={set('equityIn')} placeholder="e.g. 900000" />
      </Field>

      <div className="sm:col-span-2 rounded-lg bg-amber-50 border border-amber-200 p-4">
        <div className="flex gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#92400E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <p className="font-sans text-xs text-amber-900 leading-relaxed">
            <strong>BC Construction Financing Tip:</strong> Most lenders advance 65–70% LTC for
            multiplex construction. Confirm your lender&rsquo;s draw schedule and holdbacks before
            locking in your equity position.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Main wizard ───────────────────────────────────────────────────────────────

const defaultForm: FormData = {
  site: { address: '', lotSizeSqft: '', zoning: '', currentUse: '', proposedUnits: '' },
  costs: { landValue: '', hardCostPerSqft: '', grossFloorAreaSqft: '', softCostPct: '15', contingencyPct: '10' },
  revenue: { studios: '0', studioPricePer: '', oneBeds: '0', oneBedPricePer: '', twoBeds: '0', twoBedPricePer: '', threeBeds: '0', threeBedPricePer: '', priceMode: 'per_unit', avgUnitSqft: '' },
  financing: { ltvPct: '65', interestRatePct: '7.5', termMonths: '24', equityIn: '' },
}

export default function NewAnalysisPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(defaultForm)

  const isLastStep = step === 4

  const handleNext = () => {
    if (isLastStep) {
      localStorage.setItem('askMultiplexAnalysis', JSON.stringify(form))
      router.push('/askmultiplex/app/results')
    } else {
      setStep(s => s + 1)
    }
  }

  const handleBack = () => setStep(s => s - 1)

  return (
    <main className="min-h-screen bg-fort-bg">
      {/* Top bar */}
      <header className="bg-fort-charcoal border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/askmultiplex/app" className="font-serif text-fort-gold text-xl tracking-tight hover:opacity-80 transition-opacity">
              AskMultiPlex
            </Link>
            <span className="text-gray-500 text-sm font-sans">/ New Analysis</span>
          </div>
          <Link href="/askmultiplex/app" className="font-sans text-xs text-gray-400 hover:text-gray-200 transition-colors duration-150 cursor-pointer">
            Cancel
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Step indicator */}
        <nav aria-label="Progress" className="mb-10">
          <ol className="flex items-center gap-0">
            {STEPS.map((s, i) => {
              const state = s.num < step ? 'complete' : s.num === step ? 'current' : 'upcoming'
              return (
                <li key={s.num} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold font-sans transition-colors duration-200 ${
                        state === 'complete'
                          ? 'bg-fort-gold text-white'
                          : state === 'current'
                          ? 'bg-fort-charcoal text-white ring-2 ring-fort-gold ring-offset-2'
                          : 'bg-white border-2 border-fort-charcoal/20 text-fort-gray'
                      }`}
                    >
                      {state === 'complete' ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        s.num
                      )}
                    </div>
                    <span className={`font-sans text-xs hidden sm:block ${state === 'current' ? 'text-fort-charcoal font-semibold' : 'text-fort-gray'}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 mb-5 transition-colors duration-300 ${s.num < step ? 'bg-fort-gold' : 'bg-fort-charcoal/15'}`} />
                  )}
                </li>
              )
            })}
          </ol>
        </nav>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-fort-charcoal/10 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-fort-charcoal/8">
            <p className="font-sans text-xs text-fort-gold font-semibold uppercase tracking-widest">
              Step {step} of {STEPS.length}
            </p>
            <h1 className="font-serif text-2xl text-fort-charcoal mt-1">
              {STEPS[step - 1].label}
            </h1>
          </div>

          <div className="px-8 py-8">
            {step === 1 && (
              <StepSiteDetails data={form.site} onChange={site => setForm(f => ({ ...f, site }))} />
            )}
            {step === 2 && (
              <StepCostInputs data={form.costs} onChange={costs => setForm(f => ({ ...f, costs }))} />
            )}
            {step === 3 && (
              <StepRevenue data={form.revenue} onChange={revenue => setForm(f => ({ ...f, revenue }))} />
            )}
            {step === 4 && (
              <StepFinancing data={form.financing} onChange={financing => setForm(f => ({ ...f, financing }))} />
            )}
          </div>

          {/* Navigation */}
          <div className="px-8 py-5 border-t border-fort-charcoal/8 bg-fort-bg/50 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-fort-charcoal/20 font-sans text-sm text-fort-gray hover:border-fort-charcoal/40 hover:text-fort-charcoal transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2"
            >
              {isLastStep ? 'Calculate Results' : 'Continue'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Step description */}
        <p className="font-sans text-xs text-fort-gray text-center mt-6">
          {step === 1 && 'Enter the property address and basic site information to start your analysis.'}
          {step === 2 && 'Provide construction cost estimates. GFA × Hard Cost/sqft calculates your build cost.'}
          {step === 3 && 'Enter your unit mix and sale prices. This determines your total revenue.'}
          {step === 4 && 'Add your financing assumptions to calculate net returns and cash-on-cash ROI.'}
        </p>
      </div>
    </main>
  )
}
