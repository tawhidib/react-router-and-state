import React from "react";
import useCourses from "../../hooks/useCourses";
import Course from "../Course/Course";
import "./Services.css";

const Services = () => {
  const [courses] = useCourses();
  return (
    <div className="services-area my-5">
      <div className="container">
        <h1>Our Services</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <Course key={course.key} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
