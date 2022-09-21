import React from "react";
import FacultyDetails from "./FacultyDetails";
import FacultyList from "./FacultyList";

const FacultyPage = () => {
  return (
    <div className="admin--container">
      <FacultyList />
      <FacultyDetails />
    </div>
  );
};

export default FacultyPage;
