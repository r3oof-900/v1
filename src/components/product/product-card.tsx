"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Star, GitCompareArrows } from "lucide-react";
import type { Product } from "@/types";
import { cn, formatPrice, formatDiscount } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useCompareStore } from "@/store/compare";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const addToCart = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist(product.id));
  const addToCompare = useCompareStore((s) => s.addItem);
  const isInCompare = useCompareStore((s) => s.isInCompare(product.id));

  const discount = product.oldPrice ? formatDiscount(product.oldPrice, product.price) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`تمت إضافة ${product.nameAr} إلى السلة`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast.success(isInWishlist ? "تمت الإزالة من المفضلة" : "تمت الإضافة للمفضلة");
  };

  const handleAddToCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = addToCompare(product.id);
    if (added) {
      toast.success("تمت الإضافة للمقارنة");
    } else {
      toast.error("يمكنك مقارنة 4 منتجات كحد أقصى");
    }
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group block bg-surface rounded-2xl border border-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gold/30",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square p-4 bg-surface-2 group-hover:bg-surface transition-colors flex items-center justify-center">
        <Image
          src={product.thumbnail}
          alt={product.nameAr}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          unoptimized
        />

        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-600 text-white rounded-md">
              جديد
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500 text-white rounded-md">
              الأكثر مبيعًا
            </span>
          )}
          {discount > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-bold bg-red-600 text-white rounded-md">
              خصم {discount}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleToggleWishlist}
            className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
              isInWishlist
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500"
            )}
            aria-label={isInWishlist ? "إزالة من المفضلة" : "إضافة للمفضلة"}
          >
            <Heart className={cn("w-4 h-4", isInWishlist && "fill-current")} />
          </button>
          <button
            onClick={handleAddToCompare}
            className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
              isInCompare
                ? "bg-gold text-white"
                : "bg-white/90 text-gray-600 hover:bg-gold-subtle hover:text-gold-dark"
            )}
            aria-label="إضافة للمقارنة"
          >
            <GitCompareArrows className="w-4 h-4" />
          </button>
        </div>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 dark:bg-black/60 flex items-center justify-center">
            <span className="px-3 py-1 bg-gray-800 text-white text-sm font-medium rounded-lg">
              غير متوفر
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-2">
        {/* Brand */}
        <p className="text-xs text-muted font-medium">{product.brand}</p>

        {/* Name */}
        <h3 className="font-semibold text-sm leading-snug text-main line-clamp-2 min-h-[2.5rem]">
          {product.nameAr}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="text-xs font-medium text-main">{product.rating}</span>
          <span className="text-xs text-muted">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-base text-main">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={cn(
            "w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all",
            product.inStock
              ? "gold-gradient text-white hover:opacity-90 active:scale-[0.98]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          )}
        >
          <ShoppingBag className="w-4 h-4" />
          {product.inStock ? "أضف للسلة" : "غير متوفر"}
        </button>
      </div>
    </Link>
  );
}
