/**
 * La Belle Hair Salon — The Menu (Pricing Matrix)
 * Design: Luxury Editorial Fashion Magazine
 * Pure CSS radio-based tab switching — no JavaScript
 * All 6 service categories + refreshments bar
 */

import { Header, Footer } from "@/components/Layout";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ── Service data ─────────────────────────────────────────────
interface ServiceRow {
  name: string;
  senior: string;
  maisie: string;
  ellie: string;
  leah: string;
}

const cutting: ServiceRow[] = [
  { name: "Cut & Blowdry",           senior: "£49",   maisie: "£44",   ellie: "£39",   leah: "£37"   },
  { name: "Cut & Bouncy/Curls",      senior: "£56",   maisie: "£51",   ellie: "£50",   leah: "£42"   },
  { name: "Wash & Cut",              senior: "£41",   maisie: "£37",   ellie: "£33",   leah: "£31"   },
  { name: "Dry Cut",                 senior: "£37",   maisie: "£34",   ellie: "£30",   leah: "£28"   },
  { name: "Restyle & Blowdry",       senior: "£58",   maisie: "£52",   ellie: "£47",   leah: "£44"   },
  { name: "Fringe Trim",             senior: "£7.50", maisie: "—",     ellie: "—",     leah: "—"     },
  { name: "Men's Cut & Finish",      senior: "£35",   maisie: "—",     ellie: "—",     leah: "—"     },
  { name: "Men's Restyle",           senior: "£46",   maisie: "—",     ellie: "—",     leah: "—"     },
  { name: "Men's Dry Cut",           senior: "£33",   maisie: "—",     ellie: "—",     leah: "—"     },
  { name: "Children 4yrs & Under",   senior: "£20",   maisie: "—",     ellie: "—",     leah: "—"     },
  { name: "5–10yrs Dry Cut",         senior: "£25",   maisie: "—",     ellie: "—",     leah: "—"     },
  { name: "5–10yrs Wash & Cut",      senior: "£29",   maisie: "—",     ellie: "—",     leah: "—"     },
  { name: "5–10yrs Cut & Blowdry",   senior: "£35",   maisie: "—",     ellie: "—",     leah: "—"     },
];

const blowdry: ServiceRow[] = [
  { name: "Blowdry",                 senior: "£37",   maisie: "£34",   ellie: "£30",   leah: "£28"   },
  { name: "Bouncy Blowdry",          senior: "£48",   maisie: "£43",   ellie: "£38",   leah: "£36"   },
  { name: "Hair Up",                 senior: "£52",   maisie: "£45",   ellie: "£42",   leah: "£39"   },
  { name: "Curls or Waves",          senior: "£39",   maisie: "£35",   ellie: "£32",   leah: "£30"   },
];

const balayage: ServiceRow[] = [
  { name: "Soft & Subtle Short",           senior: "£147", maisie: "£132", ellie: "£122", leah: "£113" },
  { name: "Soft & Subtle Long",            senior: "£178", maisie: "£160", ellie: "£148", leah: "£137" },
  { name: "Loads of Lightening Short",     senior: "£164", maisie: "£148", ellie: "£136", leah: "£126" },
  { name: "Loads of Lightening Long",      senior: "£194", maisie: "£175", ellie: "£148", leah: "£149" },
  { name: "Add Root Tint",                 senior: "£49",  maisie: "£44",  ellie: "£39",  leah: "£39"  },
  { name: "Add Stretched Root",            senior: "£70",  maisie: "£63",  ellie: "£56",  leah: "£56"  },
  { name: "Face Frame Short",              senior: "£133", maisie: "£120", ellie: "£110", leah: "£103" },
  { name: "Face Frame Long",               senior: "£163", maisie: "£147", ellie: "£135", leah: "£126" },
];

const foils: ServiceRow[] = [
  { name: "Half Head Short",         senior: "£78",  maisie: "£70",  ellie: "£65",  leah: "£59"  },
  { name: "Half Head Long",          senior: "£109", maisie: "£98",  ellie: "£91",  leah: "£82"  },
  { name: "Full Head Short",         senior: "£95",  maisie: "£86",  ellie: "£79",  leah: "£72"  },
  { name: "Full Head Long",          senior: "£126", maisie: "£113", ellie: "£104", leah: "£95"  },
  { name: "T Section Short",         senior: "£64",  maisie: "£58",  ellie: "£53",  leah: "£48"  },
  { name: "T Section Long",          senior: "£94",  maisie: "£85",  ellie: "£78",  leah: "£71"  },
];

const tint: ServiceRow[] = [
  { name: "Full Head Tint Short",           senior: "£92",  maisie: "£83",  ellie: "£74",  leah: "£69"  },
  { name: "Full Head Tint Long",            senior: "£112", maisie: "£101", ellie: "£90",  leah: "£84"  },
  { name: "Root Tint 0–8 Weeks",            senior: "£69",  maisie: "£62",  ellie: "£55",  leah: "£55"  },
  { name: "Root Tint 8–12 Weeks",           senior: "£81",  maisie: "£73",  ellie: "£65",  leah: "£65"  },
  { name: "Root Tint & Refresh",            senior: "£98",  maisie: "£88",  ellie: "£78",  leah: "£78"  },
  { name: "Bleach Root & Tone (0–6 Wks)",   senior: "£125", maisie: "£113", ellie: "£100", leah: "£94"  },
  { name: "Bleach Root & Tone (6–12 Wks)",  senior: "£154", maisie: "£139", ellie: "£123", leah: "£116" },
];

const finishes: ServiceRow[] = [
  { name: "Free Straight Blowdry",    senior: "FREE", maisie: "FREE", ellie: "FREE", leah: "FREE" },
  { name: "Cut & Blowdry",            senior: "£37",  maisie: "£37",  ellie: "£37",  leah: "£37"  },
  { name: "Cut & Bouncy/Curls",       senior: "£48",  maisie: "£48",  ellie: "£48",  leah: "£48"  },
  { name: "Curls/Bouncy Blowdry",     senior: "£11",  maisie: "£11",  ellie: "£11",  leah: "£11"  },
  { name: "Restyle & Blowdry",        senior: "£48",  maisie: "£48",  ellie: "£48",  leah: "£48"  },
  { name: "Toner (Short / Long)",     senior: "£37 / £41", maisie: "£37 / £41", ellie: "£37 / £41", leah: "£37 / £41" },
];

// ── Service table component ───────────────────────────────────
interface ServiceTableProps {
  title: string;
  note?: string;
  rows: ServiceRow[];
  stylist: "senior" | "maisie" | "ellie" | "leah";
}

function ServiceTable({ title, note, rows, stylist }: ServiceTableProps) {
  return (
    <div>
      <div className="lb-service-category-header">
        {title}
        {note && (
          <span
            style={{
              fontSize: '0.7rem',
              fontFamily: "'DM Sans', sans-serif",
              color: 'var(--lb-pink)',
              letterSpacing: '0.08em',
              marginLeft: '1rem',
              fontStyle: 'normal',
            }}
          >
            {note}
          </span>
        )}
      </div>
      <table className="lb-service-table">
        <thead>
          <tr>
            <th style={{ width: '70%' }}>Service</th>
            <th style={{ textAlign: 'right' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const price = row[stylist];
            return (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td className={price === "—" ? "price-na" : ""}>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Full pricing panel for a given stylist ────────────────────
function PricingPanel({ stylist }: { stylist: "senior" | "maisie" | "ellie" | "leah" }) {
  return (
    <div>
      <ServiceTable title="Cutting & Styling" rows={cutting} stylist={stylist} />
      <ServiceTable title="Blowdry & Styling" rows={blowdry} stylist={stylist} />
      <ServiceTable
        title="Balayage"
        note="Includes Tone & Olaplex across all tiers"
        rows={balayage}
        stylist={stylist}
      />
      <ServiceTable title="Foils" rows={foils} stylist={stylist} />
      <ServiceTable title="Tint & Root Touchup" rows={tint} stylist={stylist} />
      <ServiceTable
        title="Technical Colour Finishes"
        note="When booked alongside a colour service"
        rows={finishes}
        stylist={stylist}
      />
    </div>
  );
}

// ── Main page component ───────────────────────────────────────
export default function MenuPage() {
  useScrollReveal();
  return (
    <div style={{ minHeight: '100vh', background: 'var(--lb-platinum)' }}>
      <Header />

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="lb-page-hero lb-fade-up">
        <p className="lb-label" style={{ marginBottom: '1rem' }}>Page 03</p>
        <h1 className="lb-heading lb-fade-up-2">The Menu</h1>
        <p
          className="lb-subheading lb-fade-up-3"
          style={{ maxWidth: '560px', margin: '1.25rem auto 0' }}
        >
          Every service, every price — transparently presented. Select your stylist
          to view their personalised pricing tier.
        </p>
      </div>

      {/* Asymmetric editorial intro strip */}
      <div
        style={{
          background: 'var(--lb-card)',
          padding: '2rem 0',
          borderTop: '1px solid rgba(212,160,167,0.2)',
        }}
      >
        <div
          className="lb-container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <p className="lb-label" style={{ color: 'var(--lb-muted-text)' }}>
            Pricing includes VAT &middot; All prices subject to consultation
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--lb-muted-text)', lineHeight: 1.65 }}>
            Balayage services include Tone &amp; Olaplex bond protection across all tiers.
            A complimentary straight blowdry is included with every colour service.
          </p>
        </div>
      </div>

      {/* ── PRICING TABS ──────────────────────────────────────── */}
      <section className="lb-section" style={{ paddingTop: '3rem' }}>
        <div className="lb-container">

          {/* Pure CSS radio-based tab switcher */}
          <div className="lb-pricing-tabs">
            <input type="radio" name="stylist-toggle" id="tab-senior" defaultChecked />
            <input type="radio" name="stylist-toggle" id="tab-maisie" />
            <input type="radio" name="stylist-toggle" id="tab-ellie" />
            <input type="radio" name="stylist-toggle" id="tab-leah" />

            {/* Tab labels */}
            <div className="lb-pricing-tab-labels">
              <label className="lb-pricing-tab-label" htmlFor="tab-senior">
                Senior Stylist
              </label>
              <label className="lb-pricing-tab-label" htmlFor="tab-maisie">
                Maisie (1st Year)
              </label>
              <label className="lb-pricing-tab-label" htmlFor="tab-ellie">
                Ellie (3rd Year)
              </label>
              <label className="lb-pricing-tab-label" htmlFor="tab-leah">
                Leah (3rd Year)
              </label>
            </div>

            {/* Panels */}
            <div className="lb-pricing-panels">
              <div id="panel-senior" className="lb-pricing-panel">
                <PricingPanel stylist="senior" />
              </div>
              <div id="panel-maisie" className="lb-pricing-panel">
                <PricingPanel stylist="maisie" />
              </div>
              <div id="panel-ellie" className="lb-pricing-panel">
                <PricingPanel stylist="ellie" />
              </div>
              <div id="panel-leah" className="lb-pricing-panel">
                <PricingPanel stylist="leah" />
              </div>
            </div>
          </div>

          {/* ── REFRESHMENTS BAR ────────────────────────────── */}
          <div className="lb-refreshments">
            <h3>Complimentary Refreshments</h3>
            <div className="lb-refreshments-grid">
              <div className="lb-refreshments-col">
                <h4>Hot Selection</h4>
                <p>Tea & Decaf, Coffee & Decaf, Latte, Cappuccino, Hot Choccy</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--lb-muted-text)' }}>
                  Optional: Whipped cream & marshmallows or custom syrup
                </p>
              </div>
              <div className="lb-refreshments-col">
                <h4>Gourmet Infusions</h4>
                <p>Peanut Butter · Vanilla · Peppermint · Orange Hazelnut · Speculoos Gingerbread · Salted Caramel</p>
              </div>
              <div className="lb-refreshments-col">
                <h4>Cold Refreshments</h4>
                <p>Orange or Apple & Blackcurrant Squash, Chilled Water</p>
              </div>
              <div className="lb-refreshments-col">
                <h4>Milk Options</h4>
                <p>Oat Milk or traditional Dairy alternatives available</p>
              </div>
            </div>
            <p className="lb-allergen-notice">
              We cannot guarantee our complimentary refreshments bar is 100% free of trace allergens.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOOK CTA ──────────────────────────────────────────── */}
      <div className="lb-call-banner">
        <h2>Ready to Book?</h2>
        <p>
          Call our front desk directly to discuss your goals and secure your reservation
          with one of our artists.
        </p>
        <a href="tel:01784558002" className="lb-btn lb-btn-pink">
          Call to Book: 01784 558002
        </a>
      </div>

      <Footer />
    </div>
  );
}
