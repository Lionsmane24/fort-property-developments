'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/', mobileOnly: true },
  { label: 'Projects', href: '/projects', mobileOnly: false },
  { label: 'Partnerships', href: '/learn', mobileOnly: false },
  { label: 'Feasibility Calculator', href: '/askmultiplex/app', mobileOnly: false },
  { label: 'Blog', href: '/blog', mobileOnly: false },
  { label: 'About', href: '/about', mobileOnly: true },
  { label: 'Contact', href: '/contact', mobileOnly: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Body scroll lock when overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-fort-charcoal transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" aria-label="Fort Property Developments — Home">
              <Image
                src="/logo/fort-logo-reversed.svg"
                alt="Fort Property Developments"
                width={200}
                height={52}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks
                .filter((link) => !link.mobileOnly)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white font-sans text-sm font-medium hover:text-fort-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              <a
                href="https://link.fortpropertydevelopments.com/book-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 rounded bg-fort-gold text-white font-sans text-sm font-semibold hover:bg-[#b89540] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2 focus-visible:ring-offset-fort-charcoal"
              >
                Ask Dennis
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold rounded"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-fort-charcoal flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-4 w-10 h-10 flex items-center justify-center text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold rounded"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Overlay links */}
          <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-sans text-2xl font-medium hover:text-fort-gold transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://link.fortpropertydevelopments.com/book-call"
              className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded bg-fort-gold text-white font-sans text-base font-semibold hover:bg-[#b89540] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Ask Dennis
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
