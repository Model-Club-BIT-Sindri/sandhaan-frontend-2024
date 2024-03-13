import React from "react";
import "../Navbar/navbar.scss";
import bitLogo from "../../assets/bitlogo.png";
import modelLogo from "../../assets/club-logo.jpeg";
const Nav = () => {
  return (
    <div className="container">
      <div className="fist">
        <img src={bitLogo} alt="bitLogo" />
        <li>HOME</li>
        <li>EVENTS</li>
        <li>CONTACT US</li>
        <img src={modelLogo} alt="modelLogo" className="w-20 h-auto" />
      </div>
    </div>
  );
};

export default Nav;
