import HeartSvg from '@/components/svg/heartSvg';
import TrashSvg from '@/components/svg/trashSvg';
import React from 'react'
import Link from 'next/link';


function CartPage() {
  return (
    <div>
      <div className="container mx-auto lg:mt-10">
        <div className="sm:flex mb-10 lg:my-10">
          <div className="  w-full  sm:w-3/4 lg:w-[900px] px-5 py-10">
            <div className="border-b pb-8 bg-500 ">
              <div className="flex flex-col relative top-4 left-6 justify-center">
                <h1 className=" text-[13px] font-[500]">Free Delivery</h1>
                <h1 className="font-[400] text-[13px] flex pe-10 sm:pe-0">
                  Applies to orders of ₹ 14 000.00 or more.
                  <span className="underline ml-5 md:block hidden">View details</span>
                </h1>
              </div>
            </div>
            <div className="mt-5">Bag</div>
            <div className="md:flex items-strech py-8 md:py-10 -mt-4 lg:py-8 border-gray-200">
              <div className="md:w-4/12 2xl:w-1/4 w-full md:mb-0 mb-5">
                <img
                  src="/person.jpg"
                  alt="Black Leather Purse"
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src="/person.jpg"
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className=" md:pl-3 lg:pl-0 lg:-ml-2 xl:-ml-5 2xl:ml-0 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full">
                  <p className="text-[15px] font-[500] leading-[28px]">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </p>
                  <div className="font-[400] text-[15px]">MRP: ₹ 3 895.00</div>
                </div>
                <p className="text-[#757575] text-[14px]  pt-2">
                  Men's Short-Sleeve Running Top
                </p>
                <p className="text-[#757575] text-[14px]   py-4">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="text-[#757575] text-[14px] flex gap-6 ">
                  <div>Size L</div>
                  <div> Quantity 1</div>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex gap-4 itemms-center">
                    <div className=" cursor-pointer">
                      <HeartSvg />
                    </div>
                    <div className=" cursor-pointer">
                      <TrashSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pl-3 lg:pl-0 lg:-ml-2 xl:-ml-5 2xl:ml-0  md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-200">
              <div className="md:w-4/12 2xl:w-1/4 w-full md:mb-0 mb-5">
                <img
                  src="/person.jpg"
                  alt="Black Leather Purse"
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full">
                  <p className="text-[15px] font-[500] leading-[28px]">
                    Nike Air Max 97 SE
                  </p>
                  <div className="font-[400] text-[15px]">MRP: ₹ 16 995.00</div>
                </div>
                <p className="text-[#757575] text-[14px]   pt-2">
                  Men's Shoes
                </p>
                <p className="text-[#757575] text-[14px]  py-4">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <div className="text-[#757575] text-[14px] flex gap-20 ">
                  <div>Size 8</div>
                  <div> Quantity 1</div>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex gap-4 itemms-center">
                    <div className=" cursor-pointer">
                      <HeartSvg />
                    </div>
                    <div className=" cursor-pointer">
                      <TrashSvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="summary"
            className=" w-full   sm:w-1/2     px-8 py-10"
          >
            <h1 className="font-[500] text-[21px]  pb-1">Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className=" text-[15px]">Subtotal</span>
              <span className=" text-[15px]">₹ 20 890.00</span>
            </div>
            <div>
              <div className="font-medium flex justify-between mb-3 text-sm uppercase">
                <div>Estimated Delivery & Handling</div>
                <div>Free</div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex border-y justify-between py-6 text-[15px]">
                <span>Total </span>
                <span>₹ 20 890.00</span>
              </div>
              <Link href='/checkout'>
              <button className="bg-black text-[15px]  mt-8 rounded-full h-[60px] text-sm text-white w-full">
                Member Checkout
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage