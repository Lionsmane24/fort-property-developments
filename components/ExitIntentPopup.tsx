'use client'

import { useEffect, useState } from 'react'

const GHL_BOOKING_URL = 'https://link.fortpropertydevelopments.com/book-call'
const STORAGE_KEY = 'fort_exit_popup_dismissed'

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return

    let triggered = false

    const handleMouseLeave = (e: MouseEvent) => {
      if (triggered) return
      if (e.clientY <= 0) {
        triggered = true
        setOpen(true)
      }
    }

    // Also trigger on mobile after 45s of inactivity
    const timer = setTimeout(() => {
      if (!triggered && !localStorage.getItem(STORAGE_KEY)) {
        triggered = true
        setOpen(true)
      }
    }, 45000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Exit Intent Popup', tags: ['exit-intent'] }),
      })
    } catch { /* non-blocking */ }
    setSubmitted(true)
    localStorage.setItem(STORAGE_KEY, '1')
    setTimeout(dismiss, 2500)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-fort-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4 print:hidden">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        {/* Close */}
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-fort-gray hover:text-fort-charcoal transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="font-serif text-xl text-fort-charcoal mt-4">You&apos;re on the list!</h2>
            <p className="font-sans text-fort-gray text-sm mt-2">Dennis will be in touch shortly with your free BC Multiplex Zoning Guide. <a href="/zoning-guide" className="text-fort-gold hover:text-amber-600 font-semibold">View the guide →</a></p>
          </div>
        ) : (
          <>
            <p className="font-sans text-fort-gold text-xs font-semibold uppercase tracking-widest">Wait — Free Resource</p>
            <h2 className="font-serif text-2xl text-fort-charcoal mt-2">Get the Free BC Multiplex Zoning Guide</h2>
            <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">
              Before you go — grab our free guide on BC&apos;s new multiplex rules. Learn which lots qualify, what Bill 44 means for homeowners, and how to run a quick feasibility check.
            </p>
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
                className="w-full py-3 rounded-lg bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200"
              >
                Send Me the Free Guide
              </button>
            </form>
            <div className="mt-4 pt-4 border-t border-fort-charcoal/10 flex items-center justify-between">
              <p className="font-sans text-xs text-fort-gray/60">No spam. Unsubscribe anytime.</p>
              <a
                href={GHL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismiss}
                className="font-sans text-xs font-semibold text-fort-gold hover:text-amber-600 transition-colors"
              >
                Book a call instead →
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
