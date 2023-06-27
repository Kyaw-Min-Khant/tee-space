import React from "react";
import ads1 from "../../components/Ads-Section/ads-images/banner-26.png";
import ads2 from "../../components/Ads-Section/ads-images/banner-27.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { reuseableCss } from "../class";

const FourthAds = () => {
  return (
    <div className="pb-[4%] p-0 m-0 pt-[6%]">
      <div className="flex flex-col md:flex-col lg:flex-row justify-center gap-10">
        <div className=" relative">
          <div className="imgAds-container">
            <img src={ads1} className="rounded-lg img-ads" alt="" />
          </div>
          <div className=" absolute top-[16%] sm:top-[16%] md:top-[17%] lg:top-[18%] left-10">
            <div className="">
              <div className="flex flex-col">
                <h2 className={`mb-[5px] sm:text-[22px] sm:mb-[6px] md:mb-[7px] lg:mb-[7px] text-[18px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-[700]`}>
                  Thousands of
                  <br />
                  Free templates
                </h2>
                <div className="p-0 m-0">
                  <h6 className={`text-sm mb-1 sm:text-[16px] md:text-[18px] md:mt-[10px] md:mb-[10px] lg:text-[15px] xl:text-[19px] xl:mt-[10px] xl:mb-[10px] lg:mb-[6px] text-[#7e7e7e]`}>
                    Free and easy way to bring <br /> your ideas to life
                  </h6>
                </div>
              </div>
              <div className="  md:flex sm:hidden hidden xl:w-[160px] xl:h-[46px] lg:w-[140px] lg:h-[38px] md:w-[130px] md:h-[36px] bg-[#2EBB77] hover:bg-[#29a76a] rounded-xl lg:flex justify-center items-center duration-[600ms]">
                <button className="flex items-center md:text-sm text-base text-white font-[700] p-0 m-0">
                  Explore More
                  <HiArrowNarrowRight className=" font-[700] ml-[8px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative">
          <div className="imgAds-container">
            <img src={ads2} className="rounded-lg img-ads" alt="" />
          </div>
          <div className=" absolute top-[16%] sm:top-[16%] md:top-[17%] lg:top-[18%] left-10">
            <div className="">
              <div className="flex flex-col">
                <h2 className="mb-[5px] sm:text-[22px] sm:mb-[6px] md:mb-[7px] lg:mb-[7px] text-[18px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-[700]">
                  Create your
                  <br />
                  unique style
                </h2>
                <div className="p-0 m-0">
                  <h6 className="text-sm mb-1 sm:text-[16px] md:text-[18px] md:mt-[10px] md:mb-[10px] lg:text-[15px] xl:text-[19px] xl:mt-[10px] xl:mb-[10px] lg:mb-[6px] text-[#7e7e7e]">
                    Free and easy way to make <br /> your creative to life
                  </h6>
                </div>
                <div className=" md:flex sm:hidden hidden xl:w-[160px] xl:h-[46px] lg:w-[140px] lg:h-[38px] md:w-[120px] md:h-[36px] bg-[#2EBB77] hover:bg-[#29a76a] rounded-xl lg:flex justify-center items-center duration-[600ms]">
                  <button className="flex items-center text-sm md:text-sm lg:text-base text-white font-[700] p-0 m-0">
                    Shop Now
                    <HiArrowNarrowRight className=" font-[700] ml-[8px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthAds;
