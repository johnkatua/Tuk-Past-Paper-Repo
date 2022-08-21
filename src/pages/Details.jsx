import React from "react";

const Details = ({ paper }) => {
  return (
    <div className="details--container">
      {/* <div className="details--search__bar">
        <input type="search" placeholder="Find a paper" />
        <div className="details--select__items">
          <select name="courses" id="courses">
            <option value="ABMI">ABMI</option>
            <option value="ABME">ABME</option>
          </select>
          <select name="courses" id="courses">
            <option value="ABMI">FSST</option>
            <option value="ABME">FAST</option>
            <option value="ABME">FEBE</option>
          </select>
        </div>
      </div> */}
      <div className="details--table">
        <table>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>AcademicYear</th>
            <th>Status</th>
            <th>CourseCode</th>
            <th>Level</th>
            <th>Faculty</th>
            <th>View</th>
          </tr>
          <tr>
            <td>{paper.name}</td>
            <td>{paper.year}</td>
            <td>{paper.academicYear}</td>
            <td>{paper.status}</td>
            <td>{paper.courseCode}</td>
            <td>{paper.courseLevel}</td>
            <td>{paper.faculty}</td>
            <td>Course</td>
          </tr>
  
        </table>
      </div>
    </div>
  );
};

export default Details;
