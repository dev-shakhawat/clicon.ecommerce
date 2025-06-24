"use client"

import React, { useState } from 'react'

export default function PriceRange() {

  const [minval , setMinval] = useState(20);
  const [maxval , setMaxval] = useState(5000);

  const handleMinChange = (val , type) => {
    if(type === 'min'){
      const updatedval = Math.min(val , maxval);
      setMinval(updatedval);
    }
    else{
      const updatedval = Math.max(val , minval);
      setMaxval(updatedval);
    }
  };
  return (
    <div>
        
        {/* price range */}
        <div className="relative">
            <input onChange={(e)=> handleMinChange(e.target.value , 'min')} value={minval} min={20} max={10000} step={40} type="range" className="appearance-none w-full h-2 rounded-full outline-none cursor-pointer absolute top-0 left-0 z-[10]   " />
            <input onChange={(e)=> handleMinChange(e.target.value , 'max')} value={maxval} min={20} max={10000} step={40} type="range" className="appearance-none w-full h-2 rounded-full outline-none cursor-pointer absolute top-0 left-0 z-[10]   " />
        </div>


    </div>
  )
}
