"use client";

import Container from "@/components/common/Container";
import InputField from "@/components/customeUI/billingAddress/InputField";
import CardTotal from "@/components/customeUI/cart/CardTotal";
import CuponCard from "@/components/customeUI/cart/CuponCard";
import ShoppingCard from "@/components/customeUI/cart/ShoppingCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CheckoutPage() {
  const user = useSelector((state) => state.auth.userInfo);
  const [cartlist, setCartList] = useState([]);
  const [cardTotal, setCardTotal] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    city: "",
  });

  useEffect(() => {
    if (!user?._id) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/get-cartbyuserid/${user._id}`)
      .then((res) => setCartList(res.data.data))
      .catch(console.error);

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/get-carttotal`, {
        withCredentials: true,
      })
      .then((res) => setCardTotal(res.data.data))
      .catch(console.error);
  }, [user?._id]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = async () => {
    if (!formData.address || !formData.phone || !formData.city) {
      alert("Please fill out address, phone, and city.");
      return;
    }

    const payload = {
      userId: user._id,
      cartItems: cartlist.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
      totalPrice: cardTotal?.grandTotal,
      address: formData.address,
      phone: formData.phone,
      city: formData.city,
      paymentMethod: paymentMethod,
      paymentstatus: paymentMethod === "online" ? "paid" : "notpaid",
    };

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order/place-order`, payload);
      if (res.data.success) {
        alert("Order placed successfully!");
        // TODO: clear cart or redirect
      } else {
        alert(res.data.message || "Order failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error placing order");
    }
  };

  return (
    <Container>
      {/* Cart Items */}
      <div className="border border-gray-300 rounded-md p-4">
        <h3 className="font-semibold text-lg mb-2">Cart Items</h3>
        <div className="flex flex-col gap-4">
          {cartlist.map((item) => (
            <ShoppingCard
              key={item._id}
              img={item.product?.thumbnail}
              descountPrice={99}
              price={item.price}
              title={item.product?.title}
              quantity={item.quantity}
              setQuantity={() => {}}
              handlePlus={() => {}}
              handleMinus={() => {}}
              handleRemoveCart={() => {}}
            />
          ))}
        </div>
      </div>

      {/* Billing + Payment */}
      <div className="flex py-[72px] gap-5 flex-col lg:flex-row">
        <div className="flex-2 w-full">
          <h2 className="font-medium text-[18px] leading-6 text-[#191C1F]">Billing Information</h2>
          <form className="mt-6 space-y-4">
            <InputField
              name="address"
              title="Address"
              value={formData.address}
              onChange={handleInputChange}
            />

            <div className="grid grid-cols-3 gap-4">
              <InputField
                name="city"
                title="City"
                value={formData.city}
                onChange={handleInputChange}
              />
              <InputField title="State" />
              <InputField title="Zip Code" />
            </div>

            <div className="flex gap-4">
              <InputField title="Email" />
              <InputField
                name="phone"
                title="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>

        {/* Payment + Summary */}
        <div className="flex-1 w-full space-y-4">
          <div className="border border-gray-300 rounded-md p-4">
            <h3 className="font-semibold text-lg mb-3">Payment Method</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="accent-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Cash on Delivery (COD)</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="accent-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Online Payment</span>
              </label>
            </div>
          </div>

          <CardTotal
            subtotal={cardTotal?.subTotal}
            shippingfee={cardTotal?.shoppingFee}
            discount={cardTotal?.discount}
            tax={cardTotal?.tax}
            total={cardTotal?.grandTotal}
            onClick={handlePlaceOrder}
          />

          <CuponCard />
        </div>
      </div>
    </Container>
  );
}
