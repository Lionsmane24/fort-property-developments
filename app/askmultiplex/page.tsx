import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { FadeInGroup } from '@/components/animations/FadeInGroup'

export const metadata: Metadata = {
  title: 'AskMultiPlex — Multiplex Feasibility Made Simple',
  description:
    'Learn how to run a professional feasibility study on any multiplex development. Step-by-step tools, calculators, and guidance built for BC property owners and investors.',
  openGraph: {
    title: 'AskMultiPlex — Multiplex Feasibility Made Simple',
    description:
      'Stop guessing. Know your numbers before you build. AskMultiPlex walks you through every step of a multiplex feasibility study.',
    type: 'website',
  },
}

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 17H5a2 2 0 0 0-2 2v1h18v-1a2 2 0 0 0-2-2h-4" />
        <rect x="7" y="3" width="10" height="14" rx="1" />
        <path d="M10 7h4M10 10h4M10 13h2" />
      </svg>
    ),
    title: 'Site & Zoning Analysis',
    body: 'Understand what your lot allows under BC\'s Bill 44 rules — unit count, setbacks, FSR, and height limits — before spending a dollar on design.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: 'Cost & Revenue Modeling',
    body: 'Input your land value, hard and soft costs, and target unit mix. Get a clear pro forma that shows you whether the deal works — and by how much.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 5-5" />
      </svg>
    ),
    title: 'Return on Investment',
    body: 'See your projected ROI, equity uplift, and cash-on-cash return in plain language. Know your number before you commit to anything.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Timeline & Risk Mapping',
    body: 'Map out your permit, construction, and sale timeline. Identify where deals break down — before it\'s too late to pivot.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Lender & Investor Ready',
    body: 'Export a clean, professional feasibility summary that satisfies what lenders and JV partners actually want to see before they say yes.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'BC-Specific Guidance',
    body: 'Built for Metro Vancouver and BC\'s unique regulatory environment — municipal bylaws, DCCs, PTT, and provincial policy all factored in.',
  },
]

const steps = [
  { num: '01', title: 'Enter Your Site', body: 'Input your address or parcel details. AskMultiPlex pulls zoning data and calculates your development potential automatically.' },
  { num: '02', title: 'Build Your Pro Forma', body: 'Work through a guided cost and revenue model. Every input is explained — no spreadsheet experience required.' },
  { num: '03', title: 'Stress-Test the Deal', body: 'Adjust assumptions and see how your returns change. Understand your downside before you\'re committed.' },
  { num: '04', title: 'Export Your Study', body: 'Download a professional feasibility report ready to share with lenders, partners, or your development team.' },
]

export default function AskMultiplexPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-fort-charcoal pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* subtle grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#C4973A 1px, transparent 1px), linear-gradient(90deg, #C4973A 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-fort-gold/20 text-fort-gold mb-6">
            Now in Early Access
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-3xl mx-auto">
            Know If Your Multiplex Deal Works — Before You Build
          </h1>
          <p className="font-sans text-gray-300 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            AskMultiPlex teaches you how to run a professional feasibility study on any BC
            multiplex development. No guesswork. No spreadsheet nightmares. Just clear answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button href="/askmultiplex/app/new">Try the Tool Free</Button>
            <Button href="#how-it-works" variant="secondary">See How It Works</Button>
          </div>
          <p className="font-sans text-gray-500 text-sm mt-6">
            Built for BC property owners, investors, and first-time developers.
          </p>
        </div>
      </section>

      {/* ── Problem strip ── */}
      <section className="bg-fort-blue py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl md:text-3xl text-white leading-snug max-w-3xl mx-auto">
            &ldquo;Most multiplex deals that fail weren&rsquo;t bad ideas — they were
            <em className="not-italic text-fort-gold"> never properly stress-tested.</em>&rdquo;
          </p>
          <p className="font-sans text-gray-400 mt-4 text-sm">
            A feasibility study is the first thing every experienced developer does. AskMultiPlex
            helps you do it right.
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-fort-bg py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="font-sans text-fort-gold text-sm uppercase tracking-widest font-semibold text-center">
              What You&rsquo;ll Learn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal mt-2 text-center">
              Everything in a Real Feasibility Study
            </h2>
            <p className="font-sans text-fort-gray mt-4 text-center max-w-xl mx-auto">
              AskMultiPlex covers every module a professional developer runs through before
              committing to a project.
            </p>
          </FadeIn>
          <FadeInGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {features.map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-7 border border-fort-charcoal/10 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-fort-gold mb-4">{icon}</div>
                <h3 className="font-serif text-xl text-fort-charcoal">{title}</h3>
                <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed">{body}</p>
              </div>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="font-sans text-fort-gold text-sm uppercase tracking-widest font-semibold text-center">
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal mt-2 text-center">
              Four Steps to a Decision-Ready Study
            </h2>
          </FadeIn>
          <FadeInGroup className="grid sm:grid-cols-2 gap-6 mt-14">
            {steps.map(({ num, title, body }) => (
              <div key={num} className="flex gap-5">
                <span className="font-sans text-fort-gold font-bold text-2xl leading-none pt-1 min-w-[2.5rem]">
                  {num}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-fort-charcoal">{title}</h3>
                  <p className="font-sans text-fort-gray text-sm mt-2 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="bg-fort-bg py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl text-fort-charcoal text-center">
              Built by Someone Who Has Done It
            </h2>
            <p className="font-sans text-fort-gray mt-4 text-center max-w-xl mx-auto">
              AskMultiPlex was created by the team behind Fort Property Developments — active
              multiplex developers in Metro Vancouver. Every lesson, calculator, and checklist
              comes from real projects.
            </p>
          </FadeIn>
          <FadeInGroup className="grid sm:grid-cols-3 gap-6 mt-12 text-center">
            {[
              { stat: '4–6', label: 'Units per project, BC\'s new standard' },
              { stat: 'Bill 44', label: 'BC legislation we\'ve built around' },
              { stat: '100%', label: 'Focused on Metro Vancouver & Fraser Valley' },
            ].map(({ stat, label }) => (
              <div key={stat} className="bg-white rounded-xl p-8 border border-fort-charcoal/10">
                <p className="font-serif text-4xl text-fort-gold">{stat}</p>
                <p className="font-sans text-fort-gray text-sm mt-2 leading-relaxed">{label}</p>
              </div>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── For who ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-fort-charcoal text-center">
              Who AskMultiPlex Is For
            </h2>
          </FadeIn>
          <FadeInGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[
              { who: 'Landowners', detail: 'Understand the value sitting in your lot under the new BC zoning rules.' },
              { who: 'Investors', detail: 'Evaluate multiplex deals with the same rigour as experienced developers.' },
              { who: 'First-Time Developers', detail: 'Learn the process step by step, without expensive consultants.' },
              { who: 'Real Estate Agents', detail: 'Add real development knowledge to serve clients in a post-Bill 44 market.' },
            ].map(({ who, detail }) => (
              <div key={who} className="rounded-xl border border-fort-charcoal/10 p-6 bg-fort-bg">
                <h3 className="font-serif text-lg text-fort-charcoal">{who}</h3>
                <p className="font-sans text-fort-gray text-sm mt-2 leading-relaxed">{detail}</p>
              </div>
            ))}
          </FadeInGroup>
        </div>
      </section>

      {/* ── CTA / Early access ── */}
      <section id="get-access" className="bg-fort-charcoal py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-fort-gold/20 text-fort-gold mb-6">
            Early Access
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Be First to Access AskMultiPlex
          </h2>
          <p className="font-sans text-gray-300 mt-4 leading-relaxed">
            Join the waitlist and get early access pricing when we launch. No commitment — just
            first in line.
          </p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded font-sans text-sm text-fort-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fort-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded bg-fort-gold text-white font-sans font-semibold text-sm hover:bg-amber-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2 whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
          <p className="font-sans text-gray-500 text-xs mt-4">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>
    </main>
  )
}
