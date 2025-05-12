import React from "react";

const EvaluationCard = ({ tag, title, desc, video, no_b }) => {
  return (
    <div
      className={`w-[418px]  lg:border-r border-[#525C71] p-5 ${
        no_b ? "!border-none" : ""
      }`}
    >
      <h1 className="geist font-medium text-[14px] mb-3 leading-[100%] text-[#7A7A7B]">
        {tag}
      </h1>
      <h1 className="geist font-bold text-[18px] mb-3 leading-[100%] text-white">
        {title}
      </h1>
      <h1 className="geist font-medium text-[14px] leading-[100%] text-[#7A7A7B] md:w-[356px]">
        {desc}
      </h1>
      <video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default EvaluationCard;
