'use client'

import { useForm, ValidationError } from '@formspree/react'

interface RegisterInterestFormProps {
  projectName: string
}

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

export default function RegisterInterestForm({ projectName }: RegisterInterestFormProps) {
  const [state, handleSubmit] = useForm(ENDPOINT ?? '')

  if (!ENDPOINT || ENDPOINT === 'xxx') {
    return (
      <p className="font-sans text-fort-gray text-sm mt-4">
        Email us at{' '}
        <a
          href="mailto:Dennis@fortpropertydevelopment.com"
          className="text-fort-gold underline"
        >
          Dennis@fortpropertydevelopment.com
        </a>{' '}
        to register interest.
      </p>
    )
  }

  if (state.succeeded) {
    return (
      <p className="font-sans text-fort-gold text-sm mt-4 font-semibold">
        Registered! We&apos;ll be in touch soon.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2 flex-wrap">
      <input type="hidden" name="project" value={projectName} />
      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        disabled={state.submitting}
        className="flex-1 min-w-0 px-3 py-2 border border-fort-gray/40 rounded font-sans text-sm text-fort-charcoal placeholder:text-fort-gray/50 focus:outline-none focus:ring-2 focus:ring-fort-gold"
      />
      <ValidationError
        field="email"
        prefix="Email"
        errors={state.errors}
        className="text-red-600 text-xs"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="px-4 py-2 bg-fort-gold text-white font-sans text-sm font-semibold rounded hover:bg-fort-gold/90 disabled:opacity-50 whitespace-nowrap"
      >
        {state.submitting ? 'Sending\u2026' : 'Register Interest'}
      </button>
    </form>
  )
}
