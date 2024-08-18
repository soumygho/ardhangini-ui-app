import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { headerContext } from "../../context/header.context";
import CartDetailsPage from "../CartDetailsPage";
import { cartMock } from "../../mock/product.mock";

function CartDetailsModal() {
  const context = useContext(headerContext);
  return (
    <Modal
      show={context?.showCartModal}
      onHide={context?.handleCartCloseModal}
      size="sm"
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <CartDetailsPage isOrderDetails={false}></CartDetailsPage>
      </Modal.Body>
    </Modal>
  );
}

export default CartDetailsModal;
