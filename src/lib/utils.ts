import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { company } from "@/config/company";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString("ar-SA")} ر.س`;
}

export function formatDiscount(oldPrice: number, newPrice: number): number {
  if (!oldPrice || oldPrice <= newPrice) return 0;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

export function getStars(rating: number): { full: number; half: boolean; empty: number } {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}

export function generateOrderNumber(): string {
  return `ARJ-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
}

export function calculateVAT(amount: number, rate = 0.15): number {
  return Math.round(amount * rate * 100) / 100;
}

export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * توليد رابط واتساب
 */
export function getWhatsAppUrl(productName?: string, productUrl?: string): string {
  let text = company.whatsapp.defaultMessage;
  if (productName) {
    text += `\n\nالمنتج: ${productName}`;
  }
  if (productUrl) {
    text += `\n${productUrl}`;
  }
  return `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * فحص حالة المخزون
 */
export function getStockStatus(stock: number): { label: string; color: string } {
  if (stock <= 0) return { label: "غير متوفر", color: "text-red-600" };
  if (stock <= 5) return { label: `باقي ${stock} فقط`, color: "text-amber-600" };
  return { label: "متوفر", color: "text-emerald-600" };
}
