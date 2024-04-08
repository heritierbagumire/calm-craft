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
                  <p className="text-center md:text-start text-5xl ">
                    About Us
                  </p>
                  <div className="w-full  ">
                    <h1 className="h2 mb-4 ml-0 pt-2 text-[18px] text-center md:text-start text-green-800 font-semibold">
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

            <div className="block overflow-hidden container mx-auto px-5">
              <div className="flex justify-end border-2 my-4 md:my-5 md:pr-48 md:p-20">
                <div className="flex flex-col justify-center md:justify-center items-center">
                  <div className="max-w-md text-start">
                    <h3 className="text-xl md:text-3xl font-medium">
                      1. First catergory
                    </h3>
                    <p className="text-[12px] md:max-w-sm font-medium mt-2">
                      Calm Craft is an accepting Support Group. Everything we do
                      is founded in our core belief that no one should ever feel
                      they are alone. We all have our own life’s journey, but
                      the path shouldn’t be a lonely one. Our commitment is to
                      provide a safe space for sharing, listening, learning, and
                      supporting each other.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-start border-2 my-12 md:my-5 md:pl-0 lg:pl-48 md:py-10">
                <div className="flex flex-col justify-center md:justify-center items-center">
                  <div className="max-w-md text-start">
                    <h3 className="text-xl md:text-3xl font-medium">
                      2. First catergory
                    </h3>
                    <p className="text-[12px] md:max-w-sm font-medium mt-2">
                      Calm Craft is an accepting Support Group. Everything we do
                      is founded in our core belief that no one should ever feel
                      they are alone. We all have our own life’s journey, but
                      the path shouldn’t be a lonely one. Our commitment is to
                      provide a safe space for sharing, listening, learning, and
                      supporting each other.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end border-2 my-4 md:my-5 lg:mb-20 md:pr-48 md:p-20">
                <div className="flex flex-col justify-center md:justify-center items-center">
                  <div className="max-w-md text-start">
                    <h3 className="text-xl md:text-3xl font-medium">
                      3. First catergory
                    </h3>
                    <p className="text-[12px] md:max-w-sm font-medium mt-2">
                      Calm Craft is an accepting Support Group. Everything we do
                      is founded in our core belief that no one should ever feel
                      they are alone. We all have our own life’s journey, but
                      the path shouldn’t be a lonely one. Our commitment is to
                      provide a safe space for sharing, listening, learning, and
                      supporting each other.
                    </p>
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
