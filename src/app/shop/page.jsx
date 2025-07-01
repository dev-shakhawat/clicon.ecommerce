import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import ShopCategories from "@/components/customeUI/category/ShopCategories";
import Paginate from "@/components/customeUI/Paginate";
import PopularBrand from "@/components/customeUI/popularBrand/PopularBrand";
import PopularTags from "@/components/customeUI/popularTags/PopularTags";
import PriceRange from "@/components/customeUI/priceRange/PriceRange";
import SortBy from "@/components/customeUI/sortBy/SortBy";
import Search from "@/icons/Search";
import Image from "next/image";
import Link from "next/link";
export default function page() {

  
  return (
    <main>
      <Breadcrumb />
      <Container>
        <div className="flex  gap-6 mt-10 pb-[72px] ">

          {/* all filters */}
          <div className="lg:min-w-[300px] max-w-[312px] h-auto ">

            {/* categories */}
            <div className="">
              <h2 className="filterHead">category</h2>
              <ShopCategories/>
            </div>

            <hr className="my-6 text-[#e4e7e9] " />


            {/* price range */}
            <div className="">
              <h2 className="filterHead">price range</h2>
              <PriceRange/>
            </div>

            <hr className="my-6 text-[#e4e7e9] " />


            {/* popular Brands */}
            <div className="">
              <h2 className="filterHead">popular Brands</h2>
              <PopularBrand/>
            </div>
            <hr className="my-6 text-[#e4e7e9] " />


            {/* Popular Tag */}
            <div className="">
              <h2 className="filterHead">Popular Tag</h2>
              <PopularTags/>
            </div>
            <hr className="my-6 text-[#e4e7e9] " />


            {/* Popular Tag */}
            <div className="">
              <Link href="">
              <Image src={`/images/categoryad.png`} alt="banner" width={312} height={300} className={`w-full mt-6 `} />
              </Link>
            </div>

             





          </div>


          {/* all products */}
          <div className=" ">

            <div className="flex justify-between ">

              {/* search */}
              <div className="w-[40%] relative">
                <input type="search" placeholder="Search for anything..." className='w-full py-3 pl-4 pr-11 border border-[#E2E5E7] rounded-[2px] outline-0 font-normal text-sm leading-5 text-[77878F] font-Public_Sans  ' />
                <Search className="w-5 h-5 absolute top-[12px] right-4  " />
              </div>

              {/* short by */}
              <div className="flex items-center gap-[22px] relative  ">
                <span>Sort by: </span>
                <SortBy shortList={['Most Popular', 'Featured', 'Best Selling', 'Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, low to high', 'Price, high to low']} />
              </div>

            </div>

            {/* active filters & results */}
            <div className="flex bg-[#F2F4F5] py-3 px-6 rounded-[3px] mt-4 mb-6  ">
              <div className="">
                <span className=" font-Public_Sans font-normal text-sm leading-5 text-[#5F6C72]  ">Active Filters:</span>
              </div>
            </div>

            <Paginate itemsPerPage={24}/>
          </div>
        </div>
      </Container>
    </main>
  );
}
