"use client"
import ArowDropdown from '@/icons/ArowDropdown'
import Link from 'next/link'
import { useState } from 'react'

export default function CategoryListForHeader({className , categoryList}) {

    console.log(categoryList)
    const [isSubcategoryOpen , setIsSubcategoryOpen] = useState(0)
  return (
    <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className={`${className} lg:min-w-[240px] absolute bg-white py-3 border border-[#e2e5e7] rounded-[3px] `}>
        <ul>
            {categoryList?.map((item , index) => (
                <li onClick={() => setIsSubcategoryOpen(item._id)} className={` cursor-pointer py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]    `} key={index} >
                    <Link href={'#'} className='flex items-center jubestify-between w-full  '  ><span className=' capitalize'>{item.name}</span>{item.subcategory && item.subcategory.length > 0 && <ArowDropdown className={`${item.subcategory && isSubcategoryOpen === item._id ? '-rotate-90' : '' }  ml-auto`} />}</Link>
                    {console.log(item.subcategory)}
                    {/* subCategory list */}

            
                    {item?.subcategory && isSubcategoryOpen === item._id && 
                    <ul style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className={`lg:min-w-[204px] absolute top-0 left-[107%] bg-white py-3 border border-[#e2e5e7] rounded-[3px] `}>
                        {item.subcategory.map((item , index) => (
                            <li className={` cursor-pointer py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]    capitalize `} key={index}><Link href={'#'} className='py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] hover:bg-[#f2f4f5] hover:text-[#191C1F]    ' >{item.name}</Link></li>
                        ))}
                    </ul>}

                </li>
            ))}
        </ul>
    </div>
  )
}
