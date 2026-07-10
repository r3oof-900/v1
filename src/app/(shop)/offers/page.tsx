import type { Metadata } from "next";
import { getDeals } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export const metadata: Metadata = { title: "العروض", description: "أفضل العروض والخصومات على المنتجات الإلكترونية من متجر أرجوان" };

export default function OffersPage() {
  const deals = getDeals();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">العروض والخصومات</h1>
      <p className="text-sm text-muted mb-8">وفّر أكثر مع خصومات حصرية — {deals.length} عرض متاح</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        {deals.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
