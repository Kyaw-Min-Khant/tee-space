import React from "react";

const SideSectionPosts = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className=" text-2xl font-medium">Latest Posts</h2>
      <div className=" flex flex-col gap-5">
        <div className=" flex items-center gap-3">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-2-150x150.jpg"
            alt=""
            className=" w-20 rounded-md"
          />
          <div className=" flex flex-col gap-2">
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/make-yourself-happy-with-our-t-shirt-customer-designer/" target="_blank" className=" text-lg text-gray-500 hover:text-emerald-500">Design Services</a>
            <a  href="https://teespace.harutheme.com/studio/blog/2022/08/20/make-yourself-happy-with-our-t-shirt-customer-designer/" target="_blank" className=" text-lg font-semibold line-clamp-2 whitespace-normal leading-5 w-40 hover:text-emerald-500">Make yourself happy with our T-shirt customer designer</a>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-15-150x150.jpg"
            alt=""
            className=" w-20 rounded-md"
          />
          <div className=" flex flex-col gap-2">
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/what-make-you-beautiful/" target="_blank" className=" text-lg text-gray-500 hover:text-emerald-500">Design Services</a>
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/what-make-you-beautiful/" target="_blank" className=" text-lg font-semibold line-clamp-2 whitespace-normal leading-5 w-40 hover:text-emerald-500">What make you beautiful with us</a>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-1-150x150.jpg"
            alt=""
            className=" w-20 rounded-md"
          />
          <div className=" flex flex-col gap-2">
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/mirum-est-notare-quam-littera-gothica/" target="_blank" className=" text-lg text-gray-500 hover:text-emerald-500  leading-6">Design Services, <br />Haru Theme</a>
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/mirum-est-notare-quam-littera-gothica/" target="_blank" className=" text-lg font-semibold line-clamp-2 whitespace-normal leading-5 w-36 hover:text-emerald-500">Mirum est notare quam littera gothica</a>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <img
            src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-14-150x150.jpg"
            alt=""
            className=" w-20 rounded-md"
          />
          <div className=" flex flex-col gap-2">
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/ut-wisi-enim-ad-minim-veniam/" target="_blank"  className=" text-lg text-gray-500 hover:text-emerald-500">Design Services</a>
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/ut-wisi-enim-ad-minim-veniam/" target="_blank" className=" text-lg font-semibold line-clamp-2 whitespace-normal leading-5 w-40 hover:text-emerald-500">Ut wisi enim ad minim veniam</a>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <img
            src=" https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2021/05/blog-17-150x150.jpg"
            alt=""
            className=" w-20 rounded-md"
          />
          <div className=" flex flex-col gap-2">
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/watch-the-sony-a9-livestream-event-online/" target="_blank" className=" text-lg text-gray-500 hover:text-emerald-500">Design Services</a>
            <a href="https://teespace.harutheme.com/studio/blog/2022/08/20/watch-the-sony-a9-livestream-event-online/" target="_blank" className=" text-lg font-semibold line-clamp-2 whitespace-normal leading-5 w-40 hover:text-emerald-500">Watch the Sony a9 Livestream Event Online</a>
          </div>
        </div>
      </div>
      <div className="">
        <img src="https://teespace.harutheme.com/studio/wp-content/uploads/sites/3/2022/08/banner-blog.png" alt="" className="" />
      </div>
    </div>
  );
};

export default SideSectionPosts;
