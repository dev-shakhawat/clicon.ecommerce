import Eye from "@/icons/Eye";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Product = ({ product, id }) => {
  return (
    <div
      key={id}
      className=" relative font-Public_Sans border border-[#e4e7e9] hover:shadow-lg p-4"
    >
      <Image
        src={product.image}
        alt="product"
        width={202}
        height={172}
        className=" w-full h-[172px] object-contain "
      />
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
      <h4 className="text-sm leading-5 font-bold text-[#191C1F] mt-2 ">
        {product.title}
      </h4>
      <h3 className="text-md leading-5 font-bold text-[#2DA5F3] mt-2 ">
        $ {product.price}
      </h3>
      {/* overlay  */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-0 hover:opacity-50 transition-all duration-300 ease-in-out  flex justify-center items-center">
        <div className=" flex gap-2  ">
          <Eye className="w-10 h-10  rounded-full text-white" />
          <Eye className="w-10 h-10  rounded-full text-white" />
        </div>
        Add commentMore actions
      </div>
    </div>
  );
};

export default Product;
