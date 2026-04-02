import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import RegisterInterestForm from '@/components/RegisterInterestForm'

export const metadata: Metadata = {
  title: 'Our Developments',
  description: 'Current and upcoming multiplex infill projects by Fort Property Developments in Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley.',
  openGraph: {
    title: 'Our Developments | Fort Property Developments',
    description: 'Multiplex infill projects across Metro Vancouver — register interest for early access.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}

export default function ProjectsPage() {
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
          <div className="w-16 h-[3px] bg-fort-gold mb-8" />
          <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold mb-4">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight">Our Developments</h1>
          <p className="font-sans text-gray-300 mt-6 max-w-xl text-lg leading-relaxed">
            Fort Property Developments builds 4–6 unit multiplex infill across Metro Vancouver and
            the Fraser Valley.
          </p>
        </div>
      </section>

      {/* Project cards */}
      <Section className="bg-fort-bg py-24 md:py-32">
        <FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fort Langley Multiplex card */}
            <div className="group bg-white rounded-xl overflow-hidden border border-fort-charcoal/5 hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/images/burnaby-multiplex-render.png"
                  alt="Fort Langley Multiplex — 4-unit infill architectural render"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-fort-gold/10 text-fort-gold border border-fort-gold/20">
                    Development Permit Application
                  </span>
                  <span className="font-sans text-fort-gray text-xs">2026</span>
                </div>
                <h3 className="font-serif text-xl text-fort-charcoal">Fort Langley Multiplex</h3>
                <p className="font-sans text-fort-gray text-sm mt-2">4-unit infill · Fort Langley, BC</p>
                <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">
                  Welcome to one of Fort Langley&apos;s newest boutique developments — a beautifully
                  designed 4-unit multiplex nestled in one of the Fraser Valley&apos;s most charming
                  and sought-after villages. Each home offers thoughtful, family-friendly layouts
                  with modern finishes, private entrances, and outdoor living space — all just
                  steps from Fort Langley&apos;s historic downtown, cafes, galleries, and the
                  Bedford Channel waterfront. This is village living, reimagined. Register your
                  interest today for early access to floor plans and pricing.
                </p>

                <div className="mt-5 pt-5 border-t border-fort-charcoal/5">
                  <RegisterInterestForm projectName="Fort Langley Multiplex" />
                </div>
              </div>
            </div>

            {/* Coming Soon — Under Development card 1 */}
            <div className="group bg-white rounded-xl overflow-hidden border border-fort-charcoal/5 hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden bg-fort-charcoal/5 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-fort-gold/10 border border-fort-gold/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-fort-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-serif text-fort-charcoal/40 text-sm">Render Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-fort-charcoal/5 text-fort-charcoal/50 border border-fort-charcoal/10">
                    Under Development
                  </span>
                  <span className="font-sans text-fort-gray text-xs">2026–2027</span>
                </div>
                <h3 className="font-serif text-xl text-fort-charcoal">Metro Vancouver Multiplex</h3>
                <p className="font-sans text-fort-gray text-sm mt-2">Coming soon · Metro Vancouver, BC</p>
                <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">
                  We&apos;re currently finalizing details on a new ground-oriented multiplex
                  in one of Metro Vancouver&apos;s most desirable neighbourhoods. Stay tuned
                  for location, unit count, and early access details — or register now to
                  be first in line when information is released.
                </p>
                <div className="mt-5 pt-5 border-t border-fort-charcoal/5">
                  <RegisterInterestForm projectName="Metro Vancouver Multiplex — Coming Soon" />
                </div>
              </div>
            </div>

            {/* Coming Soon — Under Development card 2 */}
            <div className="group bg-white rounded-xl overflow-hidden border border-fort-charcoal/5 hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden bg-fort-charcoal/5 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-fort-gold/10 border border-fort-gold/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-fort-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-serif text-fort-charcoal/40 text-sm">Render Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-fort-charcoal/5 text-fort-charcoal/50 border border-fort-charcoal/10">
                    Under Development
                  </span>
                  <span className="font-sans text-fort-gray text-xs">2027</span>
                </div>
                <h3 className="font-serif text-xl text-fort-charcoal">Fraser Valley Multiplex</h3>
                <p className="font-sans text-fort-gray text-sm mt-2">Coming soon · Fraser Valley, BC</p>
                <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">
                  Another exciting project is taking shape in the Fraser Valley. We&apos;re
                  working through early-stage planning on a thoughtfully designed multiplex
                  that will bring modern, attainable housing to one of BC&apos;s fastest-growing
                  communities. Register your interest to receive updates as this project
                  moves forward.
                </p>
                <div className="mt-5 pt-5 border-t border-fort-charcoal/5">
                  <RegisterInterestForm projectName="Fraser Valley Multiplex — Coming Soon" />
                </div>
              </div>
            </div>
          </div>

          {/* More projects + early access */}
          <div className="mt-16 pt-16 border-t border-fort-charcoal/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-[3px] bg-fort-gold mb-6" />
                <h3 className="font-serif text-2xl md:text-3xl text-fort-charcoal">More Projects Coming Soon</h3>
                <p className="font-sans text-fort-gray mt-4 max-w-md leading-relaxed">
                  Curious about zoning, unit counts, or projected returns? Run your lot through the
                  calculator or book 20 minutes with Dennis for a personal conversation.
                </p>
                <div className="flex gap-3 mt-8 flex-wrap">
                  <Button href="/askmultiplex/app">Try the Calculator</Button>
                  <Button href="https://api.leadconnectorhq.com/widget/booking/0Yp28PYUWW2jnkHDddK8" variant="secondary">Talk to Dennis</Button>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-fort-charcoal/5 p-8 text-center">
                <h4 className="font-serif text-xl text-fort-charcoal">Get Early Access</h4>
                <p className="font-sans text-fort-gray text-sm mt-2 max-w-sm mx-auto">
                  Register to hear about new projects first.
                </p>
                <div className="mt-5">
                  <RegisterInterestForm projectName="General — Early Access" />
                </div>
                <p className="font-sans text-fort-gray/60 text-xs mt-4">
                  No deposit. No commitment. Register Interest only — per BC real estate regulations.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </main>
  )
}
