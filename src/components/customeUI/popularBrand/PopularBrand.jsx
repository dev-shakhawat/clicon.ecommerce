import Checkbox from '@/icons/Checkbox'
import React from 'react'

export default function PopularBrand() {

  const brands = [
    "Apple",
    "Google",
    "Microsoft",
    "Samsung",
    "Dell",
    "HP",
    "Symphony",
    "Xiaomi",
    "Sony",
    "Panasonic",
    "LG",
    "Intel",
    "One Plus"
  ]
  return (
    <div className='grid grid-cols-2 gap-y-3  mt-4  '>
      {brands.map((brand, index) => (
        <label key={brand} className=" font-Public_Sans font-normal text-sm text-[#475156] leading-5 flex items-center gap-2 cursor-pointer  " htmlFor={brand} >
          <input class="peer hidden" type="checkbox"  id={brand}/>
          <Checkbox className={`w-5 h-5 border border-[#C9CFD2] peer-checked:border-[#FA8232] rounded-[2px] text-white peer-checked:text-[#FA8232]  `} bg="#ffffff  " />
          {brand}
        </label>
        
      ))}

    </div>
  )
}
