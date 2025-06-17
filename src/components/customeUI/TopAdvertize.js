"use client";

import Arrow from "@/icons/Arrow";
import Close from "@/icons/Close";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "../common/Container";

export default function TopAdvertize() {
  const [open, setOpen] = useState(true);

  const pathname = usePathname();

  const handleClose = () => {
    setOpen(false);
  };
  return (
    open &&
    pathname == "/" && (
      <div className="bg-[#191C1F] py-4 relative text-white z-50 ">
        <Container>
          <div className="flex items-center justify-between  ">
            {/* ofer type image/left */}
            <Image
              src="/images/offertype.png"
              alt="advertize"
              priority
              width={160}
              height={43}
              className="w-[160px] h-[43px]  object-cover"
            />

            {/* offer persantage */}
            <div className="flex items-center gap-2 ">
              <span className=" font-Public_Sans font-medium text-sm leading-5 text-white   ">
                Up to
              </span>
              <h2 className=" font-Public_Sans font-semibold text-[40px] text-[#EBC80C] leading-[48px]  ">
                59%
              </h2>
              <span className=" font-Public_Sans text-xl leading-[28px] text-white uppercase ">
                off
              </span>
            </div>

            {/* shop now btn */}
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer font-Public_Sans font-bold text-sm leading-[48px] text-[#191C1F] bg-[#EBC80C] px-6 rounded-[2px] uppercase  "
            >
              <span>Shop Now</span>
              <Arrow className={`w-[21px] h-[20px]`} />
            </button>
          </div>
        </Container>

        {/* close advertize */}
        <button
          onClick={handleClose}
          type="button"
          className="bg-[#303639] p-2 grid place-items-center rounded-2 cursor-pointer absolute top-4 right-4 "
        >
          <Close className={` w-[20px] h-[20px] z-50  `} />
        </button>
      </div>
    )
  );
}
