"use client"

import React from 'react'
import Container from '@/components/common/Container'
import CategoryCart from './CategoryCart'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from '@/icons/Arrow';


function NextArrowBtn (props){
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute top-1/2 -translate-y-1/2 -right-4 w-[48px] h-[48px] rounded-full z-1 text-white bg-[#FA8232] flex items-center justify-center cursor-pointer`}
        
        onClick={onClick}
      >
        <Arrow className={` w-[20px] h-[20px] `}/>
      </div>
    );
}

function PrevArrowBtn (props){
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute top-1/2 -translate-y-1/2 rotate-180 -left-4 w-[48px] h-[48px] rounded-full z-1 text-white bg-[#FA8232] flex items-center justify-center cursor-pointer`}
        
        onClick={onClick}
      >
        <Arrow className={` w-[20px] h-[20px] `}/>
      </div>
    );
}

export default function AllCategory() {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrowBtn />,
        prevArrow: <PrevArrowBtn />,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
  return (
    <div className='py-10'>
        <Container>
            
            {/* heading */}
            <h2 className="text-center font-Public_Sans font-semibold text-[32px] leading-[40px] text-[#191C1F]   ">Shop with Categorys</h2>

            <div className=" w-[1320px] mt-5">
                <Slider {...sliderSettings}>
                  <CategoryCart thumbnail={`/images/laptop.png`} category={`Computer & Laptop`}/>
                  <CategoryCart thumbnail={`/images/mobile.png`} category={`SmartPhone`}/>
                  <CategoryCart thumbnail={`/images/headphone.png`} category={`Headphones`}/>
                  <CategoryCart thumbnail={`/images/keyboard.png`} category={`Accessories`}/>
                  <CategoryCart thumbnail={`/images/camera.png`} category={`Camera & Photo`}/>
                  <CategoryCart thumbnail={`/images/tv.png`} category={`TV & Homes`}/>
                </Slider>
            </div>
        </Container>
    </div>
  )
}
