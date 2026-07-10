import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, ProductVariant } from "@/types";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  nameAr: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  quantity: number;
  maxStock: number;
  selectedColor?: ProductVariant;
  selectedStorage?: ProductVariant;
  sku: string;
}

interface CartState {
  items: CartItem[];
  couponCode: string | null;
  couponDiscount: number;
  addItem: (product: Product, quantity?: number, color?: ProductVariant, storage?: ProductVariant) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getVAT: () => number;
  getShipping: () => number;
  getTotal: () => number;
}

function generateCartItemId(productId: string, color?: ProductVariant, storage?: ProductVariant): string {
  return `${productId}-${color?.value || "default"}-${storage?.value || "default"}`;
}

// Demo coupons
const DEMO_COUPONS: Record<string, { type: "percentage" | "fixed"; value: number; minOrder: number }> = {
  ARJWAN10: { type: "percentage", value: 10, minOrder: 100 },
  WELCOME50: { type: "fixed", value: 50, minOrder: 200 },
  SAVE20: { type: "percentage", value: 20, minOrder: 500 },
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      couponDiscount: 0,

      addItem: (product, quantity = 1, color, storage) => {
        const id = generateCartItemId(product.id, color, storage);
        const priceModifier = (color?.priceModifier || 0) + (storage?.priceModifier || 0);
        const price = product.price + priceModifier;
        const oldPrice = product.oldPrice ? product.oldPrice + priceModifier : undefined;

        set((state) => {
          const existing = state.items.find((item) => item.id === id);
          if (existing) {
            const newQty = Math.min(existing.quantity + quantity, existing.maxStock);
            return {
              items: state.items.map((item) =>
                item.id === id ? { ...item, quantity: newQty } : item
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                id,
                productId: product.id,
                name: product.name,
                nameAr: product.nameAr,
                brand: product.brand,
                price,
                oldPrice,
                image: product.thumbnail,
                quantity,
                maxStock: product.stock,
                selectedColor: color,
                selectedStorage: storage,
                sku: product.sku,
              },
            ],
          };
        });
      },

      removeItem: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: Math.min(quantity, item.maxStock) } : item
          ),
        }));
      },

      clearCart: () => set({ items: [], couponCode: null, couponDiscount: 0 }),

      applyCoupon: (code) => {
        const coupon = DEMO_COUPONS[code.toUpperCase()];
        if (!coupon) return false;
        const subtotal = get().getSubtotal();
        if (subtotal < coupon.minOrder) return false;
        const discount =
          coupon.type === "percentage"
            ? Math.round(subtotal * (coupon.value / 100))
            : coupon.value;
        set({ couponCode: code.toUpperCase(), couponDiscount: discount });
        return true;
      },

      removeCoupon: () => set({ couponCode: null, couponDiscount: 0 }),

      getItemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      getDiscount: () => get().couponDiscount,

      getVAT: () => {
        const subtotal = get().getSubtotal() - get().getDiscount();
        return Math.round(subtotal * 0.15 * 100) / 100;
      },

      getShipping: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= 200 ? 0 : 25;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const discount = get().getDiscount();
        const vat = get().getVAT();
        const shipping = get().getShipping();
        return subtotal - discount + vat + shipping;
      },
    }),
    {
      name: "arjwan-cart",
    }
  )
);
