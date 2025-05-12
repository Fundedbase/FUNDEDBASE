import React from "react";
import Link from "next/link";

const LightButton = ({ href, text, icon_r, icon_l, className }) => (
  <Link
    href={href ? href : "#"}
    className={`styledbutton relative group overflow-hidden bg-emerald-50 text-black font-mono px-6 py-[14px] rounded-lg transition-all duration-300 flex gap-2 items-center ${className || ""}`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/0 via-emerald-200/30 to-emerald-200/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    {icon_l && icon_l}
    <p className="relative z-10">{text}</p>
    {icon_r && icon_r}
  </Link>
);

const NavDarkButton = ({ href, text, icon_r, icon_l, className }) => (
  <Link href={href ? href : "#"} className="nav-dark-btn-wrapper">
    <div className={`mobile flex px-3 py-2 text-emerald-50 tracking-wide text-[14px] backdrop-blur-sm transition-all duration-300 hover:bg-emerald-400/10 border border-emerald-600/20 gap-2 items-center bg-emerald-950/80 rounded-lg ${className || ""}`}>
      {icon_l && icon_l}
      <p>{text}</p>
      {icon_r && icon_r}
    </div>
  </Link>
);

const DarkButton = ({ href, text, icon_r, icon_l, className }) => (
  <Link href={href ? href : "#"} className="dark-btn-wrapper">
    <div className="relative group">
      <div className={`h-[51px] px-6 py-[14px] rounded-lg text-emerald-50 font-mono tracking-wide backdrop-blur-sm transition-all duration-300 border border-emerald-600/20 w-full flex gap-2 items-center bg-emerald-950/80 ${className || ""}`}>
        {icon_l && icon_l}
        <span>{text}</span>
        {icon_r && icon_r}
      </div>
      {/* OVERLAY ON HOVER */}
      <div className="absolute inset-0 rounded-lg bg-emerald-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
    </div>
  </Link>
);

const NeutralButton = ({ href, text, icon_r, icon_l, className }) => (
  <Link href={href ? href : "#"} className={`text-emerald-400 hover:text-emerald-300 transition-colors duration-300 flex gap-2 items-center ${className || ""}`}>
    {icon_l && icon_l}
    <p>{text}</p>
    {icon_r && icon_r}
  </Link>
);

const NormalButton = ({ href, text, icon_r, icon_l, className }) => (
  <Link href={href ? href : "#"} className={`text-emerald-200 hover:text-emerald-400 transition-colors duration-300 flex gap-2 items-center ${className || ""}`}>
    {icon_l && icon_l}
    <p>{text}</p>
    {icon_r && icon_r}
  </Link>
);

const NavButton = ({ href, text, icon_r, icon_l, className }) => (
  <Link href={href ? href : "#"} className="nav-btn-wrapper">
    <div className="relative group">
      <div className={`hidden lg:flex px-6 py-[14px] rounded-[4px] text-emerald-50 font-mono tracking-wide backdrop-blur-sm transition-all duration-300 border-none w-full gap-2 items-center bg-[#000713ef] ${className || ""}`}>
        {icon_l && icon_l}
        <span>{text}</span>
        {icon_r && icon_r}
      </div>
      {/* OVERLAY ON HOVER */}
      <div className="absolute inset-0 rounded-lg bg-emerald-400/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
    </div>
  </Link>
);

const Button = (props) => {
  return (
    <>
      {props.type === "dark" && <DarkButton {...props} />}
      {props.type === "nav-dark" && <NavDarkButton {...props} />}
      {props.type === "neutral" && <NeutralButton {...props} />}
      {props.type === "light" && <LightButton {...props} />}
      {props.type === "nav" && <NavButton {...props} />}
      {!props.type && <NormalButton {...props} />}
    </>
  );
};

export default Button;
