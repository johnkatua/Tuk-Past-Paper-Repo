import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FacultyDetails = () => {
  const [title, setTitle] = useState('Select a faculty')
  const { faculty } = useSelector((state) => state.faculty);
  const [item, setItem] = useState({
    name: faculty?.name,
    acronym: faculty?.acronym,
    description: faculty?.description
  })

  console.log(item);

  useEffect(() => {
    if (faculty !== null) {
      setTitle(faculty.name);
    }
  }, [title, faculty])
  
  return (
    <div className="admin--dashboard__details">
      <div className="details--header">
        {title}
      </div>
      <div className="form--container__group">
        <label>Name</label>
        <input type="text" name="name" placeholder="name" value={item.name} />
      </div>
      <div className="form--container__group">
        <label>Acronym</label>
        <input type="text" name="acronym" placeholder="acronym" value={item.acronym} />
      </div>
      <div className="form--container__group">
        <label>Description</label>
        <textarea placeholder="description" name="description" value={item.description}></textarea>
      </div>
      <div className="form--container__btns">
        <button className="details--btn">Save</button>
        <button className="details--btn">Cancel</button>
      </div>
    </div>
    );
};

export default FacultyDetails;
