import Image from 'next/image'
import React from 'react'

export default function OverviewCart({title , price , image}) {
  return (
    <div className='flex items-center border border-[#e4e7e9] rounded-[3px] p-4 cursor-pointer '>
        
        {/* image */}
        <Image src={image} alt="product" width={80} height={80} className='w-[80px] h-[80px] border border-[#e4e7e9] object-cover' />

        {/* product details */}
        <div className="ml-4  ">
          <h3 className="OverViewLineClamp font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] max-w-[200px]  ">{title}</h3>
          <p className="mt-2 font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] "><span className='text-[#2DA5F3] font-medium'>${price}</span></p>
        </div>
    </div>
  )
}
