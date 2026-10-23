import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WORK, getWork, isRepresentative } from "@/data/projects";
import { getService } from "@/data/services";
import { getDesign } from "@/data/catalogue";
import { constructPageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Display, Eyebrow } from "@/components/ui/Type";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { WorkVisual } from "@/components/ui/WorkVisual";
import { StartWithType } from "@/components/ui/StartWithType";

export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const w = getWork(params.slug);
  if (!w) return {};
  return constructPageMetadata({
    title: `${w.title} | Work`,
    description: w.summary,
    path: `/projects/${w.slug}`,
  });
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const w = getWork(params.slug);
  if (!w) notFound();
  const service = getService(w.service);
  const i = WORK.findIndex((x) => x.slug === w.slug);
  const next = WORK[(i + 1) % WORK.length];
  const rep = isRepresentative(w);
  const real = w.real
    ? ([
        ["Location", w.real.location],
        ["Year", w.real.year],
        ["Materials", w.real.materials],
        ["Finish", w.real.finish],
        ["Installation", w.real.installation],
      ] as const).filter(([, v]) => !!v)
    : [];

  const story = [
    { label: "What is made", text: w.made },
    { label: "Why people ask for it", text: w.why },
    { label: "The space it belongs to", text: w.belongs },
    { label: "What makes it interesting", text: w.interesting },
  ];

  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/projects" },
          { name: w.title, path: `/projects/${w.slug}` },
        ])}
      />
      <PageHero size="sm" eyebrow={`${w.typeLabel} · ${w.space}`} lines={[w.title]} className="[&_h1]:text-[clamp(2rem,6vw,5rem)]" />

      <Section tone="dark" pad="sm" className="!pt-0">
        <WorkVisual entry={w} className="aspect-[4/3] sm:aspect-[16/9]" priority />
        {rep && (
          <p className="mt-4 micro text-canvas-bg/65 normal-case tracking-wide max-w-2xl">
            A representative example, drawn to show the kind of piece. It is not a photograph of a completed project.
          </p>
        )}
      </Section>

      <Section tone="light" pad="md">
        <p className="font-serif italic text-3xl sm:text-5xl leading-tight max-w-4xl">{w.summary}</p>
        <dl className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {story.map((row, k) => (
            <Reveal key={row.label} delay={(k % 2) * 0.08}>
              <dt className="micro text-accent-ink">{row.label}</dt>
              <dd className="mt-4 text-[1.1rem] leading-relaxed text-ink-secondary max-w-lg">{row.text}</dd>
            </Reveal>
          ))}
        </dl>
        {real.length > 0 && (
          <dl className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-iron-950/15 border border-iron-950/15">
            {real.map(([k, v]) => (
              <div key={k} className="bg-canvas-bg p-6">
                <dt className="micro text-ink-muted">{k}</dt>
                <dd className="mt-2 text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        )}
      </Section>

      <Section tone="concrete" pad="md" labelledBy="settle">
        <Eyebrow className="mb-6">In the design conversation</Eyebrow>
        <Display id="settle" size="sm" lines={["What we would", "settle together."]} />
        <ul className="mt-12 flex flex-wrap gap-3">
          {w.decisions.map((d) => (
            <li key={d} className="px-5 py-3 border border-iron-950/25 text-[1rem]">
              {d}
            </li>
          ))}
        </ul>
        <div className="mt-14 flex flex-col sm:flex-row gap-3">
          <MagneticButton href="start" prefill={service?.type} variant="dark">
            Build Something Like This
          </MagneticButton>
          {service && (
            <MagneticButton href={`/services/${service.slug}`} variant="outline-dark" arrow={false}>
              About {service.title.toLowerCase()}
            </MagneticButton>
          )}
        </div>
        {getDesign(w.slug) && (
          <p className="mt-8 text-[0.95rem] text-ink-secondary">
            This piece is also in the{" "}
            <Link href={`/catalogue/${w.slug}`} className="underline underline-offset-4 hover:text-iron-950">
              catalogue
            </Link>
            , with its specification and a custom enquiry.
          </p>
        )}
        {service && (
          <p className="mt-8 text-[0.95rem] text-ink-secondary">
            Or{" "}
            <StartWithType type={service.type} className="underline underline-offset-4 hover:text-iron-950">
              start a {service.title.toLowerCase()} project
            </StartWithType>{" "}
            directly.
          </p>
        )}
      </Section>

      <Section tone="dark" pad="sm">
        <Link href={`/projects/${next.slug}`} className="group block">
          <p className="micro text-accent-amber">Next</p>
          <p className="display text-[clamp(1.8rem,5vw,4rem)] mt-4 transition-transform duration-500 ease-architectural group-hover:translate-x-2">
            {next.title}
          </p>
        </Link>
      </Section>
    </main>
  );
}
