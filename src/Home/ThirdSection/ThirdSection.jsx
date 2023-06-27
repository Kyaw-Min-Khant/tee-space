import React, { useState } from "react";
import MiniThird from "./MiniThird";
import img4 from "../HomeImg/Third/banner-4.png";
import Accordion from "./Accordion";
import { reuseableCss } from "../class";

const ThirdSection = () => {
  return (
    <div className="pt-[3%] pb-[6%] mx-auto">
      <div className="p-[15px] flex flex-col mx-auto xl:container">
        <div className="w-full text-center m-0">
          <div className="">
            <h4 className={`${reuseableCss.h4}`}>
              How to create custom shirts
            </h4>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="text-center pt-0 pb-[5%] px-[1%] sm:px-[10%] md:px-[15%] lg:px-[18%] xl:px-[25%]">
            <div className="text-center">
              <p className={`${reuseableCss.p}`}>
                Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix
                adipiscing eliet, cowec tetopak ec tetur duis necgi
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <MiniThird />
        </div>
      </div>
      <div className="bg-[#f5f5f5]">
        <div className="pt-[5%] pb-[4%] w-full h-full flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row items-center xl:container mx-auto">
          <div className="p-[15px] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] h-full">
            <div className="">
              <div className="p-0 sm:pr-0 md:pr-[7%] lg:pr-[10%] xl:pr-[10%]">
                <img src={img4} className="w-[100%] h-auto" alt="" />
              </div>
            </div>
          </div>
          <div className="p-[15px] w-full sm:w-full md:w-[40%] lg:w-[40%] xl:w-[40%] h-full">
            <div className="">
              <div className="">
                <h2 className={`${reuseableCss.h3}`}>
                  Free and easy way to bring your ideas to life
                </h2>
                <div className="">
                  <div className="sm:pr-0 md:pr-[7%] lg:pr-[10%] xl:pr-[10%] pb-[5%] p-0">
                    <p className={`${reuseableCss.p}`}>
                      He will give praise to himself, and he will give him the
                      protection of his family
                    </p>
                  </div>
                </div>
                <div className="">
                  <div
                    className={`${reuseableCss.button1} hover:bg-[#29a76a] bg-[#2EBB77]`}
                  >
                    <button className={`${reuseableCss.buttonText}`}>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[2%] p-0">
          <div className="p-[10px] sm:p-[10px] md:p-[15px] lg:p-[15px] flex flex-col">
            <div className="text-center">
              <h2 className={`${reuseableCss.h3}`}>
                T-shirt printing made easy.
              </h2>
              <div className="px-0 sm:px-0 md:px-[10%] lg:px-[25%] xl:px-[25%] py-0 text-center">
                <p className={`${reuseableCss.p}`}>
                  He will give praise to himself, and he will give him the
                  protection of two men and two men, and therefore he will take
                  care of the adipiscing, and the
                </p>
              </div>
            </div>
          </div>
        </div>
        <Accordion />
      </div>
    </div>
  );
};

export default ThirdSection;
