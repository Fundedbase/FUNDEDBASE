import React from "react";

import Image from "next/image";
import Link from "next/link";

import { icons, data } from "@/constants";
import { CheckoutButton } from "@/components";

const ChallengeTable = () => {
  const fee = 149;
  const table_data = [
    {
      label: "Fee",
      value: `$${fee}`,
    },
    {
      label: "Profit Target",
      value: "8%",
    },
    {
      label: "Max Drawdown",
      value: "5%",
    },
    {
      label: "Daily Drawdown",
      value: "3%",
    },
    {
      label: "Platform",
      value: "Binance",
    },
    {
      label: "Leverage",
      value: "1:3",
    },
  ];
  
  return (
    <>
      <div id="challenges" className="w-full overflow-x-auto">
        <div className="max-w-[850px] mx-auto">
          {/* Challenge Box */}
          <div className="rounded-[16px] border border-[#1C1C1D] bg-[#040A14C7] backdrop-blur-[16.2px] p-6">
            <h2 className="text-white text-center font-bold text-2xl py-4 px-2">
              $10K Challenge — ${fee}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {table_data.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-[#1C1C1D] py-3">
                  <span className="text-[#7A7A7B]">{item.label}</span>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <CheckoutButton
                text="Start Challenge"
                amount={fee}
                className="styledbutton h-[51px] w-full md:w-[224px] bg-[#E6E6E6] text-black font-mono px-6 py-[14px] rounded-[4px] border-[#00000050] border-[1.5px] shadow-[4px_4px_0px_#00000080] transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_white] text-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional notes */}
      <div className="max-w-[850px] mx-auto mt-8 text-center">
        <h3 className="text-white text-xl mb-4">Memecoin-Friendly Challenges</h3>
        <p className="text-[#7A7A7B] mb-6">
          Trade your favorite memecoins without time restrictions. Hit your targets and get funded!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="styled-button font-normal text-[#D9D9DA] text-[14px] h-[2.5rem]">
            No Time Limit
          </div>
          <div className="styled-button font-normal text-[#D9D9DA] text-[14px] h-[2.5rem]">
            Crypto-focused Only
          </div>
          <div className="styled-button font-normal text-[#D9D9DA] text-[14px] h-[2.5rem]">
            Fast Payouts
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeTable;
