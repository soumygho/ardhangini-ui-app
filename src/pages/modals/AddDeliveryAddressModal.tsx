import React from 'react'
import { Modal } from 'react-bootstrap'
import AddDeliveryPage from '../AddDeliveryPage'

function AddDeliveryAddressModal() {
  return (
    <Modal
        show={true}
//        onHide={}
        size="sm"
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <AddDeliveryPage></AddDeliveryPage>
        </Modal.Body>
      </Modal>
  )
}

export default AddDeliveryAddressModal