"use client";

import { useState } from "react";

import { data } from "@/constants";
import { ChallengeTable } from "@/components";

const Challenge = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVal, setActiveVal] = useState(data.price_list[0].val);
  return (
    <div id="challenges" className="mt-[2rem] lg:mt-[120px]">
      <h1 className="geist px-2 font-semibold text-[30px] md:text-[40px] leading-[100%] max-w-[754px] text-center mx-auto text-white">
        Take The challenge, Earn Your Funding
      </h1>

      <br />
      <br />

      {/* PRICE LIST */}
      <div className="fancy-container w-full  max-w-[868px] mx-auto mb-3 text-sm sm:text-base text-[#7A7A7B]  rounded-[9px] overflow-hidden relative">
        {/* Rotating border effect */}
        <div className="rotating-border"></div>
        {/* Overlay content wrapper */}
        <div className="overlay-content relative z-10 w-full flex items-center justify-center my-[1px] px-4 py-4 rounded-[9px] bg-[#060b18]">
          <ul
            id="priceList"
            className="flex text-[7px] md:text-[14px] flex-wrap justify-between w-full gap-x-2 gap-y-2"
          >
            {data.price_list.map(({ label, val }, i) => (
              <button
                key={i}
                className="cursor-pointer px-1 md:px-2 pb-1 transition-all duration-300"
                onClick={() => {
                  setActiveIndex(i);
                  setActiveVal(val);
                }}
                style={
                  activeIndex === i
                    ? {
                        borderBottom: "3px solid",
                        borderImage:
                          "radial-gradient(135.64% 227.94% at -18.83% 100%, rgb(255, 255, 255) 0%, rgb(0, 7, 18) 53.4%, rgb(255, 255, 255) 100%) 1 / 1 / 0 stretch",
                      }
                    : {
                        borderBottom: "none",
                        borderImage: "none 100% / 1 / 0 stretch",
                      }
                }
              >
                {label}
              </button>
            ))}
          </ul>
        </div>
      </div>

      {/* INFO GRID */}
      <ChallengeTable activeVal={activeVal} activeIndex={activeIndex} />
    </div>
  );
};

export default Challenge;
