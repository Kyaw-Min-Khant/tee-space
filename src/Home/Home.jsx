import React, { useEffect } from "react";
import "./home.js";
import "./home.css";
import HeroSection from "./Homepath/HeroSection.jsx";
import SecondSection from "./secondPath/SecondSection.jsx";
import ThirdSection from "./ThirdSection/ThirdSection.jsx";
import FourthSection from "./FouthHome/FourthSection.jsx";
import Fifth from "./Fifth/Fifth.jsx";
import LastSection from "./LastSection/LastSection.jsx";
import BackToTopButton from "./BacktoTop/BackToTopButton.jsx";

const Home = () => {
  return (
    <div id="home" className="home pt-20">
      <div className="first-section">
        <HeroSection />
      </div>
      <div className="pt-[4%] pb-[4%] second-section bg-[#f5f5f5]">
        <SecondSection />
      </div>
      <div className="">
        <ThirdSection />
      </div>
      <div className="">
        <FourthSection />
      </div>
      <div className="">
        <Fifth />
      </div>
      <div className="">
        <LastSection />
      </div>
      <BackToTopButton/>
    </div>
  );
};

export default Home;
