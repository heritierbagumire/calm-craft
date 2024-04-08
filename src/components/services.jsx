import React from 'react'

const services = () => {
  return (
    <div
      name="services"
      className="w-full h-auto bg-white text-green-800"
      data-aos="fade-up-left"
    >
          <div className='max-w-8xl mx-auto px-4 sm:px-6'>
          <div className="flex overflow-hidden container mx-auto px-5">
              <div className="flex justify-start border-2 my-4 md:my-5 md:pl-48 md:pt-20">
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
 
            </div>
          </div>
    </div>
  );
}

export default services