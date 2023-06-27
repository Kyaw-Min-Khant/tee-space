import React from "react";
import img1 from "../HomeImg/Third/banner-1.jpg";
import img2 from "../HomeImg/Third/banner-2.jpg";
import img3 from "../HomeImg/Third/banner-3.jpg";
import { reuseableCss } from "../class";

const MiniThird = () => {
  return (
    <div className="py-0 px-[2px] lg:px-[8%]">
      <div className="w-full h-full">
        <div className="">
          <div className="mb-[60px] third third-one">
            <a className=" cursor-pointer">
              <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between pl-[50px] sm:pl-[50px] md:pl-0 lg:pl-0 xl:pl-[30px] relative gap-0 sm:gap-10 md:gap-20 lg:gap-20 xl:gap-24">
                <div className="w-full flex items-end lg gap-5">
                  <div className="w-full">
                    <div className="">
                      <img src={img1} alt="" />
                    </div>
                  </div>
                </div>
                <div className=" absolute top-[50%] left-0 sm:left-0 sm:top-[50%] md:top-[40%] md:right-0">
                  <div className="">
                    <div className="flex justify-center">
                      <div className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] rounded-full fromThird_shadow fromThird_shadow_one flex justify-center items-center">
                        <h3 className=" font-[700]">1</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="lg:pl-[20px]">
                    <h6 className={`${reuseableCss.h5}`}>
                      Add your shirt design
                    </h6>
                    <div className="">
                      <h6 className={`${reuseableCss.p} lg:pr-[45px] xl:pr-[50px]`}>
                        He will give praise to himself, and he will not be
                        afraid of him, and he will not be afraid of him.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-[60px] third third-one">
            <a className=" cursor-pointer">
              <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col items-center justify-between pl-[50px] sm:pl-[50px] md:pl-0 lg:pl-0 xl:pl-[30px] relative gap-0 sm:gap-10 md:gap-20 lg:gap-20 xl:gap-24">
                <div className="w-full flex items-end lg gap-5">
                  <div className="w-full">
                    <div className="">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                </div>
                <div className=" absolute top-[50%] left-0 sm:left-0 sm:top-[50%] md:top-[40%] md:right-0">
                  <div className="">
                    <div className="flex justify-center">
                      <div className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] rounded-full fromThird_shadow fromThird_shadow_two flex justify-center items-center">
                        <h3 className=" font-[700]">2</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="lg:pl-[20px]">
                    <h6 className={`${reuseableCss.h5}`}>
                      Custom artwork &review
                    </h6>
                    <div className="">
                      <h6 className={`${reuseableCss.p} lg:pr-[45px] xl:pr-[50px]`}>
                        Lorem ipsum det, cowec tetur duis nec fringi det, consec
                        t eturlagix adipiscing eliet, cowec tetopak nec fringi
                        det adipiscing
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="mb-[60px] third third-one">
            <a className=" cursor-pointer">
              <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between pl-[50px] sm:pl-[50px] md:pl-0 lg:pl-0 xl:pl-[30px] relative gap-0 sm:gap-10 md:gap-20 lg:gap-20 xl:gap-24">
                <div className="w-full flex items-end lg gap-5">
                  <div className="w-full">
                    <div className="">
                      <img src={img3} alt="" />
                    </div>
                  </div>
                </div>
                <div className=" absolute top-[50%] left-0 sm:left-0 sm:top-[50%] md:top-[40%] md:right-0">
                  <div className="">
                    <div className="flex justify-center">
                      <div className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] rounded-full fromThird_shadow_three flex justify-center items-center">
                        <h3 className=" font-[700]">3</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="lg:pl-[20px]">
                    <h6 className={`${reuseableCss.h5}`}>
                      Enjoy your product
                    </h6>
                    <div className="">
                      <h6 className={`${reuseableCss.p} lg:pr-[45px] xl:pr-[50px]`}>
                        Lorem ipsum det, cowec tetur duis nec fringi det, consec
                        t eturlagix adipiscing eliet, cowec tetopak nec fringi
                        det adipiscing
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniThird;
