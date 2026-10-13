import type { Metadata } from "next";
import { FEATURED_PROJECTS } from "@/data/projects";
import { ProjectCatalog } from "@/components/projects/ProjectCatalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Compass, CheckCircle2, Lock } from "lucide-react";
export const metadata: Metadata = {
title: "Projects & Case Studies",
description:
"Explore realized commissions by iron’s irony. Structural staircases, perimeter gates, glazed steel door suites, and custom forged metalwork.",
};
export default function ProjectsPage() {
return (
<main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
{/* Top Breadcrumb Navigation */}
<div className="border-b border-border-subtle bg-canvas-subtle/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />
</div>
</div>
{/* Editorial Header */}
<header className="border-b border-border-structural py-12 sm:py-20 bg-canvas-bg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2.5 px-3 py-1 bg-canvas-subtle border border-border-structural mb-6">
<span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
<span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary font-medium">
iron’s irony • Fabrication Portfolio
</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
Realized Commissions & Engineering Case Studies
</h1>
<p className="mt-6 text-base sm:text-lg text-ink-secondary leading-relaxed">
Every project represents a tailored dialogue between structural necessity and architectural character. We review client requirements, resolve substrate anchoring challenges, fabricate with metallurgical precision, and deliver enduring ironwork.
</p>
</div>
{/* Engineering Integrity Pillars Strip */}
<div className="mt-10 pt-8 border-t border-border-structural grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
<div className="border border-border-structural bg-canvas-card p-4">
<span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
01 • Technical Problem Solving
</span>
<p className="text-ink-secondary">
Eliminating visible fasteners, managing thermal expansion, and engineering concealed anchors.
</p>
</div>
<div className="border border-border-structural bg-canvas-card p-4">
<span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
02 • Code & Deflection Standards
</span>
<p className="text-ink-secondary">
Rigorous testing to meet or exceed commercial line load ratings and ￼ safety criteria.
</p>
</div>
<div className="border border-border-structural bg-canvas-card p-4">
<span className="text-accent-bronze uppercase tracking-architectural block mb-1 font-medium">
03 • Multi-Barrier Finishes
</span>
<p className="text-ink-secondary">
Molten zinc galvanizing, microcrystalline patinas, and UV-stable architectural coatings.
</p>
</div>
</div>
</div>
</header>
{/* Main Interactive Portfolio Grid */}
<section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<SectionHeading
eyebrow="Explore Atelier Work"
title="Selected Architectural Ironwork"
description="Examine detailed engineering case studies detailing architectural requirements, solutions, material grades, and finish specifications."
/>
<ProjectCatalog projects={FEATURED_PROJECTS} />
</div>
</section>
{/* Client Confidentiality & Trade Collaboration Notice */}
<section className="py-16 sm:py-20 bg-canvas-bg border-b border-border-structural">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border border-border-structural bg-canvas-card p-8 sm:p-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8">
<div className="inline-flex items-center gap-2 mb-2 text-accent-bronze">
<Lock className="w-4 h-4" aria-hidden="true" />
<span className="text-xs font-mono uppercase tracking-architectural font-medium">
Privacy & Confidentiality Standard
</span>
</div>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-ink-primary">
Protecting Client Privacy on Private Commissions
</h2>
<p className="mt-4 text-sm text-ink-secondary leading-relaxed max-w-2xl">
In accordance with client non-disclosure agreements, specific private residential addresses and sensitive institutional site coordinates are withheld. Technical drawings, full metallurgical coupon test sheets, and structural calculations are made available directly to collaborating consulting engineers.
</p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
<Button href="/quote" variant="primary" size="md">
Discuss a New Commission
</Button>
<Button href="/contact" variant="outline" size="md">
Request Trade References
</Button>
</div>
</div>
</div>
</div>
</section>
</main>
);
}