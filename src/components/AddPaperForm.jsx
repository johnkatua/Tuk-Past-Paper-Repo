import React from 'react'
import { Form, Col, Row } from 'react-bootstrap';

const AddPaperForm = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
      </Row>
       <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
      </Row>
       <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
      </Row>
       <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
      </Row>
    </Form>
  )
}

export default AddPaperForm;