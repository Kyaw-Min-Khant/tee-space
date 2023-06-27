import React from "react";
import {
    BsArrowLeftRight,
    BsCart2,
    BsStar,
    BsBag,
    BsSearch,
  } from "react-icons/bs";
  import { Tooltip } from "@mantine/core";
  import FourthAds from "./FourthAds";
  import { HiArrowNarrowRight } from "react-icons/hi";

const Icons = () => {
  return (
    <div className="flex flex-col gap-3">
      <Tooltip label="Favorite" position="left" withArrow arrowSize={7}>
        <div className=" cursor-pointer w-7 h-7 lg:w-10 lg:h-10 bg-white text-black hover:bg-[#29a76a] hover:text-white duration-500 rounded-full flex justify-center items-center">
          <BsStar className=" lg:text-base text-sm"/>
        </div>
      </Tooltip>
      <Tooltip label="Compare" position="left" withArrow arrowSize={7}>
        <div className=" cursor-pointer w-7 h-7 lg:w-10 lg:h-10 bg-white text-black hover:bg-[#29a76a] hover:text-white duration-500 rounded-full flex justify-center items-center">
          <BsArrowLeftRight className=" lg:text-base text-sm"/>
        </div>
      </Tooltip>
      <Tooltip label="Select options" position="left" withArrow arrowSize={7}>
        <div className=" cursor-pointer w-7 h-7 lg:w-10 lg:h-10 bg-white text-black hover:bg-[#29a76a] hover:text-white duration-500 rounded-full flex justify-center items-center">
          <BsBag className=" lg:text-base text-sm"/>
        </div>
      </Tooltip>
      <Tooltip label="Quick view" position="left" withArrow arrowSize={7}>
        <div className=" cursor-pointer w-7 h-7 lg:w-10 lg:h-10 bg-white text-black hover:bg-[#29a76a] hover:text-white duration-500 rounded-full flex justify-center items-center">
          <BsSearch className=" lg:text-base text-sm"/>
        </div>
      </Tooltip>
    </div>
  );
};

export default Icons;
