import React from "react";
import { Link } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import Course from "../Course/Course";
import Feedbacks from "../Feedbacks/Feedbacks";
import "./Home.css";

const Home = () => {
  const [courses] = useCourses();
  const homeCourses = courses.slice(0, 4);
  return (
    <div className="home-container">
      <div className="banner-area d-flex align-items-center justify-content-center">
        <div className="container text-center">
          <h1>LEARN FROM THE EXCELLENCE</h1>
          <h2 className="my-5">
            Get Ahead, Improve Your Skill with GrowSkill Training Academy
          </h2>
          <h4>
            Get Hands On Experience in Real World Software Development from
            Industry Experts Through Practical and Real World Courses.
          </h4>
          <div className="home-buttons">
            <Link className="btn" to="/services">
              <button>All Services</button>
            </Link>
            <Link className="btn" to="/about">
              <button>About Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container our-services-area my-5 text-center">
        <h2 className="fw-bold my-5">Our Services</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {homeCourses.map((course) => (
            <Course key={course.key} course={course}></Course>
          ))}
        </div>
        <div className="all-services-button mt-5">
          <Link className="btn" to="/services">
            <button>All Services</button>
          </Link>
        </div>
      </div>
      <Feedbacks></Feedbacks>
    </div>
  );
};

export default Home;
