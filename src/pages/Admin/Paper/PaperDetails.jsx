import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaculties } from "../../../features/faculty/facultySlice";
import { fetchCourses } from "../../../features/course/courseSlice";
import { createPaper } from "../../../features/paper/paperSlice";

const PaperDetails = () => {
  const dispatch = useDispatch();
  const { faculties } = useSelector((state) => state.faculty);
  const { courses } = useSelector((state) => state.courses);
  const { paper } = useSelector((state) => state.papers);
  const [title, setTitle] = useState("Select a paper");
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [paperFile, setPaperFile] = useState(null);
  const [item, setItem] = useState({
    name: "",
    academicYear: "",
    status: "",
    year: "",
    courseId: "",
    facultyId: "",
  });

  const handleChange = (e) => {
    setItem((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  const saveFile = (e) => {
    setPaperFile(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(fetchFaculties());
    dispatch(fetchCourses());
  }, [faculties]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("academicYear", item.academicYear);
    formData.append("status", item.status);
    formData.append("year", item.year);
    formData.append("courseId", item.courseId);
    formData.append("facultyId", item.facultyId);
    formData.append("file", paperFile);

    await dispatch(createPaper(formData));
  };

  console.log(item);

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
        <input
          type="file"
          name="file"
          placeholder="File"
          accept=".pdf"
          formEncType="multipart/form-data"
          onChange={saveFile}
        />
      </div>
      <div className="form--container__group" value={item.status} onChange={handleChange}>
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
      <div className="form--container__group" value={item.year} onChange={handleChange}>
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
      <div className="form--container__group" value={item.facultyId} onChange={handleChange}>
        <div>Select Faculty</div>
        <div className="form--container__faculties">
          {faculties.map((faculty) => (
            <div className="form--faculties">
              <span>{faculty.acronym}</span>
              <input type="radio" value={faculty._id} name="facultyId" />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="form--container__group">
        <select size="5" name="courseId" value={item.courseId} onChange={handleChange}>
          <optgroup label="Select a course">
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
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
