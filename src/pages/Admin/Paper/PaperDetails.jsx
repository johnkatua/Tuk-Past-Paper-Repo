import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFaculties } from "../../../features/faculty/facultySlice";
import { fetchCourses } from "../../../features/course/courseSlice";
import { createPaper, resetPaper, updatePaper } from "../../../features/paper/paperSlice";

const PaperDetails = () => {
  const dispatch = useDispatch();
  const { faculties } = useSelector((state) => state.faculty);
  const { courses } = useSelector((state) => state.courses);
  const { paper } = useSelector((state) => state.papers);
  const [title, setTitle] = useState("Select a paper");
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
    if (paper !== null) {
      setItem({
        name: paper.name,
        academicYear: paper.academicYear,
        year: paper.year,
        status: paper.status,
        facultyId: paper.facultyId,
        courseId: paper.courseId,
      });
    }
  }, [paper, setItem]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("academicYear", item.academicYear);
    formData.append("status", item.status);
    formData.append("year", item.year);
    formData.append("courseId", item.courseId);
    formData.append("facultyId", item.facultyId);
    formData.append("file", paperFile);

    if (paper?.id) {
      await dispatch(updatePaper({ id: paper?.id, values: formData}));
    } else {
      await dispatch(createPaper(formData));
    }
  };

  const handleRemove = () => {
    dispatch(resetPaper());
    setItem({
      name: "",
      academicYear: "",
      year: "",
      status: "",
      facultyId: "",
      courseId: "",
    });
    setPaperFile(null);
  };


  return (
    <div className="admin--dashboard__details">
      <div className="details--header">{paper?.id ? paper.name : title}</div>
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
      <div
        className="form--container__group"
      >
        <div>Select Paper Status</div>
        <div className="form--container__status">
          <div className="form--status__firstRow">
            <span>Main Exam</span>
            <input
              type="radio"
              value="mainExam"
              name="status"
              checked={item.status === "mainExam"}
              onChange={handleChange}
            />
          </div>
          <div className="form--status__secondRow">
            <span>Cat</span>
            <input
              type="radio"
              value="cat"
              name="status"
              checked={item.status === "cat"}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <hr />
      <div
        className="form--container__group"
      >
        <div>Select Paper Year</div>
        <div className="form--container__year">
          <div className="form--year__firstRow">
            <div className="form--year__firstYear">
              <span>First Year</span>
              <input
                type="radio"
                value="firstYear"
                name="year"
                checked={item.year === "firstYear"}
                onChange={handleChange}
              />
            </div>
            <div className="form--year__secondYear">
              <span>Second Year</span>
              <input
                type="radio"
                value="secondYear"
                name="year"
                checked={item.year === "secondYear"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form--year__secondRow">
            <div className="form--year__firstYear">
              <span>Third Year</span>
              <input
                type="radio"
                value="thirdYear"
                name="year"
                checked={item.year === "thirdYear"}
                onChange={handleChange}
              />
            </div>
            <div className="form--year__secondYear">
              <span>Fourth Year</span>
              <input
                type="radio"
                value="fourthYear"
                name="year"
                checked={item.year === "fourthYear"}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="form--container__group"
      >
        <div>Select Faculty</div>
        <div className="form--container__faculties">
          {faculties.map((faculty) => (
            <div className="form--faculties" key={faculty._id}>
              <span>{faculty.acronym}</span>
              <input
                type="radio"
                value={faculty._id}
                name="facultyId"
                checked={item.facultyId === faculty._id}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="form--container__group">
        <select
          size="5"
          name="courseId"
          value={item.courseId}
          onChange={handleChange}
        >
          <optgroup label="Select a course">
            {courses.map((course) => (
              <option key={course._id} value={course._id} selected>
                {course.name}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      <div className="form--container__btns">
        <button disabled={paperFile === null} className="details--btn" onClick={handleSubmit}>
          Save
        </button>
        {paper?.id && (
          <button className="details--btn" onClick={handleRemove}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default PaperDetails;
