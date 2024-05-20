import React from "react";
import gambarhero from "../assets/images/gambar-hero.png";
import iconkapal from "../assets/icons/kapal.png";

export default function HeroSection() {
  return (
    <>
      <div className="relative">
        <img src={gambarhero} alt="hero" className="w-full" />
      </div>
      <div className="absolute  left-1/2 transform -translate-x-1/2 bg-white shadow-xl w-[1200px] h-[304px] rounded-2xl -mt-36 ">
        <div className="mt-[35px] mx-5 flex  justify-between items-center">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full border-yellow hover:bg-yellow text-slate-800 hover:text-white">
            <img src={iconkapal} alt="userlogo" className="w-[15px] h-[15px]" />
            Ship Ticket
          </button>
          <div className="flex gap-[17px]">
            <label htmlFor="oneway">
              <input type="radio" id="oneway" className="mr-2" />
              One Way
            </label>
            <label htmlFor="Round-trip">
              <input type="radio" id="Round-trip" className="mr-2" />
              Round-trip
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
