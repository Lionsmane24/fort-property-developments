'use client'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

export default function ContactForm() {
  const [state, handleSubmit] = useForm(ENDPOINT ?? '')
  const router = useRouter()

  useEffect(() => {
    if (state.succeeded) {
      router.push('/thank-you')
    }
  }, [state.succeeded, router])

  // Graceful fallback
  if (!ENDPOINT || ENDPOINT === 'xxx') {
    return (
      <div className="py-8">
        <p className="font-sans text-fort-gray">
          Our form will be live soon. In the meantime, reach us directly at{' '}
          <a
            href="mailto:Dennis@fortpropertydevelopment.com"
            className="text-fort-gold underline hover:text-fort-gold/80"
          >
            Dennis@fortpropertydevelopment.com
          </a>
          .
        </p>
        <p className="font-sans text-fort-gray/60 text-sm mt-2">
          We respond within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="font-sans text-fort-charcoal text-sm font-medium">Name *</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-1 w-full px-3 py-2 border border-fort-gray/40 rounded font-sans text-sm text-fort-charcoal focus:outline-none focus:ring-2 focus:ring-fort-gold"
        />
        <ValidationError field="name" prefix="Name" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="font-sans text-fort-charcoal text-sm font-medium">Email *</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 w-full px-3 py-2 border border-fort-gray/40 rounded font-sans text-sm text-fort-charcoal focus:outline-none focus:ring-2 focus:ring-fort-gold"
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="font-sans text-fort-charcoal text-sm font-medium">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className="mt-1 w-full px-3 py-2 border border-fort-gray/40 rounded font-sans text-sm text-fort-charcoal focus:outline-none focus:ring-2 focus:ring-fort-gold"
        />
      </div>

      {/* Project Interest dropdown */}
      <div>
        <label htmlFor="project_interest" className="font-sans text-fort-charcoal text-sm font-medium">Project Interest</label>
        <select
          id="project_interest"
          name="project_interest"
          className="mt-1 w-full px-3 py-2 border border-fort-gray/40 rounded font-sans text-sm text-fort-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-fort-gold"
        >
          <option value="">Select a project</option>
          <option value="fort-langley-multiplex">Fort Langley Multiplex (Development Permit Application)</option>
          <option value="general">General Inquiry</option>
          <option value="land">Land / Site Opportunity</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="font-sans text-fort-charcoal text-sm font-medium">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full px-3 py-2 border border-fort-gray/40 rounded font-sans text-sm text-fort-charcoal resize-y focus:outline-none focus:ring-2 focus:ring-fort-gold"
          placeholder="Tell us about your interest or question…"
        />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="text-red-600 text-xs mt-1" />
      </div>

      {/* Form-level errors */}
      <ValidationError errors={state.errors} className="text-red-600 text-sm" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 px-6 bg-fort-gold text-white font-sans font-semibold rounded hover:bg-fort-gold/90 disabled:opacity-50 transition-colors"
      >
        {state.submitting ? 'Sending…' : 'Send Message'}
      </button>

      <p className="font-sans text-fort-gray/60 text-xs text-center">
        We respond within 1 business day.
      </p>
    </form>
  )
}
