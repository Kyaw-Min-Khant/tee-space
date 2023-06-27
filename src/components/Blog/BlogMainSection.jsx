import React from "react";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { RiDoubleQuotesR } from "react-icons/ri";
import { BsHash, BsPinterest } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaUserCircle,
} from "react-icons/fa";
import BlogSlide from "./BlogSlide";
import BlogComments from "./BlogComments";
const BlogMainSection = () => {
  return (
    <div className=" p-2 mx-auto">
      <div className=" flex flex-col gap-5">
        <div className=" flex flex-col gap-5 items-center">
          <div className=" px-4 py-1 rounded-[3rem] flex items-center bg-gray-100 hover:bg-emerald-500 text-green-500 hover:text-white">
            <a className="   font-semibold text-lg">Design Services</a>
          </div>
          <h2 className=" text-center text-2xl  md:text-4xl font-semibold">
            Make yourself happy with our T-shirt customer designer
          </h2>
          <div className=" flex flex-wrap gap-2  md:gap-5 items-baseline md:items-center justify-center">
            <div className=" flex items-center gap-2">
              <h4 className=" text-gray-500 text-xl">August 20, 2022</h4>
              <span className="text-gray-500 "> &mdash; </span>
              <h4 className="text-lg">
                <span className=" text-gray-500">by </span>
                <span className=" hover:text-emerald-500 font-medium">
                  admin
                </span>
              </h4>
            </div>
            <div className=" flex  gap-2">
              <div className="flex items-center gap-2">
                <GoCommentDiscussion className=" text-gray-500 text-lg" />
                <h4 className=" hover:text-emerald-500 text-lg font-medium">
                  3 Comments
                </h4>
              </div>
              <div className=" flex items-center gap-1">
                <AiOutlineStar className="text-lg mb-1 text-emerald-500" />
                <h4 className=" text-emerald-500 text-lg font-medium">
                  Sticky
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-10 items-center">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-2.jpg"
            alt=""
            className=" rounded-lg w-[350px] md:w-[730px]"
          />
          <p className=" text-gray-500 text-lg text-start  break-all ">
            Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla
            nibh, idae gravida mi purus sit amet erat. Ut dictum nisi
            massa.Maecenas id justo rhoncus, volutpat nunc sit amet,
            facilisiulum scelerisque dictum Maecenas id justo rhoncus, volutpat
            nunc sit amet, facilisis sem. Vestibulum scelerisque dictsap.
          </p>
          <div className=" flex flex-col gap-2   items-center">
            <RiDoubleQuotesR className=" text-6xl text-emerald-500" />
            <p className=" text-center px-3 font-medium text-2xl">
              I think it's important people see themselves in film, but it's
              even more important they see people they maybe don't know as well.
            </p>
          </div>
          <p className=" text-gray-500 text-lg text-start leading-7">
            Fusce eget malesuada eros. Vivamus eros dolor, auctor aliquet dolor
            sit amet, euismod imperdiet ex. Nam sed nulla sed massa suscipit
            feugiat. Mauris et nunc ornare, placerat ex ac, interdum magna.
            Vestibulum urna massa, hendrerit sed fringilla in, mollis vitae
            tellus. Vestibulum mattis nulla elementum tristique fringilla. Morbi
            in sollicitudin erat. Ut quis tristique mauris. Proin risus purus,
            iaculis a orci ut, cursus bibendum panisl. Duis aliquam gravida eros
            eget molestie. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Suspendisse pharetra, arcu
            eu porta aliquet, eros dui tincidunt purus, eu vehicula magna nisl
            in purus. <br /> Vivamus eros dolor, auctor aliquet dolor sit amet,
            euismod imperdiet ex. Nam sed nulla sed massa suscipit feugiat.
            Mauris et nunc ornare, placerat ex ac, interdum magna. Vestibulum
            urna massa, hemolli
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
          <div className=" flex gap-3">
            <h3 className=" text-gray-500 hover:text-emerald-500 text-lg flex items-center">
              <span className="">
                <BsHash />
              </span>
              <span className="">company</span>
            </h3>
            <h3 className=" text-gray-500 hover:text-emerald-500 text-lg flex items-center ">
              <span className="">
                <BsHash />
              </span>
              <span className="">printing</span>
            </h3>
            <h3 className=" text-gray-500 hover:text-emerald-500 text-lg flex items-center">
              <span className="">
                <BsHash />
              </span>
              <span className="">printshop</span>
            </h3>
          </div>
          <div className=" flex gap-2 md:gap-4 items-center">
            <span className=" text-lg font-medium">Share :</span>
            <div className=" flex gap-3">
              <div className=" w-10 h-10 border rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white ">
                <FaFacebookF />
              </div>
              <div className=" w-10 h-10 border rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white ">
                <FaTwitter />
              </div>
              <div className=" w-10 h-10 border rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white ">
                <FaLinkedinIn />
              </div>
              <div className=" w-10 h-10 border rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white ">
                <BsPinterest />
              </div>
              <div className=" w-10 h-10 border rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white ">
                <FaTelegramPlane />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex gap-2 items-center">
          <a href="#" className="">
            <IoIosArrowBack className=" text-2xl text-gray-500 cursor-pointer" />
          </a>
          <div className=" ">
            <h4 className=" uppercase tracking-wide text-lg text-gray-500">
              Previous
            </h4>
            <h4 className=" text-xl font-semibold">Post Gallery</h4>
          </div>
        </div>
        <hr />
        <hr className=" md:hidden mt-3" />
        <div className=" ">
          <div className=" relative">
            <FaUserCircle className=" text-gray-400 text-[80px]  absolute top-0 left-0" />
            <div className=" flex flex-col gap-1 ml-24">
              <h4 className=" text-lg font-semibold">admin</h4>
              <p className=" text-gray-500 text-lg text-start">
                Suspe ndisse suscipit sagittis leo sit met condimentum essum
                consecte uspe ndisse suscipit sagittis. Suscipit sagittis leo
                sit met condimentum
              </p>
              <a
                href="#"
                className=" hover:text-emerald-500 underline underline-offset-1 text-lg"
              >
                Website
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className=" flex justify-center">
          <BlogSlide />
        </div>
        <hr />
        <div className=" flex justify-center mt-5">
          <BlogComments />
        </div>
      </div>
    </div>
  );
};

export default BlogMainSection;
