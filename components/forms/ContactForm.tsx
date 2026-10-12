"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Clock, RotateCcw } from "lucide-react";
export function ContactForm() {
const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
const {
register,
handleSubmit,
reset,
formState: { errors },
} = useForm<ContactFormValues>({
resolver: zodResolver(contactFormSchema),
});
const onSubmit = async (data: ContactFormValues) => {
setStatus("submitting");
// Client-side simulation of message dispatch to atelier inbox
try {
await new Promise((resolve) => setTimeout(resolve, 1000));
setStatus("success");
} catch (err) {
setStatus("error");
}
};
const handleReset = () => {
reset();
setStatus("idle");
};
if (status === "success") {
return (
<div className="border border-border-structural bg-canvas-card p-8 sm:p-10 space-y-4">
<div className="w-10 h-10 border border-border-structural bg-canvas-subtle flex items-center justify-center text-status-success">
<CheckCircle2 className="w-5 h-5" aria-hidden="true" />
</div>
<h3 className="font-serif text-2xl text-ink-primary font-medium">
Message Delivered to the Workshop
</h3>
<p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
Your inquiry has been logged into our atelier dispatch queue. A lead metalworker or project estimator will respond within standard workshop hours.
</p>
<div className="pt-2">
<button
type="button"
onClick={handleReset}
className="text-xs font-mono uppercase tracking-architectural text-accent-bronze hover:text-accent-bronze-hover transition-colors inline-flex items-center gap-1.5"
>
<RotateCcw className="w-3.5 h-3.5" />
<span>Send another message</span>
</button>
</div>
</div>
);
}
return (
<form
onSubmit={handleSubmit(onSubmit)}
noValidate
className="border border-border-structural bg-canvas-card p-6 sm:p-8 space-y-5 shadow-sm"
aria-label="Direct Workshop Message Form"
>
<div className="border-b border-border-structural pb-3 mb-4">
<h3 className="font-serif text-xl text-ink-primary font-medium">
Send a Direct Message
</h3>
<p className="text-xs text-ink-secondary mt-1">
For general trade inquiries, shop visits, or drawing coordination.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<Input
label="Your Name"
requiredIndicator
placeholder="e.g. Julian Wright"
error={errors.fullName?.message}
{...register("fullName")}
/>
<Input
label="Email Address"
type="email"
requiredIndicator
placeholder="e.g. jwright@domain.com"
error={errors.email?.message}
{...register("email")}
/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<Input
label="Telephone (Optional)"
type="tel"
placeholder="e.g. +1 (555) 012-3456"
error={errors.phone?.message}
{...register("phone")}
/>
<Input
label="Inquiry Subject"
requiredIndicator
placeholder="e.g. Workshop Visit Appointment or Lead Times"
error={errors.subject?.message}
{...register("subject")}
/>
</div>
<Textarea
label="Message"
requiredIndicator
rows={4}
placeholder="How can our metalworkers assist you with your project?"
error={errors.message?.message}
{...register("message")}
/>
{status === "error" && (
<div
role="alert"
className="border border-status-error bg-status-error/10 p-3 text-xs font-mono text-status-error flex items-start gap-2"
>
<AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
<p>Message could not be sent. Please retry or contact us directly by telephone.</p>
</div>
)}
<div className="pt-2">
<Button
type="submit"
variant="primary"
size="md"
disabled={status === "submitting"}
className="w-full sm:w-auto"
>
{status === "submitting" ? (
<span className="flex items-center gap-2">
<Clock className="w-4 h-4 animate-spin" />
<span>Transmitting...</span>
</span>
) : (
<span>Send Workshop Message</span>
)}
</Button>
</div>
</form>
);
}