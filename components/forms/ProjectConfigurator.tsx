"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  enquirySchema,
  NEEDS,
  PROJECT_TYPES,
  REACH,
  ROLES,
  SPACES,
  type EnquiryValues,
} from "@/lib/validations";
import { buildWhatsAppMessage } from "@/lib/enquiry";
import { COMPANY_DETAILS } from "@/data/company";
import { EVENT_PREFILL, PREFILL_KEY, whatsappLink, type PrefillDetail } from "@/lib/motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AreaField, TextField } from "@/components/ui/Field";
import { Eyebrow } from "@/components/ui/Type";
import { Choice, Pills } from "@/components/forms/Choice";
import { cn } from "@/lib/utils";

const STEPS = ["Create", "Space", "Vision", "You"] as const;

type Status = "idle" | "sending" | "sent" | "unconfigured" | "failed" | "limited";

interface Form {
  projectType: string;
  space: string;
  need: string;
  description: string;
  dimensions: string;
  location: string;
  style: string;
  materialPreference: string;
  referenceLinks: string;
  fullName: string;
  phone: string;
  email: string;
  role: string;
  reach: string;
  website: string;
}

const EMPTY: Form = {
  projectType: "",
  space: "",
  need: "",
  description: "",
  dimensions: "",
  location: "",
  style: "",
  materialPreference: "",
  referenceLinks: "",
  fullName: "",
  phone: "",
  email: "",
  role: "homeowner",
  reach: "phone",
  website: "",
};

/** The project consultation. Four short steps, optional detail only when asked for. */
export function ProjectConfigurator({ heading = "have" }: { heading?: "have" | "start" }) {
  const reduce = useReducedMotion();
  const [step, setStep] = React.useState(0);
  const [f, setF] = React.useState<Form>(EMPTY);
  const [more, setMore] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const set = (k: keyof Form) => (v: string) => setF((cur) => ({ ...cur, [k]: v }));
  const onInput = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(k)(e.target.value);

  React.useEffect(() => {
    const onPrefill = (e: Event) => {
      const d = (e as CustomEvent<PrefillDetail>).detail ?? {};
      apply(d);
    };
    const apply = (d: PrefillDetail) => {
      setF((cur) => ({
        ...cur,
        projectType: d.type ?? cur.projectType,
        space: d.space ?? cur.space,
        need: d.need ?? cur.need,
        style: d.style ?? cur.style,
      }));
      setStep(d.type ? 1 : 0);
      setStatus("idle");
    };
    try {
      const saved = sessionStorage.getItem(PREFILL_KEY);
      if (saved) {
        sessionStorage.removeItem(PREFILL_KEY);
        apply(JSON.parse(saved));
      }
    } catch {}
    window.addEventListener(EVENT_PREFILL, onPrefill);
    return () => window.removeEventListener(EVENT_PREFILL, onPrefill);
  }, []);

  const go = (n: number) => {
    setStep(n);
    window.setTimeout(() => headingRef.current?.focus({ preventScroll: true }), 30);
  };

  const recap = [f.projectType, f.space && f.space.toLowerCase(), f.need && f.need.toLowerCase()].filter(Boolean).join(" · ");
  const waLink = whatsappLink(buildWhatsAppMessage(f));
  const canGoStep2 = !!f.space && !!f.need;
  const canGoStep3 = f.description.trim().length >= 15;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = enquirySchema.safeParse(f);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] ??= issue.message;
      setErrors(next);
      if (next.projectType) go(0);
      else if (next.space || next.need) go(1);
      else if (next.description) go(2);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data satisfies EnquiryValues),
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

  const contact = COMPANY_DETAILS.contact;

  return (
    <section
      id="start"
      aria-labelledby="start-heading"
      data-tone="dark"
      className="relative bg-iron-950 text-canvas-bg grain py-24 sm:py-40 scroll-mt-0"
    >
      <div className="relative max-w-[88rem] mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_minmax(0,40rem)] gap-14 lg:gap-24">
        <div>
          <Eyebrow className="mb-8">Start a project</Eyebrow>
          <h2 id="start-heading" className="display display-md">
            {heading === "have" ? (
              <>
                Have
                <br />
                something
                <br />
                else in mind?
              </>
            ) : (
              <>
                Tell us
                <br />
                what you
                <br />
                have in mind.
              </>
            )}
          </h2>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-canvas-bg/75">
            Custom work is what we do. Four short steps, and everything beyond the basics is optional. It is the start
            of a conversation, not a contract.
          </p>
        </div>

        <div className="min-w-0">
          {status === "sent" ? (
            <div role="status" className="border border-canvas-bg/25 p-8 sm:p-10">
              <Eyebrow>Received</Eyebrow>
              <h3 ref={headingRef} tabIndex={-1} className="display text-3xl sm:text-4xl mt-4 focus:outline-none">
                Thank you, {f.fullName.split(" ")[0]}.
              </h3>
              <p className="mt-5 text-canvas-bg/80 leading-relaxed">
                We have your project details and will get back to you. If you have photos of the space or a reference
                you like, send them on WhatsApp so we can start with the full picture.
              </p>
              <div className="mt-8">
                <MagneticButton href={waLink} external variant="light" arrow={false}>
                  Send photos on WhatsApp
                </MagneticButton>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <ol className="flex gap-5 sm:gap-6 micro mb-10 flex-wrap" aria-label="Progress">
                {STEPS.map((s, i) => (
                  <li
                    key={s}
                    aria-current={i === step ? "step" : undefined}
                    className={cn(i === step ? "text-canvas-bg" : i < step ? "text-accent-amber" : "text-canvas-bg/55")}
                  >
                    0{i + 1} {s}
                  </li>
                ))}
              </ol>

              <div className={cn(!reduce && "animate-[fadeIn_0.5s_ease]")} key={step}>
                {step === 0 && (
                  <>
                    <h3 id="q-type" ref={headingRef} tabIndex={-1} className="display text-2xl sm:text-3xl mb-6 focus:outline-none">
                      What are you looking to create?
                    </h3>
                    <Choice
                      options={PROJECT_TYPES}
                      value={f.projectType}
                      labelledBy="q-type"
                      onPick={(v) => {
                        set("projectType")(v);
                        go(1);
                      }}
                    />
                    {errors.projectType && <p className="mt-3 text-sm text-red-300">{errors.projectType}</p>}
                  </>
                )}

                {step === 1 && (
                  <>
                    <h3 id="q-space" ref={headingRef} tabIndex={-1} className="display text-2xl sm:text-3xl mb-6 focus:outline-none">
                      What kind of space is it?
                    </h3>
                    <Choice options={SPACES} value={f.space} labelledBy="q-space" cols="grid-cols-2" onPick={set("space")} />
                    {f.space && (
                      <div className="mt-10">
                        <p id="q-need" className="display text-xl sm:text-2xl mb-5">
                          Is it new, a replacement, or something to rethink?
                        </p>
                        <Choice options={NEEDS} value={f.need} labelledBy="q-need" cols="grid-cols-2" onPick={set("need")} />
                      </div>
                    )}
                    {(errors.space || errors.need) && <p className="mt-3 text-sm text-red-300">{errors.space ?? errors.need}</p>}
                  </>
                )}

                {step === 2 && (
                  <>
                    <h3 ref={headingRef} tabIndex={-1} className="display text-2xl sm:text-3xl mb-2 focus:outline-none">
                      Tell us what you have in mind.
                    </h3>
                    <p className="text-canvas-bg/70 mb-6">{recap}</p>
                    <AreaField
                      id="cfg-desc"
                      label="Your project"
                      rows={5}
                      value={f.description}
                      onChange={onInput("description")}
                      error={errors.description}
                      placeholder="A gate for a wide front entrance, something simple with vertical bars. I have a photo of one I like…"
                    />
                    <button
                      type="button"
                      aria-expanded={more}
                      aria-controls="cfg-more"
                      onClick={() => setMore((m) => !m)}
                      className="mt-6 micro min-h-[44px] flex items-center gap-3 text-canvas-bg/85 hover:text-canvas-bg"
                    >
                      <span aria-hidden="true" className="w-4 text-center">{more ? "−" : "+"}</span>
                      Add more detail (optional)
                    </button>
                    {more && (
                      <div id="cfg-more" className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                        <TextField id="cfg-dim" label="Approximate size" optional value={f.dimensions} onChange={onInput("dimensions")} placeholder="e.g. 3 m wide, 2 m high" error={errors.dimensions} />
                        <TextField id="cfg-loc" label="Project location" optional autoComplete="address-level2" value={f.location} onChange={onInput("location")} placeholder="City or area" error={errors.location} />
                        <TextField id="cfg-style" label="Style" optional value={f.style} onChange={onInput("style")} placeholder="Modern, traditional, ornamental…" error={errors.style} />
                        <TextField id="cfg-mat" label="Material or finish" optional value={f.materialPreference} onChange={onInput("materialPreference")} placeholder="If you have a preference" error={errors.materialPreference} />
                        <TextField
                          id="cfg-ref"
                          label="Reference links"
                          optional
                          className="sm:col-span-2"
                          value={f.referenceLinks}
                          onChange={onInput("referenceLinks")}
                          placeholder="Links to photos or pages you like"
                          hint="You can also send photos on WhatsApp after you submit."
                          error={errors.referenceLinks}
                        />
                      </div>
                    )}
                  </>
                )}

                {step === 3 && (
                  <>
                    <h3 ref={headingRef} tabIndex={-1} className="display text-2xl sm:text-3xl mb-2 focus:outline-none">
                      How can we reach you?
                    </h3>
                    <p className="text-canvas-bg/70 mb-8">{recap}</p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                      <TextField id="cfg-name" label="Name" autoComplete="name" value={f.fullName} onChange={onInput("fullName")} error={errors.fullName} />
                      <TextField id="cfg-phone" label="Phone" type="tel" autoComplete="tel" inputMode="tel" value={f.phone} onChange={onInput("phone")} error={errors.phone} />
                      <TextField
                        id="cfg-email"
                        label="Email"
                        type="email"
                        autoComplete="email"
                        optional={f.reach !== "email"}
                        value={f.email}
                        onChange={onInput("email")}
                        error={errors.email}
                        className="sm:col-span-2"
                      />
                    </div>
                    {/* Honeypot: hidden from people and assistive tech, bots fill it in */}
                    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                      <label>
                        Website
                        <input tabIndex={-1} autoComplete="off" value={f.website} onChange={onInput("website")} />
                      </label>
                    </div>
                    <Pills legend="I am a" options={ROLES} value={f.role} onPick={set("role")} />
                    <Pills legend="Reach me by" options={REACH} value={f.reach} onPick={set("reach")} />
                  </>
                )}
              </div>

              <div className="mt-10 flex items-center gap-4 flex-wrap">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => go(step - 1)}
                    className="micro min-h-[52px] pr-2 flex items-center gap-2 text-canvas-bg/75 hover:text-canvas-bg"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
                  </button>
                )}
                {step === 1 && (
                  <MagneticButton onClick={() => canGoStep2 && go(2)} disabled={!canGoStep2} variant="light">
                    Continue
                  </MagneticButton>
                )}
                {step === 2 && (
                  <MagneticButton onClick={() => canGoStep3 && go(3)} disabled={!canGoStep3} variant="light">
                    Continue
                  </MagneticButton>
                )}
                {step === 3 && (
                  <MagneticButton type="submit" disabled={status === "sending"} variant="copper" arrow={false}>
                    {status === "sending" ? "Sending…" : "Discuss My Project"}
                  </MagneticButton>
                )}
              </div>

              <div aria-live="polite" className="mt-6">
                {status !== "idle" && status !== "sending" && (
                  <div role="alert" className="border border-accent-amber/60 p-5 text-[0.95rem] leading-relaxed">
                    <p>
                      {status === "unconfigured" && "Online enquiries are not switched on for this site yet, so nothing was sent."}
                      {status === "failed" && "Something went wrong and your enquiry was not sent."}
                      {status === "limited" && "Too many enquiries from this connection just now. Please try again in a few minutes."}{" "}
                      You can send exactly this brief to us directly:
                    </p>
                    <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                      <a className="link-reveal py-1" href={waLink} target="_blank" rel="noopener noreferrer">
                        Send on WhatsApp
                      </a>
                      <a className="link-reveal py-1" href={`tel:${contact.phone}`}>
                        Call {contact.phoneDisplay}
                      </a>
                      <a className="link-reveal py-1" href={`mailto:${contact.email}`}>
                        Email us
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
