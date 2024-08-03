import { useState } from "react";

function useAccountModal() {
    const [shouldShowAccountModal, setShouldShowAccountModal] = useState(false);
    const handleAccountModalClose = () => setShouldShowAccountModal(false);
    const showAccountModal = () => setShouldShowAccountModal(true);
    return { shouldShowAccountModal, handleAccountModalClose, showAccountModal };
}

export default useAccountModal;