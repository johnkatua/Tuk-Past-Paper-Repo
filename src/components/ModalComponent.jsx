import { Modal } from 'react-bootstrap';

const ModalComponent = ({ show, close, content }) => {
  return (
    <Modal
      show={show}
      close={close}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {content}
      </Modal.Body>
      <Modal.Footer>
        <p>Fuck you!!!</p>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent;