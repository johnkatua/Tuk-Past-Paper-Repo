import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const AddPaperForm = (props) => {
  return (
    <Form>
      <Row className="mb-4">
        <Col>
          <Form.Control type="text" placeholder="Name" value={props.name} onChange={props.handleChange} />
        </Col>
        <Col>
          <Form.Control type="file" placeholder="File" formEncType="multipart/form-data" onChange={props.saveFile} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Control placeholder="Year" type="text" value={props.year} onChange={props.handleChange} />
        </Col>
        <Col>
          <Form.Control placeholder="Academic Year" type="text" value={props.academicYear} onChange={props.handleChange} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select value={props.status} onChange={props.handleChange}>
            <option>Open this select menu</option>
            <option>Main Exam</option>
            <option>Cat</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select value={props.facultyId} onChange={props.handleChange}>
            <option>Open this select menu</option>
            <option>FSST</option>
            <option>FEBE</option>
            <option>FAST</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select value={props.courseId} onChange={props.handleChange}>
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
