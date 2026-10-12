import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names with Tailwind class collision resolution.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats display strings with proper typographic apostrophes for brand fidelity.
 */
export function formatBrandDisplay(text: string): string {
  return text.replace(/iron's irony/g, "iron’s irony");
}

/**
 * Formats monetary or quotation figures safely without inventing arbitrary prices.
 */
export function formatQuotationDisplay(price: string | number | undefined): string {
  if (!price) return "Quotation upon specification";
  if (typeof price === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  }
  return price;
}

/**
 * Generates URL-safe slugs for service categories and catalog specifications.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}