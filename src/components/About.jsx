import React from "react";
import FeatImage01 from "../assets/features-03-image-01.png";
import FeatImage02 from "../assets/features-03-image-03.png";
import FeatImage03 from "../assets/hero-image-01.jpg";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-white text-green-800"
      data-aos="fade-up-left"
    >
      <section>
        <div className="max-w-8xl mx-auto px-4 sm:px-6" data-aos="fade-up">
          <div className="py-12 md:py-0  mt-6">
            {/* Section header */}
            <div className="w-full mx-0 text-start pb-8 md:pb-16">
              <div className="flex flex-col md:flex md:flex-row justify-around text-sm gap-x-4  overflow-hidden font-semibold px-2 m-2 text-green-800  my-4 py-4 ">
                <div className="w-full h-fill md:w-8/10">
                  <p className="text-start text-5xl">About Us</p>
                  <div className="w-full  ">
                    <h1 className="h2 mb-4 ml-0 pt-2 text-[18px] text-green-800 font-semibold">
                      Who we are
                    </h1>
                  </div>
                </div>
                <div className="md:w-full pb-4 ml-2">
                  <p className="text-[12px] text-green-800 mr-0 text-center md:text-start max-w-full  md:max-w-sm ">
                    Calm Craft is an accepting Support Group. Everything we do
                    is founded in our core belief that no one should ever feel
                    they are alone. We all have our own life’s journey, but the
                    path shouldn’t be a lonely one. Our commitment is to provide
                    a safe space for sharing, listening, learning, and
                    supporting each other.
                  </p>
                  <button className="hidden md:block rounded-0 mt-6 rounded-3xl hover:border hover:border-green-700  hover:bg-white border text-[12px] transition duration-300 ease-in-out hover:text-green-800 px-10 md:px-2 lg:px-10 lg:-mr-12 py-2 bg-green-800 text-white hover:scale-105 hover:ease-in-out ">
                    View more
                  </button>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="grid gap-20 grid-flow-row border-2 border-black">
              {/* 1st item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up"
                ></div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                      More speed. Less spend
                    </div>
                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                    <p
                      className="text-xl text-gray-400 mb-4"
                      data-aos="fade-up"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Duis aute irure dolor in reprehenderit</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Excepteur sint occaecat</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Amet consectetur adipiscing elit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2nd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                  data-aos="fade-up"
                >
                  <img
                    className="max-w-full hidden mx-auto md:max-w-none h-auto"
                    src={FeatImage02}
                    width={540}
                    height={405}
                    alt="Features 02"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-left"
                >
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                      More speed. Less spend
                    </div>
                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                    <p className="text-xl text-gray-400 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Duis aute irure dolor in reprehenderit</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Excepteur sint occaecat</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Amet consectetur adipiscing elit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3rd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up"
                >
                  <img
                    className="max-w-full hidden mx-auto md:max-w-none h-auto"
                    src={FeatImage03}
                    width={540}
                    height={405}
                    alt="Features 03"
                  />
                </div>
                {/* Content */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                      More speed. Less spend
                    </div>
                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                    <p className="text-xl text-gray-400 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Duis aute irure dolor in reprehenderit</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Excepteur sint occaecat</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Amet consectetur adipiscing elit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
