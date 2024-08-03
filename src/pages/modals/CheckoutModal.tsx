import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import CheckoutPage from '../CheckoutPage'
import { headerContext } from '../../context/header.context'

function CheckoutModal() {
  const context = useContext(headerContext);
  return (
    <Modal
        show={context?.shouldShowCheckOutModal}
        onHide={context?.closeCheckOutModal}
        size="sm"
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <CheckoutPage></CheckoutPage>
        </Modal.Body>
      </Modal>
  )
}

export default CheckoutModal