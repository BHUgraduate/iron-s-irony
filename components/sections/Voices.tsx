import * as React from "react";
import Link from "next/link";
import { FEEDBACK, roleLabel, type FeedbackEntry } from "@/data/feedback";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Display, Eyebrow } from "@/components/ui/Type";
import { Section } from "@/components/ui/Section";
import { IronDrawing } from "@/components/ui/IronDrawing";
import { cn } from "@/lib/utils";

/** Newest first, whatever order the file was edited in. */
const sorted = (entries: FeedbackEntry[]) => [...entries].sort((a, b) => b.date.localeCompare(a.date));

const monthYear = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { month: "long", year: "numeric", timeZone: "UTC" });

/** The spear tops of a gate, repeated: the quiet signature of every plaque. Decorative only. */
function Spears({ count = 9, className }: { count?: number; className?: string }) {
  return (
    <svg viewBox={`0 0 ${count * 20} 18`} aria-hidden="true" className={cn("w-full h-4 text-accent-ink", className)} fill="none" stroke="currentColor" strokeWidth="1.2" preserveAspectRatio="xMinYMid meet">
      <path d={`M0 17H${count * 20}`} opacity=".55" />
      {Array.from({ length: count }, (_, i) => (
        <path key={i} d={`M${i * 20 + 6} 17V8M${i * 20 + 2} 8L${i * 20 + 6} 1L${i * 20 + 10} 8`} />
      ))}
    </svg>
  );
}

function Attribution({ e }: { e: FeedbackEntry }) {
  const meta = [roleLabel(e.role), e.projectType, e.place].filter(Boolean).join(" · ");
  return (
    <figcaption className="mt-7 pt-5 border-t border-iron-950/15">
      <p className="display text-lg">{e.name}</p>
      <p className="micro text-ink-muted mt-1">{meta}</p>
      <p className="micro text-ink-muted mt-1">
        <time dateTime={e.date}>{monthYear(e.date)}</time>
      </p>
    </figcaption>
  );
}

/** The newest voice, set large like a name on a gate plate. */
function Featured({ e }: { e: FeedbackEntry }) {
  return (
    <Reveal>
      <figure className="relative border border-iron-950/20 bg-canvas-bg px-6 sm:px-12 pt-10 pb-10 sm:pb-12">
        <Spears count={14} className="mb-8" />
        <span aria-hidden="true" className="absolute right-5 sm:right-10 top-14 sm:top-6 font-serif text-[4.5rem] sm:text-[10rem] leading-none text-accent-amber/25 select-none">
          ”
        </span>
        <blockquote className="relative font-serif italic text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.25] max-w-[34ch]">
          “{e.quote}”
        </blockquote>
        <Attribution e={e} />
      </figure>
    </Reveal>
  );
}

function Card({ e, i }: { e: FeedbackEntry; i: number }) {
  return (
    <Reveal as="li" delay={Math.min(i, 4) * 0.06} className="break-inside-avoid mb-6 list-none">
      <figure className="group border border-iron-950/20 bg-canvas-bg px-6 pt-6 pb-7 transition-[border-color,transform] duration-500 hover:border-accent-ink motion-safe:hover:-translate-y-1">
        <Spears count={7} className="mb-5 opacity-80 group-hover:opacity-100 transition-opacity" />
        <blockquote className="font-serif italic text-[1.35rem] leading-snug">“{e.quote}”</blockquote>
        <Attribution e={e} />
      </figure>
    </Reveal>
  );
}

/** Shown while there is no published feedback. It says so plainly and never shows invented words. */
function EmptyWall() {
  return (
    <Reveal>
      <div className="relative border border-dashed border-iron-950/35 px-6 py-14 sm:py-20 text-center overflow-hidden">
        <IronDrawing kind="frame" animate={false} className="absolute inset-0 m-auto h-[85%] w-auto text-iron-950/10" />
        <p className="relative font-serif italic text-[clamp(1.5rem,3vw,2.2rem)] max-w-[28ch] mx-auto leading-snug">
          This wall is waiting for its first words.
        </p>
        <p className="relative mt-5 text-ink-secondary max-w-md mx-auto leading-relaxed">
          We have not published any customer feedback yet, and we will not write it ourselves. If you have worked with us,
          tell us how it went.
        </p>
      </div>
    </Reveal>
  );
}

/** Everything people who worked with us have allowed us to share. */
export function VoicesWall({ entries = FEEDBACK, className }: { entries?: FeedbackEntry[]; className?: string }) {
  const list = sorted(entries);
  if (list.length === 0) return <EmptyWall />;
  const [first, ...rest] = list;
  return (
    <div className={className}>
      <Featured e={first} />
      {rest.length > 0 && <ul aria-label="More feedback" className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-6 p-0">{rest.map((e, i) => <Card key={e.id} e={e} i={i} />)}</ul>}
    </div>
  );
}

/** Home page teaser. Renders nothing until there is real feedback to show. */
export function VoicesTeaser({ entries = FEEDBACK }: { entries?: FeedbackEntry[] }) {
  const list = sorted(entries);
  if (list.length === 0) return null;
  return (
    <Section tone="concrete" pad="md" labelledBy="voices-title">
      <Eyebrow className="mb-6">In their words</Eyebrow>
      <h2 id="voices-title" className="sr-only">
        What customers say
      </h2>
      <Display size="sm" lines={["Heard from", "the people we built for."]} />
      <div className="mt-12">
        <Featured e={list[0]} />
      </div>
      <p className="mt-10">
        <Link href="/feedback" className="micro link-reveal py-2 inline-block">
          {list.length > 1 ? `Read all ${list.length} voices` : "Read more, or share your own"}
        </Link>
      </p>
    </Section>
  );
}

export function FeedbackInvite() {
  return (
    <MagneticButton href="/feedback" variant="light">
      Share your feedback
    </MagneticButton>
  );
}
