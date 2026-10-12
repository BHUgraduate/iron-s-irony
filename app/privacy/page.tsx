import * as React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { constructPageMetadata } from "@/lib/seo";
import { COMPANY_DETAILS } from "@/data/company";
export const metadata: Metadata = constructPageMetadata({
title: "Privacy Policy & Data Protection — iron’s irony",
description:
"Privacy and data protection policy of iron’s irony. Outlines how architectural blueprints, contact information, and project specifications are handled.",
path: "/privacy",
});
export default function PrivacyPage() {
return (
<main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
<div className="border-b border-border-subtle bg-canvas-subtle/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />
</div>
</div>
<article className="py-12 sm:py-20">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
<header className="border-b border-border-structural pb-8">
<span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2 font-medium">
Compliance & Non-Disclosure
</span>
<h1 className="text-3xl sm:text-5xl font-serif font-medium text-ink-primary">
Privacy Policy
</h1>
<p className="mt-3 text-xs font-mono text-ink-muted">
Last updated: September 2026 • iron’s irony Atelier Standards
</p>
</header>
<div className="space-y-8 text-xs sm:text-sm text-ink-secondary leading-relaxed">
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
01. Scope of This Policy
</h2>
<p>
This Privacy Policy applies to all interactions with <strong>{COMPANY_DETAILS.name}</strong>, including inquiries submitted through our website (<code className="text-ink-primary font-mono text-xs">ironsirony.com</code>), telephone discussions, architectural drawing reviews, and on-site consultations.
</p>
</section>
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
02. Information We Collect
</h2>
<p>
We collect only information strictly necessary to estimate, engineer, fabricate, and deliver architectural metalwork. This includes:
</p>
<ul className="list-disc pl-5 space-y-1.5 font-mono text-xs text-ink-secondary">
<li>Contact coordinates (Name, telephone number, business email).</li>
<li>Project location details required for delivery and site survey logistics.</li>
<li>Architectural CAD files, blueprints, site photographs, and aperture dimensions.</li>
<li>Professional trade role (Architect, General Contractor, Homeowner, Designer).</li>
</ul>
</section>
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
03. Architectural Confidentiality & Trade Non-Disclosure
</h2>
<p>
We treat all architectural blueprints, engineering schematics, and private estate locations as confidential trade information. Blueprints submitted for estimation are shared exclusively with internal metalworking engineers and certified structural engineering consultants for constructability calculations.
</p>
</section>
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
04. Data Retention & Third Parties
</h2>
<p>
We do not sell, rent, or monetize client contact data. Information is retained solely within workshop dispatch logs to provide ongoing warranty support, finish maintenance records, and shop drawing archives.
</p>
</section>
<section className="space-y-3">
<h2 className="font-serif text-xl sm:text-2xl text-ink-primary font-medium">
05. Inquiries & Data Rights
</h2>
<p>
To request drawing deletion or review records held by our workshop, contact our atelier desk at{" "}
<span className="font-mono text-ink-primary">{COMPANY_DETAILS.contact.email}</span>.
</p>
</section>
</div>
</div>
</article>
</main>
);
}