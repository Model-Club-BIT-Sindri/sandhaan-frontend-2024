import React from "react";
import "../Footer/footer.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer" id="contactus">
      {/* <div>
        <p>Contact Us</p>
        <div className="contact">
          <div>
            <span className="icon">
              <MdOutlineMailOutline />
            </span>
            <span>info@info.com</span>
          </div>
          <div>
            <span className="icon">
              <PiPhoneCall />
            </span>
            <span>556856254</span>
          </div>
        </div>
      </div> */}
      <p>Model Club, BIT Sindri Dhanbad, Jharkhand 828123. </p>
    </div>
  );
};

export default Footer;
