import React from "react";

import Image from "next/image";

import { images, icons } from "@/constants";

const TradingPlatforms = () => {
  return (
    <>
      {/* Text */}
      <div className="mt-[5.5rem] lg:mt-[11.26rem]">
        <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[754px] text-center mb-3 mx-auto text-[#7A7A7B]">
          Trading Platforms
        </h1>
        <h1 className="geist font-semibold text-[30px] lg:text-[40px] leading-[100%] mb-5 text-center mx-auto text-white">
          Make Trading Easier with Your Favorite Tools
        </h1>
      </div>
      {/* Image Mobile */}
      <Image
        src={images.maketradingeasy}
        alt="Fundedbase"
        layout="responsive"
        width={"100%"}
        height={"auto"}
        className="mx-auto lg:hidden animate-pulse mb-[5.5rem]"
      />
      {/* Image Desktop */}
      <div className="hidden lg:block">
        <div className="lg:w-[1100px]  mx-auto flex items-center mt-[3rem] justify-evenly gap-10 p-5">
          {/* Left */}
          {/* Left */}
          {/* Left */}
          <div className="relative flex items-center justify-center w-[400px] h-[270px] rounded-[16px] animate-pulse tp-left-side">
            <Image
              src={images.matchtrader1}
              alt="Match trader"
              width={400}
              height={400}
              className="absolute w-[400px] h-[400px] ml-[110px] mb-[250px] rounded-[16px]"
            />
            {/* Overlay */}
            <div className="z-10 flex flex-col items-center mb-[250px] justify-center text-white text-center gap-2">
              <Image
                src={images.matchtraderLogo}
                alt="Match trader Logo"
                width={128}
                height={69}
                className="w-32"
              />
              <p className="geist font-medium text-[14px] leading-[100%] max-w-[754px] text-center mb-3 mx-auto text-[#7A7A7B]">
                100+ Digital currencies
              </p>
            </div>
          </div>

          {/* Center */}
          {/* Center */}
          {/* Center */}
          <div className="flex justify-center  mb-[250px]  items-center z-10">
            <Image
              src={icons.and}
              alt="And"
              width={200}
              height={200}
              className="w-[200px] h-[200px]"
            />
          </div>

          {/* Right */}
          {/* Right */}
          {/* Right */}
          <div className="relative flex items-center justify-center w-[400px] h-[270px] rounded-[16px] animate-pulse tp-right-side">
            <Image
              src={images.matchtrader1}
              alt="Trading View"
              width={400}
              height={400}
              className="absolute w-[400px] h-[400px] mr-[110px] rotate-180 mb-[250px] rounded-[16px]"
            />
            {/* Overlay */}
            <div className="z-10 flex flex-col items-center justify-center mb-[250px] text-white text-center gap-2">
              <Image
                src={images.tradingviewLogo}
                alt="Trading View Logo"
                width={128}
                height={69}
                className="w-32"
              />
              <p className="text-sm">100+ Digital currencies</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradingPlatforms;
