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
      {/* Subpage hero */}
      <section className="bg-fort-charcoal pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-white">Get in Touch</h1>
          <p className="font-sans text-gray-300 mt-4 max-w-xl">
            We'd love to hear from you — whether you're an interested buyer, a neighbouring landowner, or a trade partner.
          </p>
        </div>
      </section>

      {/* Split layout: info left, form right */}
      <Section className="bg-fort-bg">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column — contact info */}
          <div>
            <h2 className="font-serif text-2xl text-fort-charcoal">Contact Information</h2>
            <div className="mt-6 space-y-5">
              {/* Email */}
              <div>
                <p className="font-sans text-fort-gray/60 text-xs uppercase tracking-widest">Email</p>
                <a
                  href="mailto:Dennis@fortpropertydevelopment.com"
                  className="font-sans text-fort-charcoal font-medium hover:text-fort-gold transition-colors"
                >
                  Dennis@fortpropertydevelopment.com
                </a>
              </div>
              {/* Phone */}
              <div>
                <p className="font-sans text-fort-gray/60 text-xs uppercase tracking-widest">Phone</p>
                <a
                  href="tel:+16042906046"
                  className="font-sans text-fort-charcoal font-medium hover:text-fort-gold transition-colors"
                >
                  604-290-6046
                </a>
              </div>
              {/* LinkedIn */}
              <div>
                <p className="font-sans text-fort-gray/60 text-xs uppercase tracking-widest">LinkedIn</p>
                <a
                  href="https://linkedin.com/company/fort-property-developments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-fort-charcoal font-medium hover:text-fort-gold transition-colors"
                >
                  Fort Property Developments
                </a>
              </div>
              {/* Response time */}
              <div className="pt-2 border-t border-fort-gray/20">
                <p className="font-sans text-fort-gray text-sm">
                  We respond within <strong>1 business day</strong>.
                </p>
              </div>
              {/* Service area */}
              <div>
                <p className="font-sans text-fort-gray text-sm leading-relaxed">
                  Serving Metro Vancouver, Fraser Valley, North Shore, and Tri-Cities.
                </p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <h2 className="font-serif text-2xl text-fort-charcoal">Send a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
