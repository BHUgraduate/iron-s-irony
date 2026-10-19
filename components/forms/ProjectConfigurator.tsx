"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { quoteFormSchema } from "@/lib/validations";
import { COMPANY_DETAILS } from "@/data/company";
import { EVENT_PREFILL, whatsappLink, type PrefillDetail } from "@/lib/motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";

const TYPES = ["Gate", "Railing", "Balcony", "Staircase", "Grill", "Something else"] as const;
const NEEDS = ["New construction", "Replacement", "Renovation", "Custom design"] as const;
const ROLES = [
  { v: "homeowner", l: "Homeowner" },
  { v: "architect", l: "Architect" },
  { v: "interior_designer", l: "Designer" },
  { v: "builder_contractor", l: "Builder" },
  { v: "commercial_developer", l: "Business" },
] as const;
const REACH = [
  { v: "phone", l: "Call me" },
  { v: "whatsapp", l: "WhatsApp" },
  { v: "email", l: "Email" },
] as const;

const STEPS = ["What", "Need", "Details", "You"] as const;

function serviceFor(type: string, need: string) {
  if (need === "Custom design") return "custom_fabrication";
  if (need === "Renovation") return "restoration_repair";
  if (type === "Railing" || type === "Staircase") return "architectural_ironwork";
  if (type === "Gate" || type === "Grill" || type === "Balcony") return "building_ironwork";
  return "custom_fabrication";
}

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

function Choice({
  options,
  value,
  onPick,
  labelledBy,
}: {
  options: readonly string[];
  value: string;
  onPick: (v: string) => void;
  labelledBy: string;
}) {
  return (
    <div role="radiogroup" aria-labelledby={labelledBy} className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-canvas-bg/15">
      {options.map((o) => {
        const on = value === o;
        return (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onPick(o)}
            className={cn(
              "min-h-[72px] sm:min-h-[88px] px-4 text-left font-medium text-[1.05rem] transition-colors duration-300",
              on ? "bg-canvas-bg text-iron-950" : "bg-iron-950 text-canvas-bg hover:bg-iron-800"
            )}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

const fieldClass =
  "w-full bg-transparent border-0 border-b border-canvas-bg/30 px-0 py-3 text-[16px] text-canvas-bg placeholder:text-canvas-bg/35 focus:outline-none focus:border-accent-amber transition-colors";

export function ProjectConfigurator() {
  const reduce = useReducedMotion();
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState("");
  const [need, setNeed] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [role, setRole] = React.useState<string>("homeowner");
  const [reach, setReach] = React.useState<string>("phone");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const headingRef = React.useRef<HTMLHeadingElement>(null);

  // The assistant and service panels can pre-select what the visitor already told us.
  React.useEffect(() => {
    const onPrefill = (e: Event) => {
      const d = (e as CustomEvent<PrefillDetail>).detail ?? {};
      if (d.type) setType(d.type);
      if (d.need) setNeed(d.need);
      setStep(d.type && d.need ? 2 : d.type ? 1 : 0);
      setStatus("idle");
    };
    window.addEventListener(EVENT_PREFILL, onPrefill);
    return () => window.removeEventListener(EVENT_PREFILL, onPrefill);
  }, []);

  const go = (n: number) => {
    setStep(n);
    window.setTimeout(() => headingRef.current?.focus({ preventScroll: true }), 30);
  };

  const summary = `${type || "Project"}${need ? `, ${need.toLowerCase()}` : ""}`;
  const waMessage = `Hello, I am ${name || "interested in a project"}. ${summary}. ${description} ${
    location ? `Site: ${location}.` : ""
  }`.trim();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      fullName: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      customerType: role,
      serviceCategory: serviceFor(type, need),
      projectType: `${type} / ${need}`,
      projectLocation: location.trim(),
      projectDescription: description.trim(),
      preferredContactMethod: reach,
    };
    const parsed = quoteFormSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] ??= issue.message;
      setErrors(next);
      if (next.projectDescription) go(2);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (res.status === 503) return setStatus("unconfigured");
      if (!res.ok) return setStatus("error");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const canNext = step === 0 ? !!type : step === 1 ? !!need : description.trim().length >= 15;

  return (
    <section id="start" aria-labelledby="start-heading" className="relative bg-iron-950 text-canvas-bg grain py-28 sm:py-44 scroll-mt-0">
      <div className="relative max-w-[88rem] mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_minmax(0,40rem)] gap-16 lg:gap-24">
        <div>
          <p className="micro text-accent-amber mb-8">Start a project</p>
          <h2 id="start-heading" className="display display-md">
            Have
            <br />
            something
            <br />
            else in mind?
          </h2>
          <p className="mt-10 max-w-md text-lg leading-relaxed text-canvas-bg/70">
            Custom work is what we do. Tell us what you are building in four short steps. It is the start of a
            conversation, not a contract.
          </p>
        </div>

        <div className="min-w-0">
          {status === "sent" ? (
            <div role="status" className="border border-canvas-bg/20 p-8 sm:p-10">
              <p className="micro text-accent-amber">Received</p>
              <h3 ref={headingRef} tabIndex={-1} className="display text-3xl sm:text-4xl mt-4 focus:outline-none">
                Thank you, {name.split(" ")[0]}.
              </h3>
              <p className="mt-5 text-canvas-bg/75 leading-relaxed">
                Your brief is with the workshop. They will contact you by {REACH.find((r) => r.v === reach)?.l.toLowerCase()}.
                If you have photos of the space or a reference, send them on WhatsApp so we can start with the full picture.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href={whatsappLink(waMessage)} external variant="light" arrow={false}>
                  Send photos on WhatsApp
                </MagneticButton>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate aria-describedby="start-progress">
              <ol id="start-progress" className="flex gap-6 micro mb-10" aria-label="Progress">
                {STEPS.map((s, i) => (
                  <li
                    key={s}
                    aria-current={i === step ? "step" : undefined}
                    className={cn(i === step ? "text-canvas-bg" : i < step ? "text-accent-amber" : "text-canvas-bg/35")}
                  >
                    0{i + 1} {s}
                  </li>
                ))}
              </ol>

              <div className={cn(!reduce && "animate-[fadeIn_0.5s_ease]")} key={step}>
                {step === 0 && (
                  <>
                    <h3 id="q-type" ref={headingRef} tabIndex={-1} className="display text-2xl sm:text-3xl mb-6 focus:outline-none">
                      What are you building?
                    </h3>
                    <Choice
                      options={TYPES}
                      value={type}
                      labelledBy="q-type"
                      onPick={(v) => {
                        setType(v);
                        go(1);
                      }}
                    />
                  </>
                )}
                {step === 1 && (
                  <>
                    <h3 id="q-need" ref={headingRef} tabIndex={-1} className="display text-2xl sm:text-3xl mb-6 focus:outline-none">
                      What do you need?
                    </h3>
                    <Choice
                      options={NEEDS}
                      value={need}
                      labelledBy="q-need"
                      onPick={(v) => {
                        setNeed(v);
                        go(2);
                      }}
                    />
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3 ref={headingRef} tabIndex={-1} className="display text-2xl sm:text-3xl mb-2 focus:outline-none">
                      Tell us about it.
                    </h3>
                    <p className="text-canvas-bg/60 mb-6">
                      {summary}. Size, where it goes, what you have seen that you like.
                    </p>
                    <label htmlFor="cfg-desc" className="sr-only">
                      Project description
                    </label>
                    <textarea
                      id="cfg-desc"
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      aria-invalid={!!errors.projectDescription}
                      aria-describedby={errors.projectDescription ? "cfg-desc-err" : undefined}
                      placeholder="A two-leaf gate for a 3 metre opening, something simple with vertical bars…"
                      className={cn(fieldClass, "resize-none")}
                    />
                    {errors.projectDescription && (
                      <p id="cfg-desc-err" className="mt-2 text-sm text-red-300">
                        {errors.projectDescription}
                      </p>
                    )}
                    <p className="mt-5 text-sm text-canvas-bg/55">
                      Photos and references are easiest to send on WhatsApp once you have submitted this.
                    </p>
                  </>
                )}
                {step === 3 && (
                  <>
                    <h3 ref={headingRef} tabIndex={-1} className="display text-2xl sm:text-3xl mb-8 focus:outline-none">
                      How do we reach you?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                      {[
                        { id: "cfg-name", label: "Name", value: name, set: setName, key: "fullName", type: "text", ac: "name" },
                        { id: "cfg-phone", label: "Phone", value: phone, set: setPhone, key: "phone", type: "tel", ac: "tel" },
                        { id: "cfg-email", label: "Email", value: email, set: setEmail, key: "email", type: "email", ac: "email" },
                        { id: "cfg-loc", label: "City or site location", value: location, set: setLocation, key: "projectLocation", type: "text", ac: "address-level2" },
                      ].map((f) => (
                        <div key={f.id}>
                          <label htmlFor={f.id} className="micro text-canvas-bg/60">
                            {f.label}
                          </label>
                          <input
                            id={f.id}
                            type={f.type}
                            autoComplete={f.ac}
                            value={f.value}
                            onChange={(e) => f.set(e.target.value)}
                            aria-invalid={!!errors[f.key]}
                            aria-describedby={errors[f.key] ? `${f.id}-err` : undefined}
                            className={fieldClass}
                          />
                          {errors[f.key] && (
                            <p id={`${f.id}-err`} className="mt-1 text-sm text-red-300">
                              {errors[f.key]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <fieldset className="mt-8">
                      <legend className="micro text-canvas-bg/60 mb-3">I am a</legend>
                      <div className="flex flex-wrap gap-2">
                        {ROLES.map((r) => (
                          <button
                            key={r.v}
                            type="button"
                            role="radio"
                            aria-checked={role === r.v}
                            onClick={() => setRole(r.v)}
                            className={cn(
                              "min-h-[44px] px-4 border text-[0.95rem] transition-colors",
                              role === r.v ? "bg-canvas-bg text-iron-950 border-canvas-bg" : "border-canvas-bg/25 hover:border-canvas-bg"
                            )}
                          >
                            {r.l}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                    <fieldset className="mt-6">
                      <legend className="micro text-canvas-bg/60 mb-3">Reach me by</legend>
                      <div className="flex flex-wrap gap-2">
                        {REACH.map((r) => (
                          <button
                            key={r.v}
                            type="button"
                            role="radio"
                            aria-checked={reach === r.v}
                            onClick={() => setReach(r.v)}
                            className={cn(
                              "min-h-[44px] px-4 border text-[0.95rem] transition-colors",
                              reach === r.v ? "bg-canvas-bg text-iron-950 border-canvas-bg" : "border-canvas-bg/25 hover:border-canvas-bg"
                            )}
                          >
                            {r.l}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </>
                )}
              </div>

              <div className="mt-10 flex items-center gap-4 flex-wrap">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => go(step - 1)}
                    className="micro min-h-[52px] px-2 flex items-center gap-2 text-canvas-bg/70 hover:text-canvas-bg"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
                  </button>
                )}
                {step === 2 && (
                  <MagneticButton onClick={() => canNext && go(3)} disabled={!canNext} variant="light">
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
                {(status === "unconfigured" || status === "error") && (
                  <div className="border border-accent-amber/50 p-5 text-[0.95rem] leading-relaxed">
                    <p>
                      {status === "unconfigured"
                        ? "Online enquiries are not switched on for this site yet. Your details were not sent."
                        : "Something went wrong and your enquiry was not sent."}{" "}
                      Please reach the workshop directly:
                    </p>
                    <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                      <a className="link-reveal py-1" href={`tel:${COMPANY_DETAILS.contact.phone}`}>
                        {COMPANY_DETAILS.contact.phone}
                      </a>
                      <a className="link-reveal py-1" href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer">
                        WhatsApp with your brief
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
