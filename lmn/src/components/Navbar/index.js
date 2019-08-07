import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Learn More News
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login / Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/me"
              className={window.location.pathname === "/me" ? "nav-link active" : "nav-link"}
            >
              Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/populate"
              className={window.location.pathname === "/populate" ? "nav-link active" : "nav-link"}
            >
              Populate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
