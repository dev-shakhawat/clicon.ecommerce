import React from 'react'

export default function PriceRange() {
  return (
    <div>
        
        {/* price range */}
        <div className="relative">
            <input type="range" className="appearance-none w-full h-2 rounded-full outline-none cursor-pointer absolute top-0 left-0 z-[10]   " />
            <input type="range" className="appearance-none w-full h-2 rounded-full outline-none cursor-pointer absolute top-0 left-0 z-[10]   " />
        </div>


    </div>
  )
}
