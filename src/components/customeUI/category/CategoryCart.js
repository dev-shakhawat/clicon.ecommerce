 import Link from 'next/link'

export default function CategoryCart({ category, slug , onClick}) {
  return (
    <div onClick={onClick} className={`py-6 px-7 border border-[#e4e7e9] rounded-[4px] cursor-pointer mx-2 `}>
 
        {/* category name */}
        <h3 className=" font-Public_Sans font-medium text-base leading-6 text-[#191C1F] text-center ">
          <Link href={`/shop/${slug}`} className='hover:text-[#FA8232] transition-all duration-200 ease-in-out'>
            {category}
          </Link>
        </h3>
    </div>
  )
}
