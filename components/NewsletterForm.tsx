'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Blog Newsletter', tags: ['newsletter'] }),
      })
    } catch { /* non-blocking */ }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="font-sans text-sm text-emerald-400 font-semibold">
        You&apos;re subscribed! Watch your inbox for Fort Insights.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
      <input
        type="email"
        placeholder="Your email address"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-1 md:w-64 px-4 py-3 rounded-lg font-sans text-sm text-fort-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fort-gold/50"
      />
      <button
        type="submit"
        className="px-5 py-3 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}
