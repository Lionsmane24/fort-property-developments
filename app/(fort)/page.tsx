import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/animations/FadeIn'
import { FadeInGroup } from '@/components/animations/FadeInGroup'

export const metadata: Metadata = {
  title: {
    absolute: 'Fort Property Developments | Multiplex Infill Developer — Metro Vancouver',
  },
  description: 'Fort Property Developments builds 4–6 unit multiplex infill in Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley.',
  openGraph: {
    title: 'Fort Property Developments | Multiplex Infill Developer — Metro Vancouver',
    description: 'Density done right — 4–6 unit multiplex infill across Metro Vancouver and the Fraser Valley.',
    images: [{ url: '/images/hero-bg-new.png', width: 1200, height: 630, alt: 'Fort Property Developments — Metro Vancouver multiplex infill' }],
    type: 'website',
  },
}

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-screen flex items-center pt-20">
        <Image
          src="/images/hero-bg-new.png"
          alt="Modern multiplex development at golden hour in Metro Vancouver"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-fort-charcoal/90 via-fort-charcoal/70 to-fort-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-fort-charcoal/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <FadeIn>
            <div className="max-w-3xl">
              {/* Gold accent line */}
              <div className="w-16 h-[3px] bg-fort-gold mb-8" />
              <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold mb-4">
                Greater Vancouver Multiplex Developer
              </p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight">
                Building the Next Generation
                <span className="block text-fort-gold">of Homes</span>
              </h1>
              <p className="font-sans text-gray-300 mt-8 max-w-lg text-lg leading-relaxed">
                4&ndash;6 unit multiplex infill across Metro Vancouver
                and the Fraser Valley &mdash; density done right.
              </p>
              <div className="flex gap-4 mt-10 flex-wrap">
                <Button href="/projects">View Our Projects</Button>
                <Button href="/contact" variant="secondary">Register Interest</Button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-12 bg-gradient-to-b from-fort-gold/60 to-transparent" />
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-fort-charcoal border-t border-fort-gold/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeInGroup className="grid grid-cols-2 md:grid-cols-4 divide-x divide-fort-gold/20">
            {[
              { stat: '4–6', label: 'Units per project' },
              { stat: 'Bill 44', label: 'BC zoning expertise' },
              { stat: '100%', label: 'Metro Vancouver focus' },
              { stat: '2026', label: 'Active development' },
            ].map(({ stat, label }) => (
              <div key={stat} className="py-8 md:py-10 px-6 text-center">
                <p className="font-serif text-3xl md:text-4xl text-fort-gold">{stat}</p>
                <p className="font-sans text-gray-400 text-xs uppercase tracking-widest mt-2">{label}</p>
              </div>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── Value propositions ── */}
      <Section className="bg-white py-24 md:py-32">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold">
              Why Fort
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-fort-charcoal mt-3 tracking-tight">
              Purpose-Built for BC
            </h2>
          </div>
        </FadeIn>
        <FadeInGroup className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              ),
              title: 'Missing Middle Housing',
              body: 'Deep roots in Metro Vancouver and Fraser Valley real estate. We build the housing BC needs most — thoughtful density that fits existing neighbourhoods.',
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
                  <circle cx="12" cy="8" r="2" />
                </svg>
              ),
              title: 'Metro Vancouver Focus',
              body: 'Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley — targeting communities where density is needed most.',
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2l2.5 7H21l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h6.5L12 2z" />
                </svg>
              ),
              title: 'Built to Last',
              body: 'Every Fort development is engineered for long-term performance — materials, systems, and craftsmanship that stand the test of time.',
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-fort-bg rounded-xl p-8 border border-fort-charcoal/5 hover:border-fort-gold/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 left-8 w-12 h-[3px] bg-fort-gold rounded-b" />
              <div className="text-fort-gold mt-4 mb-5">{icon}</div>
              <h3 className="font-serif text-xl text-fort-charcoal">{title}</h3>
              <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">{body}</p>
            </div>
          ))}
        </FadeInGroup>
      </Section>

      {/* ── Projects preview ── */}
      <Section id="projects" className="bg-fort-bg py-24 md:py-32">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold">
              Portfolio
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-fort-charcoal mt-3 tracking-tight">
              Our Developments
            </h2>
            <p className="font-sans text-fort-gray mt-4 max-w-lg mx-auto">
              BC&apos;s next generation of missing middle housing.
            </p>
          </div>
        </FadeIn>
        <FadeInGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            <div key="fort-langley" className="group rounded-xl overflow-hidden bg-white border border-fort-charcoal/5 hover:shadow-xl transition-all duration-300">
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
                <p className="font-sans text-fort-gray text-sm mt-2">4-unit infill &bull; Fort Langley, BC</p>
                <div className="mt-5 pt-5 border-t border-fort-charcoal/5">
                  <Button href="/projects" variant="secondary" className="w-full">
                    Register Interest
                  </Button>
                </div>
              </div>
            </div>,
            <div key="metro-van" className="group rounded-xl overflow-hidden bg-white border border-fort-charcoal/5 hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden bg-fort-charcoal/5 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-fort-gold/10 border border-fort-gold/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-fort-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-serif text-fort-charcoal/40 text-sm">Coming Soon</p>
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
                <p className="font-sans text-fort-gray text-sm mt-2">Coming soon &bull; Metro Vancouver, BC</p>
                <div className="mt-5 pt-5 border-t border-fort-charcoal/5">
                  <Button href="/projects" variant="secondary" className="w-full">
                    Register Interest
                  </Button>
                </div>
              </div>
            </div>,
            <div key="fraser-valley" className="group rounded-xl overflow-hidden bg-white border border-fort-charcoal/5 hover:shadow-xl transition-all duration-300">
              <div className="h-56 relative overflow-hidden bg-fort-charcoal/5 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-12 h-12 rounded-full bg-fort-gold/10 border border-fort-gold/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-fort-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-serif text-fort-charcoal/40 text-sm">Coming Soon</p>
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
                <p className="font-sans text-fort-gray text-sm mt-2">Coming soon &bull; Fraser Valley, BC</p>
                <div className="mt-5 pt-5 border-t border-fort-charcoal/5">
                  <Button href="/projects" variant="secondary" className="w-full">
                    Register Interest
                  </Button>
                </div>
              </div>
            </div>,
          ]}
        </FadeInGroup>
      </Section>

      {/* ── About / Founder ── */}
      <Section className="bg-white py-24 md:py-32">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-fort-gold/20 rounded-xl" />
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/dennis-headshot.png"
                  alt="Dennis Donovan — Founder, Fort Property Developments"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <div className="w-12 h-[3px] bg-fort-gold mb-6" />
              <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold mb-2">
                About the Developer
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal tracking-tight">
                Fort&apos;s Foundation
              </h2>
              <p className="font-sans text-fort-gray mt-6 leading-relaxed">
                Dennis founded Fort Property Developments to bring thoughtful, high-quality multiplex
                infill to Metro Vancouver communities. With BC roots and a focus on the missing
                middle, Fort builds homes that strengthen neighbourhoods for the long term.
              </p>
              <p className="font-sans text-fort-gray mt-4 leading-relaxed">
                From site acquisition to final walkthrough, every Fort project reflects a commitment
                to quality materials, smart design, and lasting value.
              </p>
              <Button href="/learn" variant="secondary" className="mt-8">
                Learn More
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ── Trust bar ── */}
      <section className="bg-fort-bg py-16 border-y border-fort-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="font-sans text-fort-gold text-xs uppercase tracking-[0.25em] font-semibold text-center mb-8">
              Industry Affiliations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['CHBA Member', 'HAVAN Member', 'UDI BC'].map((name) => (
                <div
                  key={name}
                  className="px-8 py-4 bg-white rounded-lg border border-fort-charcoal/10 font-sans text-fort-charcoal font-semibold text-sm hover:border-fort-gold/30 transition-colors duration-200"
                >
                  {name}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="relative bg-fort-charcoal py-24 md:py-32 overflow-hidden">
        {/* Decorative gold grid */}
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
          <FadeIn>
            <div className="w-12 h-[3px] bg-fort-gold mx-auto mb-8" />
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">
              Stay Ahead of the Market
            </h2>
            <p className="font-sans text-gray-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
              Be the first to hear about new Fort developments. Register your interest today &mdash;
              no commitment, no deposit.
            </p>
            <Button href="/contact" className="mt-10">
              Register Interest
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
