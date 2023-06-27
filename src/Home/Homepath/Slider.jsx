import React from "react";
import img1 from "../../components/Hero-Section/hero-section-slideshow-images/slideshow-1.png";
import img2 from "../../components/Hero-Section/hero-section-slideshow-images/slideshow-2.png";
import img3 from "../../components/Hero-Section/hero-section-slideshow-images/slideshow-3.png";
import "./slider.js";

const Slider = () => {
  return (
    <div className="carousel carousel__fade">
      <div className="carousel_inner">
        <div className="carousel_item carousel_item__active">
          <img src={img1} alt="" className=" carousel_img" />
        </div>
        <div className="carousel_item">
          <img src={img2} alt="" className=" carousel_img" />
        </div>
        <div className="carousel_item">
          <img src={img3} alt="" className=" carousel_img" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
