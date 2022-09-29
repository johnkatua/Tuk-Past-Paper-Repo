import React from "react";
import CourseDetails from "./CourseDetails";
import CourseList from "./CourseList";

const CoursePage = () => {
  return (
    <div className="admin--container">
      <CourseList />
      <CourseDetails />
    </div>
  );
};

export default CoursePage;
