import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { FadeInGroup } from '@/components/animations/FadeInGroup'

export const metadata = {
  title: 'About | Fort Property Developments',
  description:
    'BC-rooted. Metro Vancouver focused. Learn about Fort Property Developments and our approach to multiplex infill housing.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Section 1: Subpage hero */}
      <section className="bg-fort-charcoal pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-white">About Fort Property</h1>
          <p className="font-sans text-gray-300 mt-4 max-w-xl">
            BC-rooted. Metro Vancouver focused. Building for the long term.
          </p>
        </div>
      </section>

      {/* Section 2: Founder */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: photo placeholder */}
          <div className="w-full h-80 bg-fort-charcoal/10 rounded-lg flex items-center justify-center">
            <span className="font-sans text-fort-gray text-sm">Dennis — founder photo coming soon</span>
          </div>

          {/* Right: bio */}
          <FadeIn>
            <p className="font-sans text-fort-gold text-sm uppercase tracking-widest font-semibold">
              Founder &amp; Principal
            </p>
            <h2 className="font-serif text-3xl text-fort-charcoal mt-2">Dennis</h2>
            {/* TODO Dennis: Replace bio with your own words before launch */}
            <p className="font-sans text-fort-gray mt-4 leading-relaxed">
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

      {/* Section 3: Company values */}
      <Section className="bg-fort-bg">
        <h2 className="font-serif text-3xl text-fort-charcoal text-center">What We Stand For</h2>
        <FadeInGroup className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Value 1: Strength */}
          <div className="text-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="mx-auto"
              aria-hidden="true"
            >
              <path
                d="M20 4L8 10v10c0 8 5.5 14.5 12 16 6.5-1.5 12-8 12-16V10L20 4z"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="font-serif text-xl text-fort-charcoal mt-4">Strength</h3>
            <p className="font-sans text-fort-gray text-sm mt-2 leading-relaxed">
              We build structures that last. Engineered for BC's climate and built with materials
              that hold their value for decades.
            </p>
          </div>

          {/* Value 2: Integrity */}
          <div className="text-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="mx-auto"
              aria-hidden="true"
            >
              <path
                d="M14 22c1.5 2.5 4 4 6 4s4.5-1.5 6-4M8 18l8-6 4 4 4-4 8 6"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 16h28v12a2 2 0 01-2 2H8a2 2 0 01-2-2V16z"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="font-serif text-xl text-fort-charcoal mt-4">Integrity</h3>
            <p className="font-sans text-fort-gray text-sm mt-2 leading-relaxed">
              No deposits before our BCFSA Disclosure Statement is filed. No commitments until you
              know exactly what you're getting.
            </p>
          </div>

          {/* Value 3: Community */}
          <div className="text-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="mx-auto"
              aria-hidden="true"
            >
              <circle cx="20" cy="14" r="4" stroke="#C9A84C" strokeWidth="1.5" />
              <circle cx="10" cy="16" r="3" stroke="#C9A84C" strokeWidth="1.5" />
              <circle cx="30" cy="16" r="3" stroke="#C9A84C" strokeWidth="1.5" />
              <path
                d="M4 32c0-4 3-7 7-7h1M36 32c0-4-3-7-7-7h-1M12 32c0-5 3.5-9 8-9s8 4 8 9"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="font-serif text-xl text-fort-charcoal mt-4">Community</h3>
            <p className="font-sans text-fort-gray text-sm mt-2 leading-relaxed">
              Missing middle housing strengthens neighbourhoods. Six families in six homes beats
              one owner in a tear-down.
            </p>
          </div>
        </FadeInGroup>
      </Section>

      {/* Section 4: The Fort Difference */}
      <Section className="bg-white">
        <FadeIn>
          <h2 className="font-serif text-3xl text-fort-charcoal">Why Multiplex Infill?</h2>
          <div className="font-sans text-fort-gray mt-6 space-y-4 max-w-2xl leading-relaxed">
            <p>
              Metro Vancouver's housing crisis isn't solved by towers or single-family zoning. It's
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
              and end value that makes sense for buyers and leaves margin for quality. We don't do
              projects that require value engineering the soul out of the building.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Section 5: Service area */}
      <Section className="bg-fort-bg">
        <h2 className="font-serif text-3xl text-fort-charcoal text-center">Where We Build</h2>
        <p className="font-sans text-fort-gray text-center mt-2 max-w-xl mx-auto">
          Fort focuses on Metro Vancouver and the surrounding region — markets where infill density
          creates the most value.
        </p>
        <FadeInGroup className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-lg p-4 text-center border border-fort-gray/20">
            <p className="font-sans font-semibold text-fort-charcoal text-sm">Metro Vancouver</p>
            <p className="font-sans text-fort-gray text-xs mt-1">Burnaby · Surrey · Vancouver</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-fort-gray/20">
            <p className="font-sans font-semibold text-fort-charcoal text-sm">Fraser Valley</p>
            <p className="font-sans text-fort-gray text-xs mt-1">Abbotsford · Langley · Mission</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-fort-gray/20">
            <p className="font-sans font-semibold text-fort-charcoal text-sm">North Shore</p>
            <p className="font-sans text-fort-gray text-xs mt-1">North Vancouver · West Vancouver</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-fort-gray/20">
            <p className="font-sans font-semibold text-fort-charcoal text-sm">Tri-Cities</p>
            <p className="font-sans text-fort-gray text-xs mt-1">Coquitlam · Port Moody · Port Coquitlam</p>
          </div>
        </FadeInGroup>
      </Section>

      {/* Section 6: Affiliations */}
      <Section className="bg-white">
        <p className="font-sans text-fort-gray text-sm uppercase tracking-widest text-center">
          Industry Affiliations
        </p>
        {/* TODO: Replace with real affiliation logo images when membership is confirmed */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="border border-fort-gray/30 rounded px-6 py-3 font-sans text-fort-charcoal font-semibold text-sm">
            CHBA Member
          </div>
          <div className="border border-fort-gray/30 rounded px-6 py-3 font-sans text-fort-charcoal font-semibold text-sm">
            HAVAN Member
          </div>
          <div className="border border-fort-gray/30 rounded px-6 py-3 font-sans text-fort-charcoal font-semibold text-sm">
            UDI BC
          </div>
        </div>
      </Section>

      {/* Section 7: Page CTA */}
      <section className="bg-fort-charcoal py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-white">Ready to Talk?</h2>
          <p className="font-sans text-gray-300 mt-4 max-w-md mx-auto">
            We'd love to hear from investors, neighbouring landowners, or anyone who believes in
            better density for BC.
          </p>
          <Button href="/contact" className="mt-8">Get in Touch</Button>
        </div>
      </section>
    </main>
  )
}
