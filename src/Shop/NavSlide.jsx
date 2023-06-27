import React from "react";
import Marquee from "react-fast-marquee";
import { Breadcrumbs, Anchor } from "@mantine/core";
import "./nav.css";
const NavSlide = () => {
  const items = [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <div className="">
      <div className=" text-[15px] tracking-[.1rem] p-3 font-bold bg-[#F4EEFA] text-[#b479d9] ">
        <Marquee pauseOnHover="true">
          <h2 className="mx-10 capitalize">Welcome to Teespace</h2>
          <span>.</span>
          <h2 className="mx-10 capitalize">
            Free shipping on All U.S.on Order $50 +
          </h2>
          <span>.</span>
          <h2 className="mx-10 capitalize">Sign Up & Enjoy 10% off</h2>
          <span>.</span>
          <h2 className="mx-10 capitalize">Welcome to Teespace</h2>
          <span>.</span>
          <h2 className="mx-10 capitalize">
            Free shipping on All U.S.on Order $50 +
          </h2>
          <span>.</span>
          <h2 className="mx-10 capitalize">Sign Up & Enjoy 10% off</h2>
          <span>.</span>
        </Marquee>
      </div>
      <div className="h-[150px] w-[100vw] bg-[#F5F5F5]  flex flex-col justify-center items-center text-xl font-medium">
        <h2 className="">Shop</h2>
        <div className="">
          <Breadcrumbs className=" decoration-inherit" separator="___" mt="xs">
            {items}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default NavSlide;
