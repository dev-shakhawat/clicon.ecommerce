import Arrow from '@/icons/Arrow'
import { ActiveModalSet } from '@/lib/slices/authSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function ForgetPass() {
  const dispatch = useDispatch()
  return (
    <div className='p-8 bg-white lg:min-w-[360px] '>

    {/* title */}
    <h2 className=" font-Public_Sans font-semibold text-xl leading-[28px] text-[#191C1F] text-center ">Forget Password?</h2>
    
    {/* signup form */}
    <form action="#">

      {/* email */}
      <div className="mt-5">
        <label htmlFor="email" className=" font-Public_Sans font-normal text-sm leading-5 text-[#191C1F]  ">Email Address</label>
        <input type="email" id='email' className='w-full h-[48px] border border-[#E2E5E7] rounded-[2px] outline-0 px-4 mt-2 ' />
      </div>

      {/* signIn btn */}
      <button type="submit" className='w-full h-[48px] bg-[#FA8232] rounded-[2px] mt-6 font-Public_Sans font-bold text-sm leading-[48px] text-white uppercase cursor-pointer flex items-center justify-center gap-2'>
        <span>Get Code</span>
        <Arrow className={` w-[20px] h-[20px] `}/>
      </button>
    </form>

    <div className="flex justify-center mt-4 ">
      <button onClick={() => dispatch(ActiveModalSet('login'))} type='button' className='font-Public_Sans font-medium text-sm leading-5 text-[#2DA5F3] cursor-pointer ' >Back to Login</button>
    </div>

  </div>
  )
}
