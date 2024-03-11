import React from "react";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="contain">
      <video
        src="src/assets/modelintro.mp4"
        className="video"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Hero;
