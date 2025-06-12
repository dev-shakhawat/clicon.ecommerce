import Banner from "@/components/ui/banner/Banner";
import AllCategory from "@/components/ui/Category/AllCategory";
import Facility from "@/components/ui/facility/Facility";
import Header from "@/components/ui/header/Header";
import TopAdvertize from "@/components/ui/TopAdvertize";
import Image from "next/image";

export default function Home() {
  return (
    <>

      {/* Banner */}
      <Banner/>

      {/* facility */}
      <Facility/>

      {/* all category */}
      <AllCategory/>

    </>
  );
}
