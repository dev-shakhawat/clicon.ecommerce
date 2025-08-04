"use client"
import Container from '@/components/common/Container'
import InputField from '@/components/customeUI/billingAddress/InputField'
import Selection from '@/components/customeUI/billingAddress/Selection'
import CardTotal from '@/components/customeUI/cart/CardTotal'
import CuponCard from '@/components/customeUI/cart/CuponCard'
import React from 'react'

export default function page() {
 


  return (
    <Container>

      <div className="flex py-[72px] gap-5   ">

        {/* address */}
        <div className="flex-2">
          <h2 className="font-Public_Sans font-medium text-[18px] leading-6 text-[#191C1F]     ">Billing Information </h2>
          <form className=' mt-6      '>

            {/* name and company */}
            <div className="flex gap-4 ">

              {/* first name */}
              <InputField className="flex-1" title={'User name'} placeholder={'First name'}  />

              {/* last name */}
              <InputField className="flex-1" title={' '} placeholder={'Last name'}  />

              {/* company name */}
              <InputField className="flex-2" title={'Company Name '} optional={`Optional`} placeholder={'Last name'}  />
            </div>

            <InputField className="mt-4 " title={'Address'}     />
            

            <div className="grid grid-cols-4 gap-4 mt-4 ">

              {/* country */}
              <Selection className=" " title={'Country'} list={['United States', 'Canada', 'United Kingdom']}   />

              {/* state */}
              <Selection className=" " title={'State'} list={['United States', 'Canada', 'United Kingdom']}   />

              {/* city */}
              <Selection className=" " title={'City'} list={['United States', 'Canada', 'United Kingdom']}   />

              {/* zip code */}
              <InputField className="  " title={'Zip Code'}     />

            </div>

            <div className="flex gap-4 mt-4">

              {/* email */}
              <InputField className=" flex-1 " title={'Email'}     />
              <InputField className=" flex-1 " title={'Phone Number'}     />

            </div>


          </form>
        </div>

        {/* order summary */}
        <div className="flex-1">
          <CardTotal/>
          <CuponCard/>
        </div>
      </div>

    </Container>
  )
}
