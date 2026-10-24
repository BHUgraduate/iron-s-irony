import * as React from "react";
import { Download } from "lucide-react";
import { CATALOGUE_PDF } from "@/data/catalogue";

/**
 * Secondary, offline route for architects and contractors. It appears only when the official PDF
 * has been added to data/catalogue.ts; no PDF is generated from invented content.
 */
export function CataloguePdfLink({ className }: { className?: string }) {
  if (!CATALOGUE_PDF) return null;
  return (
    <a
      href={CATALOGUE_PDF.href}
      download
      className={className ?? "inline-flex items-center gap-3 micro py-3 link-reveal"}
    >
      <Download className="w-4 h-4" aria-hidden="true" />
      Download catalogue PDF{CATALOGUE_PDF.sizeLabel ? ` (${CATALOGUE_PDF.sizeLabel})` : ""}
    </a>
  );
}
