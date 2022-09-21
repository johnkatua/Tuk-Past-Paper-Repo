import React from "react";

const FacultyDetails = () => {
  return (
    <div className="admin--dashboard__details">
      <div>Header</div>
      <div className="form--container__group">
        <label>Name</label>
        <input type="text" name="name" placeholder="name" />
      </div>
      <div className="form--container__group">
        <label>Acronym</label>
        <input type="text" name="acronym" placeholder="acronym" />
      </div>
      <div className="form--container__group">
        <label>Description</label>
        <textarea placeholder="description"></textarea>
      </div>
    </div>
    );
};

export default FacultyDetails;
