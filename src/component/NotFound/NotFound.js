import React from "react";
import { Link } from "react-router-dom";
import oops from "../../images/oops.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container my-5 ">
        <div>
          <img src={oops} alt="" />
        </div>
        <h2>This page is not found</h2>
        <Link to="/home">
          <button>Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
