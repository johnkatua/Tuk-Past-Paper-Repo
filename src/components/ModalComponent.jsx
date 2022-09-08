import { Modal } from 'react-bootstrap';

const ModalComponent = ({ show, close, content }) => {
  return (
    <Modal
      show={show}
      onHide={close}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {content}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={close}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent;