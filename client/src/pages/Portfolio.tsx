/**
 * La Belle Hair Salon — The Portfolio (Gallery)
 * Design: Luxury Editorial Fashion Magazine
 * Masonry asymmetric lookbook grid
 * Greyscale → colour on hover with attribution overlay
 */

import { Header, Footer } from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Portfolio images — using high-quality Unsplash hair photography
// User will replace with actual portfolio1.jpg–portfolio7.jpg assets
const portfolioItems = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&fit=crop",
    alt: "Balayage transformation",
    credit: "Artistry by Rachael",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&fit=crop",
    alt: "Precision colour work",
    credit: "Artistry by Alice",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80&fit=crop",
    alt: "Blonde balayage",
    credit: "Artistry by Jodie",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80&fit=crop",
    alt: "Hair styling",
    credit: "Artistry by Beckie",
  },
  {
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80&fit=crop",
    alt: "Colour transformation",
    credit: "Artistry by Maisie",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80&fit=crop",
    alt: "Luxury blowdry",
    credit: "Artistry by Ellie",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80&fit=crop",
    alt: "Editorial hair look",
    credit: "Artistry by Leah",
  },
];

export default function Portfolio() {
  useScrollReveal();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--lb-platinum)' }}>
      <Header />

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="lb-page-hero lb-fade-up">
        <p className="lb-label" style={{ marginBottom: '1rem' }}>Page 05</p>
        <h1 className="lb-heading lb-fade-up-2">The Gallery</h1>
        <p
          className="lb-subheading lb-fade-up-3"
          style={{ maxWidth: '560px', margin: '1.25rem auto 0' }}
        >
          Real transformations, premium colour artistry, and tailored cuts created
          in-studio by the La Belle team.
        </p>
      </div>

      {/* ── MASONRY LOOKBOOK GRID ─────────────────────────────── */}
      <section className="lb-section" style={{ paddingTop: '3rem' }}>
        <div className="lb-container">
          <div className="lb-masonry-grid">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="lb-portfolio-item">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={idx < 3 ? "eager" : "lazy"}
                />
                <div className="lb-portfolio-overlay">
                  <span>{item.credit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Caption */}
          <p
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              fontSize: '0.8rem',
              color: 'var(--lb-muted-text)',
              letterSpacing: '0.06em',
            }}
          >
            Hover over any image to reveal the full colour transformation
          </p>
        </div>
      </section>

            {/* ── SOCIAL CTAs ──────────────────────────────────── */}
      {/* Instagram */}
      <section
        style={{
          background: 'var(--lb-card)',
          padding: '4rem 2rem',
          textAlign: 'center',
          borderBottom: '1px solid rgba(212,160,167,0.15)',
        }}
      >
        <p className="lb-label" style={{ marginBottom: '0.75rem' }}>
          Instagram
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 300,
            marginBottom: '1rem',
            color: 'var(--lb-onyx)',
          }}
        >
          See More on Instagram
        </h2>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--lb-muted-text)',
            marginBottom: '1.75rem',
          }}
        >
          Follow us for daily inspiration, behind-the-scenes moments, and the latest
          colour transformations from our studio.
        </p>
        <a
          href="https://www.instagram.com/labellehairsalon/"
          target="_blank"
          rel="noopener noreferrer"
          className="lb-btn lb-btn-outline"
        >
          @labellehairsalon on Instagram
        </a>
      </section>

      {/* Facebook */}
      <section
        style={{
          background: 'var(--lb-platinum)',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <p className="lb-label" style={{ marginBottom: '0.75rem' }}>
          Facebook
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 300,
            marginBottom: '1rem',
            color: 'var(--lb-onyx)',
          }}
        >
          See More on Facebook
        </h2>
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--lb-muted-text)',
            marginBottom: '1.75rem',
          }}
        >
          Like our page for exclusive offers, team updates, and behind-the-scenes
          content from the La Belle studio.
        </p>
        <a
          href="https://www.facebook.com/labellehairsalon"
          target="_blank"
          rel="noopener noreferrer"
          className="lb-btn lb-btn-outline"
        >
          La Belle Hair Salon on Facebook
        </a>
      </section>

      {/* ── BOOK CTA ──────────────────────────────────────────── */}
      <div className="lb-call-banner">
        <h2>Book Your Transformation</h2>
        <p>
          Inspired by what you see? Call our front desk to discuss your vision and
          secure your reservation.
        </p>
        <a href="tel:01784558002" className="lb-btn lb-btn-pink">
          Call to Book: 01784 558002
        </a>
      </div>

      <Footer />
    </div>
  );
}
