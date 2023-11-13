import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIN from "../assets/LinkedIN.png";
import Twitter from "../assets/Twitter.png";
import Logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <section className="w-full p-5 md:p-10 lg:p-15 xl:p-20 bg-black ">
      <div className="flex flex-col ">
        <div className="md:flex max-lg:flex-col md:justify-evenly md:gap-4">
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={Logo}
              className="aspect-[2.33] object-cover object-center w-[63px] overflow-hidden shrink-0"
            />
            <div className="text-white text-base leading-6 w-[500px] max-w-full mt-6">
              Join our newsletter to stay up to date on features and releases.
            </div>
            <div className="grow flex max-w-full flex-col mt-6">
              <div className="flex gap-5">
                <input
                  placeholder="Enter your email"
                  className=" placeholder:px-5 w-full max-w-[365px] h-[48px] bg-black text-white border border-white"
                  type="text"
                />
                <button className="px-[24px] py-[12px] text-white border border-white">
                  Subscribe
                </button>
              </div>
              <div className="self-stretch text-white text-xs leading-3 w-full -mr-5 mt-4 max-md:max-w-full">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </div>
            </div>
          </div>
          {/* second */}
          <div className="flex  md:w-[40%] text-white mt-5 items-start justify-between">
            <div className="flex flex-col">
              <h1 className="my-3">Column One</h1>
              <div className="flex flex-col list-none text-sm">
                <li>Link One</li>
                <li>Link two</li>
                <li>Link Three</li>
                <li>Link Four</li>
                <li>Link Five</li>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="my-3">Column two</h1>
              <div className="flex flex-col list-none text-sm">
                <li>Link Six</li>
                <li>Link Seven</li>
                <li>Link Eight</li>
                <li>Link Nine</li>
                <li>Link Ten</li>
              </div>
            </div>
            <div className=" flex flex-col ">
              <h1 className="my-3">Follow Us</h1>
              <div className="flex flex-col">
                <div className="text-sm flex  gap-2 items-center">
                  <img className=" aspect-square w-6" src={Facebook} alt="" />
                  Facebook
                </div>
                <div className="text-sm flex  gap-2 items-center ">
                  <img className=" aspect-square w-6" src={Instagram} alt="" />
                  Instagram
                </div>
                <div className="text-sm flex  gap-2 items-center ">
                  <img className=" aspect-square w-6" src={Twitter} alt="" />
                  Twitter
                </div>
                <div className="text-sm gap-2 items-center  flex ">
                  <img className=" aspect-square w-6" src={LinkedIN} alt="" />
                  LinkedIN
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* nex */}
        <div className="flex flex-col mt-[80px] max-md:my-[40px]">
          <div className="self-stretch bg-white flex min-h-[1px] flex-col" />
          <div className="justify-between items-start self-stretch flex max-md:flex-col-reverse gap-5 max-md:flex-wrap mt-5">
            <div className="text-white text-sm leading-5 self-stretch w-[182px]">
              © 2023. All rights reserved.
            </div>
            <div className=" items-start  flex  max-w-full justify-between gap-5 max-md:justify-center">
              <div className="text-white text-sm leading-5 underline self-stretch">
                Privacy Policy
              </div>
              <div className="text-white text-sm leading-5 underline self-stretch">
                Terms of Service
              </div>
              <div className="text-white text-sm leading-5 underline self-stretch">
                Cookies Settings
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
