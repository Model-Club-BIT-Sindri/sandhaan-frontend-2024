//Footer.js
import React from "react";
import Styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import bitlogo from "../../assets/bitlogo.png";
const year = new Date().getFullYear();

export default function Footer() {
  const linksList = [
    {
      title: "Chaiperson",
      href: "tel:9835811831",
      target: "_blank",
    },
    {
      title: "Vikash Kumar",
      href: "tel:9835811831",
      target: "_blank",
    },
    {
      title: "Vice Chairperson",
      href: "tel:9835811831",
      target: "_blank",
    },
    {
      title: "Payal Kumari",
      description: "Hall Management Center",
      href: "tel:9835811831",
      target: "_blank",
    },
    {
      title: "General Secretary",
      href: "tel:9835811831",
      target: "_blank",
    },
    {
      title: "Piyush Kumar",
      href: "tel:9835811831",
      target: "_blank",
    },
    {
      title: "Joint Secretary",
      href: "tel:9835811831",
      target: "_blank",
    },
    {
      title: "Amrendra Tiwary",
      href: "tel:9835811831",
      target: "_blank",
    },
  ];

  return (
    <footer>
      <div className={Styles.footerContainer}>
        <div className={Styles.tsgContainer}>
          <div className={Styles.imgContainer}>
            <img src={bitlogo} alt="BIT Logo" />
          </div>
          <div className={Styles.tsgDescription}>
            <h2 className={Styles.tsgHeading}>Model Club</h2>
            <p className={Styles.address}>
              Birsa Institute of Technology Sindri
              <br />
              Dhanbad - 828122
            </p>
          </div>
          <div className={Styles.iconsContainer}>
            <a
              target="_blank"
              href="https://www.facebook.com/modelclubbit?mibextid=qi2Omg&rdid=2cRGI4wpkYczVjyl"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/modelclub-bitsindri"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@SandhaanBITSINDRI"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/modelclubbit?igsh=cXMxeDYxbXpnc3A3"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={Styles.linksContainer}>
          {linksList.map((link, index) => {
            return (
              <p key={index}>
                <a target={link.target} href={link.href} rel="noreferrer">
                  {link.title}
                </a>
                {link.description ? (
                  <span className={link.class}>{link.description}</span>
                ) : (
                  <></>
                )}
              </p>
            );
          })}
        </div>
        <div className={Styles.contactSection}>
          <span>We're here</span>
          <span>Let's talk</span>
          <a href="/ContactUs">
            <button className={Styles.contactButton}>Get in Touch</button>
          </a>
        </div>
      </div>
      <div className={Styles.footerLine}></div>
      <div className={Styles.copyRightSection}>
        <p>&copy;Copyright Model Club BIT Sindri {year}</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}
