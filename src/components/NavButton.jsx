"use client"

import React, { useState } from 'react'

const NavButton = ({ text, link, isActive, onClick, logo }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  const getTransform = () => {
    // if (isPressed) return "transform -translate-y-2 bg-[#B37137]"; // Being pressed down
    if (isActive) return "transform -translate-y-1"; // Active but not pressed
    return ""; // Default state
  };

  const svgColor = () => {
    if (isPressed) return "#f4fcc0"; // Light cream 
    if (isActive) return "#f4fcc0"; // Light cream 
    return "#2D1810"; 
  }
  const renderLogo = () => {
    if(!logo) return text;
    const color = svgColor();
    
    return React.cloneElement(logo, { 
      fill: "none", 
      stroke: color,
      style: { stroke: color },
      className: `size-[6vh]`
    });
  }
  return (
    <button 
      onClick={() => onClick(text)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className="relative h-[13vh] w-[13vw]"
    >
      <div 
        className={`absolute inset-0 rounded-br-2xl rounded-bl-2xl shadow-[4px_7px_0.1px_7px_#854D1D] transition-all duration-100 ${getTransform()} ${
          isActive 
            ? "bg-[#c39032] text-black" 
            : "bg-[#D9B458] text-black"
        }`}
      >
        <span className="flex items-center justify-center h-full w-full">{renderLogo()}</span>
      </div>
    </button>
  );
};

export default NavButton;