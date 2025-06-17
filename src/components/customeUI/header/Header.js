"use client";
import { useEffect, useState } from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
    });
  }, []);

  console.log(isSticky);
  return (
    <div
      className={`bg-[#1B6392] ${
        isSticky && "fixed top-0 left-0 w-full z-50"
      } `}
    >
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </div>
  );
}
