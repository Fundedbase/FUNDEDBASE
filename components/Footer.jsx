"use client";

import { useRef, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegram, FaEnvelope } from "react-icons/fa";

import { images, icons, data } from "@/constants";
import { Logo } from "@/components";

const Footer = () => {
  const emailInput = useRef(null);
  const btnText = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = emailInput.current.value.trim();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show loading
    setIsLoading(true);
    btnText.current.textContent = "Subscribing...";

    // Simulate async request
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessMsg(true);
      btnText.current.textContent = "Subscribe";
      emailInput.current.value = "";
    }, 2000); // Simulates a 2-second network request
  };

  return (
    <footer
      className="px-6 sm:px-10 md:px-[108px] py-[5rem] border-t border-emerald-800/40"
      style={{
        background:
          "radial-gradient(54.37% 124.75% at 53.04% 84.37%, rgba(76, 192, 130, 0.56) 0%, rgba(4, 94, 73, 0.56) 41.43%, rgba(0, 0, 0, 0.56) 100%)",
      }}
    >
      {/* "radial-gradient(54.37% 124.75% at 53.04% 84.37%, rgba(76, 111, 192, 0.56) 0%, rgba(4, 34, 94, 0.56) 41.43%, rgba(0, 0, 0, 0.56) 100%)", */}
      {/* "radial-gradient(54.37% 124.75% at 53.04% 84.37%, rgba(51,245,166,0.18) 0%, rgba(0,192,114,0.18) 41.43%, rgba(0,52,33,0.56) 100%)", */}
      
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/*  Logo & About */}
        <div className="flex-shrink-0 max-w-md">
          <Logo className="w-[70px] h-auto mb-4" lg />
          <p className="text-[14px] font-medium text-emerald-50/70 mb-4">
            FundedBase provides crypto traders with funded accounts to trade memecoins and other cryptocurrencies. Our mission is to empower traders with capital to maximize their potential without risking their own funds.
          </p>
        </div>
        
        {/* Useful Links + Legal */}
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Useful Links */}
          <div className="space-y-4">
            <p className="text-[16px] font-medium text-emerald-50">Quick Links</p>
            <ul className="list-none text-[14px] space-y-4 text-emerald-50/70">
              <li>
                <Link
                  href="/challenges"
                  className="hover:text-emerald-400 duration-200 cursor-pointer"
                >
                  Challenges
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  className="hover:text-emerald-400 duration-200 cursor-pointer"
                >
                  Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-emerald-400 duration-200 cursor-pointer"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-[16px] font-medium text-emerald-50">Legal</p>
            <ul className="list-none text-[14px] space-y-4 text-emerald-50/70">
              <li>
                <Link
                  href="/rules#disclaimer"
                  className="hover:text-emerald-400 duration-200 cursor-pointer"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/rules#disclaimer"
                  className="hover:text-emerald-400 duration-200 cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="max-w-xl">
          <p className="text-[16px] mb-3 font-medium text-emerald-50">Contact Us</p>
          <p className="text-[14px] font-medium text-emerald-50/70 mb-4">
            Have questions? Reach out to our team for support or inquiries.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <Link
              href="https://instagram.com/fundedbase.official"
              className="text-emerald-50 hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://t.me/Fundedbasebot"
              className="text-emerald-50 hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={24} />
            </Link>
            <Link
              href="mailto:support@fundedbase.com"
              className="text-emerald-50 hover:text-emerald-400 transition-colors"
            >
              <FaEnvelope size={24} />
            </Link>
          </div>
          
          <p className="text-emerald-50/70 text-[12px] mt-6">
            Email: support@fundedbase.com
          </p>
        </div>
      </div>

      <div className="my-[60px] text-emerald-50/70 mx-auto">
        <hr className="border-emerald-50/40" />
        <div className="pt-[20px] text-[12px] leading-[18px] font-normal">
          <p id="disclaimer">
            Disclaimer: All information provided on this site is intended solely
            for educational purposes relating to trading and financial markets.
            Trading cryptocurrencies, including memecoins, involves significant risk.
            FundedBase does not provide investment advice. Users are responsible for
            complying with applicable laws and regulations in their jurisdiction.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-emerald-50/70 text-[12px]">
          © 2023 FundedBase. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
