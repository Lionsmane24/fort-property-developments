import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import ZoningGuideForm from '@/components/ZoningGuideForm'

export const metadata: Metadata = {
  title: 'Free BC Multiplex Zoning Guide',
  description: "Download Fort's free guide to BC's new multiplex zoning rules — what Bill 44 means for your lot, eligibility criteria, and how to run a quick feasibility check.",
  openGraph: {
    title: 'Free BC Multiplex Zoning Guide | Fort Property Developments',
    description: "Learn which lots qualify under BC's new small-scale multi-unit housing rules.",
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}

const guideTopics = [
  { heading: "What Bill 44 Actually Changes", body: "A plain-English breakdown of BC's small-scale multi-unit housing rules — what's new, what's not, and which municipalities are affected." },
  { heading: "Lot Eligibility Criteria", body: "The 6 factors that determine whether your single-family lot can support a 3–6 unit multiplex: lot size, FSR, setbacks, topography, zoning overlays, and boulevard trees." },
  { heading: "The Quick Feasibility Formula", body: "The back-of-napkin math Fort uses to pre-screen lots in under 10 minutes — before spending a dollar on consultants." },
  { heading: "Burnaby & Surrey Deep Dive", body: "How each municipality has implemented the new provincial rules, where the opportunities are, and what to watch out for." },
  { heading: "Common Mistakes to Avoid", body: "The 5 errors that trip up first-time multiplex owners — and how to sidestep each one before you commit to a site." },
]

export default function ZoningGuidePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-fort-charcoal pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-[3px] bg-fort-gold mb-8" />
              <p className="font-sans text-fort-gold text-sm font-semibold uppercase tracking-[0.25em]">
                Free Resource
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-white mt-3 leading-tight">
                BC Multiplex Zoning Guide
              </h1>
              <p className="font-sans text-gray-300 mt-5 leading-relaxed">
                Everything a BC property owner needs to know about the new multiplex rules — which
                lots qualify, how Bill 44 changed the game, and how to run your own quick feasibility
                check before calling a consultant.
              </p>
              <ul className="mt-6 space-y-2">
                {['Lot eligibility checklist', 'Bill 44 plain-English summary', 'Quick feasibility formula', 'Municipality-by-municipality breakdown'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-sans text-gray-300 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h2 className="font-serif text-2xl text-fort-charcoal">Get the Free Guide</h2>
              <p className="font-sans text-fort-gray text-sm mt-2">
                Enter your email and we&apos;ll send it straight to your inbox.
              </p>
              <ZoningGuideForm />
              <p className="font-sans text-xs text-gray-400 mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-fort-bg py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold">
              Guide Contents
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-fort-charcoal mt-3 tracking-tight">What&apos;s Inside</h2>
          </div>
          <p className="font-sans text-fort-gray text-center -mt-12 mb-12 max-w-xl mx-auto">
            5 chapters written by a BC multiplex developer — not a lawyer, not a consultant,
            someone who actually runs these numbers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideTopics.map((topic, i) => (
              <div key={i} className="group relative bg-white rounded-xl p-7 border border-fort-charcoal/5 hover:border-fort-gold/30 hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-fort-gold/15 flex items-center justify-center mb-4">
                  <span className="font-sans text-fort-gold font-bold text-sm">{i + 1}</span>
                </div>
                <h3 className="font-serif text-lg text-fort-charcoal">{topic.heading}</h3>
                <p className="font-sans text-fort-gray text-sm mt-2 leading-relaxed">{topic.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-fort-charcoal py-24 md:py-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-12 h-[3px] bg-fort-gold mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">Ready to Go Beyond the Guide?</h2>
          <p className="font-sans text-gray-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Run your lot through the calculator or book 20 minutes with Dennis for a personal walkthrough.
          </p>
          <div className="flex gap-4 mt-10 justify-center flex-wrap">
            <Button href="/askmultiplex/app">Try the Calculator</Button>
            <Button href="/contact" variant="secondary">Get in Touch</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
