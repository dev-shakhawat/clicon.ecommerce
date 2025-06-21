"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";


// icons
import { FaAngleRight } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import Home from "@/icons/Home";



const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const breadcrub = pathSegments.map((item, index) => {
    const href = `/${pathSegments.slice(0, index + 1)}`;
    return {
      name: item,
      href,
    };
  });

  return (
    <div className="bg-[#F2F4F5] py-4">
        <Container>
      <ul className="flex items-center  gap-2 text-sm font-medium text-[#77878f] font-Public_Sans">
        <li className="flex items-center gap-2">
          <Home className={`w-4 h-[17px] -mt-1 `} />
          <Link href="/">Home</Link>
        </li>
        {breadcrub.map((item , index) => (
          <li key={index} className=" list-none flex items-center gap-2 flex-row-reverse">
            <Link href={item.href}>{item.name}</Link> <FaAngleRight />
          </li>
        ))}
      </ul>

        </Container>
    </div>
  );
};

export default Breadcrumb;
