import React, { useContext, useEffect, useMemo, useState } from "react";
import { headerContext } from "../../../context/header.context";
import useAddDeliveryModal from "../../../hooks/useAddDeliveryModal";
import useDeliveryAddressApi from "../../../hooks/api/useDeliveryAddressApi";
import DeliveryAddressGrid from "../../../pages/data-grid/DeliveryAddressGrid";
import AddDeliveryAddressModal from "../../../pages/modals/AddDeliveryAddressModal";
import DeliveryAddress from "../../order/DeliveryAddress";
import { DeliveryAddressEntity } from "../../../services/openapi";

function DeliveryAddressPanel() {
  const context = useContext(headerContext);
  const {
    shouldShowAddDeliveryModal,
    closeAddDeliveryModal,
    showAddDeliveryModal,
  } = useAddDeliveryModal();
  const {
    deliveryAddresses,
    isDeliveryAddressUpdated,
    addOrUpdateDeliveryAddress,
    removeDeliveryAddressesForCurrentUser,
    getDeliveryAddressesForCurrentUser,
  } = useDeliveryAddressApi();

  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState<
    DeliveryAddressEntity | undefined
  >(undefined);

  useEffect(() => {
    getDeliveryAddressesForCurrentUser();
    closeAddDeliveryModal();
  }, [isDeliveryAddressUpdated]);

  const deleteDeliveryAddress = useMemo(
    () => (addressId: string) => {
      removeDeliveryAddressesForCurrentUser(addressId);
    },
    []
  );
  const editDeliveryAddress = useMemo(
    () => (address: DeliveryAddressEntity) => {
      setSelectedDeliveryAddress(() => address);
      showAddDeliveryModal();
    },
    []
  );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4">
            <a
              className="btn btn__bg d-block"
              style={{ marginBottom: "10px" }}
              onClick={showAddDeliveryModal}
            >
              +Add New Address
            </a>
          </div>
        </div>
        <div className="row">
          <DeliveryAddressGrid
            rows={deliveryAddresses}
            showAction={true}
            deleteCallBack={deleteDeliveryAddress}
            editCallBack={editDeliveryAddress}
          ></DeliveryAddressGrid>
        </div>
      </div>
      <AddDeliveryAddressModal
        shouldShowModal={shouldShowAddDeliveryModal}
        closeCb={closeAddDeliveryModal}
        submitCallBack={addOrUpdateDeliveryAddress}
        deliveryAddress={selectedDeliveryAddress}
      ></AddDeliveryAddressModal>
    </>
  );
}

export default DeliveryAddressPanel;
