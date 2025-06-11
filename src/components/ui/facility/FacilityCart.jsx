import Image from 'next/image'
import React from 'react'

export default function FacilityCart({title , icon , text}) {
  return (
    <div className='p-4 flex items-center gap-4  '>
      {icon}

      <div className="">
        <h2 className=" font-Public_Sans font-medium text-sm leading-5 text-[#191C1F] uppercase  ">{title}</h2>
        <p className=" font-Public_Sans font-normal text-sm leading-5 text-[#475156] mt-1  ">{text}</p>
      </div>
    </div>
  )
}
