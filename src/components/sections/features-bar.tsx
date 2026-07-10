import { Truck, RotateCcw, Shield, CreditCard } from "lucide-react";

const features = [
  { icon: Truck, title: "شحن سريع", desc: "توصيل خلال 1-3 أيام عمل" },
  { icon: Shield, title: "ضمان رسمي", desc: "جميع المنتجات بضمان معتمد" },
  { icon: RotateCcw, title: "استرجاع سهل", desc: "استرجاع خلال 7 أيام" },
  { icon: CreditCard, title: "دفع آمن", desc: "طرق دفع متعددة وآمنة" },
];

export function FeaturesBar() {
  return (
    <section className="bg-surface border-b border-base">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-subtle flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-main">{f.title}</h3>
                <p className="text-xs text-muted mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
