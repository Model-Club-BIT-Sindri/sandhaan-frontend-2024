import React from "react";
import "../Navbar/navbar.scss";
import modelLogo from "../../assets/club-logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <img src={modelLogo} alt="Model Logo" />
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav no-search">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#events">Our Events</a>
          </li>
          <li className="nav-item">
            <a href="#contactus">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="#pastevents">Past Events</a>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
