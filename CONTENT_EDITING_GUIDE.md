# iron’s irony — Content Editing Guide

**Developer:** hycyon  
**For:** Atelier Managers, Studio Administrators & Content Editors  
**Brand Identity:** iron’s irony  

---

## Welcome to Your Website Content Handbook

All business information, services, catalog models, project case studies, and photography links for **iron’s irony** are separated from the layout code. You do **not** need to touch React components or HTML to update your content.

All editable content is centralized in the `/data` folder:

```text
data/
├── company.ts       <-- Phone, email, address, workshop hours, navigation
├── services.ts      <-- Fabrication capabilities, specifications, FAQs
├── products.ts      <-- Shop catalog models, dimensions, finishes, lead times
├── projects.ts      <-- Completed commissions, engineering case studies
├── customers.ts     <-- Information for Architects, Builders, and Homeowners
├── testimonials.ts  <-- Customer quotes and testimonials
├── faq.ts           <-- Frequently Asked Questions
└── assets.ts        <-- Photography links and fallbacks
```

---

## 1. Updating Workshop Contact & Business Details

Open `data/company.ts` in your text editor.

### 1.1 Updating Phone Number and Email
Locate the `contact` block:
```typescript
contact: {
  phone: "+1 (555) 019-2834", // Replace [Business Phone] with your real phone number
  email: "atelier@ironsirony.com", // Replace [Business Email] with your active workshop email
  whatsApp: "+1 (555) 019-2834",
  ...
}
```
*When you update these fields, they automatically update across the Header, Footer, Contact page, Quote page, and search engine schema.*

### 1.2 Updating Workshop Address & Opening Hours
Locate the `address` and `hours` arrays in `data/company.ts`:
```typescript
address: {
  line1: "Unit 4, Foundry Lane Industrial Estate",
  line2: "Forge Bay 12",
  city: "Hudson",
  region: "New York",
  postalCode: "12534",
  country: "United States",
},
hours: [
  { days: "Monday – Friday", hours: "08:00 – 17:00" },
  { days: "Saturday", hours: "By Appointment Only" },
  { days: "Sunday", hours: "Closed" },
],
```

---

## 2. Replacing Testimonial Placeholders

In accordance with our factual transparency policy, the website does not display fake reviews. When real clients provide feedback, open `data/testimonials.ts`.

Replace the placeholder entries:
```typescript
export const TESTIMONIALS_DATA: TestimonialEntry[] = [
  {
    id: "test-01",
    clientRolePlaceholder: "Julian Wright, Senior Partner at Studio Wright Architects",
    projectTypePlaceholder: "Floating Monolithic Spine Staircase",
    quotePlaceholder:
      "The engineering precision delivered by iron’s irony allowed us to achieve complete fastener concealment on our cantilevered staircase. Their sub-screed mounting details passed inspection on the first review.",
    isPlaceholder: false, // Change to false once verified
  },
  ...
];
```

---

## 3. Managing the Shop Catalog

Open `data/products.ts`.

### 3.1 Adding a New Catalog Model
Copy an existing product block inside `FEATURED_PRODUCTS` and paste it at the end:

```typescript
{
  id: "prod-courtyard-pergola-08",
  slug: "architectural-steel-courtyard-pergola", // Unique URL slug: /shop/architectural-steel-courtyard-pergola
  name: "Structural Steel Courtyard Pergola — Model 08",
  category: "architectural", // 'gates' | 'grills' | 'railings' | 'hardware' | 'architectural'
  categoryLabel: "Exterior Structure",
  eyebrow: "Shade & Spatial Frameworks",
  shortDescription: "Heavy-gauge structural carbon steel pergola engineered for residential terraces and courtyards.",
  fullDescription: "Constructed with 100x100mm heavy structural hollow sections...",
  availability: "made_to_order", // 'made_to_order' | 'ready_to_ship' | 'custom_dimensions_only'
  priceDisplay: "Quotation formulated on terrace dimensions",
  isSampleData: false,
  featuredImage: "https://images.unsplash.com/your-photo-id",
  galleryImages: [
    "https://images.unsplash.com/your-photo-id-1",
    "https://images.unsplash.com/your-photo-id-2"
  ],
  specifications: {
    material: "S275 Structural Carbon Steel & Concealed Anchor Shoes",
    standardDimensions: "Modules 3000mm (W) x 4000mm (L) x 2800mm (H)",
    weightApproximate: "Approx. 340 kg",
    finishOptions: [
      "Duplex Hot-Dip Galvanized + Dead-Matte Polyurethane Topcoat",
      "Qualicoat Class 2 Electrostatic Powder Coating"
    ],
    interiorExterior: "Exterior",
    customizationAvailable: true,
    installationOffered: true,
    anchoringSubstrate: "Reinforced concrete footing pads via chemical capsule anchors"
  },
  leadTimeWeeks: "4 – 6 weeks from structural sign-off",
  customizationDetails: [
    "Span adjustments up to 6000mm clear span",
    "Integrated concealed rainwater drainage downpipes"
  ],
  features: [
    "Concealed sub-grade mounting flanges",
    "Certified for elevated wind zone shear loads"
  ]
}
```
*Next.js will automatically create the page `/shop/architectural-steel-courtyard-pergola` during the next build.*

---

## 4. Adding a New Project Case Study

Open `data/projects.ts`.

Add a new object inside `FEATURED_PROJECTS`:
```typescript
{
  id: "project-estate-entrance",
  slug: "hudson-valley-estate-perimeter", // URL: /projects/hudson-valley-estate-perimeter
  title: "Monumental Dual-Leaf Estate Gates & Railings",
  subtitle: "Automated S275 Structural Steel Boundary with Molten Zinc Duplex Barrier",
  category: "gates", // 'residential' | 'commercial' | 'architectural' | 'decorative' | 'gates' | 'railings' | 'staircases' | 'custom'
  categoryLabel: "Boundary & Entrance",
  clientType: "Private Estate",
  locationPlaceholder: "Hudson Valley, New York",
  completionYearPlaceholder: "Autumn 2025",
  heroImage: "https://your-domain.com/images/projects/hudson-gate.jpg",
  galleryImages: [
    "https://your-domain.com/images/projects/hudson-gate-detail-1.jpg",
    "https://your-domain.com/images/projects/hudson-gate-detail-2.jpg"
  ],
  summary: "A 4.2-meter automated dual-leaf gate engineered for high-wind perimeter security.",
  requirement: "The client requested high privacy and robust security without placing excessive weight strain on historic stone entrance piers.",
  architecturalChallenge: "Existing 150-year-old masonry piers lacked internal steel reinforcement...",
  engineeringSolution: "We engineered independent subterranean steel box posts set into concrete foundations...",
  fabricationMethod: "Precision cold mitering, full-penetration structural MIG welds...",
  materialsUsed: [
    "Solid 20mm Square Carbon Steel Pickets",
    "100x100x6.3mm Structural Hanging Posts",
    "Stainless Steel Grease-Zerk Pivot Bearings"
  ],
  finishApplied: "EN ISO 1461 Duplex Hot-Dip Galvanized + Matte Graphite Polyurethane",
  installationScope: "Sub-grade foundation core drilling, laser hinge alignment, motor automation pairing.",
  metrics: [
    { label: "Overall Width", value: "4200mm span" },
    { label: "Leaf Elevation", value: "2400mm height" },
    { label: "Coating Guarantee", value: "Duplex Hot-Dip Galvanized" },
    { label: "Wind Permeability", value: "45% open aerodynamic relief" }
  ],
  isSampleData: false
}
```

---

## 5. Replacing Photography & Workshop Imagery

All photography links are declared in `data/assets.ts`.

### 5.1 Using Local Image Files
1. Save your high-resolution workshop photos into the folder:
   `/public/images/` (e.g. `/public/images/projects/staircase-01.jpg`).
2. Open `data/assets.ts`.
3. Update the `uri` property:
   ```typescript
   HERO_PRIMARY: {
     id: "asset-hero-staircase",
     uri: "/images/projects/staircase-01.jpg", // Point to your local file
     fallbackUri: "/images/placeholder.svg",
     alt: "Continuous steel handrail forged in the iron’s irony workshop",
     width: 1200,
     height: 900,
     category: "hero",
     isSampleData: false,
   },
   ```

---

## 6. Updating Frequently Asked Questions (FAQ)

Open `data/faq.ts`.

Add or modify questions inside `FAQ_DATA`:
```typescript
{
  id: "faq-site-surveys",
  question: "How do you handle site surveys for out-of-square walls?",
  answer:
    "We utilize precision 3D digital laser scanning to map aperture deviations down to ±1.0mm before cutting steel. This ensures all assemblies arrive ready to fit without on-site grinding or cutting.",
  category: "installation" // 'general' | 'fabrication' | 'finishes' | 'installation'
}
```
*Updates made here automatically refresh both the `/faq` page and the homepage FAQ accordion.*

---

## 7. Need Technical Assistance?

For structural layout modifications, custom CRM integrations, or design system adjustments, contact your digital studio:
- **Developer Studio:** hycyon
- **Website:** [https://hycyon.com](https://hycyon.com)