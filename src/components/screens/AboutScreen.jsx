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
    <div className="z-200 h-full w-full flex flex-col gap-[3%] items-center justify-center p-2 text-white">
      {/* upper section */}
      <div className="flex h-[57%] w-[100%] gap-[1.5%] flex-row justify-center p-2">

        
        {/* radar graph */}
        <div className="w-[40%] h-[100%] bg-[#DBCBB0] rounded-[3vh] text-box-shadow flex p-4 items-center justify-center ">
          <div className="w-full h-full bg-[#FEF6EA] rounded-[3vh] flex items-center justify-center p-4 overflow-hidden">
            <RadarChart stats={initialStats} />
          </div>
        </div>


        {/* stats */}
        <div className="w-[40%] h-[100%] p-4 bg-[#DBCBB0] rounded-[3vh] text-box-shadow">
          <div className="w-[100%] h-[100%] bg-[#FEF6EA] rounded-[3vh] p-10">
            <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 items-center">
              <span className="text-black font-semibold text-[1.8rem]">Name</span>
              <span className="text-black text-[1.8rem]">Kinshuk Saini</span>

              <span className="text-black font-semibold text-[1.8rem]">Age</span>
              <span className="text-black text-[1.8rem]">20 (3rd year)</span>

              <span className="text-black font-semibold text-[1.8rem]">
                Rarity
              </span>
              <div className="flex gap-8">
                <span className="text-[1.8rem] bg-[#DE4141] text-white px-[4%] rounded-[1vh]">
                  Mythic
                </span>
              </div>

              <span className="text-black font-semibold text-[1.8rem]">
                Region
              </span>
              <span className="text-black text-[1.8rem]">New Delhi, India</span>

              <span className="text-black font-semibold text-[1.8rem]">type</span>
              <div className="flex gap-8">
                <span className="text-[1.8rem] bg-[#8DCA77] text-white px-[4%] rounded-[1vh]">
                  Web Dev
                </span>
                <span className="text-[1.8rem] bg-[#4185DE] text-white px-[4%] rounded-[1vh]">
                  AI & DL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lower section */}
      <div className=" h-[43%] w-[100%] p-2 flex flex-row justify-center gap-[5%]">
        <div className="w-[81.5%] h-[97%] bg-[#DBCBB0] rounded-[3vh] text-box-shadow p-7 px-12 text-[1.5rem] text-[#40382B]">
"KINSHUK SAINI, THE MYTHIC-CLASS DEVELOPER. THIS POKÉMON SPECIALIZES IN FULL-STACK WEB DEVELOPMENT USING REACT AND NEXT.JS, WHILE SIMULTANEOUSLY HARNESSING THE POWER OF GENERATIVE AI AND DEEP LEARNING. NOTABLE ABILITIES INCLUDE RAPID PROTOTYPING, SCALABLE ARCHITECTURE, AND ALGORITHMIC PRECISION. A GO-TO FOR HACKATHONS AND PROJECTS REQUIRING BOTH CREATIVITY AND COMPLEX PROBLEM-SOLVING."
        </div>
      </div>
    </div>
  );
};
export default AboutScreen;
