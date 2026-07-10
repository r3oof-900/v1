import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold gold-text-gradient mb-4">404</h1>
        <h2 className="text-xl font-bold text-main mb-2">الصفحة غير موجودة</h2>
        <p className="text-muted text-sm mb-8 max-w-sm mx-auto">
          عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl gold-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            العودة للرئيسية
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 rounded-xl bg-surface-2 text-main font-semibold text-sm hover:bg-surface border border-base transition-colors"
          >
            تصفح المنتجات
          </Link>
        </div>
      </div>
    </div>
  );
}
