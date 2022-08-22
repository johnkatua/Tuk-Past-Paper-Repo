import React from 'react';
import { Modal } from 'react-bootstrap';

const Modal = ({ show, close }) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        Hello
      </Modal.Body>
    </Modal>
  )
}

export default Modal