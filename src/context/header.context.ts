import { createContext } from "react";
import { DeliveryAddressEntity } from "../services/openapi";

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
  selectedDeliveryAddress: DeliveryAddressEntity | undefined;
  selectedBillingAddress: DeliveryAddressEntity | undefined;
  setCartDetails: (cartDetails: any) => void;
  setDeliveryAddress: (address: DeliveryAddressEntity) => void;
  setBillingAddress: (address: DeliveryAddressEntity) => void;
  closeDeliverySelectionModal: () => void;
  shouldShowSelectDeliveryModal: boolean;
}

export const headerContext = createContext<HeaderContext | null>(null);
