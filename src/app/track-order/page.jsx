"use client";
import Container from '@/components/common/Container'
import Arrow from '@/icons/Arrow';
import React from 'react'

import { HiOutlineInformationCircle } from "react-icons/hi2";


export default function page() {
  return (
    <div> 
        
        <Container>

            {/* title */}
            <h2 className="font-Public_Sans font-semibold text-[32px] leading-10 text-[#191C1F] pt-12  ">Track Order</h2>
            <p className="mt-4 font-Public_Sans font-normal text-base leading-6 max-w-[760px]    ">To track your order please enter your order ID in the input field below and press the “Track Order” button. this was given to you on your receipt and in the confirmation email you should have received.</p>

            <div className="grid grid-cols-2 w-[70%] gap-6 mt-6  ">
                {/* order id */}
                <div className="">
                    <p className="font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] mb-2    ">Order ID</p>
                    <input type="text" placeholder='ID...' className='py-3 px-4 border border-[#e4e7e9] outline-0 w-full    ' />
                    <p className="flex items-center gap-1.5 font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] mt-2    ">
                       <HiOutlineInformationCircle />
                       <span>Order ID that we sended to your in your email address.</span>
                    </p>
                </div>

                {/* billing address */}
                <div className="">
                    <p className="font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] mb-2    ">Billing Email</p>
                    <input type="email" placeholder='Email address' className='py-3 px-4 border border-[#e4e7e9] outline-0 w-full    ' />
                </div>
            </div>

            {/* button to track */}
            <button type="button" className=' font-Public_Sans font-bold text-base leading-14 text-[#ffffff] bg-[#FA8232] py-2 px-8 flex items-center gap-4 mt-8 mb-[124px]  '>
                <span>Track Order</span>
                <Arrow className={`w-5 h-5  `}/>
            </button>

        </Container>
    </div>
  )
}
