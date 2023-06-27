import React from "react";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageCheck } from "react-icons/lu";
import { RiEqualizerLine, RiSecurePaymentFill } from "react-icons/ri";
import img from "../../components/Customize-Section/customize-section-images/banner-28.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { reuseableCss } from "../class";

const LeftSideFifth = () => {
  return (
    <div className="flex flex-col gap-11 justify-end xl:mt-0 lg:mt-0 md:mt-7 sm:mt-5 mt-6">
      <div className="flex flex-wrap sm:gap-5 md:gap-3 lg:gap-3 xl:gap-3 sm:justify-center md:justify-center lg:justify-end xl:justify-end">
        <div className="flex flex-col gap-4 py-[35px] px-[30px] sm:w-[99%px] sm:h-[250px] md:w-[250px] md:h-[360px] lg:w-[240px] lg:h-[395px] xl:w-[270px] xl:h-[400px] xl:mb-0 lg:mb-0 md:mb-4 sm:mb-5 mb-5 bg-[#fff] shadow_custom rounded-2xl">
          <div className="">
            <AiOutlineDollar className="lg:text-[40px] md:text-[30px] sm:text-[50px] text-[35px] text-[#2ebb77]" />
          </div>
          <div className="">
            <h6
              className={` card-title xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[19px] text-18px font-semibold`}
            >
              NO Die & plate charges
            </h6>
            <p className={`${reuseableCss.p}`}>
              Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
              adipiscing eliet duis necgi det, con
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-[35px] px-[30px] sm:w-[99%px] sm:h-[250px] md:w-[250px] md:h-[360px] lg:w-[240px] lg:h-[395px] xl:w-[270px] xl:h-[400px] xl:mb-0 lg:mb-0 md:mb-4 sm:mb-5 mb-5 bg-[#fff] shadow_custom rounded-2xl">
          <div className="">
            <BsPrinter className="lg:text-[40px] md:text-[30px] sm:text-[50px] text-[35px] text-[#2ebb77]" />
          </div>
          <div className="">
            <h6
              className={` card-title xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[19px] text-18px font-semibold`}
            >
              High quality offset printing
            </h6>
            <p className={`${reuseableCss.p}`}>
              Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
              adipiscing eliet duis necgi det, con
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-[35px] px-[30px] sm:w-[99%px] sm:h-[250px] md:w-[250px] md:h-[360px] lg:w-[240px] lg:h-[395px] xl:w-[270px] xl:h-[400px] xl:mb-0 lg:mb-0 md:mb-4 sm:mb-5 mb-5 bg-[#fff] shadow_custom rounded-2xl">
          <div className="">
            <RiSecurePaymentFill className="lg:text-[40px] md:text-[30px] sm:text-[50px] text-[35px] text-[#2ebb77]" />
          </div>
          <div className="">
            <h6
              className={` card-title xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[19px] text-18px font-semibold`}
            >
              Secure payment
            </h6>
            <p className={`${reuseableCss.p}`}>
              Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
              adipiscing eliet duis necgi det, con
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-[35px] px-[30px] sm:w-[99%px] sm:h-[250px] md:w-[250px] md:h-[360px] lg:w-[240px] lg:h-[395px] xl:w-[270px] xl:h-[400px] xl:mb-0 lg:mb-0 md:mb-4 sm:mb-5 mb-5 bg-[#fff] shadow_custom rounded-2xl">
          <div className="">
            <RiEqualizerLine className="lg:text-[40px] md:text-[30px] sm:text-[50px] text-[35px] text-[#2ebb77]" />
          </div>
          <div className="">
            <h6
              className={` card-title xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[19px] text-18px font-semibold`}
            >
              Custom size & style
            </h6>
            <p className={`${reuseableCss.p}`}>
              Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
              adipiscing eliet duis necgi det, con
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-[35px] px-[30px] sm:w-[99%px] sm:h-[250px] md:w-[250px] md:h-[360px] lg:w-[240px] lg:h-[395px] xl:w-[270px] xl:h-[400px] xl:mb-0 lg:mb-0 md:mb-4 sm:mb-5 mb-5 bg-[#fff] shadow_custom rounded-2xl">
          <div className="">
            <TbTruckDelivery className="lg:text-[40px] md:text-[30px] sm:text-[50px] text-[35px] text-[#2ebb77]" />
          </div>
          <div className="">
            <h6
              className={` card-title xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[19px] text-18px font-semibold`}
            >
              Fast & free delivery
            </h6>
            <p className={`${reuseableCss.p}`}>
              Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
              adipiscing eliet duis necgi det, con
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-[35px] px-[30px] sm:w-[99%px] sm:h-[250px] md:w-[250px] md:h-[360px] lg:w-[240px] lg:h-[395px] xl:w-[270px] xl:h-[400px] xl:mb-0 lg:mb-0 md:mb-4 sm:mb-5 mb-5 bg-[#fff] shadow_custom rounded-2xl">
          <div className="">
            <LuPackageCheck className="lg:text-[40px] md:text-[30px] sm:text-[50px] text-[35px] text-[#2ebb77]" />
          </div>
          <div className="">
            <h6
              className={` card-title xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[19px] text-18px font-semibold`}
            >
              Low minimum order quantity
            </h6>
            <p className={`${reuseableCss.p}`}>
              Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix
              adipiscing eliet duis necgi det, con
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative">
          <div className=" overflow-hidden">
            <img src={img} className="w-full left-img-fifth" alt="" />
          </div>
          <div className="py-[30px] px-[50px] md:py-[40px] md:px-[50px] lg:py-[6%] lg:px-[6%] absolute top-0">
            <h3 className="mb-[14px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] font-bold">
              Create your own <br /> custom products online
            </h3>
            <h6 className="hidden sm:hidden md:block lg:block xl:block md:text-[18px] md:mt-[10px] md:mb-[10px] lg:text-[15px] xl:text-[19px] xl:mt-[10px] xl:mb-[10px] lg:mb-[6px] text-[#7e7e7e]">
              Free and easy way to bring your ideas to life
            </h6>
            <div className=" md:flex sm:hidden hidden xl:w-[220px] xl:h-[46px] lg:w-[200px] lg:h-[38px] md:w-[180px] md:h-[36px] bg-[#2EBB77] hover:bg-[#29a76a] rounded-xl lg:flex justify-center items-center duration-[600ms]">
              <button className="flex items-center md:text-sm text-bas0e lg:text-[16px] text-white font-[700] p-0 m-0">
                Order Custom Shirts
                <HiArrowNarrowRight className=" font-[700] ml-[8px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideFifth;
