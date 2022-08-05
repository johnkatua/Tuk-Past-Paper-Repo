import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header--container">
      <h1>Tuk Past Past Repo</h1>
      <div className="header--btns">
        <button className="header--btns__login" onClick={() => navigate("/")}>
          Login
        </button>
        <button
          className="header--btns__register"
          onClick={() => navigate("/paper")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
