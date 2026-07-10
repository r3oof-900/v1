"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist";
import { getProductById } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlistStore();
  const products = items.map((id) => getProductById(id)).filter(Boolean);

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10 text-red-400" />
        </div>
        <h1 className="text-2xl font-bold text-main mb-2">المفضلة فارغة</h1>
        <p className="text-muted text-sm mb-8">أضف المنتجات التي تعجبك لتجدها بسهولة لاحقًا</p>
        <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-white font-semibold text-sm">تصفح المنتجات</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-main">المفضلة</h1>
          <p className="text-sm text-muted mt-1">{products.length} منتج</p>
        </div>
        <button onClick={clearWishlist} className="text-sm text-red-500 hover:underline">مسح الكل</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        {products.map((p) => p && <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
