import type { Metadata } from 'next'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of the Fort Property Developments website and tools.',
  robots: { index: false },
}

export default function TermsPage() {
  const updated = 'March 15, 2026'

  return (
    <main>
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
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight">Terms of Service</h1>
          <p className="font-sans text-gray-400 mt-4 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      <Section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10 font-sans text-fort-gray leading-relaxed">

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using <strong>www.FortPropertyDevelopments.com</strong> (the &ldquo;Site&rdquo;), you
                agree to be bound by these Terms of Service and our{' '}
                <a href="/privacy" className="text-fort-gold hover:text-amber-600 transition-colors">Privacy Policy</a>.
                If you do not agree, please do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">2. Not Financial or Legal Advice</h2>
              <p>
                All content on the Site — including blog posts, feasibility calculator outputs, AI assistant
                responses, zoning guides, project data, and any other materials — is provided for <strong>informational purposes only</strong>.
                Nothing on this Site constitutes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>Financial, investment, or tax advice</li>
                <li>Legal advice regarding real estate transactions, zoning, or development approvals</li>
                <li>A solicitation to purchase or invest in any real estate project</li>
                <li>A guarantee of development feasibility, returns, or regulatory approval</li>
              </ul>
              <p className="mt-3">
                Feasibility calculator results and AI assistant responses are estimates based on user-provided
                inputs and general assumptions. Always consult qualified professionals — including a real
                estate lawyer, accountant, and licensed contractor — before making any investment or
                development decision.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">3. Accuracy of Information</h2>
              <p>
                We strive to keep information on the Site accurate and up to date, but we make no representations
                or warranties as to the completeness, accuracy, or timeliness of any content. Zoning rules,
                construction costs, and market conditions change — verify all information independently.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">4. Intellectual Property</h2>
              <p>
                All content on this Site — including text, graphics, logos, tools, and design — is the property
                of Fort Property Developments or its licensors and is protected by Canadian copyright law.
                You may not reproduce, distribute, or create derivative works without our express written
                permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">5. User-Submitted Information</h2>
              <p>
                When you submit information through our forms or tools, you represent that the information
                is accurate and that you have the right to provide it. You grant Fort Property Developments
                a non-exclusive licence to use submitted information for the purposes described in our
                Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, Fort Property Developments and its
                principals, employees, and contractors shall not be liable for any indirect, incidental,
                special, or consequential damages arising from your use of the Site or reliance on any
                content herein, even if advised of the possibility of such damages.
              </p>
              <p className="mt-3">
                Our total liability to you for any claim arising from use of the Site shall not exceed
                CAD $100.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">7. Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites (e.g., booking platforms, government
                zoning portals). These are provided for convenience. We have no control over third-party
                content and accept no responsibility for it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the Province of British Columbia and the federal
                laws of Canada applicable therein, without regard to conflict-of-law principles. Any disputes
                shall be resolved in the courts of British Columbia.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">9. Changes to These Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Changes take effect when posted.
                The &ldquo;Last updated&rdquo; date at the top indicates the most recent revision. Continued use of
                the Site after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-fort-charcoal mb-3">10. Contact</h2>
              <p>
                Questions about these Terms? Contact us at{' '}
                <a href="mailto:Dennis@fortpropertydevelopment.com" className="text-fort-gold hover:text-amber-600 transition-colors">
                  Dennis@fortpropertydevelopment.com
                </a>{' '}
                or call{' '}
                <a href="tel:+16042906046" className="text-fort-gold hover:text-amber-600 transition-colors">
                  604-290-6046
                </a>.
              </p>
            </section>

          </div>
        </div>
      </Section>
    </main>
  )
}
