/**
 * La Belle Hair Salon — The Atelier (Team Bios)
 * Design: Luxury Editorial Fashion Magazine
 * Tiers: Studio Intro · Directors · Senior Artists · Emerging Talent
 * Portrait images: greyscale → colour on hover (CSS only)
 */

import { Header, Footer } from "@/components/Layout";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Real team portrait photos
const portraits: Record<string, string> = {
  Rachael: "/manus-storage/Rachael_405cfcd6.png",
  Alice:   "/manus-storage/Alice_f7261ccb.png",
  Jodie:   "/manus-storage/Jodie_691f2f32.png",
  Beckie:  "/manus-storage/Beckie_807bc839.png",
  Maisie:  "/manus-storage/Maisie_977b32c1.png",
  Ellie:   "/manus-storage/Ellie_7fe88ee3.png",
  Leah:    "/manus-storage/Leah_4118fefe.png",
  Nico:    "/manus-storage/Nico_aa27458e.png",
};

interface TeamMember {
  name: string;
  role: string;
  copy: string;
  availability: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="lb-team-card">
      {/* Portrait — greyscale to colour on hover (image only) */}
      <div className="lb-portrait-card">
        <img
          src={portraits[member.name]}
          alt={`${member.name} — ${member.role}`}
          loading="lazy"
        />
      </div>

      {/* Meta — no hover effect on text */}
      <div className="lb-team-card-meta" style={{ pointerEvents: 'none' }}>
        <p className="role">{member.role}</p>
        <h3>{member.name}</h3>
        <p>{member.copy}</p>
        <p className="availability">{member.availability}</p>
      </div>
    </article>
  );
}

const directors: TeamMember[] = [
  {
    name: "Rachael",
    role: "Co-Owner & Master Stylist",
    copy: "A salon co-owner with over 23 years of master-level industry experience. Rachael specialises in precision cutting and foundational colour artistry.",
    availability: "Available Tuesday through Saturday",
  },
  {
    name: "Alice",
    role: "Co-Owner & Creative Director",
    copy: "Salon co-owner and the creative force driving La Belle. When she isn't curating luxury client transformations in-salon, Alice manages business operations and keeps our digital spaces popping.",
    availability: "Available In-Salon & Studio",
  },
];

const seniors: TeamMember[] = [
  {
    name: "Jodie",
    role: "Senior Stylist",
    copy: "Our longest-serving team pillar with a decade of dedication at La Belle, backed by extensive industry expertise. Master of tailored styles and classic colour transformations.",
    availability: "Available Thursdays & select Saturdays",
  },
  {
    name: "Beckie",
    role: "Senior Elite Stylist",
    copy: "An indispensable part of our creative family for over 8 years, bringing 22 years of elite hairdressing expertise directly to the styling chair.",
    availability: "Available Tuesdays & Wednesdays",
  },
];

const emerging: TeamMember[] = [
  {
    name: "Maisie",
    role: "1st Year Stylist",
    copy: "Level 3 qualified and stepping into her first year as an active stylist. Maisie brings fresh contemporary energy to the floor and offers specialised competitive tier pricing.",
    availability: "Available Fridays & Saturdays",
  },
  {
    name: "Ellie",
    role: "3rd Year Advanced Apprentice",
    copy: "Advancing through her third year of elite training. Ellie is expanding her portfolio across core styling dimensions and provides apprentice tier adjustments on bookings.",
    availability: "Available Tuesday, Wednesday, Friday & Saturday",
  },
  {
    name: "Leah",
    role: "3rd Year Advanced Apprentice",
    copy: "Polishing her technical mastery in her third year of advanced styling. A vital component of our floor team dedicated to premier care.",
    availability: "Available Tuesday, Wednesday, Friday & Saturday",
  },
  {
    name: "Nico",
    role: "2nd Year Apprentice",
    copy: "Moving dynamically through her second year. Nico is rapidly growing a specialised client portfolio focused heavily on high-end blowdrys and crisp precision cuts at apprentice introductory rates.",
    availability: "Available In-Salon Weekly",
  },
];

export default function Atelier() {
  useScrollReveal();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--lb-platinum)' }}>
      <Header />

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="lb-page-hero lb-fade-up">
        <p className="lb-label" style={{ marginBottom: '1rem' }}>
          Page 02
        </p>
        <h1 className="lb-heading lb-fade-up-2">
          The Atelier
        </h1>
        <p
          className="lb-subheading lb-fade-up-3"
          style={{ maxWidth: '600px', margin: '1.25rem auto 0' }}
        >
          Meet the master artists, technical colour specialists, and rising talent behind
          the La Belle standard.
        </p>
      </div>

      {/* ── STUDIO INTRODUCTION ───────────────────────────────── */}
      <section
        style={{
          padding: '4rem 2rem 6rem',
          background: 'var(--lb-platinum)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--lb-muted-text)',
            }}
          >
            A team dedicated to premium hair artistry, continuous education, and an
            effortless guest experience. Every artist at La Belle brings a unique
            perspective — united by a shared commitment to exceptional results.
          </p>
        </div>
      </section>

      {/* ── TIER 02: DIRECTORS ────────────────────────────────── */}
      <section
        id="directors"
        className="lb-section lb-reveal"
        style={{ background: 'var(--lb-card)' }}
      >
        <div className="lb-container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
              Tier 01
            </p>
            <h2 className="lb-heading">The Directors</h2>
          </div>

          <div className="lb-team-grid">
            {directors.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TIER 03: SENIOR ARTISTS ───────────────────────────── */}
      <section
        id="senior-artists"
        className="lb-section lb-reveal"
        style={{ background: 'var(--lb-platinum)' }}
      >
        <div className="lb-container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
              Tier 02
            </p>
            <h2 className="lb-heading">Senior Artists</h2>
          </div>

          <div className="lb-team-grid">
            {seniors.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TIER 04: EMERGING TALENT ──────────────────────────── */}
      <section
        id="emerging-talent"
        className="lb-section lb-reveal"
        style={{ background: 'var(--lb-card)' }}
      >
        <div className="lb-container">
          <div style={{ marginBottom: '3rem' }}>
            <p className="lb-label" style={{ color: 'var(--lb-pink)', marginBottom: '0.5rem' }}>
              Tier 03
            </p>
            <h2 className="lb-heading">Emerging Talent</h2>
            <p
              className="lb-body"
              style={{ marginTop: '0.75rem', maxWidth: '480px' }}
            >
              Our next generation of artists — bringing fresh energy, contemporary technique,
              and competitive introductory pricing.
            </p>
          </div>

          <div className="lb-team-grid">
            {emerging.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK CTA ──────────────────────────────────────────── */}
      <div className="lb-call-banner">
        <h2>Secure Your Chair at La Belle</h2>
        <p>
          Ready to work with one of our artists? Call our front desk directly to discuss
          your goals and secure your reservation.
        </p>
        <a href="tel:01784558002" className="lb-btn lb-btn-pink">
          Call to Book: 01784 558002
        </a>
      </div>

      <Footer />
    </div>
  );
}
