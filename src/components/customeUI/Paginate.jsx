"use client";
import Arrow from "@/icons/Arrow";
import { currentProduct } from "@/lib/slices/productSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Product from "../common/Product";

const Paginate = ({ itemsPerPage }) => {
  const [items, setItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const cateNow = useSelector((state) => state.product.currentCatagory);
  const router = useRouter();
  const dispatch = useDispatch();




  function getAllCategoryList() {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/get-products?category=${cateNow}`)
      .then((res) => {
        console.log("res", res.data.data);
        setItems(res.data.data);
      });
  }
  useEffect(() => {
    getAllCategoryList();
  }, [cateNow]);

  const handleproductview = (product) => {
    router.push(`/shop/${product._id}`);
    dispatch(currentProduct(product));
  };

  function Items({ currentItems }) {
    return (
      <div className=" grid grid-cols-4 gap-4 ">
        {currentItems &&
          currentItems.map((item, index) => (
            <Product
              key={index}
              id={index}
              product={item}
              onClick={() => handleproductview(item)}
            />
          ))}
      </div>
    );
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Arrow className={`w-6 h-6 text-[#FA8232] `} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount <= 9 ? `0${pageCount}` : pageCount}
        previousLabel={
          <Arrow className={`w-6 h-6 text-[#FA8232] rotate-180 `} />
        }
        renderOnZeroPageCount={null}
        className="flex gap-5 items-center my-10 justify-center "
        pageClassName="font-Public_Sans font-semibold text-sm leading-5  cursor-pointer text-black border border-gray-800 w-[40px] h-[40px] flex items-center justify-center rounded-full "
        previousClassName=" border-[1.5px] border-[#FA8232]  w-[40px] h-[40px] flex items-center justify-center rounded-full "
        nextClassName=" border-[1.5px] border-[#FA8232] w-[40px] h-[40px] flex items-center justify-center rounded-full "
        activeClassName="  bg-[#FA8232] text-white font-Public_Sans font-semibold text-sm leading-5  border  !border-[#FA8232] w-[40px] h-[40px] flex items-center justify-center rounded-full "
      />
    </>
  );
};

export default Paginate;
