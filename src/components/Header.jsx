import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector(state => state.auth);
  console.log(user);
  const navigate = useNavigate();
  return (
    <div className="header--container">
      <h1 onClick={() => navigate("/")}>Tuk Past Past Repo</h1>
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
    </div>
  );
};

export default Header;
