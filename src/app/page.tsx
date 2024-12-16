import HeroSection from "@/components/heroSection/heroSection";
import LeftArrowSvg from "@/components/svg/leftArrowSvg";
import RigthArrowSvg from "@/components/svg/rigthArrowSvg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Homecart from "@/components/homeCart/homecart";
import HomePageImges from "@/components/homethreeImges/homePageImges";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      {/* herosection */}
      <HeroSection />
      <section className="px-4 sm:ps-10 py-7">
        <div className="font-[500]  flex justify-between items-center pe-10 mb-5 ">
          <div className=" text-[22px]">Best of Air Max</div>
          <div className="hidden sm:flex gap-3 items-center">
            <div className="text-[15px]">Shop</div>
            <div className="flex gap-3">
              <div className="w-[48px] h-[48px] rounded-full bg-500 flex justify-center items-center">
                <RigthArrowSvg />
              </div>
              <div className="w-[48px] h-[48px] rounded-full bg-500 flex justify-center items-center">
                <LeftArrowSvg />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4  items-center sm:overflow-hidden ">
          <div className="shrink-0  sm:w-[380px] h[441.36px]">
            <div className="bg-500">
              <Image src="/shoe2.png" width={441} height={441} alt="shoes" />
            </div>
            <div className="font-[500] flex pe-2 mt-6 justify-between text-[15px]">
              <div>Nike Air Max Pulse </div>
              <div>₹ 13 995</div>
            </div>
            <div className="font-[500] text-[15px] mt-1.5">
              <div className="text-[#757575]">Women's Shoes</div>
            </div>
          </div>
          <div className=" shrink-0 sm:w-[380.36px] ">
            <div className="bg-500">
              <Image src="/shoe2.png" width={441} height={441} alt="shoes" />
            </div>
            <div className="font-[500] flex pe-2 mt-6 justify-between text-[15px]">
              <div>Nike Air Max Pulse </div>
              <div>₹ 13 995</div>
            </div>
            <div className="font-[500] text-[15px] mt-1.5">
              <div className="text-[#757575]">Women's Shoes</div>
            </div>
          </div>
          <div className="shrink-0 sm:w-[380px] ">
            <div className="bg-500">
              <Image src="/shoe1.png" width={441} height={441} alt="shoes" />
            </div>
            <div className="font-[500] flex pe-2 mt-6 justify-between text-[15px]">
              <div>Nike Air Max Pulse </div>
              <div>₹ 13 995</div>
            </div>
            <div className="font-[500] text-[15px] mt-1.5">
              <div className="text-[#757575]">Women's Shoes</div>
            </div>
          </div>
          <div className="shrink-0 sm:w-[380px] sm:block hidden ">
            <div className="bg-500">
              <Image src="/shoe1.png" width={441} height={441} alt="shoes" />
            </div>
            <div className="font-[500] flex pe-2 mt-6 justify-between text-[15px]">
              <div>Nike Air Max Pulse </div>
              <div>₹ 13 995</div>
            </div>
            <div className="font-[500] text-[15px] mt-1.5">
              <div className="text-[#757575]">Women's Shoes</div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 pt-24">
        <div className="text-[15px] mb-5 font-[500]">Featured</div>
        <div className="max-w-[1344px] ">
          <Image
            src="/manwalk.jpg"
            width={1344}
            height={1344}
            alt="man while walking"
          />
        </div>
      </section>
      <section>
        <div className="text-[15px] px-5 gap-6 my-12 font-[500] flex flex-col  items-center">
          <h2 className="md:leading-[60px] text-center text-4xl md:text-[56px] ">
            STEP INTO WHAT FEELS GOOD
          </h2>
          <p className="font-[400] max-w-[511px] text-center">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="">
            <Link href="/allProducts">
              <Button variant="default">Find Your Shoe</Button>
            </Link>
          </div>
        </div>
      </section>
      <div>
        <Homecart />
      </div>
      <section className="mt-24 px-10">
        <div className=" text-[22px] mb-5">Don't Miss</div>
        <div className="max-w-[1344px]">
          <Image
            src="/FullImg.jpg"
            width={1344}
            height={1344}
            alt="man while walking"
          />
          <div className="text-[15px] px-5 gap-6 my-12 font-[500] flex flex-col  items-center">
            <h2 className="md:leading-[60px] text-center text-4xl md:text-[56px] ">
              FLIGHT ESSENTIALS
            </h2>
            <p className="font-[400] max-w-[511px] text-center">
              Your built-to-last, all-week wears—but with style only Jordan
              Brand can deliver.
            </p>
            <div className="">
            <Link href="/allProducts">
              <Button variant="default">Shop</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HomePageImges />
    </div>
  );
}
