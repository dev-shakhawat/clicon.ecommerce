import React from 'react'

export default function ProductInfoSelection({title , list = []}) {
  return (
    <div>
        <p className="font-Public_Sans font-normal text-sm text-[#191C1F] mb-2    ">{title}</p>

        <select name={title} id={title} className=' w-full border border-[#e4e7e9] rounded-[3px] py-2 px-4 outline-0 cursor-pointer  '>
            {list.map((item , index) => (
                <option value={item} key={index}>{item}</option>
            ))} 
        </select>
    </div>
  )
}
