import React from "react";
import HeroImage from "../assets/calm.jpg";
import Dfd from "../assets/davido.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" md:max-w-screen-lg lg:max-w-screen-xl m-4 lg:m-1 lg:p-20 lg:px-0 h-auto w-full bg-white text-green-700 mt-6 overflow-hidden "
    >
      <div className=" mx-2 md:-mx-2 pl-0 lg:pl-5 flex flex-col items-center justify-between h-auto md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-[45%]">
          <div className="px-0 lg:px-7 relative">
            <div className="block text-3xl md:text-6xl ml-2 absolute top-12 lg:text-7xl font-medium pt-0  text-green-800">
              Calm <br /> Craft
              <p className="text-[12px] md:text-sm ml-2">Make a Connection</p>
            </div>
          </div>
          <div className="mt-[60%] pl-10 lg:pl-10">
            <p className="text-green-800 text-[12px] max-w-64 py-4 pb-2 text-start font-medium">
              Our Support Group was created as a community for individuals going
              through similar difficulties. We believe that this safe space,
              where people of all backgrounds can share with and listen to
              others, can make a huge difference. Get in touch today.
            </p>
            <button className="bg-green-800 text-white text-[12px] px-4 my-10  rounded-2xl hidden md:block rounded-0 mt-6 hover:border hover:border-green-700  hover:bg-white border  transition duration-150 ease-in-out hover:text-green-800  md:px-2 lg:px-10 lg:-mr-12 py-2 hover:scale-105 hover:ease-in-out ">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full md:w-[55%] border-2 bg-background">
          <div></div>
          <div className="mt-54">
            <div className="z-0">
              <img
                src="https://static.wixstatic.com/media/11062b_d296a592b03444e3b3bb1147d04fffd3~mv2.jpeg/v1/fill/w_597,h_1228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_d296a592b03444e3b3bb1147d04fffd3~mv2.jpeg"
                alt="fda"
                className="w-[520px] md:w-full  h-[560px] md:h-[930px]"
              />
            </div>
            <div className="inset-20 md:-inset-10 lg:-inset-40 z-40 relative">
              <div className="absolute -top-[540px] md:-top-[400px] lg:-top-[400px] -left-20 md:right-58 lg:left-20">
                <img
                  src="https://static.wixstatic.com/media/11062b_b49ef0667e3c465c84214a06324c7ee8~mv2.jpeg/v1/fill/w_438,h_618,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_b49ef0667e3c465c84214a06324c7ee8~mv2.jpeg"
                  alt="fda"
                  className="w-full md:w-0 lg:w-60 h-[200px] md:h-[200px] lg:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;