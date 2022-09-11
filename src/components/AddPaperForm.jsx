import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const AddPaperForm = () => {
  return (
    <Form>
      <Row className="mb-4">
        <Col>
          <Form.Control placeholder="Name" />
        </Col>
        <Col>
          <Form.Control placeholder="File" />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Control placeholder="Year" />
        </Col>
        <Col>
          <Form.Control placeholder="Academic Year" />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select>
            <option>Open this select menu</option>
            <option>Main Exam</option>
            <option>Cat</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select>
            <option>Open this select menu</option>
            <option>FSST</option>
            <option>FEBE</option>
            <option>FAST</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select>
            <option>Open this select menu</option>
            <option>Degree</option>
            <option>Diploma</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select>
            <option>Open this select menu</option>
            <option>FSST</option>
            <option>FEBE</option>
            <option>FAST</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default AddPaperForm;
