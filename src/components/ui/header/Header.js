import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'

export default function Header() {
  return (
    <div className='bg-[#1B6392]'>
      <HeaderTop/>
      <HeaderMiddle/>
      <HeaderBottom/>
    </div>
  )
}
