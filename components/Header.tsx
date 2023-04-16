import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const session = false;
  const basket = useSelector((state: any) => state.basket);

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      {/* apple-logo */}
      <div className="flex items-center justify-center md:w-1/5 ">
        <Link href="/">
          <div className="relative flex h-10 w-5 cursor-pointer items-center justify-center opacity-75 transition hover:opacity-100">
            <img src="/Apple_logo_black.svg.png" className="object-contain" />
          </div>
        </Link>
      </div>

      {/* navigation-bar */}
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      {/* navigation-icons */}
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        {/* search_icon */}
        <MagnifyingGlassIcon className="headerIcon" />
        {/* cart_icon with link */}
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="f-4 from absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white ">
              {basket.items.length}
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {/* userProfile_icon || default icon */}
        {session ? (
          <img src="/userprofile" alt="user" />
        ) : (
          <UserIcon className="headerIcon" />
        )}
      </div>
    </header>
  );
}

export default Header;
