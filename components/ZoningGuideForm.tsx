'use client'

import { useState } from 'react'

export default function ZoningGuideForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Zoning Guide', tags: ['zoning-guide', 'lead-magnet'] }),
      })
    } catch { /* non-blocking */ }
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-5 p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <p className="font-sans text-emerald-700 font-semibold text-sm mt-2">Guide on its way!</p>
        <p className="font-sans text-emerald-600 text-xs mt-1">Check your inbox — Dennis will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-3">
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
        {loading ? 'Sending…' : 'Send Me the Free Guide'}
      </button>
    </form>
  )
}
