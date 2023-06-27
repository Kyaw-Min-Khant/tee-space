import React from "react";
import Slider from "./Slider";

const BlogSlide = () => {
  return (
    <div className=" mt-5">
      <div className="">
        <h2 className=" text-2xl font-semibold text-center mb-5">
          You may also like this
        </h2>
        <div className="">
          <Slider/>
        </div>
      </div>
    </div>
  );
};

export default BlogSlide;
