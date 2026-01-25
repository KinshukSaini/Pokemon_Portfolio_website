import React from "react";
import { RadarChart } from "../RadarGraph";

const AboutScreen = () => {
  const initialStats = [
    { label: "Web Development", value: 48, max: 50 },
    { label: "ML & DL", value: 44, max: 50 },
    { label: "Data Science", value: 44, max: 50 },
    { label: "Problem Solving", value: 50, max: 50 },
    { label: "DS & Algo", value: 47, max: 50 },
    { label: "AI RAGs", value: 49, max: 50 },
  ];

  return (
    <div className="z-200 h-full w-full flex flex-col gap-[3%] items-center lg:justify-center justify-start p-2 text-white lg:overflow-hidden overflow-auto">
      {/* upper section */}
      <div className="flex lg:h-[57%] h-auto w-full lg:gap-[1.5%] gap-4 lg:flex-row flex-col justify-center p-2">

        
        {/* radar graph */}
        <div className="lg:w-[40%] w-full lg:h-[100%] h-auto bg-[#DBCBB0] rounded-[3vh] text-box-shadow flex p-4 items-center justify-center">
          <div className="lg:w-full lg:h-full w-[340px] h-[340px] bg-[#FEF6EA] rounded-[3vh] flex items-center justify-center lg:p-4 p-3 lg:overflow-hidden overflow-auto">
            <RadarChart stats={initialStats} size={280} labelScale={0.9} />
          </div>
        </div>

        {/* stats */}
        <div className="lg:w-[40%] w-full lg:h-[100%] h-auto p-4 bg-[#DBCBB0] rounded-[3vh] text-box-shadow">
          {/* text field */}
          <div className="w-full lg:h-[100%] h-auto bg-[#FEF6EA] rounded-[3vh] lg:p-10 p-6 overflow-auto">
            <div className="grid lg:grid-cols-[auto_1fr] grid-cols-1 gap-x-8 lg:gap-y-3 gap-y-4 items-start">
              <span className="text-black font-semibold lg:text-[1.8rem] text-[1.2rem]">Name:</span>
              <span className="text-black lg:text-[1.8rem] text-[1.2rem]">Kinshuk Saini</span>

              <span className="text-black font-semibold lg:text-[1.8rem] text-[1.2rem]">Age:</span>
              <span className="text-black lg:text-[1.8rem] text-[1.2rem]">20 (3rd year)</span>

              <span className="text-black font-semibold lg:text-[1.8rem] text-[1.2rem]">
                Rarity:
              </span>
              <div className="flex gap-4 lg:gap-8">
                <span className="lg:text-[1.8rem] text-[1.2rem] bg-[#DE4141] text-white px-[4%] rounded-[1vh]">
                  Mythic:
                </span>
              </div>

              <span className="text-black font-semibold lg:text-[1.8rem] text-[1.2rem]">
                Region:
              </span>
              <span className="text-black lg:text-[1.8rem] text-[1.2rem]">New Delhi, India</span>

              <span className="text-black font-semibold lg:text-[1.8rem] text-[1.2rem]">type:</span>
              <div className="flex gap-4 lg:gap-8">
                <span className="lg:text-[1.8rem] text-[1.2rem] bg-[#8DCA77] text-white px-[4%] rounded-[1vh]">
                  Web Dev
                </span>
                <span className="lg:text-[1.8rem] text-[1.2rem] bg-[#4185DE] text-white px-[4%] rounded-[1vh]">
                  AI & DL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lower section */}
      <div className="lg:h-[43%] h-auto w-full p-2 flex lg:flex-row flex-col justify-center lg:gap-[5%] gap-4">
        <div className="lg:w-[81.5%] w-full lg:h-[97%] h-auto lg:bg-[#DBCBB0] rounded-[3vh] lg:text-box-shadow lg:p-7 lg:px-12 p-2 lg:text-[#40382B] text-white lg:text-[1.5rem] text-[1rem] overflow-auto">
"KINSHUK SAINI, THE MYTHIC-CLASS DEVELOPER. THIS POKÉMON SPECIALIZES IN FULL-STACK WEB DEVELOPMENT USING REACT AND NEXT.JS, WHILE SIMULTANEOUSLY HARNESSING THE POWER OF GENERATIVE AI AND DEEP LEARNING. NOTABLE ABILITIES INCLUDE RAPID PROTOTYPING, SCALABLE ARCHITECTURE, AND ALGORITHMIC PRECISION. A GO-TO FOR HACKATHONS AND PROJECTS REQUIRING BOTH CREATIVITY AND COMPLEX PROBLEM-SOLVING."
        </div>
      </div>
    </div>
  );
};
export default AboutScreen;
