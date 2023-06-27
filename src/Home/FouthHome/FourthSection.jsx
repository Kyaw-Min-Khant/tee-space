import React from "react";
import PickFU from "./PickFU";
import "./fourth.css";
import FourthAds from "./FourthAds";
import { reuseableCss } from "../class";

const FourthSection = () => {
  return (
    <div className="">
      <div className=" pb-[5%] mx-auto">
        <div className="=xl:container lg:p-[15px] flex flex-col mx-auto justify-center">
          <div className="text-center">
            <h3 className={`${reuseableCss.h3}`}>
              Our Picks for you
            </h3>
            <div className="">
              <div className="pt-0 pb-[5%] px-0 sm:px-0 md:px-[18%] lg:px-[20%] xl:px-[25%]">
                <div className="text-center">
                  <p className={`${reuseableCss.p}`}>
                    Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi
                    det, consec eturlagix adipiscing eliet, cowec tetopak
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[95%] mx-auto xl:container">
            <PickFU />
          </div>
        </div>
      </div>
      <div className="w-full container mx-auto p-[15px]">
        <FourthAds />
      </div>
    </div>
  );
};

export default FourthSection;
