import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-fort-charcoal text-white corner-brackets">
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
            <p className="text-xs text-fort-gold/50 uppercase tracking-[0.2em] mt-2">Building the Next Generation of Homes</p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-fort-gold">
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-fort-gold">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a href="mailto:Dennis@fortpropertydevelopment.com" className="hover:text-white transition-colors duration-200">
                Dennis@fortpropertydevelopment.com
              </a>
              <a href="tel:+16042906046" className="hover:text-white transition-colors duration-200">
                604-290-6046
              </a>
              <p className="text-gray-400 mt-2">
                Serving Metro Vancouver · Fraser Valley · North Shore · Tri-Cities
              </p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </a>
            <a href="#" aria-label="X" className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4l16 16"/>
                <path d="M20 4 4 20"/>
              </svg>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-500">
            <p>&copy; {year} Fort Property Developments. All rights reserved.</p>
            <p>BC Real Estate Developer</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
