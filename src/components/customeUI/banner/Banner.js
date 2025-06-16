import Container from '@/components/common/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <Container>
        <Link href={`#`}><Image src={`/images/banner.png`} alt="banner" width={1920} height={400} className={`w-full mt-6 `} /></Link>
    </Container>
  )
}
