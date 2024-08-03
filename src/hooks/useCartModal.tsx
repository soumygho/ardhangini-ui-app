import { useState } from "react";

const useCartModal = () => {
  const [shouldShowCartModal, setShouldShowCartModal] = useState(false);
  const closeCartModal = () => setShouldShowCartModal(false);
  const showCartModal = () => {
    console.log('show cart');
    setShouldShowCartModal(true);
  };
  return { shouldShowCartModal, closeCartModal, showCartModal };
};

export default useCartModal;
