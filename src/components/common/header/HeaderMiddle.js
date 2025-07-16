"use client";

import Container from "@/components/common/Container";
import Cart from "@/icons/Cart";
import Favorite from "@/icons/Favorite";
import Search from "@/icons/Search";
import User from "@/icons/User";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Auth from "../../customeUI/account/Auth";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../../customeUI/cart/CartModal";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { userInfoSet } from "@/lib/slices/authSlice";
import axios from "axios";
import Cookies from "js-cookie";

export default function HeaderMiddle() {
  const user = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(false);
  const accountRef = useRef(null);
  const [isCart, setIsCart] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setIsAuth(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCart(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // Logout handler — customize this with your redux or auth logic
  const handleLogout = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`,{}, { withCredentials: true }).then((res) => {
        console.log(res);
Cookies.remove('mern2401');
      })
      .then(() => {
        dispatch(userInfoSet(null));
      })

      .catch((err) => {
        alert(err.response.data.message || "something went wrong");
      })


  };

  // User avatar dropdown component inside HeaderMiddle for simplicity
  const UserAvatarDropdown = ({ user, handleLogout }) => {
    const [open, setOpen] = useState(false);

    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            aria-label="User menu"
            className="flex items-center space-x-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 text-white hover:bg-blue-700 px-3 py-1 cursor-pointer select-none"
            title={user.username}
          >
            <Avatar className="w-10 h-10 bg-blue-600 text-white shadow-md">
              <AvatarFallback className="uppercase font-semibold">
                {user.username.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="font-semibold tracking-wide">{user.username}</span>
            <svg
              className={`w-4 h-4 text-white transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"
                }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="w-44 rounded-lg border border-gray-700 bg-gray-900 shadow-lg animate-fade-in"
        >
          <DropdownMenuSeparator className="border-gray-700" />
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer text-red-500 hover:bg-red-600/20 focus:bg-red-600/30 transition-colors duration-150"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };


  return (
    <div className="border-t border-[#3f7ca3] py-5">
      <Container>
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="logo"
              priority
              width={177}
              height={48}
              className="w-[177px] h-[48px] object-cover"
            />
          </Link>

          {/* search Box */}
          <div className="relative bg-[#FFFFFF] lg:min-w-[646px] h-[48px] rounded-[2px]">
            <input
              type="search"
              placeholder="Search for anything..."
              className="h-full w-full pl-5 pr-12 outline-0 font-Public_Sans font-normal text-sm leading-5 text-[#77878F]"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 right-5" />
          </div>

          {/* ecommerce options */}
          <div className="flex gap-6">
            <div ref={cartRef} className="relative">
              <button
                onClick={() => setIsCart((prev) => !prev)}
                type="button"
                className="cursor-pointer text-white"
              >
                <Cart className="w-9 h-9" />
              </button>

              {/* cart modal */}
              {isCart && <CartModal />}
            </div>

            <div>
              <button type="button" className="cursor-pointer text-white">
                <Favorite className="w-8 h-8" />
              </button>
            </div>

            {/* User Info */}
            {user ? (
              <UserAvatarDropdown user={user} handleLogout={handleLogout} />
            ) : (
              <div ref={accountRef} className="relative">
                <button
                  onClick={() => setIsAuth((prev) => !prev)}
                  type="button"
                  className="cursor-pointer"
                >
                  <User />
                </button>

                {/* auth */}
                {isAuth && <Auth />}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
