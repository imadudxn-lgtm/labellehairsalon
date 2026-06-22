/**
 * La Belle Hair Salon — Couture Therapy (Treatments)
 * Design: Luxury Editorial Fashion Magazine
 * Sections: Page Header · Treatment Blocks · Action Banner
 */

import { Header, Footer } from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const THERAPY_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663778712984/Hgwuu9TvRSx4eMpz7d9SK4/couture-therapy-bg-h7omN7moUxG5U9v4KKHsCC.webp";

export default function CoutureTherapy() {
  useScrollReveal();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--lb-platinum)' }}>
      <Header />

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="lb-page-hero lb-fade-up">
        <p className="lb-label" style={{ marginBottom: '1rem' }}>Page 04</p>
        <h1 className="lb-heading lb-fade-up-2">Couture Therapy</h1>
        <p
          className="lb-subheading lb-fade-up-3"
          style={{ maxWidth: '640px', margin: '1.25rem auto 0' }}
        >
          High-performance molecular repair, advanced scalp rejuvenation, and intense
          hydration systems. Because flawless styling is built on a foundation of
          absolute hair integrity.
        </p>
      </div>

      {/* ── HERO IMAGE ────────────────────────────────────────── */}
      <div
        style={{
          width: '100%',
          height: '420px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={THERAPY_BG}
          alt="Luxury hair care products — Olaplex and Redken"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.92)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 60%, var(--lb-platinum) 100%)',
          }}
        />
      </div>

      {/* ── TREATMENT MENU ────────────────────────────────────── */}
      <section className="lb-section">
        <div className="lb-container" style={{ maxWidth: '860px' }}>

          {/* ── Block 1: Advanced Molecular Bond Repair ─────── */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
                Block 01
              </p>
              <h2 className="lb-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Advanced Molecular Bond Repair
              </h2>
            </div>

            <div className="lb-treatment-item lb-fade-up-2">
              <div className="lb-treatment-header">
                <h3>Olaplex No.1 & No.2 System</h3>
                <span className="price">£32</span>
              </div>
              <p>
                The definitive, 2-step premium molecular hair service. Engineered to actively
                prevent and repair structural damage during colouring and chemical processes,
                leaving your hair visibly stronger, healthier, and highly resilient.
              </p>
            </div>

            <div className="lb-treatment-item lb-fade-up-3">
              <div className="lb-treatment-header">
                <h3>Olaplex No.2 Intensive Express</h3>
                <span className="price">£16</span>
              </div>
              <p>
                A focused, standalone intensive care service designed for a quick, impactful
                shot of targeted bond-rebuilding. The perfect quick ritual to schedule between
                your major colour appointments to refresh your hair's internal condition.
              </p>
            </div>
          </div>

          {/* ── Block 2: Target Moisture & Strength ─────────── */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
                Block 02
              </p>
              <h2 className="lb-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Target Moisture & Strength
              </h2>
            </div>

            <div className="lb-treatment-item lb-fade-up-2">
              <div className="lb-treatment-header">
                <h3>Redken Acidic Bonding Concentrate</h3>
                <span className="price">£16</span>
              </div>
              <p>
                An advanced 3-part custom bonding service that balances your hair's natural pH
                levels. This technical therapy leaves hair up to twice as strong and 14 times
                smoother with a long-lasting, instantly healthy reflection.
              </p>
            </div>

            <div className="lb-treatment-item lb-fade-up-3">
              <div className="lb-treatment-header">
                <h3>Olaplex 4-in-1 Moisture Perfector</h3>
                <span className="price">£16</span>
              </div>
              <p>
                A multi-functional, ultra-concentrated professional mask that injects deep
                moisture, intense surface shine, and structural repair into compromised or
                porous hair textures.
              </p>
            </div>

            <div className="lb-treatment-item lb-fade-up-4">
              <div className="lb-treatment-header">
                <h3>Redken Mega Mask Deep Therapy</h3>
                <span className="price">£10</span>
              </div>
              <p>
                A smart dual-chamber treatment that combines a deep conditioning mask with an
                extended longevity care booster. Custom-selected and tailored perfectly to your
                hair's unique hydration or structural needs.
              </p>
            </div>
          </div>

          {/* ── Block 3: Scalp Skin Health ───────────────────── */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
                Block 03
              </p>
              <h2 className="lb-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Scalp Skin Health
              </h2>
              <p className="lb-body" style={{ marginTop: '0.5rem' }}>
                The Scalp Facial
              </p>
            </div>

            {/* Spotlight card */}
            <div className="lb-spotlight-card lb-fade-up-2">
              <span className="price-tag">£32</span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                  fontWeight: 400,
                  marginBottom: '1rem',
                  color: 'var(--lb-onyx)',
                }}
              >
                Dermabrasion Rejuvenating Scalp Facial
              </h3>
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  color: 'var(--lb-muted-text)',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
              >
                An anti-aging skin therapy designed exclusively to regenerate and revitalise
                the scalp through gentle, professional exfoliation. Acting exactly like a
                premium facial for the scalp, it sweeps away product build-up, debris, and
                impurities to accelerate skin surface regeneration and clear the optimal path
                for healthy hair growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTION BANNER ─────────────────────────────────────── */}
      <div
        style={{
          background: 'var(--lb-card)',
          padding: '4rem 2rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(212,160,167,0.2)',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 300,
              color: 'var(--lb-onyx)',
              marginBottom: '1rem',
            }}
          >
            Ready For Your Own Transformation?
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'var(--lb-muted-text)',
              marginBottom: '2rem',
            }}
          >
            Every look we create is completely custom-tailored to the individual. Call our
            front desk directly to discuss your goals and secure your reservation with an artist.
          </p>
          <a href="tel:01784558002" className="lb-btn lb-btn-primary">
            Call to Book: 01784 558002
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
