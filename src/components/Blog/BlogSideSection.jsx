import React from "react";
import { CiSearch } from "react-icons/ci";
import SideSectionPosts from "./SideSectionPosts";

const BlogSideSection = () => {
  return (
    <div className="flex flex-col gap-7  ">
      <div className=" flex flex-col gap-5">
        <h2 className=" text-2xl font-semibold">Search</h2>
        <div className=" relative text-lg">
          <input
            type="text"
            className=" border rounded-lg py-2 px-7 outline-none"
            placeholder="Search. . ."
          />
          <CiSearch className=" text-gray-500 hover:text-green-500 text-xl absolute right-3 top-3" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className=" text-2xl font-semibold">Categories</h2>
        <div className=" flex flex-col gap-4">
          <div className=" flex items-center justify-between category-list hover:text-emerald-500">
            <h4 className=" category-list-item text-gray-600 text-lg  hover:text-emerald-500">
              Design Services
            </h4>
            <p className=" text-lg category ">6</p>
          </div>
          <div className=" flex items-center justify-between category-list">
            <h4 className=" category-list-item text-gray-600 text-lg  hover:text-emerald-500">
              HaruTheme
            </h4>
            <p className=" text-lg category">4</p>
          </div>
          <div className=" flex items-center justify-between category-list">
            <h4 className=" category-list-item text-gray-600 text-lg  hover:text-emerald-500">
              Print Company
            </h4>
            <p className=" text-lg category">3</p>
          </div>
          <div className=" flex items-center justify-between category-list">
            <h4 className=" category-list-item text-gray-600 text-lg  hover:text-emerald-500">
              Print Shop
            </h4>
            <p className=" text-lg category">3</p>
          </div>
          <div className=" flex items-center justify-between category-list">
            <h4 className=" category-list-item text-gray-600 text-lg  hover:text-emerald-500">
              Uncategorized
            </h4>
            <p className=" text-lg category ">5</p>
          </div>
        </div>
      </div>
      <div className="">
        <SideSectionPosts/>
      </div>
    </div>
  );
};

export default BlogSideSection;
