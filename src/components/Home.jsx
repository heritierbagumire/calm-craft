import React from "react";
import HeroImage from "../assets/calm.jpg";
import Dfd from "../assets/davido.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="md:max-w-screen-2xl md:px-2 lg:px-5 h-auto w-full bg-white text-green-700 mt-6 md:overflow-hidden"
    >
      <div className=" mx-2 flex flex-col items-center justify-between h-auto md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <div>
            <h2 className=" text-3xl md:text-6xl lg:text-7xl font-medium mt- text-green-800 ">
              Calm <br /> Craft
            </h2>
            <p className="font-medium text-sm mt-4 md:text-auto">
              Make a Connection
            </p>
          </div>
          <div className="mt-[60%]">
            <p className="text-green-600 text-[14px] py-4 pb-2 text-start max-w-">
              Our Support Group was created as a community for individuals going
              through similar difficulties. We believe that this safe space,
              where people of all backgrounds can share with and listen to
              others, can make a huge difference. Get in touch today.
            </p>
            <button className="bg-green-800 text-white text-[12px] px-4 my-10 py-2 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full md:w-1/2 border-2 bg-background">
          <div></div>
          <div className="mt-54">
            <div className="z-0">
              <img src={HeroImage} alt="fda" className="w-full h-[730px]" />
            </div>
            <div className="-inset-10 lg:-inset-40 z-40 relative">
              <div className="absolute -top-[540px] md:-top-96 right-58">
                <img src={Dfd} alt="fda" className="w-60 h-[280px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;