/**
 * La Belle Hair Salon — Shared Layout Components
 * Design: Luxury Editorial Fashion Magazine
 * Header: CSS checkbox nav drawer (no JS)
 * Footer: 4-column premium charcoal block
 */

import { Link, useLocation } from "wouter";
import { useEffect } from "react";

const LOGO_NAV = "/manus-storage/LaBelleLogo_4d7d14a5.png";
const LOGO_PINK = "/manus-storage/LaBelleLogo_4d7d14a5.png";

// Scroll to top whenever route changes
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

export function Header() {
  return (
    <>
      {/* CSS checkbox — controls drawer open/close, no JS needed */}
      <input type="checkbox" id="nav-toggle" />

      {/* Overlay (click to close) */}
      <label className="lb-nav-overlay" htmlFor="nav-toggle" aria-hidden="true" />

      {/* Slide-out drawer */}
      <div className="lb-nav-drawer">
        <label className="drawer-close" htmlFor="nav-toggle" aria-label="Close navigation">✕</label>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/atelier">The Atelier</Link>
          <Link href="/menu">The Menu</Link>
          <Link href="/couture-therapy">Couture Therapy</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/concierge">Concierge</Link>
        </nav>
        <div className="drawer-contact">
          <p>Call to Book</p>
          <a href="tel:01784558002">01784 558002</a>
        </div>
      </div>

      {/* Fixed header bar */}
      <header className="lb-header">
        <Link href="/" className="lb-header-logo" aria-label="La Belle Hair Salon — Home">
          <img src={LOGO_NAV} alt="La Belle Hair Salon" className="lb-logo-full" />
        </Link>

        <label className="lb-nav-toggle-label" htmlFor="nav-toggle" aria-label="Open navigation">
          <span />
          <span />
          <span />
        </label>
      </header>
    </>
  );
}

export { ScrollToTop };

export function Footer() {
  return (
    <footer className="lb-footer">
      <div className="lb-footer-grid">
        {/* Column 1: Identity & Social */}
        <div className="lb-footer-col">
          <div className="lb-footer-logo">
            <img src={LOGO_PINK} alt="La Belle Hair Salon" className="lb-footer-logo-full" />
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '0.5rem' }}>
            23 Station Road, Ashford<br />TW15 2UP
          </p>
          <a href="tel:01784558002" style={{ fontSize: '0.85rem', color: 'rgba(212,160,167,0.9)', display: 'block', marginBottom: '0.25rem' }}>
            01784 558002
          </a>
          <div className="lb-footer-social">
            {/* Instagram */}
            <a href="https://www.instagram.com/labellehairsalon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/labellehairsalon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="lb-footer-col">
          <h4>Navigate</h4>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/atelier">The Atelier</Link>
            <Link href="/menu">The Menu</Link>
            <Link href="/couture-therapy">Couture Therapy</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/concierge">Concierge</Link>
          </nav>
        </div>

        {/* Column 3: Salon Hours */}
        <div className="lb-footer-col">
          <h4>Studio Hours</h4>
          <div className="lb-footer-hours">
            <div className="hour-row">
              <span className="day">Tuesday</span>
              <span className="time">9:00 – 18:00</span>
            </div>
            <div className="hour-row">
              <span className="day">Wednesday</span>
              <span className="time">10:00 – 20:00</span>
            </div>
            <div className="hour-row">
              <span className="day">Thursday</span>
              <span className="time">9:00 – 18:00</span>
            </div>
            <div className="hour-row">
              <span className="day">Friday</span>
              <span className="time">9:00 – 18:00</span>
            </div>
            <div className="hour-row">
              <span className="day">Saturday</span>
              <span className="time">9:00 – 17:00</span>
            </div>
            <div className="hour-row closed">
              <span className="day">Sun & Mon</span>
              <span className="time">Closed</span>
            </div>
          </div>
        </div>

        {/* Column 4: Booking Policy */}
        <div className="lb-footer-col">
          <h4>Securing Your Appointment</h4>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7 }}>
            To experience the La Belle standard, please contact our team directly at{' '}
            <a href="tel:01784558002" style={{ color: 'rgba(212,160,167,0.9)' }}>01784 558002</a>.
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginTop: '0.75rem' }}>
            Please note we are unable to accept booking requests or cancellations via email.
          </p>
        </div>
      </div>

      <div className="lb-footer-bottom">
        <span>© {new Date().getFullYear()} La Belle Hair Salon. All rights reserved.</span>
        <span>23 Station Road, Ashford, TW15 2UP</span>
      </div>
    </footer>
  );
}
