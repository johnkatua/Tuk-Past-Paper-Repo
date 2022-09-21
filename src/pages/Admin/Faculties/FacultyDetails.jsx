import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FacultyDetails = () => {
  const [title, setTitle] = useState('Select a faculty')
  const { faculty } = useSelector((state) => state.faculty);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  console.log('selected', selectedFaculty);
  const [item, setItem] = useState({
    name: "",
    acronym: "",
    description: ""
  });

  const handleChange = e => {
    setItem((item) => ({
      ...item,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if (faculty !== null) {
      setSelectedFaculty(faculty);
    }
    if (selectedFaculty) {
      setItem({
        name: selectedFaculty.name,
        acronym: selectedFaculty.acronym,
        description: selectedFaculty.description
      })
    }
  }, [faculty, selectedFaculty]);

  const handleRemove = () => {
    setItem({
      name: "",
      acronym: "",
      description: ""
    });
  };
  
  return (
    <div className="admin--dashboard__details">
      <div className="details--header">
        {selectedFaculty ? selectedFaculty.name : title}
      </div>
      <div className="form--container__group">
        <label>Name</label>
        <input type="text" name="name" placeholder="name" value={item.name} onChange={handleChange} />
      </div>
      <div className="form--container__group">
        <label>Acronym</label>
        <input type="text" name="acronym" placeholder="acronym" value={item.acronym} onChange={handleChange} />
      </div>
      <div className="form--container__group">
        <label>Description</label>
        <textarea placeholder="description" name="description" value={item.description} onChange={handleChange}></textarea>
      </div>
      <div className="form--container__btns">
        <button className="details--btn">Save</button>
        <button className="details--btn" onClick={() => handleRemove()}>Cancel</button>
      </div>
    </div>
    );
};

export default FacultyDetails;
