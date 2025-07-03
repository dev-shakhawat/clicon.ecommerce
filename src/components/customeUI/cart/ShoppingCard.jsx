"use client"

import React, { useState } from 'react'

// icons
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export default function ShoppingCard({img, descountPrice, price, title}) {

    const [quantity, setQuantity] = useState(1)
    
    const handlePlus = ()=>{
        setQuantity(prev => prev + 1)
    }

    const handleMinus = ()=>{
        if(quantity === 1){
            return
        }
        setQuantity(prev => prev - 1)
    }

  return (
    <div className='flex items-center gap-6'>
        
        {/* close btn */}
        <button type="button" className=' text-2xl text-[#929FA5] cursor-pointer  '  ><IoIosCloseCircleOutline /></button>

        {/* product image */}
        {img
        ? <img src={img} alt="" />
        : <div className='w-[72px] h-[72px] bg-[#e4e7e9]'></div>       } 


        {/* title */}
        <h2 className="max-w-[260px] font-Public_Sans font-normal text-sm leading-5 text-[#191C1F]   ">{title}</h2>

        {/* price+descount */}
        <div className="flex items-center gap-1 font-Public_Sans font-normal text-sm   ">
            {descountPrice && <del className='text-[#929FA5]'>${descountPrice}</del> }
            <p className="">${price}</p>
        </div>


        {/* quantity */}
        <div className="flex items-center gap-7.5 border border-[#E4E7E9] py-3 px-5  ml-10  ">

            <button className='cursor-pointer' type="button" onClick={handleMinus} ><FiMinus /></button>
            <p className="">{quantity < 10 ? `0${quantity}` : quantity }</p>
            <button className='cursor-pointer' type="button" onClick={handlePlus}><FiPlus /></button>

        </div>


        {/* total */}
        <p className=" font-Public_Sans font-medium text-sm leading-5 text-[#191C1F] ml-10      ">${quantity * price}</p>



    </div>
  )
}
