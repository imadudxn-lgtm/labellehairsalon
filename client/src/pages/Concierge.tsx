/**
 * La Belle Hair Salon — The Concierge (Contact & Protocols)
 * Design: Luxury Editorial Fashion Magazine
 * Sections: Page Header · Logistics Grid · Protocols · Reservation Card
 */

import { Header, Footer } from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Concierge() {
  useScrollReveal();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--lb-platinum)' }}>
      <Header />

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="lb-page-hero lb-fade-up">
        <p className="lb-label" style={{ marginBottom: '1rem' }}>Page 06</p>
        <h1 className="lb-heading lb-fade-up-2">The Concierge</h1>
        <p
          className="lb-subheading lb-fade-up-3"
          style={{ maxWidth: '620px', margin: '1.25rem auto 0' }}
        >
          Hours, location, and essential salon protocols. Everything you need to know
          ahead of your reservation with us at La Belle.
        </p>
      </div>

      {/* ── MAIN LOGISTICS GRID ───────────────────────────────── */}
      <section className="lb-section">
        <div className="lb-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'stretch',
            }}
            className="concierge-grid"
          >
            {/* Left: Studio Space — flex column so map grows to match right column height */}
            <div className="lb-fade-up-2" style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="lb-label" style={{ marginBottom: '0.75rem', color: 'var(--lb-pink)' }}>
                The Studio Space
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 400,
                  marginBottom: '1.25rem',
                  color: 'var(--lb-onyx)',
                }}
              >
                Find Us in Ashford
              </h2>
              <p className="lb-body" style={{ marginBottom: '1.5rem' }}>
                Located in the heart of Ashford, our space is designed to serve as a
                calming escape from the everyday.
              </p>

              {/* Address */}
              <div
                style={{
                  padding: '1.5rem',
                  background: 'var(--lb-card)',
                  marginBottom: '1.5rem',
                }}
              >
                <p className="lb-label" style={{ marginBottom: '0.5rem' }}>Address</p>
                <address
                  style={{
                    fontStyle: 'normal',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: 'var(--lb-onyx)',
                  }}
                >
                  La Belle Hair Salon<br />
                  23 Station Road<br />
                  Ashford, TW15 2UP
                </address>
              </div>

              {/* Map — flex-grow fills remaining space so bottom aligns with call-to-book box */}
              <div className="lb-map-container" style={{ flex: 1, minHeight: '260px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.5!2d-0.4663921!3d51.4353573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487673fc27aedba7%3A0xdeafe40384434083!2sLa%20Belle%20Hair%20Salon!5e0!3m2!1sen!2suk!4v1"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Belle Hair Salon map"
                />
              </div>
            </div>

            {/* Right: Hours */}
            <div className="lb-fade-up-3">
              <p className="lb-label" style={{ marginBottom: '0.75rem', color: 'var(--lb-pink)' }}>
                In-Salon Availability
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 400,
                  marginBottom: '1.25rem',
                  color: 'var(--lb-onyx)',
                }}
              >
                Studio Hours
              </h2>
              <p className="lb-body" style={{ marginBottom: '2rem' }}>
                To protect our team's creative balance and focus, we operate on a structured,
                dedicated weekly schedule.
              </p>

              <div className="lb-hours-table">
                <div className="lb-hours-row">
                  <span className="day-name">Tuesday</span>
                  <span className="day-time">9:00 AM – 6:00 PM</span>
                </div>
                <div className="lb-hours-row">
                  <span className="day-name">Wednesday</span>
                  <span className="day-time">10:00 AM – 8:00 PM</span>
                </div>
                <div className="lb-hours-row">
                  <span className="day-name">Thursday</span>
                  <span className="day-time">9:00 AM – 6:00 PM</span>
                </div>
                <div className="lb-hours-row">
                  <span className="day-name">Friday</span>
                  <span className="day-time">9:00 AM – 6:00 PM</span>
                </div>
                <div className="lb-hours-row">
                  <span className="day-name">Saturday</span>
                  <span className="day-time">9:00 AM – 5:00 PM</span>
                </div>
                <div className="lb-hours-row closed">
                  <span className="day-name">Sunday</span>
                  <span className="day-time">Closed</span>
                </div>
                <div className="lb-hours-row closed">
                  <span className="day-name">Monday</span>
                  <span className="day-time">Closed</span>
                </div>
              </div>

              {/* Phone CTA */}
              <div
                style={{
                  marginTop: '2.5rem',
                  padding: '1.5rem',
                  background: 'var(--lb-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <p className="lb-label">Call to Book</p>
                <a
                  href="tel:01784558002"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: 'var(--lb-onyx)',
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s ease',
                  }}
                >
                  01784 558002
                </a>
                <p style={{ fontSize: '0.8rem', color: 'var(--lb-muted-text)' }}>
                  We cannot accept bookings via email or social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SALON PROTOCOLS ───────────────────────────────────── */}
      <section
        className="lb-section"
        style={{ background: 'var(--lb-card)', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="lb-container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="lb-label" style={{ marginBottom: '0.75rem' }}>
              Salon Protocols
            </p>
            <h2 className="lb-heading">
              Booking Etiquette
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
            }}
          >
            {/* Protocol 1 */}
            <div className="lb-protocol-card lb-fade-up-2" style={{ paddingRight: '2rem' }}>
              <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
                01
              </p>
              <h3>Skin Patch Testing</h3>
              <p>
                All new colour clients must visit the studio for a mandatory, quick skin test
                a minimum of 48 hours prior to their chemical appointment. This ensures your
                safety and hair integrity.
              </p>
            </div>

            {/* Protocol 2 */}
            <div
              className="lb-protocol-card lb-fade-up-3"
              style={{
                paddingLeft: '2rem',
                paddingRight: '2rem',
                borderLeft: '1px solid rgba(28,27,26,0.08)',
              }}
            >
              <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
                02
              </p>
              <h3>Cancellation & Rescheduling</h3>
              <p>
                We respectfully require a minimum of 48 hours notice for any appointment
                changes or cancellations. This allows us time to accommodate guests on our
                waitlist.
              </p>
            </div>

            {/* Protocol 3 */}
            <div
              className="lb-protocol-card lb-fade-up-4"
              style={{
                paddingLeft: '2rem',
                borderLeft: '1px solid rgba(28,27,26,0.08)',
              }}
            >
              <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
                03
              </p>
              <h3>Direct Booking Protocol</h3>
              <p>
                We operate exclusively via telephone for reservations and adjustments. Our
                salon floor team cannot accept scheduling changes or booking requests over
                email or social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESERVATION CARD ──────────────────────────────────── */}
      <div className="lb-reservation-card" style={{ background: 'var(--lb-charcoal)' }}>
        <p
          className="lb-label"
          style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}
        >
          Ready to Book
        </p>
        <h2>Secure Your Atelier Reservation</h2>
        <p>
          Ready to consult with our master artists and technical specialists? Connect
          directly with our front desk right now to book your next bespoke transformation.
        </p>
        <a href="tel:01784558002" className="lb-btn lb-btn-white">
          Click to Call Studio: 01784 558002
        </a>
      </div>

      <Footer />

      {/* Responsive override for concierge grid */}
      <style>{`
        @media (max-width: 768px) {
          .concierge-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}
