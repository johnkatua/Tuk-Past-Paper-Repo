import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  openReusableModal,
  closeReusableModal,
} from "../features/modal/modalSlice";
import DisplayPaperModal from "./Modal";
import AddPaperForm from "./AddPaperForm";
import { Button } from "react-bootstrap";
import { createPaper } from "../features/paper/paperSlice";

const Tooltip = ({ logout }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.modal);
  const [paperFile, setPaperFile] = useState(null);
  const [addPaper, setAddPaper] = useState({
    name: "",
    year: "",
    academicYear: "",
    status: "",
    courseId: "",
    facultyId: "",
  });

  console.log(addPaper);

  console.log(paperFile);

  const handleChange = (e) => {
    setAddPaper((addPaper) => ({
      ...addPaper,
      [e.target.name]: e.target.value,
    }));
  };

  const saveFile = (e) => {
    setPaperFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", addPaper.name);
    formData.append("year", addPaper.year);
    formData.append("academicYear", addPaper.academicYear);
    formData.append("status", addPaper.status);
    formData.append("courseId", addPaper.courseId);
    formData.append("facultyId", addPaper.facultyId);
    formData.append("file", paperFile);

    await dispatch(createPaper(formData));
  };

  return (
    <div className="tooltip--container">
      <div className="tooltip--details">Account Settings</div>
      <hr />
      <div className="tooltip--details" onClick={() => navigate("/favorite")}>
        My papers
      </div>
      <hr />
      <div
        className="tooltip--details"
        onClick={() => dispatch(openReusableModal())}
      >
        Add Paper
      </div>
      <hr />
      <DisplayPaperModal
        title={"Create Paper"}
        show={showModal}
        close={() => dispatch(closeReusableModal())}
        content={
          <AddPaperForm
            name={addPaper.name}
            year={addPaper.year}
            academicYear={addPaper.academicYear}
            status={addPaper.status}
            courseId={addPaper.courseId}
            facultyId={addPaper.facultyId}
            handleChange={handleChange}
            saveFile={saveFile}
          />
        }
        button={<Button onClick={handleSubmit}>Create</Button>}
      />
      <div className="tooltip--details" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Tooltip;
