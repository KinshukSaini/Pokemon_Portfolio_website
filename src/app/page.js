"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import PokedexScreen from "@/components/PokedexScreen";
import { useState, useRef, useEffect } from "react";
import { AudioContext } from "./context";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");
  const audioRef = useRef(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [mute, setMute] = useState(false);
  // Initialize audio on mount
  useEffect(() => {
    if (audioRef.current && !mute) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  // Handle user interaction to enable autoplay
  useEffect(() => {
    const handleUserInteraction = () => {
      setHasUserInteracted(true);
    };
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  // Play audio when user interacts or when audio is ready
  useEffect(() => {
    if (audioRef.current && hasUserInteracted) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
  }, [hasUserInteracted]);

  // Handle audio changes when activeSection changes
  useEffect(() => {
    const getAudioSrc = () => {
      switch (activeSection) {
        case "Home":
          return "/Title_Screen.mp3";
        case "About":
          return "/Cerulean_City.mp3";
        case "Projects":
          return "/1-05. Littleroot Town.mp3";
        case "Contact":
          return "/Ending.mp3";
        default:
          return "/Title_Screen.mp3";
      }
    };

    if (audioRef.current) {
      const newSrc = getAudioSrc();
      if (!audioRef.current.src.endsWith(newSrc)) {
        audioRef.current.src = newSrc;
        if (hasUserInteracted) {
          audioRef.current.play().catch((error) => {
            console.error("Audio play failed:", error);
          });
        }
      }
    }
  }, [activeSection, hasUserInteracted]);

  return (
    <AudioContext.Provider value={{ mute, setMute }}>
      <div className="min-h-screen flex flex-col relative">
        <header className="flex-shrink-0 mb-[3vh]">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
        </header>
        
        <main>
          <PokedexScreen activeSection={activeSection}/>
        </main>

        {/* Audio element at page level */}
        <audio
          ref={audioRef}
          style={{ display: "none" }}
          loop
          src="/Title_Screen.mp3"
          muted={mute}
        />
      </div>
    </AudioContext.Provider>
  );
}
