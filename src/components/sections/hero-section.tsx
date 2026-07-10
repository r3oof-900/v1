import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-foreground text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gold blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gold-dark blur-[150px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            عروض حصرية تصل إلى 40%
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            وجهتك الأولى
            <br />
            <span className="gold-text-gradient">للإلكترونيات</span> في المملكة
          </h1>
          <p className="text-gray-400 text-base lg:text-lg mb-8 leading-relaxed max-w-lg">
            اكتشف أحدث الهواتف الذكية، الأجهزة اللوحية، السماعات، والإكسسوارات من أشهر العلامات التجارية العالمية.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              تصفح المنتجات
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              العروض الحالية
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
