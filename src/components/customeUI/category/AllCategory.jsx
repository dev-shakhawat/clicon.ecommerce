"use client"

import React from 'react'
import Container from '@/components/common/Container'
import CategoryCart from './CategoryCart'
// import Arrow from '@/icons/Arrow';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



export default function AllCategory() {

  return (
    <div className='py-10'>
        <Container>
            
            {/* heading */}
            <h2 className="text-center font-Public_Sans font-semibold text-[32px] leading-[40px] text-[#191C1F]   ">Shop with Categorys</h2>

            <div className=" w-[1320px] mt-5">
              <Carousel >
                <CarouselPrevious />
                  <CarouselContent className={`-ml-2`}>
                      <CategoryCart thumbnail={`/images/laptop.png`} category={`Computer & Laptop`}/>
                      <CategoryCart thumbnail={`/images/mobile.png`} category={`SmartPhone`}/>
                      <CategoryCart thumbnail={`/images/headphone.png`} category={`Headphones`}/>
                      <CategoryCart thumbnail={`/images/keyboard.png`} category={`Accessories`}/>
                      <CategoryCart thumbnail={`/images/camera.png`} category={`Camera & Photo`}/>
                      <CategoryCart thumbnail={`/images/tv.png`} category={`TV & Homes`}/>
                  </CarouselContent>
                <CarouselNext />
              </Carousel>
            </div>
        </Container>
    </div>
  )
}
