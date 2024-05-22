import React from "react";
import gambarhero from "../assets/images/gambar-hero.png";
import iconkapal from "../assets/icons/kapal.png";
import iconpanah from "../assets/icons/panah.png";
import iconline from "../assets/icons/line.png";

export default function HeroSection() {
  return (
    <>
      <div className="relative">
        <img src={gambarhero} alt="hero" className="w-full" />
      </div>
      <div className="absolute  left-1/2 transform -translate-x-1/2 bg-white shadow-xl w-[861px] h-[320px] rounded-2xl -mt-40 ">
        <div className="mt-[35px] mx-5 flex  justify-between items-center">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full border-yellow hover:bg-yellow text-slate-800 hover:text-white font-Roboto ">
            <img src={iconkapal} alt="userlogo" className="w-[15px] h-[15px]" />
            Ship Ticket
          </button>
          <div className="flex gap-[17px] font-Roboto">
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

        <div className=" h-[75px] mt-[23px] flex gap-6 mx-5 relative">
          <div className="flex gap-6">
            <button className="w-[224px] h-[75px] bg-[#E5FBFF] rounded-xl flex hover:bg-[#BCF3FC]">
              <div className="mx-5 mt-[13px] flex justify-between w-full">
                <div className="flex flex-col">
                  <p className="text-[10px] text-[#8B8B8B] font-Roboto  text-left ">
                    FROM
                  </p>
                  <p className="text-sm font-semibold font-Roboto ">
                    Padangbai
                  </p>
                  <p className="text-[10px] text-[#8B8B8B] absolute mt-9 font-Roboto ">
                    Padangbai Port, Karangasem, bali
                  </p>
                </div>
                <div className="relative">
                  <img src={iconkapal} alt="kapal" className="w-8 h-8" />
                </div>
              </div>
            </button>
            <div className="bg-[#E5FBFF] w-[50px] h-[50px] flex rounded-full border-4 border-white absolute ml-[210px] mt-[15px]">
              <img src={iconpanah} alt="to" className="w-6 h-6 mx-auto mt-2" />
            </div>
            <button className="w-[224px] h-[75px] bg-[#E5FBFF] rounded-xl flex hover:bg-[#BCF3FC]">
              <div className="mx-5 mt-[13px] flex justify-between w-full">
                <div className="flex flex-col">
                  <p className="text-[10px] text-[#8B8B8B] font-Roboto text-left ">
                    TO
                  </p>
                  <p className="text-sm font-semibold font-Roboto ">
                    Gili Trawangan
                  </p>
                  <p className="text-[10px] text-[#8B8B8B] absolute mt-9 font-Roboto ">
                    Gili Trawangan Port, Gili Island, Lombok
                  </p>
                </div>
                <div className="relative">
                  <img src={iconkapal} alt="kapal" className="w-8 h-8 " />
                </div>
              </div>
            </button>
          </div>

          <div className="w-[224px] h-[75px] rounded-xl flex overflow-hidden bg-[#E5FBFF] ">
            <div className="grid grid-cols-2">
              <div className="flex justify-between w-full mx-5 mt-[13px]">
                <div className="flex flex-col">
                  <p className="text-[10px] text-[#8B8B8B] font-Roboto ">
                    JOURNEY DATE
                  </p>
                  <p className="text-[10px] font-Roboto ">
                    <strong className="text-sm font-semibold font-Roboto ">
                      12
                    </strong>{" "}
                    Jan’23
                  </p>
                  <p className=" text-[10px] text-[#8B8B8B] font-Roboto ">
                    09.00 WITA
                  </p>
                </div>
              </div>

              <div className="w-32 border-l-2 border-[#008AA1] bg-[#BCF3FC]">
                <div className="mx-5 mt-[13px] flex justify-between w-full">
                  <div className="flex flex-col">
                    <p className="text-[10px] text-[#8B8B8B] font-Roboto ">
                      RETURN DATE
                    </p>
                    <p className="text-[10px] font-Roboto ">
                      <strong className="text-sm font-semibold font-Roboto ">
                        15
                      </strong>{" "}
                      Jan’23
                    </p>
                    <p className=" text-[10px] text-[#8B8B8B] font-Roboto ">
                      09.00 WITA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[120px] h-[75px] bg-[#E5FBFF] rounded-xl flex">
            <div className="mx-5 mt-[13px] flex justify-between w-full">
              <div className="flex flex-col">
                <p className="text-[10px] text-[#8B8B8B] font-Roboto ">
                  TRAVELER
                </p>
                <p className="text-sm font-semibold font-Roboto ">1 Traveler</p>
                <p className=" text-[10px] text-[#8B8B8B] font-Roboto ">
                  Economy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[63px]  w-full h-[48px] relative">
          <img src={iconline} alt="line" class="relative" />

          <button class="text-lg font-semibold w-[204px] h-[48px] bg-yellow hover:bg-amber-300 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 font-Roboto">
            Search Schedule
          </button>
        </div>
      </div>
    </>
  );
}
