import type { Metadata } from 'next'
import { Section } from '@/components/Section'
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
      {/* Subpage hero */}
      <section className="bg-fort-charcoal pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-white">Our Developments</h1>
          <p className="font-sans text-gray-300 mt-4 max-w-xl">
            Fort Property Developments builds 4–6 unit multiplex infill across Metro Vancouver and
            the Fraser Valley.
          </p>
        </div>
      </section>

      {/* Project card grid + pre-launch empty state */}
      <Section className="bg-fort-bg">
        <FadeIn>
          {/* Card grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Burnaby Multiplex card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              {/* Placeholder image area */}
              <div className="h-52 bg-fort-charcoal/10 flex items-center justify-center">
                <span className="font-sans text-fort-gray text-sm">
                  Architectural render coming soon
                </span>
              </div>
              <div className="p-6">
                {/* Status badge */}
                <span className="inline-block px-2 py-1 rounded text-xs font-semibold font-sans bg-amber-100 text-amber-800">
                  Planning
                </span>
                <h3 className="font-serif text-xl text-fort-charcoal mt-3">Burnaby Multiplex</h3>
                <p className="font-sans text-fort-gray text-sm mt-1">4-unit infill · Burnaby, BC</p>
                <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">
                  A 4-unit residential multiplex on an infill lot in Burnaby. Currently in planning
                  — register your interest for early access to unit information.
                </p>
                <RegisterInterestForm projectName="Burnaby Multiplex" />
              </div>
            </div>
          </div>

          {/* Pre-launch empty state */}
          <div className="mt-12 py-10 border-t border-fort-gray/20 text-center">
            <h3 className="font-serif text-2xl text-fort-charcoal">More Projects Coming Soon</h3>
            <p className="font-sans text-fort-gray mt-3 max-w-md mx-auto">
              Fort is actively sourcing infill sites across Metro Vancouver and the Fraser Valley.
              Register for early access to hear about new projects first.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-sm">
                <RegisterInterestForm projectName="General — Early Access" />
              </div>
            </div>
            <p className="font-sans text-fort-gray/60 text-xs mt-4">
              No deposit. No commitment. Register Interest only — per BC real estate regulations.
            </p>
          </div>
        </FadeIn>
      </Section>
    </main>
  )
}
