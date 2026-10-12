# iron’s irony — Design System Specification

**Developer:** hycyon  
**Brand Identity:** iron’s irony  
**Document Version:** 1.0.0 (Phase 0 — Discovery & Architecture)

---

## 1. Aesthetic Foundations & Brand Atmosphere

The visual identity of **iron’s irony** balances the raw, structural weight of architectural metalwork with modern editorial restraint.

* **Material Honesty:** Colors, borders, and textures reflect forged iron, blackened mild steel, hot-rolled mill scale, graphite, and warm off-white lime plaster.
* **Architectural Geometry:** Layouts reflect structural engineering grids, framing lines, slender mullions, and measured proportions.
* **Restrained Craft:** Heavy shadows and gratuitous 3D effects are omitted in favor of precise 1px architectural borders, subtle metallic warm undertones, and generous whitespace.

---

## 2. Color Palette & Token Definitions

All colors are established via custom CSS variables and mapped into Tailwind tokens.

### Neutrals (Lime Plaster, Raw Canvas & Iron Minerals)

```css
:root {
  /* Canvas & Backgrounds */
  --color-canvas-bg: #F9F8F6;       /* Warm architectural off-white / lime plaster */
  --color-canvas-subtle: #F2EFEB;   /* Light stone surface / secondary panels */
  --color-canvas-card: #FFFFFF;     /* Pure structural highlight card */
  --color-canvas-dark: #121316;     /* Deep forge charcoal / structural dark mode */
  --color-canvas-dark-subtle: #1A1C20; /* Dark container background */

  /* Structural Inks & Typography */
  --color-ink-primary: #151618;     /* Heavy iron graphite (Near-black) */
  --color-ink-secondary: #484B52;   /* Slate charcoal for body and supporting text */
  --color-ink-muted: #747882;       /* Weathered iron for captions and meta info */
  --color-ink-inverted: #F9F8F6;    /* Warm ivory text on dark surfaces */

  /* Structural Linework & Borders */
  --color-border-subtle: #E6E3DC;   /* Hairline rule matching warm stone */
  --color-border-structural: #D0CCC2; /* Standard container border (1px solid) */
  --color-border-iron: #26282E;     /* Dark structural grid boundary */

  /* Restrained Metallic Accents */
  --color-accent-bronze: #9E7445;   /* Forged bronze / oxidized brass highlight */
  --color-accent-bronze-hover: #865F34; /* Deepened bronze for interactive states */
  --color-accent-amber: #C28E53;    /* Molten warm tone for subtle indicators */
  --color-accent-steel: #5E6773;    /* Cold rolled steel tone */

  /* Status Tokens */
  --color-status-success: #2E5A44;  /* Patina green (accessible contrast) */
  --color-status-error: #932D2D;    /* Iron oxide red (accessible contrast) */
}
```

---

## 3. Typography Scale & Hierarchy

We pair an architectural serif for character and editorial prestige with a modern geometric sans-serif for technical readability.

* **Display & Editorial Headlines:** `Cinzel` or `Cormorant Garamond` (fallback: `Georgia`, `serif`)  
  *Characteristics: Classical proportion, stone-carved geometric serif, structural serenity.*
* **Technical, UI & Body Copy:** `Inter` or `Plus Jakarta Sans` (fallback: `system-ui`, `sans-serif`)  
  *Characteristics: Neutral, highly legible at small sizes, optimal tabular numbers.*
* **Engineering Monospace (Specs & Dimensions):** `JetBrains Mono` or `ui-monospace`  
  *Characteristics: Used for measurements, material codes, tolerances, and technical badges.*

### Typographic Ratios & Classes

| Role | Class / Element | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `text-4xl md:text-6xl lg:text-7xl font-serif` | Light / Medium | `tracking-tight` | Homepage Hero, Primary Atelier Statements |
| **Section Title** | `text-2xl md:text-3xl lg:text-4xl font-serif` | Regular | `tracking-normal` | Section headers (`SectionHeading.tsx`) |
| **Subsection Header**| `text-xl md:text-2xl font-sans` | Medium | `tracking-normal` | Service titles, Product titles, Project names |
| **Technical Label** | `text-xs font-mono uppercase` | Medium | `tracking-widest` | Category badges, metadata, dimension specs |
| **Editorial Lead** | `text-lg md:text-xl font-sans` | Regular | `leading-relaxed` | Hero subtext, introduction summaries |
| **Body Primary** | `text-sm md:text-base font-sans` | Regular | `leading-relaxed` | Narrative paragraphs, descriptions, FAQ text |
| **Fine Print / Legal**| `text-xs font-sans` | Regular | `leading-normal` | Disclaimers, copyright, sub-captions |

---

## 4. Spacing, Structural Grid & Border Geometry

### Layout Container Specifications
* **Max Container Width:** `max-w-7xl` ($1280\text{px}$) with standard padding `px-4 sm:px-6 lg:px-8`.
* **Narrow Editorial Container:** `max-w-4xl` ($896\text{px}$) for articles, About page narrative, and FAQ flows.
* **Compact Form Container:** `max-w-2xl` ($672\text{px}$) for the Quote Request and Contact forms.

### Border Radii Standards
To preserve an architectural, wrought-metal aesthetic:
* **Strict Non-Pill Geometry:** We deliberately avoid oversized rounded borders (`rounded-2xl`, `rounded-full` on cards).
* **Standard Structural Radius:** `rounded-none` or subtle `rounded-sm` ($2\text{px}$) to `rounded` ($4\text{px}$) for cards and input fields.
* **Pill Badges:** Allowed exclusively for small status indicators (`rounded-full px-2.5 py-0.5 text-xs`).

### Border Hierarchy
* **Hairline Architectural Grid:** `border border-[#E6E3DC]` on light backgrounds; `border border-[#26282E]` on dark surfaces.
* **Feature Dividers:** Double-line dividers or single $1\text{px}$ rules with a forged bronze center notch.

---

## 5. UI Component Primitives

### Button Variants
1. **Primary Structural (`variant="primary"`):**
   * Background: Iron Graphite (`#151618`)
   * Text: Warm Canvas (`#F9F8F6`)
   * Hover: Accent Bronze (`#9E7445`) with smooth transition (`transition-colors duration-200`)
   * Border: None or $1\text{px}$ solid `#151618`
2. **Secondary Outline (`variant="outline"`):**
   * Background: Transparent
   * Text: Iron Graphite (`#151618`)
   * Border: $1\text{px}$ solid `#151618`
   * Hover: Background `#151618`, Text `#F9F8F6`
3. **Warm Bronze Action (`variant="accent"`):**
   * Background: `#9E7445`
   * Text: White (`#FFFFFF`)
   * Hover: `#865F34`
4. **Subtle Ghost (`variant="ghost"`):**
   * Background: Transparent
   * Text: `#484B52`
   * Hover: `#151618` with subtle border underline

### Form Input Primitives
* Inputs, Textareas, and Selects feature a crisp $1\text{px}$ border in `#D0CCC2`, background `#FFFFFF`, text `#151618`, and an explicit architectural focus state: `focus:outline-none focus:border-[#151618] focus:ring-1 focus:ring-[#151618]`.
* Error states highlight cleanly with `#932D2D` border and clear, accessible caption text.

---

## 6. Motion & Interaction Standards

* **Duration Scale:** Micro-interactions (hover, focus) run at $150\text{ms}$ to $200\text{ms}$. Structural reveals run at $400\text{ms}$ to $600\text{ms}$.
* **Easing Curve:** Architectural ease-out `cubic-bezier(0.16, 1, 0.3, 1)` (snappy entry with gentle settling).
* **Accessibility:** All animations are wrapped with `motion.div` leveraging Tailwind's `motion-safe:` or Framer Motion's `reducedMotion: "user"` check.