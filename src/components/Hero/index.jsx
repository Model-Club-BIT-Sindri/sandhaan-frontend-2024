import React from "react";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="contain" id="bgimage">
      <div className="relative z-10 w-full flex flex-col justify-start items-center ">
        <p className="text-5xl text-white">THE MODEL CLUB</p>
        <br />
        <p className="text-3xl text-white">BIT Sindri</p>
        <div className="h-[3px] w-96 bg-white my-2"></div>
        <p className="text-3xl text-white">Welcomes You</p>
      </div>
    </div>
  );
};

export default Hero;
