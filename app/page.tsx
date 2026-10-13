import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CraftsmanshipPhilosophy } from "@/components/sections/CraftsmanshipPhilosophy";
import { CustomFabricationHighlight } from "@/components/sections/CustomFabricationHighlight";
import { SelectedProducts } from "@/components/sections/SelectedProducts";
import { CustomerTypes } from "@/components/sections/CustomerTypes";
import { ProcessFlow } from "@/components/sections/ProcessFlow";
import { TestimonialsPlaceholder } from "@/components/sections/TestimonialsPlaceholder";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { CTASection } from "@/components/sections/CTASection";
export const metadata: Metadata = {
title: { absolute: "iron’s irony — Building, Architectural & Decorative Ironwork" },
description:
"Custom ironwork engineered for structural permanence, architectural elegance, and custom design. Serving architects, builders, and discerning property owners.",
};
export default function HomePage() {
return (
<main id="main-content" className="flex-1 flex flex-col w-full">
{/* 1. Hero Section */}
<Hero />
{/* 2. What We Do Section */}
<WhatWeDo />
{/* 3. Featured Services Section */}
<FeaturedServices />
{/* 4. Featured Projects / Portfolio Showcase */}
<FeaturedProjects />
{/* 5. Craftsmanship & Metallurgical Philosophy */}
<CraftsmanshipPhilosophy />
{/* 6. Custom Fabrication Capability Focus */}
<CustomFabricationHighlight />
{/* 7. Shop / Selected Pre-Engineered Products */}
<SelectedProducts />
{/* 8. Dedicated Customer Profiles (Architects, Homeowners, Builders) */}
<CustomerTypes />
{/* 9. 6-Step Workshop Process Flow */}
<ProcessFlow />
{/* 10. Authentic Testimonials Placeholder System */}
<TestimonialsPlaceholder />
{/* 11. Frequently Asked Questions Accordion */}
<FAQSection />
{/* 12. Contact & Atelier Location Preview */}
<ContactPreview />
{/* 13. Universal High-Conversion Call To Action */}
<CTASection />
</main>
);
}