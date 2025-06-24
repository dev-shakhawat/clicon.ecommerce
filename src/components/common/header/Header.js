"use client";
import { useEffect, useState } from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {

    const handleCheckScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleCheckScroll);
    return () => {
      window.removeEventListener("scroll", handleCheckScroll);
    }
    
  }, []);

  return (
    <div
      className={`bg-[#1B6392] h-auto  w-full ${
        isSticky && "fixed top-0 left-0 animate-header z-10 "
      } `}
    >
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </div>
  );
}
