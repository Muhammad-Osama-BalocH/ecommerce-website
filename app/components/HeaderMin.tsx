import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMin = () => {
  return (
    <div className="border-b border-gray-300 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-5 sm:pb-0 text-blackish">
          Logo
        </div>
        <div className="relative w-full sm:w-[300px] md:w-[70%]">
          <input
            className="border-gray-300 border p-2 px-4 rounded-lg w-full pr-12"
            type="text"
            placeholder="Enter Any Product name......"
          />
          {/* Search Icon */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <BsSearch />
          </div>
        </div>
        <div className="flex gap-4 text-gray-600 text-[30px] mt-4 sm:mt-0"> {/* Icons aligned below search bar */}
          <div className="relative">
            <BiUser />
          </div>
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1"></div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMin;
