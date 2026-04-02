import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { posts } from '../data'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Fort Property Developments`,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 4)

  return (
    <main>
      {/* Hero with featured image */}
      <section className="bg-fort-charcoal pt-32 pb-0 md:pt-36">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 rounded text-xs font-semibold font-sans bg-fort-gold/20 text-fort-gold">
              {post.category}
            </span>
            <span className="font-sans text-sm text-gray-400">{post.date}</span>
            <span className="font-sans text-sm text-gray-400">&bull; {post.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-white leading-snug">{post.title}</h1>
          <p className="font-sans text-gray-300 mt-4 leading-relaxed">{post.excerpt}</p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-96 rounded-t-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          {post.content}

          {/* CTA inline */}
          <div className="mt-12 p-6 bg-fort-bg rounded-xl border border-fort-charcoal/10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fort-gold/10 border border-fort-gold/20 w-fit mb-3">
              <span className="w-2 h-2 rounded-full bg-fort-gold animate-pulse" />
              <span className="font-sans text-fort-gold text-xs font-semibold uppercase tracking-wider">AI-Powered</span>
            </div>
            <h3 className="font-serif text-xl text-fort-charcoal">Have Questions About This Topic?</h3>
            <p className="font-sans text-fort-gray text-sm mt-2">
              Ask Dennis AI for deeper answers on zoning, feasibility, or the development process — or run your lot through the calculator.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button href="/chat">Ask Dennis AI</Button>
              <Button href="/askmultiplex/app" variant="secondary">Try the Calculator</Button>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-10 pt-8 border-t border-fort-charcoal/10">
            <Link href="/blog" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-fort-gold hover:text-amber-600 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
              Back to Insights
            </Link>
          </div>
        </div>
      </Section>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="bg-fort-bg py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-fort-charcoal">More Insights</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-xl border border-fort-charcoal/10 overflow-hidden flex flex-col md:flex-row gap-0 hover:border-fort-gold/40 transition-colors"
                >
                  <div className="relative w-full md:w-40 h-32 md:h-auto flex-shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="160px" />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <span className="px-2 py-0.5 rounded text-xs font-semibold font-sans bg-fort-gold/15 text-fort-gold self-start">
                      {p.category}
                    </span>
                    <h3 className="font-serif text-lg text-fort-charcoal leading-snug">{p.title}</h3>
                    <p className="font-sans text-fort-gray text-sm leading-relaxed line-clamp-2">{p.excerpt}</p>
                    <span className="font-sans text-sm font-semibold text-fort-gold mt-1">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
