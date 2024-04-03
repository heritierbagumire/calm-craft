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
    {
      id: 4,
      link: "experience",
      title: "experience",
    },
    {
      id: 5,
      link: "contact",
      title: "contact",
    },
  ];

  return (
    <div className="flex flex-col py-2 justify-between items-center w-full h-auto px-10 text-black bg-white fixed">
      <div className="border-b border-green-600 w-[110%]">
        <h1 className="text-5xl font-signature md:ml-8 my-2 text-green-600">
          Calm Craft
        </h1>
      </div>
      <div className="-mr-[60%] md:flex gap-x-6 pr-6">
        <ul className="hidden md:flex  md:border-2">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-green-600 text-[12px] hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="rounded-sm border-green-500 border  text-green-600 px-3 py-3">Contact Us</button>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} className="-mt-10 ml-80" />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black/80">
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
