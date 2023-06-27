import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "./Blog.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = windowWidth < 768;

  const slideOptions = {
    width: isMobile ? 320 : 750,
    gap: isMobile ? "1rem" : "2rem",
    perPage: isMobile ? 1 : 2,
    pagination: true,
    rewind: true,
  };

  return (
    <Splide options={slideOptions} className=" flex justify-center gap-5  slider ">
      
      <SplideSlide>
        <div className="flex flex-col items-center gap-3 mt-5">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-1.jpg"
            alt=""
            className="w-[300px] md:w-[400px] rounded-lg"
          />
          <div className=" flex flex-col items-center gap-3 mt-5">
            <div className=" flex items-center gap-2">
              <div className=" px-4 py-1 w-[150px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                <a href="#" className="  font-semibold text-lg">
                  Design Services
                </a>
              </div>
              <div className=" px-4 py-1 w-[120px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                <a href="#" className="  font-semibold text-lg">
                  HaruTheme
                </a>
              </div>
            </div>
            <h2 className=" text-2xl font-semibold text-center hover:text-green-500">
              10 Steps to Writing the Perfect Prospectus
            </h2>
          </div>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex flex-col items-center gap-3 mt-5">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-17.jpg"
            alt=""
            className=" w-[300px] md:w-[400px] rounded-lg"
          />
          <div className=" flex flex-col items-center gap-3 mt-5">
            <div className=" px-4 py-1 w-[150px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
              <a href="#" className="  font-semibold text-lg">
                Design Services
              </a>
            </div>
            <h2 className=" text-2xl text-center font-semibold hover:text-green-500">
              Watch the Sony a9 Livestream Event Online
            </h2>
          </div>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex flex-col items-center gap-3 mt-5">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-15.jpg"
            alt=""
            className=" w-[300px] md:w-[400px] rounded-lg"
          />
          <div className=" flex flex-col items-center gap-3 mt-5">
            <div className=" px-4 py-1 w-[150px] rounded-[3rem] flex  items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
              <a href="#" className="  font-semibold text-lg">
                Design Services
              </a>
            </div>
            <h2 className=" text-2xl text-center font-semibold hover:text-green-500">
              What make you beautiful with us
            </h2>
          </div>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div className="flex flex-col items-center gap-3 mt-5">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-1.jpg"
            alt=""
            className=" w-[300px] md:w-[400px] rounded-lg"
          />
          <div className=" flex flex-col gap-3 mt-5 items-center">
            <div className=" flex items-center gap-2">
              <div className=" px-4 py-1 w-[150px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                <a href="#" className="  font-semibold text-lg">
                  Design Services
                </a>
              </div>
              <div className=" px-4 py-1 w-[120px] rounded-[3rem] flex items-center  bg-gray-100 hover:bg-green-500 text-green-500 hover:text-white transition-all">
                <a href="#" className="  font-semibold text-lg">
                  HaruTheme
                </a>
              </div>
            </div>
            <a
              href="#"
              className=" text-2xl font-semibold text-center hover:text-green-500"
            >
              Mirum est notare quam littera gothica
            </a>
          </div>
        </div>
      </SplideSlide>

      {/* <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev bg-black/50 w-10 h-10 rounded-[0.2rem]">
          <MdKeyboardArrowRight style={{ fill: "white" }} />
        </button>
        <button className="splide__arrow splide__arrow--next  bg-black/50 w-10 h-10 rounded-[0.2rem]">
          <MdKeyboardArrowRight style={{ fill: "white" }} />
        </button>
      </div> */}
    </Splide>
  );
};

export default Slider;
