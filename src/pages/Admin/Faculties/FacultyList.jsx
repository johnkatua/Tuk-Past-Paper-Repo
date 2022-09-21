import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaculties } from "../../../features/faculty/facultySlice";

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
            <div className="admin--list">
                <div>{faculty.name}</div>
                <div>{faculty.description}</div>
            </div>
            <div>
              Delete
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
