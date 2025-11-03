"use client"; 
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import Product from "../common/Product";

const Paginate = ( ) => {
  const [items, setItems] = useState([]); 
  const cateNow = useSelector((state) => state.product.currentCatagory);
  const pricerange = useSelector((state) => state.product.pricerange);
  const router = useRouter();
  const dispatch = useDispatch();
 
 
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products${cateNow === "" ? "?limit=24" : `/category/${cateNow}?limit=24`}`)
      .then((res) => {
        setItems(res.data.products);
      });
  }, [cateNow, pricerange]);

  
 
 
    return (
      <div className=" grid grid-cols-4 gap-4 ">
        {items &&
          items.map((item, index) => (
            <Product
              key={index}
              id={index}
              product={item} 
            />
          ))}
      </div>
    );
};

export default Paginate;
