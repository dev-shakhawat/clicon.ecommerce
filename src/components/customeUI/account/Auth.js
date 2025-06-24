"use client"

import React from 'react'
import Login from './Login'
import Registration from './Registration'
import ForgetPass from './ForgetPass'
import { useSelector } from 'react-redux'

export default function Auth() {

  const ActiveModal = useSelector((state) => state.auth.activeModal)
  
  return (
    <div style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} className={`absolute top-12 right-0 z-10 rounded-[3px] overflow-hidden  `}>
      {ActiveModal === 'registration' && <Registration/>}
      {ActiveModal === 'login' && <Login/>}
      {ActiveModal === 'forgetPass' && <ForgetPass/>}
    </div>
  )
}
