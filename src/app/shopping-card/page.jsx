import Container from '@/components/common/Container'
import CardTotal from '@/components/customeUI/cart/CardTotal';
import CuponCard from '@/components/customeUI/cart/CuponCard';
import ShoppingCard from '@/components/customeUI/cart/ShoppingCard'
import React from 'react'

import { FaArrowLeft } from "react-icons/fa6";

export default function page() {
  return (
<Container>
    <div className='flex pt-[72px] gap-6 mb-20  '>
        
        {/* cards */}
        <div className="flex-2 border border-[#cdcdcd] rounded-[5px] h-fit   ">
            <h2 className=" font-Public_Sans font-medium text-[18px] leading-6 text-[#191C1F] py-5 px-6   ">Shopping Card</h2>

            {/* card table */}
            <div className=" font-Public_Sans font-medium text-[12px] leaading-[150%] text-[#475156] flex py-2.5 px-6 bg-[#E4E7E9] ">
                <p className="flex-5">Products</p>
                <p className="flex-2">Price</p>
                <p className="flex-2">Quantity</p>
                <p className="flex-1">Sub-Total</p>
            </div>

            {/* all cards */}
            <div className="p-6 flex flex-col gap-6  ">
               
               {/* card item */} 
               <ShoppingCard img={null} descountPrice={99} price={70} title={'4K UHD LED Smart TV with Chromecast Built-in'} />
               <ShoppingCard img={null} descountPrice={99} price={70} title={'4K UHD LED Smart TV with Chromecast Built-in'} />

            </div>


            {/* buttons */}
            <div className="flex items-center justify-between p-6 border-t border-[#cbcbcb] ">
                <button type="button" className='border-2 rounded-[2px] border-[#2DA5F3] px-6 text-[#2DA5F3] uppercase font-Public_Sans font-bold text-sm leading-[48px] flex items-center justify-center gap-2 cursor-pointer '>
                    <FaArrowLeft />
                    <span>return to shop</span>
                </button>
                <button type="button" className='border-2 rounded-[2px] border-[#2DA5F3] px-6 text-[#2DA5F3] uppercase font-Public_Sans font-bold text-sm leading-[48px] flex items-center justify-center gap-2 cursor-pointer '>upadte cart</button>
            </div>

        </div>

        {/* total */}
        <div className="flex-1">

            {/* cart total */}
            <CardTotal subtotal={2000} shippingfee={0} discount={0} tax={0} total={2000} />

            {/* cupon card */}
            <CuponCard/>
        </div>
    </div>
</Container>
  )
}
