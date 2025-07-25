"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import Cart from "@/icons/Cart";
import Star from "@/icons/Star";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const page = () => {
  const { name } = useParams();

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const [product, setProduct] = useState({});

  const user = useSelector((state) => state.auth.userInfo);

  console.log(user)

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  // const product = useSelector((state) => state.product.currentProduct)

  // product quantity count
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(null);

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    function getSingleProduct() {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/single-product/${name}`
        )
        .then((res) => {
          setProduct(res.data.data);
          if (res.data.data.variant.length > 0) {
            setVariant(res.data.data.variant[0]);
          }
        });
    }

    getSingleProduct();
  }, []);

  let handleVariant = (item) => {
    setVariant(item);
  };

  

  const handleAddToCart = () => {

     axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/cart/add-to-cart`, {
      product: product._id,
      quantity,
      variant: variant? variant._id : null,
      price: product.price,
      user: user._id
    }).then((res) => {
      alert("add to cart successfully")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <Breadcrumb />

      {/* product description */}
      <Container>
        <div className="flex mt-8 gap-[56px] ">
          {/* product image */}
          <div className="w-[600px]    ">
            {/* product image slider */}
            {/* <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}> */}
            <div className="w-[600px] h-[full]   ">
              {product?.thumbnail && (
                <img
                  src={product?.thumbnail}
                  alt="product image"
                  className="w-full h-full object-cover "
                />
              )}
            </div>

            {/* </Slider> */}
          </div>

          {/* product details */}
          <div className="flex-1">
            {/* rating */}
            <div className="flex items-center gap-2  ">
              <ul className="flex gap-2 ">
                <li>
                  <Star className="w-5 h-5 text-[#FA8232] " />
                </li>
                <li>
                  <Star className="w-5 h-5 text-[#FA8232] " />
                </li>
                <li>
                  <Star className="w-5 h-5 text-[#FA8232] " />
                </li>
                <li>
                  <Star className="w-5 h-5 text-[#FA8232] " />
                </li>
              </ul>

              <h4 className="font-Public_Sans font-semibold text-sm leading-5 text-[#191C1F]    ">
                4.7 Star Rating
              </h4>

              <p className=" font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72]   ">
                (21,671 User feedback)
              </p>
            </div>

            {/* product title */}
            <h2 className=" font-Public_Sans font-normal text-xl leading-7 text-[#191C1F] mt-2  ">
              {product?.title}
            </h2>

            {/* details */}
            <div className="grid grid-cols-2 gap-x-20 mt-4  ">
              <p className="">
                <span className="font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] ">
                  Sku:
                </span>
                <span className="font-Public_Sans font-semibold text-xl leading-7 text-[#191C1F] ml-2  ">
                  {variant?.sku || product?.sku || "N/A"}
                </span>
              </p>
              <p className="">
                <span className="font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] ">
                  Availability:
                </span>
                {!variant ? (
                  <span className="font-Public_Sans font-semibold text-xl leading-7 text-red-500 ml-2  ">
                    Aailable
                  </span>
                ) : variant?.stock > 0 ? (
                  <span className="font-Public_Sans font-semibold text-xl leading-7 text-green-500 ml-2  ">
                    {variant.stock} in stock
                  </span>
                ) : (
                  <span className="font-Public_Sans font-semibold text-xl leading-7 text-red-500 ml-2  ">
                    out of stock
                  </span>
                )}
              </p>
              <p className="">
                <span className="font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] ">
                  Brand:
                </span>
                <span className="font-Public_Sans font-semibold text-xl leading-7 text-[#191C1F] ml-2  ">
                  Apple
                </span>
              </p>
              <p className="">
                <span className="font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72] ">
                  Category:
                </span>
                <span className="font-Public_Sans font-semibold text-xl leading-7 text-[#191C1F] ml-2  ">
                  {product?.category?.name}
                </span>
              </p>
            </div>

            {/* price and discount */}
            <div className="flex py-6 gap-2 ">
              {/* price */}
              <p className=" font-Public_Sans font-semibold text-2xl leading-7 text-[#2DA5F3]  ">
                ${product?.price}
              </p>
              {/* <del className=" font-Public_Sans font-semibold text-2xl leading-7 text-[#77878F]  ">${1699}</del> */}

              {/* discount */}
              {/* <p className=" font-Public_Sans font-semibold text-sm leading-5 text-[#191C1F] px-2.5 py-[5px] bg-[#EFD33D]  ">{100}% off</p> */}
            </div>

            {/* color size others */}
            <div className="grid grid-cols-2 gap-6 border-t border-[#e4e7e9] pt-6 ">
              {product?.variant?.color && (
                <div className="">
                  <p className="font-Public_Sans font-normal text-sm text-[#191C1F] mb-2    ">
                    Color
                  </p>
                  <div className="flex gap-5">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full bg-gray-400 outline-[4px] outline-[#FA8232] border-[4px] border-[#ffffff]  "
                    ></button>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full bg-gray-400 outline-[4px] outline-[#FA8232] border-[4px] border-[#ffffff]  "
                    ></button>
                  </div>
                </div>
              )}
              {
                product?.variant?.length > 0 ? (
                  <>
                    <p className="font-Public_Sans font-normal text-sm text-[#191C1F] mb-2    ">
                      Size
                    </p>

                    <select
                      onChange={(e) => {
                        const selectedIndex = e.target.selectedIndex;
                        const selectedVariant = product.variant[selectedIndex];
                        handleVariant(selectedVariant);
                      }}
                      className="w-full border border-[#e4e7e9] rounded-[3px] py-2 px-4 outline-0 cursor-pointer"
                    >
                      {product.variant.map((item, index) => (
                        <option value={item.size} key={index}>
                          {item.size}
                        </option>
                      ))}
                    </select>
                  </>
                )
                :
                 <button onClick={handleAddToCart}
                type="button"
                className="bg-[#FA8232] py-2 flex gap-4 items-center  px-20 font-Public_Sans font-bold text-base leading-14 text-white uppercase cursor-pointer      "
              >
                <span>add to cart</span>
                <Cart className={`w-5 h-5`} />
              </button>

                // <ProductInfoSelection title={`Size`} list={[product.variant.size]}/>
              }
              {/* <ProductInfoSelection title={`Memory`} list={["8 GB", "16 GB", "32 GB"]}/>
                  <ProductInfoSelection title={`Storage`} list={[ "128 GB", "256 GB", "512 GB"]}/> */}
            </div>

            {/* add to cart */}
            <div className="flex mt-9 gap-4  ">
              {/* quantity */}
              {variant && variant.stock > 0 && (
              <div className="p-5 flex items-center gap-[37px] border border-[#e4e7e9] h-fit ">
                <button
                  type="button"
                  onClick={handleMinus}
                  className="text-4xl cursor-pointer  "
                >
                  -
                </button>
                <p className=" font-Public_Sans font-normal text-base leading-6 text-[#475156]  ">
                  {quantity < 10 ? `0${quantity}` : quantity}
                </p>
                <button
                  type="button"
                  onClick={handlePlus}
                  className="text-4xl cursor-pointer  "
                >
                  +
                </button>
              </div>
                
              )}

              {/* add to cart */}
                {
                variant && variant.stock > 0 && (
               

              <button
                type="button"
                className="bg-[#FA8232] py-2 flex gap-4 items-center  px-20 font-Public_Sans font-bold text-base leading-14 text-white uppercase cursor-pointer      "
              >
                <span>Add to cart</span>
                <Cart className={`w-5 h-5`} />
              </button>
                )
           
              }

              <button
                type="button"
                className=" border-2 border-[#FA8232] px-8 py-2 font-Public_Sans font-bold text-base leading-14 text-[#FA8232] uppercase cursor-pointer    "
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
