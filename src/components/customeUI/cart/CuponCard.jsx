import React from 'react'

export default function CuponCard() {
  return (
    <div className='mt-6 border border-[#cdcdcd] rounded-[5px]   '   >

        {/* title */}
        <h2 className=" font-Public_Sans font-medium text-[18px] leading-6 text-[#191C1F] py-5 px-6 border-b border-[#cdcdcd]   ">Coupon Code</h2>

        {/* form */}
        <form className="p-6">
            <input type="email" className=' py-3 px-4 border border-[#cdcdcd] w-full outline-0 rounded-[5px]      ' placeholder='Email address'/>

            <button type="button" className='px-12 h-[48px] bg-[#2DA5F3] rounded-[2px] mt-6 font-Public_Sans font-bold text-sm leading-[48px] text-white uppercase cursor-pointer flex items-center justify-center gap-2'  >Apply Coupon</button>
        </form>
    </div>
  )
}
