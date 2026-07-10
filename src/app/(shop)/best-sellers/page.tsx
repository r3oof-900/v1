import type { Metadata } from "next";
import { getBestSellers } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export const metadata: Metadata = { title: "الأكثر مبيعًا", description: "المنتجات الأكثر مبيعًا في متجر أرجوان للإلكترونيات" };

export default function BestSellersPage() {
  const products = getBestSellers();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">الأكثر مبيعًا</h1>
      <p className="text-sm text-muted mb-8">المنتجات المفضلة لدى عملائنا — {products.length} منتج</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
