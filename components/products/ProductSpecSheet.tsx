import * as React from "react";
import { ProductSpecification } from "@/data/products";
import { Check, ShieldAlert, Layers } from "lucide-react";
export interface ProductSpecSheetProps {
specifications: ProductSpecification;
leadTime: string;
}
export function ProductSpecSheet({ specifications, leadTime }: ProductSpecSheetProps) {
return (
<div className="border border-border-structural bg-canvas-card">
{/* Header */}
<div className="p-4 sm:p-6 border-b border-border-structural bg-canvas-subtle flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-accent-bronze" aria-hidden="true" />
<h3 className="font-serif text-lg sm:text-xl text-ink-primary font-medium">
Technical Specification Matrix
</h3>
</div>
<span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted hidden sm:inline-block">
Fabrication Standard
</span>
</div>
{/* Key Metric Rows */}
<div className="divide-y divide-border-subtle text-xs font-mono">
<div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:px-6 sm:py-3.5 gap-2 sm:gap-4 items-center">
<div className="sm:col-span-5 text-ink-muted uppercase tracking-wider">
Primary Metallurgy
</div>
<div className="sm:col-span-7 text-ink-primary font-medium">
{specifications.material}
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:px-6 sm:py-3.5 gap-2 sm:gap-4 items-center">
<div className="sm:col-span-5 text-ink-muted uppercase tracking-wider">
Standard Dimensions
</div>
<div className="sm:col-span-7 text-ink-primary font-medium">
{specifications.standardDimensions}
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:px-6 sm:py-3.5 gap-2 sm:gap-4 items-center">
<div className="sm:col-span-5 text-ink-muted uppercase tracking-wider">
Mass Weight
</div>
<div className="sm:col-span-7 text-ink-primary font-medium">
{specifications.weightApproximate}
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:px-6 sm:py-3.5 gap-2 sm:gap-4 items-center">
<div className="sm:col-span-5 text-ink-muted uppercase tracking-wider">
Deployment Environment
</div>
<div className="sm:col-span-7 text-ink-primary font-medium">
{specifications.interiorExterior} Application
</div>
</div>
{specifications.anchoringSubstrate && (
<div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:px-6 sm:py-3.5 gap-2 sm:gap-4 items-center">
<div className="sm:col-span-5 text-ink-muted uppercase tracking-wider">
Approved Substrates
</div>
<div className="sm:col-span-7 text-ink-primary font-medium">
{specifications.anchoringSubstrate}
</div>
</div>
)}
<div className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:px-6 sm:py-3.5 gap-2 sm:gap-4 items-center">
<div className="sm:col-span-5 text-ink-muted uppercase tracking-wider">
Production Lead Time
</div>
<div className="sm:col-span-7 text-ink-primary font-medium">
{leadTime}
</div>
</div>
</div>
{/* Architectural Finish Options */}
<div className="p-5 sm:p-6 border-t border-border-structural bg-canvas-subtle/30">
<span className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze block mb-3 font-medium">
Available Protective & Patinated Finishes
</span>
<ul className="space-y-2 text-xs font-mono text-ink-secondary">
{specifications.finishOptions.map((finish) => (
<li key={finish} className="flex items-start gap-2">
<Check className="w-3.5 h-3.5 text-accent-bronze mt-0.5 shrink-0" aria-hidden="true" />
<span>{finish}</span>
</li>
))}
</ul>
</div>
</div>
);
}