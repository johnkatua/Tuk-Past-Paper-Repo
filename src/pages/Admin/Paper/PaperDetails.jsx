import { useState } from "react";

const PaperDetails = () => {
  const [title, setTitle] = useState("Select a paper");
  const [item, setItem] = useState({
    name: "",
    academicYear: "",
    status: "",
    year: "",
    file: "",
    courseId: "",
    faculty: "",
  });

  const handleChange = (e) => {
    console.log("hello");
  };

  return (
    <div className="admin--dashboard__details">
      <div className="details--header">
        {title}
        {/* {selectedFaculty?._id ? selectedFaculty.name : title} */}
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
        <label>AcademicYear</label>
        <input
          type="text"
          name="academicYear"
          placeholder="Academic Year"
          value={item.academicYear}
          onChange={handleChange}
        />
      </div>
      <div className="form--container__group">
        <label>File</label>
        <input type="file" value={item.academicYear} onChange={handleChange} />
      </div>
      <div className="form--container__group">
        <div>Select Paper Status</div>
        <div className="form--container__status">
          <div className="form--status__firstRow">
            <span>Main Exam</span>
            <input type="radio" value="mainExam" name="status" />
          </div>
          <div className="form--status__secondRow">
            <span>Cat</span>
            <input type="radio" value="cat" name="status" />
          </div>
        </div>
      </div>
      <hr />
      <div className="form--container__group">
        <div>Select Paper Year</div>
        <div className="form--container__year">
          <div className="form--year__firstRow">
            <div className="form--year__firstYear">
              <span>First Year</span>
              <input type="radio" value="firstYear" name="year" />
            </div>
            <div className="form--year__secondYear">
              <span>Second Year</span>
              <input type="radio" value="secondYear" name="year" />
            </div>
          </div>
          <div className="form--year__secondRow">
            <div className="form--year__firstYear">
              <span>Third Year</span>
              <input type="radio" value="thirdYear" name="year" />
            </div>
            <div className="form--year__secondYear">
              <span>Fourth Year</span>
              <input type="radio" value="fourthYear" name="year" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="form--container__btns">
        <button className="details--btn" onClick={() => handleSubmit()}>
          Save
        </button>

        {/* {selectedFaculty?._id && (
          <button className="details--btn" onClick={() => handleRemove()}>
            Cancel
          </button>
        )} */}
      </div>
    </div>
  );
};

export default PaperDetails;
