import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Tooltip } from "@mantine/core";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { BsPlusLg, BsFacebook } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsPinterest, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { addProduct } from "../redux/Products";

const ShoppingCardTwo = (props) => {
  const handleOpen = () => setOpen(!open);
  const [opened, { open, close }] = useDisclosure(false);
  const {
    id,
    name,
    image,
    backdrop_image,
    description,
    category,
    tags,
    priceUp,
    priceTo,
    discountPrice,
    onsale,
    brand,
  } = props;
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className=" block card2 sm:p-0 py-5 sm:flex gap-5">
      <Modal size="80%" opened={opened} onClose={close}>
        <div className="flex flex-wrap gap-x-5 ">
          <div className="mx-auto">
            <img
              src={image}
              className="lg:h-[500px] md:h-[400px] h-[330px] object-fill"
              alt=""
            />
          </div>
          <div className=" w-[500px] mx-auto">
            <div className=" flex px-3  gap-y-2 flex-col">
              <h2 className=" text-xl md:text-2xl font-semibold">{name}</h2>
              <p className=" text-xl md:text-2xl font-semibold "> ${priceUp}</p>
              <p className=" text-sm leading-5 text-slate-500 font-light">
                {description}
              </p>
              <div className="flex items-center gap-x-5 py-3 ">
                <div className=" flex bg-[#EEEEEE] px-3 py-1 rounded-md justify-between items-center ">
                  <div className="">
                    <BsPlusLg className="text-lg  text-slate-500  hover:text-slate-800 " />
                  </div>
                  <div className="">
                    <span className="px-4">1</span>
                  </div>
                  <div className="">
                    <BiMinus className="text-lg  text-slate-500  hover:text-slate-800 " />
                  </div>
                </div>
                <button className="md:px-5 px-1 py-1 w-full rounded-md font-semibold text-white bg-[#2EBB77]">
                  Add to Cart
                </button>
              </div>

              <hr />
              <span className="flex gap-x-2  items-center">
                <h2 className="text-[20px] font-medium">Category</h2>
                <p className="text-[15px] text-slate-600">{category}</p>
              </span>
              <span className="flex gap-x-2 items-center">
                <h2 className="text-[20px] font-medium">Tags</h2>
                <p className="text-[15px] text-slate-600">{tags}</p>
              </span>
              <span className="flex gap-x-2 items-center">
                <h2 className="text-[20px] font-medium">Share</h2>
                <div className=" flex gap-x-2 items-center ">
                  <BsFacebook className="text-slate-500 hover:text-blue-500" />
                  <BsTwitter className="text-slate-500 hover:text-blue-500" />
                  <AiFillLinkedin className="text-slate-500 hover:text-blue-500" />
                  <BsPinterest className="text-slate-500 hover:text-blue-500" />
                  <FaTelegramPlane className="text-slate-500 hover:text-blue-500" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </Modal>
      <div className=" mx-3 relative">
        <span className="text-[13px] items-center absolute top-[10px] rounded-[3px] left-[10px] z-[100] font-[600px] border-[3xp] bg-[#61CE70] px-[6px] text-white">
          {onsale}
        </span>
        <span className="text-[13px] absolute top-[35px] rounded-[3px] left-[10px] z-[100] font-[600px] border-[3xp] bg-[#b479d9] px-[6px] text-white">
          {brand}
        </span>
        <div className="first-img">
          <img
            id="main-img"
            className="lg:max-h-[320px] lg:w-auto w-[500px] sm:w-[400px] rounded-lg first-img-hover"
            src={image}
            alt=""
          />
          <div className="second-img overflow-hidden">
            <img
              id="hover-img"
              className="lg:max-h-[320px] lg:w-auto w-[500px] sm:w-[400px] rounded-lg second-img-hover"
              src={backdrop_image}
              alt=""
            />
          </div>
        </div>
        <div className="icon-hover  z-[100]">
          <div className="p-1 absolute bottom-5 sm:left-[10%] md:left-[15%]  lg:left-[20%] left-[23%]  flex justify-center items-start gap-x-3">
            <Tooltip
              label="Wish list"
              color="dark"
              withArrow
              arrowPosition="center"
            >
              <div className="flex border-[1px] text-black hover:text-white border-[#dadada] bg-white hover:bg-[#61CE70] hover:border-0 rounded-full justify-center items-center w-[50px] h-[50px] sm:w-[30px] sm:h-[30px]">
                <AiOutlineStar />
              </div>
            </Tooltip>
            <Tooltip
              label="Compare"
              color="dark"
              withArrow
              arrowPosition="center"
            >
              <div className="flex  border-[1px] text-black hover:text-white border-[#dadada] bg-white hover:bg-[#61CE70] hover:border-0 rounded-full justify-center items-center w-[50px] h-[50px] sm:w-[30px] sm:h-[30px]">
                <BsArrowLeftRight />
              </div>
            </Tooltip>
            <Tooltip
              label="Quick view"
              color="dark"
              withArrow
              arrowPosition="center"
            >
              <div
                onClick={open}
                className="flex border-[1px] text-black hover:text-white border-[#dadada] bg-white hover:bg-[#61CE70] hover:border-0 rounded-full justify-center items-center w-[50px] h-[50px] sm:w-[30px] sm:h-[30px]"
              >
                <FiSearch />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className=" mx-3 flex flex-col gap-2">
        <h2 className=" text-xl md:text-2xl font-semibold">{name}</h2>
        <p className="">${priceUp}</p>
        <div className="  flex  items-center gap-2">
          <div className="w-[15px] h-[15px] rounded-full bg-red-600"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-green-600"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-blue-600"></div>
          {!hide && (
            <h2 onClick={() => setHide(true)} className="">
              2+
            </h2>
          )}
          {hide && (
            <div onClick={() => setHide(false)} className="flex gap-2">
              <div className="w-[15px] h-[15px] rounded-full bg-black"></div>
              <div className="w-[15px] h-[15px] rounded-full bg-yellow-600"></div>
            </div>
          )}
        </div>

        <p className="text-sm pb-2 text-slate-600 font-serif ">{description}</p>
        <button
          onClick={() => dispatch(addProduct(props))}
          className="w-[130px] text-sm rounded-lg  font-semibold py-2 text-white bg-[#61CE70]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCardTwo;
