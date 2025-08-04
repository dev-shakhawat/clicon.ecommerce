
export default function InputField({title, name , placeholder = null , optional , className,value ,onChange}) {
  return (
    <div className={className}> 
        {/* title */}
        <p className="h-5 font-Public_Sans font-normal text-sm leading-5 text-[#191C1F] mb-2 flex items-center gap-1    ">{title} {optional && <span className='opacity-30' >({optional})</span>}</p>
        <input onChange={onChange} type="text" value={value} className=' py-3 px-4 border border-[#e4e7e9] outline-0 w-full    ' name={name} placeholder={placeholder} />
    </div>
  )
}
