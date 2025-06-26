import ProductOverview from "@/components/customeUI/overView/ProductOverview";
import React from "react";

export const metadata = {
  title: "Shop",
  description: "Clicon is a online eCommerce store - shop store  ",
};
export default function layout({ children }) {
  return <div>
    {children}
    <ProductOverview/>
  </div>;
}
