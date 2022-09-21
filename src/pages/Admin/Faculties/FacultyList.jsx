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
      <div className="admin--list">A</div>
    </div>
  );
};

export default FacultyList;
