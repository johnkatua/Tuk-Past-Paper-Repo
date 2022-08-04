import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="details--container">
      <div>A</div>
      <div>B</div>
    </div>
  );
};

export default Details;
