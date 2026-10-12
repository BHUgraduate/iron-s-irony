"use client";

import * as React from "react";
import { ProductItem, ProductAvailability, CATEGORY_LABELS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";

export interface ProductCatalogProps {
  products: ProductItem[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [selectedAvailability, setSelectedAvailability] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "gates", label: "Gates" },
    { value: "railings", label: "Railings & Balustrades" },
    { value: "grills", label: "Window Grills" },
    { value: "architectural", label: "Architectural & Doors" },
    { value: "hardware", label: "Hardware & Brackets" },
  ];

  const availabilities = [
    { value: "all", label: "All Fulfillment Types" },
    { value: "made_to_order", label: "Made to Order" },
    { value: "custom_dimensions_only", label: "Custom Dimensions Only" },
    { value: "ready_to_ship", label: "Ready to Ship" },
  ];

  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Availability filter
      if (selectedAvailability !== "all" && product.availability !== selectedAvailability) {
        return false;
      }

      // Text search filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.shortDescription.toLowerCase().includes(query);
        const matchMaterial = product.specifications.material.toLowerCase().includes(query);

        if (!matchName && !matchDesc && !matchMaterial) {
          return false;
        }
      }

      return true;
    });
  }, [products, selectedCategory, selectedAvailability, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== "all" || selectedAvailability !== "all" || searchQuery !== "";

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedAvailability("all");
    setSearchQuery("");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Toolbar */}
      <div className="border border-border-structural bg-canvas-card p-4 sm:p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Keyword Search */}
          <div className="md:col-span-5 relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-muted">
              <Search className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by steel model, keyword, or material..."
              className="w-full pl-10 pr-4 py-2.5 bg-canvas-subtle border border-border-structural text-xs font-mono text-ink-primary placeholder:text-ink-muted rounded-none focus:outline-none focus:border-ink-primary focus:ring-1 focus:ring-ink-primary"
            />
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by Product Category"
              className="w-full py-2.5 px-3 bg-canvas-subtle border border-border-structural text-xs font-mono text-ink-primary rounded-none focus:outline-none focus:border-ink-primary focus:ring-1 focus:ring-ink-primary cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              aria-label="Filter by Availability"
              className="w-full py-2.5 px-3 bg-canvas-subtle border border-border-structural text-xs font-mono text-ink-primary rounded-none focus:outline-none focus:border-ink-primary focus:ring-1 focus:ring-ink-primary cursor-pointer"
            >
              {availabilities.map((avail) => (
                <option key={avail.value} value={avail.value}>
                  {avail.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Badges & Count */}
        <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="text-ink-secondary">
            Showing <span className="font-medium text-ink-primary">{filteredProducts.length}</span>{" "}
            {filteredProducts.length === 1 ? "catalog item" : "catalog items"}
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-accent-bronze hover:text-accent-bronze-hover transition-colors uppercase tracking-architectural text-[11px]"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Catalog Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="border border-border-structural bg-canvas-card p-12 text-center space-y-4">
          <div className="w-12 h-12 border border-border-structural bg-canvas-subtle flex items-center justify-center text-accent-bronze mx-auto">
            <SlidersHorizontal className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-serif text-2xl text-ink-primary font-medium">
            No Catalog Models Match Your Criteria
          </h3>
          <p className="text-xs sm:text-sm text-ink-secondary max-w-md mx-auto leading-relaxed">
            Our atelier fabricates custom work beyond standard catalog frameworks. If you require unique dimensions, contact our fabricators with your drawings.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-ink-primary text-canvas-bg font-mono text-xs uppercase tracking-architectural hover:bg-accent-bronze transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
