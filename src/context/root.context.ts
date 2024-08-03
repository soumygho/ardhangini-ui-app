import { createContext } from "react";

export interface RootContext {
  showLoginModal: boolean;
  cartId: string | undefined;
  userId: string | undefined;
  handleShowLoginModal: () => void;
  handleLoginCloseModal: () => void;
  handleAddToCart: () => void;
  handleAddToWishList: () => void;
  removeFromCart: () => void;
  removeFromWishList: () => void;
}

export const rootContext = createContext<RootContext | null>(null);
