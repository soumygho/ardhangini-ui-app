import React, { useContext, useState } from "react";

import { rootContext } from "../../context/root.context";
import WishListModal from "../../pages/modals/WishListModal";
import useWishListModal from "../../hooks/useWishListModal";
import { headerContext, HeaderContext } from "../../context/header.context";
import useCartModal from "../../hooks/useCartModal";
import CartDetailsModal from "../../pages/modals/CartDetailsModal";
import CheckoutModal from "../../pages/modals/CheckoutModal";
import useCheckOutModal from "../../hooks/useCheckOutModal";
import useAccountModal from "../../hooks/useAccountModal";
import AccountDetailsModal from "../../pages/modals/AccountDetailsModal";
import MenuBar from "./MenuBar";
import ActionBar from "./ActionBar";
import useDeliverySelectModal from "../../hooks/useDeliveryselectModal";
import SelectDeliveryModal from "../../pages/modals/SelectDeliveryModal";

function Header() {
  const context = useContext(rootContext);
  const {
    shouldShowWishListModal,
    handleWishListModalClose,
    showWishListModal,
  } = useWishListModal();

  const {
    shouldShowCheckoutModal,
    handleCheckOutModalClose,
    showCheckOutModal,
  } = useCheckOutModal();

  const {
    shouldShowDeliveryModal,
    handleDeliveryModalClose,
    showDeliveryModal,
  } = useDeliverySelectModal();

  const [cartDetails, setCartDetails] = useState<any>(undefined);
  const [selectedDeliveryAddress, setselectedDeliveryAddress] =
    useState<any>(undefined);
  const [selectedBillingAddress, setselectedBillingAddress] =
    useState<any>(undefined);

  const { shouldShowCartModal, closeCartModal, showCartModal } = useCartModal();

  const { shouldShowAccountModal, handleAccountModalClose, showAccountModal } =
    useAccountModal();

  const handleCartProceed = () => {
    closeCartModal();
    showDeliveryModal();
  };

  const headerContextData: HeaderContext = {
    showWishListModal: shouldShowWishListModal,
    handleShowWishListModal: showWishListModal,
    handleWishListCloseModal: handleWishListModalClose,
    showCartModal: shouldShowCartModal,
    handleShowCartModal: showCartModal,
    handleCartCloseModal: closeCartModal,
    handleCartProceed: handleCartProceed,
    shouldShowCheckOutModal: shouldShowCheckoutModal,
    showCheckOutModal: showCheckOutModal,
    closeCheckOutModal: handleCheckOutModalClose,
    shouldShowAccountModal: shouldShowAccountModal,
    showAccountModal: showAccountModal,
    hideAccountModal: handleAccountModalClose,
    cartDetails: cartDetails,
    selectedDeliveryAddress: selectedDeliveryAddress,
    selectedBillingAddress: selectedBillingAddress,
    setCartDetails: function (cartDetails: any): void {
      setCartDetails(cartDetails);
    },
    setDeliveryAddress: function (address: any): void {
      console.trace(address);
      //setselectedDeliveryAddress(address);
    },
    setBillingAddress: function (address: any): void {
      console.trace(address);
      //setselectedBillingAddress(address);
    },
    handleDeliveryAddressProceed: function (): void {
      handleDeliveryModalClose();
      showCheckOutModal();
    },
    closeDeliverySelectionModal: handleDeliveryModalClose,
    shouldShowSelectDeliveryModal: shouldShowDeliveryModal,
  };
  return (
    <>
      <headerContext.Provider value={headerContextData}>
        <div className="top-bar py-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="text-light">
                  FLAT 10% OFF on orders above ₹4,999 | Code: MOTHERSDAY
                </p>
              </div>
            </div>
          </div>
        </div>
        <ActionBar></ActionBar>
        <MenuBar></MenuBar>
        {/*Modal section here*/}
        <WishListModal></WishListModal>
        <CartDetailsModal></CartDetailsModal>
        <CheckoutModal></CheckoutModal>
        <AccountDetailsModal></AccountDetailsModal>
        <SelectDeliveryModal></SelectDeliveryModal>
      </headerContext.Provider>
    </>
  );
}

export default Header;
