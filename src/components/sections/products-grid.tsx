"use client";

import type { Product } from "@/types";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

interface ProductsGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
  viewAllLabel?: string;
  bgClass?: string;
}

export function ProductsGrid({
  title,
  subtitle,
  products,
  viewAllHref,
  viewAllLabel,
  bgClass,
}: ProductsGridProps) {
  return (
    <section className={cn("py-12 lg:py-16", bgClass)}>
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          viewAllHref={viewAllHref}
          viewAllLabel={viewAllLabel}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
