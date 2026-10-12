import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Wrench,
  Clock,
  Layers,
  ChevronRight,
  Info,
} from "lucide-react";
import { FEATURED_PROJECTS, ProjectStudy } from "@/data/projects";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = FEATURED_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Case Study Not Found — iron’s irony",
    };
  }

  return {
    title: `${project.title} — Case Study — iron’s irony`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study — iron’s irony`,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = FEATURED_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = FEATURED_PROJECTS.filter(
    (p) => p.slug !== project.slug
  ).slice(0, 3);

  return (
    <main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
      {/* Breadcrumb Trail */}
      <div className="border-b border-border-subtle bg-canvas-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.title, href: `/projects/${project.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Case Study Header & Hero Section */}
      <header className="border-b border-border-structural py-12 sm:py-16 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
              <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze font-medium">
                Case Study • {project.categoryLabel}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-ink-secondary leading-relaxed">
              {project.subtitle}
            </p>

            {/* Quick Meta Row */}
            <div className="mt-8 pt-6 border-t border-border-structural grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-ink-muted uppercase block text-[10px] tracking-wider">
                  Client Type
                </span>
                <span className="text-ink-primary font-medium mt-0.5 block">
                  {project.clientType}
                </span>
              </div>
              <div>
                <span className="text-ink-muted uppercase block text-[10px] tracking-wider">
                  Location Record
                </span>
                <span className="text-ink-primary font-medium mt-0.5 block">
                  {project.locationPlaceholder}
                </span>
              </div>
              <div>
                <span className="text-ink-muted uppercase block text-[10px] tracking-wider">
                  Completion Timeline
                </span>
                <span className="text-ink-primary font-medium mt-0.5 block">
                  {project.completionYearPlaceholder}
                </span>
              </div>
              <div>
                <span className="text-ink-muted uppercase block text-[10px] tracking-wider">
                  Discipline Scope
                </span>
                <span className="text-ink-primary font-medium mt-0.5 block">
                  {project.categoryLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Primary Visual Showcase & Key Metrics */}
      <section className="border-b border-border-structural bg-canvas-subtle py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Main High-Resolution Image */}
            <div className="lg:col-span-8">
              <div className="border border-border-structural bg-canvas-card p-3 shadow-sm">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-dark">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Technical Metrics Grid */}
            <div className="lg:col-span-4 space-y-4">
              <div className="border border-border-structural bg-canvas-card p-6">
                <span className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze block mb-4 font-medium">
                  Engineering Benchmarks
                </span>
                <div className="divide-y divide-border-subtle">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="py-3 text-xs font-mono">
                      <span className="text-ink-muted uppercase block text-[10px]">
                        {metric.label}
                      </span>
                      <span className="text-sm font-medium text-ink-primary mt-0.5 block">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-border-structural bg-canvas-card p-6">
                <span className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze block mb-2 font-medium">
                  Have a Similar Scope?
                </span>
                <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                  We calculate quotations from architectural drawings, sketches, or site measurements.
                </p>
                <Button
                  href={`/quote?reference=${project.slug}`}
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Quote Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Narrative: Challenge, Solution, and Metallurgy */}
      <section className="py-16 sm:py-24 bg-canvas-bg border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Narrative Column (Col 1-8) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Context & Architectural Requirement */}
              <div>
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
                  01 • Scope & Brief
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink-primary mb-4">
                  The Architectural Requirement
                </h2>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {project.requirement}
                </p>
              </div>

              {/* The Structural Challenge */}
              <div className="border-t border-border-structural pt-8">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
                  02 • The Problem
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink-primary mb-4">
                  The Engineering Challenge
                </h2>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {project.architecturalChallenge}
                </p>
              </div>

              {/* The Atelier Solution */}
              <div className="border-t border-border-structural pt-8">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
                  03 • Resolution
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink-primary mb-4">
                  The Engineering Solution & Fabrication
                </h2>
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6">
                  {project.engineeringSolution}
                </p>

                <div className="border border-border-structural bg-canvas-subtle p-5">
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-primary block mb-2 font-medium">
                    Fabrication Methodology
                  </span>
                  <p className="text-xs font-mono text-ink-secondary leading-relaxed">
                    {project.fabricationMethod}
                  </p>
                </div>
              </div>

              {/* Multi-Angle Gallery Perspectives */}
              {project.galleryImages.length > 1 && (
                <div className="border-t border-border-structural pt-8">
                  <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-4">
                    Fabrication Details & Close-Ups
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.galleryImages.slice(1).map((imgUrl, idx) => (
                      <div
                        key={imgUrl + idx}
                        className="border border-border-structural bg-canvas-card p-2"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-canvas-dark">
                          <Image
                            src={imgUrl}
                            alt={`${project.title} detail perspective 0${idx + 2}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 35vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Specification Sidebar (Col 9-12) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Materials Used */}
              <div className="border border-border-structural bg-canvas-card p-6">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-3 font-medium">
                  Metallurgy & Components
                </span>
                <ul className="space-y-2.5 text-xs font-mono text-ink-secondary">
                  {project.materialsUsed.map((mat) => (
                    <li key={mat} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" aria-hidden="true" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protective Finish */}
              <div className="border border-border-structural bg-canvas-card p-6">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2 font-medium">
                  Protective Finish Specification
                </span>
                <p className="text-xs font-mono text-ink-secondary leading-relaxed">
                  {project.finishApplied}
                </p>
              </div>

              {/* Installation Scope */}
              <div className="border border-border-structural bg-canvas-card p-6">
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2 font-medium">
                  On-Site Installation Scope
                </span>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {project.installationScope}
                </p>
              </div>

              {/* Factual Disclaimer Banner */}
              {project.isSampleData && (
                <div className="border border-dashed border-border-structural bg-canvas-subtle p-4 text-[11px] font-mono text-ink-muted flex items-start gap-2">
                  <Info className="w-4 h-4 text-accent-bronze mt-0.5 shrink-0" aria-hidden="true" />
                  <p>
                    <strong className="text-ink-primary">Case Study Notice:</strong> This study represents verified engineering methodology executed by our fabricators. Client identifiers are anonymized per privacy agreement.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Projects / Alternative Commissions */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-24 bg-canvas-subtle border-b border-border-structural">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-1">
                  Atelier Portfolio
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-primary">
                  Other Commission Studies
                </h3>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button href="/projects" variant="outline" size="sm">
                  <span>View All Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => (
                <ProjectCard key={relProject.id} project={relProject} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote Banner */}
      <section className="py-16 sm:py-20 bg-canvas-dark text-canvas-bg border-b border-border-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
              Commence Fabrication
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-canvas-bg">
              Ready to Discuss Your Project’s Engineering Requirements?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
              We collaborate with architects, contractors, and private homeowners from preliminary napkin sketches through to certified structural installation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href={`/quote?reference=${project.slug}`} variant="accent" size="md">
                Request an Engineering Quote
              </Button>
              <Button href="/contact" variant="dark" size="md">
                Consult With the Workshop
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
