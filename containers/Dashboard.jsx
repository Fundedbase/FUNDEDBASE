import React from "react";

import { videos } from "@/constants";

const Dashboard = () => {
  return (
    <>
      {/* Text */}
      <div className="mt-[5.5rem] mb-10 lg:mt-[11.26rem]">
        <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[754px] text-center mb-3 mx-auto text-[#7A7A7B]">
          Dashboard
        </h1>

        <h1 className="geist font-semibold text-[30px] lg:text-[40px] leading-[100%] px-2 mb-5 text-center mx-auto text-white">
          Your Trading Hub at a Glance
        </h1>
      </div>

      {/* Graphical Representation */}
      <div className="flex justify-center">
        {/* Desktop Video */}
        <video
          src={videos.dashboard}
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
          preload="none"
          className="hidden md:block  object-cover"
        ></video>

        {/* Mobile Video */}
        <video
          src={videos.dashboard_m}
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
          preload="none"
          className="block md:hidden w-full h-auto object-cover"
        ></video>
      </div>
    </>
  );
};

export default Dashboard;
