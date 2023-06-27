import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { BsPlayCircle } from "react-icons/bs";
import CountUp from "react-countup";
import HomeButton from "../HomeButton";
import { reuseableCss } from "../class";

const HeroLeft = () => {
  return (
    <div className="flex flex-col px-[15px]">
      <div className=" mt-[20px] mb-[10px]">
        <button className=" text-[#b479d9] bg-[#b479d926] text-normal tracking-wide lg:text-lg py-[8px] px-[18px] inline-block rounded-[40px]">
          <h2 className=" font-semibold lg:font-[700]">Create your own</h2>
        </button>
      </div>
      <div className={reuseableCss.h2}>
        <h1 className="">
          <span className=" relative make-the-cost">Make the most</span>
          <span className=" flex h-[47px] sm:h-[55px] md:h-[60px] lg:h-[80px] xl:h-[90px] justify-start">
            <Typewriter
              words={["favorite custom", "designer ideas", "of our t-shirt"]}
              loop={true}
              cursor={false}
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span className="">Printing</span>
        </h1>
      </div>
      <div className=" pt-[4px] pb-[20px] sm:pt-[6px] sm:pb-[22px] md:pt-[8px] md:pb-[22px] lg:pt-[12px] lg:pb-[24px]">
        <p className={reuseableCss.p}>
          What’s more, we do it right! A full administration printing
          background. Print shirts for yourself or your online business
        </p>
      </div>
      <div className="flex items-center flex-row pb-[4%] sm:pb-[6%] md:pb-[8%] lg:pb-[10%] gap-3">
        <HomeButton />
        <div
          className={`${reuseableCss.button1} hover:text-[#00d082] text-black`}
        >
          <button className="flex items-center text-base font-semibold p-0 m-0 tracking-wide">
            How we work
            <BsPlayCircle className=" font-semibold text-2xl ml-2" />
          </button>
        </div>
      </div>
      <div className="count">
        <div className="flex gap-20 lg:gap-0 flex-row">
          <div className={`${reuseableCss.h2} lg:pr-[40px]`}>
            <CountUp end={12} duration={5} className="" />
            <span>k+</span>
            <div className={` font-normal lg:font-medium ${reuseableCss.p} mt-[10px]`}>
              Collections
            </div>
          </div>
          <div
            className={`${reuseableCss.h2} lg:pl-[40px] relative count-two-six`}
          >
            <CountUp end={26} duration={5} className="" />
            <span>k+</span>
            <div className={` font-normal lg:font-medium ${reuseableCss.p} mt-[10px]`}>
              Items trusted to deliver
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLeft;
