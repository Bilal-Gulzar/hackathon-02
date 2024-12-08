import Link from 'next/link';
import React from 'react'

function LoginPage() {
  return (
    <div>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="Frame.jpg"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            YOUR ACCOUNT
            <br /> FOR EVERYTHING <br /> NIKE
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  id="email"
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
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="sm:flex items-center gap-2  hidden">
                <input type="checkbox" />
                <p className="text-[12px] text-[#8D8D8D]">Keep me signed in</p>
              </div>
              <div className="text-[12px] flex ml-auto sm:ml-0 text-[#8D8D8D]">
                Forgotten your password?
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link href="/joinUs" className="font-semibold text-black underline">
              Join Us.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage