"use client";
import { useEffect, useRef, useState } from "react";

// components
import Container from "@/components/common/Container";

// icons
import ArowDropdown from "@/icons/ArowDropdown";
import Call from "@/icons/Call";
import Compare from "@/icons/Compare";
import Info from "@/icons/Info";
import Location from "@/icons/Location";
import Support from "@/icons/Support";
import axios from "axios";
import Link from "next/link";
import CategoryListForHeader from "../../customeUI/category/CategoryListForHeader";

export default function HeaderBottom() {
  const [categoryList, setCategoryList]=useState([])


  
  // Fetch all category list from API
  function getAllCategoryList() {
   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/getcategorys`).then((res)=>{
   setCategoryList(res.data.data);
   })
  }
  useEffect(()=>{
    getAllCategoryList()
  },[])

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

  

  }, []);

  return (
    <div className="bg-white py-4 border-b border-[#e4e7e9] ">
      <Container>
        <div className="flex  ">
          {/* catagory button */}
          <div ref={categoryRef} className="relative">
            <button
              onClick={() => setIsCategoryOpen((prev) => !prev)}
              type="button"
              className={`${
                isCategoryOpen
                  ? "bg-[#FA8232] text-white  "
                  : "bg-[#f2f4f5] text-[#191C1F]"
              }  duration-100 flex gap-2 items-center py-3.5 px-6  rounded-[2px] cursor-pointer font-Public_Sans font-medium text-sm leading-5 `}
            >
              <span>All Catagory</span>
              <ArowDropdown
                className={`${isCategoryOpen ? "rotate-180" : ""}  `}
              />
            </button>

            {/* alll category dropdown */}
            {isCategoryOpen && (
              <CategoryListForHeader
                categoryList={categoryList}
                className={`top-15 left-0 z-10 `}
              />
            )}
          </div>

          {/* nav links */}
          <ul className="flex items-center gap-6 ml-6 ">
            <li>
              <Link
                href={"/track-order"}
                className=" flex items-center gap-[6px] font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] "
              >
                <Location />
                <span>Track Order</span>
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="flex items-center gap-[6px] font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] "
              >
                <Compare />
                <span>Compare</span>
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="flex items-center gap-[6px] font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] "
              >
                <Support />
                <span>Customer Support</span>
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="flex items-center gap-[6px] font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] "
              >
                <Info />
                <span>Need Help</span>
              </Link>
            </li>
          </ul>

          {/* call btn */}
          <Link
            href={"tel:12025550104"}
            className=" font-Public_Sans font-normal text-xl leading-[24px] text-[#191C1F] flex items-center  gap-2 ml-auto "
          >
            <Call />
            <span>+1-202-555-0104</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
