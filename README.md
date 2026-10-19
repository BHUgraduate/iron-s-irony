# iron’s irony — Building, Architectural & Decorative Ironwork

> **Developer & Digital Product Studio:** [hycyon](https://hycyon.com)  
> **Brand Identity:** iron’s irony  
> **Tagline:** Building, Architectural & Decorative Ironwork  
> **Website Architecture:** Multi-page Next.js 14 App Router with Static Site Generation (SSG) & TypeScript

---

## 1. Project Overview

**iron’s irony** is a production-grade, multi-page web application designed for a bespoke architectural metalworking atelier and fabrication workshop. The business operates across four specialized metalcraft disciplines:

1. **Building Ironwork:** Structural lintels, automated security gates, perimeter railings, protective window grilles, and load-bearing cantilever balcony assemblies.
2. **Architectural Ironwork:** Minimalist floating spine staircases, hand-profiled continuous balustrades, Crittall-style ultra-slender glazed steel partition suites, and architectural entrance porticos.
3. **Decorative Ironwork:** Hand-forged scrolls, anvil-formed joinery, courtyard privacy fretwork, garden espaliers, and heritage restoration.
4. **Custom Metal Fabrication:** Prototyping, CAD/BIM-to-steel fabrication, non-standard opening solutions, mixed-metal details (blackened steel with silicon bronze/brass), and AESS (Architecturally Exposed Structural Steel) visual finishing.

The digital architecture balances heavy metallurgical authority with modern editorial restraint, catering equally to trade professionals (architects, general contractors, interior designers) and private estate homeowners.

---

## 2. Technical Stack

| Domain | Technology | Justification |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14.2+ (App Router)** | Hybrid SSG/SSR, static route pre-rendering, nested layout architecture, and zero-layout-shift image optimization. |
| **Language** | **TypeScript 5.6+** | Strict end-to-end type safety across the content model, component interfaces, and validation schemas. |
| **Styling** | **Tailwind CSS 3.4+** | Centralized design tokens, zero runtime CSS injection, and responsive utility architecture. |
| **Form Validation** | **React Hook Form + Zod** | Declarative schema validation, accessible error announcements, and client/server-ready data parsing. |
| **Iconography** | **Lucide React** | Lightweight, geometric vector icons complementing architectural linework. |
| **Motion** | **Tailwind Utilities + CSS Transitions** | Hardware-accelerated transitions with native `prefers-reduced-motion` overrides. |
| **SEO & Schema** | **Native Next.js Metadata + JSON-LD** | Canonical routing, dynamic OpenGraph generation via Edge `ImageResponse`, and Schema.org `ProfessionalService` / `FAQPage` structured data. |

---

## 3. Directory Structure

```text
irons-irony/
├── app/
│   ├── layout.tsx                     # Root shell, font loaders, global JSON-LD
│   ├── page.tsx                       # Homepage (13 modular architectural sections)
│   ├── not-found.tsx                  # Accessible 404 registry error page
│   ├── error.tsx                      # Client runtime error boundary
│   ├── loading.tsx                    # Route loading skeleton state
│   ├── icon.tsx                       # Dynamic Edge browser favicon (32x32)
│   ├── apple-icon.tsx                 # Dynamic Edge Apple touch icon (180x180)
│   ├── opengraph-image.tsx            # Dynamic OpenGraph social preview (1200x630)
│   ├── twitter-image.tsx              # Dynamic Twitter summary card (1200x630)
│   ├── sitemap.ts                     # Dynamic XML sitemap generator (27 routes)
│   ├── robots.ts                      # Dynamic search engine crawl directives
│   ├── about/page.tsx                 # Atelier profile, philosophy, metallurgical standards
│   ├── customers/page.tsx             # Dedicated trade guides (Architects, Builders, Owners)
│   ├── services/
│   │   ├── page.tsx                   # Services portfolio directory
│   │   └── [slug]/page.tsx            # Dynamic service routes (Building, Arch, Dec, Custom)
│   ├── shop/
│   │   ├── page.tsx                   # Product catalog (Made to Order & Bespoke)
│   │   └── [slug]/page.tsx            # Dynamic product detail & spec sheet routes
│   ├── projects/
│   │   ├── page.tsx                   # Completed commission portfolio & category filters
│   │   └── [slug]/page.tsx            # Engineering case studies (Challenge, Solution, Specs)
│   ├── quote/page.tsx                 # Multi-parameter fabrication quotation engine
│   ├── contact/page.tsx               # Workshop coordinates & direct messaging
│   ├── faq/page.tsx                   # Knowledge base & FAQPage schema
│   ├── privacy/page.tsx               # Trade non-disclosure & data protection policy
│   └── terms/page.tsx                 # Fabrication terms, tolerances, & warranty rules
├── components/
│   ├── forms/
│   │   ├── QuoteForm.tsx              # Quotation request form with file dropzone
│   │   └── ContactForm.tsx            # Direct workshop inquiry form
│   ├── layout/
│   │   ├── Header.tsx                 # Sticky navigation with blur state
│   │   ├── MobileMenu.tsx             # Accessible mobile drawer menu
│   │   └── Footer.tsx                 # Comprehensive architectural footer
│   ├── products/
│   │   ├── ProductCard.tsx            # Catalog card with fulfillment flags
│   │   ├── ProductCatalog.tsx         # Interactive search, category & status filter
│   │   └── ProductSpecSheet.tsx       # Technical specifications breakdown matrix
│   ├── projects/
│   │   ├── ProjectCard.tsx            # Portfolio case study visual card
│   │   └── ProjectCatalog.tsx         # Interactive category filter & empty state
│   ├── sections/
│   │   ├── Hero.tsx                   # Architectural hero statement
│   │   ├── WhatWeDo.tsx               # 4-pillar capability overview
│   │   ├── FeaturedServices.tsx       # Alternating service showcases
│   │   ├── FeaturedProjects.tsx       # Highlighted engineering case studies
│   │   ├── CraftsmanshipPhilosophy.tsx# Dark atelier metallurgical manifesto
│   │   ├── CustomFabricationHighlight.tsx # Bespoke parameter solvers
│   │   ├── SelectedProducts.tsx       # Pre-engineered catalog highlights
│   │   ├── CustomerTypes.tsx          # Homepage persona value cards
│   │   ├── ProcessFlow.tsx            # 6-step customer journey
│   │   ├── TestimonialsPlaceholder.tsx# Transparent verified review framework
│   │   ├── FAQSection.tsx             # Interactive accessible accordion
│   │   ├── ContactPreview.tsx         # Direct workshop coordinates & map embed
│   │   └── CTASection.tsx             # Universal quotation callout
│   ├── seo/
│   │   └── JsonLd.tsx                 # XSS-safe JSON-LD script injector
│   └── ui/
│       ├── Badge.tsx                  # Material and status indicators
│       ├── Breadcrumbs.tsx            # Hierarchical navigational trail
│       ├── Button.tsx                 # Polymorphic architectural button
│       ├── Card.tsx                   # Hairline bordered structural container
│       ├── Container.tsx              # Width-constrained layout wrapper
│       ├── Input.tsx                  # Accessible form input with ARIA bindings
│       ├── SectionHeading.tsx         # Cormorant Garamond typography primitive
│       ├── Select.tsx                 # Accessible dropdown select
│       └── Textarea.tsx               # Accessible multiline input
├── data/
│   ├── about.ts                       # Atelier philosophy, values, metallurgy matrix
│   ├── assets.ts                      # Centralized media registry & fallbacks
│   ├── company.ts                     # Company metadata, verified placeholders, nav links
│   ├── customers.ts                   # Customer persona solutions, pain points, checklists
│   ├── faq.ts                         # Knowledge base Q&A database
│   ├── process.ts                     # 6-step fabrication process steps
│   ├── products.ts                    # Shop catalog models with full engineering specs
│   ├── projects.ts                    # Realized case studies with challenge/solution data
│   ├── services.ts                    # 4 fabrication disciplines with full specifications
│   └── testimonials.ts                # Verified review slots with transparent placeholders
├── lib/
│   ├── seo.ts                         # Metadata generators & Schema.org builders
│   ├── utils.ts                       # Class merging (`cn`), brand typography formatters
│   └── validations.ts                 # Zod form validation schemas
├── public/
│   ├── icon.svg                       # Vector architectural brand mark
│   └── images/
│       └── placeholder.svg            # Drafting grid vector asset fallback
├── styles/
│   └── globals.css                    # Design tokens, CSS variables, typography
├── .env.example                       # Environment configuration template
├── .eslintrc.json                     # Linting configuration
├── .gitignore                         # Repository clean exclusion rules
├── next.config.mjs                    # Next.js server & image whitelist config
├── package.json                       # Dependencies & execution scripts
├── tailwind.config.ts                 # Complete design token bindings
└── tsconfig.json                      # Strict TypeScript compiler options
```

---

## 4. Installation & Local Development

### Prerequisites
- **Node.js:** `v18.18.0` or later (Node 20+ recommended)
- **Package Manager:** `npm`, `pnpm`, or `yarn`

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hycyon/irons-irony.git
   cd irons-irony
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env.local
   ```
   *(Update canonical site URL if deploying to a custom domain).*

4. **Launch development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 5. Build & Code Quality Verification

### Production Build
Execute the production build to compile static pages and verify static site generation:
```bash
npm run build
```

Expected build output summary:
```text
Route (app)                              Size     First Load JS
┌ ○ /                                    ... kB          ... kB
├ ○ /about                               ... kB          ... kB
├ ○ /contact                             ... kB          ... kB
├ ○ /customers                           ... kB          ... kB
├ ○ /faq                                 ... kB          ... kB
├ ○ /privacy                             ... kB          ... kB
├ ○ /projects                            ... kB          ... kB
├ ● /projects/[slug]                     ... kB          ... kB
│   ├ /projects/monolithic-spine-staircase
│   ├ /projects/geometric-courtyard-entrance-gate
│   ├ /projects/patinated-steel-glass-screens
│   ├ /projects/forged-iron-cantilever-balcony
│   ├ /projects/concealed-reveal-security-grilles
│   └ /projects/corten-architectural-courtyard-portal
├ ○ /quote                               ... kB          ... kB
├ ○ /services                            ... kB          ... kB
├ ● /services/[slug]                     ... kB          ... kB
│   ├ /services/building-ironwork
│   ├ /services/architectural-ironwork
│   ├ /services/decorative-ironwork
│   └ /services/custom-fabrication
├ ○ /shop                                ... kB          ... kB
├ ● /shop/[slug]                         ... kB          ... kB
│   ├ /shop/forged-courtyard-pedestrian-gate
│   ├ /shop/modular-slender-balustrade-module
│   ├ /shop/forged-geometric-window-grille
│   ├ /shop/architectural-pivot-entrance-door
│   ├ /shop/heavy-duty-blackened-shelf-brackets
│   └ /shop/hand-forged-strap-hinge-suite
├ ○ /terms                               ... kB          ... kB
├ ○ /sitemap.xml                         0 B                0 B
└ ○ /robots.txt                          0 B                0 B
+ First Load JS shared by all            ... kB
  ├ chunks/framework-...js
  ├ chunks/main-...js
  └ other shared chunks (total)

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```

### Linting
Verify TypeScript types and coding standards:
```bash
npm run lint
```

---

## 6. Deployment Guidelines

### Vercel (Recommended)
1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Framework Preset: **Next.js**.
4. Set Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com`
5. Deploy. Vercel automatically builds static assets and deploys Edge `ImageResponse` handlers.

### Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Install `@netlify/plugin-nextjs` for App Router compatibility.

### Docker / Standalone Container
Add `output: 'standalone'` in `next.config.mjs`, build the container, and run:
```bash
node .next/standalone/server.js
```

---

## 7. Form Dispatch & Backend Integration

The forms (`components/forms/QuoteForm.tsx` and `components/forms/ContactForm.tsx`) execute client-side state handling with realistic asynchronous delays and inquiry reference generation (`IRN-YYYY-XXXX`).

### Connecting to an Email/CRM Backend:
1. Open `components/forms/QuoteForm.tsx`.
2. Locate the `onSubmit` function:
   ```typescript
   const onSubmit = async (data: QuoteFormValues) => {
     setSubmissionStatus("submitting");
     try {
       // Replace simulation with production endpoint:
       const response = await fetch("/api/quote", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
       });
       if (!response.ok) throw new Error("Dispatch failed");
       
       setInquiryReference(`IRN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
       setSubmissionStatus("success");
     } catch (err) {
       setSubmissionStatus("error");
     }
   };
   ```
3. Create the route handler `app/api/quote/route.ts` using Resend, Postmark, AWS SES, or a webhook to your CRM.

---

## 8. Brand & Factual Policy

- **Brand Styling:** The public brand identity is strictly formatted in lowercase with typographic apostrophe: `iron’s irony`.
- **Developer Credit:** Engineered and maintained by **hycyon** (`Designed & developed by hycyon`).
- **Factual Integrity:** Zero artificial testimonials, fabricated client reviews, or unverified claims. All pending business credentials utilize standardized placeholders:
  - `[Business Phone]`
  - `[Business Email]`
  - `[Workshop Location / Address Pending]`
## Homepage rebuild notes

- Sections live in `components/sections/` (Hero, Transformation, Services, Work, Process, Custom, Trust) and the project flow in `components/forms/ProjectConfigurator.tsx`. Homepage copy is in `data/home.ts`.
- Motion primitives: `lib/motion.ts` and `components/motion/` (Reveal, LineReveal, MagneticButton, usePointerParallax). All respect `prefers-reduced-motion`.
- Project assistant: `components/chat/ChatAssistant.tsx`, rule-based, answers only from `data/assistant.ts`. It makes no price or timeline promises.
- Every "Start a Project" link goes to `/#start`. The configurator posts to `/api/quote`, which needs `QUOTE_FORM_WEBHOOK_URL`. Without it the form tells the visitor nothing was sent and shows phone and WhatsApp.
- Hero and service visuals are line drawings (`components/ui/IronDrawing.tsx`). Replace the sample images in `data/assets.ts` / `data/projects.ts` with real workshop photographs and set `isSampleData: false`.
- This is a Next.js app with API routes, so it needs a Node host (for example Vercel). It cannot be served by GitHub Pages as-is.
