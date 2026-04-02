import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Fort Property Developments. We build multiplex infill in Burnaby, Surrey, North Vancouver, Coquitlam, and the Fraser Valley. Responds within 1 business day.',
  openGraph: {
    title: 'Contact | Fort Property Developments',
    description: 'Register interest or ask a question — we respond within 1 business day.',
    images: [{ url: '/images/hero-bg.jpg', width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <>
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
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white tracking-tight">Get in Touch</h1>
          <p className="font-sans text-gray-300 mt-6 max-w-xl text-lg leading-relaxed">
            We&rsquo;d love to hear from you — whether you&rsquo;re an interested buyer, a neighbouring landowner, or a trade partner.
          </p>
        </div>
      </section>

      {/* Split layout: info left, form right */}
      <Section className="bg-fort-bg py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column — contact info */}
          <div>
            <div className="w-12 h-[3px] bg-fort-gold mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl text-fort-charcoal tracking-tight">Contact Information</h2>
            <div className="mt-8 space-y-6">
              {[
                { label: 'Email', value: 'Dennis@fortpropertydevelopment.com', href: 'mailto:Dennis@fortpropertydevelopment.com' },
                { label: 'Phone', value: '604-290-6046', href: 'tel:+16042906046' },
                { label: 'LinkedIn', value: 'Fort Property Developments', href: 'https://linkedin.com/company/fort-property-developments' },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="font-sans text-fort-gold text-xs uppercase tracking-[0.2em] font-semibold">{label}</p>
                  <a
                    href={href}
                    {...(label === 'LinkedIn' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="font-sans text-fort-charcoal font-medium hover:text-fort-gold transition-colors duration-200 mt-1 block"
                  >
                    {value}
                  </a>
                </div>
              ))}
              <div className="pt-4 border-t border-fort-charcoal/10">
                <p className="font-sans text-fort-gray text-sm">
                  We respond within <strong>1 business day</strong>.
                </p>
                <p className="font-sans text-fort-gray text-sm mt-2 leading-relaxed">
                  Serving Metro Vancouver, Fraser Valley, North Shore, and Tri-Cities.
                </p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="bg-white rounded-xl border border-fort-charcoal/5 p-8">
            <h2 className="font-serif text-2xl text-fort-charcoal tracking-tight">Send a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
