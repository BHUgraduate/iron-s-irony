import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Home, Layers, ShoppingBag, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
export const metadata: Metadata = {
title: "404 — Specification Not Located — iron’s irony",
description: "The requested architectural drawing or page could not be located in the atelier archive.",
};
export default function NotFound() {
return (
<main
id="main-content"
className="flex-1 flex flex-col items-center justify-center bg-canvas-bg py-20 px-4 sm:px-6 lg:px-8"
>
<div className="max-w-2xl w-full border border-border-structural bg-canvas-card p-8 sm:p-14 text-center space-y-8 shadow-sm">
{/* Architectural Register Calibration Mark */}
<div className="w-14 h-14 border border-border-structural bg-canvas-subtle flex items-center justify-center text-accent-bronze mx-auto">
<Compass className="w-7 h-7" aria-hidden="true" />
</div>
<div className="space-y-3">
<span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block font-medium">
Registry Index Error 404
</span>
<h1 className="text-4xl sm:text-5xl font-serif font-medium text-ink-primary tracking-tight">
Specification Not Located
</h1>
<p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-lg mx-auto">
The requested atelier drawing, case study, or document link does not correspond to an active record in our workshop system.
</p>
</div>
{/* Directory Recovery Grid */}
<div className="pt-4 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
<Link
href="/services"
className="p-3.5 border border-border-structural bg-canvas-subtle hover:border-ink-primary transition-colors flex items-center gap-3 group"
>
<Layers className="w-4 h-4 text-accent-bronze shrink-0" aria-hidden="true" />
<div>
<span className="text-xs font-mono uppercase tracking-wider text-ink-primary font-medium block group-hover:text-accent-bronze transition-colors">
Services Directory
</span>
<span className="text-[11px] font-mono text-ink-muted">
Explore fabrication scopes
</span>
</div>
</Link>
<Link
href="/shop"
className="p-3.5 border border-border-structural bg-canvas-subtle hover:border-ink-primary transition-colors flex items-center gap-3 group"
>
<ShoppingBag className="w-4 h-4 text-accent-bronze shrink-0" aria-hidden="true" />
<div>
<span className="text-xs font-mono uppercase tracking-wider text-ink-primary font-medium block group-hover:text-accent-bronze transition-colors">
Shop Models
</span>
<span className="text-[11px] font-mono text-ink-muted">
Pre-engineered ironwork
</span>
</div>
</Link>
</div>
{/* Primary Action Button */}
<div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
<Button href="/" variant="primary" size="md">
<span>Return to Atelier Home</span>
<Home className="w-4 h-4 ml-2" aria-hidden="true" />
</Button>
<Button href="/contact" variant="outline" size="md">
<span>Contact Fabrication Desk</span>
<Mail className="w-4 h-4 ml-2" aria-hidden="true" />
</Button>
</div>
</div>
</main>
);
}