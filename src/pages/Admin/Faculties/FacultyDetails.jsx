import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FacultyDetails = () => {
  const [title, setTitle] = useState('Select a faculty')
  const { faculty } = useSelector((state) => state.faculty);
  console.log(faculty);

  useEffect(() => {
    if (faculty !== null) {
      setTitle(faculty.name);
    }
  }, [title, faculty])

  console.log(title);
  
  return (
    <div className="admin--dashboard__details">
      <div className="details--header">
        {title}
        {/* {faculty == {} ? (<h3>{faculty.name}</h3>) : (<h2>Select a faculty</h2>)} */}
      </div>
      <div className="form--container__group">
        <label>Name</label>
        <input type="text" name="name" placeholder="name" />
      </div>
      <div className="form--container__group">
        <label>Acronym</label>
        <input type="text" name="acronym" placeholder="acronym" />
      </div>
      <div className="form--container__group">
        <label>Description</label>
        <textarea placeholder="description"></textarea>
      </div>
      <div className="form--container__btns">
        <button className="details--btn">Save</button>
        <button className="details--btn">Cancel</button>
      </div>
    </div>
    );
};

export default FacultyDetails;
