import React from "react";
import { Link } from "react-router-dom";
import logoPhoto from "./navbar-logo/logo-black.png";
import { BsHandbag } from "react-icons/bs";
import "./navbar.css";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";
import InvoiceCard from "../../Shop/InvoiceCard";
const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { products } = useSelector((state) => state?.products);
  const total = products?.reduce((pv, cv) => pv + cv?.priceUp, 0);

  return (
    <div className=" py-2  sticky top-0 z-[2000] bg-white flex border  justify-between items-center">
      <Drawer
        title="Shopping Cart"
        position="right"
        size="50%"
        opened={opened}
        onClose={close}
        className="py-10"
      >
        <div className=" flex  min-h-[85vh]">
          {products.length === 0 ? (
            <div className="min-h-[90vh] w-full flex justify-center items-center">
              <h2 className="text-lg font-semibold ">Empty cart</h2>
            </div>
          ) : (
            <div className=" flex mt-[10px] md:mt-[50px]  flex-col gap-3 w-full">
              {products?.map((item) => (
                <InvoiceCard className="" key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
        <div className="lg:mx-2 flex gap-x-2">
          <h2 className="">Total :</h2>
          <h2 className="">{total}</h2>
        </div>
      </Drawer>
      <div className=" ml-2 sm:ml-3 md:ml-3 lg:ml-8 xl:ml-10 2xl:ml-10">
        <Link to={"/"}>
          <img
            src={logoPhoto}
            className=" w-[150px]  max-h-[84px] max-w-[100%] "
            alt=""
          />
        </Link>
      </div>
      <Dropdown />
      <div className="  mr-3 sm:mr-3 md:mr-3 lg:mr-8 xl:mr-10 2xl:mr-10 gap-2 flex justify-start sm:justify-start sm:gap-2 md:gap-2 lg:gap-10 xl:gap-10 2xl:gap-10 md:justify-start  lg:justify-center items-center">
        <div
          onClick={open}
          className=" cursor-pointer relative sm:w-12 sm:h-12  md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-14 xl:h-14 2xl:w-14 2xl:h-14   flex justify-center items-center rounded-full  bg-gray-100 w-8 h-8"
        >
          <BsHandbag className=" text-2xl lg:text-xl" />
          <span className=" bottom-6 left-7 sm:left-8  sm:bottom-9  text-xs w-3 h-3  sm:w-5 sm:h-5 sm:text-xs md:text-sm lg:text- xl:text-  lg:bottom-10 md:bottom-7 md:left-8 lg:left-10 xl:left-10 xl:bottom-10 absolute lg:w-5 lg:h-5 flex justify-center items-center text-white rounded-full bg-[#2EBB77]">
            {products?.length}
          </span>
        </div>
        <div className=" hidden sm:hidden md:hidden lg:hidden lg:gap-3 xl:gap-5 2xl:gap-5 xl:flex 2xl:flex ">
          <div>
            <p className="  text- line-clamp-1 capitalize tracking-wide font-[700] text-gray-400 ">
              HOTLINE:
            </p>
            <strong className=" text-[18px] line-clamp-[32.4px] font-[700]">
              00 1900 8188
            </strong>
          </div>
          <button className=" bg-black hover:bg-[#2EBB77] py-3 px-6 rounded-lg text-md text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
