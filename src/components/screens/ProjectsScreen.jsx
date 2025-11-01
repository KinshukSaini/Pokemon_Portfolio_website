import { useState, useEffect } from "react";
import Image from "next/image";
const Projects = [
  {
    id: 1,
    title: "AI Assisted Legal Document Editor for UK's Legislation",
    subtitle: "VITE + CSS + MongoDB + AWS Cloud Services",
    description:
      "A web application that leverages AI to assist users in editing legal documents, ensuring accuracy and compliance with the UK's legislation. Advanced RAG pipelines and techniques are utilized to provide context-aware suggestions and corrections. it supports over 28 document templates i.e. NDA, Contract Agreement, etc. along with this it also provides an AI chatbot-copilot to help users with their legal queries related to the document being edited.",
    image: "/Pokeball.png",
  },
  {
    id: 2,
    title: "AI ThoughtChain – Conversational Interface with Thought Graphs",
    subtitle: "Next.js + D3.js + RAG/Langgraph + Python/FastAPI + Vercel + ChromaDB",
    description:
      "Built a full-stack conversational AI interface exploring ChatGPT functionality with visual cognitive mapping. Designed an interactive D3.js-based thought graph to visualize conversation flow and reasoning paths. Implemented contextual memory using embeddings to reconnect prior topics and visualize semantic trails. Added features like conversation collapsing, graph export, and multi-model switching to enhance usability.",
    image: "/file.svg",
  },
  {
    id: 3,
    title: "AyushBridge",
    subtitle: "Next.js/React + TailwindCSS + RAG/LangTech + Python/FastAPI + FHIR R4/PostgreSQL + Chrome Extension/Electron",
    description: "AyushBridge links AYUSH (traditional Indian) diagnosis with modern healthcare standards (FHIR R4 and ICD-11).It solves the problem of data interoperability by providing dual coding—automatically mapping AYUSH diagnoses to ICD-11 using a Vector DB and Semantic Search (RAG). This functions as a 'Google Translate' for medical codes.The solution is delivered as a user-friendly Chrome Extension and an Electron-based desktop overlay to help healthcare professionals quickly create FHIR-compliant audit logs.",
    image: "/school-bag.svg",
  },
  // add more items here
];

const Experience = [
  {
    id: 1,
    title: "AI and Software Engineering - intern @ LexleyAI LLC - 7 Months",
    subtitle: "VITE (Js + css) + MongoDB + AWS + LangChain + RAGs (retreival augmented generation) + Gemini API",
    description:
      "Contributed to the development of a legal technology platform, serving as a full-stack engineer and AI developer. My primary contribution was leading the creation of a legal AI chatbot using LangChain and Python, applying Retrieval-Augmented Generation (RAG) to parse UK legislation, ensuring responses were reliable, contextually relevant, and source-backed. I successfully integrated and optimized this ChatGPT-like interface for a production environment. Concurrently, I enhanced the core product by designing a dynamic interface for legal document automation, contributing to the development of 20+ preview-rendered templates and adaptive questionnaires using React, Node.js, JSON, and a modular JS architecture.",
    image: "/lexley.png",
  },
  {
    id: 2,
    title: "Freelance Web Developer for Envisage multimanufacturer - 2 months",
    subtitle: "NEXT.js + TailwindCSS",
    description:
      "Contributed to the development of a legal technology platform, serving as a full-stack engineer and AI developer. My primary contribution was leading the creation of a legal AI chatbot using LangChain and Python, applying Retrieval-Augmented Generation (RAG) to parse UK legislation, ensuring responses were reliable, contextually relevant, and source-backed. I successfully integrated and optimized this ChatGPT-like interface for a production environment. Concurrently, I enhanced the core product by designing a dynamic interface for legal document automation, contributing to the development of 20+ preview-rendered templates and adaptive questionnaires using React, Node.js, JSON, and a modular JS architecture.",
    image: "/Envisage.jpg",
  },
  {
    id: 3,
    title: "AWS Cloud Core Member @ GGSIPU edc - 1 Year",
    subtitle: "Artificial Intelligence + Machine learning + deep learning + RAGs (retreival augmented generation)",
    description:
      "A key member in organizing and delivering technical workshops and events on Amazon Web Services (AWS), enhancing practical cloud computing skills for club members. Assisted in curriculum development and resource creation, promoting knowledge sharing on topics such as EC2, S3, Lambda, and IAM.",
    image: "/aws.png",
  }
  // add more items here
];

export default function ProjectsScreen({ experience = Experience, projects = Projects }) {
  const [index, setIndex] = useState(0);
  const [isProjects, setIsProjects] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for none
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const currentData = isProjects ? projects : experience;
  
  const prev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((i) =>
        currentData.length ? (i - 1 + currentData.length) % currentData.length : 0
      );
      setIsAnimating(false);
    }, 300);
  };
  
  const next = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((i) => (currentData.length ? (i + 1) % currentData.length : 0));
      setIsAnimating(false);
    }, 300);
  };
  
  const goto = (i) => {
    if (isAnimating) return;
    setDirection(i > index ? 1 : -1);
    setIsAnimating(true);
    setTimeout(() => {
      setIndex(i);
      setIsAnimating(false);
    }, 300);
  };

  const currentItem = currentData.length ? currentData[index] : null;

  return (
    <section className="w-full">
      <div className="absolute z-20 top-6 left-1/2 -translate-x-1/2 flex gap-[10vw]">
        {/* Button 1 */}
        <button
          type="button"
          onClick={() => {
            setIsProjects(true);
            setIndex(0);
          }}
          aria-pressed={isProjects}
          className={`${
            isProjects ? "bg-[#DBCBB0]" : "bg-[#C0AD8F] translate-y-1"
          } w-[30vw] h-[80px] max-w-[600px] flex items-center justify-center text-center text-[30px] rounded-[2vh] cursor-pointer text-box-shadow`}
        >
          PROJECTS
        </button>

        {/* Button 2 */}
        <button
          type="button"
          onClick={() => {
            setIsProjects(false);
            setIndex(0);
          }}
          aria-pressed={!isProjects}
          className={`${
            !isProjects ? "bg-[#DBCBB0]" : "bg-[#C0AD8F] translate-y-1"
          } w-[30vw] h-[80px] max-w-[600px] flex items-center justify-center text-center text-[30px] rounded-[2vh] cursor-pointer text-box-shadow`}
        >
          EXPERIENCE
        </button>
      </div>

      {/* Left vertical nav */}
      <button
        onClick={prev}
        aria-label="Previous project"
        className="absolute left-15 top-56/100 -translate-y-1/2 bg-[#DBCBB0] sm:w-[82px] h-[65%] rounded-xl flex items-center justify-center text-box-shadow z-50 transition-transform duration-100 active:translate-y-[calc(-50%+4px)] hover:brightness-95"
      >
        <span className="text-2xl font-bold transform text-gray-700">
          <img src="/left-nav.png" alt="Left Arrow" width={24} height={24} />
        </span>
      </button>

      {/* Right vertical nav */}
      <button
        onClick={next}
        aria-label="Next project"
        className="absolute right-15 top-56/100 -translate-y-1/2 bg-[#DBCBB0] sm:w-[82px] h-[65%] rounded-xl flex items-center justify-center text-box-shadow z-50 transition-transform duration-100 active:translate-y-[calc(-50%+4px)] hover:brightness-95"
      >
        <span className="text-2xl font-bold transform rotate-180 text-gray-700 ">
          <img src="/left-nav.png" alt="Right Arrow" width={24} height={24} />
        </span>
      </button>

      {/* Big center card */}
      <div 
        className={`bg-[#DBCBB0] rounded-[2vh] w-[75%] h-[70%] shadow-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 mt-8 z-49 text-box-shadow transition-all duration-200 ${
          isAnimating 
            ? direction === 1 
              ? 'opacity-0 translate-x-[calc(-50%+100px)]' 
              : 'opacity-0 translate-x-[calc(-50%-100px)]'
            : 'opacity-100'
        }`}
      >
        {currentItem ? (
          <div className="h-full flex flex-col sm:flex-row gap-4">
              
              <div className="sm:w-1/3 flex items-center justify-center">
                {currentItem.image ? (
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="max-h-90 object-contain"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-200 rounded-md" />
                )}
              </div>

              <div className="sm:w-2/3">
                <h3 className="text-[2rem] font-extrabold mb-1">
                  {currentItem.title}
                </h3>
                <p className="text-xl text-gray-600 font-semibold mb-3">
                  {currentItem.subtitle}
                </p>
                <p className="text-[#40382B] text-[1.5rem] leading-relaxed">
                  {currentItem.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-700">
              No {isProjects ? 'projects' : 'experience'} to show
            </div>
          )}

            {/* subtle drop shadow under the card removed per inspect request */}
        </div>

        {/* Dots pagination */}
        <div className="flex absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center justify-center gap-3 mt-6">
          {isProjects ? (
            projects.length ? (
              projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => goto(i)}
                  aria-label={`Go to ${p.title}`}
                  className={`w-5 h-5 rounded-full transition-colors ${
                    i === index ? "bg-yellow-500 w-6 h-5" : "bg-white/70"
                  }`}
                />
              ))
            ) : (
              <div className="w-3 h-3 rounded-full bg-white/70" />
            )
          ) : (
            Experience.length ? (
              Experience.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => goto(i)}
                  aria-label={`Go to ${p.title}`}
                  className={`w-5 h-5 rounded-full transition-colors ${
                    i === index ? "bg-yellow-500 w-6 h-5" : "bg-white/70"
                  }`}
                />
              ))
            ) : (
              <div className="w-3 h-3 rounded-full bg-white/70" />
            )
          )}
        </div>
    </section>
  );
}
