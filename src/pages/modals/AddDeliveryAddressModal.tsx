import React from "react";
import { Modal } from "react-bootstrap";
import AddDeliveryPage from "../AddDeliveryPage";
import { DeliveryAddressEntity, UpdateDeliveryAddressDto } from "../../services/openapi";
interface AddDeliveryAddressModalProps {
  shouldShowModal: boolean;
  closeCb: () => void;
  submitCallBack: (data: UpdateDeliveryAddressDto) => void;
  deliveryAddress?: DeliveryAddressEntity;
}

function AddDeliveryAddressModal({
  shouldShowModal,
  closeCb,
  submitCallBack,
}: AddDeliveryAddressModalProps) {
  return (
    <Modal show={shouldShowModal} onHide={closeCb} size="sm" centered={true}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddDeliveryPage submitCallBack={submitCallBack}></AddDeliveryPage>
      </Modal.Body>
    </Modal>
  );
}

export default AddDeliveryAddressModal;
