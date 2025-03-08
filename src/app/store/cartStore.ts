// src/app/store/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define cart item type
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Define store type
type CartState = {
  items: CartItem[];
  total: number;
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, amount: number) => void;
};

// Create Zustand store with persistence
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          let updatedItems;

          if (existingItem) {
            updatedItems = state.items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            updatedItems = [...state.items, { ...product, quantity: 1 }];
          }

          return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          };
        });
      },
      removeFromCart: (id) => {
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== id);
          return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          };
        });
      },
      updateQuantity: (id, amount) => {
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + amount } : item
          ).filter((item) => item.quantity > 0);

          return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          };
        });
      },
    }),
    { name: "cart-storage" } // Persist in localStorage
  )
);
