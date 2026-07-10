import Link from "next/link";
import type { Brand } from "@/types";
import { SectionHeader } from "@/components/shared/section-header";

interface BrandsSectionProps {
  brands: Brand[];
}

export function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="أشهر العلامات التجارية" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 lg:gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-surface border border-base hover:border-gold/40 hover:shadow-md transition-all aspect-square"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-2 flex items-center justify-center">
                <span className="text-lg font-bold text-main">{brand.name.charAt(0)}</span>
              </div>
              <span className="text-xs font-medium text-muted text-center">{brand.nameAr}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
