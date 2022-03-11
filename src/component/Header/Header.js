import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    border: "2px solid #fff",
    color: "#fff",
    backgroundColor: "#23b7a7",
    borderRadius: "5px",
  };
  return (
    <div className="header-container">
      <header className="header-area container d-flex  justify-content-between align-items-center">
        <div className="logo-area">
          <Link className="logo" to="/home">
            GrowSkill
          </Link>
        </div>
        <div className="nav-area">
          <ul>
            <li>
              <NavLink
                activeStyle={activeStyle}
                className="nav-links"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={activeStyle}
                className="nav-links"
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={activeStyle}
                className="nav-links"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={activeStyle}
                className="nav-links"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
