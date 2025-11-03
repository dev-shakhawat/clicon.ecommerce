"use client";
import Link from "next/link"; 

import { currentCat } from "@/lib/slices/productSlice";
import { useDispatch } from "react-redux"; 
import { useRouter } from "next/navigation";


export default function CategoryListForHeader({ className, categoryList , setIsCategoryOpen }) { 

  const dispatch = useDispatch();
  const navigate = useRouter();
  const handleNavigatetoShop = (cat)=> {
    dispatch(currentCat(cat));
    navigate.push(`/shop`);
    setIsCategoryOpen(false);
  }

  return (
    <div 
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      className={`${className} lg:min-w-[240px] max-h-[400px] overflow-y-scroll absolute bg-white py-3 border border-[#e2e5e7] rounded-[3px] `}
    >
      <ul>
        {categoryList?.map((item, index) => (
          <li 
            onClick={()=> handleNavigatetoShop(item) }
            className={` cursor-pointer py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]    `}
            key={index}
          >
            <Link
              href={"#"}
              className="flex items-center jubestify-between w-full  "
            >
              <span className=" capitalize">{item}</span> 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
