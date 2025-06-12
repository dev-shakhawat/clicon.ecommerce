"use client";
import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import Product from "@/components/common/Product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedProducts = () => {
  const tab_items = [
    {
      id: 1,
      name: "All Product",
    },
    {
      id: 2,
      name: "Smart Phone",
    },
    {
      id: 3,
      name: "Laptop",
    },
    {
      id: 4,
      name: "Headphone",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const handleTabactive = (id) => {
    setActiveTab(id);
  };

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
                {tab_items.map((item, index) => (
                  <li
                    onClick={() => handleTabactive(item.id)}
                    key={index}
                    className={`py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#77878F] ${
                      activeTab == item.id &&
                      " border-b-4 border-[#ffc62b] bg-[#f2f4f5] text-black"
                    } hover:bg-[#f2f4f5] hover:text-[#191C1F]    `}
                  >
                    {item.name}
                  </li>
                ))}
                <li className="py-2 px-4 font-public_sans font-normal text-sm leading-5 text-[#da941a] hover:bg-[#f2f4f5] hover:text-[#191C1F]  ">
                  <Link href={"#"}>Browse All Product</Link>
                </li>
              </ul>
            </Flex>
            {/* featured products */}
            <div className="mt-6">
              <div className="grid grid-cols-4 gap-4">
                {Array(7)
                  .fill(0)
                  .map((item, index) => (
                    <Product />
                  ))}
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
