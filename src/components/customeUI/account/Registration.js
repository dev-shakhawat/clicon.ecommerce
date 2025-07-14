"use client"

import Arrow from '@/icons/Arrow'
import Eye from '@/icons/Eye'
import { userInfoSet } from '@/lib/slices/authSlice'
import axios from 'axios'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'


import { useRouter } from 'next/navigation'
export default function Registration() {
  const router = useRouter()
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
  })


  const handleUsername = (e) => {
    setUserInfo({
      ...userInfo,
      username: e.target.value
    })
  }

  const handleEmail = (e) => {
    setUserInfo({
      ...userInfo,
      email: e.target.value
    })
  }

  const handlePassword = (e) => {
    setUserInfo({
      ...userInfo,
      password: e.target.value
    })
  }


  const handleSignup = (e) => {
    e.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/signup`, userInfo).then((res) => {
     if(res.data.success){
      console.log(res.data)
       dispatch(userInfoSet(res.data))
       localStorage.setItem('userInfo', JSON.stringify(res.data))
       toast.success('Registration Successfully')

       router.push('/otp-verify')
      setUserInfo({
        username: '',
        email: '',
        password: '',
      })
     }

    }).catch((err) => {
      console.log(err)
      toast.error(err.response.data.message|| 'something went wrong')
    })
  }
  return (
    <div className='p-8 bg-white lg:min-w-[360px] '>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
    {/* title */}
    <h2 className=" font-Public_Sans font-semibold text-xl leading-[28px] text-[#191C1F] text-center ">Create a new account</h2>
    
    {/* signup form */}
    <form  onSubmit={handleSignup}>

      {/* name */}
      <div className="mt-5">
        <label htmlFor="name" className=" font-Public_Sans font-normal text-sm leading-5 text-[#191C1F]  ">User Name</label>
        <input onChange={handleUsername} type="text" id='name' className='w-full h-[48px] border border-[#E2E5E7] rounded-[2px] outline-0 px-4 mt-2 ' />
      </div>

      {/* email */}
      <div className="mt-5">
        <label  htmlFor="email" className=" font-Public_Sans font-normal text-sm leading-5 text-[#191C1F]  ">Email Address</label>
        <input onChange={handleEmail} type="email" id='email' className='w-full h-[48px] border border-[#E2E5E7] rounded-[2px] outline-0 px-4 mt-2 ' />
      </div>

      {/* password */}
      <div className="mt-4 relative ">
        <div  className="w-full flex justify-between items-center font-Public_Sans font-normal text-sm leading-5 text-[#191C1F]  ">
          <span>Password</span>
        </div>
        <input onChange={handlePassword} type="text" className='w-full h-[48px] border border-[#E2E5E7] rounded-[2px] outline-0 py-4 pl-4 pr-10 mt-2  ' />
        <Eye className={`absolute top-[40px]  right-4 w-[20px] h-[20px] `} />
      </div>

      {/* signIn btn */}
      <button onClick={handleSignup} type="submit" className='w-full h-[48px] bg-[#FA8232] rounded-[2px] mt-6 font-Public_Sans font-bold text-sm leading-[48px] text-white uppercase cursor-pointer flex items-center justify-center gap-2'>
        <span>Create</span>
        <Arrow className={` w-[20px] h-[20px] `}/>
      </button>
    </form>


    {/* if no account */}
    <div className="flex justify-center mt-6 relative after:content-[''] after:w-1/4 after:h-[1px] after:bg-[#e4e7e9] after:absolute after:top-[10px] after:left-0 before:content-[''] before:w-1/4 before:h-[1px] before:bg-[#e4e7e9] before:absolute before:top-[10px] before:right-0 ">
      <span className=' font-Public_Sans font-normal text-sm leading-5 text-[#77878F]  ' >You have an account?</span>
    </div>

    <button type="button" className='w-full h-[48px] border border-[#FA8232] rounded-[2px] mt-3 font-Public_Sans font-bold text-sm leading-[48px] text-[#FA8232] uppercase cursor-pointer flex items-center justify-center gap-2'>
        <span>Sign in</span>
    </button>

  </div>
  )
}
