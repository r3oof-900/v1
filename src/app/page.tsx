import { getFeaturedProducts, getBestSellers, getNewArrivals, getDeals } from "@/data/products";
import { categories } from "@/data/categories";
import { getFeaturedBrands } from "@/data/brands";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesBar } from "@/components/sections/features-bar";
import { CategoriesSection } from "@/components/sections/categories-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { ProductsGrid } from "@/components/sections/products-grid";
import { WhyArjwan } from "@/components/sections/why-arjwan";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();
  const deals = getDeals();
  const featuredBrands = getFeaturedBrands();

  return (
    <>
      <HeroSection />
      <FeaturesBar />

      <CategoriesSection categories={categories} />

      <BrandsSection brands={featuredBrands} />

      {deals.length > 0 && (
        <ProductsGrid
          title="عروض اليوم"
          subtitle="وفّر أكثر مع خصومات حصرية على أفضل المنتجات"
          products={deals}
          viewAllHref="/offers"
          viewAllLabel="جميع العروض"
        />
      )}

      {bestSellers.length > 0 && (
        <ProductsGrid
          title="الأكثر مبيعًا"
          subtitle="المنتجات المفضلة لدى عملائنا"
          products={bestSellers}
          viewAllHref="/best-sellers"
          viewAllLabel="عرض الكل"
          bgClass="bg-surface-2"
        />
      )}

      {newArrivals.length > 0 && (
        <ProductsGrid
          title="وصل حديثًا"
          subtitle="أحدث المنتجات الإلكترونية المتاحة الآن"
          products={newArrivals}
          viewAllHref="/new-arrivals"
          viewAllLabel="عرض الكل"
        />
      )}

      {featured.length > 0 && (
        <ProductsGrid
          title="منتجات مختارة"
          subtitle="منتقاة بعناية لتناسب احتياجاتك"
          products={featured}
          viewAllHref="/products"
          viewAllLabel="جميع المنتجات"
          bgClass="bg-surface-2"
        />
      )}

      <WhyArjwan />
      <NewsletterSection />
    </>
  );
}
