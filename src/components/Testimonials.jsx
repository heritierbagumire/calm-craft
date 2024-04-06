

import TestimonialImage01 from "../assets/davido.jpg";
import TestimonialImage02 from "../assets/features-03-image-03.png";


export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          <div className="w-auto h-auto pb-0 overflow-auto z-0 inset-0">
            <div className="container mx-auto px-2 md:px-20 lg:px-36 flex flex-col items-center justify-center">
              <div className=" max-w-8xl border-2  rounded-lg md:h-64 w-full mt-20 flex flex-col md:flex-row-reverse  md:gap-x-2 transition duration-150 ease-in-out">
                <div className="w-96 h-18 md:w-2/5 md:h-full rounded-lg px-4 pt-4">
                  <img
                    className=" w-48 h-48 mx-24 md:mx-2 lg:mx-5 md:w-48 md:h-48 object-cover rounded-full"
                    alt="profile"
                    src={TestimonialImage01}
                  />
                </div>
                <div className="w-full h-full md:w-3/5 lg:w-4/5 md:h-48 text-xs md:text-default-800 px-4 pt-10 block ">
                  <p className="text-center text-lg font-semibold"> Hofa Doe</p>
                  <p className="text-center text-pretty font-normal">
                    Today, we gather to honour the continued sacrifice of
                    survivors and remember all those we lost during the Genocide
                    against the Tutsi, which really means, people are just being
                    Today, we gather to honour the continued sacrifice of
                    
                  </p>
                </div>
              </div>
              <div className=" max-w-6xl shadow-3-strong rounded-lg md:h-80 w-full mt-20 flex flex-col  md:flex-row-reverse  md:gap-x-2 hover:contrast-50">
                <div className="w-full h-18 md:w-4/5 md:h-full rounded-lg px-4 py-4 ">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    alt="profile"
                    src={TestimonialImage02}
                  />
                </div>
                <div className="w-full h-fill md:w-3/5 md:h-48 text-xs md:text-default-800 px-4 py-2 block ">
                  <p className="text-start py-2 font-mulish font-thin">
                    Today, we gather to honour the continued sacrifice of
                    survivors and remember all those we lost during the Genocide
                    against the Tutsi, which really means, people are just being
                    targeted and killed for who they were. And nobody here, or
                    anywhere in this world, chooses what to be in that sense.
                    Nobody chose to be what tribe, race, ethnic group. There are
                    many things we choose to be. You can choose your religion,
                    but you don’t choose to be the person to be targeted. In
                    fact, even those who targeted them, have not chosen to
                    belong to that ethnic group or things like that.
                  </p>
                  <div className="flex flex-row-reverse justify-between items-center mt-7">
                    <div>
                      <div className="flex space-x-2 inset-4 text-black cursor-pointer">
                        <p className=" text-default-800">Published by: </p>
                        <p className="text-custom-blue">Manzi Cedric</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" max-w-6xl shadow-3-strong rounded-lg md:h-80 w-full mt-20 flex flex-col  md:flex-row-reverse  md:gap-x-2 hover:contrast-50">
                <div className="w-full h-18 md:w-4/5 md:h-full rounded-lg px-4 py-4 ">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    alt="profile"
                    src={TestimonialImage02}
                  />
                </div>
                <div className="w-full h-fill md:w-3/5 md:h-48 text-xs md:text-default-800 px-4 py-2 block ">
                  <p className="text-start py-2 font-mulish font-thin">
                    Today, we gather to honour the continued sacrifice of
                    survivors and remember all those we lost during the Genocide
                    against the Tutsi, which really means, people are just being
                    targeted and killed for who they were. And nobody here, or
                    anywhere in this world, chooses what to be in that sense.
                    Nobody chose to be what tribe, race, ethnic group. There are
                    many things we choose to be. You can choose your religion,
                    but you don’t choose to be the person to be targeted. In
                    fact, even those who targeted them, have not chosen to
                    belong to that ethnic group or things like that.
                  </p>
                  <div className="flex flex-row-reverse justify-between items-center mt-7">
                    <div>
                      <div className="flex space-x-2 inset-4 text-black cursor-pointer">
                        <p className=" text-default-800">Published by: </p>
                        <p className="text-custom-blue">Manzi Cedric</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
