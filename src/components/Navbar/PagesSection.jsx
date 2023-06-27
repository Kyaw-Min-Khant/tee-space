import { Group, HoverCard } from "@mantine/core";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const PagesSection = () => {
  return (
    <>
      <div className="flex  justify-center gap-2  items-center">
        <Group position="center">
          <HoverCard radius={0} openDelay={200} shadow="md">
            <HoverCard.Target>
              <p className="flex hover:text-[#2EBB77] cursor-pointer justify-center gap-2  items-center font-[700] text-[15px] ">
                Pages
                <IoIosArrowDown className=" text-xs" />
              </p>
            </HoverCard.Target>
            <HoverCard.Dropdown
              m={0}
              p={0}
              className=" pt-8 border-0 mb-8 ml-8"
            >
              <ul className=" w-[200px] lg:w-[140px] ">
                <li className=" m-0 w-[100%] relative hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                  Design Online{" "}
                  <span className=" absolute bg-[#DD3333] lg:right-1  lg:top-1 rounded-[2px] cursor-pointer text-[9px] font-[500] px-[7px] right-9 py-[1px] text-white top-2">
                    Hot
                  </span>
                </li>
                <HoverCard radius={0} position="right-start">
                  <HoverCard.Target>
                    <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                      Shop <MdKeyboardArrowRight />
                    </li>
                  </HoverCard.Target>
                  <HoverCard.Dropdown
                    m={0}
                    p={0}
                    className=" border-0 mb-8 ml-[-10px]"
                  >
                    <ul className="w-[200px] lg:w-[140px] ">
                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        Cart
                      </li>

                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        My Account
                      </li>
                      <HoverCard radius={0} position="right-start">
                        <HoverCard.Target>
                          <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                            Checkout <MdKeyboardArrowRight />
                          </li>
                        </HoverCard.Target>
                        <HoverCard.Dropdown
                          m={0}
                          p={0}
                          className=" border-0 mb-8 ml-[-10px]"
                        >
                          <ul className="w-[200px] lg:w-[140px] ">
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Order Tracking
                            </li>
                          </ul>
                        </HoverCard.Dropdown>
                      </HoverCard>
                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        Wishlist
                      </li>
                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        My Design
                      </li>
                      <HoverCard radius={0} position="right-start">
                        <HoverCard.Target>
                          <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                            Product Style <MdKeyboardArrowRight />
                          </li>
                        </HoverCard.Target>
                        <HoverCard.Dropdown
                          m={0}
                          p={0}
                          className=" border-0 mb-8 ml-[-10px]"
                        >
                          <ul className="w-[200px] lg:w-[140px] ">
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Horizontal Slide
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Vertical Slide Sticky
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Vertical Gallery
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Grid Gallery
                            </li>
                          </ul>
                        </HoverCard.Dropdown>
                      </HoverCard>
                    </ul>
                  </HoverCard.Dropdown>

                  <HoverCard radius={0} position="right-start">
                    <HoverCard.Target>
                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        About Us <MdKeyboardArrowRight />
                      </li>
                    </HoverCard.Target>
                    <HoverCard.Dropdown
                      m={0}
                      p={0}
                      className=" border-0 mb-8 ml-[-10px]"
                    >
                      <ul className="w-[200px] lg:w-[140px] ">
                        <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                          About Us 1
                        </li>
                        <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                          About Us 2
                        </li>
                      </ul>
                    </HoverCard.Dropdown>
                  </HoverCard>
                  <HoverCard radius={0} position="right-start">
                    <HoverCard.Target>
                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        Contact Us <MdKeyboardArrowRight />
                      </li>
                    </HoverCard.Target>
                    <HoverCard.Dropdown
                      m={0}
                      p={0}
                      className=" border-0 mb-8 ml-[-10px]"
                    >
                      <ul className="w-[200px] lg:w-[140px] ">
                        <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                          Contact Us 1
                        </li>
                        <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                          Contact Us 2
                        </li>
                      </ul>
                    </HoverCard.Dropdown>
                  </HoverCard>
                  <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                    Print Your Own
                  </li>
                  <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                    Request a Quote
                  </li>
                  <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                    Our Team
                  </li>
                  <HoverCard radius={0} position="right-start">
                    <HoverCard.Target>
                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        Services
                        <MdKeyboardArrowRight />
                      </li>
                    </HoverCard.Target>
                    <HoverCard.Dropdown
                      m={0}
                      p={0}
                      className=" border-0 mb-8 ml-[-10px]"
                    >
                      <ul className="w-[200px] lg:w-[140px] ">
                        <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        Service List
                        </li>
                        <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                          Service Detail
                        </li>
                      </ul>
                    </HoverCard.Dropdown>
                  </HoverCard>
                  <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                    Pricing Plans
                  </li>
                  <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                    FAQs
                  </li>
                </HoverCard>
              </ul>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </div>
    </>
  );
};

export default PagesSection;
