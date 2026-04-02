import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { FadeInGroup } from '@/components/animations/FadeInGroup'

export const metadata: Metadata = {
  title: 'Partnerships',
  description: 'Partner with Fort Property Developments — we work with real estate agents, homeowners, and contractors to build Metro Vancouver\'s next generation of multiplex infill homes.',
  openGraph: {
    title: 'Partnerships | Fort Property Developments',
    description: 'Real estate agents, homeowners, and contractors — partner with Fort to build Metro Vancouver infill.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}

const partners = [
  {
    label: 'Real Estate Agents',
    heading: 'Grow Your Business With Multi-Plex',
    body: [
      'The BC multiplex zoning shift has created a new category of client — landowners who don\'t know what their lot is worth under the new rules. Agents who understand this opportunity are winning listings that others are missing.',
      'Partner with Fort to bring your clients a full development picture: feasibility analysis, JV structuring, and a clear path from lot to finished units. We handle the development side; you keep the client relationship.',
      'Referral arrangements available for qualified leads. We\'re looking for agents who are serious about infill and want a developer they can trust to deliver.',
    ],
    cta: 'Talk to Us About Agent Partnerships',
  },
  {
    label: 'Home Owners',
    heading: 'Your Lot May Be Worth More Than You Think',
    body: [
      'BC\'s Bills 44 and 47 changed what can be built on most residential lots in Metro Vancouver. If you own a single-family home, chances are your property now permits 4–6 units — without a rezoning application or public hearing.',
      'A joint venture with Fort lets you unlock that value without selling. You contribute the land; Fort manages design, permits, financing, and construction. At the end, you receive your agreed share — cash, a unit, or both.',
      'Most homeowners haven\'t priced in these changes yet. The window to act before the market fully catches up is still open.',
    ],
    cta: 'Explore a JV on Your Property',
  },
  {
    label: 'Contractors',
    heading: 'Build With a Developer Who Delivers',
    body: [
      'Fort is actively developing multiplexes across Metro Vancouver and the Fraser Valley. We\'re looking for skilled contractors — framers, concrete crews, finish trades, and general contractors — who want consistent, well-managed projects.',
      'We run clean sites, pay on schedule, and work with trades who take quality seriously. If you\'re experienced in wood-frame residential construction and want a reliable pipeline of infill work, we want to hear from you.',
      'Subcontractor and GC opportunities available. Reach out with your trade, capacity, and the areas you cover.',
    ],
    cta: 'Connect With Our Build Team',
  },
]

export default function PartnershipsPage() {
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
            Work With Us
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight">Partnerships</h1>
          <p className="font-sans text-gray-300 mt-6 max-w-xl text-lg leading-relaxed">
            We work with real estate agents, homeowners, and contractors who want to be part of Metro Vancouver&rsquo;s infill story.
          </p>
        </div>
      </section>

      {/* About Dennis */}
      <Section className="bg-white py-24 md:py-32">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-fort-gold/20 rounded-xl" />
              <div className="relative w-full aspect-[3/4] max-w-sm mx-auto md:mx-0 rounded-xl overflow-hidden">
                <Image
                  src="/images/dennis-headshot.png"
                  alt="Dennis Donovan — Founder, Fort Property Developments"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            </div>
            <div>
              <div className="w-12 h-[3px] bg-fort-gold mb-6" />
              <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold mb-2">
                About the Developer
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal tracking-tight">Dennis Donovan</h2>
              <p className="font-sans text-fort-gray mt-4 leading-relaxed">
                A 2005 BCIT Architectural and Building program graduate, Dennis has managed projects worth over $100&nbsp;million &mdash; specializing in commercial renovations, tenant improvements, multi-family units, and tilt-up construction.
              </p>
              <p className="font-sans text-fort-gray mt-4 leading-relaxed">
                Working with owner-operators, corporations, and landlords, he&rsquo;s honed problem-solving, value engineering, and design-build skills to meet client needs. Since purchasing and renovating his first residential property in 2008, Dennis has grown his equity by buying, renovating, and adding value to properties in prime locations.
              </p>
              <p className="font-sans text-fort-gray mt-4 leading-relaxed">
                Dennis founded Fort Property Developments to bring thoughtful, high-quality multiplex infill to Metro Vancouver communities &mdash; density done right.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Partner sections */}
      {partners.map((p, i) => (
        <Section key={p.label} className={`${i % 2 === 0 ? 'bg-white' : 'bg-fort-bg'} py-24 md:py-32`}>
          <FadeIn>
            <div className="max-w-3xl">
              <div className="w-12 h-[3px] bg-fort-gold mb-6" />
              <p className="font-sans text-fort-gold text-sm uppercase tracking-[0.25em] font-semibold mb-2">
                {p.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal tracking-tight">{p.heading}</h2>
              <div className="font-sans text-fort-gray mt-8 space-y-5 leading-relaxed">
                {p.body.map((para, j) => <p key={j}>{para}</p>)}
              </div>
              <div className="mt-10">
                <Button href="/contact">{p.cta}</Button>
              </div>
            </div>
          </FadeIn>
        </Section>
      ))}

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
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">Ready to Partner With Fort?</h2>
          <p className="font-sans text-gray-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Whether you&rsquo;re an agent, a homeowner, or a contractor — reach out to discuss partnership models.
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
