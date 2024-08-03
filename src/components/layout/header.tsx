import React, { useContext } from "react";

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

  const { shouldShowCartModal, closeCartModal, showCartModal } = useCartModal();

  const { shouldShowAccountModal, handleAccountModalClose, showAccountModal } =
    useAccountModal();

  const handleCartProceed = () => {
    closeCartModal();
    showCheckOutModal();
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
      </headerContext.Provider>
    </>
  );
}

export default Header;
