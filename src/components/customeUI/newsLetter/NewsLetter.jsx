import Arrow from '@/icons/Arrow'
import Image from 'next/image'
import React from 'react'

export default function NewsLetter() {
  return (
    <div className='py-[72px] bg-[#1B6392] flex flex-col items-center  '>

        {/* heading */}
        <h2 className=" font-public_sans font-semibold text-[32px] leading-[40px] text-white  ">
          Subscribe to our newsletter
        </h2>

        <p className="mt-3 font-Public_Sans font-normal text-base leading-6 text-white max-w-[536px] text-center   ">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>


        {/* form */}
        <form className="mt-8 bg-white rounded-[3px] p-3 flex gap-4 max-w-[624px] lg:min-w-[624px]  ">

            {/* input box */}
            <input type="email" placeholder='Email address' className='w-full outline-0 font-Public_Sans font-normal text-base leading-6 text-[#77878F]   ' />

            {/* button */}
            <button type="button" className="px-6 h-[48px] bg-[#FA8232] rounded-[3px] font-Public_Sans font-bold text-sm leading-[48px] text-white uppercase flex items-center justify-center gap-2 ">
                <span>Subscribe</span>
                <Arrow className={`w-5 h-5  `} />
            </button>
        </form>


        {/* brands */}
        <div className="flex justify-center items-center gap-12 mt-8 ">
            <Image src="/images/google.svg" alt="brand" width={72} height={72} className='w-[72px] h-[72px] ' />
            <Image src="/images/amazon.svg" alt="brand" width={72} height={72} className='w-[72px] h-[72px] ' />
            <Image src="/images/philips.svg" alt="brand" width={72} height={72} className='w-[72px] h-[72px] ' />
            <Image src="/images/toshiba.svg" alt="brand" width={72} height={72} className='w-[72px] h-[72px] ' />
            <Image src="/images/samsung.svg" alt="brand" width={72} height={72} className='w-[72px] h-[72px] ' />
        </div>


    </div>
  )
}
