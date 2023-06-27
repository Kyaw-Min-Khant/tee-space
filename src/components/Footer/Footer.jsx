import React from "react";
import logo from "./footer-payment-images/logo-black.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import FooterImg from "./footer-payment-images/footer-payments.png";
import "./Footer.css";

const Footer = () => {
  const handleSend = () => {
    // Add your logic here for sending the input value
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className=" pt-14    gap-10  flex  flex-wrap justify-around">
        <div className=" w-full sm:w-full md:w-auto lg:w-auto flex  xl:m-0 lg:m-0 2xl:m-0 ml-10  flex-col mb-2 ">
          <div className=" mb-4">
            <Link to={"/"}>
              <img src={logo} alt="" className=" h-10" />
            </Link>
            <ul className="flex flex-col mt-5 gap-3">
              <li>
                <p className=" text-[#7A7A7A] ">hello@teespace.io</p>
              </li>
              <li>
                <strong className="text-[18px] font-[700] leading-[32.4px]">
                  +02 036 038 3996
                </strong>
              </li>
              <li>
                <div className="text-[18px] font-[500] leading-[28.8px]  text-[#7A7A7A]">
                  3665 Paseo Place, Suite 0960 <br />
                  San Diego
                </div>
              </li>
            </ul>
          </div>
        </div>

        <ul className="  w-full sm:w-full md:w-auto lg:w-auto flex flex-col xl:m-0 lg:m-0 2xl:m-0 ml-10 gap-4">
          <li className=" font-bold mb-1 text-xl"> Information</li>
          <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
            About us
          </li>
          <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
            Our Blog
          </li>
          <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
            Start a Return
          </li>
          <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
            Contact Us
          </li>
          <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
            Shipping FAQ
          </li>
        </ul>
        <ul className=" w-full sm:w-full md:w-auto lg:w-auto flex flex-col xl:m-0 lg:m-0 2xl:m-0  ml-10">
          <li className="">
            <ul className=" flex flex-col gap-4">
              <li className=" font-bold mb-1 text-xl"> Useful links</li>
              <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
                My Account
              </li>
              <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
                Print Provider
              </li>
              <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
                Become a Partner
              </li>
              <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
                Custom Products
              </li>
              <li className=" font-[500] cursor-pointer hover:text-[#2EBB77]  text-[#7A7A7A] text-md">
                Make your own shirt
              </li>
            </ul>
          </li>
        </ul>

        <ul className=" w-full sm:w-full md:w-auto lg:w-auto flex flex-col xl:m-0 lg:m-0 2xl:m-0  ml-10 gap-4">
          <li className=" font-bold mb-1 text-xl"> Newsletter</li>
          <li className=" font-[500]  text-[#7A7A7A] text-md">
            Get the latest news, events & more delivered <br /> to your inbox.
          </li>
          <li className=" font-[500]   flex justify-start items-center  text-[#7A7A7A] text-md">
            <div className="input-with-send-icon">
              <input
                type="text"
                className="input-field shadow_input"
                placeholder="Your email address"
              />
              <button className="send-button" onClick={handleSend}>
                <BsArrowRight className="send-icon" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className=" mt-20 flex flex-col items-center gap-4">
        <img src={FooterImg} alt="" />
        <p className=" mb-10 font-[500] leading-[21px] text-[15px] text-[#7A7A7A]">
          © 2022 TeeSpace. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
