import { React, useState, useEffect } from "react";
import Circles from "@/components/Circles";
import Image from "next/image";
import { useChatbot } from "@/hooks/useChatbot";
import { useTypewriter } from "@/hooks/useTypewriter";

const HomeScreen = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [fullText, setFullText] = useState("Welcome to kinshuk's portfolio!, feel free to ask me anything about him or if you feel geeky enough, ask me to tell you a pokemon fact!");
  const [userInput, setUserInput] = useState("");
  const { sendMessage, isLoading } = useChatbot();
  const displayedText = useTypewriter(isLoading ? "" : fullText, 9);

  useEffect(() => {
    // Manage the speaking state based on the typewriter effect
    if (displayedText.length > 0 && displayedText.length < fullText.length) {
      setIsSpeaking(true);
    } else {
      setIsSpeaking(false);
    }
  }, [displayedText, fullText]);

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

  return (
    <div className="z-10 absolute flex flex-row items-center justify-center h-full w-full gap-[5%]">
      <div className="h-[90%] w-[30%]">
        {/* Circles */}
        <div className="absolute z-9 left-1/15 top-1/2 -translate-y-1/2">
          <Circles />
          {/* Speaker Image */}
          <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {isLoading ? (
              <Image
                src="/doctor_oak_thinking.png"
                width={501}
                height={771}
                alt="Doctor Oak Thinking"
                className="scale-150"
              />
            ) : isSpeaking ? (
              <Image
                src="/doctor_oak_speaking.png"
                width={501}
                height={772}
                alt="Doctor Oak Speaking"
                className="scale-150"
              />
            ) : (
              <Image
                src="/doctor_oak_passive.png"
                width={501}
                height={771}
                alt="Doctor Oak Passive"
                className="scale-150"
              />
            )}
          </div>
        </div>
      </div>

      <div className="h-[90%] w-[60%]">
        {/* Chat Box */}
        <div className="relative w-full max-w-[1000px] m-auto">
          <Image src="/chatBox2.png" width={1000} height={400} alt="Chat Box" />

          {/* overlay div on top of the image */}
          <div className="absolute inset-0 z-10 m-12 mr-20 left-[1%] text-2xl">
            {isLoading ? (
              <div className="flex items-center justify-center h-full text-center text-gray-400 animate-pulse">
                ...
              </div>
            ) : (
              displayedText
            )}
          </div>
        </div>

        <div className=" flex items-center justify-center gap-4 m-20">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 rounded-md border-0 border-b-2 border-transparent text-white focus:border-blue-500 focus:border-b-2 focus:outline-none focus:ring-0 transition-all text-2xl pb-4"
            placeholder="Type your message here..."
          />
          {userInput.trim() !== "" && (
            <button 
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-blue-500/20 text-2xl hover:bg-blue-400/30 hover:duration-200 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
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
