import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCourse,
  resetCourse,
  updateCourse,
} from "../../../features/course/courseSlice";
import { fetchFaculties } from "../../../features/faculty/facultySlice";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Select a course");
  const { faculties } = useSelector((state) => state.faculty);
  const { course } = useSelector((state) => state.courses);
  const [item, setItem] = useState({
    name: "",
    courseCode: "",
    status: "",
    facultyId: "",
  });

  useEffect(() => {
    dispatch(fetchFaculties());
    if (course !== null) {
      setItem({
        name: course.name,
        courseCode: course.courseCode,
        status: course.status,
        facultyId: course.facultyId,
      });
    }
  }, [course, setItem]);

  const handleChange = (e) => {
    setItem((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (course?._id) {
      console.log("updated", item);
      dispatch(updateCourse({ id: course._id, values: item }));
    } else {
      dispatch(createCourse(item));
    }
  };

  const handleRemove = () => {
    dispatch(resetCourse());
    setItem({
      name: "",
      courseCode: "",
      status: "",
      facultyId: "",
    });
  };

  return (
    <div className="admin--dashboard__details">
      <div className="details--header">{title}</div>
      <div className="form--container__group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter course name"
          value={item.name}
          onChange={handleChange}
        />
      </div>
      <div className="form--container__group">
        <label>Course Code</label>
        <input
          type="text"
          name="courseCode"
          placeholder="Enter course code e.g ABBQ"
          value={item.courseCode}
          onChange={handleChange}
        />
      </div>
      <div className="form--container__group">
        <div>Select Course Status</div>
        <div className="form--container__status">
          <div className="form--status__firstRow">
            <span>Degree</span>
            <input
              type="radio"
              value="degree"
              name="status"
              checked={item.status === "degree"}
              onChange={handleChange}
            />
          </div>
          <div className="form--status__secondRow">
            <span>Diploma</span>
            <input
              type="radio"
              value="diploma"
              name="status"
              checked={item.status === "diploma"}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="form--container__group" value={item.facultyId}>
        <div>Select Faculty</div>
        <div className="form--container__faculties">
          {faculties.map((faculty) => (
            <div className="form--faculties" key={faculty._id}>
              <span>{faculty.acronym}</span>
              <input
                type="radio"
                value={faculty._id}
                name="facultyId"
                checked={item.facultyId === faculty._id}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="form--container__btns">
        <button className="details--btn" onClick={handleSubmit}>
          Save
        </button>
        {course?._id && (
          <button className="details--btn" onClick={handleRemove}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
