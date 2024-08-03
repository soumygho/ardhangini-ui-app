import { useState } from "react";

function useCheckOutModal() {
    const [shouldShowCheckoutModal, setShouldShowCheckoutModal] = useState(false);
    const handleCheckOutModalClose = () => setShouldShowCheckoutModal(false);
    const showCheckOutModal = () => setShouldShowCheckoutModal(true);
    return { shouldShowCheckoutModal, handleCheckOutModalClose, showCheckOutModal };
}

export default useCheckOutModal