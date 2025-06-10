import Container from '@/components/common/Container'
import Facebook from '@/icons/Facebook'
import Insta from '@/icons/Insta'
import Pinterest from '@/icons/Pinterest'
import Reddit from '@/icons/Reddit'
import Twitter from '@/icons/Twitter'
import Youtube from '@/icons/Youtube'
import Link from 'next/link'
import React from 'react'

export default function HeaderTop() {
  return (
    <Container>
        <div className="flex items-center justify-between py-3 ">

          {/* left */}
          <p className=" font-Public_Sans font-normal text-sm leading-5 text-white ">Welcome to Clicon online eCommerce store. </p>

          {/* right */}
          <div className="flex items-center gap-3">
            <p type="button" className=' font-Public_Sans font-normal text-sm leading-5 text-white  '>Follow us:</p>

            {/* socilal icons */}
            <ul className='flex items-center gap-3'>
              <li><Link href={'#'}><Twitter/></Link></li>
              <li><Link href={'#'}><Facebook/></Link></li>
              <li><Link href={'#'}><Pinterest/></Link></li>
              <li><Link href={'#'}><Reddit/></Link></li>
              <li><Link href={'#'}><Youtube/></Link></li>
              <li><Link href={'#'}><Insta/></Link></li>
            </ul>
          </div>

        </div>
    </Container>
  )
}
