import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome--container">
      Welcome
      <button onClick={() => navigate("/details")}>Details page</button>
    </div>
  );
};

export default Welcome;
