import Container from '@/components/common/Container'
import Cart from '@/icons/Cart'
import Favorite from '@/icons/Favorite'
import Search from '@/icons/Search'
import User from '@/icons/User'
import Image from 'next/image'
import React from 'react'

export default function HeaderMiddle() {
  return (
    <div className='border-t border-[#3f7ca3] py-5 '>
      <Container>
        <div className="flex items-center justify-between  ">

          {/* logo */}
          <Image src="/images/logo.png" alt="logo" priority width={177} height={48} className='w-[177px] h-[48px]  object-cover' />

          {/* search Box */}
          <div className="relative bg-[#FFFFFF] lg:min-w-[646px] h-[48px] rounded-[2px]   ">
            <input type="search" placeholder='Search for anything...' className='h-full w-full pl-5 pr-12 outline-0 font-Public_Sans font-normal text-sm leading-5 text-[#77878F] ' />
            <Search className={`absolute top-1/2 -translate-y-1/2 right-5`} />
          </div>

          {/* ecommerce options */}
          <div className="flex gap-6 ">
            <button type="button" className='cursor-pointer' >
              <Cart/>
            </button>
            <button type="button" className='cursor-pointer' >
              <Favorite/>
            </button>
            <button type="button" className='cursor-pointer' >
              <User/>
            </button>
          </div>

        </div>
      </Container>
    </div>
  )
}
