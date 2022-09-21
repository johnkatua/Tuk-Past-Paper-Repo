import { useSelector } from "react-redux";

const FacultyList = () => {
  const { faculties } = useSelector((state) => state.faculty);
  console.log(faculties);
  return (
    <div className="admin--dashboard__list">
      <h3 className="admin--list__header">Faculties</h3>
      <div className="admin--list">A</div>
    </div>
  );
};

export default FacultyList;
