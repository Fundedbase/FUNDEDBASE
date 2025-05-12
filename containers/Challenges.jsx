"use client";

import { useState } from "react";

import { data } from "@/constants";
import { ChallengeTable } from "@/components";

const Challenge = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVal, setActiveVal] = useState(data.price_list[0].val);
  return (
    <div id="challenges" className="mt-[2rem] lg:mt-[120px]">
      <div className="flex justify-center mt-10">
        <a
          href="#challenges"
          className="flex flex-col items-center text-white hover:text-gray-300 transition-colors"
        >
          <span className="mb-2">View Challenges</span>
          <HiOutlineArrowDown className="text-2xl animate-bounce" />
        </a>
      </div>

      <h1 className="geist px-2 font-semibold text-[30px] md:text-[40px] leading-[100%] max-w-[754px] text-center mx-auto text-white">
        Take The challenge, Earn Your Funding
      </h1>

      <br />
      <br />

      {/* INFO TABLE */}
      <ChallengeTable activeVal={activeVal} activeIndex={activeIndex} />
    </div>
  );
};

export default Challenge;
