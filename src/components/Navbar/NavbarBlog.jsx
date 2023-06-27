import { Group, HoverCard } from "@mantine/core";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./navbar.css";

const NavbarBlog = () => {
  return (
    <>
      <div className="flex  justify-center gap-2  items-center">
        <Group position="center">
          <HoverCard radius={0} openDelay={200} shadow="md">
            <HoverCard.Target>
              <p className="flex hover:text-[#2EBB77] cursor-pointer justify-center gap-2  items-center font-[700] text-[15px] ">
                Blog
                <IoIosArrowDown className=" text-xs" />
              </p>
            </HoverCard.Target>
            <HoverCard.Dropdown
              m={0}
              p={0}
              className=" pt-8 border-0 mb-8 ml-8"
            >
              <ul className=" w-[190px] ">
                <HoverCard radius={0} position="right-start">
                  <HoverCard.Target>
                    <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                      Single Blog <MdKeyboardArrowRight />
                    </li>
                  </HoverCard.Target>
                  <HoverCard.Dropdown
                    m={0}
                    p={0}
                    className=" border-0 mb-8 ml-[-10px]"
                  >
                    <ul className="w-[190px] ">
                      <HoverCard radius={0} position="right-start">
                        <HoverCard.Target>
                          <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                            Post Formats <MdKeyboardArrowRight />
                          </li>
                        </HoverCard.Target>
                        <HoverCard.Dropdown
                          m={0}
                          p={0}
                          className=" border-0 mb-8 ml-[-10px]"
                        >
                          <ul className="w-[190px] ">
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Standard Post
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Image Post
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Video Post
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Gallery Post
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Audio Post
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Quote Post
                            </li>
                          </ul>
                        </HoverCard.Dropdown>
                      </HoverCard>
                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        Sticky Post
                      </li>
                      <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                        No Sidebar
                      </li>
                    </ul>
                  </HoverCard.Dropdown>
                </HoverCard>
                <HoverCard radius={0} position="right-start">
                  <HoverCard.Target>
                    <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                      Archive Blog <MdKeyboardArrowRight />
                    </li>
                  </HoverCard.Target>
                  <HoverCard.Dropdown
                    m={0}
                    p={0}
                    className=" border-0 mb-8 ml-[-10px]"
                  >
                    <ul className="w-[190px] ">
                      <HoverCard radius={0} position="right-start">
                        <HoverCard.Target>
                          <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                            Blog Image <MdKeyboardArrowRight />
                          </li>
                        </HoverCard.Target>
                        <HoverCard.Dropdown
                          m={0}
                          p={0}
                          className=" border-0 mb-8 ml-[-10px]"
                        >
                          <ul className="w-[190px] ">
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Blog Large Image
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Blog Medium Image
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Blog Grid
                            </li>
                          </ul>
                        </HoverCard.Dropdown>
                      </HoverCard>
                      <HoverCard radius={0} position="right-start">
                        <HoverCard.Target>
                          <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                            Blog Pagination <MdKeyboardArrowRight />
                          </li>
                        </HoverCard.Target>
                        <HoverCard.Dropdown
                          m={0}
                          p={0}
                          className=" border-0 mb-8 ml-[-10px]"
                        >
                          <ul className="w-[190px] ">
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Blog Pagination Nav
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Blog Paging LoadMore
                            </li>
                          </ul>
                        </HoverCard.Dropdown>
                      </HoverCard>
                      <HoverCard radius={0} position="right-start">
                        <HoverCard.Target>
                          <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                            Blog Sidebar <MdKeyboardArrowRight />
                          </li>
                        </HoverCard.Target>
                        <HoverCard.Dropdown
                          m={0}
                          p={0}
                          className=" border-0 mb-8 ml-[-10px]"
                        >
                          <ul className="w-[190px] ">
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Blog SideBar Left
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Blog SideBar Right
                            </li>
                            <li className=" m-0 w-[100%] hover:text-white cursor-pointer py-[13px] px-[15px] hover:bg-[#2EBB77] font-[500] text-[15px] flex justify-between items-center">
                              Blog No SideBar
                            </li>
                          </ul>
                        </HoverCard.Dropdown>
                      </HoverCard>
                    </ul>
                  </HoverCard.Dropdown>
                </HoverCard>
              </ul>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>
      </div>
    </>
  );
};

export default NavbarBlog;
