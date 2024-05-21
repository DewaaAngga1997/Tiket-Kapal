import React from "react";
import gambarhero from "../assets/images/gambar-hero.png";
import iconkapal from "../assets/icons/kapal.png";

export default function HeroSection() {
  return (
    <>
      <div className="relative">
        <img src={gambarhero} alt="hero" className="w-full" />
      </div>
      <div className="absolute  left-1/2 transform -translate-x-1/2 bg-white shadow-xl w-[861px] h-[320px] rounded-2xl -mt-40 ">
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

        <div className=" h-[75px] mt-[23px] flex gap-6 mx-5">
          <div className="w-[224px] h-[75px] bg-[#E5FBFF] rounded-xl flex">
            <div className="mx-5 mt-[13px] flex justify-between w-full">
              <div className="flex flex-col">
                <p className="text-[10px] text-[#8B8B8B]">FROM</p>
                <p className="text-sm font-semibold">Padangbai</p>
                <p className="text-[10px] text-[#8B8B8B] absolute mt-9">
                  Padangbai Port, Karangasem, bali
                </p>
              </div>
              <div className="relative">
                <img src={iconkapal} alt="kapal" className="w-8 h-8 " />
              </div>
            </div>
          </div>
          <div className="w-[224px] h-[75px] bg-[#E5FBFF] rounded-xl flex">
            <div className="mx-5 mt-[13px] flex justify-between w-full">
              <div className="flex flex-col">
                <p className="text-[10px] text-[#8B8B8B]">TO</p>
                <p className="text-sm font-semibold">Gili Trawangan</p>
                <p className="text-[10px] text-[#8B8B8B] absolute mt-9">
                  Gili Trawangan Port, Gili Island, Lombok
                </p>
              </div>
              <div className="relative">
                <img src={iconkapal} alt="kapal" className="w-8 h-8 " />
              </div>
            </div>
          </div>

          <div className="w-[224px] h-[75px] bg-[#E5FBFF] rounded-xl flex overflow-hidden">
            <div className="grid grid-cols-2 ">
              <div className="mx-5 mt-[13px] flex justify-between w-full">
                <div className="flex flex-col">
                  <p className="text-[10px] text-[#8B8B8B]">JOURNEY DATE</p>
                  <p className="text-[10px]">
                    <strong className="text-sm font-semibold">12</strong> Jan’23
                  </p>
                  <p className=" text-[10px] text-[#8B8B8B]">09.00 WITA</p>
                </div>
              </div>
              <div className="w-32  bg-[#BCF3FC] border-l-2 border-[#008AA1]">
                <div className="mx-5 mt-[13px] flex justify-between w-full">
                  <div className="flex flex-col">
                    <p className="text-[10px] text-[#8B8B8B]">RETURN DATE</p>
                    <p className="text-[10px]">
                      <strong className="text-sm font-semibold">15</strong>{" "}
                      Jan’23
                    </p>
                    <p className=" text-[10px] text-[#8B8B8B]">09.00 WITA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[120px] h-[75px] bg-[#E5FBFF] rounded-xl flex">
            <div className="mx-5 mt-[13px] flex justify-between w-full">
              <div className="flex flex-col">
                <p className="text-[10px] text-[#8B8B8B]">TRAVELER</p>
                <p className="text-sm font-semibold">1 Traveler</p>
                <p className=" text-[10px] text-[#8B8B8B]">Economy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
