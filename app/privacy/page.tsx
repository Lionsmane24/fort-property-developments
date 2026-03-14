import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Fort Property Developments — how we collect, use, and protect your personal information under PIPA BC.',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-serif text-3xl text-fort-charcoal mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Fort Property Developments — British Columbia</p>

      {/* TODO: Replace this placeholder with content generated at termsfeed.com
          Required inputs: Company = Fort Property Developments,
          Email = Dennis@fortpropertydevelopment.com,
          Website = www.FortPropertyDevelopments.com, Jurisdiction = BC (PIPA) */}
      <div className="text-sm text-fort-gray space-y-6 leading-relaxed">
        <section>
          <h2 className="font-serif text-xl text-fort-charcoal mb-3">Information We Collect</h2>
          <p>
            Fort Property Developments collects personal information you voluntarily provide when
            you contact us or register interest in our developments. This includes your name,
            email address, phone number, and any message you submit through our website forms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-fort-charcoal mb-3">How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to your inquiry, send you updates
            about developments you have expressed interest in, and fulfill the purpose for which
            you submitted the form. We do not sell or share your personal information with third parties.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-fort-charcoal mb-3">Data Storage</h2>
          <p>
            Form submissions are processed through Formspree (formspree.io) and delivered to our
            email. We retain inquiry data only as long as necessary to respond to your request.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-fort-charcoal mb-3">Your Rights Under PIPA BC</h2>
          <p>
            Under the Personal Information Protection Act (PIPA) of British Columbia, you have the
            right to request access to, correction of, or deletion of your personal information.
            To exercise these rights, contact us at{' '}
            <a href="mailto:Dennis@fortpropertydevelopment.com" className="text-fort-gold hover:underline">
              Dennis@fortpropertydevelopment.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl text-fort-charcoal mb-3">Contact</h2>
          <p>
            For privacy-related questions, contact Fort Property Developments at{' '}
            <a href="mailto:Dennis@fortpropertydevelopment.com" className="text-fort-gold hover:underline">
              Dennis@fortpropertydevelopment.com
            </a>{' '}
            or call{' '}
            <a href="tel:+16042906046" className="text-fort-gold hover:underline">
              604-290-6046
            </a>.
          </p>
        </section>

        <p className="text-xs text-gray-400 pt-4 border-t border-gray-200">
          Last updated: 2026. For a comprehensive policy, replace this content with TermsFeed-generated output.
        </p>
      </div>
    </main>
  )
}
