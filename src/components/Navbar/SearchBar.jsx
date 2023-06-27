import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";

const SearchBar = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className=" flex gap-2 justify-center">
        <button onClick={toggleForm}>
          {showForm ? <CiSearch className=" text-xl" /> : <CiSearch  className=" text-2xl "/>}
        </button>
        <div className={`formContainer ${showForm ? "show" : ""} border shadow-md`}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
