import React from "react";
import img1 from "../../components/Blog-Section/blog-section-images/blog-1.jpg";
import img2 from "../../components/Blog-Section/blog-section-images/blog-2.jpg";
import user from "../HomeImg/last/user.png";

const Resources = () => {
  return (
    <div className=" p-[15px] mb-[10px]">
      <div className=" text-center">
        <h3 className="text-[24px] lg:text-[36px] xl:text-[36px] font-semibold mt-[20px] mb-[10px]">
          More resources
        </h3>
        <h6 className="text-[15px] lg:text-[19px] xl:text-[19px] text-[#7e7e7e]">
          Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec
          eturlagix adipiscing eliet, cowec tetopak
        </h6>
      </div>
      <div className="flex flex-col md:gap-5 lg:gap-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row py-[20px] mt-[2rem]">
        <div className="flex flex-col resources mb-10 sm:mb-10 md:mb-0 lg:mb-0 xl:mb-0">
          <div className="rounded-lg overflow-hidden">
            <img src={img1} alt="" className="rounded-lg img-resource" />
          </div>
          <div className="">
            <div className="flex gap-5 mt-4 mb-2">
              <button className="px-2 py-1 bg-[#f5f5f5] text-[#2ebb77] hover:bg-[#2ebb77] hover:text-[#ffffff] duration-500 text-sm rounded-3xl font-medium">
                Design Services
              </button>
            </div>
            <div className="">
              <h4 className="text-[20px] font-semibold">
                Make yourself happy with our T-shirt customer designer
              </h4>
            </div>
            <div className="flex gap-2 mt-[20px]">
              <div className="">
                <img
                  src={user}
                  alt=""
                  className="rounded-full w-[50px] h-[50px]"
                />
              </div>
              <div className="text-[#7e7e7e]">
                <h6>
                  by <span className="font-semibold text-black">admin</span>
                </h6>
                <h6>August 20, 2022</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col resources">
          <div className="rounded-lg overflow-hidden">
            <img src={img2} alt="" className="rounded-lg img-resource" />
          </div>
          <div className="">
            <div className="flex gap-5 mt-4 mb-2">
              <button className="px-2 py-1 bg-[#f5f5f5] text-[#2ebb77] hover:bg-[#2ebb77] hover:text-[#ffffff] duration-500 text-sm rounded-3xl font-medium">
                Design Services
              </button>
              <button className="px-2 py-1 bg-[#f5f5f5] text-[#2ebb77] hover:bg-[#2ebb77] hover:text-[#ffffff] duration-500 text-sm rounded-3xl font-medium">
                Print Shop
              </button>
            </div>
            <div className="">
              <h4 className="text-[20px] font-semibold">
              Are you ready to make it awesome with us
              </h4>
            </div>
            <div className="flex gap-2 mt-[20px]">
              <div className="">
                <img
                  src={user}
                  alt=""
                  className="rounded-full w-[50px] h-[50px]"
                />
              </div>
              <div className="text-[#7e7e7e]">
                <h6>
                  by <span className="font-semibold text-black">admin</span>
                </h6>
                <h6>August 20, 2022</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
