import { useState } from "react";

const useWishListModal = () => {
    const [shouldShowWishListModal, setShouldShowWishListModal] = useState(false);
    const handleWishListModalClose = () => setShouldShowWishListModal(false);
    const showWishListModal = () => setShouldShowWishListModal(true);
    return { shouldShowWishListModal, handleWishListModalClose, showWishListModal };
}

export default useWishListModal;