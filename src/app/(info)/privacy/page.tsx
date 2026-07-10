import type { Metadata } from "next";

export const metadata: Metadata = { title: "سياسة الخصوصية", description: "سياسة الخصوصية وحماية البيانات في متجر أرجوان" };

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <h1 className="text-3xl font-bold text-main mb-8">سياسة الخصوصية</h1>
      
      <div className="prose prose-sm max-w-none text-muted space-y-6">
        <section>
          <h2 className="text-xl font-bold text-main mb-3">1. جمع المعلومات</h2>
          <p>نقوم بجمع المعلومات التي تقدمها لنا مباشرة، مثل عند إنشاء حساب، إجراء عملية شراء، أو التواصل مع خدمة العملاء. قد تشمل هذه المعلومات اسمك، عنوان بريدك الإلكتروني، رقم هاتفك، عنوان الشحن، ومعلومات الدفع.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">2. استخدام المعلومات</h2>
          <p>نستخدم المعلومات التي نجمعها لـ:</p>
          <ul className="list-disc pr-5 mt-2 space-y-1">
            <li>معالجة طلباتك وتوصيل المنتجات.</li>
            <li>التواصل معك بخصوص طلباتك واستفساراتك.</li>
            <li>إرسال العروض الترويجية والتحديثات (إذا وافقت على ذلك).</li>
            <li>تحسين تجربتك في متجرنا وتطوير خدماتنا.</li>
            <li>حماية متجرنا وعملائنا من الاحتيال والأنشطة غير المصرح بها.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">3. مشاركة المعلومات</h2>
          <p>نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع مزودي الخدمات الذين يساعدوننا في تشغيل المتجر (مثل شركات الشحن وبوابات الدفع)، ولكن فقط بالقدر اللازم لتقديم هذه الخدمات.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">4. أمن البيانات</h2>
          <p>نتخذ إجراءات أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به، أو التغيير، أو الإفصاح، أو الإتلاف. نستخدم تقنية التشفير (SSL) لحماية بيانات الدفع أثناء النقل.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">5. حقوقك</h2>
          <p>لديك الحق في الوصول إلى معلوماتك الشخصية، وتصحيحها، أو حذفها. يمكنك أيضًا إلغاء الاشتراك في رسائلنا الترويجية في أي وقت.</p>
        </section>
        
        <p className="text-xs text-center mt-12">آخر تحديث: 1 يناير 2026</p>
      </div>
    </div>
  );
}
