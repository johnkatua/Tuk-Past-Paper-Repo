import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const AddPaperForm = (props) => {
  console.log(props);
  return (
    <Form>
      <Row className="mb-4">
        <Col>
          <Form.Control type="text" placeholder="Name" value={props.name} onChange={props.handleChange} />
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
      </Row>
    </Form>
  );
};

export default AddPaperForm;
