import React from 'react'
import CartItem from './CartItem'
import Arrow from '@/icons/Arrow'

export default function CartModal() {
  return (
    <div style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} className={`absolute top-12 right-0 rounded-[3px] bg-white lg:min-w-[376px] pb-6 `}>
      <h3 className="py-4 px-6 font-Public_Sans font-semibold text-xl leading-[28px] text-[#191C1F]  border-b border-[#e4e7e9] ">Shopping Cart <span className='text-[#5f6c72] ml-[6px]  '>(02)</span></h3>

      {/* cart items */}
      <div className=" py-5 px-6 flex flex-col gap-4 border-b border-[#e4e7e9] ">
        <CartItem/>
        <CartItem/>
      </div>

      {/* subtotal price cout */}
      <h2 className="flex justify-between items-center py-5 px-6 ">
        <span className=' font-Public_Sans font-normal text-sm leading-[20px] text-[#475156] '>Sub-Total:</span>

        <p className=" font-Public_Sans font-medium text-sm leading-[20px] text-[#191C1F]  ">
          $
          {2000}
          USD
        </p>
      </h2>

      {/* checkout */}
      <div className="px-6">

        {/* checkout btn */}
        <button className=' w-full bg-[#FA8232] text-white uppercase font-Public_Sans font-bold text-sm leading-[48px] flex items-center justify-center gap-2 cursor-pointer   ' type="button">
          <span>checkout now</span>
          <Arrow className={`w-[20px] h-[20px]  `}  />
        </button>

        {/* view cart btn */}
        <button className=' w-full border border-[#FA8232] text-[#FA8232] uppercase font-Public_Sans font-bold text-sm leading-[48px] flex items-center justify-center gap-2  mt-3 cursor-pointer ' type="button">
          <span>view cart</span>
        </button>
      </div>



    </div>
  )
}
