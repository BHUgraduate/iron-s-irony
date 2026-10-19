import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_DATA, getService } from "@/data/services";
import { WORK } from "@/data/projects";
import { constructPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Accent, Display, Eyebrow, Lead } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { StartWithType } from "@/components/ui/StartWithType";
import { ServiceFooterNav } from "@/components/ui/ServiceFooterNav";
import { WorkVisual } from "@/components/ui/WorkVisual";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return constructPageMetadata({
    title: `${s.title} | Services`,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const related = WORK.filter((w) => w.service === s.slug);

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.title, path: `/services/${s.slug}` },
        ])}
      />
      <PageHero eyebrow={`Service ${s.number} of 07`} lines={[s.title]} lead={s.summary} drawing={s.kind}>
        <MagneticButton href="start" prefill={s.type} variant="light">
          Start a {s.title.toLowerCase()} project
        </MagneticButton>
        <MagneticButton href="/services" variant="outline-light" arrow={false}>
          All services
        </MagneticButton>
      </PageHero>

      <Section tone="light" pad="md">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          <Reveal>
            <Eyebrow className="mb-6">What it covers</Eyebrow>
            <Accent>{s.line}</Accent>
            <ul className="mt-8 divide-y divide-iron-950/15 border-y border-iron-950/15">
              {s.uses.map((u) => (
                <li key={u} className="py-4 text-[1.05rem]">
                  {u}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow className="mb-6">Where it belongs</Eyebrow>
            <ul className="divide-y divide-iron-950/15 border-y border-iron-950/15 md:mt-[4.25rem]">
              {s.spaces.map((u) => (
                <li key={u} className="py-4 text-[1.05rem]">
                  {u}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.95rem] text-ink-secondary leading-relaxed max-w-md">
              Made to your site, not from a stock range. Every piece starts from your opening, your building and the way you
              use the space.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" pad="md" labelledBy="decisions">
        <Eyebrow className="mb-6">The design conversation</Eyebrow>
        <Display id="decisions" size="sm" lines={["What we decide", "together."]} />
        <ol className="mt-14 grid sm:grid-cols-2 gap-px bg-canvas-bg/15 border border-canvas-bg/15">
          {s.decisions.map((d, i) => (
            <Reveal key={d} as="li" delay={i * 0.06} className="bg-iron-950 p-8 sm:p-10">
              <p className="micro text-accent-amber">0{i + 1}</p>
              <p className="mt-4 text-xl sm:text-2xl leading-snug">{d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="concrete" pad="md" labelledBy="bring">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <Eyebrow className="mb-6">To get started</Eyebrow>
            <Display id="bring" size="sm" lines={["What to bring."]} />
            <Lead className="mt-8">Rough is fine. You do not need a finished brief to begin.</Lead>
          </div>
          <ul className="border-t border-iron-950/20">
            {s.bring.map((b, i) => (
              <li key={b} className="flex gap-6 py-6 border-b border-iron-950/20">
                <span className="micro text-ink-muted w-6 pt-2">0{i + 1}</span>
                <span className="text-xl sm:text-2xl">{b}</span>
              </li>
            ))}
            <li className="pt-8">
              <StartWithType type={s.type} className="inline-block micro font-medium link-reveal py-2">
                Start a {s.title.toLowerCase()} project
              </StartWithType>
            </li>
          </ul>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="dark" pad="md" labelledBy="related">
          <Eyebrow className="mb-6">Related work</Eyebrow>
          <h2 id="related" className="sr-only">
            Related work
          </h2>
          {related.map((w) => (
            <Link key={w.slug} href={`/projects/${w.slug}`} className="group grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <WorkVisual entry={w} className="aspect-[16/10]" />
              <div>
                <p className="micro text-accent-amber">{w.typeLabel}</p>
                <p className="display text-[clamp(1.6rem,3vw,2.4rem)] mt-4 leading-[0.98]">{w.title}</p>
                <p className="mt-5 text-canvas-bg/75 leading-relaxed">{w.summary}</p>
                <p className="mt-6 micro link-reveal inline-block py-2">Read the brief</p>
              </div>
            </Link>
          ))}
        </Section>
      )}

      <Section tone="light" pad="sm">
        <ServiceFooterNav slug={s.slug} />
      </Section>
    </main>
  );
}
