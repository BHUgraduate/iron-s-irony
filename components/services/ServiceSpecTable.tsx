import * as React from "react";
import { EngineeringSpec } from "@/data/services";
export interface ServiceSpecTableProps {
specs: EngineeringSpec[];
materials: string[];
finishes: string[];
}
export function ServiceSpecTable({ specs, materials, finishes }: ServiceSpecTableProps) {
return (
<div className="border border-border-structural bg-canvas-card">
<div className="p-4 sm:p-6 border-b border-border-structural bg-canvas-subtle flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-accent-bronze" aria-hidden="true" />
<h3 className="font-serif text-lg sm:text-xl text-ink-primary font-medium">
Atelier Technical & Metallurgical Matrix
</h3>
</div>
<span className="text-[10px] font-mono uppercase tracking-architectural text-ink-muted hidden sm:inline-block">
Specification Standard
</span>
</div>
{/* Engineering Parameters */}
<div className="divide-y divide-border-subtle">
{specs.map((spec) => (
<div
key={spec.parameter}
className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:px-6 sm:py-3.5 gap-2 sm:gap-4 items-center text-xs font-mono"
>
<div className="sm:col-span-5 text-ink-muted uppercase tracking-wider">
{spec.parameter}
</div>
<div className="sm:col-span-7 text-ink-primary font-medium">
{spec.standard}
</div>
</div>
))}
</div>
{/* Materials & Finishes Summary Split */}
<div className="border-t border-border-structural grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-structural bg-canvas-subtle/30">
<div className="p-5 sm:p-6">
<span className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze block mb-3 font-medium">
Available Metallurgies
</span>
<ul className="space-y-1.5 text-xs font-mono text-ink-secondary">
{materials.map((mat) => (
<li key={mat} className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-ink-primary" aria-hidden="true" />
<span>{mat}</span>
</li>
))}
</ul>
</div>
<div className="p-5 sm:p-6">
<span className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze block mb-3 font-medium">
Protective & Architectural Finishes
</span>
<ul className="space-y-1.5 text-xs font-mono text-ink-secondary">
{finishes.map((finish) => (
<li key={finish} className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-accent-bronze" aria-hidden="true" />
<span>{finish}</span>
</li>
))}
</ul>
</div>
</div>
</div>
);
}