"use client";
import Container from "@/components/common/Container";
import CardTotal from "@/components/customeUI/cart/CardTotal";
import CuponCard from "@/components/customeUI/cart/CuponCard";
import ShoppingCard from "@/components/customeUI/cart/ShoppingCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function page() {
  const user = useSelector((state) => state.auth.userInfo);
  const [cartlist, setCartList] = useState([]);
  const [quantity, setQuantity] = useState(null);
  const [productID, setProductID] = useState(null);
  const [cardTotal , setCardTotal] = useState(null)

  const handlePlus = (ID, amount) => {
    setProductID(ID);
    setQuantity(amount + 1);
    updateQuantity(ID, "plus");
  };

  const handleMinus = (ID, amount) => {
    if (amount === 1) {
      return;
    }
    setProductID(ID);
    setQuantity(amount - 1);
    updateQuantity(ID, "minus");
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/get-cartbyuserid/${user?._id}`
      )
      .then((res) => {
        setCartList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

      
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/get-carttotal` , {withCredentials: true}
      )
      .then((res) => { 
        setCardTotal(res.data.data); 
      })
      .catch((err) => {
        console.log(err);
      });

  }, [user?._id, quantity]);

  async function updateQuantity(productID, action) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/update-quantity/${productID}`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity, action }),
      }
    );

    const data = await response.json();
    console.log(data);
    if(!data.success) {
      alert(data.message);
      return;
    }else{
      location.reload();
    }
  }

  async function handleRemoveCart(cartId) {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/delete-remove-form-cart/${cartId}`,
        { withCredentials: true }
      )
      .then((res) => {
        location.reload();
      
      }).catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  console.log(cardTotal);
  

  return (
    <Container>
      <div className="flex pt-[72px] gap-6 mb-20  ">
        {/* cards */}
        <div className="flex-2 border border-[#cdcdcd] rounded-[5px] h-fit   ">
          <h2 className=" font-Public_Sans font-medium text-[18px] leading-6 text-[#191C1F] py-5 px-6   ">
            Shopping Card
          </h2>

          {/* card table */}
          <div className=" font-Public_Sans font-medium text-[12px] leaading-[150%] text-[#475156] flex py-2.5 px-6 bg-[#E4E7E9] ">
            <p className="flex-5">Products</p>
            <p className="flex-2">Price</p>
            <p className="flex-2">Quantity</p>
            <p className="flex-1">Sub-Total</p>
          </div>

          {/* all cards */}
          <div className="p-6 flex flex-col gap-6  ">
            {/* card item */}
            {cartlist?.map((item) => (
              <ShoppingCard
                key={item._id}
                img={item?.product?.thumbnail}
                descountPrice={99}
                price={item?.price}
                title={item?.product.title}
                quantity={item?.quantity}
                setQuantity={setQuantity}
                handlePlus={() => handlePlus(item._id, item?.quantity)}
                handleMinus={() => handleMinus(item._id, item?.quantity)}
                handleRemoveCart={() => handleRemoveCart(item._id)}
              />
            ))}
          </div>

          {/* buttons */}
          <div className="flex items-center justify-between p-6 border-t border-[#cbcbcb] ">
            <button
              type="button"
              className="border-2 rounded-[2px] border-[#2DA5F3] px-6 text-[#2DA5F3] uppercase font-Public_Sans font-bold text-sm leading-[48px] flex items-center justify-center gap-2 cursor-pointer "
            >
              <FaArrowLeft />
              <span>return to shop</span>
            </button>
            <button
              type="button"
              className="border-2 rounded-[2px] border-[#2DA5F3] px-6 text-[#2DA5F3] uppercase font-Public_Sans font-bold text-sm leading-[48px] flex items-center justify-center gap-2 cursor-pointer "
            >
              upadte cart
            </button>
          </div>
        </div>

        {/* total */}
        <div className="flex-1">
          {/* cart total */}
          <CardTotal
            subtotal={cardTotal?.subTotal}
            shippingfee={cardTotal?.shoppingFee}
            discount={cardTotal?.discount}
            tax={cardTotal?.tax}
            total={cardTotal?.grandTotal}
          />
 
        </div>
      </div>
    </Container>
  );
}
