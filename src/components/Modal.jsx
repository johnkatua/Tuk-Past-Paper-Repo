import React from 'react';
import { Modal } from 'react-bootstrap';

const DisplayPaperModal = ({ show, close, content }) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {content}
      </Modal.Body>
    </Modal>
  )
}

export default DisplayPaperModal;