"use client"
import ChallengeBox from "@/components/challengePage/ChallengeBox";
import Features from "@/components/challengePage/Features";

const ChallengePage = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1120] to-[#0f1a2e] flex flex-col items-center pt-34 py-10 px-4 overflow-hidden">
      <div className="flex flex-col items-center gap-14">
        <ChallengeBox />
        <Features />
      </div>

    </div>
  );
};

export default ChallengePage;