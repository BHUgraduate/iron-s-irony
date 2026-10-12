import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Clock, FileText, ChevronDown } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceSpecTable } from "@/components/services/ServiceSpecTable";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found — iron’s irony",
    };
  }
  
  return {
    title: `${service.title} — iron’s irony`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} — iron’s irony`,
      description: service.shortDescription,
      images: [{ url: service.imageUrl }],
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = SERVICES_DATA.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }
  
  // Related sibling services for cross-navigation
  const siblingServices = SERVICES_DATA.filter((s) => s.slug !== service.slug);
  
  return (
    <main id="main-content" className="flex-1 flex flex-col bg-canvas-bg">
      {/* Breadcrumb Trail */}
      <div className="border-b border-border-subtle bg-canvas-subtle/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />
        </div>
      </div>
      
      {/* Hero Header Section */}
      <header className="border-b border-border-structural py-12 sm:py-16 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-accent-bronze inline-block" aria-hidden="true" />
                <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze font-medium">
                  {service.eyebrow}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-ink-primary leading-tight">
                {service.title}
              </h1>
              
              <p className="mt-5 text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/quote" variant="primary" size="md">
                  Request a Quotation for this Service
                </Button>
                <Button href="#specifications" variant="outline" size="md">
                  View Technical Specs
                </Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border-structural flex items-center gap-3 text-xs font-mono text-ink-muted">
                <Clock className="w-4 h-4 text-accent-bronze shrink-0" aria-hidden="true" />
                <span>{service.leadTimeIndicator}</span>
              </div>
            </div>
            
            {/* Feature Imagery */}
            <div className="lg:col-span-5">
              <div className="border border-border-structural bg-canvas-card p-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-canvas-dark">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Scope of Capabilities Section */}
      <section className="py-16 sm:py-20 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Detailed Scope"
            title="What This Service Includes"
            description="Our fabrication capability covers structural, mechanical, and architectural assembly from blueprints to final anchoring."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={cap}
                className="border border-border-structural bg-canvas-card p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-accent-bronze font-medium block mb-2">
                    Scope Item 0{idx + 1}
                  </span>
                  <p className="text-sm font-sans text-ink-primary font-medium leading-normal">
                    {cap}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Typical Applications Section */}
      <section className="py-16 sm:py-20 bg-canvas-bg border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Site Context"
            title="Typical Applications"
            description="Common environments and spatial configurations where this ironwork discipline is deployed."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.typicalApplications.map((app) => (
              <div
                key={app.title}
                className="border border-border-structural bg-canvas-card p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl text-ink-primary font-medium mb-3">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Design Possibilities & Tolerances */}
      <section className="py-16 sm:py-20 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architectural Freedom"
            title="Design Possibilities & Constructability"
            description="Engineering custom solutions tailored to unique spatial dimensions, complex substrates, and concealed hardware."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.designPossibilities.map((pos) => (
              <div
                key={pos.title}
                className="border border-border-structural bg-canvas-card p-6 sm:p-8"
              >
                <span className="w-2 h-2 bg-accent-bronze inline-block mb-3" aria-hidden="true" />
                <h3 className="font-serif text-xl text-ink-primary font-medium mb-3">
                  {pos.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {pos.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Specifications Matrix */}
      <section id="specifications" className="py-16 sm:py-20 bg-canvas-bg border-b border-border-structural scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Engineering Rigor"
            title="Material & Finish Specifications"
            description="Clear metallurgical parameters, weld profiles, and corrosion-prevention coatings applied to this discipline."
          />
          <ServiceSpecTable
            specs={service.engineeringSpecs}
            materials={service.materials}
            finishes={service.finishes}
          />
        </div>
      </section>
      
      {/* Project Image Gallery */}
      <section className="py-16 sm:py-20 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workshop Visuals"
            title="Photography & Craftsmanship Details"
            description="Representative samples and reference photography showcasing fabrication quality and material presence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.galleryImages.map((imgUrl, i) => (
              <div
                key={imgUrl + i}
                className="relative aspect-[4/3] overflow-hidden border border-border-structural bg-canvas-dark"
              >
                <Image
                  src={imgUrl}
                  alt={`${service.title} reference visual 0${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fabrication Process Timeline */}
      <section className="py-16 sm:py-20 bg-canvas-bg border-b border-border-structural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow"
            title="How We Execute This Work"
            description="A structured step-by-step path from your initial brief to verified site installation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10">
            {service.serviceProcess.map((step) => (
              <div
                key={step.step}
                className="border border-border-structural bg-canvas-card p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl text-accent-bronze font-medium block mb-2">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-lg text-ink-primary font-medium mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service-Specific FAQ */}
      <section className="py-16 sm:py-20 bg-canvas-subtle border-b border-border-structural">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Inquiries"
            title={`Frequently Asked About ${service.title}`}
            description="Technical, maintenance, and ordering details specific to this metalwork category."
            align="center"
          />
          
          <div className="mt-10 space-y-4">
            {service.serviceFaq.map((faq) => (
              <div
                key={faq.question}
                className="border border-border-structural bg-canvas-card p-6"
              >
                <h4 className="font-serif text-lg sm:text-xl text-ink-primary font-medium mb-3">
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* High-Impact Service Quote CTA */}
      <section className="py-16 sm:py-24 bg-canvas-dark text-canvas-bg border-b border-border-iron">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-3">
              Commence Fabrication
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-canvas-bg leading-tight">
              Ready to Quote Your {service.title} Project?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-muted leading-relaxed">
              Submit your opening dimensions, architectural sketches, or CAD drawings. We review structural requirements, recommend appropriate finishes, and prepare an itemized commercial proposal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/quote" variant="accent" size="lg">
                Submit Project Details for Quote
              </Button>
              <Button href="/contact" variant="dark" size="lg">
                <span>Discuss With Fabricators</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Sibling Disciplines */}
      <section className="py-16 sm:py-20 bg-canvas-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-1">
                Explore More
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-ink-primary">
                Other Fabrication Disciplines
              </h3>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button href="/services" variant="outline" size="sm">
                <span>All Services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siblingServices.map((sibling) => (
              <div
                key={sibling.id}
                className="border border-border-structural bg-canvas-card p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-architectural text-accent-bronze block mb-1">
                    {sibling.eyebrow}
                  </span>
                  <h4 className="font-serif text-xl text-ink-primary font-medium mb-2">
                    {sibling.title}
                  </h4>
                  <p className="text-xs text-ink-secondary leading-relaxed mb-6 line-clamp-2">
                    {sibling.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/services/${sibling.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-architectural text-ink-primary hover:text-accent-bronze font-medium transition-colors"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
