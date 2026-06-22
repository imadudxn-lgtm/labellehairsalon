# La Belle Hair Salon — Design Brief

## Chosen Approach: Luxury Editorial Fashion Magazine

### Design Movement
High-end editorial print magazine (think Vogue, Harper's Bazaar) translated to digital. Restrained, confident, and supremely polished.

### Core Principles
1. **Radical whitespace** — Sections breathe with 120–160px vertical padding. Nothing feels crowded.
2. **Typographic hierarchy as layout** — Headings do structural work. No decorative borders or boxes.
3. **Monochrome-first photography** — All team/portfolio images default to greyscale; colour reveals on hover.
4. **Selective accent** — La Belle Blossom Pink (#D4A0A7) appears only on interactive triggers, CTAs, and active states.

### Color Philosophy
- **Background**: `#F5F4F2` — Ultra-soft platinum grey (warm, not cold)
- **Card / Section tint**: `#ECEAE7` — Muted warm grey for depth
- **Typography**: `#1C1B1A` — Midnight Onyx (off-black, premium softness)
- **Accent**: `#D4A0A7` — La Belle Blossom Pink (used sparingly)
- **Footer / Deep sections**: `#2E2C2A` — Muted charcoal

### Layout Paradigm
Asymmetric editorial columns. Left-anchored text labels. Right-flowing body content. Full-bleed hero. Masonry portfolio grid. No centered-everything layouts.

### Signature Elements
1. Thin horizontal rule lines (1px, `#D4A0A7`) used as section dividers — never boxes
2. Oversized section numerals in faint platinum as background texture
3. Staggered letter-delay animation on headings

### Interaction Philosophy
Interactions are invisible until needed. Hover states are buttery (300ms ease). Navigation uses CSS checkbox trick — no JS.

### Animation
- Entry: `fadeUp` — opacity 0→1, translateY 8px→0, 600ms ease-out
- Stagger: 80ms delay per heading word
- Image hover: greyscale(1)→greyscale(0) + scale(1.02), 300ms ease
- Carousel: CSS `animation` with `animation-delay` offsets, 6s cycle

### Typography System
- **Display / Headings**: `Cormorant Garamond` — Elegant serif, high contrast strokes
- **Body / UI**: `DM Sans` — Clean, modern, readable
- **Accent / Quotes**: `Cormorant Garamond` italic

### Brand Essence
*A modern luxury hair atelier for those who expect precision without pretension.*
Personality: **Refined · Warm · Confident**

### Brand Voice
Headlines are declarative and assured. CTAs are inviting, not pushy.
- Example headline: *"Great hair isn't a luxury. It's the standard."*
- Example CTA: *"Secure Your Reservation"*

### Wordmark & Logo
The La Belle logo asset is the primary wordmark. Used in header (left-aligned) and footer. Never stretched or recoloured.

### Signature Brand Color
`#D4A0A7` — La Belle Blossom Pink

---

## Style Decisions
- Use `Cormorant Garamond` for all display text and `DM Sans` for body/UI
- Greyscale-first images with colour-on-hover
- No borders or box shadows on cards — use background tint only
- Pink accent on: active nav links, CTA buttons, carousel indicators, hover states
- Footer background: `#2E2C2A` charcoal
- Page composition defaults to asymmetric editorial spreads: centered title treatments appear sparingly, but each page includes at least one strong left-label/right-content or offset headline composition.
- La Belle Blossom Pink #D4A0A7 is a signal color only: used for CTAs, active states, thin rules, small numerals, and key highlights — never as a full-width section background.
- Information-heavy sections must still read like editorial chapters, with hierarchy led by Cormorant display type, numbered blocks, and thin rules rather than boxed cards.
