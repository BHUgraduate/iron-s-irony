# iron’s irony — Site Map & Information Architecture

**Developer:** hycyon  
**Brand Identity:** iron’s irony  
**Document Version:** 1.0.0 (Phase 0 — Discovery & Architecture)

---

## 1. Visual Information Architecture

```text
[iron’s irony Root ( / )]
│
├── [ Services ( /services ) ]
│   ├── Building Ironwork ( /services/building-ironwork )
│   ├── Architectural Ironwork ( /services/architectural-ironwork )
│   ├── Decorative Ironwork ( /services/decorative-ironwork )
│   └── Custom Fabrication ( /services/custom-fabrication )
│
├── [ Shop / Catalog ( /shop ) ]
│   ├── Ready / Standard Items
│   ├── Made-to-Order Items
│   └── Product Details ( /shop/[slug] )
│
├── [ Projects / Work ( /projects ) ]
│   ├── Category: Residential Installations
│   ├── Category: Architectural & Commercial
│   ├── Category: Gates & Enclosures
│   ├── Category: Staircases & Balustrades
│   └── Case Study Detail ( /projects/[slug] )
│
├── [ About the Atelier ( /about ) ]
│   ├── Craftsmanship & Material Integrity
│   ├── Metal Preparation & Finishing Standards
│   └── Collaboration with Trade Professionals
│
├── [ Customers & Partners ( /customers ) ]
│   ├── For Homeowners
│   ├── For Architects & Specifiers
│   ├── For Interior Designers
│   └── For Builders & General Contractors
│
├── [ Request a Quote ( /quote ) ]
│   └── Multi-parameter Fabrication Specification Form
│
├── [ Direct Contact ( /contact ) ]
│   ├── Workshop Location & Inquiry Form
│   └── Direct Communications (Email, Phone, Messaging)
│
├── [ Knowledge Base ( /faq ) ]
│   └── Fabrication, Delivery, Installation, Maintenance Queries
│
└── [ Legal & Compliance ]
    ├── Privacy Policy ( /privacy )
    └── Terms of Fabrication & Service ( /terms )
```

---

## 2. Page Directory, Metadata & Intent Specification

| Route Path | Page Title | Primary Intent / Customer Action | Canonical Anchor |
| :--- | :--- | :--- | :--- |
| `/` | `iron’s irony — Building, Architectural & Decorative Ironwork` | Introduces the atelier, displays signature capabilities, builds immediate trust, and channels users toward quotes or portfolio exploration. | `https://ironsirony.com/` |
| `/services` | `Services & Capabilities — iron’s irony` | Comprehensive directory of metal fabrication capabilities categorized by structural, architectural, and decorative scope. | `https://ironsirony.com/services` |
| `/services/building-ironwork` | `Building Ironwork — Gates, Grills & Structural Elements — iron’s irony` | Explores durable, functional ironwork engineered for residential and commercial infrastructure. | `https://ironsirony.com/services/building-ironwork` |
| `/services/architectural-ironwork` | `Architectural Ironwork — Feature Stairs & Balustrades — iron’s irony` | Detailed showcase of high-specification architectural ironwork designed in partnership with architects and designers. | `https://ironsirony.com/services/architectural-ironwork` |
| `/services/decorative-ironwork` | `Decorative Ironwork — Ornamental Grills & Screens — iron’s irony` | Focuses on ornamental metal craft, decorative entrance gates, bespoke panels, and artistic geometric ironwork. | `https://ironsirony.com/services/decorative-ironwork` |
| `/services/custom-fabrication` | `Custom Metal Fabrication & Prototyping — iron’s irony` | Outlines the consultation, drafting, metal selection, precision fabrication, and bespoke engineering pipeline. | `https://ironsirony.com/services/custom-fabrication` |
| `/shop` | `Shop & Catalog — iron’s irony` | Allows customers to explore pre-engineered products alongside customizable made-to-order ironwork pieces. | `https://ironsirony.com/shop` |
| `/shop/[slug]` | `[Product Name] — Specifications & Ordering — iron’s irony` | Detailed dimensions, finish options, fabrication lead times, and "Request Price / Order" invocation. | `https://ironsirony.com/shop/[slug]` |
| `/projects` | `Completed Projects & Case Studies — iron’s irony` | Filterable visual catalog of past installations, detailing engineering challenges, materials, and final execution. | `https://ironsirony.com/projects` |
| `/projects/[slug]` | `[Project Name] Case Study — iron’s irony` | Deep-dive case study with high-resolution photography, architectural context, fabrication notes, and finish details. | `https://ironsirony.com/projects/[slug]` |
| `/about` | `About the Workshop & Craft — iron’s irony` | Details the workshop’s craftsmanship philosophy, commitment to durability, structural integrity, and collaborative process. | `https://ironsirony.com/about` |
| `/customers` | `Who We Work With — Architects, Builders & Homeowners — iron’s irony` | Dedicated value propositions tailored to distinct customer archetypes with specific workflow explanations. | `https://ironsirony.com/customers` |
| `/quote` | `Request a Quotation — iron’s irony` | Comprehensive, structured request form capturing dimensions, finishes, site location, blueprints, and timeline. | `https://ironsirony.com/quote` |
| `/contact` | `Contact the Atelier — iron’s irony` | Direct communications channel containing contact forms, workshop visit information, and verified contact points. | `https://ironsirony.com/contact` |
| `/faq` | `Frequently Asked Questions — iron’s irony` | Answers questions regarding tolerances, finishes, powder coating vs. patina, delivery, and site preparation. | `https://ironsirony.com/faq` |
| `/privacy` | `Privacy Policy — iron’s irony` | Explains customer data handling, quote submission data retention, and privacy protocols. | `https://ironsirony.com/privacy` |
| `/terms` | `Terms of Fabrication & Service — iron’s irony` | Transparent terms governing custom specifications, approvals, warranties, and delivery standards. | `https://ironsirony.com/terms` |

---

## 3. Crawl Strategy & Robots Directives

```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://ironsirony.com/sitemap.xml
```

All public pages will include dynamic metadata, OpenGraph tags, Twitter Card tags, and standard Schema.org structured data markup (`LocalBusiness`, `Product`, `ItemPage`).