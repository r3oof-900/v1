"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CreditCard, Banknote, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

type PaymentMethod = "card" | "cash";

export default function CheckoutPage() {
  const { items, getSubtotal, getVAT, getShipping, getDiscount, getTotal, clearCart } = useCartStore();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsSubmitting(true);

    // محاكاة عملية الدفع وإرسال الطلب (2 ثانية)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    clearCart();
    toast.success("تم تأكيد طلبك بنجاح!");
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-main mb-4">شكراً لك، تم استلام طلبك بنجاح!</h1>
        <p className="text-muted mb-8 text-lg">رقم الطلب: #ORD-{Math.floor(Math.random() * 1000000)}</p>
        <p className="text-muted mb-10 max-w-lg mx-auto">
          تم إرسال تفاصيل الطلب إلى بريدك الإلكتروني. سيقوم فريقنا بتجهيز طلبك وشحنه في أقرب وقت ممكن.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-white font-semibold hover:opacity-90 transition-opacity"
        >
          العودة للرئيسية
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-main mb-4">السلة فارغة</h1>
        <Link href="/products" className="text-gold hover:underline">تصفح المنتجات للبدء</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-main mb-8">إتمام الطلب</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* نموذج البيانات */}
        <div className="lg:col-span-2">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* بيانات العميل */}
            <div className="bg-surface rounded-2xl border border-base p-6">
              <h2 className="text-lg font-bold text-main mb-6">بيانات الاتصال والتوصيل</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-main mb-1">الاسم الأول *</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-base focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-1">اسم العائلة *</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-base focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-1">رقم الجوال *</label>
                  <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" dir="ltr" placeholder="05xxxxxxxx" className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-base focus:border-gold focus:outline-none text-right" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-1">البريد الإلكتروني *</label>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" dir="ltr" className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-base focus:border-gold focus:outline-none text-right" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-main mb-1">المدينة *</label>
                  <select required name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-base focus:border-gold focus:outline-none">
                    <option value="">اختر المدينة...</option>
                    <option value="الرياض">الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="مكة المكرمة">مكة المكرمة</option>
                    <option value="المدينة المنورة">المدينة المنورة</option>
                    <option value="الدمام">الدمام</option>
                    <option value="أخرى">مدينة أخرى</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-main mb-1">العنوان التفصيلي *</label>
                  <input required name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="الحي، الشارع، رقم المبنى" className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-base focus:border-gold focus:outline-none" />
                </div>
              </div>
            </div>

            {/* طريقة الدفع */}
            <div className="bg-surface rounded-2xl border border-base p-6">
              <h2 className="text-lg font-bold text-main mb-6">طريقة الدفع</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col gap-2 transition-all ${paymentMethod === "card" ? "border-gold bg-gold-subtle" : "border-base bg-surface-2 hover:border-gold/50"}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="accent-gold w-4 h-4" />
                      <span className="font-medium text-main">البطاقة الائتمانية / مدى</span>
                    </div>
                    <CreditCard className={`w-5 h-5 ${paymentMethod === "card" ? "text-gold-dark" : "text-muted"}`} />
                  </div>
                  <p className="text-xs text-muted pr-6">دفع آمن وموثوق بنسبة 100%</p>
                </label>

                <label className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col gap-2 transition-all ${paymentMethod === "cash" ? "border-gold bg-gold-subtle" : "border-base bg-surface-2 hover:border-gold/50"}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment" value="cash" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} className="accent-gold w-4 h-4" />
                      <span className="font-medium text-main">الدفع عند الاستلام</span>
                    </div>
                    <Banknote className={`w-5 h-5 ${paymentMethod === "cash" ? "text-gold-dark" : "text-muted"}`} />
                  </div>
                  <p className="text-xs text-muted pr-6">رسوم إضافية 15 ريال</p>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="mt-6 p-4 border border-base rounded-xl bg-surface-2 flex items-center gap-3 text-sm text-muted">
                  <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                  <p>هذا المتجر التجريبي يستخدم وضع المحاكاة (Mock Mode). لن يتم خصم أي مبالغ حقيقية.</p>
                </div>
              )}
            </div>

          </form>
        </div>

        {/* ملخص الطلب */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-2xl border border-base p-6 sticky top-24 space-y-4">
            <h2 className="font-bold text-lg text-main mb-2">ملخص الطلب</h2>
            
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar border-b border-base pb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted line-clamp-1 flex-1 pl-2">
                    {item.quantity}x {item.nameAr}
                  </span>
                  <span className="text-main font-medium shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm pt-2">
              <div className="flex justify-between"><span className="text-muted">المجموع الفرعي</span><span className="text-main">{formatPrice(getSubtotal())}</span></div>
              {getDiscount() > 0 && <div className="flex justify-between text-green-600"><span>الخصم</span><span>-{formatPrice(getDiscount())}</span></div>}
              <div className="flex justify-between"><span className="text-muted">الضريبة (15%)</span><span className="text-main">{formatPrice(getVAT())}</span></div>
              
              <div className="flex justify-between">
                <span className="text-muted">الشحن</span>
                <span className="text-main">{getShipping() === 0 ? "مجاني" : formatPrice(getShipping())}</span>
              </div>

              {paymentMethod === "cash" && (
                <div className="flex justify-between">
                  <span className="text-muted">رسوم الدفع عند الاستلام</span>
                  <span className="text-main">{formatPrice(15)}</span>
                </div>
              )}
            </div>

            <div className="border-t border-base pt-3 flex justify-between font-bold text-xl">
              <span className="text-main">الإجمالي</span>
              <span className="text-main">
                {formatPrice(getTotal() + (paymentMethod === "cash" ? 15 : 0))}
              </span>
            </div>

            <button 
              form="checkout-form"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-4 rounded-xl gold-gradient text-white font-bold text-base text-center hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  جاري المعالجة...
                </>
              ) : (
                "تأكيد الطلب"
              )}
            </button>
            
            <Link href="/cart" className="flex items-center justify-center gap-2 text-sm text-muted hover:text-main mt-4">
              <ArrowLeft className="w-4 h-4" />
              العودة للسلة
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
