import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { Link } from "react-scroll";
import logo from "../assets/calm-logo.webp";
import Home from "./Home";


const Footer = () => {
  const portfolios = [
    {
      id: 1,
      content: `Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.`,
    },
    {
      id: 2,
      content: `Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.`,
    },
    {
      id: 3,
      content: `Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.`,
    },
    {
      id: 4,
      content: `Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.`,
    },
    {
      id: 5,
      content: `Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.`,
    },
    {
      id: 6,
      content: `Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.`,
    },
  ];

  return (
    <footer>
      <div className="py-12 md:pb-24 md:py-14 bg-gray-800 ">
        <div className="max-w-6xl mx-auto px-0 md:px-4  sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 px-4 gap-8 lg:gap-20 mb-8 md:mb-12 justify-center">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5 ">
              <div className="mb-2 relative flex">
                {/* Logo */}
                <div className="-mt-6 ml-4 hidden">
                  <img
                    alt="logo"
                    src={logo}
                    width={100}
                    height={100}
                    className=" bg-transparent"
                  />
                </div>
                <p className=" text-[32px] text-white text-center md:text-start font-semibold">
                  Calm Craft
                </p>
              </div>
              <div className="text-gray-300 inline-flex text-start md:text-center">
                <p className=" w-52 md:w-96 text-sm">
                  Unlock Peace of Mind With CalmCraft. Your Path to Inner
                  Serenity.
                </p>
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-semibold text-[16px] mb-1">
                  Links
                </h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/AboutUs"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/Home"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      <Link href="/Home" smooth duration={500}>
                        Home
                      </Link>
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Testmonials
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Chat
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1 text-[16px]">
                  Support
                </h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out tex"
                    >
                      Feedback
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-semibold text-lg mb-1">
                  Stay up to date
                </h6>
                <input
                  placeholder="Contact us"
                  className="px-4 py-1 rounded-sm  bg-slate-600 my-2 text-white/60 focus:border-spacing-0 focus-visible:border-0"
                />
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4 flex flex-col md:">
              <div className="flex flex-grow-0 items-center text-[12px] justify-center">
                &copy; CalmCraft.com. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
