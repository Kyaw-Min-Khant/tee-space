import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HoverCard, Group } from "@mantine/core";
import "./navbar.css";
import Landing1 from "./navbar-logo/landing-home-1.jpg";
import Landing2 from "./navbar-logo/landing-home-2.jpg";
import Landing3 from "./navbar-logo/landing-home-3.jpg";
import Landing4 from "./navbar-logo/landing-home-4.jpg";
import Landing5 from "./navbar-logo/landing-home-5.jpg";
import Landing6 from "./navbar-logo/landing-home-6.jpg";
import Landing7 from "./navbar-logo/landing-home-7.jpg";
import Landing8 from "./navbar-logo/landing-home-8.jpg";
import Landing9 from "./navbar-logo/landing-home-9.jpg";
import Landing10 from "./navbar-logo/landing-home-10.jpg";
import Landing11 from "./navbar-logo/landing-home-11.jpg";
import Landing12 from "./navbar-logo/landing-home-12.jpg";

const DropdownSection1 = () => {
  return (
    <>
      <div className="flex  justify-center gap-2  items-center">
        <Group position="center">
          <HoverCard openDelay={200} shadow="md">
            <HoverCard.Target>
              <p className="flex hover:text-[#2EBB77] cursor-pointer justify-center gap-2  items-center font-[700] text-[15px] ">
                Home
                <IoIosArrowDown className=" text-xs" />
              </p>
            </HoverCard.Target>
            <HoverCard.Dropdown className=" pt-8 border-0 mb-8 mr-8 ml-8">
              <div className="  py-[15px] lg:w-[900px] xl:w-[1250px]  items-center  justify-center flex flex-wrap gap-10 ">
                <div>
                  <div className=" max-w-[247.594px] rounded-[12px] border-b-[#7E7E7E]  image-container ">
                    <img src={Landing1} className=" hover_scale " alt="" />
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Classic
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing2} className=" hover_scale " alt="" />
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    T-shirt Studio
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing3} className=" hover_scale " alt="" />
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Shop Market
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing4} className=" hover_scale " alt="" />
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Creative
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing5} className=" hover_scale " alt="" />
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Agency
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing6} className=" hover_scale " alt="" />
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Company
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing7} className=" hover_scale " alt="" />
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Shop Modern
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing8} className=" hover_scale " alt="" />
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Shop Elegant
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] relative z-10 overflow-visible rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing9} className=" hover_scale " alt="" />
                    <p className=" text-white w-[48px] flex justify-center items-center absolute z-20 top-0 right-[-10px] bg-new rounded-full h-[48px] text-[14px] font-[700] ">
                      New
                    </p>
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Printing Services
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] relative z-10 overflow-visible rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing10} className=" hover_scale " alt="" />
                    <p className=" text-white w-[48px] flex justify-center items-center absolute z-20 top-0 right-[-10px] bg-new rounded-full h-[48px] text-[14px] font-[700] ">
                      New
                    </p>
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    Printing Studio
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] relative z-10 overflow-visible rounded-[12px] border-b-[#7E7E7E] image-container">
                    <img src={Landing11} className="" alt="" />
                    <p className=" text-white w-[48px] flex justify-center items-center absolute z-20 top-0 right-[-10px] bg-new rounded-full h-[48px] text-[14px] font-[700] ">
                      New
                    </p>
                  </div>
                  <p className=" text-[18px] text-left mt-[15px]  font-[700] leading-[25.2px]">
                    American Printing
                  </p>
                </div>
                <div>
                  <div className="w-[247.594px] relative z-10 overflow-visible rounded-[12px] border-b-[#7E7E7E] image-container ">
                    <img src={Landing12} className=" hover_scale " alt="" />
                    <p className=" text-white w-[48px] flex justify-center items-center absolute z-20 top-0 right-[-10px] bg-new rounded-full h-[48px] text-[14px] font-[700] ">
                      New
                    </p>
                  </div>
                  <p className=" text-[18px] text-left  mt-[15px]  font-[700] leading-[25.2px]">
                    Team Printing
                  </p>
                </div>
              </div>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </div>
    </>
  );
};

export default DropdownSection1;
