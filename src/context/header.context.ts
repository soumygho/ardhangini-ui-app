import { createContext } from "react";

export interface HeaderContext {
    showWishListModal: boolean;
    handleShowWishListModal: () => void;
    handleWishListCloseModal: () => void;
    showCartModal: boolean;
    handleShowCartModal: () => void;
    handleCartCloseModal: () => void;
    handleCartProceed: () => void;
    handleDeliveryAddressProceed: () => void;
    shouldShowCheckOutModal: boolean;
    showCheckOutModal: () => void;
    closeCheckOutModal: () => void;
    shouldShowAccountModal: boolean;
    showAccountModal: () => void;
    hideAccountModal: () => void;
    cartDetails: any;
    selectedDeliveryAddress: string;
    selectedBillingAddress: string;
    setCartDetails: (cartDetails: any) => void;
    setDeliveryAddress: (address: string) => void;
    setBillingAddress: (address: string) => void;
    closeDeliverySelectionModal: () => void;
    shouldShowSelectDeliveryModal: boolean;
  }
  
  export const headerContext = createContext<HeaderContext | null>(null);