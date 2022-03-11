import React from "react";

const Course = (props) => {
  const { img, title, details, level, instructor, ratting, price } =
    props.course;
  return (
    <div className="col-md-3">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5>
            Instructor:{" "}
            <span className="text-success fw-bold">{instructor} </span>
          </h5>
          <p className="card-text">{details.substring(0, 150)}</p>
          <p>
            Level: <span className="text-success">{level}</span>
          </p>
          <h5>
            Ratting:
            <span className="text-danger">
              {ratting}
              <i className="fas fa-star"></i>
            </span>
          </h5>
          <h3>Price: {price}</h3>
        </div>
        <div className="card-footer">
          <small className="text-muted">Registration Is Going On</small>
        </div>
      </div>
    </div>
  );
};

export default Course;
