import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Description from "../components/sandhaan_desc";
import Event from "../components/events";
import Footer from "../components/Footer/Footer";
import PastEvents from "../components/pastevents";
const Landing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Description />
      <PastEvents />
      <Event />
      <Footer />
    </>
  );
};

export default Landing;
