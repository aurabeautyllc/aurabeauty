# Aura Beauty LLC — Design Brainstorm

A modern, neutral-toned site for a solo esthetician & lash studio in Nampa, Idaho. Reference inspiration: savannaboda.com (elegant serif headlines, soft cream palette, full-bleed editorial imagery, generous whitespace, clean uppercase eyebrow labels). Must integrate Square Appointments for booking + payment.

## Three Stylistic Approaches

### Approach A — "Quiet Atelier"
A hushed, editorial-luxury aesthetic built on warm bone, oat, and clay neutrals with a single soft clay-rose accent. Feels like a high-end skincare brand's lookbook — slow, intentional, breathable.
**Probability: 0.04**

### Approach B — "Sunlit Linen"
Airy, daylight-driven warmth with cream, sand, and toasted-almond tones, lots of soft natural light photography, and thin hairline rules. Feels fresh, organic, and welcoming.
**Probability: 0.03**

### Approach C — "Modern Apothecary"
Muted greige + charcoal with brass/gold hairline accents, structured asymmetric grid, serif-meets-mono typography. Feels clinical-but-warm, results-driven.
**Probability: 0.02**

---

## CHOSEN APPROACH: A — "Quiet Atelier"

### Design Movement
Editorial luxury / quiet-luxury skincare branding (think Augustinus Bader, OSEA, and the savannaboda reference). Slow fashion editorial meets clean spa minimalism.

### Core Principles
1. **Restraint over decoration** — neutral palette, very few accent moments, let imagery and whitespace carry emotion.
2. **Editorial rhythm** — alternate full-bleed imagery with text columns; asymmetric, magazine-like layouts, never centered-everything.
3. **Tactile softness** — subtle grain, soft shadows, gentle fades; nothing hard or boxy.
4. **Confident typography** — large, airy serif display headlines paired with a quiet sans for body.

### Color Philosophy
Warm, skin-adjacent neutrals that feel calming and timeless. The base is bone/ivory; mid-tones are oat and warm taupe; the single accent is a muted clay-rose (a dusty, desaturated pink-brown that reads sophisticated, not "girly cute"). Deep espresso for text.
- Bone / Ivory background: `#F6F2EC`
- Oat / Sand: `#E9E1D6`
- Warm Taupe: `#C9BCA9`
- Clay-Rose accent: `#C29A8E` (the ownable signature color)
- Soft mocha mid: `#A98C7D`
- Espresso text: `#2E2823`

### Layout Paradigm
Asymmetric editorial grid. Hero is a full-bleed photograph with an off-center text block. Sections alternate between left-image/right-text and stacked editorial bands. Wide margins, large type, generous vertical spacing. Sticky transparent nav that becomes solid bone on scroll.

### Signature Elements
1. **Hairline uppercase eyebrow labels** with wide letter-spacing above each section heading (e.g., "THE STUDIO", "SERVICE MENU").
2. **Oversized serif display headlines** that occasionally span two lines with a thin rule.
3. **Soft arched / rounded-top image frames** for portrait imagery (subtle nod to spa serenity).

### Interaction Philosophy
Calm and deliberate. Gentle fade-and-rise on scroll, slow image zoom on hover, soft underline reveals on links. Nothing bouncy or fast — motion should feel like a slow exhale.

### Animation
- Section entrances: fade + 16px rise, 600ms, ease-out `cubic-bezier(0.23, 1, 0.32, 1)`, staggered 60ms.
- Image hover: scale 1.0 → 1.04 over 700ms.
- Buttons: subtle background fill slide + scale(0.97) on active.
- Respect `prefers-reduced-motion`.

### Typography System
- **Display/Headlines:** "Cormorant Garamond" (high-contrast serif, elegant, airy) — used large and light-weight.
- **Body/UI:** "Jost" or "Mona Sans"-like geometric sans — quiet, modern. Use "Jost" for clean geometric warmth.
- **Eyebrow labels:** Jost uppercase, letter-spacing 0.25em, small.
- Hierarchy: Hero h1 ~72px serif; section h2 ~44px serif; body 16–18px sans, line-height 1.7.

### Brand Essence
A one-woman luxury esthetics & lash atelier where every treatment is personalized, calm, and confidence-restoring — for Treasure Valley clients who want results with warmth. Personality: serene, refined, nurturing.

### Brand Voice
Warm, personal, first-person from Tatiana. Confident but never clinical. Example lines:
- "Skin that feels like you, only more radiant."
- "Pull up a chair — your glow starts here."
Banned: "Welcome to our website", "Get started today".

### Wordmark & Logo
A refined serif wordmark "Aura Beauty" with a small geometric monogram mark — a minimal line-drawn "A" enclosed in a soft arch/aura ring. Used in header and as favicon.

### Signature Brand Color
Clay-Rose `#C29A8E` — a dusty, desaturated rose-clay that is unmistakably Aura's, used sparingly for CTAs, underlines, and accents.

---

## Square Integration Plan
- Square Appointments booking URL: `https://book.squareup.com/appointments/6bqoexhg99i4mc/location/LMFQB9H9VH0H1?buttonTextColor=000000&color=c29a8e&locale=en&referrer=so`
- "My bookings" / manage: same flow.
- All "Book"/"Book now" CTAs across the site link out to this Square URL (opens new tab). Square handles booking + deposits/payment natively.
- Square Online store root: `https://aura-beauty-llc.square.site`

## Sitemap
Single-page scroll with anchor nav + a dedicated full Services page.
- Home: Hero, Intro/About (Tatiana), Featured services, Full experience band, Testimonials, Location & Hours, Newsletter/CTA, Footer.
- /services: full categorized service menu with prices + Book buttons.
- /book: framing + redirect/embed to Square.
