---
name: Elora
description: Psychiatric care built on hope and steady ground
colors:
  isabelline: "#F4EEEB"
  card-white: "#FBF9F7"
  pine: "#292E1E"
  vintage-coin: "#7A6B5E"
  taupe: "#B3A696"
  southern-sand: "#EDE3D6"
  warm-sun: "#B5842E"
  warm-sun-soft: "#D9B878"
  success: "#5A6B44"
  warning: "#A5793C"
  error: "#8C4F3F"
  info: "#5E6B66"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.75rem, 5.4vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body-lg:
    fontFamily: "Karla, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Karla, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Karla, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.24em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.isabelline}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.75rem"
  button-inverted:
    backgroundColor: "{colors.isabelline}"
    textColor: "{colors.pine}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.75rem"
  card:
    backgroundColor: "{colors.card-white}"
    rounded: "{rounded.lg}"
    padding: "1.75rem"
---

# Design System: Elora

## 1. Overview

**Creative North Star: "Hope Through Strength"**

Elora's system carries the brand's meaning — light and sun-ray, steady ground — as a feeling, never a statement. Every surface stays warm and grounded rather than clinical: cream and pine do the structural work, and a single gold accent appears only where it earns its place (an eyebrow label, a focus ring, a chevron). The system explicitly rejects anything overtly religious or floral, anything feminine-coded or sterile, and anything that reads as generic telehealth-startup gloss — no stock-photo hero, no app-download push, no cold institutional forms.

Components feel warm and tactile: soft pill buttons with a settling lift on hover, flat bordered cards rather than heavy shadows, and motion that never rushes — fades and short rises only, always with a reduced-motion fallback.

**Key Characteristics:**
- Warm neutral base (isabelline cream) with a single deep pine for text and primary actions
- One gold accent (Warm Sun) used sparingly — eyebrows, focus rings, chevrons — never as a base color
- Serif display (Cormorant Garamond) paired with a humanist sans (Karla) for warmth without sentimentality
- Flat, bordered cards; shadow reserved for interactive elements only
- Full-pill buttons, gentle settling motion, no bounce

## 2. Colors

A warm, grounded range from cream to deep pine, with the gold accent held in reserve for emphasis only.

### Primary
- **Warm Sun** (#B5842E): The one accent color. Reserved for eyebrow labels, focus-visible rings, FAQ chevrons, and link-underline hover states. Never used as a fill or background — its rarity is the point.

### Neutral
- **Isabelline** (#F4EEEB): Page background. The dominant surface color site-wide.
- **Card White** (#FBF9F7): Card and elevated-surface background, one step lighter than isabelline.
- **Southern Sand** (#EDE3D6): Alternating section background, used to separate content bands without a hard border.
- **Pine Tree** (#292E1E): Primary text color and primary button fill. Doubles as the dark "ink" of the system.
- **Vintage Coin** (#7A6B5E): Secondary text — body copy under headings, supporting descriptions.
- **Taupe** (#B3A696): Borders and dividers only, always at reduced opacity (`color-mix` with transparent) rather than full strength.

### Named Rules
**The One Accent Rule.** Warm Sun appears on labels, focus states, and small interactive marks only — never as a background fill or a large surface. If gold is covering more than a chevron or an underline, it's being overused.

## 3. Typography

**Display Font:** Cormorant Garamond, Georgia, serif
**Body Font:** Karla, sans-serif

**Character:** A literary serif carries every headline and pull-quote at medium weight (500), paired against a clean humanist sans for body copy and UI — warm and credible together, never twee.

### Hierarchy
- **Display** (500, `clamp(2.75rem, 5.4vw, 4.5rem)`, line-height 1.04): Hero headline only.
- **Headline** (500, `clamp(1.9rem, 3.2vw, 2.6rem)`, line-height 1.15): Section headings ("Three steps, no surprises," "What we help with").
- **Title** (500, 1.25–1.5rem): Card and step headings within a section.
- **Body Large** (400, 19px, line-height 1.65): Hero subhead and section intros, capped near 46–60ch.
- **Body** (400, 16px, line-height 1.7): Standard paragraph copy throughout, capped at 65–75ch.
- **Label** (700, 11px, letter-spacing 0.24em, uppercase): Eyebrows and step numbers ("01 — BOOK"), always in Warm Sun.

### Named Rules
**The Sentence-Case Rule.** Everything outside the uppercase label role — headings, buttons, nav — stays sentence case. No title case, no all-caps body copy.

## 4. Elevation

Elora is deliberately flat at rest. Cards carry a hairline border (taupe at reduced opacity) instead of a shadow; depth is reserved for interactive elements responding to state, not decorating static surfaces.

### Shadow Vocabulary
- **Button resting** (`0 1px 2px rgba(41,46,30,.15), 0 8px 20px -8px rgba(41,46,30,.45)`): Layered, pine-tinted shadow under the primary and inverted buttons at rest.
- **Button hover** (`0 2px 4px rgba(41,46,30,.18), 0 14px 28px -10px rgba(41,46,30,.55)`): Slightly deeper and wider on hover, paired with a 2px lift (`translateY(-2px)`).

### Named Rules
**The Flat-Card Rule.** Cards never carry a shadow. A hairline border is the only separation a static surface gets; shadows are earned only by things the visitor can press.

## 5. Components

Buttons, cards, and inputs read as warm and tactile — soft edges, gentle response to touch, nothing sharp or mechanical.

### Buttons
- **Shape:** Full pill (`border-radius: 999px`).
- **Primary:** Pine background, isabelline text, layered pine-tinted shadow (see Elevation), `0.85rem 1.75rem` padding.
- **Inverted:** Isabelline background, pine text, black-tinted shadow — used on the dark final-CTA section.
- **Hover / Focus:** 2px upward lift with a deepened shadow on hover (240ms, `cubic-bezier(.25,.6,.3,1)`); `focus-visible` gets a 2px Warm Sun outline with 3px offset, never relying on color alone.

### Cards
- **Corner Style:** 16px radius.
- **Background:** Card White.
- **Shadow Strategy:** None — see the Flat-Card Rule in Elevation.
- **Border:** 1px, taupe at ~35–45% opacity via `color-mix`.
- **Internal Padding:** 1.75rem (28px), consistent across the areas-of-care and why-Elora grids.

### Links
- **Nav links:** Vintage Coin at rest, Pine on hover, 140ms color transition, no underline.
- **Underlined links:** Pine text with a Warm Sun underline that sweeps in from the left on hover (240ms) rather than simply fading.

### Navigation
- **Style:** Sticky header, translucent isabelline with backdrop blur, hairline bottom border. Nav links are Vintage Coin at rest, Pine on hover. Mobile collapses into a `max-height` accordion panel (340ms) rather than an overlay.

### FAQ / Disclosure
- **Style:** Native `<details>`/`<summary>`, hairline dividers between items, a Warm Sun chevron that rotates 45° open. No custom JS beyond the mobile menu toggle.

## 6. Do's and Don'ts

### Do:
- **Do** keep Warm Sun rare — labels, focus rings, chevrons, hover underlines only.
- **Do** keep cards flat with a hairline border; reserve shadow for buttons and other pressable elements.
- **Do** keep motion small and settling — fades and short rises at 140–420ms, `cubic-bezier(.25,.6,.3,1)`, and always provide a `prefers-reduced-motion` fallback.
- **Do** keep all copy in sentence case, including headings and buttons.

### Don't:
- **Don't** use religious or floral imagery — the light/growth motifs stay abstract (sun-ray, plant-vine), never literal or devotional.
- **Don't** design anything that reads as feminine-coded or sterile/institutional — the brand is deliberately androgynous and warm, welcoming without assumptions.
- **Don't** reach for generic telehealth-startup gloss (stock photography, app-download-first layouts, urgency banners) — Elora stays editorial and unhurried instead.
- **Don't** use bounce or elastic easing anywhere; motion only settles, never overshoots.
- **Don't** let Warm Sun cover a large surface — it is an accent, never a fill.
