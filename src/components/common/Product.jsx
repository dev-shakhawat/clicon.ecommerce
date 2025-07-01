import Cart from "@/icons/Cart";
import Eye from "@/icons/Eye";
import Favorite from "@/icons/Favorite";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Product = ({ product, id , onClick}) => {
  
  return (
    <div
      onClick={onClick}
      key={id}
      className=" relative font-Public_Sans border border-[#e4e7e9] hover:shadow-lg p-4 cursor-pointer "
    >
      <div className="relative group">
        <Image
          src={product?.thumbnail||product.image}
          alt="product"
          width={202}
          height={172}
          className=" w-full h-[172px] object-contain  "
        />
        {/* overlay  */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out  flex justify-center items-center">
          <div className=" flex gap-2 w-full  justify-center ">
            
            {/* eye */}
            <div className="hover:bg-[#FA8232] bg-white w-[48px] h-[48px]  rounded-full hover:text-white grid place-items-center cursor-pointer ">
              <Favorite className="w-6 h-6  rounded-full " />
            </div>
            
            {/* eye */}
            <div className="hover:bg-[#FA8232] bg-white w-[48px] h-[48px]  rounded-full hover:text-white grid place-items-center cursor-pointer ">
              <Cart className="w-6 h-6  rounded-full " />
            </div>
            
            {/* eye */}
            <div className="hover:bg-[#FA8232] bg-white w-[48px] h-[48px]  rounded-full hover:text-white grid place-items-center cursor-pointer ">
              <Eye className="w-6 h-6  rounded-full " />
            </div>
          </div>
        </div>
      </div>
      <ul className="flex gap-2 items-center mt-2 ">
        <li className="text-[#FA8232]">
          {" "}
          <FaStar />{" "}
        </li>
        <li className="text-[#FA8232]">
          {" "}
          <FaStar />{" "}
        </li>
        <li className="text-[#FA8232]">
          {" "}
          <FaStar />{" "}
        </li>
        <li className="text-[#FA8232]">
          {" "}
          <FaStar />{" "}
        </li>
        <li className="text-[#FA8232]">
          {" "}
          <FaStar />{" "}
        </li>
        <li>(123)</li>
      </ul>
      <h4 className="text-sm leading-5 font-bold text-[#191C1F] mt-2 OverViewLineClamp">
        {product.title}
      </h4>
      <h3 className="text-md leading-5 font-bold text-[#2DA5F3] mt-2 ">
        $ {product.price}
      </h3>
    </div>
  );
};

export default Product;
