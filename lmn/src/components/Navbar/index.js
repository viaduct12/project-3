import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  return (
    <nav className="nav">
      <div className="nav-wrapper">
      <Link className="brand-logo right" to="/">
      Learn More News
      {/* <img src="./image/LMN_solid.png" alt="logo"/> */}
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
              to="/forum"
              className={window.location.pathname === "/forum" ? "nav-link active" : "nav-link"}
            >
              Forum
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
