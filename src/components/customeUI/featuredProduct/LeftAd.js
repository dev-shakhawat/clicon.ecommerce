import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LeftAd() {
  return (
    <Link href={`#`} >
        <Image src={`/images/ProductBanner.png`} alt="banner" width={300} height={400} className={`w-full h-full  `} />
    </Link>
  )
}
