import React from "react";

const Details = () => {
  return (
    <div className="details--container">
      <div className="details--search__bar">
        <input type="search" />
        <div>
          <label htmlFor="courses">Choose a course:</label>
          <select name="courses" id="courses">
            <option value="ABMI">ABMI</option>
            <option value="ABME">ABME</option>
          </select>
        </div>
      </div>
      <div className="details--table">B</div>
    </div>
  );
};

export default Details;
