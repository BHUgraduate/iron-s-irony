# iron’s irony — Project Plan & Technical Archixt.config.mjstecture

**Developer:** hycyon  
**Brand Identity:** iron’s irony  
**Tagline Context:** Building, Architectural & Decorative Ironwork  
**Document Version:** 1.0.0 (Phase 0 — Discovery & Architecture)

---

## 1. Executive Summary & Brand Purpose

**iron’s irony** is a dedicated ironwork atelier and custom metal fabrication workshop. The business bridges the gap between structural necessity and architectural character, engineering ironwork that is resilient, structurally sound, and aesthetically refined.

### Core Objectives
1. **Clarity of Capability:** Clearly communicate the scope of work across building ironwork, architectural metalwork, decorative ironwork, and bespoke fabrication.
2. **Dual-Audience Architecture:** Cater seamlessly to both trade professionals (architects, general contractors, interior designers, property developers) and private property owners.
3. **Structured Inquiries & Estimations:** Streamline the transition from project contemplation to actionable quotation with an intuitive, multi-parameter quote request flow.
4. **Catalogue & Portfolio Distinction:** Maintain clean conceptual separation between **Services** (what can be fabricated), **Projects** (realized installations and case studies), and the **Shop** (standardized and made-to-order catalog pieces).
5. **Authenticity & Integrity:** Adhere strictly to verified facts and structured placeholders; eliminate artificial metrics, fabricated reviews, or unverified claims.

---

## 2. Technical Stack & Architectural Rationale

To deliver an ultra-fast, accessible, and easily maintainable platform, we employ a modern, decoupled web architecture:

| Component | Selected Technology | Architectural Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | Server-side rendering (SSR) and static site generation (SSG) for peak SEO, automatic route handling, layout nesting, and optimal Core Web Vitals. |
| **Language** | **TypeScript 5.x** | End-to-end type safety across the content model, component props, form schemas, and metadata structures. |
| **Styling** | **Tailwind CSS 3.4+** | Predictable, utility-first CSS enforcing a centralized design token system without runtime style computation overhead. |
| **Icons** | **Lucide React** | Consistent, geometric, featherweight vector iconography matching the architectural linework aesthetic. |
| **Motion** | **Framer Motion** | Declarative, hardware-accelerated micro-interactions with native `prefers-reduced-motion` fallbacks. |
| **Form Management** | **React Hook Form + Zod** | Controlled form validation, zero-dependency payload verification, and rigorous schema enforcement. |
| **Asset Strategy** | **Next/Image + Static Vector Pipeline** | Native WebP/AVIF transcoding, responsive `srcset` generation, blur-up placeholders, and layout-shift prevention. |

---

## 3. Directory Structure

```text
irons-irony/
├── app/
│   ├── layout.tsx                     # Root HTML shell, font declarations, global metadata
│   ├── page.tsx                       # Homepage (Phase 3)
│   ├── not-found.tsx                  # Accessible 404 handler
│   ├── error.tsx                      # Runtime error boundary
│   ├── global-error.tsx               # Root error fallback
│   ├── loading.tsx                    # Route loading skeleton
│   ├── sitemap.ts                     # Dynamic sitemap generation
│   ├── robots.ts                      # SEO crawl directives
│   ├── about/
│   │   └── page.tsx                   # Atelier philosophy, fabrication values
│   ├── customers/
│   │   └── page.tsx                   # Audiences served (Architects, Homeowners, Builders)
│   ├── services/
│   │   ├── page.tsx                   # Service directory overview
│   │   ├── building-ironwork/
│   │   │   └── page.tsx               # Structural, functional & protective ironwork
│   │   ├── architectural-ironwork/
│   │   │   └── page.tsx               # Feature staircases, balustrades, custom elements
│   │   ├── decorative-ironwork/
│   │   │   └── page.tsx               # Ornamental gates, grills, screens, motifs
│   │   └── custom-fabrication/
│   │   └── page.tsx               # Bespoke fabrication & prototyping workflow
│   ├── shop/
│   │   ├── page.tsx                   # Product catalog (Standard + Made-to-order)
│   │   └── [slug]/
│   │       └── page.tsx               # Individual product specification page
│   ├── projects/
│   │   ├── page.tsx                   # Gallery of completed works with filtering
│   │   └── [slug]/
│   │       └── page.tsx               # Case study detail
│   ├── quote/
│   │   └── page.tsx                   # Structured Quote Request engine
│   ├── contact/
│   │   └── page.tsx                   # Direct communications, workshop inquiry, maps
│   ├── faq/
│   │   └── page.tsx                   # Centralized fabrication & delivery FAQ
│   ├── privacy/
│   │   └── page.tsx                   # Privacy policy & data protection terms
│   └── terms/
│       └── page.tsx                   # Standard terms of inquiry and fabrication
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Responsive navigation bar
│   │   ├── MobileMenu.tsx             # Accessible slide-out / drawer navigation
│   │   └── Footer.tsx                 # Comprehensive footer with legal & credit links
│   ├── ui/
│   │   ├── Button.tsx                 # Structural button variants
│   │   ├── SectionHeading.tsx         # Architectural typography component
│   │   ├── Badge.tsx                  # Material and status indicators
│   │   ├── Card.tsx                   # Base structural container
│   │   ├── Input.tsx                  # Accessible text field
│   │   ├── Textarea.tsx               # Accessible multiline input
│   │   ├── Select.tsx                 # Custom accessible dropdown
│   │   ├── Breadcrumbs.tsx            # Navigational trail
│   │   └── Modal.tsx                  # Accessible dialogue window
│   ├── sections/
│   │   ├── Hero.tsx                   # Homepage hero section
│   │   ├── WhatWeDo.tsx               # Capability overview
│   │   ├── FeaturedServices.tsx       # Highlighted service pillars
│   │   ├── FeaturedProjects.tsx       # Selected case studies
│   │   ├── CraftsmanshipPhilosophy.tsx# Metallurgy and joining philosophy
│   │   ├── ProcessFlow.tsx            # 6-step customer journey
│   │   ├── TestimonialPlaceholder.tsx # Verified testimonial presentation system
│   │   ├── CTASection.tsx             # Universal high-conversion callout
│   │   └── FAQAccordion.tsx           # Collapsible inquiry queries
│   ├── forms/
│   │   ├── QuoteForm.tsx              # Multi-field structured quote submission
│   │   └── ContactForm.tsx            # Direct messaging form
│   ├── products/
│   │   ├── ProductCard.tsx            # Catalog card with availability flags
│   │   ├── ProductGrid.tsx            # Responsive filterable catalog
│   │   └── ProductSpecTable.tsx       # Dimension and finish breakdown
│   └── projects/
│       ├── ProjectCard.tsx            # Case study visual card
│       ├── ProjectFilter.tsx          # Categorical switcher
│       └── ProjectGallery.tsx         # High-resolution architectural viewer
├── data/
│   ├── company.ts                     # Company metadata, contact points, placeholders
│   ├── services.ts                    # Service offerings, specifications, processes
│   ├── products.ts                    # Catalog items with dimensions, finishes, lead times
│   ├── projects.ts                    # Completed project studies and specifications
│   ├── customers.ts                   # Audience value propositions
│   ├── process.ts                     # Standard workshop engagement steps
│   ├── testimonials.ts                # Testimonial structures and replacement fields
│   └── faq.ts                         # Architectural and fabrication FAQ items
├── lib/
│   ├── utils.ts                       # ClassName merging and string helpers
│   ├── validations.ts                 # Form validation schemas (Zod)
│   └── metadata.ts                    # SEO title, OpenGraph, JSON-LD schema generators
├── public/
│   ├── favicon.ico                    # Favicon
│   ├── icon.svg                       # Vector geometric identity icon
│   ├── og-image.jpg                   # Open Graph social preview (1200x630)
│   └── images/
│       ├── services/                  # Service header & process imagery
│       ├── projects/                  # Completed works photography
│       ├── products/                  # Catalog items
│       └── workshop/                  # Forge, tooling, joining details
├── styles/
│   └── globals.css                    # Tailwind directives, CSS variables, typography
├── PROJECT_PLAN.md                    # Project roadmap & architecture (Current File)
├── SITE_MAP.md                        # Complete URL hierarchy & metadata mapping
├── DESIGN_SYSTEM.md                   # Tokens, color palettes, and typographic scale
├── CONTENT_MODEL.md                   # TypeScript interfaces and data contracts
├── CONTENT_EDITING_GUIDE.md           # Client guide for updating business data
├── README.md                          # Technical installation and developer handbook
├── tailwind.config.ts                 # Design token configuration
├── tsconfig.json                      # TypeScript compiler settings
└── package.json                       # Dependencies and build scripts
```

---

## 4. Phase-by-Phase Execution Roadmap

```
[Phase 0: Discovery & Architecture] (Current)
    │
    ▼
[Phase 1: Project Foundation & Config]
    │   ├── package.json, tsconfig, tailwind.config, globals.css, Root Layout
    ▼
[Phase 2: Design System & Core Primitives]
    │   ├── Buttons, Headings, Navigation, MobileMenu, Footer, Badges
    ▼
[Phase 3: Homepage Build]
    │   ├── Hero, Capabilities, Featured Projects, Process Flow, CTA
    ▼
[Phase 4: Services Directory & Detail Pages]
    │   ├── Building, Architectural, Decorative, Custom Fabrication
    ▼
[Phase 5: Shop & Product Catalog]
    │   ├── Filterable Catalog, Standard/Made-to-Order items, Spec Tables
    ▼
[Phase 6: Projects & Case Studies]
    │   ├── Residential, Commercial, Structural, Custom Gallery & Details
    ▼
[Phase 7: About & Customers Pages]
    │   ├── Atelier Philosophy, Values, Trade Personas (Architects/Builders)
    ▼
[Phase 8: Contact & Quote Engines]
    │   ├── Multi-field Quote Form, Validation, Error Handling, Fallbacks
    ▼
[Phase 9: Technical SEO & Metadata Engine]
    │   ├── OpenGraph, JSON-LD Schema (LocalBusiness), sitemap.xml, robots.txt
    ▼
[Phase 10: Assets & Visual Identity Pipeline]
    │   ├── SVGs, Favicon, OG Card, Asset Directory Structures
    ▼
[Phase 11: QA, Testing, Accessibility & Core Web Vitals]
    │   ├── Keyboard Nav, Contrast Audit, Responsive Viewports (320px-1920px)
    ▼
[Phase 12: Production Build & Documentation]
    │   ├── npm run build verification, README.md, CONTENT_EDITING_GUIDE.md
```

---

## 5. Non-Negotiable Engineering Policies

1. **Brand Capitalization Protocol:** The brand is rendered strictly as `iron’s irony` in display contexts, using the typographic apostrophe (`’` / `&rsquo;`). Technical identifiers (package names, route parameters, anchor tags) employ `irons-irony` or `ironsirony`.
2. **Strict Factual Honesty:** Never generate fictional addresses, fictitious client reviews, arbitrary pricing, or artificial business longevity claims. All incomplete business credentials use explicit placeholder delimiters: `[Business Phone]`, `[Business Address]`, `[Customer Review Pending]`.
3. **Responsive Rigor:** Every component is tested across standard breakpoints: 320px (compact mobile), 375px/390px/430px (modern smartphones), 768px (portrait tablet), 1024px (landscape tablet / small desktop), 1280px (standard desktop), and 1440px/1920px (wide viewports). No horizontal scrolling is permitted under any circumstance.
4. **Accessibility (WCAG 2.1 AA):** High-contrast color ratios ($> 4.5:1$ for body text, $> 3:1$ for heavy structural display text), explicit focus outlines (`focus-visible:ring-2`), semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`), and ARIA labeling on all interactive elements.