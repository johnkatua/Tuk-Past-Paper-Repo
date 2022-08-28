import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../features/modal/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { show } = useSelector(state => state.modal);
  console.log(show);
  const navigate = useNavigate();

  const handleToolTip = () => {
    if (show) {
      dispatch(closeModal());
    } else {
      dispatch(openModal())
    }
  }

  return (
    <div className="header--container">
      <h1 onClick={() => navigate("/")}>Tuk Past Past Repo</h1>
      {user ? (
        <div onClick={handleToolTip}>{user}</div>
      ) : (
        <div className="header--btns">
          <button
            className="header--btns__login"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="header--btns__register"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
