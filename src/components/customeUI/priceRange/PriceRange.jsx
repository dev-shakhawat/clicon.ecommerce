"use client"

import { pricerange } from '@/lib/slices/productSlice';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
export default function PriceRange() {

  const dispatch = useDispatch();
  const [minval , setMinval] = useState(0);
  const [maxval , setMaxval] = useState(20000);


  const handleMinChange = (val , type) => {
    if(type === 'min'){
      const updatedval = Math.min(val , maxval);
      setMinval(updatedval);
       dispatch(pricerange([updatedval, maxval]))
    }
    else{
      const updatedval = Math.max(val , minval);
      setMaxval(updatedval);
      dispatch(pricerange([minval, updatedval]))
    }
  };



  return (
    <div>
          
        <div className={`relative h-[2px] after:content-[]  after:w-full after:h-[2px] after:bg-[#e4e7e9] after:absolute after:top-0 mt-2  `}>
            <span style={{left: `${(minval / 20000) * 100}%` , width: `${((maxval - minval) / 20000) * 100}%`}} className='absolute top-0 z-1 left-0  h-[2px] bg-[#FA8232]  ' ></span>
             <input step={50} value={minval} onChange={(e)=> handleMinChange(e.target.value , "min")} type="range" min={0} max={20000} className='absolute -top-[8px] z-1 left-0 w-full appearance-none slider pointer-events-none  ' />
            <input step={50} value={maxval} onChange={(e)=> handleMinChange(e.target.value , "max")} type="range" min={0} max={20000} className='absolute -top-[8px] z-1 left-0 w-full appearance-none slider pointer-events-none  ' />
        </div>

        {/* price value */}
        <div className="flex justify-between pt-5">
            <span className='text-sm font-Public_Sans text-[#475156] border border-gray-200 py-2 px-3  '>Min: {minval}</span>
            <span className='text-sm font-Public_Sans text-[#475156] border border-gray-200 py-2 px-3  '>Max: {maxval}</span>
        </div>


    </div>
  )
}
