"use client";
import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import Product from "@/components/common/Product"; 
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedProducts = () => {
 
  const [categoryList, setCategoryList] = useState(["All Product"]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("All Product");

  useEffect(() => {
      axios
      .get(`https://dummyjson.com/products/category-list`)
      .then((res) => { 
        const cat = res.data.slice(0, 4);
        setCategoryList([...categoryList , ...cat]);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products${activeTab === "All Product" ? "?limit=8" : `/category/${activeTab}?limit=8`}`)
      .then((res) => { 
        setFilteredProducts(res.data.products);
        
      });
  }, [activeTab]);
 


 
  return (
    <section>
      <Container>
        <Flex className=" gap-6">
          <div>
            <Image
              src={"/images/ProductBanner.png"}
              alt="banner"
              width={320}
              height={716}
              className={`w-full `}
            />
          </div>

          <div className="w-full">
            <Flex className="justify-between">
              <h2 className=" text-2xl font-semibold font-Public_Sans leading-6 text-gray-900">
                Featured Products{" "}
              </h2>

              <ul className="flex    ">
                {categoryList.map((item, index) => (
                  <li
                    onClick={() => setActiveTab(item)}
                    key={index}
                    className={` cursor-pointer py-2 px-4 font-public_sans capitalize font-normal text-sm leading-5 text-[#77878F] ${
                      activeTab == item &&
                      " border-b-4 border-[#ffc62b] bg-[#f2f4f5] text-black"
                    } hover:bg-[#f2f4f5] hover:text-[#191C1F]    `}
                  >
                    {item}
                  </li>
                ))}
                <li className="py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#da941a] hover:bg-[#f2f4f5] hover:text-[#191C1F]  ">
                  <Link href={"/shop"}>Browse All Product</Link>
                </li>
              </ul>
            </Flex>
            {/* featured products */}
            <div className="mt-6">
              <div className="grid grid-cols-4 gap-4">
                {filteredProducts.length == 0 ? (
                  <div className="text-center col-span-4">No Product Found</div>
                ) : (
                  filteredProducts?.map((item, index) => (
                    <Product key={index} id={index} product={item} />
                  ))
                )}
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
