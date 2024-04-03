import React from "react";
import Styles from "./home.module.css";
import Hero from "../Hero/Hero";
import modellogo from "../../assets/club-logo.png";
import bitlogo from "../../assets/bitlogo.png";
export default function Home() {
  document.title = "Home | MODEL";

  return (
    <>
      <div className={Styles.backgroundImage}>
        <div className={Styles.textOverlay}>
          {/* <div className={Styles.kgpSvg}>
            <img src={modellogo} alt="Model Logo" />
          </div> */}
          <div className={Styles.greetMessage}>
            <Hero />
          </div>
          {/* <div className={Styles.kgpSvg}>
            <img src={bitlogo} alt="BIT Logo" />
          </div> */}
        </div>
      </div>
    </>
  );
}
