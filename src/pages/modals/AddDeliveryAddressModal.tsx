import React from "react";
import { Modal } from "react-bootstrap";
import AddDeliveryPage from "../AddDeliveryPage";
interface AddDeliveryAddressModalProps {
  shouldShowModal: boolean;
  closeCb: () => void;
}

function AddDeliveryAddressModal({
  shouldShowModal,
  closeCb,
}: AddDeliveryAddressModalProps) {
  return (
    <Modal show={shouldShowModal} onHide={closeCb} size="sm" centered={true}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddDeliveryPage></AddDeliveryPage>
      </Modal.Body>
    </Modal>
  );
}

export default AddDeliveryAddressModal;
