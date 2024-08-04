import { useState } from "react";

function useAddDeliveryModal() {
    const [shouldShowAddDeliveryModal, setShouldShowAddDeliveryModal] = useState(false);
    const closeAddDeliveryModal = () => setShouldShowAddDeliveryModal(false);
    const showAddDeliveryModal = () => setShouldShowAddDeliveryModal(true);
    return { shouldShowAddDeliveryModal, closeAddDeliveryModal, showAddDeliveryModal };
}

export default useAddDeliveryModal;