"use client";
import * as React from "react";
import { AlertCircle, RotateCcw, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_DETAILS } from "@/data/company";
export default function ErrorBoundary({
error,
reset,
}: {
error: Error & { digest?: string };
reset: () => void;
}) {
React.useEffect(() => {
// Log unexpected errors for atelier maintenance monitoring
console.error("iron’s irony — Client Runtime Exception:", error);
}, [error]);
return (
<main
id="main-content"
className="flex-1 flex flex-col items-center justify-center bg-canvas-bg py-20 px-4 sm:px-6 lg:px-8"
>
<div className="max-w-xl w-full border border-status-error/40 bg-canvas-card p-8 sm:p-12 text-center space-y-6 shadow-sm">
<div className="w-12 h-12 border border-status-error/30 bg-status-error/10 flex items-center justify-center text-status-error mx-auto">
<AlertCircle className="w-6 h-6" aria-hidden="true" />
</div>
<div className="space-y-2">
<span className="text-xs font-mono uppercase tracking-architectural text-status-error font-medium">
System Fault Detected
</span>
<h1 className="text-3xl sm:text-4xl font-serif font-medium text-ink-primary">
Fabrication Interface Interrupted
</h1>
<p className="text-xs sm:text-sm text-ink-secondary leading-relaxed max-w-md mx-auto">
An unexpected error prevented this view from rendering. Our digital studio infrastructure has logged the event.
</p>
</div>
{error.digest && (
<div className="p-2.5 bg-canvas-subtle border border-border-structural font-mono text-[11px] text-ink-muted">
Reference Digest: <code className="text-ink-primary font-bold">{error.digest}</code>
</div>
)}
<div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
<button
type="button"
onClick={() => reset()}
className="px-5 py-3 bg-ink-primary text-canvas-bg font-mono text-xs uppercase tracking-architectural hover:bg-accent-bronze transition-colors flex items-center justify-center gap-2"
>
<RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
<span>Retry Rendering</span>
</button>
<Button href="/" variant="outline" size="md">
<span>Return Home</span>
<Home className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
</Button>
</div>
<div className="pt-4 border-t border-border-subtle text-xs font-mono text-ink-muted">
Immediate assistance: Telephone{" "}
<span className="text-ink-primary font-medium">{COMPANY_DETAILS.contact.phone}</span>
</div>
</div>
</main>
);
}