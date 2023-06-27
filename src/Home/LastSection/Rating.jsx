import React from "react";
import { AiFillStar } from "react-icons/ai";

const Rating = ({ rate }) => {
  const ratingStar = Array.from({ length: 5 }, (element, i) => {
    return <span key={i}>{rate > i ? <AiFillStar /> : null}</span>;
  });
  return (
    <div className="flex gap-1 text-yellow-400 mt-[5px]">{ratingStar}</div>
  );
};

export default Rating;
