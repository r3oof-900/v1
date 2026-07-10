import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/data/products";
import { ProductDetail } from "@/components/product/product-detail";
import { ProductCard } from "@/components/product/product-card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "منتج غير موجود" };
  return {
    title: product.nameAr,
    description: product.descriptionAr?.slice(0, 160) || product.nameAr,
    openGraph: {
      title: product.nameAr,
      description: product.descriptionAr?.slice(0, 160),
      images: [{ url: product.thumbnail }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.id, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold text-main mb-6">منتجات مشابهة</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
