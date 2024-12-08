import CarSvg from '@/components/svg/carSvg';
import React from 'react'

function CHeckoutPage() {
  return (
    <div>
      <div className="grid sm:grid-cols-12 sm:gap-14 mt-20  max-w-[800px] mx-auto">
        <div className="sm:col-span-6 px-5">
          <div>
            <h3 className="text-[21px] font-[500]">
              How would you like to get your order?
            </h3>
            <p className="mt-4 text-[15px] text-[#757575]">
              Customs regulation for India require a copy of the recipient's
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs (including sharing it with customs
              officials) for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
              Learn More
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-full mt-10 h-[82px] relative border-[1.5px] rounded-[8px] px-2 border-black ">
              <input type="text" className="w-full h-full" />
              <div className="absolute top-8 left-8 gap-5 flex ">
                <CarSvg />
                <label className="text-[15px]">Deliver It</label>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-[21px]">Enter your name and address:</div>
            </div>
            <div>
              <input
                type="text"
                placeholder="First Name "
                autoComplete="off"
                className=" placeholder:text-gray-900 w-full rounded-[8px] h-[56px] text-[16px]  border-[1.5px] border-200 px-4 mb-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name "
                autoComplete="off"
                className=" placeholder:text-gray-900 w-full rounded-[8px] h-[56px] text-[16px]  border-[1.5px] border-200 px-4 mb-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address Line 1"
                autoComplete="off"
                className=" placeholder:text-gray-900 w-full rounded-[8px] h-[56px] text-[16px]  border-[1.5px] border-200 px-4"
              />
              <p className="text-gray-400 mb-4 mt-2 ml-3 text-[11px]">
                We do not ship to P.O. boxes
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Address Line 2"
                autoComplete="off"
                className=" placeholder:text-gray-900 w-full rounded-[8px] h-[56px] text-[16px]  border-[1.5px] border-200 px-4 mb-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address Line 3"
                autoComplete="off"
                className=" placeholder:text-gray-900 w-full rounded-[8px] h-[56px] text-[16px]  border-[1.5px] border-200 px-4 mb-4"
              />
            </div>
            <div className="flex gap-5 items-center mb-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full h-[56px] border-[1.5px]  text-[16px]  px-4 border-200 placeholder:text-black rounded-[8px]"
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-full h-[56px] placeholder:text-black  text-[16px] px-4 border-[1.5px] border-200  rounded-[8px]"
              />
            </div>
            <div className="flex gap-5 items-center text-[16px] mb-4">
              <div className="w-full">
                <select className="w-full border-[1.5px]  rounded-[8px] px-4 border-gray-200 h-[56px]">
                  <option className="text-[#8D8D8D]">State/Territory</option>
                </select>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="india"
                  className="w-full h-[56px] placeholder:text-black  text-[16px] px-4 border-[1.5px] border-200  rounded-[8px]"
                />
                <div className="w-[8px] h-[8px] rounded-full bg-[#19AB20] absolute top-6 right-4"></div>
              </div>
            </div>
            <div className="flex  items-stretch flex-col gap-4">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-[20px] h-[20px]" />
                <p className="text-[15px] text-[#8D8D8D]">
                  Save this address to my profile
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-[20px]  h-[20px]" />
                <p className="text-[15px] text-[#8D8D8D]">
                  Save this address to my profile
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              <div className="text-[21px]">
                What's your contact information?
              </div>
              <div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    className=" placeholder:text-gray-900 w-full rounded-[8px] h-[56px] text-[16px]  border-[1.5px] border-200 px-4"
                  />
                  <p className="text-gray-400 mb-4 mt-2 ml-3 text-[11px]">
                    A confirmation email will be sent after checkout.
                  </p>
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    autoComplete="off"
                    className=" placeholder:text-gray-900 w-full rounded-[8px] h-[56px] text-[16px]  border-[1.5px] border-200 px-4"
                  />
                  <p className="text-gray-400 mb-4 mt-2 ml-3 text-[11px]">
                    A carrier might contact you to confirm delivery.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-[21px] mb-3">What's your PAN?</div>
                <div className="flex flex-col gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="PAN"
                      autoComplete="off"
                      className=" placeholder:text-gray-900 w-full rounded-[8px] h-[56px] text-[16px]  border-[1.5px] border-200 px-4"
                    />
                    <p className="text-gray-400 mb-4 mt-2 ml-3 text-[11px]">
                      Enter your PAN to enable payment with UPI, Net Banking or
                      local card methods
                    </p>
                  </div>
                  <div className="sm:flex items-stretch gap-2  hidden">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <p className="text-[12px] text-[#8D8D8D]">
                      Save PAN details to Nike Profile
                    </p>
                  </div>

                  <div className="sm:flex items-stretch gap-2 mt-10  hidden">
                    <input type="checkbox" className="min-w-[18px] h-[18px]" />
                    <p className="text-[12px] text-[#8D8D8D]">
                      I have read and consent to eShopWorld processing my
                      information in accordance with the Privacy Statement and
                      Cookie Policy. eShopWorld is a trusted Nike partner.
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <button className="bg-[#F5F5F5] w-full text-[15px] text-[#757575] rounded-full  h-[60px]">
                    Continue
                  </button>
                </div>
                <div className="pb- flex flex-col gap-3 mt-10 mb-16 sm:mb-44">
                  <div className="w-full flex items-center ml-4 h-[60px] border-y text-[20px]">
                    {" "}
                    Delivery
                  </div>
                  <div className="w-full flex text-[#757575] items-center ml-4 h-[60px] border-b text-[20px]">
                    {" "}
                    Shipping
                  </div>
                  <div className="w-full flex items-center text-[#757575]  ml-4 h-[60px] border-b text-[20px]">
                    {" "}
                    Billing
                  </div>
                  <div className="w-full flex items-center text-[#757575] ml-4 h-[60px] border-b text-[20px]">
                    {" "}
                    Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-6 px-5">
          <h1 className="font-[500] text-[21px] pb-1">Order Summary</h1>
          <div className="flex justify-between text-[#8D8D8D] mt-10 mb-5">
            <span className=" text-[15px]">Subtotal</span>
            <span className=" text-[15px]">₹ 20 890.00</span>
          </div>
          <div>
            <div className="font-medium text-[#8D8D8D] flex justify-between mb-3 text-sm uppercase">
              <div>Estimated Delivery & Handling</div>
              <div>Free</div>
            </div>
            <div className="mt-8 font-[500]">
              <div className="flex border-y   justify-between py-6 text-[15px]">
                <span>Total </span>
                <span>₹ 20 890.00</span>
              </div>
            </div>
            <div className="text-[9px] mt-5">
              (The total reflects the price of your order, including all duties
              and taxes)
            </div>
            <div className="mt-5">
              <div className="text-[15px] font-[700]">
                Arrives Mon, 27 Mar - Wed, 12 Apr
              </div>
              <div className="md:pl-3 md:flex gap-5 items-strech py-8 md:py-10 lg:py-8 ">
                <div className="md:w-[300px]  w-full md:mb-0 mb-5">
                  <img
                    src="/homeImg1.jpg"
                    alt="Black Leather Purse"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[13px] font-[400] leading-[28px]">
                      Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running
                      Top
                    </p>
                  </div>
                  <div className="text-[#757575]  mt-1 flex-col text-[14px] flex gap- ">
                    <div>Size 8</div>
                    <div> Quantity 1</div>
                  </div>
                  <p className="text-[#757575] text-[14px] mt-1 ">₹ 3 895.00</p>
                </div>
              </div>
              <div className="md:pl-3 -mt-8 md:flex gap-5 items-strech py-8 md:py-10 lg:py-8 ">
                <div className="md:w-[300px]  w-full md:mb-0 mb-5">
                  <img
                    src="/person2.jpg"
                    alt="Black Leather Purse"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[13px] font-[400] leading-[28px]">
                      Nike Air Max 97 SE Men's Shoes
                    </p>
                  </div>
                  <div className="text-[#757575]  mt-1 flex-col text-[14px] flex gap- ">
                    <div>Size UK 8</div>
                    <div> Quantity 1</div>
                  </div>
                  <p className="text-[#757575] text-[14px] mt-1 ">
                    ₹ 16 995.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CHeckoutPage