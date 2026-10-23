import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/services";
import { DESIGNS } from "@/data/catalogue";
import { WORK } from "@/data/projects";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...SERVICES_DATA.map((s) => page(`/services/${s.slug}`, 0.8)),
    page("/catalogue", 0.9, "weekly"),
    ...DESIGNS.map((d) => page(`/catalogue/${d.slug}`, 0.7)),
    page("/projects", 0.8),
    ...WORK.map((w) => page(`/projects/${w.slug}`, 0.6)),
    page("/process", 0.7),
    page("/about", 0.7),
    page("/customers", 0.5),
    page("/faq", 0.5),
    page("/feedback", 0.5),
    page("/contact", 0.9),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
