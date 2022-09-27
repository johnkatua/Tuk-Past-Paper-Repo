import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createFaculty,
  fetchFaculties,
  resetFaculty,
  updateFaculty
} from "../../../features/faculty/facultySlice";

const FacultyDetails = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Select a faculty");
  const { faculty } = useSelector((state) => state.faculty);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [item, setItem] = useState({
    name: "",
    acronym: "",
    description: "",
  });

  const handleChange = (e) => {
    setItem((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (faculty !== null) {
      setSelectedFaculty(faculty);
    }
    if (selectedFaculty) {
      setItem({
        name: selectedFaculty.name,
        acronym: selectedFaculty.acronym,
        description: selectedFaculty.description,
      });
    }
  }, [faculty, selectedFaculty]);

  const handleRemove = () => {
    setSelectedFaculty(null);
    dispatch(resetFaculty());
    setItem({
      name: "",
      acronym: "",
      description: "",
    });
  };

  const handleSubmit = () => {
    if (selectedFaculty?._id) {
      console.log('clicked', selectedFaculty?._id);
      dispatch(updateFaculty({ id: selectedFaculty._id, values: item }));
      dispatch(fetchFaculties());
    } else {
      console.log('not clicked', selectedFaculty?._id);
      dispatch(createFaculty(item));
    }
  };

  return (
    <div className="admin--dashboard__details">
      <div className="details--header">
        {selectedFaculty?._id ? selectedFaculty.name : title}
      </div>
      <div className="form--container__group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={item.name}
          onChange={handleChange}
        />
      </div>
      <div className="form--container__group">
        <label>Acronym</label>
        <input
          type="text"
          name="acronym"
          placeholder="acronym"
          value={item.acronym}
          onChange={handleChange}
        />
      </div>
      <div className="form--container__group">
        <label>Description</label>
        <textarea
          placeholder="description"
          name="description"
          value={item.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form--container__btns">
        <button className="details--btn" onClick={() => handleSubmit()}>
          Save
        </button>

        {selectedFaculty?._id && (
          <button className="details--btn" onClick={() => handleRemove()}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default FacultyDetails;
