import React, { useState } from "react";
import "../Navbar/navbar.scss";
import modelLogo from "../../assets/club-logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { revertUserSlice } from "../../redux/Slices/userSlices";
import axios from "axios";
const Nav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [login, setLogin] = useState(false);
  useState(() => {
    if (isLoggedIn) {
      setLogin(true);
    }
  }, [isLoggedIn]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleLogout = () => {
    dispatch(revertUserSlice());
    localStorage.removeItem("isLoggedIn");
    setLogin(false);
    axios.get(`${apiUrl}/api/v1/logout`).then((data) => console.log(data));
  };
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
          {!isLoggedIn && (
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <div>
              <button
                className="rounded-md bg-white text-black px-4 py-[4px] text-center mt-[4px]"
                onClick={handleLogout}
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
