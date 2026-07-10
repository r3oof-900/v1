import type { Metadata } from "next";
import { company } from "@/config/company";
import { Shield, Users, Truck, Award, Heart, Headphones } from "lucide-react";

export const metadata: Metadata = { title: "من نحن", description: "تعرف على مؤسسة أرجوان أحمد الشريف للإلكترونيات" };

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-main mb-3">من نحن</h1>
        <p className="text-muted max-w-2xl mx-auto">تعرف على قصة {company.brand.ar} ورؤيتنا في تقديم أفضل تجربة تسوق إلكترونية في المملكة</p>
      </div>

      <div className="prose prose-sm max-w-none space-y-6">
        <div className="bg-surface rounded-2xl p-8 border border-base">
          <h2 className="text-xl font-bold text-main mb-4">قصتنا</h2>
          <p className="text-muted leading-relaxed">تأسست {company.name.ar} لتكون وجهة رائدة في مجال الإلكترونيات والأجهزة الذكية في المملكة العربية السعودية. نحن نؤمن بأن التقنية يجب أن تكون في متناول الجميع بأفضل الأسعار وأعلى جودة خدمة.</p>
          <p className="text-muted leading-relaxed mt-3">نعمل مع أكبر العلامات التجارية العالمية لتوفير منتجات أصلية 100% بضمان رسمي، مع التزامنا بتقديم تجربة تسوق سلسة واحترافية.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: "منتجات أصلية", desc: "جميع منتجاتنا أصلية 100% ومن موزعين معتمدين" },
            { icon: Truck, title: "شحن سريع", desc: "توصيل لجميع مناطق المملكة خلال 1-5 أيام عمل" },
            { icon: Award, title: "ضمان رسمي", desc: "ضمان الوكيل الرسمي على جميع المنتجات" },
            { icon: Heart, title: "رضا العملاء", desc: "نسعى دائمًا لتحقيق أعلى مستويات رضا العملاء" },
            { icon: Headphones, title: "دعم متواصل", desc: "فريق دعم متخصص جاهز لمساعدتك في أي وقت" },
            { icon: Users, title: "مجتمع متنامي", desc: "آلاف العملاء يثقون بنا لتلبية احتياجاتهم التقنية" },
          ].map((item, i) => (
            <div key={i} className="bg-surface rounded-2xl p-6 border border-base text-center">
              <div className="w-12 h-12 rounded-xl bg-gold-subtle flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="font-semibold text-sm text-main mb-1">{item.title}</h3>
              <p className="text-xs text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
