/**
 * La Belle Hair Salon — Homepage
 * Design: Luxury Editorial Fashion Magazine
 * Sections: Hero · Welcome · Pillars · Client Love · Social Feed · Location
 * Pure CSS interactions — no JavaScript
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Header, Footer } from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663778712984/Hgwuu9TvRSx4eMpz7d9SK4/hero-backdrop-SCPA5TXeEbqEntJMuE8rbt.webp";
const WELCOME_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663778712984/Hgwuu9TvRSx4eMpz7d9SK4/welcome-section-oM8RtoAfiPw7eK8Mqeke2F.webp";

const REVIEWS = [
  { quote: "Absolutely outstanding service, extremely friendly and always go that extra mile. I've been coming here for years and I wouldn't go anywhere else.", author: "Sophie W." },
  { quote: "The staff know exactly what they are doing and keep you informed about everything they do to your hair. They are so gentle and make sure you leave looking amazing.", author: "Isha M." },
  { quote: "My visits to this salon have been excellent and the atmosphere is absolutely fantastic. The staff give excellent advice regarding your choice of colour.", author: "Bhavita M." },
  { quote: "I have been coming to this salon for over a year now and I am always so happy with my hair. The team is incredibly professional, welcoming, and they really take the time to listen to what you want.", author: "Chloe T." },
  { quote: "The best salon experience I've had. They completely transformed my blonde, kept it looking so healthy, and the whole atmosphere is just lovely and relaxed.", author: "Megan R." },
  { quote: "Such a brilliant team. They are so knowledgeable about colour and hair health. You get luxury treatment but feel like you're just chatting with friends.", author: "Sarah L." },
];

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);
  const [fading, setFading] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveReview(prev => (prev + 1) % REVIEWS.length);
        setFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--lb-platinum)' }}>
      <Header />

      {/* ── HERO SECTION ─────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(28,27,26,0.45) 0%, rgba(28,27,26,0.25) 50%, rgba(28,27,26,0.55) 100%)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '0 1.5rem',
            maxWidth: '860px',
          }}
        >
          <p
            className="lb-label lb-fade-up-1"
            style={{ color: 'rgba(245,244,242,0.6)', marginBottom: '1.5rem' }}
          >
            La Belle Hair Salon — Ashford
          </p>
          <h1
            className="lb-display lb-fade-up-2"
            style={{ color: 'white', marginBottom: '1.5rem' }}
          >
            Great hair isn't a luxury.
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>It's the standard.</em>
          </h1>
          <p
            className="lb-fade-up-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
              color: 'rgba(245,244,242,0.8)',
              lineHeight: 1.75,
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
            }}
          >
            Welcome to a modern salon experience where advanced hair health meets a warm,
            down-to-earth team. Step in for expert balayage and styling; leave feeling
            completely like yourself.
          </p>
          <div className="lb-fade-up-4">
            <Link href="/menu" className="lb-btn lb-btn-white">
              Explore The Menu
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'fadeIn 1s ease 1.2s both',
          }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,244,242,0.4)' }}>
            Scroll
          </span>
          <div style={{ width: '1px', height: '40px', background: 'rgba(245,244,242,0.3)' }} />
        </div>
      </section>

      {/* ── WELCOME SECTION ──────────────────────────────────── */}
      <section className="lb-section lb-reveal" style={{ background: 'var(--lb-platinum)' }}>
        <div className="lb-container">
          <div className="lb-welcome-grid">
            {/* Left anchor */}
            <div className="lb-welcome-anchor lb-fade-up-1">
              <div className="lb-welcome-anchor">
                <span className="lb-label" style={{ display: 'block', marginBottom: '1rem' }}>
                  Welcome to La Belle
                </span>
                <div
                  style={{
                    width: '1px',
                    height: '80px',
                    background: 'var(--lb-rule)',
                    margin: '1rem 0',
                  }}
                />
              </div>
            </div>

            {/* Right content */}
            <div>
              <h2
                className="lb-heading lb-fade-up-2"
                style={{ marginBottom: '1.5rem' }}
              >
                High-End Artistry.
                <br />
                <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--lb-muted-text)' }}>
                  Relaxed Vibes.
                </em>
              </h2>
              <p className="lb-body lb-fade-up-3" style={{ maxWidth: '560px' }}>
                At La Belle, we believe you shouldn't have to choose between a five-star luxury
                salon finish and a comfortable, welcoming environment. Our space is built on
                effortless premium service — combining advanced, modern colour techniques with a
                down-to-earth atmosphere where you can truly unwind.
              </p>
              <p className="lb-body lb-fade-up-4" style={{ maxWidth: '560px', marginTop: '1rem' }}>
                No pretension, just incredible hair tailored precisely to you.
              </p>
              <div className="lb-fade-up-5" style={{ marginTop: '2.5rem' }}>
                <Link href="/atelier" className="lb-btn lb-btn-outline">
                  Meet The Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="lb-divider" />

      {/* ── EXPERIENCE PILLARS ───────────────────────────────── */}
      <section className="lb-section lb-reveal" style={{ background: 'var(--lb-platinum)' }}>
        <div className="lb-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '4rem',
              marginBottom: '3.5rem',
              alignItems: 'end',
            }}
            className="pillars-header-grid"
          >
            <div>
              <p className="lb-label lb-fade-up-1" style={{ marginBottom: '0.75rem' }}>
                The Experience
              </p>
              <div style={{ width: '2rem', height: '1px', background: 'var(--lb-pink)', marginTop: '0.5rem' }} />
            </div>
            <h2 className="lb-heading lb-fade-up-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Three Pillars of the La Belle Standard
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Pillar 1 */}
            <div className="lb-pillar-card lb-fade-up-2">
              <p className="lb-label" style={{ marginBottom: '0.75rem', color: 'var(--lb-pink)' }}>
                01
              </p>
              <h3>Bespoke Artistry</h3>
              <p>
                Tailored cutting, precision styling, and custom colour formulations designed
                entirely around your unique hair goals.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="lb-pillar-card lb-fade-up-3">
              <p className="lb-label" style={{ marginBottom: '0.75rem', color: 'var(--lb-pink)' }}>
                02
              </p>
              <h3>Complimentary Luxuries</h3>
              <p>
                Relax during your visit with our premium specialty coffee menu, custom lattes,
                and a signature Lotus Biscoff treat.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="lb-pillar-card lb-fade-up-4">
              <p className="lb-label" style={{ marginBottom: '0.75rem', color: 'var(--lb-pink)' }}>
                03
              </p>
              <h3>Advanced Protection</h3>
              <p>
                We prioritise the long-term integrity of your hair. Our specialised colour
                transformations come fully loaded with premier bond-building care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOVE CAROUSEL ─────────────────────────────── */}
      <section className="lb-quote-section">
        <div className="lb-container">
          <p className="lb-label lb-fade-up-1" style={{ marginBottom: '0.75rem' }}>
            Client Love
          </p>
          <h2
            className="lb-heading lb-fade-up-2"
            style={{ marginBottom: '3.5rem' }}
          >
            What Our Guests Say
          </h2>

          {/* React-driven infinite carousel */}
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? 'translateY(6px)' : 'translateY(0)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                textAlign: 'center',
              }}
            >
              <blockquote
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.55,
                  color: 'var(--lb-onyx)',
                  marginBottom: '1.25rem',
                  quotes: '"\u201C" "\u201D"',
                }}
              >
                &ldquo;{REVIEWS[activeReview].quote}&rdquo;
              </blockquote>
              <cite
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--lb-muted-text)',
                }}
              >
                {REVIEWS[activeReview].author}
              </cite>
            </div>
          </div>

          {/* Animated indicator dots */}
          <div className="lb-carousel-dots" style={{ marginTop: '3rem' }}>
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setFading(true); setTimeout(() => { setActiveReview(i); setFading(false); }, 400); }}
                className={`lb-carousel-dot${i === activeReview ? ' active' : ''}`}
                aria-label={`Review ${i + 1}`}
                style={{ background: 'none', border: 'none', padding: '4px', cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIDE THE SALON — SOCIAL FEED ───────────────────── */}
      <section className="lb-section lb-reveal" style={{ background: 'var(--lb-platinum)' }}>
        <div className="lb-container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="lb-label lb-fade-up-1" style={{ marginBottom: '0.75rem' }}>
              Social
            </p>
            <h2 className="lb-heading lb-fade-up-2">
              Inside the Salon
            </h2>
          </div>

          <div className="lb-social-grid">
            {/* Instagram Reel */}
            <div className="lb-social-card lb-fade-up-2">
              <div className="lb-social-card-header">
                <div className="platform-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--lb-pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <span>Instagram</span>
                <a href="https://www.instagram.com/reel/DZxv0WSuHqz/" target="_blank" rel="noopener noreferrer">
                  View Reel →
                </a>
              </div>
              <div className="lb-social-embed-wrapper">
                <iframe
                  src="https://www.instagram.com/reel/DZxv0WSuHqz/embed/"
                  width="400"
                  height="700"
                  style={{ border: 0, display: 'block', width: '100%', height: '700px' }}
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="La Belle Instagram Reel"
                />
              </div>
            </div>

            {/* Facebook Reel */}
            <div className="lb-social-card lb-fade-up-3">
              <div className="lb-social-card-header">
                <div className="platform-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--lb-pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
                <span>Facebook</span>
                <a href="https://www.facebook.com/reel/1324556442415743/" target="_blank" rel="noopener noreferrer">
                  View Reel →
                </a>
              </div>
              <div className="lb-social-embed-wrapper">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1324556442415743%2F&show_text=false&appId"
                  width="400"
                  height="700"
                  style={{ border: 0, display: 'block', width: '100%', height: '700px' }}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="La Belle Facebook Reel"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION MAP ─────────────────────────────────────── */}
      <section style={{ background: 'var(--lb-card)' }}>
        <div className="lb-container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <p className="lb-label lb-fade-up-1" style={{ marginBottom: '0.75rem' }}>
            Find Us
          </p>
          <h2 className="lb-heading lb-fade-up-2" style={{ marginBottom: '0.75rem' }}>
            Our Location
          </h2>
          <p className="lb-body lb-fade-up-3" style={{ marginBottom: '2rem' }}>
            23 Station Road, Ashford, TW15 2UP
          </p>

          {/* Map aligned under location text — full container width for even left/right padding */}
          <div
            style={{
              width: '100%',
              height: '400px',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(212,160,167,0.3)',
              boxShadow: '0 2px 16px rgba(28,27,26,0.08)',
              marginBottom: '2.5rem',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.5!2d-0.4663921!3d51.4353573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487673fc27aedba7%3A0xdeafe40384434083!2sLa%20Belle%20Hair%20Salon!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Belle Hair Salon location map"
            />
          </div>
        </div>

        <div className="lb-container" style={{ paddingBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p className="lb-label" style={{ marginBottom: '0.35rem' }}>Studio Hours</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--lb-muted-text)' }}>
              Tue–Fri: 9:00–18:00 &nbsp;·&nbsp; Wed: 10:00–20:00 &nbsp;·&nbsp; Sat: 9:00–17:00
            </p>
          </div>
          <Link href="/concierge" className="lb-btn lb-btn-outline">
            Full Directions & Hours
          </Link>
        </div>
      </section>

      {/* ── BOOK CTA BANNER ──────────────────────────────────── */}
      <div className="lb-call-banner">
        <h2>Your Appointment Awaits</h2>
        <p>
          Call our front desk directly to discuss your goals and secure your reservation
          with one of our master artists.
        </p>
        <a href="tel:01784558002" className="lb-btn lb-btn-pink">
          Call to Book: 01784 558002
        </a>
      </div>

      <Footer />
    </div>
  );
}
