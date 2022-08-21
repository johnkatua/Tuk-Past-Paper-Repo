import React from "react";

const Details = ({ paper }) => {
  return (
    <>
      <td>{paper.name}</td>
      <td>{paper.year}</td>
      <td>{paper.academicYear}</td>
      <td>{paper.status}</td>
      <td>{paper.courseCode}</td>
      <td>{paper.courseLevel}</td>
      <td>{paper.faculty}</td>
      <td>Course</td>
    </>
  );
};

export default Details;
