import Image from 'next/image'
import React from 'react'

export default function CategoryCart({thumbnail , category}) {
  return (
    <div className={`py-6 px-7 border border-[#e4e7e9] rounded-[4px] cursor-pointer mx-2 `}>
        <Image src={thumbnail} alt="category" width={148} height={148} className='w-[148px] h-[148px] object-cover' />

        {/* category name */}
        <h3 className=" font-Public_Sans font-medium text-base leading-6 text-[#191C1F] mt-4 text-center ">{category}</h3>
    </div>
  )
}
