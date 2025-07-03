import React from 'react'

export default function InputField({title , placeholder = null , optional , className}) {
  return (
    <div className={className}> 
        {/* title */}
        <p className="h-5 font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] mb-2 flex items-center gap-1    ">{title} {optional && <span className='opacity-30' >({optional})</span>}</p>
        <input type="text" className=' py-3 px-4 border border-[#e4e7e9] outline-0 w-full    ' placeholder={placeholder} />
    </div>
  )
}
