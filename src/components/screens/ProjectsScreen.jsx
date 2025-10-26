import { useState, useEffect } from "react";
import Image from "next/image";
const sampleProjects = [
  {
    id: 1,
    title: "Pokedex UI",
    subtitle: "React + Tailwind",
    description:
      "A Pokemon-themed portfolio UI with a carousel-style project viewer, animations, and audio toggles.",
    image: "/Pokeball.png",
  },
  {
    id: 2,
    title: "Portfolio Website",
    subtitle: "Next.js",
    description:
      "Personal portfolio built with Next.js, responsive design, and custom animations.",
    image: "/file.svg",
  },
  {
    id: 3,
    title: "Small Game",
    subtitle: "Canvas / JS",
    description: "Mini-game demo embedded as a project example.",
    image: "/school-bag.svg",
  },
  // add more items here
];

const sampleExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    subtitle: "React + Tailwind",
    description:
      "A Pokemon-themed portfolio UI with a carousel-style project viewer, animations, and audio toggles.",
    image: "/Pokeball.png",
  },
  {
    id: 2,
    title: "AWS Cloud Core ",
    subtitle: "Next.js",
    description:
      "Personal portfolio built with Next.js, responsive design, and custom animations.",
    image: "/file.svg",
  },
  {
    id: 3,
    title: "Freelance Developer",
    subtitle: "Canvas / JS",
    description: "Mini-game demo embedded as a project example.",
    image: "/school-bag.svg",
  },
  // add more items here
];

export default function ProjectsScreen({ experience = sampleExperience, projects = sampleProjects }) {
  const [index, setIndex] = useState(0);
  const [isProjects, setIsProjects] = useState(true);

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
  
  const prev = () =>
    setIndex((i) =>
      currentData.length ? (i - 1 + currentData.length) % currentData.length : 0
    );
  const next = () =>
    setIndex((i) => (currentData.length ? (i + 1) % currentData.length : 0));
  const goto = (i) => setIndex(i);

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
      <div className="bg-[#DBCBB0] rounded-[2vh] w-[75%] h-[70%] shadow-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 mt-8 z-49 text-box-shadow">
        {currentItem ? (
          <div className="h-full flex flex-col sm:flex-row gap-4">
              
              <div className="sm:w-1/3 flex items-center justify-center">
                {currentItem.image ? (
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="max-h-40 object-contain"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-200 rounded-md" />
                )}
              </div>

              <div className="sm:w-2/3">
                <h3 className="text-2xl font-extrabold mb-1">
                  {currentItem.title}
                </h3>
                <p className="text-sm text-gray-600 font-semibold mb-3">
                  {currentItem.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
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
            sampleExperience.length ? (
              sampleExperience.map((p, i) => (
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
