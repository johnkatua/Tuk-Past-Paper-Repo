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

const Tooltip = ({ logout }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.modal);
  const [addPaper, setAddPaper] = useState({
    name: ''
  })
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
        content={<AddPaperForm name={addPaper.name} />}
        button={<Button>Create</Button>}
      />
      <div className="tooltip--details" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Tooltip;
