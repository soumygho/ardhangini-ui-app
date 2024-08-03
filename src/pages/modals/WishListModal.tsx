import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap';
import WishList from '../WishList';
import { rootContext } from '../../context/root.context';
import { headerContext } from '../../context/header.context';

function WishListModal() {
    const root = useContext(rootContext);
    const context = useContext(headerContext);
    return (
      <Modal
        show={context?.showWishListModal}
        onHide={context?.handleWishListCloseModal}
        size="sm"
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
  
        <Modal.Body>
          <WishList></WishList>
        </Modal.Body>
      </Modal>
    )
}

export default WishListModal