import React from "react";

import Image from "next/image";
import Link from "next/link";

import { icons } from "@/constants";
import { CheckoutButton } from "@/components";

const ChallengeTable = ({ activeVal, activeIndex }) => {
  const fees = [59, 109, 229, 349, 599, 1099];
  const data = [
    {
      label: "Profit Target",
      phase1: `$${(8 / 100) * activeVal} (8%)`,
      phase2: `$${(5 / 100) * activeVal} (5%)`,
      liveAccount: "Funded",
    },
    {
      label: "Max Daily Loss (5%)",
      phase1: `$${(5 / 100) * activeVal}`,
      phase2: `$${(5 / 100) * activeVal}`,
      liveAccount: `$${(5 / 100) * activeVal}`,
    },
    {
      label: "Max Overall Loss (10%)",
      phase1: `$${(10 / 100) * activeVal}`,
      phase2: `$${(10 / 100) * activeVal}`,
      liveAccount: `$${(10 / 100) * activeVal}`,
    },
    {
      label: "Profit Split",
      phase1: "Up to 90%",
      phase2: "Up to 90%",
      liveAccount: "Up to 90%",
    },
    {
      label: "Leverage",
      phase1: "1:30",
      phase2: "1:30",
      liveAccount: "1:30",
    },
    {
      label: "Trading Period",
      phase1: "Unlimited",
      phase2: "Unlimited",
      liveAccount: "Unlimited",
    },
    {
      label: "Trading Days",
      phase1: "5 Minimum days",
      phase2: "5 Minimum days",
      liveAccount: "-",
    },
    {
      label: "Weekend Trading",
      phase1: "yes",
      phase2: "yes",
      liveAccount: "yes",
    },
    {
      label: "Fee",
      phase1: `$${fees[activeIndex]}`,
      phase2: "Free",
      liveAccount: "Free",
    },
  ];
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="max-w-[850px] flex gap-4 justify-start lg:justify- mx-auto">
          {/* Sidebar */}
          <div className="w-[192px] flex-shrink-0 h-[500px] flex flex-col justify-evenly gap-6 rounded-[16px] border border-[#1C1C1D] bg-[#040A14C7] backdrop-blur-[16.2px] pt-10 px-4">
            <ul className="list-none text-white text-sm space-y-6">
              {data.map((item, index) => (
                <li key={index}>{item.label}</li>
              ))}
            </ul>
          </div>
          {/* Table */}
          <div className="overflow-x-auto rounded-[16px] border border-[#1C1C1D]  min-w-[600px] flex-1">
            <table className="w-full rounded-[16px] h-[500px] bg-[#040A14C7] backdrop-blur-[16.2px] text-sm">
              <thead>
                <tr>
                  <th className="text-white text-center font-bold py-4 px-2 bg-[#FFFFFF05] border-b border-[#1C1C1D]">
                    Phase 1
                  </th>
                  <th className="text-white text-center font-bold py-4 px-2 bg-[#FFFFFF05] border-b border-[#1C1C1D]">
                    Phase 2
                  </th>
                  <th className="text-white text-center font-bold py-4 px-2 bg-[#FFFFFF05] border-b border-[#1C1C1D]">
                    Live Account{" "}
                    <Image
                      src={icons.arrow}
                      alt="Live"
                      className="inline-block ml-1"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center text-white p-2">
                      {item.phase1 === "yes" ? (
                        <Image
                          src={icons.check}
                          className="mx-auto"
                          alt="yes"
                        />
                      ) : (
                        item.phase1
                      )}
                    </td>
                    <td className="text-center text-white p-2">
                      {item.phase2 === "yes" ? (
                        <Image
                          src={icons.check}
                          className="mx-auto"
                          alt="yes"
                        />
                      ) : (
                        item.phase2
                      )}
                    </td>
                    <td className="text-center text-white p-2">
                      {item.liveAccount === "yes" ? (
                        <Image
                          src={icons.check}
                          className="mx-auto"
                          alt="yes"
                        />
                      ) : (
                        item.liveAccount
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADDONS & GET FUNDED BUTTON */}
      <div className="md:flex space-y-5 justify-between p-5 w-full lg:w-[868px] mx-auto">
        <div className="gap-3 md:flex justify-center m-0  items-center ">
          <p className="text-[#7A7A7B] text-[16px] h-full font-semibold text-shadow-lg py-[16px] px-0">
            <Image
              src={icons.plus}
              alt="Live Account"
              className="inline-block"
            />
            Add-Ons
          </p>
          <div className="gap-3  flex ">
            <Link
              href="#"
              className="styled-button font-normal text-[#D9D9DA] text-[10px] lg:text-[14px]   h-[2.5rem]"
            >
              90/10 Share of Gains
            </Link>
            <Link
              href="#"
              className="styled-button font-normal text-[#D9D9DA] text-[10px] lg:text-[14px] h-[2.5rem]"
            >
              Bi Weekly Payouts
            </Link>
          </div>

          <br />
        </div>
        <div className="lg:justify-center lg:items-center lg:flex ">
          <CheckoutButton
            text={`Get Funded $${fees[activeIndex]}`}
            amount={fees[activeIndex]}
            className="styledbutton h-[51px] w-full md:w-[224px] bg-[#E6E6E6] text-black font-mono px-6 py-[14px] rounded-[4px] border-[#00000050] border-[1.5px] shadow-[4px_4px_0px_#00000080] transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_white] text-center"
          />
        </div>
      </div>
    </>
  );
};

export default ChallengeTable;
