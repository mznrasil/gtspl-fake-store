import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// cart items are products
type State = {
  items: Array<CartItemType>;
};

type Action = {
  addItem: (product: CartItemType) => void;
  reduceItem: (productId: number) => void;
  deleteItem: (productId: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<State & Action>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product: CartItemType) => {
        const item = get().items.find((item) => item.id === product.id);
        if (item) {
          set((state) => {
            const updatedItems = state.items.map((item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item,
            );
            return {
              ...state,
              items: updatedItems,
            };
          });
        } else {
          set((state) => {
            const updatedItems = [
              ...state.items,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image,
              },
            ];
            return { ...state, items: updatedItems };
          });
        }
      },
      reduceItem: (productId: number) => {
        const item = get().items.find((item) => item.id === productId);
        if (item) {
          set((state) => {
            const updatedItems = state.items.map((item) =>
              item.id === productId
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item,
            );
            return {
              ...state,
              items: updatedItems,
            };
          });
        }
      },
      deleteItem: (productId: number) => {
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => item.id !== productId,
          );
          return {
            ...state,
            items: updatedItems,
          };
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-store", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
