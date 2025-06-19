import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'
import Arrow from '@/icons/Arrow'

export default function Footer() {
  return (
    <div className=' bg-[#191C1F]  '>
        
        <Container>
            <div className="flex gap-6 py-[72px]">

                {/* contacts */}
                <div className="lg:min-w-[300px] ">
                    <Image src="/images/footlogo.png" alt="logo" width={177} height={48} className='w-[177px] h-[48px] mb-6 ' />

                    {/* call */}
                    <p className=" font-Public_Sans font-normal text-sm leading-5 text-[#77878F]  ">Customer Supports:</p>
                    <Link href={`#`} className=" font-Public_Sans font-medium text-[18px] leading-6 text-white mt-1 ">(629) 555-0129</Link>

                    {/* location */}
                    <Link href={`#`} className=" font-Public_Sans font-normal text-base leading-6 text-[#ADB7BC] mt-3 block max-w-[248px]  ">4517 Washington Ave. Manchester, Kentucky 39495</Link>
                    

                    {/* mail */}
                    <Link href={`#`} className=" font-Public_Sans font-medium text-base leading-6 text-[#ffffff] mt-3 block">{'info@kinbo.com'}</Link>
                </div>


                {/* Top Category */}
                <div className="lg:min-w-[200px] ">
                    <h2 className=" font-Public_Sans font-medium text-base leading-6 text-white uppercase ">Top Category</h2>

                    <ul className="mt-3 overflow-hidden">
                        <li className=' footLinks  '><Link href={`#`} >Computer & Laptop</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >SmartPhone</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >Headphone</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >Accessories</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >Camera & Photo</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >TV & Homes</Link></li>
                        <li><Link href={`#`} className='flex items-center gap-1 font-Public_Sans font-medium text-sm leading-5 text-[#EBC80C]  '><span>Browse All Product</span><Arrow className={`w-5 h-5`}/></Link></li>
                    </ul>
                </div>


                {/* Quick links */}
                <div className="lg:min-w-[200px] ">
                    <h2 className=" font-Public_Sans font-medium text-base leading-6 text-white uppercase ">Quick links</h2>

                    <ul className="mt-3 overflow-hidden">
                        <li className=' footLinks  '><Link href={`#`} >Shop Product</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >Shoping Cart</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >Wishlist</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >Compare</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >Track Order</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >Customer Help</Link></li>
                        <li className=' footLinks  '><Link href={`#`} >About Us</Link></li>
                    </ul>
                </div>


                {/* Download APp */}
                <div className="lg:min-w-[200px] ">
                    <h2 className=" font-Public_Sans font-medium text-base leading-6 text-white uppercase ">Download APp</h2>

                    <div className="flex flex-col mt-[18px] gap-3  ">
                        <Link href={`#`}><Image src="/images/googleplay.png" alt="appstore" width={144} height={48} className='w-[144px] h-[48px] ' /></Link>
                        <Link href={`#`}><Image src="/images/appstore.png" alt="appstore" width={144} height={48} className='w-[144px] h-[48px] ' /></Link>
                        
                    </div>
                </div>


                {/* Popular Tag */}
                <div className="lg:min-w-[200px] ">
                    <h2 className=" font-Public_Sans font-medium text-base leading-6 text-white uppercase ">Popular Tag</h2>

                    <ul className="flex mt-[18px] gap-2 flex-wrap ">
                        <li className='foottags'>Game</li>
                        <li className='foottags'>iPhone</li>
                        <li className='foottags'>TV</li>
                        <li className='foottags'>Asus Laptops</li>
                        <li className='foottags'>Macbook</li>
                        <li className='foottags'>SSD</li>
                        <li className='foottags'>Graphics Card </li>
                        <li className='foottags'>Power Bank </li>
                        <li className='foottags'>Smart TV</li>
                        <li className='foottags'>Speaker</li>
                        <li className='foottags'>Tablet</li>
                        <li className='foottags'>Microwave</li>
                        <li className='foottags'>Samsung</li>
                    </ul>
                </div>
                
            </div>
        </Container>

        {/* copyright */}
        <p className="py-6 font-Public_Sans font-normal text-sm leading-5 text-[#ADB7BC] text-center border-t border-[#303639]  ">Kinbo - eCommerce Template © 2025. Design by Templatecookie modify by wasim</p>
    </div>
  )
}
