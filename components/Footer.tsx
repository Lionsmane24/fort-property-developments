import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-fort-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Fort Property Developments — Home">
              <Image
                src="/logo/fort-logo-reversed.svg"
                alt="Fort Property Developments"
                width={160}
                height={40}
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Multiplex infill development in Metro Vancouver, the Fraser Valley, and the North Shore.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-fort-gold">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-fort-gold">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              {/* Real email + phone provided by Dennis in Phase 3 */}
              <a href="mailto:info@fortpropertydev.com" className="hover:text-white transition-colors duration-200">
                info@fortpropertydev.com
              </a>
              <a href="tel:+16045550000" className="hover:text-white transition-colors duration-200">
                (604) 555-0000
              </a>
              <p className="text-gray-400 mt-2">
                Serving Metro Vancouver · Fraser Valley · North Shore · Tri-Cities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {year} Fort Property Developments. All rights reserved.</p>
          <p>BC Real Estate Developer</p>
        </div>
      </div>
    </footer>
  )
}
