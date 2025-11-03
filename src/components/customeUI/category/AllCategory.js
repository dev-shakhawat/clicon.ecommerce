"use client";

import Container from "@/components/common/Container";
import CategoryCart from "./CategoryCart";
// import Arrow from '@/icons/Arrow';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { currentCat } from "@/lib/slices/productSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function AllCategory() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [categoryList, setCategoryList] = useState([]);
 
  useEffect(() => {
      axios
      .get(`https://dummyjson.com/products/categories`)
      .then((res) => { 
        setCategoryList(res.data);
      });
  }, []);

  const handleCategoryView = (category, slug) => {
    dispatch(currentCat(category));
    router.push(`/shop`);
  };

 

  return (
    <div className="py-10">
      <Container>
        {/* heading */}
        <h2 className="text-center font-Public_Sans font-semibold text-[32px] leading-[40px] text-[#191C1F]   ">
          Shop with Categorys
        </h2>

        <div className=" w-[1320px] mt-5">
          <Carousel>
            {categoryList.length > 0 && <CarouselPrevious />}
            <CarouselContent className={`-ml-2`}>
              {categoryList?.map((item, index) => (
                <CarouselItem className="basis-1/5">
                  <CategoryCart 
                    category={item.name}
                    slug={item.slug}
                    onClick={() => handleCategoryView(item.name, item.slug)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {categoryList.length > 0 && <CarouselNext />}
          </Carousel>
        </div>
      </Container>
    </div>
  );
}
