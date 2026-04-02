'use client'

// GHL: Update this URL to your GoHighLevel booking/funnel page
const GHL_BOOKING_URL = 'https://link.fortpropertydevelopments.com/book-call'

export default function FloatingCTA() {
  return (
    <a
      href={GHL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-fort-gold text-white font-sans font-semibold text-sm shadow-lg hover:bg-amber-600 hover:scale-105 active:scale-100 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fort-gold focus-visible:ring-offset-2 print:hidden"
      aria-label="Book a free feasibility call with Fort Property Developments"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/>
      </svg>
      Ask Dennis
    </a>
  )
}
