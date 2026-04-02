'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'AskMultiPlex Waitlist',
          tags: ['askmultiplex-waitlist'],
        }),
      })
    } catch { /* non-blocking */ }
    setSubmitting(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="mt-10 max-w-md mx-auto">
        <p className="font-sans text-fort-gold font-semibold text-sm">
          You&apos;re on the list! We&apos;ll be in touch when early access opens.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded font-sans text-sm text-fort-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fort-gold"
      />
      <button
        type="submit"
        disabled={submitting}
        className="px-6 py-3 rounded bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2 whitespace-nowrap disabled:opacity-60"
      >
        {submitting ? 'Joining...' : 'Join Waitlist'}
      </button>
    </form>
  )
}
