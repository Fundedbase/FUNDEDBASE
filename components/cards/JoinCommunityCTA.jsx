"use client";

import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { images, icons, data } from "@/constants";

const JoinCommunityCTA = () => {
  const container = useRef(null);
  return (
    <div
      ref={container}
      className="mx-auto mt-[11.25rem] mb-[5rem] md:w-[604px] md:h-[178px] p-3 cursor-pointer rounded-[20px] border border-[#1C1C1D]"
      style={{
        animation: "ease-in-out",
        background:
          "radial-gradient(95.74% 113.76% at 104.39% -13.76%, rgba(76, 111, 192, 0.56) 0%, rgba(4, 34, 94, 0.56) 41.43%, rgba(0, 0, 0, 0.56) 100%)",
      }}
      onMouseOver={() =>
        (container.current.style.background =
          "radial-gradient(95.74% 113.76% at 104.39% -13.76%, rgba(126, 166, 255, 0.56) 0%, rgba(44, 85, 161, 0.56) 41.43%, rgba(0, 0, 0, 0.56) 100%)")
      }
      onMouseOut={() =>
        (container.current.style.background =
          "radial-gradient(95.74% 113.76% at 104.39% -13.76%, rgba(76, 111, 192, 0.56) 0%, rgba(4, 34, 94, 0.56) 41.43%, rgba(0, 0, 0, 0.56) 100%)")
      }
    >
      <div
        className="md:flex justify-evenly md:w-[580px] md:h-[154px] p-5 gap-[44px] rounded-[16px] border border-[#1C1C1D] bg-[#0A0B0C7A]"
        style={{
          background:
            "linear-gradient(0deg, rgba(10, 11, 12, 0.48), rgba(10, 11, 12, 0.48)), linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
        }}
      >
        <Image src={icons.discord} className="mb-5" alt="" />
        <div>
          <h1 className="geist font-medium text-[23px] leading-[100%] max-w-[754px] text- mb-3 mx-auto text-[#D9D9DA]">
            Trade. Connect. Grow.
          </h1>

          <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[754px] text- mb-3 mx-auto text-[#7A7A7B]">
            Join our Discord community and trade alongside top traders. Get
            insights, strategies, and real-time market updates!
          </h1>

          <Link href={data.def_links.discord}>
            <div className="flex w-[180px] gap-2">
              <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[754px] my-auto  text-white">
                Join the Community
              </h1>
              <Image
                src={icons.join_community_arrow}
                className="my-auto cursor-pointer"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityCTA;
