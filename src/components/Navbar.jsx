import React from "react";
import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="flex h-[80px] w-full backdrop-blur-sm fixed justify-center items-center z-20">
      <div className="px-[70px] flex justify-between w-full">
        <div className="flex">
          <img src={logo} alt="logo" className="h-14" />
        </div>
        <div className="flex gap-12">
          <div className="flex items-center gap-[58px]">
            <a
              href="#"
              className="text-white font-medium text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white font-medium text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-white font-medium text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]"
            >
              Booking Check
            </a>
            <a
              href="#"
              className="text-white font-medium text-[18px] hover:text-[#FFC947] active:text-[#FFC947] focus:text-[#FFC947]"
            >
              About Us
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button className="px-4 py-2 border border-white rounded-full">
              Login
            </button>
            <button className="px-4 py-2 border border-white bg-white text-[#008AA1] rounded-full">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
