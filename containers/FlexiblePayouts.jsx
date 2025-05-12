import React from "react";

import Image from "next/image";

import { icons, data } from "@/constants";

const IconBox = ({ icon, title, desc }) => (
  <div className="w-[250px] mx-auto">
    <Image src={icon} alt="flexible-payouts" width={"auto"} height={"auto"} />
    <h1 className="geist font-bold text-[18px] my-3 leading-[100%] text-white">
      {title}
    </h1>
    <h1 className="geist font-medium text-[14px] leading-[100%] text-[#7A7A7B]">
      {desc}
    </h1>
  </div>
);

const FlexiblePayouts = () => {
  return (
    <div className="mx-3">
      <div className="lg:w-[931px] flex flex-col justify-between gap-[44px] rounded-[24px] border border-[#1C1C1D] bg-[#0F1011] px-[32px]  md:mx-auto mt-[5.5rem] lg:mt-[11.26rem] py-[24px]">
        <div>
          <Image
            src={icons.flexiblepayout}
            alt="flexible-payouts"
            width={46}
            height={46}
            className="h-[46px] w-[46px]"
          />
          <h1 className="geist font-semibold text-[24px] lg:text-left leading-[100%]  my-4  mx-auto text-white">
            Flexible Payouts with Rise
          </h1>
        </div>
        {/* List */}
        <div className="flex flex-wrap space-y-10 justify-between">
          {data.flexible_payouts.map(({ icon, title, desc }, i) => (
            <IconBox key={i} icon={icon} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlexiblePayouts;
