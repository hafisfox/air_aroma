---
name: Air Aroma
description: Architectural luxury scent marketing system for Saudi Arabia and the GCC
colors:
  canvas: "oklch(0.972 0.011 75)"
  canvas-strong: "oklch(0.95 0.018 75)"
  sand: "oklch(0.908 0.025 72)"
  line: "oklch(0.846 0.014 72)"
  ink: "oklch(0.246 0.012 72)"
  ink-soft: "oklch(0.377 0.012 72)"
  muted: "oklch(0.548 0.016 72)"
  accent: "oklch(0.59 0.086 64)"
  accent-strong: "oklch(0.515 0.076 63)"
  accent-soft: "oklch(0.905 0.028 68)"
  dark: "oklch(0.198 0.011 72)"
  dark-soft: "oklch(0.273 0.012 72)"
  dark-line: "oklch(0.382 0.013 72)"
  inverse: "oklch(0.958 0.008 74)"
typography:
  display:
    fontFamily: "\"Marcellus\", serif"
    fontSize: "clamp(3.25rem, 8.5vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "\"Marcellus\", serif"
    fontSize: "clamp(2.2rem, 4.2vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "\"Manrope\", sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.16rem)"
    fontWeight: 500
    lineHeight: 1.9
  label:
    fontFamily: "\"Manrope\", sans-serif"
    fontSize: "0.74rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
  body-rtl:
    fontFamily: "\"Readex Pro\", sans-serif"
    fontSize: "clamp(1rem, 1.25vw, 1.16rem)"
    fontWeight: 500
    lineHeight: 1.9
  display-rtl:
    fontFamily: "\"Noto Naskh Arabic\", serif"
    fontSize: "clamp(3.25rem, 8.5vw, 6.5rem)"
    fontWeight: 600
    lineHeight: 1.06
rounded:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "2.75rem"
spacing:
  section-inline: "clamp(1.25rem, 2vw, 2.75rem)"
  section-block: "clamp(4.5rem, 8vw, 7.5rem)"
  card-gap: "1rem"
  action-gap: "0.85rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-strong}"
    textColor: "{colors.inverse}"
    rounded: "999px"
    padding: "0 1.4rem"
    height: "3.15rem"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "999px"
    padding: "0 1.4rem"
    height: "3.15rem"
  surface-panel:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  surface-panel-dark:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.inverse}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  kicker-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent-strong}"
    rounded: "999px"
    padding: "0 0.95rem"
    height: "2.4rem"
---

# Design System: Air Aroma

## Overview

**Creative North Star: "The Architectural Arrival"**

This system should feel like stepping into a premium hospitality environment before a word is spoken: calm, spatial, materially warm, and quietly confident. The interface uses light, stone-tinted surfaces with bronze warmth and deep charcoal counterpoints so luxury comes from composition, texture, and restraint rather than from dark-mode theatrics.

The site is not trying to look like a generic "premium" template. It should communicate that Air Aroma understands atmosphere as both an emotional and operational discipline. The experience needs to feel composed in English and Arabic, with the same level of care in spacing, scale, and polish across both directions.

**Key Characteristics:**
- Light architectural canvas with warm bronze emphasis
- Large, calm display typography balanced by practical supporting copy
- Rounded pill and panel language instead of brittle hard-edge UI
- Sections that shift composition and density rather than repeating the same card grammar
- Dark bands used for contrast and focus, not as the default page treatment

## Colors

The palette is warm and stone-led. Neutrals do most of the work, while bronze appears as a deliberate signal for action, emphasis, and brand warmth.

### Primary
- **Architect Bronze** (`oklch(0.515 0.076 63)`): Primary CTAs, premium accents, active states, and small emphasis moments.
- **Warm Bronze Glow** (`oklch(0.59 0.086 64)`): Gradient support and softer accent lift where a little more warmth is needed.

### Secondary
- **Sunwashed Sand** (`oklch(0.908 0.025 72)`): Supporting tint behind media and softer framed surfaces.

### Neutral
- **Ivory Canvas** (`oklch(0.972 0.011 75)`): Main page background.
- **Gallery Ground** (`oklch(0.95 0.018 75)`): Stronger light surface and subtle contrast zones.
- **Soft Linework** (`oklch(0.846 0.014 72)`): Borders and structural separation.
- **Architect Ink** (`oklch(0.246 0.012 72)`): Primary text and headline color.
- **Soft Ink** (`oklch(0.377 0.012 72)`): Secondary text and longer body copy.
- **Muted Stone** (`oklch(0.548 0.016 72)`): Supporting copy, metadata, and restrained labels.

### Dark
- **Night Chamber** (`oklch(0.198 0.011 72)`): Dark contrast bands, footer, and high-focus panels.
- **Deep Bronze Shadow** (`oklch(0.273 0.012 72)`): Layered dark surfaces and darker gradients.
- **Dark Seam** (`oklch(0.382 0.013 72)`): Borders inside dark sections.

### Named Rules
**The Warm Neutral Rule.** Neutrals are never cold grayscale. Every surface is slightly warmed toward stone, parchment, or bronze.

**The Accent Discipline Rule.** Bronze should feel intentional. It leads action, emphasis, and identity; it should not wash every surface.

## Typography

**Display Font:** Marcellus  
**Body Font:** Manrope  
**RTL Display Font:** Noto Naskh Arabic  
**RTL Body Font:** Readex Pro

The typography should feel poised rather than editorial. The Latin system uses a classical display face without leaning into trend-luxury clichés, while the Arabic system uses high-legibility faces that still feel elevated and formal.

### Hierarchy
- **Display** (`clamp(3.25rem, 8.5vw, 6.5rem)`, 400, 0.92): Hero statements and primary route titles.
- **Headline** (`clamp(2.2rem, 4.2vw, 4.4rem)`, 400, 0.98): Section titles and major supporting statements.
- **Body** (`clamp(1rem, 1.25vw, 1.16rem)`, 500, 1.9): Long-form page copy and route explanations.
- **Label** (`0.74rem`, 700, 0.18em): Navigation, CTAs, pills, and metadata.

### Named Rules
**The Calm Scale Rule.** Headlines can be dramatic, but supporting copy must stay spacious and readable. Luxury comes from breath, not compression.

**The Bilingual Integrity Rule.** The brand mark stays left-to-right, but the reading rhythm, line height, and spacing of Arabic content are treated as first-class design work.

## Elevation

Depth is handled through soft layering rather than sharp contrast. Light surfaces rely on warm shadows and subtle border seams, while dark sections use tonal contrast plus restrained glow rather than aggressive shadow theatrics.

### Shadow Vocabulary
- **Soft Surface** (`0 22px 55px rgba(46, 34, 20, 0.08)`): Default panel and card lift.
- **Framed Media** (`0 32px 90px rgba(46, 34, 20, 0.13)`): Major images and hero media.
- **Deep Stage** (`0 40px 120px rgba(17, 14, 11, 0.28)`): Dark hero panels and high-focus contrast zones.

### Named Rules
**The Layered Stone Rule.** Surfaces should feel placed, not floating. Borders, shadows, and tint work together to suggest material depth.

## Components

### Buttons
- **Shape:** Fully rounded pill buttons.
- **Primary:** Bronze gradient fill, light text, confident shadow, used for primary route and conversion actions.
- **Secondary:** Light surface with line border, dark text, reserved for lower-pressure companion actions.
- **Subtle:** Text-only emphasis link, used inside cards and collection routes.

### Navigation
- Rounded floating panel with transparent-over-hero and solid-on-scroll states.
- Desktop nav uses restrained pill hover states rather than underlines or hard separators.
- Mobile nav keeps the same pill language, with contact preserved as a high-priority action.

### Panels and Cards
- Light panels use warm ivory backgrounds, generous rounding, thin seams, and soft lift.
- Dark panels are reserved for contrast sections, process blocks, and premium focus moments.
- Cards should vary by image ratio, content density, and composition. Avoid repeating the exact same module mechanically.

### Media Frames
- Large media uses oversized rounded corners and warm shadow depth.
- Images should feel architectural, atmospheric, and spatial rather than generic category stock.

### FAQ
- FAQ uses soft details/summary panels rather than modal or heavy accordion chrome.
- The open state should feel calm and integrated, not like a utility widget dropped into the brand site.

## Do's and Don'ts

### Do:
- **Do** use warm light backgrounds as the default stage and let dark sections feel deliberate.
- **Do** create rhythm by changing layout composition between sections.
- **Do** keep CTAs confident but calm, with one primary action leading and one secondary action supporting.
- **Do** preserve equal design quality in English and Arabic, including spacing, hierarchy, and navigation polish.

### Don't:
- **Don't** fall back to generic dark-and-gold luxury templates that rely on palette alone.
- **Don't** use glassmorphism as a default decorative layer.
- **Don't** drift into reflex editorial-luxury styling or predictable serif-luxury clichés.
- **Don't** repeat SaaS-style card grids, metric strips, or identical section scaffolding across the entire site.
- **Don't** ship anything that feels AI-generated, over-ornamental, or interchangeable with a premium landing-page template.
