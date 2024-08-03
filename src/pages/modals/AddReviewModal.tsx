import React from 'react'
import { Modal } from 'react-bootstrap'
import AccountPage from '../AccountPage'

function AddReviewModal() {
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
          <AccountPage></AccountPage>
        </Modal.Body>
      </Modal>
  )
}

export default AddReviewModal