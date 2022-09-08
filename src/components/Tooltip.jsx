import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";
import ModalComponent from "./ModalComponent";

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
      <div className="tooltip--details" onClick={() => dispatch(openModal())}>
        Add Paper
      </div>
      <hr />
      <ModalComponent
        show={showModal}
        close={() => dispatch(closeModal())}
        // content={<div>Hello</div>}
      />
      <div className="tooltip--details" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Tooltip;
