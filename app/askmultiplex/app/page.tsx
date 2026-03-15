import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard — AskMultiPlex',
  description: 'Your multiplex feasibility analyses',
}

const mockAnalyses = [
  {
    id: '1',
    address: '4521 Oak St, Vancouver, BC',
    date: 'Mar 10, 2026',
    units: 6,
    margin: 18.4,
    verdict: 'Go' as const,
  },
  {
    id: '2',
    address: '882 Kingsway, Burnaby, BC',
    date: 'Mar 5, 2026',
    units: 4,
    margin: 10.1,
    verdict: 'Marginal' as const,
  },
  {
    id: '3',
    address: '1104 Austin Ave, Coquitlam, BC',
    date: 'Feb 28, 2026',
    units: 4,
    margin: 5.2,
    verdict: 'No-Go' as const,
  },
]

const verdictStyles: Record<string, string> = {
  Go: 'bg-emerald-100 text-emerald-800',
  Marginal: 'bg-amber-100 text-amber-800',
  'No-Go': 'bg-red-100 text-red-800',
}

const stats = [
  { label: 'Analyses Run', value: '3' },
  { label: 'Avg Net Margin', value: '11.2%' },
  { label: 'Deals Viable', value: '1 of 3' },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-fort-bg">
      {/* Top bar */}
      <header className="bg-fort-charcoal border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-fort-gold text-xl tracking-tight">AskMultiPlex</span>
            <span className="hidden sm:block text-gray-500 text-sm font-sans">/ Dashboard</span>
          </div>
          <Link
            href="/askmultiplex/app/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
            New Analysis
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-white rounded-xl border border-fort-charcoal/10 p-6 text-center">
              <p className="font-serif text-3xl text-fort-charcoal">{value}</p>
              <p className="font-sans text-fort-gray text-xs mt-1 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>

        {/* Analyses list */}
        <div className="bg-white rounded-xl border border-fort-charcoal/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-fort-charcoal/8 flex items-center justify-between">
            <h2 className="font-serif text-lg text-fort-charcoal">Recent Analyses</h2>
            <span className="font-sans text-xs text-fort-gray">{mockAnalyses.length} total</span>
          </div>

          <ul>
            {mockAnalyses.map((a, i) => (
              <li
                key={a.id}
                className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-fort-bg transition-colors duration-150 cursor-pointer ${i < mockAnalyses.length - 1 ? 'border-b border-fort-charcoal/8' : ''}`}
              >
                <div className="flex items-start gap-4">
                  {/* Property icon */}
                  <div className="mt-0.5 w-9 h-9 rounded-lg bg-fort-blue/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3A6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-fort-charcoal text-sm">{a.address}</p>
                    <p className="font-sans text-fort-gray text-xs mt-0.5">{a.date} · {a.units} units · {a.margin}% margin</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:shrink-0">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold font-sans ${verdictStyles[a.verdict]}`}>
                    {a.verdict}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Empty-state CTA */}
        <div className="mt-8 rounded-xl border-2 border-dashed border-fort-charcoal/20 p-10 text-center">
          <div className="w-12 h-12 rounded-full bg-fort-gold/15 flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4973A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <h3 className="font-serif text-xl text-fort-charcoal">Run a New Feasibility Analysis</h3>
          <p className="font-sans text-fort-gray text-sm mt-2 max-w-xs mx-auto">
            Enter your site details and get a full pro forma in under 5 minutes.
          </p>
          <Link
            href="/askmultiplex/app/new"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
          >
            Start Analysis
          </Link>
        </div>
      </div>
    </main>
  )
}
