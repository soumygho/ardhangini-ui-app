import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import AccountPage from '../AccountPage'
import { headerContext } from '../../context/header.context'

function AccountDetailsModal() {
  const context = useContext(headerContext);
  return (
    <Modal
        show={context?.shouldShowAccountModal}
        onHide={context?.hideAccountModal}
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

export default AccountDetailsModal