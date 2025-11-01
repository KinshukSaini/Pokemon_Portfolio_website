import React, { useState } from "react";
import Image from "next/image";
const ContactScreen = () => {
  return (
    <div className="z-90 p-[1%] pt-[2%] h-[90%] w-[65%] gap-auto bg-[#DBCBB0] flex items-center justify-around rounded-[2vh] text-box-shadow relative">
      <Image src="masking_tape.svg" width={75} height={25} alt="Masking Tape" className="absolute -translate-x-1/2 left-1/12 top-1/8 z-99" />

      <div className="bg-[#DBCBB0] h-full w-[38%] flex flex-col">
        <div className="bg-gray-200 left-1/13 top-3/10 -translate-y-1/4 h-[35vh] w-[35vh] absolute">
          <Image
            src="/demo_profile.png"
            width={500}
            height={500}
            alt="Contact Me"
            className="object-cover h-full w-full origin-top-left -rotate-[7deg]"
          />
        </div>

        <div className="flex flex-row absolute left-1/2 -translate-x-1/2 bottom-1/8 ">
          <div className="bg-[#E2BE82] h-[80px] w-[90px] rounded-[1.7vh] flex items-center justify-center icon-box-shadow mx-[2vh]">
            <Image src="/git.svg" width={50} height={50} alt="GitHub" />
          </div>
          <div className="bg-[#E2BE82] h-[80px] w-[90px] rounded-[1.7vh] flex items-center justify-center icon-box-shadow mx-[2vh]">
            <Image src="/linkedin.svg" width={50} height={50} alt="LinkedIn" />
          </div>
          <div className="bg-[#E2BE82] h-[80px] w-[90px] rounded-[1.7vh] flex items-center justify-center icon-box-shadow mx-[2vh]">
            <Image src="/gmail.svg" width={50} height={50} alt="Gmail" />
          </div>
          <div className="bg-[#E2BE82] h-[80px] w-[90px] rounded-[1.7vh] flex items-center justify-center icon-box-shadow mx-[2vh]">
            <Image src="/X_logo.svg" width={50} height={50} alt="X.com" />
          </div>
        </div>
      </div>

      <div className="bg-[#DBCBB0] text-[#40382B] -[50%] w-[43%] absolute right-1/6 translate-x-1/4 top-1/4 -translate-y-1/4 text-[1.8rem]">
      I am actively seeking new project opportunities and am eager to connect with like-minded individuals and teams. If you have a project in mind or an idea to discuss, let's get in touch! 
      </div>
    </div>
  );
};

export default ContactScreen;
