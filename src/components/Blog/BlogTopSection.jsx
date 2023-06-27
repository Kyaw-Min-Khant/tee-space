import React from "react";
import "./Blog.css";

const BlogTopSection = () => {
  return (
    <div className=" bg-gray-100 p-5 mb-20">
      <div className="flex  gap-2 md:items-center   justify-center ">
        <h2 className="text-gray-500 text-lg ">Home</h2>
        <span className="text-gray-500 ">&mdash;</span>
        <h2 className="text-gray-500 whitespace-nowrap text-lg">Design Services</h2>
        <span className="text-gray-500 "> &mdash;</span>
        <h3 className=" line-clamp-2 whitespace-normal leading-5 w-40 md:w-[400px] text-lg  ">
        Make yourself happy with our T-shirt customer designer
        </h3>
      </div>
    </div>
  );
};

export default BlogTopSection;
