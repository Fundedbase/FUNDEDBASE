"use client";

import { useState } from "react";

import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";

import { data, icons } from "@/constants";

const QRPopup = ({ close }) => (
  <div className="bg-emerald-950/50 fixed top-0 left-0 w-full h-screen flex justify-center items-center z-50 backdrop-blur-sm">
    <div className="w-[80%] max-w-[320px] overflow-hidden flex flex-col items-center justify-center bg-emerald-950/80 border border-emerald-600/30 rounded-lg backdrop-blur-md gap-4 p-4 relative">
      <Image
        src={icons.cancel}
        width={200}
        height={200}
        alt="QR Code"
        className="w-4 h-4 absolute top-0 right-0 m-4 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={close}
      />
      <h1 className="text-center geist text-[18px] md:text-[20px] text-emerald-50 font-semibold mt-7">
        Scan this QR code to get funded
      </h1>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image
          src={data.qr_data.img}
          width={200}
          height={200}
          alt="QR Code"
          className="w-48 h-48 relative z-10"
        />
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(data.qr_data.code);
          alert("Copied to clipboard");
        }}
        className="w-full break-words text-emerald-200/60 hover:text-emerald-200 transition-colors duration-300 flex items-center justify-center gap-2"
      >
        <FaRegCopy className="inline" /> 
        <span className="text-sm">{data.qr_data.code}</span>
      </button>
    </div>
  </div>
);

const GetFundedButton = ({ text, className }) => {
  const [showQR, setShowQR] = useState(false);
  return (
    <div className="flex">
      <button
        type="button"
        className={`${className ? className : ""} hover:bg-emerald-400/10 transition-colors duration-300`}
        onClick={() => setShowQR(true)}
      >
        {text}
      </button>
      {showQR && <QRPopup close={() => setShowQR(false)} />}
    </div>
  );
};

export default GetFundedButton;
