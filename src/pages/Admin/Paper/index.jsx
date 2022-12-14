import React from "react";
import PaperDetails from "./PaperDetails";
import PaperList from "./PaperList";

const PaperPage = () => {
  return (
    <div className="admin--container">
      <PaperList />
      <PaperDetails />
    </div>
  );
};

export default PaperPage;
