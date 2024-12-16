"use client"
import React from 'react'
import Image from 'next/image'
import SearchSvg from '../svg/searchSvg';
import HeartSvg from '../svg/heartSvg';
import CartSvg from '../svg/cartSvg';
import { usePathname } from 'next/navigation';
import SmsSvg from '../svg/smsSvg';
import CartSvg2 from '../svg/cartSvg2';
import LoginSvg from '../svg/loginSvg';
import Link from 'next/link';
function Header() {
  const path = usePathname()
  return (
    <header className={`${path === "/checkout" ? "" : " bg-100"}`}>
      {!(path === "/checkout") ? (
        <div>
          <div className=" hidden sm:flex px-5 md:px-10 justify-between  py-4 items-center">
            <div>
              <Link href="/">
                <Image src="/logo.png" alt="img" width={19} height={19} />
              </Link>
            </div>
            {/* <div className=" lg:block hidden leading-[26px] text-[13px] relative left-24 font-[500]">
              Skip to main content
            </div> */}
            <div className="flex justify-center  items-center gap-[15.38px] font-[500] text-[14px]">
              <div className="border-r border-black pe-2.5">Find a Store</div>
              <Link href="/contact-us">
                <div className="border-r border-black pe-2.5">Help</div>
              </Link>
              <div
                className={`border-r border-black pe-2.5 ${
                  path === "/cart" ? "hidden" : ""
                }`}
              >
                <Link href="/joinUs">Join Us</Link>
              </div>
              {path === "/cart" ? (
                <div className="flex gap-3 items-center">
                  <p>Hi, Rajarshi</p>
                  <LoginSvg />
                </div>
              ) : (
                <Link href="/login">
                  <div className="">Sign In</div>
                </Link>
              )}
            </div>
          </div>
          <div
            className={`bg-white  px-5 md:px-10 py-4 ${
              path === "/cart" ? "lg:ps-10 lg:pe-0" : ""
            } flex justify-between items-center`}
          >
            <div>
              <Link href="/">
                <Image src="/Frame.jpg" alt="img" width={58} height={58} />
              </Link>
            </div>
            <nav className="font-[500]  relative left-16 text-[15px] items-center hidden lg:flex gap-[15.38px] list-none">
              <Link href="/allProducts">
                <li>New & Featured</li>
              </Link>
              <Link href="/allProducts">
                <li
                  className={` ${
                    path === "/cart" ? "border-b-[2px]  border-black" : ""
                  }`}
                >
                  Men
                </li>
              </Link>
              <Link href="/allProducts">
                <li>Women</li>
              </Link>

              <Link href="/allProducts">
                <li>Kids</li>
              </Link>

              <Link href="/allProducts">
                <li>Sales</li>
              </Link>

              <Link href="/allProducts">
                <li>SNKRS</li>
              </Link>
            </nav>
            <div className="flex items-center gap-[15.38px]">
              <div className="sm:block hidden w-[180px] relative">
                <input
                  className="w-full h-[40px] rounded-[100px] bg-500  ps-12"
                  placeholder="Search"
                />
                <div className="absolute top-2 left-3">
                  <SearchSvg />
                </div>
              </div>

              <div className="sm:hidden">
                <SearchSvg />
              </div>
              <div className="lg:block hidden">
                <HeartSvg />
              </div>
              <div className="lg:hidden">
                <Link href="/login">
                  <LoginSvg />
                </Link>
              </div>
              {path === "/cart" ? (
                <Link href="/cart">
                  <div>
                    <CartSvg2 />
                  </div>
                </Link>
              ) : (
                <Link href="/cart">
                  <div>
                    <CartSvg />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className=" px-5 sm:px-10 lg:px-0 lg:ps-10 flex justify-between items-center mt-5">
          <div>
            <Link href="/">
              <Image src="/Frame.jpg" alt="img" width={70} height={70} />
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <div className="sm:block hidden">000 800 100 9538</div>
            <div>
              <SmsSvg />
            </div>
            <div>
              <Link href="/cart">
                <CartSvg />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header