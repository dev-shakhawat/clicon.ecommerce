import Container from '@/components/common/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewIntroducing() {
  return (
    <Container>
        
        <div className="flex justify-between py-[72px] ">
            <Link href={`#`} ><Image src={`/images/introduceLeft.png`} alt="banner" width={650} height={400} className={`w-full mt-6 `} />   </Link>
            <Link href={`#`} ><Image src={`/images/introduceRight.png`} alt="banner" width={650} height={400} className={`w-full mt-6 `} />   </Link>
        </div>
        
    </Container>
  )
}
