"use client";

import { currentCat } from "@/lib/slices/productSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function ShopCategories() {
  const [categories, setCategories] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((res) => {
        setCategories(res.data);
      });
  }, []);

  useEffect(() => {
    dispatch(currentCat(activeCat));
  }, [activeCat]);

  return (
    <div className="flex flex-col gap-3 mt-4 max-h-[372px] overflow-scroll -scroll-m-0  ">
      {categories.length > 0 &&
        categories.map((cat) => (
          <label
            key={cat.name}
            htmlFor={cat.slug}
            className="block cursor-pointer "
            onChange={() => setActiveCat(cat.slug)}
          >
            <input
              key={cat.slug}
              type="radio"
              name="categories"
              id={cat.slug}
              value={cat.name}
              checked={activeCat === cat.slug}
              
              className={` relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0  after:w-5 after:h-5  after:rounded-full after:border-2    before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1.5 before:w-2 before:h-2 before:bg-[#ffffff] before:rounded-full before:z-10 ${
                activeCat === cat.slug
                  ? "after:border-[#FA8232] after:bg-[#FA8232] "
                  : "after:border-[#C9CFD2] after:bg-[white]   "
              }   `}
            />
            <span
              className={`ml-3 font-Public_Sans font-normal text-sm leading-[20px] capitalize ${
                activeCat === cat.name ? "text-[#191C1F]" : "text-[#475156]"
              }  `}
            >
              {cat.name}
            </span>
          </label>
        ))}
    </div>
  );
}
