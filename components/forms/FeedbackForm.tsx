"use client";

import * as React from "react";
import { feedbackSchema, FEEDBACK_CONSENT, PROJECT_TYPES, ROLES, type FeedbackValues } from "@/lib/validations";
import { COMPANY_DETAILS } from "@/data/company";
import { whatsappLink } from "@/lib/motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AreaField, TextField } from "@/components/ui/Field";
import { Eyebrow } from "@/components/ui/Type";
import { Pills } from "@/components/forms/Choice";

type Status = "idle" | "sending" | "sent" | "unconfigured" | "failed" | "limited";

interface Form {
  fullName: string;
  role: string;
  projectType: string;
  place: string;
  message: string;
  consent: string;
  contact: string;
  website: string;
}

const EMPTY: Form = { fullName: "", role: "", projectType: "", place: "", message: "", consent: "", contact: "", website: "" };

const PROJECT_OPTIONS = PROJECT_TYPES.map((t) => ({ value: t, label: t }));

/** A plain message people can send themselves if the form cannot deliver it. */
function fallbackMessage(f: Form) {
  const who = f.fullName.trim() ? `Hello, I am ${f.fullName.trim()}.` : "Hello,";
  return `${who} I would like to share feedback about working with iron’s irony.\n\n${f.message.trim() || "(my feedback)"}`;
}

/** Feedback from people who have worked with iron’s irony. Nothing is published until the owner has confirmed it. */
export function FeedbackForm() {
  const [f, setF] = React.useState<Form>(EMPTY);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const thanksRef = React.useRef<HTMLHeadingElement>(null);
  const set = (k: keyof Form) => (v: string) => setF((cur) => ({ ...cur, [k]: v }));
  const onInput = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(k)(e.target.value);
  const contact = COMPANY_DETAILS.contact;

  React.useEffect(() => {
    if (status === "sent") thanksRef.current?.focus();
  }, [status]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...f, projectType: f.projectType || undefined };
    const parsed = feedbackSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] ??= issue.message;
      setErrors(next);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data satisfies FeedbackValues),
      });
      if (res.ok) return setStatus("sent");
      if (res.status === 503) {
        // Only a missing webhook means "not switched on". Any other 503 is a server error and must not be mislabelled.
        const body = (await res.json().catch(() => null)) as { code?: string } | null;
        return setStatus(body?.code === "not_configured" ? "unconfigured" : "failed");
      }
      if (res.status === 429) return setStatus("limited");
      if (res.status === 422) {
        const body = (await res.json()) as { fields?: Record<string, string> };
        setErrors(body.fields ?? {});
        return setStatus("idle");
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  };

  const message = fallbackMessage(f);
  const wa = whatsappLink(message);
  const mail = `mailto:${contact.email}?subject=${encodeURIComponent("Feedback for iron’s irony")}&body=${encodeURIComponent(message)}`;
  const first = f.fullName.trim().split(" ")[0];

  if (status === "sent") {
    return (
      <div role="status" className="border border-canvas-bg/25 p-8 sm:p-10">
        <Eyebrow>Received</Eyebrow>
        <h3 ref={thanksRef} tabIndex={-1} className="display text-3xl sm:text-4xl mt-4 focus:outline-none">
          Thank you{first ? `, ${first}` : ""}.
        </h3>
        <p className="mt-5 text-canvas-bg/80 leading-relaxed">
          {f.consent === "private"
            ? "We will read every word, and it stays private. It helps us do the next job better."
            : "We will read it and confirm it is you, using the contact you gave. Then, as you agreed, your words will appear on this page. Your email or phone is never published."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate aria-label="Share feedback">
      <div className="space-y-8">
        <div>
          <Pills legend="How did we work together?" options={ROLES} value={f.role} onPick={set("role")} />
          {errors.role && <p className="mt-2 text-sm text-red-300">{errors.role}</p>}
        </div>
        <Pills
          legend="What did we make? (optional)"
          options={PROJECT_OPTIONS}
          value={f.projectType}
          onPick={(v) => set("projectType")(v === f.projectType ? "" : v)}
        />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          <TextField id="fb-name" label="Your name" autoComplete="name" value={f.fullName} onChange={onInput("fullName")} error={errors.fullName} />
          <TextField id="fb-place" label="Town or city" optional autoComplete="address-level2" value={f.place} onChange={onInput("place")} error={errors.place} />
        </div>
        <AreaField
          id="fb-message"
          label="Your words"
          rows={5}
          maxLength={800}
          hint="How was it, from the first conversation to the finished piece? A few honest sentences are plenty."
          value={f.message}
          onChange={onInput("message")}
          error={errors.message}
        />
        <div>
          <Pills legend="May we share your words on this website?" options={FEEDBACK_CONSENT} value={f.consent} onPick={set("consent")} />
          {errors.consent && <p className="mt-2 text-sm text-red-300">{errors.consent}</p>}
        </div>
        <TextField
          id="fb-contact"
          label="Email or phone"
          autoComplete="email"
          hint="So we can confirm it is really you. We never publish it."
          value={f.contact}
          onChange={onInput("contact")}
          error={errors.contact}
        />
        {/* Honeypot: hidden from people and assistive tech, bots fill it in */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input tabIndex={-1} autoComplete="off" value={f.website} onChange={onInput("website")} />
          </label>
        </div>
      </div>

      <div aria-live="polite" className="mt-6">
        {status !== "idle" && status !== "sending" && (
          <div role="alert" className="border border-accent-amber/60 p-5 text-[0.95rem] leading-relaxed">
            <p>
              {status === "unconfigured" && "Online feedback is not switched on for this site yet, so nothing was sent."}
              {status === "failed" && "Something went wrong and your feedback was not sent."}
              {status === "limited" && "Too many messages from this connection just now. Please try again in a few minutes."} You can send it to us directly:
            </p>
            <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
              <a className="link-reveal py-1" href={wa} target="_blank" rel="noopener noreferrer">
                Send on WhatsApp
              </a>
              <a className="link-reveal py-1" href={mail}>
                Email us
              </a>
            </p>
          </div>
        )}
      </div>

      <div className="mt-10">
        <MagneticButton type="submit" disabled={status === "sending"} variant="copper" arrow={false}>
          {status === "sending" ? "Sending…" : "Share my feedback"}
        </MagneticButton>
      </div>
    </form>
  );
}
