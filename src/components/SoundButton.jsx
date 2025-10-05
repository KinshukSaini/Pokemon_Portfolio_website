"use client"

import React, { useState } from 'react'

const SoundButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleToggle = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div>
      <button 
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
        className={`text-black m-[2vh] mr-[4vh] h-[10vh] w-[10vh] rounded-[2vh] leading-relaxed items-center flex justify-center transition-all duration-200 ${
          isPressed 
            ? 'bg-[#B37137] shadow-[4px_7px_0.1px_7px_#8B5A2B] translate-y-0.5 translate-x-0.5' 
            : 'bg-[#D9B458] shadow-[4px_7px_0.1px_7px_#B37137]'
        }`}
      >
        {isPressed ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f4fcc0" className="size-[6vh]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg> ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-[6vh]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        )}
      </button>
    </div>
  )
}

export default SoundButton
