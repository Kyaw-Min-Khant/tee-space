import Home from "../../Home/Home";


import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "../Blog/Blog";
import MainShop from "../../Shop/MainShop";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<MainShop />} />
      </Routes>
    </div>
  );
};

export default Path;
