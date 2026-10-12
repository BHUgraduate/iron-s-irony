import * as React from "react";
export default function Loading() {
return (
<div
aria-label="Loading atelier content..."
className="flex-1 flex flex-col items-center justify-center bg-canvas-bg min-h-[60vh] py-20 px-4"
>
<div className="max-w-xl w-full space-y-6 text-center">
{/* Animated Architectural Calibration Notch */}
<div className="relative w-12 h-12 mx-auto border border-border-structural flex items-center justify-center bg-canvas-card">
<div className="w-3 h-3 bg-accent-bronze animate-pulse" />
<div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-accent-bronze" />
<div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-accent-bronze" />
<div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-accent-bronze" />
<div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-accent-bronze" />
</div>
<div className="space-y-2">
<span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block font-medium">
iron’s irony Atelier
</span>
<span className="text-sm font-mono text-ink-muted block">
Rendering architectural drawing specifications...
</span>
</div>
<div className="w-48 h-1 bg-border-structural mx-auto overflow-hidden">
<div className="w-full h-full bg-accent-bronze origin-left animate-pulse" />
</div>
</div>
</div>
);
}