"use client";
import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import Product from "@/components/common/Product";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedProducts = () => {
  // const tab_items = [
  //   {
  //     id: 1,
  //     name: "All Product",
  //   },
  //   {
  //     id: 2,
  //     name: "Smart Phone",
  //   },
  //   {
  //     id: 3,
  //     name: "Laptop",
  //   },
  //   {
  //     id: 4,
  //     name: "Headphone",
  //   },
  // ];

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  function getAllCategoryList() {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/getcategorys`)
      .then((res) => {
        setCategoryList(res.data.data);
      });
  }

  // const proudcts = [
  //   {
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description:
  //       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "Smart Phone",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     rating: {
  //       rate: 3.9,
  //       count: 120,
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Mens Casual Premium Slim Fit T-Shirts ",
  //     price: 22.3,
  //     description:
  //       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //     category: "Smart Phone",
  //     image:
  //       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //     rating: {
  //       rate: 4.1,
  //       count: 259,
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "Mens Cotton Jacket",
  //     price: 55.99,
  //     description:
  //       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     category: "Laptop",
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     rating: {
  //       rate: 4.7,
  //       count: 500,
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: "Mens Casual Slim Fit",
  //     price: 15.99,
  //     description:
  //       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     rating: {
  //       rate: 2.1,
  //       count: 430,
  //     },
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //     price: 695,
  //     description:
  //       "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //     category: "jewelery",
  //     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //     rating: {
  //       rate: 4.6,
  //       count: 400,
  //     },
  //   },
  //   {
  //     id: 6,
  //     title: "Solid Gold Petite Micropave ",
  //     price: 168,
  //     description:
  //       "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  //     category: "jewelery",
  //     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  //     rating: {
  //       rate: 3.9,
  //       count: 70,
  //     },
  //   },
  //   {
  //     id: 7,
  //     title: "White Gold Plated Princess",
  //     price: 9.99,
  //     description:
  //       "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  //     category: "jewelery",
  //     image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //     rating: {
  //       rate: 3,
  //       count: 400,
  //     },
  //   },
  //   {
  //     id: 8,
  //     title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
  //     price: 10.99,
  //     description:
  //       "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  //     category: "jewelery",
  //     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  //     rating: {
  //       rate: 1.9,
  //       count: 100,
  //     },
  //   },

  // ];

  function getFeaturedProducts() {
    axios
      .get("http://localhost:4000/api/v1/product/get-featured-products")
      .then((res) => {
        setFeaturedProducts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching featured products:", error);
      });
  }

  useEffect(() => {
    getFeaturedProducts();
    getAllCategoryList();
  }, []);

  const [activeTab, setActiveTab] = useState("All Product");

  const handleTabactive = (name) => {
    setActiveTab(name);
  };

  const filterProduct =
    activeTab == "All Product"
      ? featuredProducts
      : featuredProducts.filter((item) => item.category.name == activeTab);

  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-8 w-1/4" />
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="border border-gray-200 p-4 rounded-lg shadow-sm"
              >
                <Skeleton className="h-40 w-full mb-2 bg-gray-500" />
                <Skeleton className="h-6 w-full mb-1 bg-gray-500" />
                <Skeleton className="h-6 w-3/4 bg-gray-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <section>
      <Container>
        <Flex className=" gap-6">
          <div>
            <Image
              src={"/images/ProductBanner.png"}
              alt="banner"
              width={320}
              height={716}
              className={`w-full `}
            />
          </div>

          <div className="w-full">
            <Flex className="justify-between">
              <h2 className=" text-2xl font-semibold font-Public_Sans leading-6 text-gray-900">
                Featured Products{" "}
              </h2>

              <ul className="flex    ">
                {categoryList.map((item, index) => (
                  <li
                    onClick={() => handleTabactive(item.name)}
                    key={index}
                    className={`py-2 px-4 font-public_sans capitalize font-normal text-sm leading-5 text-[#77878F] ${
                      activeTab == item.name &&
                      " border-b-4 border-[#ffc62b] bg-[#f2f4f5] text-black"
                    } hover:bg-[#f2f4f5] hover:text-[#191C1F]    `}
                  >
                    {item.name}
                  </li>
                ))}
                <li className="py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#da941a] hover:bg-[#f2f4f5] hover:text-[#191C1F]  ">
                  <Link href={"/shop"}>Browse All Product</Link>
                </li>
              </ul>
            </Flex>
            {/* featured products */}
            <div className="mt-6">
              <div className="grid grid-cols-4 gap-4">
                {filterProduct.length == 0 ? (
                  <div className="text-center col-span-4">No Product Found</div>
                ) : (
                  filterProduct?.map((item, index) => (
                    <Product key={index} id={index} product={item} />
                  ))
                )}
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
