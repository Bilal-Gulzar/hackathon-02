import UpSvg from '@/components/svg/upSvg';
import React from 'react'
import Image from 'next/image';
import CustomIcon from '@/components/svg/customIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AllProducts() {
  return (
    <div>
      <div className="grid md:grid-cols-12 w-full px-5  sm:px-10">
        <div className="col-span-3 w-full md:block hidden pe-14">
          <div className="font-[500] text-[24px] pb-5">New (500)</div>
          <ul className="text-[15px] font-[500] flex flex-col gap-4 pb-12">
            <li>Shoes</li>
            <li>Tops & T-Shirts</li>
            <li>Hoodies & Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers & Tights</li>
            <li>Tracksuits</li>
            <li>Jumpsuits & Rompers</li>
            <li>Skirts & Dresses</li>
            <li>Socks</li>
            <li>Accessories & Equipment</li>
          </ul>
          <div className="border-gray-300 border-y py-4">
            <div className="flex justify-between  mb-5 items-center  ">
              <p> Gender</p>
              <div>
                <UpSvg />
              </div>
            </div>
            <ul className="text-[15px] font-[500] flex flex-col gap-4">
              <li className="flex gap-1">
                <input type="checkbox" />
                <label>Men</label>
              </li>
              <li className="flex gap-1">
                <input type="checkbox" />
                <label>Women</label>
              </li>
              <li className="flex gap-1">
                <input type="checkbox" />
                <label>Unisex</label>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <div className="flex justify-between mb-5 items-center ">
              <p> Kids</p>
              <div>
                <UpSvg />
              </div>
            </div>
            <ul className="text-[15px] font-[500] flex flex-col gap-4">
              <li className="flex gap-1">
                <input type="checkbox" />
                <label>Boys</label>
              </li>
              <li className="flex gap-1">
                <input type="checkbox" />
                <label>Girls</label>
              </li>
            </ul>
          </div>
          <div className="py-4 border-t border-gray-300">
            <div className="flex justify-between mb-5 items-center ">
              <p> Shop By Price</p>
              <div>
                <UpSvg />
              </div>
            </div>
            <ul className="text-[15px] font-[500] flex flex-col gap-4">
              <li className="flex gap-1">
                <input type="checkbox" />
                <label>Under ₹ 2 500.00</label>
              </li>
              <li className="flex gap-1">
                <input type="checkbox" />
                <label>₹ 2 501.00 - ₹ 7 500.00</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-9 pb-5">
          <div className="text-[14px] flex justify-end gap-5 items-center mb-5">
            <div className="flex items-center gap-1">
              Hide Filters
              <CustomIcon />
            </div>
            <div className="flex items-center gap-1">
              SortBy
              <UpSvg />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10">
            <Link href="/allProducts/1">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className="">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">
                      Nike Air Force 1 Mid '07{" "}
                    </div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Men's Shoes </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1"> MRP : ₹ 10 795.00</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/allProducts/2">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className="">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle1.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">
                      Nike Court Vision Low Next Nature{" "}
                    </div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Men's Shoes </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 4 995.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/3">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className="">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle2.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">
                      Nike Air Force 1 PLT.AF.ORM
                    </div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Women's Shoes </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 8 695.00</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/allProducts/4">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className="">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Air Force 1 React</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Men's Shoes </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 13 295.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/5">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className="">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle3.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Air Jordan 1 Elevate Low</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Women's Shoes </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 11 895.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/6">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle4.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Standard Issue</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">
                      Women's Basketball Jersey
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 2 895.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/7">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle5.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Dunk Low Retro SE</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">
                      Women's Basketball Jersey
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 9 695.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/8">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectanglerandom.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Court Vision Low</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Men's Shoes</div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 5 695.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/9">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle7.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Court Vision Low</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Men's Shoes</div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 5 695.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/10">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle8.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Dri-FIT Ready</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">
                      Men's Short-Sleeve Fitness Top
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 2 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/11">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle9.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">
                      Nike One Leak Protection: Period
                    </div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">
                      Women's Mid-Rise 18cm (approx.) Biker Shorts{" "}
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 3 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/12">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle10.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Air Force 1 LV8 3</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Older Kids' Shoe</div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 7 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/13">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle 11.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Blazer Low Platform</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Women's Shoes</div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 8 195.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/14">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle12.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Air Force 1 '07</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Women's Shoes</div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 8 195.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/15">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle13.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Pro Dri-FIT</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">
                      Men's Tight-Fit Sleeveless Top
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 1 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/16">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle14.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Dunk Low Retro</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">
                      Men's Tight-Fit Sleeveless Top
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 8 695.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/17">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle16.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Dri-FIT UV Miler</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">
                      Men's Short-Sleeve Running Top
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 1 65.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/18">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle17.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Dri-FIT UV Miler</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1">Older Kids' Shoes</div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 6 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/19">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle18.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Alate All U</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">
                      Women's Light-Support Lightly Lined U-Neck Printed Sports
                      Bra
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 2 195.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/20">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle31.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Court Legacy Lift</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">
                      Women's Shoes
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 7 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/21">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle20.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Swoosh</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">
                      Women's Medium-support Padded Sports Bra Tank
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 3 095.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/22">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle21.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike SB Zoom Janoski OG+</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">Shoes</div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 8 595.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/23">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle22.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">
                      Nike Dri-FIT Run Division Rise 365
                    </div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">
                      Men's Running Tank
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 3 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/24">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle24.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Jordan Series ES</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">
                      Men's Shoes
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 7 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/25">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle26.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike Outdoor Play</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">
                      Older Kids' Oversized Woven Jacket
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 3 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/26">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle29.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">
                      Nike Blazer Low '77 Jumbo
                    </div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">
                      Women's Shoes
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 8 495.00</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/allProducts/27">
              <div className="flex sm:flex-row flex-col gap-4">
                <div className=" ">
                  <div className="bg-500 w-full ">
                    <Image
                      src="/Rectangle28.jpg"
                      width={300}
                      height={300}
                      alt="shoes"
                    />
                  </div>
                  <div className="font-[500] flex flex-col gap-2.5 pe-2 mt-6 justify-between text-[15px]">
                    <div className="text-[#9E3500]">Just In</div>
                    <div className="line-clamp-1">Nike SB Force 58</div>
                  </div>
                  <div className="font-[500] text-[#757575] space-y-0.5 text-[15px] mt-1.5">
                    <div className="line-clamp-1 md:line-clamp-none">
                      Skate Shoe
                    </div>
                    <div>1 Colour </div>
                  </div>
                  <div className=" mt-4">
                    <div className="line-clamp-1">MRP : ₹ 5 995.00</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-36 border-t py-14">
            <h4 className="text-[19px] font-[500]">Related Categories</h4>
            <div className="space-y-4">
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                Best Selling Products
              </Button>{" "}
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                Best Shoes
              </Button>{" "}
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                New Basketball Shoes
              </Button>{" "}
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                New Football Shoes
              </Button>{" "}
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                New Men's Shoes
              </Button>{" "}
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                New Running Shoes
              </Button>{" "}
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                New Jordan Shoes
              </Button>{" "}
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                Best Women's Shoes
              </Button>{" "}
              <Button
                variant={"outline"}
                className="text-[12px] leading-[18px]"
              >
                Best Training & Gym
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
