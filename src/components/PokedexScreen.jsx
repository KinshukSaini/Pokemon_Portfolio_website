import React, { useState, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ContactScreen from "./screens/ContactScreen";

// Helper function to generate a single star's data
const generateStar = (key, maxLeft, maxDelay) => ({
  key,
  left: `${Math.random() * maxLeft}%`,
  top: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * maxDelay}s`,
});

const PokedexScreen = ({ activeSection }) => {
  // 1. Initialize state to hold the star data (empty array for SSR stability)
  const [starLayers, setStarLayers] = useState({
    fast: [],
    medium: [],
    slow: [],
  });

  // 2. Use useEffect to generate the random data ONLY on the client
  useEffect(() => {
    const generateStars = (count, maxLeft, maxDelay, prefix) => {
      return [...Array(count)].map((_, i) =>
        generateStar(`${prefix}-${i}`, maxLeft, maxDelay)
      );
    };

    // Calculate all star positions and delays
    setStarLayers({
      fast: generateStars(50, 200, 10, "fast"),
      medium: generateStars(30, 200, 15, "medium"),
      slow: generateStars(20, 200, 20, "slow"),
    });
  }, []); // Empty dependency array ensures this runs only once after initial render (on client)

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return <HomeScreen />;
      case "About":
        return <AboutScreen />;
      case "Projects":
        return <ProjectsScreen />;
      case "Contact":
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div
      className="h-[83vh] w-[98vw] bg-gradient-to-r from-[#2B343A] to-[#0D1C23] stroke-[1px] border-[1.8vh] border-[#5D6BAD] rounded-[60px] flex items-center justify-center relative overflow-visible
      absolute left-1/2 -translate-x-1/2"
    >
      {/* Animated Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1 - Small fast stars */}
        <div className="absolute inset-0 animate-star-scroll-fast">
          {starLayers.fast.map(
            (
              star // Map using the state data
            ) => (
              <div
                key={star.key}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  left: star.left, // Use the stable state value
                  top: star.top, // Use the stable state value
                  animationDelay: star.animationDelay, // Use the stable state value
                }}
              />
            )
          )}
        </div>

        {/* Layer 2 - Medium stars */}
        <div className="absolute inset-0 animate-star-scroll-medium">
          {starLayers.medium.map((star) => (
            <div
              key={star.key}
              className="absolute w-2 h-2 bg-white rounded-full opacity-40"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.animationDelay,
              }}
            />
          ))}
        </div>

        {/* Layer 3 - Large slow stars */}
        <div className="absolute inset-0 animate-star-scroll-slow">
          {starLayers.slow.map((star) => (
            <div
              key={star.key}
              className="absolute w-3 h-3 bg-white rounded-full opacity-20"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.animationDelay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default PokedexScreen;
