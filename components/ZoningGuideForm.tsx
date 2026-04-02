'use client'

import { useState } from 'react'

export default function ZoningGuideForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [downloading, setDownloading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          source: 'Zoning Guide',
          tags: ['zoning-guide', 'lead-magnet'],
        }),
      })
    } catch { /* non-blocking */ }
    setLoading(false)
    setSubmitted(true)
  }

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const { default: generateZoningGuide } = await import('@/lib/generateZoningGuide')
      await generateZoningGuide()
    } catch (err) {
      console.error('PDF generation failed:', err)
    }
    setDownloading(false)
  }

  if (submitted) {
    return (
      <div className="mt-5 space-y-4">
        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <p className="font-sans text-emerald-700 font-semibold text-sm mt-2">You&apos;re in!</p>
          <p className="font-sans text-emerald-600 text-xs mt-1">Download your guide below. Dennis will also follow up personally.</p>
        </div>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full py-3 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {downloading ? 'Generating PDF...' : 'Download Your Free Guide (PDF)'}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-3">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-fort-charcoal/20 font-sans text-sm text-fort-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fort-gold/50 focus:border-fort-gold"
      />
      <input
        type="email"
        placeholder="Your email address"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-fort-charcoal/20 font-sans text-sm text-fort-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fort-gold/50 focus:border-fort-gold"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send Me the Free Guide'}
      </button>
    </form>
  )
}
