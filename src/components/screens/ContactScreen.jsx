import React, { useState } from "react";
import Image from "next/image";
const ContactScreen = () => {
  return (
    <div className="z-90 p-[1%] pt-[2%] lg:h-[90%] h-auto w-full max-w-[1000px] lg:bg-[#DBCBB0] flex lg:flex-row flex-col items-center lg:justify-around justify-start rounded-[2vh] lg:text-box-shadow relative overflow-hidden">
      <Image src="masking_tape.svg" width={75} height={25} alt="Masking Tape" className="lg:absolute lg:-translate-x-1/2 lg:left-1/10 lg:top-1/7 z-99 lg:block hidden" />

      <div className="lg:bg-[#DBCBB0] lg:h-full h-auto w-full flex flex-col items-center lg:items-start">
        <div className="bg-gray-200 lg:left-1/13 lg:top-3/10 lg:-translate-y-1/4 lg:h-[35vh] lg:w-[35vh] h-[28vh] w-[28vh] lg:absolute lg:relative relative">
          <Image
            src="/demo_profile.png"
            width={500}
            height={500}
            alt="Contact Me"
            className="object-cover h-full w-full origin-top-left lg:-rotate-[7deg]"
          />
        </div>

        <div className="flex flex-row flex-wrap lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-1/8 gap-3 lg:gap-[2vh] justify-center m-4">
          <div className="bg-[#E2BE82] lg:h-[80px] lg:w-[90px] h-[56px] w-[64px] rounded-[1.7vh] flex items-center justify-center icon-box-shadow">
            <Image src="/git.svg" width={40} height={40} alt="GitHub" />
          </div>
          <div className="bg-[#E2BE82] lg:h-[80px] lg:w-[90px] h-[56px] w-[64px] rounded-[1.7vh] flex items-center justify-center icon-box-shadow">
            <Image src="/linkedin.svg" width={40} height={40} alt="LinkedIn" />
          </div>
          <div className="bg-[#E2BE82] lg:h-[80px] lg:w-[90px] h-[56px] w-[64px] rounded-[1.7vh] flex items-center justify-center icon-box-shadow">
            <Image src="/gmail.svg" width={40} height={40} alt="Gmail" />
          </div>
          <div className="bg-[#E2BE82] lg:h-[80px] lg:w-[90px] h-[56px] w-[64px] rounded-[1.7vh] flex items-center justify-center icon-box-shadow">
            <Image src="/X_logo.svg" width={40} height={40} alt="X.com" />
          </div>
        </div>
      </div>
      {/* ending phrase */}
      <div className="lg:text-[#40382B] text-white lg:w-[43%] w-full lg:absolute lg:right-1/6 lg:translate-x-1/4 lg:top-1/4 lg:-translate-y-1/4 lg:text-[1.8rem] text-[1rem] px-4 lg:pr-4 text-center lg:text-left mt-4 lg:mt-0">
        I am actively seeking new project opportunities and am eager to connect with like-minded individuals and teams. If you have a project in mind or an idea to discuss, let's get in touch!
      </div>
    </div>
  );
};

export default ContactScreen;
