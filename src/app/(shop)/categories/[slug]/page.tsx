import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "قسم غير موجود" };
  return { title: category.nameAr, description: `تسوق ${category.nameAr} من متجر أرجوان للإلكترونيات` };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const products = getProductsByCategory(category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <nav className="flex items-center gap-2 text-sm text-muted mb-6">
        <Link href="/" className="hover:text-gold-dark">الرئيسية</Link>
        <ChevronLeft className="w-3 h-3" />
        <Link href="/categories" className="hover:text-gold-dark">الأقسام</Link>
        <ChevronLeft className="w-3 h-3" />
        <span className="text-main font-medium">{category.nameAr}</span>
      </nav>
      <h1 className="text-2xl lg:text-3xl font-bold text-main mb-2">{category.nameAr}</h1>
      <p className="text-sm text-muted mb-8">{products.length} منتج</p>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted text-sm">لا توجد منتجات في هذا القسم حاليًا.</p>
          <Link href="/products" className="text-sm text-gold-dark hover:underline mt-2 inline-block">تصفح جميع المنتجات</Link>
        </div>
      )}
    </div>
  );
}
