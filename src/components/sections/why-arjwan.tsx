import { Star, Truck, Shield } from "lucide-react";

export function WhyArjwan() {
  const items = [
    {
      icon: Star,
      title: "منتجات أصلية 100%",
      desc: "نتعامل مباشرة مع الموزعين المعتمدين لضمان أصالة كل منتج تشتريه منا.",
    },
    {
      icon: Truck,
      title: "توصيل سريع لكل المناطق",
      desc: "نوفر خدمة شحن سريعة وموثوقة لجميع مدن ومناطق المملكة العربية السعودية.",
    },
    {
      icon: Shield,
      title: "دعم فني متواصل",
      desc: "فريق دعم متخصص جاهز لمساعدتك قبل وبعد الشراء عبر واتساب والهاتف.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-main">لماذا أرجوان؟</h2>
          <p className="text-sm text-muted mt-2 max-w-md mx-auto">
            نسعى لتقديم تجربة تسوق استثنائية تجمع بين الجودة والأمان وسرعة التوصيل
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-surface rounded-2xl p-6 text-center border border-base hover:border-gold/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-subtle flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-gold-dark" />
              </div>
              <h3 className="font-bold text-base text-main mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
