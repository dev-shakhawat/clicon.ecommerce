"use client";
import Container from "@/components/common/Container";
import React, { useEffect } from "react";
import LeftAd from "./LeftAd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FeaturedProduct() {


  useEffect(() => {
    const handleclick = (e) => {
      const hasDataState = e.target.hasAttribute('data-state');
      if (hasDataState) {
        console.log(e.target.getAttribute('data-state'));
      }
    }
    document.addEventListener('click', handleclick)
    return () => {
      document.removeEventListener('click', handleclick)
    }
  }, []);

  return (
    <Container>
      <div className="flex gap-6">
        <LeftAd />

        {/* right - products tabs */}
        <div className="relative">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList onChange={(value) => console.log(value)}>
              <TabsTrigger className={`productTabBtn`} value="product">All Product</TabsTrigger>
              <TabsTrigger className={`productTabBtn`} value="phone">Smart Phone</TabsTrigger>
              <TabsTrigger className={`productTabBtn`} value="laptop">Laptop</TabsTrigger>
              <TabsTrigger className={`productTabBtn`} value="headphone">Headphone</TabsTrigger>
              <TabsTrigger className={`productTabBtn`} value="tv">TV</TabsTrigger>
            </TabsList>
            <TabsContent value="product">
            product
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
