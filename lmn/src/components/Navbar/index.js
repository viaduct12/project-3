import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./image/LMN_dots.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  return (
    <nav className="navbar">
      <div className="nav-wrapper black">
      <Link className="brand-logo right" to="/">
      {/* <img className="responsive-img" src={logo} alt="logo"/> */}
      L M N
      </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
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
    </nav>


  );
}

export default Navbar;
