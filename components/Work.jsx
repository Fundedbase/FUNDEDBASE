import React from 'react'
import Tag from "@/components/Tag";
import { MdLooks3, MdLooksOne, MdLooksTwo } from "react-icons/md";


function Work() {
    return (
        <div className="mt-15">
            {/* <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[754px] text-center mb-3 mx-auto bg-white text-black">
          Simple Process
        </h1> */}
            <Tag text="Simple Process" />
            <h1 className="geist font-semibold text-[30px] lg:text-[40px] leading-[100%] px-2 mb-12 text-center mx-auto text-white">
                How It Works
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-4">
                {/* Step 1 */}
                <div className="bg-[#040A14C7] hover:border-[#00c072] transition-all duration-300 group border border-[#1C1C1D] backdrop-blur-[16.2px] p-6 rounded-[16px] flex flex-col items-center text-center">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#33f5a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-400 flex items-center justify-center mb-4 shadow-md shadow-emerald-400/10">
                        <MdLooksOne className="text-4xl text-white" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3">Pick your challenge</h3>
                    <p className="text-emerald-50/70">
                        Choose your challenge size and pay a one-time fee to start trading.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#040A14C7] hover:border-[#00c072] transition-all duration-300 group border border-[#1C1C1D] backdrop-blur-[16.2px] p-6 rounded-[16px] flex flex-col items-center text-center">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#33f5a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-400 flex items-center justify-center mb-4 shadow-md shadow-emerald-400/10">
                        <MdLooksTwo className="text-4xl text-white" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3">Trade and hit targets</h3>
                    <p className="text-[#7A7A7B]">
                        Meet the profit target while staying within drawdown limits.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-[#040A14C7] hover:border-[#00c072] transition-all duration-300 group border border-[#1C1C1D] backdrop-blur-[16.2px] p-6 rounded-[16px] flex flex-col items-center text-center">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#33f5a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-400 flex items-center justify-center mb-4 shadow-md shadow-emerald-400/10">
                        <MdLooks3 className="text-4xl text-white" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3">Get funded</h3>
                    <p className="text-[#7A7A7B]">
                        After passing the challenge, trade with our capital and keep your profits.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Work
