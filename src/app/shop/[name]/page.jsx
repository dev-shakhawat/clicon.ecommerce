"use client";
import Breadcrumb from "@/components/common/Breadcrumb"
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@/components/common/Container";
import Star from "@/icons/Star";
import ProductInfoSelection from "@/components/customeUI/productDescription/ProductInfoSelection";

const page = () => {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const product = useSelector((state) => state.product.currentProduct)
  
  return (
    <div>

        <Breadcrumb/>
        
        {/* product description */}
        <Container>
          <div className="flex mt-8 gap-[56px] ">
            {/* product image */}
            <div className="w-[600px] bg-red-200   ">
                
                {/* product image slider */}
                <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                  <div className="w-[600px] h-[full] bg-red-100  "></div>
                  <div className="w-[600px] h-[full] bg-red-100  "></div>
                  <div className="w-[600px] h-[full] bg-red-100  "></div>
                  <div className="w-[600px] h-[full] bg-red-100  "></div>
                </Slider>
                <h4>Second Slider</h4>
                <Slider
                  asNavFor={nav1}
                  ref={slider => (sliderRef2 = slider)}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="w-[100px] h-[full] bg-red-100  "></div>
                  <div className="w-[100px] h-[full] bg-red-100  "></div>
                  <div className="w-[100px] h-[full] bg-red-100  "></div>
                  <div className="w-[100px] h-[full] bg-red-100  "></div>
                  <div className="w-[100px] h-[full] bg-red-100  "></div>
          
                </Slider> 
            </div>

            {/* product details */}
            <div className="flex-1">
                
                {/* rating */}
                <div className="flex items-center gap-2  ">
                  <ul className="flex gap-2 ">
                    <li><Star className="w-5 h-5 text-[#FA8232] " /></li>
                    <li><Star className="w-5 h-5 text-[#FA8232] " /></li>
                    <li><Star className="w-5 h-5 text-[#FA8232] " /></li>
                    <li><Star className="w-5 h-5 text-[#FA8232] " /></li>
                  </ul>

                  <h4 className="font-Public_Sans font-semibold text-sm leading-5 text-[#191C1F]    ">4.7 Star Rating</h4>

                  <p className=" font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72]   ">(21,671 User feedback)</p>
                </div>

                {/* product title */}
                <h2 className=" font-Public_Sans font-normal text-xl leading-7 text-[#191C1F] mt-2  ">
                   2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
                </h2>
                

                {/* details */}
                <div className="grid grid-cols-2 gap-x-20 mt-4  ">
                   <p className="">
                    <span className="font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] ">Sku:</span>
                    <span className="font-Public_Sans font-semibold text-xl leading-7 text-[#191C1F] ml-2  ">A264671</span>
                   </p>
                   <p className="">
                    <span className="font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] ">Availability:</span>
                    <span className="font-Public_Sans font-semibold text-xl leading-7 text-green-500 ml-2  ">In Stock</span>
                   </p>
                   <p className="">
                    <span className="font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] ">Brand:</span>
                    <span className="font-Public_Sans font-semibold text-xl leading-7 text-[#191C1F] ml-2  ">Apple</span>
                   </p>
                   <p className="">
                    <span className="font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] ">Category:</span>
                    <span className="font-Public_Sans font-semibold text-xl leading-7 text-[#191C1F] ml-2  ">Electronics Devices</span>
                   </p>
                </div>

                {/* price and discount */}
                <div className="flex py-6 gap-2 ">
                  {/* price */}
                  <p className=" font-Public_Sans font-semibold text-2xl leading-7 text-[#2DA5F3]  ">${1699}</p>
                  <del className=" font-Public_Sans font-semibold text-2xl leading-7 text-[#77878F]  ">${1699}</del>

                  {/* discount */}
                  <p className=" font-Public_Sans font-semibold text-sm leading-5 text-[#191C1F] px-2.5 py-[5px] bg-[#EFD33D]  ">{100}% off</p>
                </div>

                {/* color size others */}
                <div className="grid grid-cols-2 gap-6 border-t border-[#e4e7e9] pt-6 ">
                  <div className="">
                    <p className="font-Public_Sans font-normal text-sm text-[#191C1F] mb-2    ">Color</p>
                    <div className="flex gap-5">
                      <button type="button" className="w-8 h-8 rounded-full bg-gray-400 outline-[4px] outline-[#FA8232] border-[4px] border-[#ffffff]  " ></button>
                      <button type="button" className="w-8 h-8 rounded-full bg-gray-400 outline-[4px] outline-[#FA8232] border-[4px] border-[#ffffff]  " ></button>
                    </div>
                  </div>
                  <ProductInfoSelection title={`Size`} list={["Small", "Medium", "Large"]}/>
                  <ProductInfoSelection title={`Memory`} list={["8 GB", "16 GB", "32 GB"]}/>
                  <ProductInfoSelection title={`Storage`} list={[ "128 GB", "256 GB", "512 GB"]}/>
                </div>
                
            </div>
          </div>
        </Container>
    </div>
  )
}

export default page