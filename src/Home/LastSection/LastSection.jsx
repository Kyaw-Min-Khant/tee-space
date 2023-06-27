import React from "react";
import Resources from "./Resources";
import Review from "./Review";
import Contact from "./Contact";
import "./Last.css";
import Media from "./Media";


const LastSection = () => {
  return (
    <div className="">
      <div className=" xl:container mx-auto">
        <div className="">
          <Resources />
        </div>
      </div>
      <div className="">
        <Review />
      </div>
      <div className="bg-[#f3eaf8] pt-[5%] md:pb-[10%] xl:pb-[9%] min-h-[300px] overflow-hidden">
        <div className="">
          <Contact />
        </div>
      </div>
      <div className="">
        <Media/>
      </div>
    </div>
  );
};

export default LastSection;
