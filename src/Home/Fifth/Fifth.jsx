import React from "react";
import LeftSideFifth from "./LeftSideFifth";
import "./Fifth.css";
import { reuseableCss } from "../class";
import { HiArrowNarrowRight } from "react-icons/hi";

const Fifth = () => {
  return (
    <div className="bg-[#f5f5f5] relative w-full">
      <div className="">
        <div className="separator"></div>
      </div>
      <div className=" xl:container mx-auto w-full">
        <div className="p-[15px] mx-auto">
          <div className="flex flex-col md:gap-0 lg:gap-0 xl:gap-5 justify-between sm:flex-col md:flex-col lg:flex-row xl:flex-row">
            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[23%] xl:w-[30%]">
              <div className="ml-[15px] sm:ml-[35px] md:ml-[30px] lg:ml-0 xl:ml-0">
                <h3 className={`${reuseableCss.h3}`}>
                  Why customize products with TeeSpace?
                </h3>
                <div className="">
                  <h6 className={`${reuseableCss.p}`}>
                    Lorem ipsum det, cowec tetur duis necgi det, consec t
                    eturlagix adipiscing eliet duis necgi det, con
                  </h6>
                </div>
                <div className="">
                  <button className={`px-3 py-2 rounded-lg font-semibold text-white hover:bg-[#29a76a] bg-[#2EBB77]`}>
                    <div className="flex items-center gap-3">
                      View All Features <HiArrowNarrowRight />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[77%] xl:w-[70%]">
              <LeftSideFifth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
