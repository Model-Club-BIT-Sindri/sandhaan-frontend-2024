import React from "react";
import "../Footer/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot_1">
        <img
          src="src/assets/location-outline.svg"
          alt=""
          height={50}
          width={50}
          style={{ color: "white" }}
        />
        <p>Model Club, BIT Sindri Dhanbad, Jharkhand 828123. </p>
      </div>
    </div>
  );
};

export default Footer;
