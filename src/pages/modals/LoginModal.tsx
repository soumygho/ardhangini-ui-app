import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import LoginPage from '../LoginPage'
import { rootContext } from '../../context/root.context'

function LoginModal() {
  const context = useContext(rootContext);
  return (
    <Modal
      show={context?.showLoginModal}
      onHide={context?.handleLoginCloseModal}
      size="sm"
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <LoginPage></LoginPage>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal