import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { reuseableCss } from "./class";

const HomeButton = () => {
  return (
    <div
      className={`${reuseableCss.button1} hover:bg-[#29a76a] bg-[#2EBB77]`}
    >
      <button className={`${reuseableCss.buttonText}`}>
        Shop Now{" "}
        <HiArrowNarrowRight className=" font-semibold ml-[8px] text-xl" />
      </button>
    </div>
  );
};

export default HomeButton;
