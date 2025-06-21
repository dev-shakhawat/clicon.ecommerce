"use client"
import React, { useEffect, useRef, useState } from 'react'


// icons
import { BsCheck2 } from "react-icons/bs";
import ArowDropdown from '@/icons/ArowDropdown';

export default function SortBy({shortList = []}) {

  const [activeSort, setActiveSort] = useState(shortList[0]);
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


  return (
    <div ref={sortRef} onClick={() => setIsOpen(prev => !prev)} className='py-3 px-4 border border-[#e4e7e9] rounded-[3px] min-w-[180px] select-none  '>
      
      {/* selected value */}
      <div className="flex items-center justify-between cursor-pointer ">
        <span>{activeSort}</span>
        <ArowDropdown className={`${isOpen ? "rotate-180" : "rotate-0"}   w-4 h-4 text-[#ADB7BC]`} />
      </div>


      {/* short list */}
      {isOpen && 
      <div className="absolute top-10 left-0 z-10 bg-white p-2 border  border-[#e4e7e9]  w-full h-auto ">
        <ul className=''>
          {shortList.map((item , index) => (
            <li className='relative cursor-pointer py-1 px-4 font-Public_Sans font-normal text-sm leading-5 text-[#475156] hover:bg-[#f2f4f5] hover:text-[#191C1F]     ' onClick={() => setActiveSort(item)} key={index}  value={item}  name='short'>
              {item} {activeSort == item && <BsCheck2 className='absolute top-[15%] right-2 text-[#475156] text-xl'/>}   
            </li>
          ))}
        </ul>
      </div>}
    </div>
  )
}
