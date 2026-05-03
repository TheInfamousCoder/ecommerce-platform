import { createContext } from "react";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/products";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);
