import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconContext } from "react-icons/lib";
import { AiOutlineDelete } from "react-icons/ai";
import {
  deleteCourse,
  fetchCourses,
  setCourse,
} from "../../../features/course/courseSlice";

const CourseList = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <div className="admin--dashboard__list">
      <h3 className="admin--list__header">Courses</h3>
      <div className="admin--list__container">
        <ul>
          {courses.map((course) => (
            <li key={course._id}>
              <div
                className="admin--list"
                onClick={() => dispatch(setCourse(course))}
              >
                <div className="list--header">{course.name}</div>
                <div className="list--details">{course.courseCode}</div>
              </div>
              <IconContext.Provider
                value={{ color: "red", size: "1.2rem", title: "Delete " }}
              >
                <div
                  className="list--delete"
                  onClick={() => dispatch(deleteCourse(course._id))}
                >
                  <AiOutlineDelete />
                </div>
              </IconContext.Provider>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseList;
