import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./navbar.css";
import DropdownSection2 from "./DropdownSection2";
import DropdownSection3 from "./DropdownSection3";
import NavbarBlog from "./NavbarBlog";
import SearchBar from "./SearchBar";
import DropdownSection1 from "./DropdownSection1";
import BurgerNav from "./BurgerNav";
import PagesSection from "./PagesSection";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <>
      <div className="  flex items-center ml-5 md:mx-5 xl:flex 2xl:flex lg:flex justify-center gap-2">
        <BurgerNav />
        <div className=" hidden sm:hidden md:hidden  xl:flex 2xl:flex lg:flex  justify-center gap-5 items-center  ">
          <Link to="/">
            <DropdownSection1 />
          </Link>

          <DropdownSection2 />
          <Link to="/shop">
            <DropdownSection3 />
          </Link>
          <Link to="/blog">
            <NavbarBlog />
          </Link>

          <PagesSection />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Dropdown;
