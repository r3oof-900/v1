"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart, ShoppingBag, Star, Shield, Truck, RotateCcw,
  ChevronLeft, Minus, Plus, Share2, GitCompareArrows,
} from "lucide-react";
import type { Product, ProductVariant } from "@/types";
import { cn, formatPrice, formatDiscount, getStockStatus } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useCompareStore } from "@/store/compare";
import { toast } from "sonner";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState<ProductVariant | undefined>(
    product.colors?.[0] || undefined
  );
  const [selectedStorage, setSelectedStorage] = useState<ProductVariant | undefined>(
    product.storageOptions?.[0] || undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">("desc");

  const addToCart = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.id));
  const addToCompare = useCompareStore((s) => s.addItem);

  const priceModifier = (selectedColor?.priceModifier || 0) + (selectedStorage?.priceModifier || 0);
  const currentPrice = product.price + priceModifier;
  const currentOldPrice = product.oldPrice ? product.oldPrice + priceModifier : undefined;
  const discount = currentOldPrice ? formatDiscount(currentOldPrice, currentPrice) : 0;
  const stockStatus = getStockStatus(product.stock);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedStorage);
    toast.success(`تمت إضافة ${product.nameAr} إلى السلة`);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted mb-6" aria-label="breadcrumb">
        <Link href="/" className="hover:text-gold-dark transition-colors">الرئيسية</Link>
        <ChevronLeft className="w-3 h-3" />
        <Link href="/products" className="hover:text-gold-dark transition-colors">المنتجات</Link>
        <ChevronLeft className="w-3 h-3" />
        <span className="text-main font-medium truncate">{product.nameAr}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-3">
          <div className="relative aspect-square bg-surface-2 rounded-2xl overflow-hidden border border-base">
            <Image
              src={product.thumbnail}
              alt={product.nameAr}
              fill
              className="object-contain p-8"
              priority
              unoptimized
            />
            {discount > 0 && (
              <span className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-lg">
                خصم {discount}%
              </span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gold-dark font-medium mb-1">{product.brand}</p>
            <h1 className="text-2xl lg:text-3xl font-bold text-main">{product.nameAr}</h1>
            <p className="text-sm text-muted mt-1">{product.name}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    "w-4 h-4",
                    star <= Math.round(product.rating)
                      ? "text-amber-400 fill-amber-400"
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted">({product.reviewCount} تقييم)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-main">{formatPrice(currentPrice)}</span>
            {currentOldPrice && (
              <span className="text-lg text-muted line-through">{formatPrice(currentOldPrice)}</span>
            )}
            <span className="text-xs text-muted">شامل الضريبة</span>
          </div>

          {/* Stock Status */}
          <p className={cn("text-sm font-medium", stockStatus.color)}>{stockStatus.label}</p>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <p className="text-sm font-medium text-main mb-2">
                اللون: <span className="text-muted">{selectedColor?.labelAr}</span>
              </p>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-9 h-9 rounded-xl border-2 transition-all",
                      selectedColor?.id === color.id
                        ? "border-gold ring-2 ring-gold/30"
                        : "border-base hover:border-gold/50"
                    )}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.labelAr}
                    title={color.labelAr}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Storage */}
          {product.storageOptions && product.storageOptions.length > 0 && (
            <div>
              <p className="text-sm font-medium text-main mb-2">السعة التخزينية:</p>
              <div className="flex flex-wrap gap-2">
                {product.storageOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedStorage(option)}
                    disabled={!option.inStock}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-medium border transition-all",
                      selectedStorage?.id === option.id
                        ? "border-gold bg-gold-subtle text-gold-dark"
                        : "border-base bg-surface hover:border-gold/50",
                      !option.inStock && "opacity-40 cursor-not-allowed"
                    )}
                  >
                    {option.labelAr}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <p className="text-sm font-medium text-main mb-2">الكمية:</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-base rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-surface-2 transition-colors"
                  aria-label="إنقاص الكمية"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm font-semibold border-x border-base">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-surface-2 transition-colors"
                  aria-label="زيادة الكمية"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 py-3.5 rounded-xl gold-gradient text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <ShoppingBag className="w-5 h-5" />
              أضف للسلة
            </button>
            <button
              onClick={() => { handleAddToCart(); }}
              disabled={!product.inStock}
              className="flex-1 py-3.5 rounded-xl bg-foreground text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              اشتر الآن
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => {
                toggleWishlist(product.id);
                toast.success(isInWishlist ? "تمت الإزالة من المفضلة" : "تمت الإضافة للمفضلة");
              }}
              className="flex items-center gap-1.5 text-sm text-muted hover:text-red-500 transition-colors"
            >
              <Heart className={cn("w-4 h-4", isInWishlist && "fill-red-500 text-red-500")} />
              {isInWishlist ? "في المفضلة" : "أضف للمفضلة"}
            </button>
            <button
              onClick={() => {
                const added = addToCompare(product.id);
                toast.success(added ? "تمت الإضافة للمقارنة" : "الحد الأقصى 4 منتجات");
              }}
              className="flex items-center gap-1.5 text-sm text-muted hover:text-gold-dark transition-colors"
            >
              <GitCompareArrows className="w-4 h-4" />
              قارن
            </button>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                toast.success("تم نسخ الرابط");
              }}
              className="flex items-center gap-1.5 text-sm text-muted hover:text-gold-dark transition-colors"
            >
              <Share2 className="w-4 h-4" />
              مشاركة
            </button>
          </div>

          {/* Policies */}
          <div className="border-t border-base pt-4 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Truck className="w-4 h-4 text-gold" />
              <span className="text-muted">{product.warranty ? `الشحن: ${product.warranty.includes("يوم") ? "1-3 أيام" : "1-3 أيام عمل"}` : "شحن خلال 1-3 أيام"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-muted">{product.warranty || "ضمان الوكيل الرسمي"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <RotateCcw className="w-4 h-4 text-gold" />
              <span className="text-muted">استرجاع خلال 7 أيام</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Description / Specs / Reviews */}
      <div className="mt-12 border-t border-base pt-8">
        <div className="flex items-center gap-1 mb-6 border-b border-base">
          {(["desc", "specs", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                activeTab === tab
                  ? "border-gold text-gold-dark"
                  : "border-transparent text-muted hover:text-main"
              )}
            >
              {tab === "desc" && "الوصف"}
              {tab === "specs" && "المواصفات"}
              {tab === "reviews" && `التقييمات (${product.reviewCount})`}
            </button>
          ))}
        </div>

        {activeTab === "desc" && (
          <div className="prose prose-sm max-w-none">
            <p className="text-main leading-relaxed">{product.descriptionAr}</p>
            {product.featuresAr && product.featuresAr.length > 0 && (
              <div className="mt-6">
                <h3 className="font-bold text-base text-main mb-3">المميزات</h3>
                <ul className="space-y-2">
                  {product.featuresAr.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-main">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.inTheBoxAr && product.inTheBoxAr.length > 0 && (
              <div className="mt-6">
                <h3 className="font-bold text-base text-main mb-3">محتويات العلبة</h3>
                <ul className="space-y-1">
                  {product.inTheBoxAr.map((item, i) => (
                    <li key={i} className="text-sm text-muted">• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            {product.specifications && product.specifications.length > 0 ? (
              <div className="border border-base rounded-xl overflow-hidden">
                {product.specifications.map((spec, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center text-sm",
                      i % 2 === 0 ? "bg-surface" : "bg-surface-2"
                    )}
                  >
                    <span className="w-1/3 p-3 font-medium text-muted border-l border-base">
                      {spec.keyAr}
                    </span>
                    <span className="flex-1 p-3 text-main">{spec.valueAr}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">لا توجد مواصفات مفصلة متاحة حاليًا.</p>
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-center py-8">
            <p className="text-sm text-muted">التقييمات ستكون متاحة قريبًا.</p>
            <p className="text-xs text-muted mt-1">(بيانات تجريبية)</p>
          </div>
        )}
      </div>
    </div>
  );
}
