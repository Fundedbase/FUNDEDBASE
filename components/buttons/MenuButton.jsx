"use client";

import Image from "next/image";

import { icons } from "@/constants";

const MenuButton = ({ showMenuPopup, setShowMenuPopup }) => {
  return (
    <>
      <button
        type="button"
        className="lg:hidden focus:outline-none transition-transform duration-300"
        onClick={() => setShowMenuPopup((prev) => !prev)}
      >
        {showMenuPopup ? (
          <Image
            src={icons.cancel}
            alt="Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        ) : (
          <Image
            src={icons.hamburger}
            alt="Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        )}
      </button>
    </>
  );
};

export default MenuButton;
