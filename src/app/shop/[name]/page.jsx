"use client";
import Breadcrumb from "@/components/common/Breadcrumb"
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  console.log(product);
  
  return (
    <div>

        <Breadcrumb/>
        
        {/* product description */}
        <div className="flex mt-8  ">
          {/* product image */}
          <div className="w-1/2">
              
              {/* product image slider */}
              <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                <Image src={product?.image} alt="product" width={500} height={500} className='w-[500px] h-[500px] border border-[#e4e7e9] object-cover' />
              </Slider>
               <h4>Second Slider</h4>
              <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
              >
        
              </Slider> 
             </div>

          {/* product details */}
          <div className="flex-1">
              
              
          </div>
        </div>
    </div>
  )
}

export default page