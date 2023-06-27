import React from "react";
import NavSlide from "./NavSlide";
import ShoppingList from "./ShoppingList";

const MainShop = () => {
  return (
    <div className=" overflow-x-hidden">
      <NavSlide />
      <ShoppingList />
    </div>
  );
};

export default MainShop;
