import React from "react";
import logo from "/logo.png";
import user_icon from "../assets/icons/user.png";

export default function Navbar() {
  return (
    <nav className="flex h-[90px] w-full backdrop-blur-sm fixed justify-center items-center z-20">
      <div className="px-[70px] flex justify-between w-full">
        <div className="flex">
          <img src={logo} alt="logo" className="h-14" />
        </div>
        <div className="flex gap-12">
          <div className="flex items-center gap-[58px]">
            <a
              href="#"
              className="text-white font-medium font-Roboto text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white font-medium font-Roboto text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-white font-medium font-Roboto text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]"
            >
              Booking Check
            </a>
            <a
              href="#"
              className="text-white font-medium font-Roboto text-[18px] hover:text-yellow active:text-yellow focus:text-yellow"
            >
              About Us
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-4 py-2 text-white border border-white rounded-full hover:border-yellow">
              <img
                src={user_icon}
                alt="userlogo"
                className="w-[15px] h-[15px]"
              />
              <span className="font-Roboto">Login</span>
            </button>
            <button className="px-4 py-2 border font-Roboto border-white bg-white text-[#008AA1] rounded-full hover:bg-yellow hover:border-yellow hover:text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
