import React from "react";

import Link from "next/link";

const GetFundedCTA = () => {
  return (
    <div className="p-5 my-[2rem]">
      <div className="relative w-fit mx-auto p-[1px] rounded-[9px] overflow-hidden rotating-border-wrapper">
        {/* Rotating border background */}
        <div className="absolute inset-0 z-0 rotate-border"></div>
        {/* Actual Content */}
        <div className="bg-[#040A14C7] w-full h-full">
          <div className="relative z-10 md:w-[596px] h-auto md:h-[60px] justify-evenly md:flex items-center mx-auto gap-[10px] px-5 py-10 text-[16px] text-white/70 rounded-[9px] overflow-hidden get-funded-cta-card-bg">
            <h1 className="text-center">
              Join today to experience the rewarding journey ahead!
            </h1>

            <div className="flex justify-center">
              <Link
                href="challenges"
                className="border-b p-3 cursor-pointer hover:border-b-2 hover:scale-105 duration-300"
              >
                Get Funded
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFundedCTA;
