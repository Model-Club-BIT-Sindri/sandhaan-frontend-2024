import React from "react";
import "./hero.scss";
import styled from "styled-components";
import drone from "../../assets/drone.png";
import { mobile } from "../../responsive";

const Aligner = styled.div`
  position: absolute;
  top: 200px;
  left: 100px;
  ${mobile({
    right: "5px",
    bottom: "600px",
  })}
`;
const H1 = styled.h1`
  font-size: 72px;
  font-weight: bolder;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  transition: ease-in-out;
  ${mobile({
    fontSize: "32px",
    right: "10px",
  })}
`;
const Para = styled.div`
  position: inherit;
  font-family: "Raleway", sans-serif;
  font-size: 42px;
  display: block;
  font-size: large;
  text-align: justify;
  ${mobile({
    marginLeft: "110px",
    fontSize: "10px",
  })}
`;
const Rect = styled.div`
  background-color: #c8c6af;
  width: 450px;
  height: 450px;
  display: block;
  border-top-left-radius: 50px;
  transform: translate(1000px, -300px);
  ${mobile({
    display: "none",
  })}
`;
const Image = styled.img`
  position: absolute;
  display: "block";
  top: 10px;
  right: 100px;
  scale: calc(1.4);
  ${mobile({})}
`;
const Button = styled.button`
  border-radius: 10px;
  border-width: 0px;
  background-color: #c8c6af;
  padding: 5px 10px;
  font-size: 18px;
  margin-top: 20px;
  color: #5f3739;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: bolder;
  ${mobile({
    marginLeft: "110px",
  })}
`;

const Hero = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw", overflowX: "hidden" }}
      className="relative"
    >
      <div className="contain" id="bgimage"></div>
      <Aligner>
        <span className="text-lg">
          <Para>Sharpen Thy Arrow</Para>
        </span>
        <H1 className="text-start">SANDHAAN</H1>
        <span className="text-lg">
          <Para>
            The Stage is all set MEGA TECH FEST of BIT Sindri<br></br> is back
            with the roar of sandhaan bewildered and let your
            <br /> imaginations ride beyond the limits of technical sanity
            <br /> to contest in the most awaited event of{" "}
            <strong>
              <q>SANDHAAN</q>
            </strong>
          </Para>
        </span>
        <Button>Know More</Button>
        <Rect>
          <Image src={drone} />
        </Rect>
      </Aligner>
    </div>
  );
};

export default Hero;
