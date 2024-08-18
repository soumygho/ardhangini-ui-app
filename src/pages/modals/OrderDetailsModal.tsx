import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { headerContext } from "../../context/header.context";
import { OrderResponse } from "../../services/openapi";
import OrderDetailsPage from "../OrderDetailsPage";
interface OrderDetailsModalProps {
  orderDetails?: OrderResponse;
  showModal: boolean;
  handleCloseModal: () => void;
}
function OrderDetailsModal({
  orderDetails,
  showModal,
  handleCloseModal,
}: OrderDetailsModalProps) {
  const context = useContext(headerContext);
  return (
    <Modal show={showModal} onHide={handleCloseModal} size="sm" centered={true}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {orderDetails && (
          <OrderDetailsPage data={orderDetails}></OrderDetailsPage>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default OrderDetailsModal;
