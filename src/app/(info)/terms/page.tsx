import type { Metadata } from "next";

export const metadata: Metadata = { title: "الشروط والأحكام", description: "الشروط والأحكام الخاصة باستخدام متجر أرجوان" };

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <h1 className="text-3xl font-bold text-main mb-8">الشروط والأحكام</h1>
      
      <div className="prose prose-sm max-w-none text-muted space-y-6">
        <section>
          <h2 className="text-xl font-bold text-main mb-3">1. مقدمة</h2>
          <p>مرحباً بكم في متجر أرجوان. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. يُرجى قراءتها بعناية قبل استخدام الموقع أو إجراء أي عملية شراء.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">2. الحسابات</h2>
          <p>أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور وتقييد الوصول إلى جهاز الكمبيوتر الخاص بك. توافق على قبول المسؤولية عن جميع الأنشطة التي تحدث تحت حسابك أو كلمة المرور الخاصة بك.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">3. المنتجات والأسعار</h2>
          <p>نبذل قصارى جهدنا لضمان دقة تفاصيل المنتجات والأسعار، ولكن قد تحدث أخطاء. نحتفظ بالحق في تصحيح أي أخطاء أو عدم دقة وإلغاء الطلبات المتأثرة. جميع الأسعار قابلة للتغيير دون إشعار مسبق.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">4. الشحن والتوصيل</h2>
          <p>تختلف أوقات الشحن حسب الموقع وطريقة الشحن المحددة. لا نتحمل المسؤولية عن أي تأخير خارج عن سيطرتنا. ستنتقل مخاطر الفقدان والملكية للمنتجات إليك عند تسليمها لشركة الشحن.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">5. الاسترجاع والاستبدال</h2>
          <p>نقبل استرجاع المنتجات وفقًا لسياسة الاسترجاع الخاصة بنا، والتي تتطلب أن تكون المنتجات في حالتها الأصلية والتعبئة. بعض المنتجات قد تكون غير قابلة للاسترجاع.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-main mb-3">6. التعديلات</h2>
          <p>نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. استمرارك في استخدام الموقع بعد أي تغييرات يمثل موافقتك على الشروط المعدلة.</p>
        </section>
        
        <p className="text-xs text-center mt-12">آخر تحديث: 1 يناير 2026</p>
      </div>
    </div>
  );
}
