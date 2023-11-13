import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import navLogo from "../assets/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full  z-[99]">
      <div className="flex md:flex items-center md:justify-around justify-between py-4 md:px-10 px-6">
        <div className="cursor-pointer flex items-center">
          <img
            style={{ width: "141px", height: "36px" }}
            src={navLogo}
            alt="logo"
          />
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <div className="flex justify-center items-center cursor-pointer md:hidden">
              <FiX size={25} />
            </div>
          ) : (
            <div className="flex justify-center items-center cursor-pointer md:hidden">
              <FiMenu size={25} />
            </div>
          )}
        </div>

        <ul
          className={` md:flex md:flex-row md:items-center md:pb-0 flex flex-col justify-center items-center pb-12 absolute md:static  md:z-auto z-[99] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-white" : "top-[-490px] "
          } `}
        >
          <li className="cursor-pointer md:ml-8 text-sm xl:text-base  md:my-0 my-7 duration-500 ">
            Home
          </li>
          <li className="cursor-pointer md:ml-8 text-sm xl:text-base  md:my-0 my-7 hover:text-gray duration-500 ">
            Features
          </li>
          <li className="cursor-pointer md:ml-8 text-sm xl:text-base md:my-0 my-7 hover:text-gray duration-500 ">
            About
          </li>
          <li className="cursor-pointer md:ml-8 text-sm xl:text-base md:my-0 my-7 hover:text-gray duration-500 ">
            Contact us
          </li>
          <button className="text-sm bg-[#4ECB71] xl:text-base py-[20px] px-[20px] rounded-lg md:ml-8 duration-500">
            Download app
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
