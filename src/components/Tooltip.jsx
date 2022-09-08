import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openReusableModal, closeReusableModal } from "../features/modal/modalSlice";
import DisplayPaperModal from "./Modal";

const Tooltip = ({ logout }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showModal } = useSelector(state => state.modal);
  console.log(showModal);
  return (
    <div className="tooltip--container">
      <div className="tooltip--details">Account Settings</div>
      <hr />
      <div className="tooltip--details" onClick={() => navigate("/favorite")}>
        My papers
      </div>
      <hr />
      <div className="tooltip--details" onClick={() => dispatch(openReusableModal())}>
        Add Paper
      </div>
      <hr />
      <DisplayPaperModal 
        show={showModal}
        close={() => dispatch(closeReusableModal())}
        content={<div>Hi</div>}
      />
      <div className="tooltip--details" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Tooltip;
