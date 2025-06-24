import React from 'react'

export default function Checkbox({className , bg="#FA8232"}) {
  return (
    
<svg className={`${className} rounded-[3px]`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="2" fill={`currentColor`}/>
<path d="M14.8125 6.9375L8.6875 13.0625L5.625 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}
