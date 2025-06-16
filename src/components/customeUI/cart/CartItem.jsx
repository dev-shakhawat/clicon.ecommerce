import Close from '@/icons/Close'
import Image from 'next/image'
import React from 'react'

export default function CartItem() {
  return (
    <div className=' flex items-center  '>

      {/* image */}
      <Image src="/images/phone.png" alt="product" width={80} height={80} className='w-[80px] h-[80px] border border-[#e4e7e9] object-cover' />

      {/* product details */}
      <div className="ml-4  ">
        <h3 className=" font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] max-w-[200px]  ">Canon EOS 1500D DSLR Camera Body+ 18-55 mm</h3>
        <p className="mt-2 font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] ">{1} x $<span className='text-[#2DA5F3] font-medium'>{1500}</span></p>
      </div>


      {/* remove from cart */}
      <button type='button' className='text-[#929FA5] p-2 grid place-items-center rounded-2 cursor-pointer '>
        <Close className={` w-[20px] h-[20px]  `} />
      </button>



    </div>
  )
}
