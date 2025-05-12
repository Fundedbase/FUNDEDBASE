import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants";

const Logo = ({ className, lg }) => {
  return (
    <Link
      href="/"
      className={`text-gradient font-semibold ${lg
        ? "text-[8vw] xs:text-[22px] md:text-[4rem]"
        : "text-[5.5vw] xs:text-[20px] md:text-[22px]"
        }`}
    >
      <div className="relative flex items-center">
        <Image
          src={icons.navlogo}
          alt="Logo"
          width={150}
          height={30}
          className={className ? className : "w-auto md:w-auto mr-1 md:mr-2 h-5 md:h-6"}  
        />
        {/* Green glow effect */}
        <div className={`${lg ? "absolute inset-0 right-95 blur-[20px] bg-[#00FF9D]/20 -z-10 scale-150 opacity-100" : "absolute inset-0 right-31 blur-[10px] bg-[#00FF9D]/20 -z-10 scale-75 opacity-75"}`}
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 255, 157, 0.4) 0%, rgba(0, 255, 157, 0) 100%)'
          }}
        />
        <span className="bg-gradient-to-r from-emerald-200 to-emerald-100 bg-clip-text text-transparent">
          FundedBase
        </span>
      </div>
      
    </Link>
  );
};

export default Logo;
