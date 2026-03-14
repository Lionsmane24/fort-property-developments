import Image from 'next/image'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/animations/FadeIn'
import { FadeInGroup } from '@/components/animations/FadeInGroup'

export default function Home() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-end md:items-center pt-16 md:pt-20">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern multiplex development in Metro Vancouver"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-fort-charcoal/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-0">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-3xl">
            Building Metro Vancouver&apos;s Next Generation of Homes
          </h1>
          <p className="font-sans text-gray-300 mt-4 max-w-xl text-lg">
            Fort Property Developments builds 4&ndash;6 unit multiplex infill across Metro Vancouver
            and the Fraser Valley &mdash; density done right.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <Button href="/projects">View Our Projects</Button>
            <Button href="/contact" variant="secondary">Register Interest</Button>
          </div>
        </div>
      </section>

      {/* Section 2: Value strip */}
      <Section className="bg-white">
        <FadeInGroup className="grid md:grid-cols-3 gap-8 text-center">
          {[
            /* Column 1: Experience */
            <div key="experience">
              <svg
                className="mx-auto mb-4"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path className="stroke-fort-gold" d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
                <path className="stroke-fort-gold" d="M9 21V12h6v9" />
              </svg>
              <h3 className="font-serif text-xl text-fort-charcoal">Built for BC</h3>
              <p className="font-sans text-fort-gray text-sm mt-2">
                Deep roots in Metro Vancouver and Fraser Valley real estate, with a focus on missing
                middle housing.
              </p>
            </div>,
            /* Column 2: Location */
            <div key="location">
              <svg
                className="mx-auto mb-4"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path className="stroke-fort-gold" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
                <circle className="stroke-fort-gold" cx="12" cy="8" r="2" />
              </svg>
              <h3 className="font-serif text-xl text-fort-charcoal">Metro Vancouver Focus</h3>
              <p className="font-sans text-fort-gray text-sm mt-2">
                Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley &mdash; where
                density is needed most.
              </p>
            </div>,
            /* Column 3: Quality */
            <div key="quality">
              <svg
                className="mx-auto mb-4"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path className="stroke-fort-gold" d="M12 2l2.5 7H21l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h6.5L12 2z" />
              </svg>
              <h3 className="font-serif text-xl text-fort-charcoal">Built to Last</h3>
              <p className="font-sans text-fort-gray text-sm mt-2">
                Every Fort development is engineered for long-term performance &mdash; materials,
                systems, and craftsmanship.
              </p>
            </div>,
          ]}
        </FadeInGroup>
      </Section>
    </main>
  )
}
