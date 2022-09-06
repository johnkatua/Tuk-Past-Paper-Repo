import React from "react";
import { useNavigate } from "react-router-dom";

const Tooltip = ({ logout }) => {
  const navigate = useNavigate();
  return (
    <div className="tooltip--container">
      <div className="tooltip--details">Account Settings</div>
      <hr />
      <div className="tooltip--details" onClick={() => navigate("/favorite")}>
        My papers
      </div>
      <hr />
      <div className="tooltip--details" onClick={logout}>
        Logout
      </div>
    </div>
  );
};

export default Tooltip;
