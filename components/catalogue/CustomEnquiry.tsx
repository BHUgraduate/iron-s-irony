import * as React from "react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Display, Eyebrow, Lead } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { designReference, type CatalogueDesign } from "@/data/catalogue";
import { SERVICES_DATA } from "@/data/services";
import { whatsappLink } from "@/lib/motion";

/**
 * "Make it yours." The pathway from any design, or from the catalogue itself, into the existing project
 * consultation (four short steps, only what is asked for). The chosen design and category travel with the visitor.
 */
export function CustomEnquiry({ design, headingId = "make-it-yours" }: { design?: CatalogueDesign; headingId?: string }) {
  const bring = design?.service.bring ?? SERVICES_DATA.find((s) => s.slug === "custom-fabrication")!.bring;
  const type = design?.service.type ?? "Something else";
  const wa = whatsappLink(
    design
      ? `Hello, I would like a custom version of the “${design.work.title}” design.`
      : "Hello, I have something in mind that is not in the catalogue and would like to discuss it."
  );
  return (
    <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12 items-end">
      <div className="lg:col-span-7">
        <Reveal>
          <Eyebrow className="mb-8">Make it yours</Eyebrow>
        </Reveal>
        <Display id={headingId} size="sm" lines={design ? ["Want it different?", "Make it yours."] : ["Have something", "different in mind?"]} />
        <Reveal className="mt-8">
          <Lead>
            {design
              ? "Use this design as a starting point. We develop the piece around your architecture, your dimensions and your taste."
              : "Work with iron’s irony to develop a piece around your architecture, dimensions and aesthetic. The designs here are where conversations begin, not where they end."}
          </Lead>
        </Reveal>
        <Reveal className="mt-10 flex flex-col sm:flex-row gap-3">
          <MagneticButton href="start" variant="copper" prefill={type} prefillStyle={design ? designReference(design) : undefined}>
            Start a custom enquiry
          </MagneticButton>
          <MagneticButton href={wa} external variant="outline-light" arrow={false}>
            Send photos on WhatsApp
          </MagneticButton>
        </Reveal>
      </div>
      <Reveal className="lg:col-span-5" delay={0.1}>
        <p className="micro text-canvas-bg/70">Good things to bring</p>
        <ul className="mt-5 border-t border-canvas-bg/20">
          {bring.map((b) => (
            <li key={b} className="py-3.5 border-b border-canvas-bg/15 text-[1rem] text-canvas-bg/85">
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[0.95rem] text-canvas-bg/65 leading-relaxed">
          The enquiry is four short steps and takes a couple of minutes. Photos are easiest to send on WhatsApp.
        </p>
      </Reveal>
    </div>
  );
}
