import Banner from "@/components/ui/banner/Banner";
import AllCategory from "@/components/ui/Category/AllCategory";
import Facility from "@/components/ui/facility/Facility";
import FeaturedProducts from "@/components/ui/featuredProducts/FeaturedProducts";

export default function Home() {
  return (
    <>

      {/* Banner */}
      <Banner/>

      {/* facility */}
      <Facility/>

      {/* all category */}
      <AllCategory/>

      {/* featured products component  */}
      <FeaturedProducts/>

    </>
  );
}
