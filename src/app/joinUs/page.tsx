import React from 'react'
import Link from 'next/link';

export default function JoinUs() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="Frame.jpg"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          BECOME A NIKE MEMBERE
        </h2>
        <p className="leading-relaxed text-[14px] max-w-[282px] text-center mx-auto mt-12 text-[#8D8D8D]">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <div className="mt-2">
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex -mt-2 items-center justify-between"></div>
            <div className="">
              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex -mt-2 items-center justify-between"></div>
            <div className="">
              <input
                name="Fname"
                type="text"
                required
                placeholder="First Name"
                autoComplete="First Name"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex -mt-2 items-center justify-between"></div>
            <div className="">
              <input
                name="Lname"
                type="text"
                required
                placeholder="Last Name"
                autoComplete="Last Name"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex -mt-2 items-center justify-between"></div>
            <div className="">
              <input
                name="Date"
                type="date"
                required
                placeholder="dd/mm/yyyy"
                autoComplete="off"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-[#8D8D8D] outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              />
            </div>
            <p className="text-[11px] text-[#8D8D8D] mt-2 ml-4">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          <div>
            <div className="flex -mt-2 items-center justify-between"></div>
            <div className="">
              <select
                name="country"
                required
                autoComplete="off"
                className="block w-full rounded-md bg-white px-3 h-[40px] text-base text-[#8D8D8D] outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
              >
                <option>India</option>
              </select>
            </div>
          </div>
          <div className="text-[#8D8D8D] flex items-center text-[13px] gap-5 ">
            <div className="border rounded-[3px] w-full flex justify-center items-center h-[40px]">
              Male
            </div>
            <div className="border rounded-[3px]  w-full flex justify-center items-center h-[40px]">
              Female
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="sm:flex items-stretch gap-2  hidden">
              <input type="checkbox" className="w-[20px] h-[20px]" />
              <p className="text-[11px] text-[#8D8D8D]">
                Sign up for emails to get updates from Nike on products, offers
                and your Member benefits
              </p>
            </div>
          </div>
          <div className="text-[12px] text-center max-w-[279px] mx-auto text-[#8D8D8D]">
            By logging in, you agree to Nike's{" "}
            <span className="underline">Privacy Policy</span> and
            <span className="underline">Terms</span> of Use.
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 h-[40px]  items-center  text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              JOIN US
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already a Member?&nbsp;
          <Link href="/login" className="font-semibold text-black underline">
            Sign In.
          </Link>
        </p>
      </div>
    </div>
  );
}
