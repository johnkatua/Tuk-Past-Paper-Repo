import React from "react";

const Tooltip = ({ logout }) => {
  return (
    <div className="tooltip--container">
      <div className="tooltip--details">Account Settings</div>
      <hr />
      <div className="tooltip--details">My papers</div>
      <hr />
      <div className="tooltip--details" onClick={logout}>Logout</div>
    </div>
  );
};

export default Tooltip;
