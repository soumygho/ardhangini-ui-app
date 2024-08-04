import React, { useContext } from "react";
import { headerContext } from "../../context/header.context";
import { Modal } from "react-bootstrap";
import SelectDeliveryAddress from "../SelectDeliveryAddress";

function SelectDeliveryModal() {
    const context = useContext(headerContext);
  return (
    <Modal
        show={context?.shouldShowSelectDeliveryModal}
        onHide={context?.closeDeliverySelectionModal}
        size="sm"
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
         <SelectDeliveryAddress></SelectDeliveryAddress>
        </Modal.Body>
      </Modal>
  );
}

export default SelectDeliveryModal;
