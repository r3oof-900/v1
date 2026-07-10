import type { Metadata } from "next";
import { getAllProducts } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export const metadata: Metadata = {
  title: "جميع المنتجات",
  description: "تصفح جميع المنتجات الإلكترونية في متجر أرجوان — هواتف، ساعات، سماعات، شواحن، وأكثر.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-main">جميع المنتجات</h1>
        <p className="text-sm text-muted mt-1">{products.length} منتج متاح</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
