import { useState } from "react";

const useDeliverySelectModal = () => {
  const [shouldShowDeliveryModal, setShouldShowDeliveryModal] = useState(false);
  const handleDeliveryModalClose = () => setShouldShowDeliveryModal(false);
  const showDeliveryModal = () => setShouldShowDeliveryModal(true);
  //implement login/registration call here
  return { shouldShowDeliveryModal, handleDeliveryModalClose, showDeliveryModal };
};

export default useDeliverySelectModal;