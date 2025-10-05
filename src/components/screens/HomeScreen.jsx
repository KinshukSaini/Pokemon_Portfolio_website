import React from "react";
import Circles from "@/components/Circles";
const HomeScreen = () => {
  return (
    <div className="relative z-10 absolute inset-0 h-full w-full flex items-center justify-center">
      <div className="absolute z-9">
        <Circles />
      </div>
      <div className="absolute z-11">
          
      </div>
    </div>
  );
};

export default HomeScreen;
