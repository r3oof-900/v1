import Link from "next/link";
import {
  Smartphone, Laptop, Watch, Headphones, Gamepad2, Camera, Wifi,
  BatteryCharging, Tablet, Cable, Battery, Home, Tv, Car,
} from "lucide-react";
import type { Category } from "@/types";
import { SectionHeader } from "@/components/shared/section-header";

const iconMap: Record<string, React.ElementType> = {
  Smartphone, Laptop, Watch, Headphones, Gamepad2, Camera, Wifi,
  BatteryCharging, Tablet, Cable, Battery, Home, Tv, Car,
};

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  const displayCategories = categories.filter((c) => (c.productCount || 0) > 0).slice(0, 8);

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="تسوّق حسب القسم"
          subtitle="اختر القسم المناسب واستمتع بأفضل المنتجات"
          viewAllHref="/categories"
          viewAllLabel="جميع الأقسام"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {displayCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Smartphone;
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-surface border border-base hover:border-gold/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-subtle flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Icon className="w-6 h-6 text-gold-dark group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-main">{cat.nameAr}</h3>
                  <p className="text-xs text-muted">{cat.productCount} منتج</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
