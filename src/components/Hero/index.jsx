import React from "react";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="contain">
      <video
        src="https://res.cloudinary.com/dsc5jtemn/video/upload/v1710166780/pepijdv6pli7wp7upbq9.mp4"
        className="video"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Hero;
