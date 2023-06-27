import React from "react";
import spotify from "../HomeImg/logo-spotify.png";
import feedly from "../HomeImg/logo-feedly.png";
import lattice from "../HomeImg/logo-lattice.png";
import hopin from "../HomeImg/logo-hopin.png";
import upwork from "../HomeImg/logo-upwork.png";
import Marquee from "react-fast-marquee";
import { reuseableCss } from "../class";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const SecondSection = () => {
  return (
    <div className="flex flex-col gap-0 p-0 m-0">
      <div className="p-[15px]">
        <div className="max-w-full text-center">
          <div className="text-center lg:px-[25%]">
            <h2 className={`${reuseableCss.h6} mt-[20px] mb-[10px]`}>
              “We've got custom T-shirts in a range of fits and sizes, so
              everyone can wear your brand or message.”
            </h2>
          </div>
        </div>
      </div>
      <div className="p-[15px]">
        <div className="max-w-full h-[90px]">
          <div className="flex justify-center mx-auto w-full">
            <div className="overflow-hidden lg:w-[80%]">
              <Marquee
                pauseOnHover={true}
                speed={30}
                direction="right"
                className="flex flex-row scrollbar-custom logo-container"
              >
                <div className=" h-[63px] w-[150px] lg:h-[83px] lg:w-[213px] logo-img-container">
                  <div className="logo-img">
                    <a className=" cursor-pointer">
                      <img
                        src={spotify}
                        alt=""
                        className=" h-[68px] max-w-[200px] lg:h-[83px] lg:max-w-[213px] img-one"
                      />
                    </a>
                  </div>
                </div>
                <div className=" h-[68px] max-w-[200px] lg:h-[83px] lg:w-[213px] logo-img-container">
                  <div className="logo-img">
                    <a className=" cursor-pointer">
                      <img
                        src={feedly}
                        alt=""
                        className=" h-[68px] max-w-[200px] lg:h-[83px] lg:max-w-[213px] img-two"
                      />
                    </a>
                  </div>
                </div>
                <div className="h-[68px] max-w-[200px] lg:h-[83px] lg:w-[213px] logo-img-container">
                  <div className="logo-img">
                    <a className=" cursor-pointer">
                      <img
                        src={lattice}
                        alt=""
                        className=" h-[68px] max-w-[200px] lg:h-[83px] lg:max-w-[213px] img-three"
                      />
                    </a>
                  </div>
                </div>
                <div className=" h-[68px] max-w-[200px] lg:h-[83px] lg:w-[213px] logo-img-container">
                  <div className="logo-img">
                    <a className=" cursor-pointer">
                      <img
                        src={hopin}
                        alt=""
                        className=" h-[68px] max-w-[200px] lg:h-[83px] lg:max-w-[213px] img-four"
                      />
                    </a>
                  </div>
                </div>
                <div className=" h-[68px] max-w-[200px] lg:h-[83px] lg:w-[213px] logo-img-container">
                  <div className="logo-img">
                    <a className=" cursor-pointer">
                      <img
                        src={upwork}
                        alt=""
                        className=" h-[68px] max-w-[200px] lg:h-[83px] lg:max-w-[213px] img-five"
                      />
                    </a>
                  </div>
                </div>
                <div className=" h-[68px] max-w-[200px] lg:h-[83px] lg:w-[213px] logo-img-container">
                  <div className="logo-img">
                    <a className=" cursor-pointer">
                      <img
                        src={hopin}
                        alt=""
                        className=" h-[68px] max-w-[200px] lg:h-[83px] lg:max-w-[213px] img-six"
                      />
                    </a>
                  </div>
                </div>
                <div className=" h-[68px] max-w-[200px] lg:h-[83px] lg:w-[213px] logo-img-container">
                  <div className="logo-img">
                    <a className=" cursor-pointer">
                      <img
                        src={lattice}
                        alt=""
                        className=" h-[68px] max-w-[200px] lg:h-[83px] lg:max-w-[213px] img-seven"
                      />
                    </a>
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
