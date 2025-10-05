"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import PokedexScreen from "@/components/PokedexScreen";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="min-h-screen flex flex-col relative"> {/* Add 'relative' here */}
      <header className="flex-shrink-0 mb-[3vh]">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      </header>
      
      {/* 1. Remove 'flex-1' and centering classes ('items-center justify-center') 
        2. Give it 'relative' or 'static' positioning. We'll use static by default.
      */}
      <main className="">
        {/* PokedexScreen will be absolutely positioned relative to the viewport */}
        <PokedexScreen activeSection={activeSection}/>
      </main>
      
    </div>
  );
}
