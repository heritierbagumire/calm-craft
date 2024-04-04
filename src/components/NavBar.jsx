import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      title: "Home",
    },
    {
      id: 2,
      link: "about",
      title: "About Us",
    },
    {
      id: 3,
      link: "portfolio",
      title: "Services",
    },

  ];

  return (
    <div className="flex flex-col py-2 justify-between items-center w-full h-auto px-10 bg-white text-green-800 sticky">
      <div className="border-b border-green-800 w-full">
        <h1 className="text-5xl font-signature md:ml-8 my-2 font-medium text-green-700">
          Calm Craft
        </h1>
      </div>
      <div className="-mr-[75%] md:flex md:gap-x-0 md:pr-18 lg:gap-x-1 lg:pr-2">
        <ul className="hidden md:flex ">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="md:px-6 md:-ml-[35px] pt-3  lg:px-0 cursor-pointer capitalize font-medium text-green-800 text-[12px] hover:scale-105 duration-200 lg:mr-12"
            >
              <Link to={link} smooth duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden md:block rounded-0 border-t-0 border-green-800 border text-[12px] text-green-800 px-10 md:px-2 lg:px-8 py-2">
          Contact Us
        </button>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <FaTimes size={30} className="-mt-10 ml-80" />
        ) : (
          <FaBars size={30} className="-mt-10 ml-80" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center relative top-0 left-0 w-full h-screen bg-white text-black/80 ">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
