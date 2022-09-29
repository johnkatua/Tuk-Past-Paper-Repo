import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFaculties,
  getSelectedFaculty,
  deleteFaculty,
} from "../../../features/faculty/facultySlice";
import { AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

const FacultyList = () => {
  const dispatch = useDispatch();
  const { faculties } = useSelector((state) => state.faculty);
  
  useEffect(() => {
    if (faculties.length === 0) {
      dispatch(fetchFaculties());
    }
  }, [faculties]);

  return (
    <div className="admin--dashboard__list">
      <h3 className="admin--list__header">Faculties</h3>
      <ul>
        {faculties.map((faculty) => (
          <li key={faculty._id}>
            <div
              className="admin--list"
              onClick={() => dispatch(getSelectedFaculty(faculty))}
            >
              <div className="list--header">{faculty.name}</div>
              <div className="list--details">{faculty.description}</div>
            </div>
            <IconContext.Provider
              value={{ color: "red", size: "1.2rem", title: "Delete" }}
            >
              <div
                className="list--delete"
                onClick={() => dispatch(deleteFaculty(faculty._id))}
              >
                <AiOutlineDelete />
              </div>
            </IconContext.Provider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
