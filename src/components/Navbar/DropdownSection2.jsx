import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HoverCard, Group } from "@mantine/core";
import { BsArrowRightShort } from "react-icons/bs";
import BananaMenu1 from "./NavDropdown2/banner-menu-1.jpg";
import BananaMenu2 from "./NavDropdown2/banner-menu-2.jpg";
import BananaMenu3 from "./NavDropdown2/banner-menu-3.jpg";
import BananaMenu4 from "./NavDropdown2/banner-menu-4.jpg";
import BananaMenu5 from "./NavDropdown2/banner-menu-5.jpg";
import BananaMenu6 from "./NavDropdown2/banner-menu-6.jpg";
import BananaMenu7 from "./NavDropdown2/banner-menu-7.jpg";
import "./navbar.css";

const DropdownSection2 = () => {
  return (
    <div>
      <button className="">
        <Group position="center">
          <HoverCard openDelay={200} shadow="md">
            <HoverCard.Target>
              <p className=" cursor-pointer flex justify-center gap-2  items-center hover:text-[#2EBB77] font-[700] text-[15px]">
                TeeSpace
                <IoIosArrowDown className=" text-xs" />
              </p>
            </HoverCard.Target>
            <HoverCard.Dropdown className=" pt-8 border-0 mb-8 mr-8 ml-8">
              <div className="  pt-[15px] lg:w-[900px] xl:w-[1250px]">
                <div className="  flex justify-center gap-8">
                  <div className="image-container  w-[47%] rounded-[12px]">
                    <img
                      className=" relative rounded-[12px]"
                      src={BananaMenu1}
                      alt=""
                    />
                    <div className=" pl-5 cursor-pointer absolute top-12">
                      <p className="  text-start  xl:font-[700] lg:text-[25px] lg:mt-[15px] lg:font-[500] text-[32px] font-[700] text-white leading-[36.4px] mt-[25px]">
                        Thousands of free <br /> templates
                      </p>
                      <p className=" text-start xl:text-[18px] lg:text-[15px] lg:font-[400] lg:leading-[25px] xl:font-[500] text-white xl:leading-[36.4px] mb-[10px] mt-[15px]">
                        Free and easy way to bring <br /> your ideas to life
                      </p>
                      <div className=" xl:mt-8 lg:mt-5 lg:py-1 hover:text-white border-[#2EBB77] hover:bg-[#2EBB77] items-center border bg-white w-[70%] xl:py-2 rounded-lg text-start flex justify-center gap-5">
                        <p className=" text-start lg:text-[13px] lg:font-[500] lg:px- xl:text-[15px] xl:font-[700] ">
                          Explore More
                        </p>
                        <BsArrowRightShort className=" text-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="image-container  w-[47%] rounded-[12px]">
                    <img
                      className=" relative rounded-[12px]"
                      src={BananaMenu2}
                      alt=""
                    />
                    <div className=" pl-5 cursor-pointer absolute top-12">
                      <p className=" text-start  lg:text-[25px] lg:mt-[15px] lg:font-[500] xl:font-[700] text-[32px] font-[700] text-black leading-[36.4px] mt-[25px]">
                        Create your unique <br /> style
                      </p>
                      <p className=" text-start xl:text-[18px] lg:text-[15px] lg:font-[400] lg:leading-[25px] xl:font-[500] text-black xl:leading-[36.4px] mb-[10px] mt-[15px]">
                        Free and easy way to bring <br /> your ideas to life
                      </p>
                      <div className=" xl:mt-8 lg:mt-5 lg:py-1 hover:text-white border-[] hover:bg-[#2EBB77] items-center border bg-white w-[70%] xl:py-2 rounded-lg text-start flex justify-center gap-5">
                        <p className="text-start lg:text-[13px]  lg:font-[500] lg:px- xl:text-[15px] xl:font-[700]">
                          Shop Now
                        </p>
                        <BsArrowRightShort className=" text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex  justify-evenly gap-10 items-center my-10">
                  <div>
                    <div className=" relative   rounded-[12px] image-container ">
                      <img
                        className="   rounded-[12px]"
                        src={BananaMenu3}
                        alt=""
                      />
                      <div className=" absolute bottom-5    ">
                        <p className="xl:text-[15px] lg:text-[12px] lg:font-[400] lg:px-[23px] lg:py-1 lg:ml-1 xl:font-[700] xl:ml-5 nav_link   items-center border bg-white  xl:py-2 rounded-lg  flex justify-center  xl:px-[30px]">
                          Explore More
                          <BsArrowRightShort className=" text-xl lg:text-lg" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="   rounded-[12px] relative  image-container ">
                      <img
                        className="   rounded-[12px]"
                        src={BananaMenu4}
                        alt=""
                      />
                      <div className=" absolute bottom-5    ">
                        <p className="xl:text-[15px] lg:text-[12px] lg:font-[400] lg:px-[23px] lg:py-1 lg:ml-1 xl:font-[700] xl:ml-5 nav_link   items-center border bg-white  xl:py-2 rounded-lg  flex justify-center  xl:px-[30px]">
                          Explore More
                          <BsArrowRightShort className=" text-xl" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="   rounded-[12px] relative  image-container ">
                      <img
                        className="   rounded-[12px]"
                        src={BananaMenu5}
                        alt=""
                      />
                      <div className=" absolute bottom-5    ">
                        <p className="xl:text-[15px] lg:text-[12px] lg:font-[400] lg:px-[23px] lg:py-1 lg:ml-1 xl:font-[700] xl:ml-5 nav_link   items-center border bg-white  xl:py-2 rounded-lg  flex justify-center  xl:px-[30px]">
                          Explore More
                          <BsArrowRightShort className=" text-xl" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="   rounded-[12px] relative  image-container ">
                      <img
                        className="   rounded-[12px]"
                        src={BananaMenu6}
                        alt=""
                      />
                      <div className=" absolute bottom-5    ">
                        <p className="xl:text-[15px] lg:text-[12px] lg:font-[400] lg:px-[23px] lg:py-1 lg:ml-1 xl:font-[700] xl:ml-5 nav_link   items-center border bg-white  xl:py-2 rounded-lg  flex justify-center  xl:px-[30px]">
                          Explore More
                          <BsArrowRightShort className=" text-xl" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="   rounded-[12px] relative  image-container ">
                      <img
                        className="   rounded-[12px]"
                        src={BananaMenu7}
                        alt=""
                      />
                      <div className=" absolute bottom-5    ">
                        <p className="xl:text-[15px] lg:text-[12px] lg:font-[400] lg:px-[23px] lg:py-1 lg:ml-1 xl:font-[700] xl:ml-5 nav_link   items-center border bg-white  xl:py-2 rounded-lg  flex justify-center  xl:px-[30px]">
                          Explore More
                          <BsArrowRightShort className=" text-xl" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </button>
    </div>
  );
};

export default DropdownSection2;
