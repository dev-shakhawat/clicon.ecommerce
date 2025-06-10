"use client"
import React, { useState } from 'react'
import ArowDropdown from '@/icons/ArowDropdown'
import Link from 'next/link'

export default function Category({className , categoryList}) {

    const [isSubcategoryOpen , setIsSubcategoryOpen] = useState(0)
  return (
    <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className={`${className} lg:min-w-[240px] absolute bg-white py-3 border border-[#e2e5e7] rounded-[3px] `}>
        <ul>
            {categoryList?.map((item , index) => (
                <li onClick={() => setIsSubcategoryOpen(index)} className={` cursor-pointer py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]    `} key={index} >
                    <Link href={'#'} className='flex items-center jubestify-between w-full  '  ><span>{item.name}</span>{item.subCategory && <ArowDropdown className={`${item.subCategory && isSubcategoryOpen === index ? '-rotate-90' : '' }  ml-auto`} />}</Link>
                    
                    {/* subCategory list */}
                    {item.subCategory && isSubcategoryOpen === index && 
                    <ul style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className={`lg:min-w-[204px] absolute top-0 left-[107%] bg-white py-3 border border-[#e2e5e7] rounded-[3px] `}>
                        {item.subCategory.map((item , index) => (
                            <li className={` cursor-pointer py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]    `} key={index}><Link href={'#'} className='py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]    ' >{item.name}</Link></li>
                        ))}
                    </ul>}

                </li>
            ))}
        </ul>
    </div>
  )
}
