"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { Logo, Button } from "@/components";
import { data, icons } from "@/constants";

// Redesigned Menu Button Component
const MenuButton = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="flex lg:hidden flex-col justify-center items-center w-8 h-8 rounded-md focus:outline-none transition-all duration-300"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <div className="relative w-6 h-6">
      {isOpen ? (
        // X icon when menu is open
        <>
          <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-[#00c072] transform -translate-y-1/2 rotate-45" />
          <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-[#00c072] transform -translate-y-1/2 -rotate-45" />
        </>
      ) : (
        // Hamburger icon when menu is closed
        <>
          <div className="absolute top-1.5 left-0 w-6 h-0.5 bg-[#00c072]" />
          <div className="absolute top-3 left-0 w-6 h-0.5 bg-[#00c072]" />
          <div className="absolute top-4.5 left-0 w-6 h-0.5 bg-[#00c072]" />
        </>
      )}
    </div>
  </button>
);

const MobileNavPopup = ({ isOpen, closeMenu }) => {
  const popupRef = useRef(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) && 
          !event.target.closest('button[aria-label="Close menu"]') && 
          !event.target.closest('button[aria-label="Open menu"]')) {
        closeMenu();
      }
    };
    
    if (isOpen) {
      // Small delay to avoid immediate closing when opening
      const timer = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  if (!isOpen) return null;

  return (
    <div className="fixed !z-100 lg:hidden top-[5rem] left-0 w-full p-2 animate-fade-in-down">
      <div 
        ref={popupRef}
        className="w-full px-4 py-6 bg-[#FFFFFF0F] border border-[#00c072] rounded-[12px] flex flex-col items-center gap-4 backdrop-blur-sm z-10"
      >
        <ul className="flex flex-col items-center gap-4 list-none w-full">
          {data.menu_links.map((link, index) => (
            <li 
              key={index} 
              className="w-full text-center transition-all duration-200 hover:bg-[#FFFFFF0F] rounded-md py-2"
            >
              <Link
                href={link.url}
                className="block w-full cursor-pointer hover:text-white"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="w-full flex justify-center mt-2">
            <Link
              href="https://t.me/Fundedbasebot"
              className="flex justify-center cursor-pointer hover:text-white duration-200 gap-2 items-center bg-[#FFFFFF0F] w-[15rem] px-4 py-3 rounded-[8px]"
              onClick={closeMenu}
            >
              <Image src={icons.dashboardicon} alt="dashboard" width={14} height={12}/>
              Telegram
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    // Close menu on route change
    const handleRouteChange = () => {
      closeMenu();
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
      window.addEventListener('popstate', handleRouteChange);
    }

    // Clean up on component unmount or when menu closes
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex fixed w-full justify-center z-100">
      <nav 
        ref={navbarRef}
        className="flex justify-between mx-[0.5rem] lg:block bg-[#FFFFFF0F] border border-[#00c072] backdrop-blur-xl rounded-[12px] w-full max-w-[900px] mt-2 lg:mt-5 px-5 py-4 text-emerald-50/70"
      >
        <div className="flex justify-between">
          {/* Hamburger and Logo */}
          <div className="flex items-center gap-2">
            <MenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Logo />
          </div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center list-none gap-[2rem]">
            {data.menu_links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="cursor-pointer duration-200 hover:text-[#33f5a6]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <Button
              icon_l={<Image src={icons.dashboardicon} alt="dashboard" width={18} height={12} />}
              text="Telegram"
              href="https://t.me/Fundedbasebot"
            />
            <Button
              text="Get Funded"
              href={data.def_links.challenges}
              type="nav"
            />
          </div>
        </div>

        {/* Tablet and Mobile Only */}
        <div className="lg:hidden">
          <Button
            text="Get Funded"
            href={data.def_links.challenges}
            type="nav-dark"
          />
        </div>
      </nav>
      <MobileNavPopup isOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;