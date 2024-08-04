import { createContext } from "react";

export interface RootContext {
  showLoginModal: boolean;
  cartId: string | undefined;
  userId: string | undefined;
  handleShowLoginModal: () => void;
  handleLoginCloseModal: () => void;
  handleAddToCart: (productId: string) => void;
  handleAddToWishList: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  removeFromWishList: (productId: string) => void;
}

export const rootContext = createContext<RootContext | null>(null);
