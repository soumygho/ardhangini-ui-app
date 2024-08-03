import { useState } from "react";

const useLoginModal = () => {
  const [shouldShowLoginModal, setShouldShowLoginModal] = useState(false);
  const handleModalClose = () => setShouldShowLoginModal(false);
  const showLoginModal = () => setShouldShowLoginModal(true);
  //implement login/registration call here
  return { shouldShowLoginModal, handleModalClose, showLoginModal };
};

export default useLoginModal;
