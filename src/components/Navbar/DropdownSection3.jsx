import { Badge, Group, HoverCard } from "@mantine/core";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown3img from "./Dropdown3/banner-menu.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const DropdownSection3 = () => {
  return (
    <div>
      <div className=" hidden sm:hidden md:hidden  mx-5 xl:flex 2xl:flex lg:flex justify-center gap-2">
        <div className=" flex  justify-center gap-5 items-center  ">
          <div className="flex  justify-center gap-2  items-center">
            <Group position="center">
              <HoverCard openDelay={200} shadow="md">
                <HoverCard.Target>
                  <p className="flex cursor-pointer hover:text-[#2EBB77] justify-center gap-2  items-center font-[700] text-[15px] ">
                    Shop
                    <IoIosArrowDown className=" text-xs" />
                  </p>
                </HoverCard.Target>
                <HoverCard.Dropdown className=" pt-8 border-0 mb-8 mr-8 ml-8">
                  <div className="  py-[15px] lg:w-[900px] xl:w-[1250px] h-[] flex flex-wrap gap-10 justify-evenly">
                    <ul>
                      <li className=" cursor-text text-[18px] my-[23px] font-[700] leading-[23.8px]  ">
                        SHOP LAYOUT
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Shop Grid Default
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Shop Grid 5 Columns
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Shop List
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Hidden Sidebar Fixed
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Hidden Sidebar Toggle
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Product Hover Style 1
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Product Hover Style 2
                      </li>
                    </ul>
                    <ul>
                      <li className=" text-[18px] cursor-text my-[23px] font-[700] leading-[23.8px]  ">
                        PRODUCT LAYOUT
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Simple Product
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Variable Product
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Horizontal Slide
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Vertical Slide
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Vertical Slide {"(Sticky)"}
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Vertical Gallery
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Grid Gallery
                      </li>
                    </ul>
                    <ul>
                      <li className=" cursor-text text-[18px] my-[23px] font-[700] leading-[23.8px]  ">
                        WOO PAGES
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Shop
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Cart
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        My account
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Checkout
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Wishlist
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        Order Tracking
                      </li>
                      <li className=" text-[15px] font-[500] hover:text-[#2EBB77] cursor-pointer pb-[17px] ">
                        My Designs
                      </li>
                    </ul>
                    <div className=" w-[] ] ">
                      <div className=" image-container w-[100%] rounded-[12px] relative">
                        <img
                          src={Dropdown3img}
                          className=" relative w-[100%] "
                          alt=""
                        />
                        <div className=" left-4 absolute top-7">
                          <p className=" w-[60%] px-2  flex justify-center text-white  text-[15px] font-[700] bg-[#B479D9] rounded">
                            From $13
                          </p>
                          <p className=" text-[30px] mt-[15px] font-[700] leading-[.px] ">
                            25% off <br />
                            everything
                          </p>
                          <p className=" mt-[20px] mb-[20px] text-[19px] font-[500] leading-[] ">
                            Design your own
                          </p>
                          <button className=" text-[15px] font-[700] leading-[48px] mt-[30px] h-[48px] flex justify-center items-center gap-2 px-[30px] rounded-[12px] bg-white text-black ">
                            Shop Now <BsArrowRightShort className=" text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownSection3;
