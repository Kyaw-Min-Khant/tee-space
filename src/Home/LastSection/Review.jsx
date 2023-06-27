import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css/core';
import { dataReviews } from "./review.js";
import Rating from "./Rating.jsx";

const Review = () => {
  return (
    <div className="mb-10">
      <div className="text-center">
        <h3 className="text-[24px] font-semibold mt-[20px] mb-[6px] lg:mb-[10px]">
          What People Are Saying
        </h3>
        <div className="px-[15px]">
          <p className="text-[#7e7e7e] text-[15px] lg:text-[18px]">
            We provide support for more than 15K+ Businesses.
          </p>
        </div>
      </div>
      <div className="bg-img">
        <div className="p-[15px] xl:container mx-auto">
          <Splide
            options={{
              perPage: 3,
              rewind: true,
              type: "loop",
              arrows:false,
              cover:false,
              breakpoints: {
                1200: { perPage: 2 },
                800: { perPage: 1 },
                640: { perPage: 1, perMove: 1 },
              },
              autoplay: true,
              pagination:true,
              gap: "1rem",
              padding:"0"
            }}
            aria-label="My Favorite Images"
            className="xl:gap-5 splide"
          >
            {dataReviews?.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <div className="xl:py-[35px]  xl:px-[15px] mx-[3px]">
                    <div className="p-[20px] xl:p-[40px] bg-[#ffffff] card-review">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-5">
                          <img
                            src={item.img}
                            className="w-[80px] h-[80px] rounded-full"
                            alt=""
                          />
                          <div className="">
                            <h4 className="text-[20px] font-semibold">
                              {item.name}
                              <span className="text-[17px] text-[#7e7e7e] font-normal ml-3">
                                {item.job}
                              </span>
                            </h4>
                            <Rating rate={item.rate} />
                          </div>
                        </div>
                        <div className="">
                          <p className="mt-[20px] text-black">{item.des}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Review;
