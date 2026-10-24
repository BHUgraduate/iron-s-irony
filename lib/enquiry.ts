export interface BriefFields {
  projectType?: string;
  space?: string;
  need?: string;
  description?: string;
  dimensions?: string;
  location?: string;
  style?: string;
  materialPreference?: string;
  referenceLinks?: string;
  catalogueDesign?: string;
  fullName?: string;
}

/**
 * Builds a short structured WhatsApp message from what the visitor actually provided.
 * Empty fields are omitted. Phone and email are never included: they are messaging from their own number.
 */
export function buildWhatsAppMessage(f: BriefFields): string {
  const rows: [string, string | undefined][] = [
    ["Catalogue design", f.catalogueDesign],
    ["Project", f.projectType],
    ["Space", f.space],
    ["Need", f.need],
    ["Requirements", f.description],
    ["Size", f.dimensions],
    ["Location", f.location],
    ["Style", f.style],
    ["Material or finish", f.materialPreference],
    ["References", f.referenceLinks],
  ];
  const body = rows
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v!.trim()}`)
    .join("\n");
  const intro = f.fullName?.trim()
    ? `Hello, I am ${f.fullName.trim()} and I would like to discuss an ironwork project.`
    : "Hello, I would like to discuss an ironwork project.";
  return body ? `${intro}\n\n${body}\n\nI will send photos of the space.` : intro;
}
