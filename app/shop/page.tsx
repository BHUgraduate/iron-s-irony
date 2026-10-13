import type { Metadata } from "next";
import { FEATURED_PRODUCTS } from "../../data/products";
import { ProductCatalog } from "../../components/products/ProductCatalog";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";
import { Button } from "../../components/ui/Button";
import { ShieldCheck, Sliders, Wrench, Sparkles } from "lucide-react";
export const metadata: Metadata = {
title: "Shop & Catalog Models",
description:
"Explore pre-engineered metalwork designs, made-to-order gates, balustrades, window grilles, and architectural hardware by iron’s irony.",
};
export default function ShopPage() {
return (
<main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
{/* Top Breadcrumb Navigation */}
<div className="border-b border-border-subtle bg-canvas-subtle/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<Breadcrumbs items={[{ label: "Shop", href: "/shop" }]} />
</div>
</div>
{/* Editorial Header */}
<header className="border-b border-border-structural py-12 sm:py-20 bg-canvas-bg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
<span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
<span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
iron’s irony • Catalog & Made to Order
</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
Pre-Engineered Models Calibrated to Your Exact Site Reveals
</h1>
<p className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
Our catalog models offer proven structural proportions and aesthetic balance. Rather than off-the-shelf mass production, each item is built to order in our atelier and customized to fit your specific opening dimensions, substrate requirements, and finish preference.
</p>
</div>
{/* Model Fulfillment Distinction Bar */}
<div className="mt-10 pt-8 border-t border-border-structural grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
<div className="border border-border-structural bg-canvas-card p-4">
<span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
01 • Made to Order
</span>
<p className="text-ink-secondary">
Standard designs fabricated upon confirmation to fit your width and height specifications.
</p>
</div>
<div className="border border-border-structural bg-canvas-card p-4">
<span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
02 • Custom Dimensions
</span>
<p className="text-ink-secondary">
Calculated strictly on structural reveals, requiring verification of masonry or steel anchors.
</p>
</div>
<div className="border border-border-structural bg-canvas-card p-4">
<span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
03 • Transparent Quotation
</span>
<p className="text-ink-secondary">
Pricing is formulated on material weight, forging hours, and protective coating selection.
</p>
</div>
</div>
</div>
</header>
{/* Main Interactive Product Grid Section */}
<section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<SectionHeading
eyebrow="Browse Atelier Collection"
title="Ironwork Models & Systems"
description="Filter by discipline or fulfillment type. Request a quotation based on your measurements or submit custom drawings."
/>
<ProductCatalog products={FEATURED_PRODUCTS} />
</div>
</section>
{/* How to Order Custom Sizing Guidance Banner */}
<section className="py-16 sm:py-20 bg-canvas-bg border-b border-border-structural">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border border-border-structural bg-canvas-card p-8 sm:p-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8">
<span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
Non-Standard Dimensions?
</span>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-ink-primary">
Need a Dimension or Design Not Listed in the Catalog?
</h2>
<p className="mt-4 text-sm text-ink-secondary leading-relaxed max-w-2xl">
Our core business is custom metal fabrication. If your project features irregular masonry openings, non-￼ angles, or custom architectural motifs, our atelier will draft and engineer a one-off commission tailored to your project.
</p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
<Button href="/quote" variant="primary" size="md">
Submit Custom Opening Specs
</Button>
<Button href="/services/custom-fabrication" variant="outline" size="md">
Custom Fabrication Process
</Button>
</div>
</div>
</div>
</div>
</section>
</main>
);
}