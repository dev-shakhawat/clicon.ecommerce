"use client"

import Arrow from '@/icons/Arrow'
import Eye from '@/icons/Eye'
import { ActiveModalSet } from '@/lib/slices/authSlice'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Login() {

  const dispatch = useDispatch();


  return (
    <div className='p-8 bg-white lg:min-w-[360px] '>

      {/* title */}
      <h2 className=" font-Public_Sans font-semibold text-xl leading-[28px] text-[#191C1F] text-center ">Sign in to your account</h2>
      
      {/* signup form */}
      <form action="#">

        {/* email */}
        <div className="mt-5">
          <label htmlFor="email" className=" font-Public_Sans font-normal text-sm leading-5 text-[#191C1F]  ">Email Address</label>
          <input type="email" id='email' className='w-full h-[48px] border border-[#E2E5E7] rounded-[2px] outline-0 px-4 mt-2 ' />
        </div>

        {/* password */}
        <div className="mt-4 relative ">
          <div  className="w-full flex justify-between items-center font-Public_Sans font-normal text-sm leading-5 text-[#191C1F]  ">
            <span>Password</span>
            <button onClick={() => dispatch(ActiveModalSet('forgetPass'))} type='button' className=' font-Public_Sans font-medium text-sm leading-5 text-[#2DA5F3] cursor-pointer  '>Forgot Password?</button>
          </div>
          <input type="email" id='email' className='w-full h-[48px] border border-[#E2E5E7] rounded-[2px] outline-0 py-4 pl-4 pr-10 mt-2  ' />
          <Eye className={`absolute top-[40px]  right-4 w-[20px] h-[20px] `} />
        </div>

        {/* signIn btn */}
        <button type="submit" className='w-full h-[48px] bg-[#FA8232] rounded-[2px] mt-6 font-Public_Sans font-bold text-sm leading-[48px] text-white uppercase cursor-pointer flex items-center justify-center gap-2'>
          <span>Login</span>
          <Arrow className={` w-[20px] h-[20px] `}/>
        </button>
      </form>


      {/* if no account */}
      <div className="flex justify-center mt-6 relative after:content-[''] after:w-1/4 after:h-[1px] after:bg-[#e4e7e9] after:absolute after:top-[10px] after:left-0 before:content-[''] before:w-1/4 before:h-[1px] before:bg-[#e4e7e9] before:absolute before:top-[10px] before:right-0 ">
        <span className=' font-Public_Sans font-normal text-sm leading-5 text-[#77878F]  ' >Don’t have account</span>
      </div>

      <button onClick={() => dispatch(ActiveModalSet('registration'))} type="button" className='w-full h-[48px] border border-[#FA8232] rounded-[2px] mt-3 font-Public_Sans font-bold text-sm leading-[48px] text-[#FA8232] uppercase cursor-pointer flex items-center justify-center gap-2'>
          <span>create account</span>
      </button>

    </div>
  )
}
