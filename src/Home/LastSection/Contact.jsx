import React from "react";
import HomeButton from "../HomeButton";
import { HiArrowNarrowRight } from "react-icons/hi";
import img1 from "../../components/Last-Section/last-section-images/banner-decor-1.jpg";
import img2 from "../../components/Last-Section/last-section-images/banner-decor-2.jpg";
import img3 from "../../components/Last-Section/last-section-images/banner-decor-3.jpg";
import img4 from "../../components/Last-Section/last-section-images/banner-decor-4.jpg";
import img5 from "../../components/Last-Section/last-section-images/banner-decor-5.jpg";
import img6 from "../../components/Last-Section/last-section-images/banner-decor-6.jpg";

const Contact = () => {
  return (
    <div className="bg-[#f3eaf8]">
      <div className="pt-[7%] pb-[7%] relative contact-inner">
        <div className="absolute bottom-[-12rem] 2xl:bottom-[-8rem] left-[14%] 2xl:left-[21%]">
          <div className=" overflow-hidden rounded-xl last_img_shadow__custom ">
            <img
              src={img1}
              className="rounded-xl w-[33px] sm:w-[80px] md:w-[100px] lg:w-[110px] 2xl:w-[156px]"
              alt=""
            />
          </div>
        </div>
        <div className="absolute right-[-1.5rem] top-[5rem] 2xl:top-[2.5rem]">
          <div className=" overflow-hidden z-10 rounded-xl last_img_shadow__custom ">
            <img
              src={img2}
              className="rounded-xl z-[20] w-[54px] sm:w-[110px] md:w-[130px] lg:w-[140px] 2xl:w-[270px]"
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-[-2rem] 2xl:top-[-8rem] left-16">
          <div className=" overflow-hidden z-10 rounded-xl last_img_shadow__custom ">
            <img
              src={img3}
              className="rounded-xl z-[20] w-[54px] sm:w-[110px] md:w-[130px] lg:w-[140px] 2xl:w-[230px]"
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-[-.5rem] top-[10rem] 2xl:top-[8.5rem]">
          <div className=" overflow-hidden z-10 rounded-xl last_img_shadow__custom ">
            <img
              src={img4}
              className="rounded-xl z-[20] w-[54px] sm:w-[110px] md:w-[130px] lg:w-[140px] 2xl:w-[230px]"
              alt=""
            />
          </div>
        </div>
        <div className="absolute right-[1rem] top-[-2rem] md:top-[-5rem] md:right-[7rem] lg:top-[-6rem] lg:right-[7rem] 2xl:top-[-7.5rem] 2xl:right-[20rem]">
          <div className=" overflow-hidden z-10 rounded-xl last_img_shadow__custom ">
            <img
              src={img5}
              className=" xl:rounded-xl z-[20] w-[30px] sm:w-[80px] md:w-[100px] lg:w-[110px] 2xl:w-[145px]"
              alt=""
            />
          </div>
        </div>
        <div className="absolute bottom-[-14.5rem] right-[2.5rem] 2xl:bottom-[-12rem] 2xl:right-[25rem]">
          <div className=" overflow-hidden z-10 rounded-xl last_img_shadow__custom ">
            <img
              src={img6}
              className=" xl:rounded-xl z-[20] w-[38px] sm:w-[120px] md:w-[140px] lg:w-[150px] 2xl:w-[170px]"
              alt=""
            />
          </div>
        </div>
        <div className=" absolute top-0 sm:top-[-1rem] md:top-[-2.5rem] lg:top-[-3rem] xl:top-[-1rem] bottom-0 left-0 right-0">
          <div className="text-center p-[15px]">
            <div className="md:px-[20%] lg:px-[25%] xl:px-[30%]">
              <h3 className="text-[24px] lg:text-[36px] xl:text-[42px] font-semibold mt-[20px] mb-[5px]">
                Enjoy up your vacations in the best T-shirts
              </h3>
            </div>
            <h6 className="text-[15px] lg:text-[19px] xl:text-[19px] text-[#7e7e7e] lg:mt-[20px] lg:mb-[10px] mt-[10px] mb-[5px]">
              T-shirt that keep you moving
            </h6>
          </div>
          <div className="flex gap-3 justify-center mb-[10px]">
            <div className=" px-4 py-2 hover:bg-[#29a76a] bg-[#2EBB77] hover:text-[#ffffff] text-white rounded-lg lg:rounded-xl xl:rounded-xl flex justify-center items-center duration-[700ms]">
              <button className="flex items-center text-base font-semibold p-0 m-0 tracking-wide">
                Shop Now
                <HiArrowNarrowRight className=" font-semibold ml-[8px] text-xl" />
              </button>
            </div>
            <div className=" px-4 py-2 bg-[#ffffff] hover:bg-[#29a76a] hover:text-[#ffffff] rounded-lg lg:rounded-xl xl:rounded-xl flex justify-center items-center duration-[700ms]">
              <button className="flex items-center text-base font-semibold p-0 m-0 tracking-wide">
                Contact Us
                <HiArrowNarrowRight className=" font-semibold ml-[8px] text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
