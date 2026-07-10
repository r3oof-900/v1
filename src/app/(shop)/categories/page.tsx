import type { Metadata } from "next";
import { categories } from "@/data/categories";
import Link from "next/link";
import { Smartphone, Laptop, Watch, Headphones, Gamepad2, Camera, Wifi, BatteryCharging, Tablet, Cable, Battery, Home, Tv, Car } from "lucide-react";

export const metadata: Metadata = { title: "الأقسام", description: "تصفح جميع أقسام المنتجات الإلكترونية في متجر أرجوان" };

const iconMap: Record<string, React.ElementType> = { Smartphone, Laptop, Watch, Headphones, Gamepad2, Camera, Wifi, BatteryCharging, Tablet, Cable, Battery, Home, Tv, Car };

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">جميع الأقسام</h1>
      <p className="text-sm text-muted mb-8">تصفح منتجاتنا حسب القسم</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Smartphone;
          return (
            <Link key={cat.id} href={`/categories/${cat.slug}`} className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface border border-base hover:border-gold/40 hover:shadow-md transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold-subtle flex items-center justify-center group-hover:bg-gold transition-colors">
                <Icon className="w-8 h-8 text-gold-dark group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-main">{cat.nameAr}</h3>
                <p className="text-xs text-muted mt-0.5">{cat.productCount} منتج</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
