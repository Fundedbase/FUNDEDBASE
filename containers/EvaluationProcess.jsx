import React from "react";

import { EvaluationCard } from "@/components";
import { data } from "@/constants";

const EvaluationProcess = () => {
  return (
    <>
      {/* Text */}
      <div>
        <h1 className="geist font-semibold text-[32px] lg:text-[40px] leading-[100%] mb-5 text-center mx-auto text-white">
          Evaluation Process
        </h1>
        <h1 className="geist font-medium text-[14px] leading-[100%] max-w-[520px] text-center mb-3 mx-auto text-[#7A7A7B]">
          Kickstart your trading journey with a challenge built for growth. No
          unnecessary rules—just you, your skills, and the opportunity to trade
          big.
        </h1>
      </div>

      {/* List */}
      <div className="flex flex-wrap mt-[5rem] lg:mx-[3rem] justify-evenly ">
        {data.evaluation_process.map(({ video, tag, title, desc }, i) => (
          <EvaluationCard
            key={i}
            video={video}
            tag={tag}
            title={title}
            desc={desc}
            no_b={i === 2}
          />
        ))}
      </div>
    </>
  );
};

export default EvaluationProcess;
