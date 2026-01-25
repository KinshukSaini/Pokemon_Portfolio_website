import { React, useState, useEffect, useRef } from "react";
import Circles from "@/components/Circles";
import Image from "next/image";
import { useChatbot } from "@/hooks/useChatbot";
import { useTypewriter } from "@/hooks/useTypewriter";

const HomeScreen = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [fullText, setFullText] = useState("Welcome to kinshuk's portfolio!, feel free to ask me anything about him or if you feel geeky enough, ask me to tell you a pokemon fact!");
  const [userInput, setUserInput] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const textContainerRef = useRef(null);
  const { sendMessage, isLoading } = useChatbot();
  
  const CHARS_PER_PAGE = 200; // Approximate characters that fit
  const pages = [];
  if (fullText) {
    for (let i = 0; i < fullText.length; i += CHARS_PER_PAGE) {
      pages.push(fullText.slice(i, i + CHARS_PER_PAGE));
    }
  }
  const currentPageText = pages[currentPage] || "";
  const hasMorePages = currentPage < pages.length - 1;

  const { displayedText, isFinished, finish } = useTypewriter(isLoading ? "" : currentPageText, 9);

  useEffect(() => {
    // Manage the speaking state based on the typewriter effect
    if (!isFinished && displayedText.length > 0) {
      setIsSpeaking(true);
    } else {
      setIsSpeaking(false);
    }
  }, [displayedText, isFinished]);

  // Reset to first page when new text arrives
  useEffect(() => {
    setCurrentPage(0);
  }, [fullText]);

  const handleSendMessage = async () => {
    if (isLoading || !userInput.trim()) return;
    setFullText(""); // Clear previous text immediately
    const response = await sendMessage(userInput);
    setFullText(response || "I'm at a loss for words...");
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleInteraction = () => {
    if (!isFinished) {
      // If typing, finish the current page instantly
      finish();
    } else if (hasMorePages) {
      // If finished and more pages exist, go to the next page
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="z-10 absolute flex flex-col xl:flex-row items-center justify-center h-full w-full gap-[5%]">
      <div className="h-[40%] xl:h-[90%] w-[80%] xl:w-[30%]">
        {/* Circles */}
        <div className="absolute z-9 left-1/2 xl:left-1/15 top-1/4 xl:top-1/2 -translate-x-1/2 xl:-translate-x-0 -translate-y-1/2">
          <Circles />
          {/* Speaker Image */}
          <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {isLoading ? (
              <Image
                src="/doctor_oak_thinking.png"
                width={501}
                height={771}
                alt="Doctor Oak Thinking"
                className="scale-110 xl:scale-150"
              />
            ) : isSpeaking ? (
              <Image
                src="/doctor_oak_speaking.png"
                width={501}
                height={772}
                alt="Doctor Oak Speaking"
                className="scale-110 xl:scale-150"
              />
            ) : (
              <Image
                src="/doctor_oak_passive.png"
                width={501}
                height={771}
                alt="Doctor Oak Passive"
                className="scale-110 xl:scale-150"
              />
            )}
          </div>
        </div>
      </div>

      <div className="h-[60%] xl:h-[90%] w-[90%] xl:w-[60%]">
        {/* Chat Box */}
        <div 
          className="relative w-full max-w-[1000px] m-auto cursor-pointer"
          onClick={handleInteraction}
        >
          <Image src="/chatBox2.png" width={1000} height={400} alt="Chat Box" />

          {/* overlay div on top of the image */}
          <div ref={textContainerRef} className="absolute inset-0 z-10 m-8 xl:m-12 mr-16 xl:mr-20 left-[1%] text-xl xl:text-2xl overflow-hidden">
            {isLoading ? (
              <div className="flex items-center justify-center h-full text-center text-gray-400 animate-pulse">
                ...
              </div>
            ) : (
              <>
                {displayedText}
                {isFinished && hasMorePages && (
                  <div className="absolute bottom-2 right-4 animate-bounce">
                    <span className="text-3xl xl:text-4xl text-gray-700">▼</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 m-10 xl:m-20">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 rounded-md border-0 border-b-2 border-transparent text-white focus:border-blue-500 focus:border-b-2 focus:outline-none focus:ring-0 transition-all text-xl xl:text-2xl pb-4"
            placeholder="ask something..."
          />
          {userInput.trim() !== "" && (
            <button 
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-blue-500/20 text-xl xl:text-2xl hover:bg-blue-400/30 hover:duration-200 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "..." : "GO"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
