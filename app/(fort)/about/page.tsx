import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { FadeInGroup } from '@/components/animations/FadeInGroup'

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Dennis and the Fort Property Developments team — BC-rooted multiplex infill developers serving Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley.',
  openGraph: {
    title: 'About | Fort Property Developments',
    description: 'BC-rooted multiplex infill development — meet the Fort team.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
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
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight">About Fort Property</h1>
          <p className="font-sans text-gray-300 mt-6 max-w-xl text-lg leading-relaxed">
            BC-rooted. Metro Vancouver focused. Building for the long term.
          </p>
        </div>
      </section>

      {/* Founder */}
      <Section className="bg-white py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-fort-gold/20 rounded-xl" />
            <div className="relative rounded-xl overflow-hidden bg-fort-charcoal/10 h-80 md:h-[28rem] flex items-center justify-center">
              <span className="font-sans text-fort-gray text-sm">Dennis — founder photo coming soon</span>
            </div>
          </div>

          <FadeIn>
            <div className="w-12 h-[3px] bg-fort-gold mb-6" />
            <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold mb-2">
              Founder &amp; Principal
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal tracking-tight">Dennis Donovan</h2>
            <p className="font-sans text-fort-gray mt-6 leading-relaxed">
              Fort Property Developments grew from a simple belief: Metro Vancouver deserves better
              density. Not towers. Not generic stacked boxes. But well-crafted 4–6 unit multiplexes
              that fit into existing neighbourhoods and house real families.
            </p>
            <p className="font-sans text-fort-gray mt-4 leading-relaxed">
              Dennis has spent years watching infill development done poorly — rushed timelines,
              value-engineered materials, and projects that weaken the neighbourhoods they claim to
              serve. Fort is the answer to that. Every project is sized right, built to last, and
              designed to belong where it stands.
            </p>
            <p className="font-sans text-fort-gray mt-4 leading-relaxed">
              Based in Metro Vancouver. Focused on Burnaby, Surrey, North Vancouver, Coquitlam,
              and the Fraser Valley — where the missing middle housing shortage is most acute.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Company values */}
      <Section className="bg-fort-bg py-24 md:py-32">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold">
              Our Values
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-fort-charcoal mt-3 tracking-tight">What We Stand For</h2>
          </div>
        </FadeIn>
        <FadeInGroup className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M20 4L8 10v10c0 8 5.5 14.5 12 16 6.5-1.5 12-8 12-16V10L20 4z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              ),
              title: 'Strength',
              body: "We build structures that last. Engineered for BC's climate and built with materials that hold their value for decades.",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M14 22c1.5 2.5 4 4 6 4s4.5-1.5 6-4M8 18l8-6 4 4 4-4 8 6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 16h28v12a2 2 0 01-2 2H8a2 2 0 01-2-2V16z" stroke="#C9A84C" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              ),
              title: 'Integrity',
              body: "No deposits before our BCFSA Disclosure Statement is filed. No commitments until you know exactly what you're getting.",
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <circle cx="20" cy="14" r="4" stroke="#C9A84C" strokeWidth="1.5" />
                  <circle cx="10" cy="16" r="3" stroke="#C9A84C" strokeWidth="1.5" />
                  <circle cx="30" cy="16" r="3" stroke="#C9A84C" strokeWidth="1.5" />
                  <path d="M4 32c0-4 3-7 7-7h1M36 32c0-4-3-7-7-7h-1M12 32c0-5 3.5-9 8-9s8 4 8 9" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: 'Community',
              body: 'Missing middle housing strengthens neighbourhoods. Six families in six homes beats one owner in a tear-down.',
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-white rounded-xl p-8 border border-fort-charcoal/5 hover:border-fort-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-8 w-12 h-[3px] bg-fort-gold rounded-b" />
              <div className="mt-4 mb-5">{icon}</div>
              <h3 className="font-serif text-xl text-fort-charcoal">{title}</h3>
              <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">{body}</p>
            </div>
          ))}
        </FadeInGroup>
      </Section>

      {/* Why Multiplex Infill */}
      <Section className="bg-white py-24 md:py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="w-12 h-[3px] bg-fort-gold mb-6" />
            <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold mb-2">
              The Opportunity
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal tracking-tight">Why Multiplex Infill?</h2>
            <div className="font-sans text-fort-gray mt-8 space-y-5 leading-relaxed">
              <p>
                Metro Vancouver&rsquo;s housing crisis isn&rsquo;t solved by towers or single-family zoning. It&rsquo;s
                solved by the missing middle — 4 to 6 unit buildings that look like homes, fit in
                residential streets, and house multiple families on lots currently underused.
              </p>
              <p>
                Provincial zoning changes now allow multiplexes on most single-family lots across BC.
                Fort is positioned to move fast on infill sites while the market catches up to what
                the rules now allow.
              </p>
              <p>
                Every Fort project targets a lot where the math works: land cost, construction cost,
                and end value that makes sense for buyers and leaves margin for quality. We don&rsquo;t do
                projects that require value engineering the soul out of the building.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Service area */}
      <Section className="bg-fort-bg py-24 md:py-32">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold">
              Service Area
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-fort-charcoal mt-3 tracking-tight">Where We Build</h2>
            <p className="font-sans text-fort-gray text-center mt-4 max-w-xl mx-auto">
              Fort focuses on Metro Vancouver and the surrounding region — markets where infill density
              creates the most value.
            </p>
          </div>
        </FadeIn>
        <FadeInGroup className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { area: 'Metro Vancouver', cities: 'Burnaby · Surrey · Vancouver' },
            { area: 'Fraser Valley', cities: 'Abbotsford · Langley · Mission' },
            { area: 'North Shore', cities: 'North Vancouver · West Vancouver' },
            { area: 'Tri-Cities', cities: 'Coquitlam · Port Moody · Port Coquitlam' },
          ].map(({ area, cities }) => (
            <div key={area} className="bg-white rounded-xl p-6 text-center border border-fort-charcoal/5 hover:border-fort-gold/30 hover:shadow-lg transition-all duration-300">
              <p className="font-sans font-semibold text-fort-charcoal">{area}</p>
              <p className="font-sans text-fort-gray text-xs mt-2">{cities}</p>
            </div>
          ))}
        </FadeInGroup>
      </Section>

      {/* Affiliations */}
      <section className="bg-white py-16 border-y border-fort-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="font-sans text-fort-gold text-xs uppercase tracking-[0.25em] font-semibold text-center mb-8">
            Industry Affiliations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['CHBA Member', 'HAVAN Member', 'UDI BC'].map((name) => (
              <div
                key={name}
                className="px-8 py-4 bg-fort-bg rounded-lg border border-fort-charcoal/10 font-sans text-fort-charcoal font-semibold text-sm hover:border-fort-gold/30 transition-colors duration-200"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">Have Questions About Fort?</h2>
          <p className="font-sans text-gray-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Book 20 minutes with Dennis for a personal conversation about zoning, feasibility, or the development process.
          </p>
          <div className="flex gap-4 mt-10 justify-center flex-wrap">
            <Button href="/contact">Get in Touch</Button>
            <Button href="https://link.fortpropertydevelopments.com/book-call" variant="secondary">Talk to Dennis</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
