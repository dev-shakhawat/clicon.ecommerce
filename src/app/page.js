import Banner from "@/components/customeUI/banner/Banner";
import AllCategory from "@/components/customeUI/category/AllCategory";
import Facility from "@/components/customeUI/facility/Facility";
import FeaturedProduct from "@/components/customeUI/featuredProduct/FeaturedProduct";
import NewIntroducing from "@/components/customeUI/introducingNew/NewIntroducing";
import ProductOverview from "@/components/customeUI/overView/ProductOverview";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />

      {/* facility */}
      <Facility />

      {/* all category */}
      <AllCategory />

      {/* featured products component  */}
      <FeaturedProduct/>

      {/* introducing */}
      <NewIntroducing/>


      {/* Product Overview */}
      <ProductOverview/>
      
    </>
  );
}
