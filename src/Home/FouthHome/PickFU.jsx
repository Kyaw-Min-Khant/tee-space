import React from "react";
import img1 from "../HomeImg/FourthImg/card1-1.jpg";
import img1_2 from "../HomeImg/FourthImg/card1-2.jpg";
import img2 from "../HomeImg/FourthImg/card2-1.jpg";
import img2_2 from "../HomeImg/FourthImg/card2-2.jpg";
import img3 from "../HomeImg/FourthImg/card3-1.jpg";
import img3_3 from "../HomeImg/FourthImg/card3-2.jpg";
import img4 from "../HomeImg/FourthImg/card4-1.jpg";
import img4_4 from "../HomeImg/FourthImg/card4-2.jpg";
import img5 from "../HomeImg/FourthImg/card5-1.jpg";
import Icons from "./Icons";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const PickFU = () => {
  return (
    <Splide
      options={{
        perPage: 4,
        rewind: true,
        type: "loop",
        arrows: false,
        cover: false,
        // autoplay: true,
        breakpoints: {
          1620: {
            perPage: 3,
            gap:"3rem",
          },
          1170:{
            perPage:3,
            gap:"2rem"
          },
          620:{
            perPage:2,
            gap:'1.5rem'
          },
          450: {
            perPage: 2,
            gap:"1rem"
          },
        },
        pagination: true,
        padding: "",
        gap: "2rem",
      }}
      className="flex flex-col justify-center mx-auto splide gap-4"
    >
      <SplideSlide id="1">
        <div className="card cursor-pointer relative min-w-[175px] h-[340px] sm:min-w-[200px] sm:h-[350px] md:min-w-[235px] md:h-[460px] lg:w-[330px] lg:h-[510px] xl:w-[330px] xl:h-[500px]">
          <div className="">
            <div className="img-container">
              <div className="upper_img w-full">
                <img src={img1} alt="" />
              </div>
              <div className="lower_img w-full">
                <img src={img1_2} alt="" />
              </div>
            </div>
          </div>
          <div className=" absolute top-2 left-2">
            <div className="flex flex-col gap-1">
              <div className="px-2 py-0 rounded-sm lg:rounded bg-[#2EBB77] text-white text-xs lg:text-base">
                -26%
              </div>
            </div>
          </div>
          <div className=" flex justify-center text-center">
            <div className=" absolute bottom-[1rem] md:bottom-[-0.1rem] lg:bottom-0">
              <h5 className=" text-md lg:text-lg font-bold card-title px-[10px]">
                Premium Crewneck Sweatshirt
              </h5>
              <h5 className=" text-md lg:text-lg font-bold text-[#2ebb77]">
                $29.00{" "}
                <span className="lg:text-sm text-xs line-through text-gray-600">
                  $39.00
                </span>
              </h5>
            </div>
          </div>
          <div className="icons_wrapper">
            <Icons />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide id="2">
        <div className="card cursor-pointer relative min-w-[175px] h-[340px] sm:min-w-[200px] sm:h-[350px] md:min-w-[235px] md:h-[460px] lg:w-[330px] lg:h-[510px] xl:w-[330px] xl:h-[500px]">
          <div className="">
            <div className="img-container">
              <div className="upper_img w-full">
                <img src={img2} alt="" />
              </div>
              <div className="lower_img w-full">
                <img src={img2_2} alt="" />
              </div>
            </div>
          </div>
          <div className=" absolute top-2 left-2">
            <div className="flex flex-col gap-1">
              <div className="px-2 py-0 rounded-sm lg:rounded bg-[#2EBB77] text-white text-xs lg:text-base">
                Sale!
              </div>
              <div className="px-2 py-0 rounded-sm lg:rounded bg-[#c699e2] text-white text-xs lg:text-base">
                New
              </div>
            </div>
          </div>
          <div className=" flex justify-center text-center">
            <div className=" absolute bottom-[1rem] md:bottom-[-0.1rem] lg:bottom-0">
              <h5 className=" text-md lg:text-lg font-bold card-title px-[30px]">
                Midweight Cotton Tee
              </h5>
              <h5 className=" text-md lg:text-lg font-bold">$26.00 - $29.00</h5>
            </div>
          </div>
          <div className="icons_wrapper">
            <Icons />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide id="3">
        <div className="card cursor-pointer relative min-w-[175px] h-[340px] sm:min-w-[200px] sm:h-[350px] md:min-w-[235px] md:h-[460px] lg:w-[330px] lg:h-[510px] xl:w-[330px] xl:h-[500px]">
          <div className="">
            <div className="img-container">
              <div className="upper_img w-full">
                <img src={img3} alt="" />
              </div>
              <div className="lower_img w-full">
                <img src={img3_3} alt="" />
              </div>
            </div>
          </div>
          <div className=" absolute top-2 left-2">
            <div className="flex flex-col gap-1">
              <div className="px-2 py-0 rounded-sm lg:rounded bg-[#2EBB77] text-white text-xs lg:text-base">
                Sale!
              </div>
              <div className="px-2 py-0 rounded-sm lg:rounded bg-[#c699e2] text-white text-xs lg:text-base">
                New
              </div>
            </div>
          </div>
          <div className=" flex justify-center text-center">
            <div className=" absolute bottom-[1rem] md:bottom-[-0.1rem] lg:bottom-0">
              <h5 className=" text-md lg:text-lg font-bold card-title px-[30px]">
                Midweight Cotton Tee
              </h5>
              <h5 className=" text-md lg:text-lg font-bold">$26.00 - $29.00</h5>
            </div>
          </div>
          <div className="icons_wrapper">
            <Icons />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide id="4">
        <div className="card cursor-pointer relative min-w-[175px] h-[340px] sm:min-w-[200px] sm:h-[350px] md:min-w-[235px] md:h-[460px] lg:w-[330px] lg:h-[510px] xl:w-[330px] xl:h-[500px]">
          <div className="">
            <div className="img-container">
              <div className="upper_img w-full">
                <img src={img4} alt="" />
              </div>
              <div className="lower_img w-full">
                <img src={img4_4} alt="" />
              </div>
            </div>
          </div>
          <div className=" absolute top-2 left-2">
            <div className="flex flex-col gap-1">
              <div className="px-2 py-0 rounded-sm lg:rounded bg-[#f09155] text-white text-xs lg:text-base">
                Hot
              </div>
            </div>
          </div>
          <div className=" flex justify-center text-center">
            <div className=" absolute bottom-[1rem] md:bottom-[-0.1rem] lg:bottom-0">
              <h5 className=" text-md lg:text-lg font-bold card-title px-[30px]">
                Fine Jersey Tee
              </h5>
              <h5 className=" text-md lg:text-lg font-bold">$31.00</h5>
            </div>
          </div>
          <div className="icons_wrapper top-[10px] right-[10px] lg:right-[20px]">
            <Icons />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide id="5">
        <div className="card cursor-pointer relative min-w-[175px] h-[340px] sm:min-w-[200px] sm:h-[350px] md:min-w-[235px] md:h-[460px] lg:w-[330px] lg:h-[510px] xl:w-[330px] xl:h-[500px]">
          <div className="">
            <div className="img-container">
              <div className="upper_img w-full">
                <img src={img5} alt="" />
              </div>
              <div className="lower_img w-full">
                <img src={img4_4} alt="" />
              </div>
            </div>
          </div>
          <div className=" absolute top-2 left-2">
            <div className="flex flex-col gap-1">
              <div className="px-2 py-0 rounded-sm lg:rounded bg-[#f09155] text-white text-xs lg:text-base">
                Hot
              </div>
            </div>
          </div>
          <div className=" flex justify-center text-center">
            <div className=" absolute bottom-[1rem] md:bottom-[-0.1rem] lg:bottom-0">
              <h5 className=" text-md lg:text-lg font-bold card-title px-[30px]">
                Toddler T-Shirt
              </h5>
              <h5 className=" text-md lg:text-lg font-bold">$26.00</h5>
            </div>
          </div>
          <div className="icons_wrapper top-[10px] right-[10px] lg:right-[20px]">
            <Icons />
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default PickFU;
