import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pastevents.scss";
const PastEvents = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="h-[100vmin]">
      <div className="head_1 mb-12">
        <p className="text-2xl my-4">GLIMPSES</p>
      </div>
      <Slider {...settings}>
        <div className="slider">
          <div className="slides border-2 border-[#fff] rounded-md shadow-md overflow-hidden shadow-[#fff]">
            <img
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
        <div className="slider">
          <div className="slides border-2 border-[#fff] rounded-md shadow-xl shadow-inner overflow-hidden shadow-[#fff]">
            <img
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
        <div className="slider">
          <div className="slides border-2 border-[#fff] rounded-md shadow-md overflow-hidden shadow-[#fff]">
            <img
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              className="w-full h-full object-cover hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default PastEvents;
