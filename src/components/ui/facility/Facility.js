import Container from '@/components/common/Container'
import React from 'react'
import FacilityCart from './FacilityCart'
import Parcel from '@/icons/Parcel'
import Return from '@/icons/Return'
import Credit from '@/icons/Credit'

export default function Facility() {
  return (
    <div className='pt-6'>
      <Container>
        <div className="flex justify-between ">
          <FacilityCart title={'Fast Delivery'} text={'Delivery in 24/H'} icon={<Parcel/>}   />
          <FacilityCart title={'24 Hours Return'} text={'100% money-back guarantee'} icon={<Return/>}   />
          <FacilityCart title={'Secure Payment'} text={'Your money is safe'} icon={<Credit/>}   />
          <FacilityCart title={'Support 24/7'} text={'Live contact/message'} icon={<Credit/>} border={false}  />
        </div>
      </Container>
    </div>
  )
}
