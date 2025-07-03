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
        
        {/* price range */}
        <div className="relative">
            <input onChange={(e)=> handleMinChange(e.target.value , 'min')} value={minval} min={0} max={10000} step={40} type="range" className=" w-full h-2 rounded-full outline-none cursor-pointer absolute top-0 left-0 z-[10]   " />
            <input onChange={(e)=> handleMinChange(e.target.value , 'max')} value={maxval} min={0} max={20000} step={40} type="range" className=" w-full h-2 rounded-full outline-none cursor-pointer absolute top-0 left-0 z-[10]   " />
        </div>

        {/* price value */}
        <div className="flex justify-between pt-5">
            <span className='text-sm font-Public_Sans text-[#475156]'>Min: {minval}</span>
            <span className='text-sm font-Public_Sans text-[#475156]'>Max: {maxval}</span>
        </div>


    </div>
  )
}
