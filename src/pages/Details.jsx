import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="details--container">
      Details
      <button onClick={() => navigate("/")}>Welcome</button>
    </div>
  );
};

export default Details;
