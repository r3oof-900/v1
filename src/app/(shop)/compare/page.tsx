"use client";

import Link from "next/link";
import Image from "next/image";
import { GitCompareArrows, X } from "lucide-react";
import { useCompareStore } from "@/store/compare";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function ComparePage() {
  const { items, removeItem, clearCompare } = useCompareStore();
  const products = items.map((id) => getProductById(id)).filter(Boolean);

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gold-subtle flex items-center justify-center mx-auto mb-6">
          <GitCompareArrows className="w-10 h-10 text-gold" />
        </div>
        <h1 className="text-2xl font-bold text-main mb-2">لا توجد منتجات للمقارنة</h1>
        <p className="text-muted text-sm mb-8">أضف منتجات من صفحات المنتجات للمقارنة بينها</p>
        <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-white font-semibold text-sm">تصفح المنتجات</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-main">مقارنة المنتجات</h1>
        <button onClick={clearCompare} className="text-sm text-red-500 hover:underline">مسح الكل</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-right text-sm font-medium text-muted border-b border-base w-32">المنتج</th>
              {products.map((p) => p && (
                <th key={p.id} className="p-3 border-b border-base relative">
                  <button onClick={() => removeItem(p.id)} className="absolute top-1 left-1 p-1 rounded-full hover:bg-red-50 text-muted hover:text-red-500"><X className="w-3.5 h-3.5" /></button>
                  <div className="w-24 h-24 mx-auto bg-surface-2 rounded-xl relative mb-2">
                    <Image src={p.thumbnail} alt={p.nameAr} fill className="object-contain p-3" unoptimized />
                  </div>
                  <Link href={`/products/${p.slug}`} className="text-sm font-semibold text-main hover:text-gold-dark">{p.nameAr}</Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "العلامة", getValue: (p: NonNullable<typeof products[0]>) => p.brand },
              { label: "السعر", getValue: (p: NonNullable<typeof products[0]>) => formatPrice(p.price) },
              { label: "التقييم", getValue: (p: NonNullable<typeof products[0]>) => `${p.rating} ⭐ (${p.reviewCount})` },
              { label: "المعالج", getValue: (p: NonNullable<typeof products[0]>) => p.processor || "—" },
              { label: "الذاكرة", getValue: (p: NonNullable<typeof products[0]>) => p.ram || "—" },
              { label: "التخزين", getValue: (p: NonNullable<typeof products[0]>) => p.storage || "—" },
              { label: "الشاشة", getValue: (p: NonNullable<typeof products[0]>) => p.display || "—" },
              { label: "البطارية", getValue: (p: NonNullable<typeof products[0]>) => p.battery || "—" },
              { label: "الكاميرا", getValue: (p: NonNullable<typeof products[0]>) => p.camera || "—" },
              { label: "الوزن", getValue: (p: NonNullable<typeof products[0]>) => p.weight || "—" },
              { label: "الضمان", getValue: (p: NonNullable<typeof products[0]>) => p.warranty || "—" },
            ].map((row) => (
              <tr key={row.label}>
                <td className="p-3 text-sm font-medium text-muted border-b border-base">{row.label}</td>
                {products.map((p) => p && (
                  <td key={p.id} className="p-3 text-sm text-main text-center border-b border-base">{row.getValue(p)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
