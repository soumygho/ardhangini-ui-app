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
import { DeliveryAddressEntity } from "../../services/openapi";

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
  const [selectedDeliveryAddress, setselectedDeliveryAddress] = useState<
    DeliveryAddressEntity | undefined
  >(undefined);
  const [selectedBillingAddress, setselectedBillingAddress] = useState<
    DeliveryAddressEntity | undefined
  >(undefined);

  const { shouldShowCartModal, closeCartModal, showCartModal } = useCartModal();

  const { shouldShowAccountModal, handleAccountModalClose, showAccountModal } =
    useAccountModal();

  const handleCartProceed = () => {
    closeCartModal();
    showDeliveryModal();
  };

  const headerContextData: HeaderContext = {
    showWishListModal: shouldShowWishListModal,
    handleShowWishListModal: () => {
      if (context?.userId) {
        showWishListModal();
      } else {
        context?.handleShowLoginModal();
      }
    },
    handleWishListCloseModal: handleWishListModalClose,
    showCartModal: shouldShowCartModal,
    handleShowCartModal: () => {
      if (context?.userId) {
        showCartModal();
      } else {
        context?.handleShowLoginModal();
      }
    },
    handleCartCloseModal: closeCartModal,
    handleCartProceed: handleCartProceed,
    shouldShowCheckOutModal: shouldShowCheckoutModal,
    showCheckOutModal: showCheckOutModal,
    closeCheckOutModal: handleCheckOutModalClose,
    shouldShowAccountModal: shouldShowAccountModal,
    showAccountModal: () => {
      if (context?.userId) {
        showAccountModal();
      } else {
        context?.handleShowLoginModal();
      }
    },
    hideAccountModal: handleAccountModalClose,
    cartDetails: cartDetails,
    selectedDeliveryAddress: selectedDeliveryAddress,
    selectedBillingAddress: selectedBillingAddress,
    setCartDetails: function (cartDetails: any): void {
      setCartDetails(cartDetails);
    },
    setDeliveryAddress: function (address: DeliveryAddressEntity): void {
      setselectedDeliveryAddress(() => address);
      console.trace("selectedDeliveryAddress");
      console.trace(selectedDeliveryAddress);
    },
    setBillingAddress: function (address: DeliveryAddressEntity): void {
      setselectedBillingAddress(() => address);
      console.trace("selectedBillingAddress");
      console.trace(selectedBillingAddress);
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
                <p className="text-light enable-animation">
                <i className="fa-solid fa-fire link-warning fs-5"></i> FLAT 10% OFF on orders above ₹4,999 | Code: MOTHERSDAY <i className="fa-solid fa-fire link-warning fs-5"></i>
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
