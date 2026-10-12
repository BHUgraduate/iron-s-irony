/**
 * iron’s irony — Centralized Media & Photography Asset Registry
 * Developer: hycyon
 *
 * All photography, CAD blueprints, and fallback assets are declared here.
 * When real atelier workshop photography is provided, update the image URIs
 * in this single file without editing UI components.
 */

export interface MediaAsset {
  id: string;
  uri: string;
  fallbackUri: string;
  alt: string;
  width: number;
  height: number;
  category: "hero" | "services" | "products" | "projects" | "about" | "workshop";
  isSampleData: boolean;
}

export const ASSET_REGISTRY: Record<string, MediaAsset> = {
  // Hero & Brand Highlights
  HERO_PRIMARY: {
    id: "asset-hero-staircase",
    uri: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Architectural ironwork staircase balustrade featuring precision geometric steel lines",
    width: 1200,
    height: 900,
    category: "hero",
    isSampleData: true,
  },

  // Service Category Hero Shots
  SERVICE_BUILDING: {
    id: "asset-service-building",
    uri: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Heavy structural building ironwork perimeter gate installation",
    width: 1200,
    height: 800,
    category: "services",
    isSampleData: true,
  },
  SERVICE_ARCHITECTURAL: {
    id: "asset-service-architectural",
    uri: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Bespoke architectural steel staircase with knife-edge pickets",
    width: 1200,
    height: 800,
    category: "services",
    isSampleData: true,
  },
  SERVICE_DECORATIVE: {
    id: "asset-service-decorative",
    uri: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Hand-forged scrolls and traditional anvil-formed decorative ironwork",
    width: 1200,
    height: 800,
    category: "services",
    isSampleData: true,
  },
  SERVICE_CUSTOM: {
    id: "asset-service-custom",
    uri: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Precision TIG welding and custom metal fabrication in the workshop",
    width: 1200,
    height: 800,
    category: "services",
    isSampleData: true,
  },

  // Projects Showcase Imagery
  PROJECT_MONOLITHIC_STAIR: {
    id: "asset-proj-stair",
    uri: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Continuous hand-profiled steel balustrade with sub-screed mounting",
    width: 1200,
    height: 750,
    category: "projects",
    isSampleData: true,
  },
  PROJECT_COURTYARD_GATE: {
    id: "asset-proj-gate",
    uri: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Rhythmic solid square picket automated dual-leaf courtyard gate",
    width: 1200,
    height: 750,
    category: "projects",
    isSampleData: true,
  },
  PROJECT_GLAZED_SCREENS: {
    id: "asset-proj-screens",
    uri: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Ultra-narrow sightline steel French door partition suite",
    width: 1200,
    height: 750,
    category: "projects",
    isSampleData: true,
  },
  PROJECT_FORGED_BALCONY: {
    id: "asset-proj-balcony",
    uri: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Tapered anvil-drawn forged iron terrace balustrade",
    width: 1200,
    height: 750,
    category: "projects",
    isSampleData: true,
  },

  // Workshop & Atelier Atmosphere
  WORKSHOP_FABRICATION: {
    id: "asset-workshop-assembly",
    uri: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    fallbackUri: "/images/placeholder.svg",
    alt: "Steel bar cutting, argon TIG welding, and metal finishing at iron’s irony",
    width: 1200,
    height: 800,
    category: "workshop",
    isSampleData: true,
  },
};

/**
 * Safely resolves an image URI with architectural fallback fallback protection
 */
export function resolveAsset(key: keyof typeof ASSET_REGISTRY): MediaAsset {
  return (
    ASSET_REGISTRY[key] || {
      id: "fallback",
      uri: "/images/placeholder.svg",
      fallbackUri: "/images/placeholder.svg",
      alt: "iron’s irony — Architectural Ironwork Atelier",
      width: 800,
      height: 600,
      category: "workshop",
      isSampleData: true,
    }
  );
}