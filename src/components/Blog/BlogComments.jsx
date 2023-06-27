import React from "react";
import { FaUserCircle } from "react-icons/fa";

const BlogComments = () => {
  return (
    <div className=" flex flex-col gap-10">
      <h1 className="text-2xl font-semibold text-center mb-5">
        There are 3 comments
      </h1>
      <div className=" flex flex-col gap-5">
        <div className="flex gap-3">
          <div className="relative">
            <FaUserCircle className="text-gray-400 text-[50px]  absolute left-0 top-0" />
            <div className="ml-16 flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Admin</h2>
              <p className="text-gray-500 text-lg">
                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla
                nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa,
                vitae pusem at fringilla lobor HaruTheme
              </p>
              <div className="flex items-center gap-3">
                <p className="text-gray-500 text-lg">July 14, 2017</p>
                <span className="text-gray-500">|</span>
                <p className="text-lg font-medium hover:text-green-500">
                  Reply
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <FaUserCircle className="text-gray-400 text-[50px]  absolute left-0 top-0" />
            <div className="ml-16 flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Admin</h2>
              <p className="text-gray-500 text-lg">
                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla
                nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa,
                vitae pusem at fringilla lobor HaruTheme
              </p>
              <div className="flex items-center gap-3">
                <p className="text-gray-500 text-lg">July 22, 2022</p>
                <span className="text-gray-500">|</span>
                <p className="text-lg font-medium hover:text-green-500">
                  Reply
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 ml-5">
          <div className="relative">
            <FaUserCircle className="text-gray-400 text-[50px]  absolute left-0 top-0" />
            <div className="ml-16 flex flex-col gap-3">
              <h2 className="text-lg font-semibold">Admin</h2>
              <p className="text-gray-500 text-lg">
                Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla
                nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa,
                vitae pusem at fringilla lobor HaruTheme
              </p>
              <div className="flex items-center gap-3">
                <p className="text-gray-500 text-lg">July 14, 2017</p>
                <span className="text-gray-500">|</span>
                <p className="text-lg font-medium hover:text-green-500">
                  Reply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className=" text-2xl  font-semibold text-center">
          Leave us a comment
        </h1>
        <form className=" flex flex-col gap-5 items-center mt-7">
          <div className=" flex flex-col md:flex-row gap-5">
            <input
              type="text"
              className=" px-4 py-2 w-[330px] md:w-[350px] bg-gray-100 rounded-lg  focus-visible:outline-emerald-500"
              placeholder="Enter Your Name*"
            />
            <input
              type="text"
              className=" px-4 py-2 w-[330px] md:w-[350px] bg-gray-100 rounded-lg   focus-visible:outline-emerald-500"
              placeholder="Enter Your Email* "
            />
          </div>
          <div className="">
            <textarea
              type="text"
              className="px-4 py-2 w-[330px] md:w-[720px] h-[130px] bg-gray-100 rounded-lg   focus-visible:outline-emerald-500"
              placeholder="Enter Your Comment"
            />
          </div>
          <div className=" flex  relative ml-3">
            <input type="checkbox" className=" absolute top-[0.3rem] left-0"/>
            <p className=" text-lg text-gray-500  ml-5">
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>
          <button className=" bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 font-medium rounded-lg" type="submit">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogComments;
