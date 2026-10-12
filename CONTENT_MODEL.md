# iron’s irony — Content Model & Data Contracts

**Developer:** hycyon  
**Brand Identity:** iron’s irony  
**Document Version:** 1.0.0 (Phase 0 — Discovery & Architecture)

---

## 1. Overview & Placeholder Strategy

To maintain complete architectural integrity without fabricating unverified business details, every piece of business information is managed in typed, centralized records inside `/data`.

Where actual client details or workshop specifications are pending confirmation, standardized placeholders are utilized:
* Phone: `[Business Phone]`
* Email: `[Business Email]`
* Address: `[Workshop Location / Address Pending]`
* Pricing: `"Pricing upon specification"` or `"Quote on request"`

---

## 2. Core TypeScript Data Models

### 2.1 Company & Studio Metadata (`data/company.ts`)

```typescript
export interface StudioContact {
  email: string;
  phone: string;
  whatsApp?: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    region?: string;
    postalCode?: string;
    country: string;
  };
  workshopHours: {
    days: string;
    hours: string;
  }[];
  googleMapsEmbedUrl?: string;
}

export interface SocialLinks {
  instagram?: string;
  pinterest?: string;
  linkedin?: string;
}

export interface CompanyProfile {
  name: "iron’s irony";
  legalName?: string;
  tagline: string;
  description: string;
  developer: {
    name: "hycyon";
    url?: string;
  };
  contact: StudioContact;
  socials: SocialLinks;
  serviceCategories: string[];
}
```

### 2.2 Services Model (`data/services.ts`)

```typescript
export interface ServiceApplication {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "building" | "architectural" | "decorative" | "custom";
  heroImage: string;
  galleryImages: string[];
  capabilities: string[];
  typicalApplications: ServiceApplication[];
  materialsAndFinishes: {
    materials: string[];
    finishes: string[];
  };
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}
```

### 2.3 Shop / Products Model (`data/products.ts`)

```typescript
export type ProductAvailability = "ready_to_ship" | "made_to_order" | "custom_dimensions_only";

export interface ProductSpecification {
  material: string;
  standardDimensions?: string;
  weightApproximate?: string;
  finishOptions: string[];
  interiorExterior: "Interior" | "Exterior" | "Both";
  customizationAvailable: boolean;
  installationOffered: boolean;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: "gates" | "grills" | "railings" | "furniture" | "architectural" | "decorative";
  shortDescription: string;
  fullDescription: string;
  availability: ProductAvailability;
  pricingType: "fixed" | "inquire_for_price" | "starting_at";
  priceDisplay: string; // e.g. "Quote upon sizing" or "[Sample Price for Reference]"
  isSampleData: boolean; // Flag to designate replaceable catalogue items
  featuredImage: string;
  galleryImages: string[];
  specifications: ProductSpecification;
  leadTimeWeeks?: string;
}
```

### 2.4 Projects / Portfolio Model (`data/projects.ts`)

```typescript
export type ProjectCategory = 
  | "residential" 
  | "commercial" 
  | "architectural" 
  | "decorative" 
  | "gates" 
  | "railings" 
  | "staircases";

export interface ProjectStudy {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  clientType: "Private Residence" | "Architectural Practice" | "Commercial Development" | "Interior Design Studio";
  locationPlaceholder: string; // e.g., "[Location on File]"
  completionYearPlaceholder: string; // e.g., "[Recent Commission]"
  featuredImage: string;
  galleryImages: string[];
  overview: string;
  challenge: string;
  solution: string;
  fabricationDetails: {
    material: string;
    finishApplied: string;
    installationScope: string;
  };
  isSampleData: boolean;
}
```

### 2.5 Customer Personas Model (`data/customers.ts`)

```typescript
export interface CustomerPersona {
  id: "architects" | "homeowners" | "interior-designers" | "builders" | "commercial";
  title: string;
  subtitle: string;
  summary: string;
  keyBenefits: string[];
  commonCommissions: string[];
  collaborationProcess: string;
  recommendedNextStep: string;
}
```

### 2.6 Quote & Contact Form Schemas (`lib/validations.ts`)

```typescript
import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("A valid email address is required."),
  phone: z.string().min(6, "A contact telephone number is required."),
  customerType: z.enum([
    "homeowner",
    "architect",
    "interior_designer",
    "contractor",
    "commercial",
    "other"
  ]),
  serviceCategory: z.enum([
    "building_ironwork",
    "architectural_ironwork",
    "decorative_ironwork",
    "custom_fabrication",
    "repair_restoration",
    "shop_item_customization"
  ]),
  projectLocation: z.string().min(2, "Project location / city is required."),
  approxDimensions: z.string().optional(),
  quantity: z.string().optional(),
  preferredMaterial: z.string().optional(),
  preferredFinish: z.string().optional(),
  timelineBudgetNotes: z.string().optional(),
  projectDescription: z.string().min(15, "Please provide a brief description of your requirements."),
  preferredContactMethod: z.enum(["email", "phone", "whatsapp"])
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name is required."),
  email: z.string().email("Valid email required."),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(10, "Message must contain at least 10 characters.")
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
```