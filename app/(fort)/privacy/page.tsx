import type { Metadata } from 'next'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Fort Property Developments collects, uses, and protects your personal information.',
  robots: { index: false },
}

export default function PrivacyPage() {
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
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight">Privacy Policy</h1>
          <p className="font-sans text-gray-400 mt-4 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      <Section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto space-y-10 font-sans text-fort-gray leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">1. Who We Are</h2>
            <p>
              Fort Property Developments (&ldquo;Fort,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a BC-based real estate
              developer focused on multiplex infill in Metro Vancouver and the Fraser Valley. This policy
              applies to information collected through <strong>www.FortPropertyDevelopments.com</strong> and
              related tools (the &ldquo;Site&rdquo;).
            </p>
            <p className="mt-3">
              Questions? Contact us at{' '}
              <a href="mailto:Dennis@fortpropertydevelopment.com" className="text-fort-gold hover:text-amber-600 transition-colors">
                Dennis@fortpropertydevelopment.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">2. Information We Collect</h2>
            <p className="font-semibold text-fort-charcoal mb-2">Information you provide directly:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name and email address (contact forms, newsletter sign-up, calculator lead gate)</li>
              <li>Phone number (if provided via booking links or contact form)</li>
              <li>Property address or lot details (if submitted for a feasibility inquiry)</li>
              <li>Any other details you include in a message or inquiry</li>
            </ul>
            <p className="font-semibold text-fort-charcoal mb-2 mt-4">Information collected automatically:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Page views, referrer URLs, and general session data via Plausible Analytics (privacy-friendly, no cookies, no cross-site tracking)</li>
              <li>Browser type and device type (aggregated, not personally identifiable)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To respond to your inquiry or schedule a feasibility call</li>
              <li>To send you updates about Fort projects, zoning changes, and investment opportunities — only if you opt in</li>
              <li>To deliver the free resources you request (e.g., BC Multiplex Zoning Guide)</li>
              <li>To improve the Site and understand which content is most useful</li>
              <li>To comply with applicable laws</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell your personal information to third parties. We do not use your
              data for targeted advertising.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">4. CRM and Third-Party Services</h2>
            <p>
              Contact information you submit may be stored in our customer relationship management (CRM)
              platform, GoHighLevel (&ldquo;GHL&rdquo;), operated by HighLevel Inc. GHL processes data in accordance
              with its own privacy policy. We use GHL solely to manage leads and send communications you
              have requested.
            </p>
            <p className="mt-3">We also use:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li><strong>Plausible Analytics</strong> — cookieless, GDPR-compliant website analytics hosted in the EU</li>
              <li><strong>Formspree</strong> — to process contact form submissions</li>
              <li><strong>Vercel</strong> — our hosting provider, which may log request metadata</li>
              <li><strong>21st.dev Agent SDK</strong> — powers our AI assistant chat feature; conversations are processed through 21st.dev&apos;s infrastructure</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">5. Cookies</h2>
            <p>
              We do not use tracking cookies. Plausible Analytics operates without cookies. We use
              browser <code className="bg-gray-100 px-1 rounded text-sm">localStorage</code> solely to
              remember your preferences on this site (e.g., whether you have dismissed a popup) and to
              maintain your AI assistant chat session, which never leaves your device.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">6. Data Retention</h2>
            <p>
              We retain contact information for as long as necessary to manage our business relationship
              with you, or until you request deletion. You may unsubscribe from email communications at
              any time using the unsubscribe link included in every email.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">7. Your Rights (PIPEDA / BC PIPA)</h2>
            <p>
              Under Canadian federal (PIPEDA) and British Columbia (PIPA) privacy law, you have the
              right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent and request deletion of your information</li>
              <li>Lodge a complaint with the Office of the Privacy Commissioner of Canada</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{' '}
              <a href="mailto:Dennis@fortpropertydevelopment.com" className="text-fort-gold hover:text-amber-600 transition-colors">
                Dennis@fortpropertydevelopment.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">8. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your personal information.
              All data transmitted to our Site is encrypted via HTTPS. API credentials are stored
              server-side and never exposed to the browser.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-fort-charcoal mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be indicated by updating
              the &ldquo;Last updated&rdquo; date at the top. Continued use of the Site after changes constitutes
              acceptance of the revised policy.
            </p>
          </section>

        </div>
      </Section>
    </main>
  )
}
