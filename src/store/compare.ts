import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CompareState {
  items: string[]; // product IDs, max 4
  addItem: (productId: string) => boolean;
  removeItem: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
}

const MAX_COMPARE_ITEMS = 4;

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (productId) => {
        const state = get();
        if (state.items.includes(productId)) return false;
        if (state.items.length >= MAX_COMPARE_ITEMS) return false;
        set({ items: [...state.items, productId] });
        return true;
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((id) => id !== productId),
        }));
      },

      isInCompare: (productId) => get().items.includes(productId),

      clearCompare: () => set({ items: [] }),
    }),
    {
      name: "arjwan-compare",
    }
  )
);
