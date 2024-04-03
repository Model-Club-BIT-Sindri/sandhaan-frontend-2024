import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./navbar.module.css";
import useNavbar from "./useNavbar";
import modellogo from "../../assets/club-logo.png";
export default function Navbar() {
  // Custom Hook useNavbar for logic of navbarClass
  const navbarClass = useNavbar();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let listClass;
  if (click) {
    listClass = `${Styles.navMenu} ${Styles.active}`;
  } else {
    listClass = `${Styles.navMenu}`;
  }

  return (
    <div className={navbarClass}>
      <nav className={Styles.navbar}>
        {/* Navbar logo */}
        <div className={Styles.navLogo}>
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={modellogo} alt="Model_logo" />
            <span>&nbsp;MODEL</span>
          </NavLink>
        </div>

        {/* Menu icon on smaller devices */}
        <div className={Styles.menuIcon} onClick={() => handleClick()}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Navlinks */}
        <ul className={listClass}>
          {/* HOME */}
          <li className={Styles.navItem}>
            <NavLink
              to="/"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Home
            </NavLink>
          </li>

          {/* EVENTS */}
          <li className={Styles.navItem}>
            <NavLink
              to="/events"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Events
            </NavLink>
          </li>

          {/* CONTACTS */}
          <li className={Styles.navItem}>
            <NavLink
              to="/contacts"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Contacts
            </NavLink>
          </li>

          {/* PAST EVENTS */}
          <li className={Styles.navItem}>
            <NavLink
              to="/contacts"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Past Events
            </NavLink>
          </li>

          {/* LOGIN SIGNUP */}
          <li className={Styles.navItem}>
            <NavLink
              to="/login"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
