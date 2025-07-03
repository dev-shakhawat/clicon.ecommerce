import Arrow from '@/icons/Arrow'
import React from 'react'

export default function CardTotal({subtotal , shippingfee , discount , tax , total}) {
  return (
    <div className='border border-[#cdcdcd] rounded-[5px]   '>
        
        {/* title */}
        <h2 className=" font-Public_Sans font-medium text-[18px] leading-6 text-[#191C1F] py-5 px-6   ">Card Total</h2>

        {/* card table */}
        <ul className='px-[24px]    '>
            <li className='font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] py-3 flex justify-between items-center      '>
                <span>Sub-total</span>
                <span className='text-[#191C1F]'>${subtotal}</span>
            </li>
            <li className='font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] py-3 flex justify-between items-center      '>
                <span>Shipping</span>
                <span className='text-[#191C1F]'>${shippingfee}</span>
            </li>
            <li className='font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] py-3 flex justify-between items-center      '>
                <span>Discount</span>
                <span className='text-[#191C1F]'>${discount}</span>
            </li>
            <li className='font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] py-3 flex justify-between items-center      '>
                <span>Tax</span>
                <span className='text-[#191C1F]'>${tax}</span>
            </li>
        </ul>

        {/* divider */}
        <hr className='mx-6 opacity-10 ' />

        {/* total */}
        <div className="flex items-center justify-between px-6 font-Public_Sans  text-base leading-6 text-[#191C1F] mt-4 mb-6  ">

          <p className=" font-normal    ">Total</p>
          <span className=" font-semibold ">${total} USD</span>
        </div>

        {/* checkout button */}
        <div className="mx-6 pb-6">
          <button className=' w-full bg-[#FA8232] text-white uppercase font-Public_Sans font-bold text-sm leading-[48px] flex items-center justify-center gap-2 cursor-pointer   ' type="button">
            <span>checkout now</span>
            <Arrow className={`w-[20px] h-[20px]  `}  />
          </button>

        </div>


    </div>
  )
}
