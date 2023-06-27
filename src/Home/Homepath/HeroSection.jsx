import React from "react";
import Slider from "./Slider";
import HeroLeft from "./HeroLeft";

const HeroSection = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center lg:items-start xl:items-start lg:flex-row lg:justify-around w-full mx-auto sm:w-full md:w-full lg:w-[98%] xl:w-[95%] min-h-full pb-[8%] lg:container xl:container">
      <div className="w-full sm:w-full md:w-full lg:w-[90%] xl:w-[90%]">
        <HeroLeft />
      </div>
      <div className="w-full m-0 p-0 lg:mt-10 lg:py-3">
        <div className="w-full h-full">
          <div className="  top-0 w-full h-full">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
