import * as React from "react";
import type { Metadata } from "next";
import { FAQ_DATA } from "@/data/faq";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateFAQSchema, constructPageMetadata } from "@/lib/seo";
import { ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
export const metadata: Metadata = constructPageMetadata({
title: "Frequently Asked Questions — Fabrication & Delivery — iron’s irony",
description:
"Answers regarding custom metal tolerances, duplex hot-dip galvanizing, site installations, blueprints, and architect collaboration.",
path: "/faq",
});
export default function FAQPage() {
const faqSchema = generateFAQSchema();
return (
<main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
<JsonLd data={faqSchema} />
{/* Top Breadcrumb Navigation */}
<div className="border-b border-border-subtle bg-canvas-subtle/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
</div>
</div>
{/* Editorial Header */}
<header className="border-b border-border-structural py-12 sm:py-20 bg-canvas-bg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
<span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
<span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
iron’s irony • Knowledge Base & Standards
</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
Frequently Asked Questions
</h1>
<p className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
Transparent, factual answers detailing our quotation methods, structural tolerances, corrosion-defense systems, and site installation protocols.
</p>
</div>
</div>
</header>
{/* FAQ Accordion Section */}
<section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="space-y-6">
{FAQ_DATA.map((item, idx) => (
<div
key={item.id}
className="border border-border-structural bg-canvas-card p-6 sm:p-8"
>
<div className="flex items-start gap-4">
<span className="font-serif text-2xl text-accent-bronze font-medium shrink-0">
0{idx + 1}
</span>
<div>
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium mb-3">
{item.question}
</h2>
<p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans">
{item.answer}
</p>
</div>
</div>
</div>
))}
</div>
<div className="mt-12 text-center p-8 border border-border-structural bg-canvas-card space-y-4">
<h3 className="font-serif text-xl text-ink-primary font-medium">
Have a Structural Question Not Listed Here?
</h3>
<p className="text-xs sm:text-sm text-ink-secondary max-w-md mx-auto">
Our engineering estimating team reviews custom project blueprints, CAD files, and site measurements directly.
</p>
<div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
<Button href="/quote" variant="primary" size="sm">
Request a Quote
</Button>
<Button href="/contact" variant="outline" size="sm">
Contact the Workshop
</Button>
</div>
</div>
</div>
</section>
</main>
);
}