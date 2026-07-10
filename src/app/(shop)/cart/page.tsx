"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, applyCoupon, removeCoupon, couponCode, getSubtotal, getDiscount, getVAT, getShipping, getTotal, getItemCount } = useCartStore();
  const [couponInput, setCouponInput] = useState("");

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    const success = applyCoupon(couponInput);
    if (success) {
      toast.success("تم تطبيق الكوبون بنجاح!");
      setCouponInput("");
    } else {
      toast.error("الكوبون غير صالح أو الحد الأدنى للطلب غير متحقق");
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gold-subtle flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-gold" />
        </div>
        <h1 className="text-2xl font-bold text-main mb-2">سلة التسوق فارغة</h1>
        <p className="text-muted text-sm mb-8">لم تضف أي منتجات بعد، ابدأ التسوق الآن!</p>
        <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-white font-semibold text-sm">
          تصفح المنتجات
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-main mb-8">سلة التسوق ({getItemCount()} منتج)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-surface rounded-2xl border border-base">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-surface-2 relative shrink-0 overflow-hidden">
                <Image src={item.image} alt={item.nameAr} fill className="object-contain p-2" unoptimized />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-muted">{item.brand}</p>
                    <h3 className="font-semibold text-sm text-main line-clamp-2">{item.nameAr}</h3>
                    {item.selectedColor && <p className="text-xs text-muted mt-0.5">اللون: {item.selectedColor.labelAr}</p>}
                    {item.selectedStorage && <p className="text-xs text-muted">السعة: {item.selectedStorage.labelAr}</p>}
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-muted hover:text-red-500 transition-colors" aria-label="حذف المنتج">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-base rounded-lg overflow-hidden">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-surface-2" aria-label="إنقاص">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 h-8 flex items-center justify-center text-xs font-semibold border-x border-base">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-surface-2" aria-label="زيادة">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm text-main">{formatPrice(item.price * item.quantity)}</p>
                    {item.oldPrice && <p className="text-xs text-muted line-through">{formatPrice(item.oldPrice * item.quantity)}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700 transition-colors">
            مسح السلة
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-2xl border border-base p-6 sticky top-24 space-y-4">
            <h2 className="font-bold text-lg text-main">ملخص الطلب</h2>

            {/* Coupon */}
            <div>
              {couponCode ? (
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-sm">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <Tag className="w-4 h-4" />
                    <span>{couponCode}</span>
                  </div>
                  <button onClick={removeCoupon} className="text-red-500 text-xs hover:underline">إزالة</button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="كود الخصم"
                    className="flex-1 px-3 py-2 rounded-xl bg-surface-2 border border-base text-sm focus:outline-none focus:border-gold"
                  />
                  <button onClick={handleApplyCoupon} className="px-4 py-2 rounded-xl border border-gold text-gold-dark text-sm font-medium hover:bg-gold-subtle transition-colors">
                    تطبيق
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted">المجموع الفرعي</span><span className="text-main">{formatPrice(getSubtotal())}</span></div>
              {getDiscount() > 0 && <div className="flex justify-between text-green-600"><span>الخصم</span><span>-{formatPrice(getDiscount())}</span></div>}
              <div className="flex justify-between"><span className="text-muted">الضريبة (15%)</span><span className="text-main">{formatPrice(getVAT())}</span></div>
              <div className="flex justify-between"><span className="text-muted">الشحن</span><span className="text-main">{getShipping() === 0 ? "مجاني" : formatPrice(getShipping())}</span></div>
              {getShipping() > 0 && <p className="text-xs text-gold-dark">أضف {formatPrice(200 - getSubtotal())} للحصول على شحن مجاني</p>}
            </div>

            <div className="border-t border-base pt-3 flex justify-between font-bold text-lg">
              <span className="text-main">الإجمالي</span>
              <span className="text-main">{formatPrice(getTotal())}</span>
            </div>

            <Link href="/checkout" className="block w-full py-3.5 rounded-xl gold-gradient text-white font-semibold text-sm text-center hover:opacity-90 transition-opacity">
              إتمام الطلب
            </Link>

            <Link href="/products" className="block text-center text-sm text-gold-dark hover:underline">
              متابعة التسوق
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
