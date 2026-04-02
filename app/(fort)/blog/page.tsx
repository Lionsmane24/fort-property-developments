import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/animations/FadeIn'
import { Button } from '@/components/Button'
import NewsletterForm from '@/components/NewsletterForm'
import { posts } from './data'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on BC multiplex zoning, infill development, and real estate investment from the Fort Property Developments team.',
  openGraph: {
    title: 'Blog | Fort Property Developments',
    description: 'BC multiplex development insights — zoning, feasibility, and market trends.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
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
            Blog
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight">Insights</h1>
          <p className="font-sans text-gray-300 mt-6 max-w-xl text-lg leading-relaxed">
            BC multiplex development — zoning changes, investment analysis, and what&apos;s happening
            in Metro Vancouver&apos;s infill market.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <Section className="bg-fort-bg py-24 md:py-32">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl border border-fort-charcoal/5 overflow-hidden flex flex-col hover:shadow-xl hover:border-fort-gold/30 transition-all duration-300"
              >
                {/* Featured image */}
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded text-xs font-semibold font-sans bg-fort-gold/15 text-fort-gold">
                      {post.category}
                    </span>
                    <span className="font-sans text-xs text-fort-gray">{post.date}</span>
                    <span className="font-sans text-xs text-fort-gray">&bull; {post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl text-fort-charcoal leading-snug">{post.title}</h2>
                  <p className="font-sans text-fort-gray text-sm mt-3 leading-relaxed flex-1">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 mt-5 font-sans text-sm font-semibold text-fort-gold hover:text-amber-600 transition-colors duration-150"
                  >
                    Read article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter capture */}
          <div className="mt-14 bg-fort-charcoal rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-sans text-fort-gold text-xs font-semibold uppercase tracking-widest">Stay Informed</p>
              <h3 className="font-serif text-2xl text-white mt-1">Get Fort Insights in Your Inbox</h3>
              <p className="font-sans text-gray-400 text-sm mt-2">
                New projects, zoning updates, and market analysis — delivered monthly. No spam.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </FadeIn>
      </Section>

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
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight">Have a Zoning or Feasibility Question?</h2>
          <p className="font-sans text-gray-400 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Run your lot through the calculator or book a call with Dennis for a personal walkthrough.
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
