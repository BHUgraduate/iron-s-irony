import * as React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";
import { constructPageMetadata } from "../../lib/seo";
import { COMPANY_DETAILS } from "../../data/company";
export const metadata: Metadata = constructPageMetadata({
title: "Terms of Fabrication & Service",
description:
"Standard terms of quotation, architectural shop drawing sign-offs, fabrication tolerances, warranties, and delivery standards for iron’s irony.",
path: "/terms",
});
export default function TermsPage() {
return (
<main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
<div className="border-b border-border-subtle bg-canvas-subtle/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<Breadcrumbs items={[{ label: "Terms of Fabrication", href: "/terms" }]} />
</div>
</div>
<article className="py-12 sm:py-20">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
<header className="border-b border-border-structural pb-8">
<span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2 font-medium">
Commercial & Engineering Standard
</span>
<h1 className="text-3xl sm:text-5xl font-serif font-medium text-ink-primary">
Terms of Fabrication & Service
</h1>
<p className="mt-3 text-xs font-mono text-ink-muted">
Standard Atelier Operating Policy • iron’s irony
</p>
</header>
<div className="space-y-8 text-xs sm:text-sm text-ink-secondary leading-relaxed">
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
01. Quotation Validity & Metallurgical Costing
</h2>
<p>
All commercial quotations are formulated on specified steel weight, raw billet index pricing, forging labor hours, and multi-barrier duplex coating selections. Estimates remain valid for thirty (30) days from issuance, reflecting potential fluctuations in structural steel commodity markets.
</p>
</section>
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
02. Shop Drawing Sign-Offs & Dimensions
</h2>
<p>
Prior to steel cutting or forge work, dimensioned 2D/3D shop drawings are submitted for client or architect sign-off. The client or project architect retains final responsibility for verified on-site opening measurements unless a physical laser survey was commissioned directly with our atelier.
</p>
</section>
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
03. Fabrication Tolerances
</h2>
<p>
Unless tighter tolerances are specified on structural engineering drawings, ironwork is fabricated to Architecturally Exposed Structural Steel (AESS) Category 3 visual standards with structural dimensional variance limited to ￼.
</p>
</section>
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
04. Duplex Coating & Weathering Standards
</h2>
<p>
Exterior ironwork specified with duplex EN ISO 1461 hot-dip galvanizing (￼ zinc immersion) is engineered for long-term corrosion prevention. Corten weathering steels (ASTM A588) undergo natural surface oxidation; clients acknowledge that initial oxidation runoff requires deliberate drainage channeling.
</p>
</section>
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
05. Delivery, Rigging & Installation
</h2>
<p>
Site access, crane rigging requirements, and substrate structural suitability (concrete footings, masonry piers, timber headers) must be verified prior to scheduled delivery dates.
</p>
</section>
</div>
</div>
</article>
</main>
);
}