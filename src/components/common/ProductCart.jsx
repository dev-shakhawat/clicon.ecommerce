import React from 'react'


import Star from '@/icons/Star'
import Image from 'next/image'
export default function ProductCart({topAd , rating , totalrating , title , productThumbnail , price}) {
  return (
    <div className={`hover:shadow relative p-4 border border-[#e4e7e9] rounded-[3px] cursor-pointer  `}>
        {/* image */}
        <Image src={productThumbnail} alt="product" width={80} height={80} className='w-full ' />


        {/* product details */}
        <div className="mt-6">

            {/* rating */}
            <div className="flex items-center gap-1  ">
                {rating && 
                <ul className='flex'>
                   {Array(rating).fill(rating).map((item , index) => (
                       <li key={index} className='text-[#FFC107] w-[14px] h-[13px] '><Star/></li>
                   ))}
                </ul>}

                {totalrating &&  <p className=" font-Public_Sans font-medium text-[12px] leading-4 text-[#929FA5] pt-0.5  ">({totalrating})</p>}
               
            </div>


            {/* title */}
            <h2 className=" font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] py-2  ">{title}</h2>


            {/* price */}
            <p className=" font-Public_Sans font-semibold text-sm leading-5 text-[#2DA5F3]     ">${price}</p>

        </div>
    </div>
  )
}
