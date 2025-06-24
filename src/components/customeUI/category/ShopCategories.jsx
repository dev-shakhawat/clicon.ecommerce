"use client";

import { currentCat } from "@/lib/slices/productSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export default function ShopCategories() {

  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const dispatch = useDispatch();

  // fetch categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
   
   
   useEffect(() => {
    dispatch(currentCat(activeCat))
   }, [activeCat]);
  


  return (
    <div className="flex flex-col gap-3 mt-4 max-h-[372px] overflow-scroll -scroll-m-0  ">
      {categories.length > 0 &&
        categories.map((cat) => (
          <label key={cat} htmlFor={cat} className="block cursor-pointer " >
            <input key={cat} type="radio" name="categories" id={cat} value={cat} checked={activeCat === cat} onChange={()=> setActiveCat(cat)} className={` relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0  after:w-5 after:h-5  after:rounded-full after:border-2    before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1.5 before:w-2 before:h-2 before:bg-[#ffffff] before:rounded-full before:z-10 ${activeCat === cat ? "after:border-[#FA8232] after:bg-[#FA8232] " : "after:border-[#C9CFD2] after:bg-[white]   "}   `}/>
            <span className={`ml-3 font-Public_Sans font-normal text-sm leading-[20px] capitalize ${activeCat === cat ? "text-[#191C1F]" : "text-[#475156]"}  `}>{cat}</span>
          </label>
        ))}
    </div>
  );
}
