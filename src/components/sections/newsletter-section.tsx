"use client";

export function NewsletterSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-foreground rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-gold/10 blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-gold-dark/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">اشترك في نشرتنا البريدية</h2>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              كن أول من يعرف عن العروض الحصرية والمنتجات الجديدة
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm placeholder:text-gray-500 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl gold-gradient font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
