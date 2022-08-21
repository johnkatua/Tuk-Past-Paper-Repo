import React from "react";

const Details = ({ paper }) => {
  return (
    <div className="details--container">
      <table>
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
      {/* <div className="details--table">
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
      </div> */}
    </div>
  );
};

export default Details;
