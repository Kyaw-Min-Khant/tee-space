import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";

const Media = () => {
  return (
    <div className="">
      <div className="xl:px-[20%]">
        <ul className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-around">
          <li className="lg:w-[290px] media_container cursor-pointer">
            <div className="relative">
              <div className=" absolute w-full h-full flex justify-center items-center bg-[#ebf1fc] media_icon">
                <h3 className="text-[24px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center text-[#3b5998]">
                  <FaFacebookF />
                </h3>
              </div>
              <div className="">
                <h3 className="text-[21px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center media_text">
                  Facebook
                </h3>
              </div>
            </div>
          </li>
          <li className="lg:w-[290px] media_container cursor-pointer">
            <div className="relative">
              <div className=" absolute w-full h-full flex justify-center items-center bg-[#ebf1fc] media_icon">
                <h3 className="text-[24px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center text-[#3998F2]">
                  <FaTwitter />
                </h3>
              </div>
              <div className="">
                <h3 className="text-[21px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center media_text">
                  Twitter
                </h3>
              </div>
            </div>
          </li>
          <li className="lg:w-[290px] media_container cursor-pointer">
            <div className="relative">
              <div className=" absolute w-full h-full flex justify-center items-center bg-[#ebf1fc] media_icon">
                <h3 className="text-[24px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center text-[#eb2571]">
                  <FaInstagram />
                </h3>
              </div>
              <div className="">
                <h3 className="text-[21px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center media_text">
                  Instagram
                </h3>
              </div>
            </div>
          </li>
          <li className="lg:w-[290px] media_container cursor-pointer">
            <div className="relative">
              <div className=" absolute w-full h-full flex justify-center items-center bg-[#ebf1fc] media_icon">
                <h3 className="text-[24px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center text-[#ff2828]">
                  <FaYoutube />
                </h3>
              </div>
              <div className="">
                <h3 className="text-[21px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center media_text">
                  Youtube
                </h3>
              </div>
            </div>
          </li>
          <li className="lg:w-[290px] media_container cursor-pointer">
            <div className="relative">
              <div className=" absolute w-full h-full flex justify-center items-center bg-[#ebf1fc] media_icon">
                <h3 className="text-[24px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center text-[#eb2c2c]">
                  <FaPinterestP />
                </h3>
              </div>
              <div className="">
                <h3 className="text-[21px] font-semibold py-[4%] sm:py-[5%] md:py-[8%] lg:py-[8%] xl:py-[8%] text-center media_text">
                  Pinterest
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Media;
