import { useEffect } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getCourseStatus } from "../features/course/courseSlice";
import { getFacultyStatus } from "../features/faculty/facultySlice";

const AddPaperForm = (props) => {
  const { faculties } = useSelector((state) => state.faculty);
  const { courses } = useSelector((state) => state.courses);
  const facultyStatus = useSelector(getFacultyStatus);
  const courseStatus = useSelector(getCourseStatus);
  return (
    <Form>
      <Row className="mb-4">
        <Col>
          <Form.Control
            type="text"
            placeholder="Name"
            value={props.name}
            onChange={props.handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="file"
            placeholder="File"
            formEncType="multipart/form-data"
            onChange={props.saveFile}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Control
            placeholder="Year"
            type="text"
            value={props.year}
            onChange={props.handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Academic Year"
            type="text"
            value={props.academicYear}
            onChange={props.handleChange}
          />
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
            {faculties?.map((faculty) => (
              <option key={faculty._id} value={faculty._id}>
                {faculty.acroynm}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select value={props.courseId} onChange={props.handleChange}>
            <option>Open this select menu</option>
            {courses?.map((course) => (
              <option key={course._id} value={course._id}>
                {course.status}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default AddPaperForm;
