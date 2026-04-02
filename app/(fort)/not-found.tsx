import Link from 'next/link'
import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-fort-bg">
      <div className="max-w-lg mx-auto px-4 text-center py-24">
        <p className="font-sans text-fort-gold text-xs font-semibold uppercase tracking-widest">404</p>
        <h1 className="font-serif text-4xl md:text-5xl text-fort-charcoal mt-4">
          Page Not Found
        </h1>
        <p className="font-sans text-fort-gray mt-5 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <Button href="/">Back to Home</Button>
          <Button href="/chat" variant="secondary">Ask Dennis AI</Button>
        </div>
        <div className="mt-10 pt-10 border-t border-fort-charcoal/10">
          <p className="font-sans text-sm text-fort-gray">
            Looking to evaluate a property?{' '}
            <Link href="/askmultiplex/app" className="text-fort-gold hover:text-amber-600 font-semibold transition-colors">
              Try the Feasibility Calculator →
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
