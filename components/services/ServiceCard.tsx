import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { Button } from "@/components/ui/Button";

export interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article className="border border-border-structural bg-canvas-card flex flex-col justify-between group transition-all duration-300 hover:border-ink-primary hover:shadow-sm">
      <div>
        {/* Visual Header */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-dark border-b border-border-structural">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-canvas-bg/95 border border-border-structural px-3 py-1 text-[11px] font-mono uppercase tracking-architectural text-ink-primary">
            {service.eyebrow}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze block mb-2">
            Discipline • {service.category}
          </span>
          <h3 className="font-serif text-2xl text-ink-primary font-medium mb-3 group-hover:text-accent-bronze transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed mb-6">
            {service.shortDescription}
          </p>

          <div className="border-t border-border-subtle pt-4 mb-6">
            <span className="text-[11px] font-mono uppercase tracking-architectural text-ink-muted block mb-3">
              Key Capabilities
            </span>
            <ul className="space-y-2 text-xs font-mono text-ink-secondary">
              {service.capabilities.slice(0, 3).map((capability) => (
                <li key={capability} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-accent-bronze mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="line-clamp-1">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-7 border-t border-border-structural bg-canvas-subtle/40 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-architectural text-ink-primary font-medium hover:text-accent-bronze transition-colors"
        >
          <span>View Detailed Specs</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        <Button href="/quote" variant="ghost" size="sm">
          Quote
        </Button>
      </div>
    </article>
  );
}
