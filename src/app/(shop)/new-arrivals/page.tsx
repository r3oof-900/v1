import type { Metadata } from "next";
import { getNewArrivals } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export const metadata: Metadata = { title: "وصل حديثًا", description: "أحدث المنتجات الإلكترونية في متجر أرجوان" };

export default function NewArrivalsPage() {
  const products = getNewArrivals();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">وصل حديثًا</h1>
      <p className="text-sm text-muted mb-8">أحدث المنتجات المتاحة الآن — {products.length} منتج</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
