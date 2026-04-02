import type { Metadata } from 'next'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thanks for reaching out to Fort Property Developments.',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-fort-bg">
      <div className="max-w-lg mx-auto px-6 text-center py-32">
        {/* Checkmark */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>

        <div className="w-12 h-[3px] bg-fort-gold mx-auto mt-8 mb-6" />
        <p className="font-sans text-fort-gold text-xs font-semibold uppercase tracking-[0.25em]">
          Message Received
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-fort-charcoal mt-3 tracking-tight">
          Thanks for Reaching Out
        </h1>
        <p className="font-sans text-fort-gray mt-6 leading-relaxed max-w-md mx-auto">
          Dennis will review your message and get back to you within one business day. If your inquiry
          is time-sensitive, feel free to call directly at{' '}
          <a href="tel:+16042906046" className="text-fort-gold hover:text-amber-600 font-semibold transition-colors">
            604-290-6046
          </a>.
        </p>

        <div className="mt-12 p-8 bg-white rounded-xl border border-fort-charcoal/5 text-left hover:shadow-lg transition-shadow duration-300">
          <div className="w-10 h-[3px] bg-fort-gold mb-5" />
          <h2 className="font-serif text-xl text-fort-charcoal">
            While You Wait
          </h2>
          <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">
            Run your lot through the feasibility calculator or explore our zoning guide for BC property owners.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/askmultiplex/app">Try the Calculator</Button>
            <Button href="/zoning-guide" variant="secondary">Zoning Guide</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
