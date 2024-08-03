import { createContext } from "react";

export interface HeaderContext {
    showWishListModal: boolean;
    handleShowWishListModal: () => void;
    handleWishListCloseModal: () => void;
    showCartModal: boolean;
    handleShowCartModal: () => void;
    handleCartCloseModal: () => void;
    handleCartProceed: () => void;
    shouldShowCheckOutModal: boolean;
    showCheckOutModal: () => void;
    closeCheckOutModal: () => void;
    shouldShowAccountModal: boolean;
    showAccountModal: () => void;
    hideAccountModal: () => void;
  }
  
  export const headerContext = createContext<HeaderContext | null>(null);