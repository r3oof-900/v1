import type { Metadata } from "next";

export const metadata: Metadata = { title: "الأسئلة الشائعة", description: "إجابات لأكثر الأسئلة شيوعًا حول متجر أرجوان" };

const faqs = [
  { q: "هل جميع المنتجات أصلية؟", a: "نعم، جميع منتجاتنا أصلية 100% ومستوردة من الموزعين المعتمدين مع ضمان الوكيل الرسمي." },
  { q: "ما هي طرق الدفع المتاحة؟", a: "نقبل الدفع عبر مدى، فيزا، ماستركارد، Apple Pay، STC Pay، والدفع عند الاستلام (في مناطق محددة)." },
  { q: "كم تستغرق عملية الشحن؟", a: "يتم التوصيل خلال 1-2 يوم عمل للرياض، 2-3 أيام للمدن الرئيسية، و3-5 أيام لبقية المناطق." },
  { q: "هل يوجد شحن مجاني؟", a: "نعم، الشحن مجاني لجميع الطلبات التي تتجاوز 200 ريال سعودي." },
  { q: "ما هي سياسة الاسترجاع؟", a: "يمكنك استرجاع المنتج خلال 7 أيام من تاريخ الاستلام بشرط أن يكون في حالته الأصلية مع جميع الملحقات." },
  { q: "كيف يمكنني تتبع طلبي؟", a: "بعد شحن طلبك، ستتلقى رقم تتبع عبر رسالة نصية وبريد إلكتروني يمكنك استخدامه لمتابعة حالة الشحنة." },
  { q: "هل يمكنني تغيير أو إلغاء طلبي؟", a: "يمكنك تعديل أو إلغاء طلبك قبل شحنه عن طريق التواصل مع خدمة العملاء عبر الواتساب." },
  { q: "هل تقدمون خدمة التقسيط؟", a: "نعم، نقدم خدمة التقسيط عبر تابي وتمارا بدون فوائد على المشتريات المؤهلة." },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 lg:py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-main mb-3">الأسئلة الشائعة</h1>
        <p className="text-muted">إجابات سريعة لأكثر الأسئلة شيوعًا</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-surface rounded-2xl border border-base overflow-hidden group">
            <summary className="p-5 cursor-pointer text-sm font-semibold text-main flex items-center justify-between hover:bg-surface-2 transition-colors list-none">
              {faq.q}
              <span className="text-gold text-lg group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-5 pb-5">
              <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
