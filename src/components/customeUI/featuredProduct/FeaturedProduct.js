"use client";
import Container from "@/components/common/Container";
import React, { useState } from "react";
import LeftAd from "./LeftAd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Arrow from "@/icons/Arrow";
import ProductCart from "@/components/common/ProductCart";

export default function FeaturedProduct() {


  const [activeTab, setActiveTab] = useState("product");
  console.log(activeTab);
  
  return (
    <Container>
      <div className="flex gap-6">
        <LeftAd />

        {/* right - products tabs */}
        <div className="relative w-full">


          {/* title */}
          <h2 className="font-public_sans font-semibold text-[24px] leading-[32px] text-[#191C1F] absolute top-1 left-0  ">Featured Products</h2>

          {/* all product link */}
          <Link href={`/shop`} className="absolute top-1 right-0 flex items-center gap-2   ">
            <span className=" font-Public_Sans font-semibold text-sm leading-5 text-[#FA8232]  ">Browse All Product</span>
            <Arrow className={` w-5 h-5 text-[#FA8232]  `}  />
          </Link>

          {/* products tabs */}
          <Tabs defaultValue="account" className="">
            <TabsList className={`ml-auto mr-[170px] mb-6`}>
              <TabsTrigger onClick={()=> setActiveTab('all')} className={`productTabBtn`} value="product">All Product</TabsTrigger>
              <TabsTrigger onClick={()=> setActiveTab('smartPhone')} className={`productTabBtn`} value="phone">Smart Phone</TabsTrigger>
              <TabsTrigger onClick={()=> setActiveTab('laptop')} className={`productTabBtn`} value="laptop">Laptop</TabsTrigger>
              <TabsTrigger onClick={()=> setActiveTab('headPhone')} className={`productTabBtn`} value="headphone">Headphone</TabsTrigger>
              <TabsTrigger onClick={()=> setActiveTab('tv')} className={`productTabBtn`} value="tv">TV</TabsTrigger>
            </TabsList>

            <TabsContent value="product" className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-2 gap-4  `} >
              <ProductCart productThumbnail={`/images/productimage.png`} price={1500} topAd={true} rating={5} totalrating={100}  title={`Canon EOS 1500D DSLR Camera Body+ 18-55 mm`}  />
              <ProductCart productThumbnail={`/images/productimage.png`} price={1500} topAd={true} rating={5} totalrating={100}  title={`Canon EOS 1500D DSLR Camera Body+ 18-55 mm`}  />
              <ProductCart productThumbnail={`/images/productimage.png`} price={1500} topAd={true} rating={5} totalrating={100}  title={`Canon EOS 1500D DSLR Camera Body+ 18-55 mm`}  />
              <ProductCart productThumbnail={`/images/productimage.png`} price={1500} topAd={true} rating={5} totalrating={100}  title={`Canon EOS 1500D DSLR Camera Body+ 18-55 mm`}  />
              <ProductCart productThumbnail={`/images/productimage.png`} price={1500} topAd={true} rating={5} totalrating={100}  title={`Canon EOS 1500D DSLR Camera Body+ 18-55 mm`}  />
              <ProductCart productThumbnail={`/images/productimage.png`} price={1500} topAd={true} rating={5} totalrating={100}  title={`Canon EOS 1500D DSLR Camera Body+ 18-55 mm`}  />
              <ProductCart productThumbnail={`/images/productimage.png`} price={1500} topAd={true} rating={5} totalrating={100}  title={`Canon EOS 1500D DSLR Camera Body+ 18-55 mm`}  />
              <ProductCart productThumbnail={`/images/productimage.png`} price={1500} topAd={true} rating={5} totalrating={100}  title={`Canon EOS 1500D DSLR Camera Body+ 18-55 mm`}  />
            </TabsContent>
            <TabsContent value="phone">
            phone
            </TabsContent>
            <TabsContent value="laptop">
            laptop
            </TabsContent>
            <TabsContent value="headphone">
            headphone
            </TabsContent>
            <TabsContent value="tv">
            tv
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}
