import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import "./navbar.css";
import { Menu } from "@mantine/core";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BurgerNav = () => {
  const [opening, { toggle }] = useDisclosure(false);
  const label = opening ? "Close navigation" : "Open navigation";
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBlog, setIsOpenBlog] = useState(false);
  const [isOpenPages, setIsOpenPages] = useState(false);
  const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);
  const [isOpenContactUs, setIsOpenContactUs] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const toggleCollapseBlog = () => {
    setIsOpenBlog(!isOpenBlog);
  };
  const toggleCollapsePages = () => {
    setIsOpenPages(!isOpenPages);
  };
  const toggleCollapseAboutUs = () => {
    setIsOpenAboutUs(!isOpenAboutUs);
  };
  const toggleCollapseContactUs = () => {
    setIsOpenContactUs(!isOpenContactUs);
  };
  const toggleCollapseServices = () => {
    setIsOpenServices(!isOpenServices);
  };
  return (
    <div className="  sm:show md:show lg:hidden xl:hidden 2xl:hidden">
      <Menu shadow="md">
        <Menu.Target>
          <Burger opened={opening} onClick={toggle} aria-label={label} />
        </Menu.Target>
        <div className={`${opening ? "display_block" : "display_none"}`}>
          <Menu.Dropdown className=" w-[100%]">
            <div className=" w-[380px] sm:w-[640px] md:w-[750px]">
              <Link to="/">
                <p className=" cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                  Home
                </p>
              </Link>

              <div className="  flex justify-between items-center gap-2 cursor-pointer py-[10px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                <Link to="/shop">
                  <p className=" ">Shop</p>
                </Link>
                <div
                  onClick={toggleCollapse}
                  className=" mr-0 sm:mr-5 lg:mr-5 p-2 bg_arrow_down "
                >
                  {isOpen ? (
                    <RiArrowUpSLine className=" text-lg" />
                  ) : (
                    <RiArrowDownSLine className="  text-lg " />
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-[1.2s] ${
                  isOpen ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Cart
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    My Account
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Checkout
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Wishlist
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    My Design
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Product Style
                  </li>
                </ul>
              </div>
              <div className="  flex justify-between items-center gap-2 cursor-pointer py-[10px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                <Link to="/blog">
                  <p className=" ">Blog</p>
                </Link>
                <div
                  onClick={toggleCollapseBlog}
                  className=" mr-0 sm:mr-5 lg:mr-5 p-2 bg_arrow_down "
                >
                  {isOpenBlog ? (
                    <RiArrowUpSLine className=" text-lg" />
                  ) : (
                    <RiArrowDownSLine className="  text-lg " />
                  )}
                </div>
              </div>
              <div
                className={` overflow-hidden transition-all duration-[1.2s] ${
                  isOpenBlog ? "max-h-screen" : "max-h-0"
                } `}
              >
                <ul>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Post Format
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Sticky Post
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    No Slider{" "}
                  </li>
                </ul>
              </div>
              <div className="  flex justify-between items-center gap-2 cursor-pointer py-[10px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                <p className=" ">Pages</p>
                <div
                  onClick={toggleCollapsePages}
                  className=" mr-0 sm:mr-5 lg:mr-5 p-2 bg_arrow_down "
                >
                  {isOpenPages ? (
                    <RiArrowUpSLine className=" text-lg" />
                  ) : (
                    <RiArrowDownSLine className="  text-lg " />
                  )}
                </div>
              </div>
              <div
                className={` overflow-hidden transition-all duration-[1.2s] ${
                  isOpenPages ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Design online
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Request A Quote
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Our Team
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Services
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    FAQs
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Pricing Plan
                  </li>
                </ul>
              </div>
              <div className="  flex justify-between items-center gap-2 cursor-pointer py-[10px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                <p className=" ">About Us</p>
                <div
                  onClick={toggleCollapseAboutUs}
                  className="mr-0 sm:mr-5 lg:mr-5 p-2 bg_arrow_down "
                >
                  {isOpenAboutUs ? (
                    <RiArrowUpSLine className=" text-lg" />
                  ) : (
                    <RiArrowDownSLine className="  text-lg " />
                  )}
                </div>
              </div>
              <div
                className={` overflow-hidden transition-all duration-[1.2s] ${
                  isOpenAboutUs ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    About Us 1
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    About Us 2
                  </li>
                </ul>
              </div>
              <div className="  flex justify-between items-center gap-2 cursor-pointer py-[10px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                <p className=" ">Contact Us</p>
                <div
                  onClick={toggleCollapseContactUs}
                  className=" mr-0 sm:mr-5 lg:mr-5 p-2 bg_arrow_down "
                >
                  {isOpenContactUs ? (
                    <RiArrowUpSLine className=" text-lg" />
                  ) : (
                    <RiArrowDownSLine className="  text-lg " />
                  )}
                </div>
              </div>
              <div
                className={` overflow-hidden transition-all duration-[1.2s] ${
                  isOpenContactUs ? "max-h-screen" : "max-h-0"
                }`}
              >
                <ul>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Contact Us 1
                  </li>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Contact Us 2
                  </li>
                </ul>
              </div>
              <div className="  flex justify-between items-center gap-2 cursor-pointer py-[10px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                <p className=" ">Services</p>
                <div
                  onClick={toggleCollapseServices}
                  className="mr-0 sm:mr-5 lg:mr-5 p-2 bg_arrow_down "
                >
                  {isOpenServices ? (
                    <RiArrowUpSLine className=" text-lg" />
                  ) : (
                    <RiArrowDownSLine className="  text-lg " />
                  )}
                </div>
              </div>
              <div
                className={` overflow-hidden transition-all duration-[1.2s] ${
                  isOpenServices ? "max-h-screen" : " max-h-0"
                }`}
              >
                <ul>
                  <li className="  cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] pl-6">
                    Service Detail
                  </li>
                </ul>
              </div>
              <p className=" cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                FAQs
              </p>
              <p className=" cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                Our Team
              </p>
              <p className=" cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                Pricing Plans
              </p>
              <p className=" cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                Print Your Own
              </p>
              <p className=" cursor-pointer py-[13px] px-[15px] hover:text-white text-[15px] font-[600] hover:bg-[#2EBB77] ">
                Request a Quote
              </p>
            </div>
          </Menu.Dropdown>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerNav;
