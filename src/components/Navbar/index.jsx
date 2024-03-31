import React from "react";
import "../Navbar/navbar.scss";
import modelLogo from "../../assets/club-logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { revertUserSlice } from "../../redux/Slices/userSlices";
const Nav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
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
            <Link to="/">Home</Link>
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
          {!user && (
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <div>
              <button
                className="rounded-md bg-white text-black px-4 py-[4px] text-center mt-[4px]"
                onClick={() => dispatch(revertUserSlice())}
              >
                Logout
              </button>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
