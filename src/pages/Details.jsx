import React from "react";

const Details = () => {
  return (
    <div className="details--container">
      <div className="details--search__bar">
        <input type="search" />
        <div>
          <select name="courses" id="courses">
            <option value="ABMI">ABMI</option>
            <option value="ABME">ABME</option>
          </select>
        </div>
        <div>
          <select name="courses" id="courses">
            <option value="ABMI">FSST</option>
            <option value="ABME">FAST</option>
            <option value="ABME">FEBE</option>
          </select>
        </div>
      </div>
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
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
          </tr>
           <tr>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
          </tr>
           <tr>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
            <td>View</td>
            <td>Name</td>
            <td>Course</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Details;
