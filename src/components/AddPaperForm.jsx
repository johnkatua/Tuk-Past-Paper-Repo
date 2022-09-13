import { useEffect } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses, getCourseStatus } from "../features/course/courseSlice";
import {
  fetchFaculties,
  getFacultyStatus,
} from "../features/faculty/facultySlice";

const AddPaperForm = (props) => {
  const dispatch = useDispatch();
  const { faculties } = useSelector((state) => state.faculty);
  const { courses } = useSelector((state) => state.courses);
  const facultyStatus = useSelector(getFacultyStatus);
  const courseStatus = useSelector(getCourseStatus);

  useEffect(() => {
    if (facultyStatus === "idle" && courseStatus === "idle") {
      dispatch(fetchCourses());
      dispatch(fetchFaculties());
    }
  }, [facultyStatus, courseStatus]);

  return (
    <Form>
      <Row className="mb-4">
        <Col>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={props.name}
            onChange={props.handleChange}
          />
        </Col>
        <Col>
          <Form.Control
            type="file"
            name="file"
            placeholder="File"
            accept=".pdf"
            formEncType="multipart/form-data"
            onChange={props.saveFile}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select
            name="year"
            value={props.year}
            onChange={props.handleChange}
          >
            <option disabled>Select the year</option>
            <option value={"firstYear"}>First Year</option>
            <option value={"secondYear"}>Second Year</option>
            <option value={"thirdYear"}>Third Year</option>
            <option value={"fourthYear"}>Fourth Year</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Control
            placeholder="Academic Year"
            name="academicYear"
            type="text"
            value={props.academicYear}
            onChange={props.handleChange}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select
            name="status"
            value={props.status}
            onChange={props.handleChange}
          >
            <option>Open this select menu</option>
            <option value={"mainExam"}>Main Exam</option>
            <option value={"cat"}>Cat</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            name="facultyId"
            value={props.facultyId}
            onChange={props.handleChange}
          >
            <option disabled>Select faculty</option>
            {faculties?.map((faculty) => (
              <option key={faculty._id} value={faculty._id}>
                {faculty.acronym}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select
            name="courseId"
            value={props.courseId}
            onChange={props.handleChange}
          >
            <option disabled>Select course</option>
            {courses?.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default AddPaperForm;
