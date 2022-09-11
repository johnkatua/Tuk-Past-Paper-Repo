import React from "react";
import { Modal, Button } from "react-bootstrap";

const DisplayPaperModal = ({ show, close, content, title, button }) => {
  return (
    <Modal
      show={show}
      onHide={close}
      size="lg"
      style={{
        height: "750px",
      }}
    >
      <Modal.Header closeButton>
        <h3>{title}</h3>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>{button}</Modal.Footer>
    </Modal>
  );
};

export default DisplayPaperModal;
