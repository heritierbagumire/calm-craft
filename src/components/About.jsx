import React, { useEffect } from "react";
import FeatImage01 from "../assets/features-03-image-01.png";
import FeatImage02 from "../assets/features-03-image-03.png";
import FeatImage03 from "../assets/hero-image-01.jpg";
import Aos from "aos";
const About = () => {
   useEffect(() => {
     Aos.init(); // Initialize AOS
   }, []);
  return (
    <div name="about" className="w-full h-auto bg-white text-green-800">
      <section>
        <div className="max-w-8xl mx-auto px-4 sm:px-6" data-aos="fade-up">
          <div className="py-12 md:py-0  mt-6">
            {/* Section header */}
            <div className="w-full mx-0 text-start pb-8 md:pb-8">
              <div className="flex flex-col md:flex md:flex-row justify-around text-sm gap-x-4  overflow-hidden font-semibold px-2 m-2 text-green-800  my-2 py-2">
                <div className="w-full h-fill md:w-8/10">
                  <p className="text-center md:text-start text-5xl ">
                    About Us
                  </p>
                  <div className="w-full">
                    <h1 className="h2  ml-0 pt-2 text-[18px] text-center md:text-start text-green-800 font-semibold">
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

            <div
              className="block overflow-hidden container mx-auto px-5"
              data-aos="fade-up-left"
            >
              <div className="flex justify-start  my-4 md:my-5 md:pl-48 md:pt-20">
                <div className="flex flex-col justify-center md:justify-center items-center">
                  <div className="max-w-md text-start">
                    <h1 className="text-8xl">01</h1>
                    <div className="ml-16">
                      <h5 className="text-md md:text-xl my-4 font-light">
                        AI-Powered Chatbot Support
                      </h5>
                      <p className="text-[12px] md:max-w-md md:text-lg font-medium mt-2 first-letter:capitalize">
                        Users can benefit from immediate guidance and support
                        through our AI-powered chatbot, which offers
                        personalized tips, coping strategies, and encouragement
                        based on individual needs and preferences. This virtual
                        support system is available 24/7 to provide assistance
                        in managing stress effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-end  my-4 md:my-5 md:pr-48 md:p-10"
                data-aos="fade-up-right"
              >
                <div className="flex flex-col justify-center md:justify-center items-center">
                  <div className="max-w-md text-start">
                    <h1 className="text-8xl">02</h1>
                    <div className="ml-16">
                      <h5 className="text-md md:text-xl my-4 font-light">
                        Personalized Stress Assessment
                      </h5>
                      <p className="text-[12px] md:max-w-md md:text-lg font-medium mt-2 first-letter:capitalize">
                        Our platform utilizes advanced AI algorithms to conduct
                        personalized stress assessments, taking into account
                        various inputs such as behavior, mood, and physiological
                        data. This assessment helps users gain insights into
                        their stress levels and triggers, paving the way for
                        personalized stress management plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-start  my-4 md:mb-5 md:pl-56 md:p-8"
                data-aos="fade-up-right"
              >
                <div className="flex flex-col justify-center md:justify-center items-center">
                  <div className="max-w-md text-start">
                    <h1 className="text-8xl">03</h1>
                    <div className="ml-16">
                      <h5 className="text-md md:text-xl my-4 font-light">
                        Community for Shared Experiences
                      </h5>
                      <p className="text-[12px] md:max-w-md md:text-lg font-medium mt-2 first-letter:capitalize">
                        Our platform includes a community feature where users
                        can connect, share experiences, and support each other
                        in managing stress. This fosters a sense of belonging
                        and provides a supportive environment for individuals
                        seeking to engage with others who understand their
                        journey. ​
                      </p>
                    </div>
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
