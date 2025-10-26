import React, { useState, useEffect, useRef, useCallback } from 'react';

// The main component which creates the concentric circle bending effect
const Circles = () => {
  // State to hold the dynamic CSS transform style (rotation and scale for bending)
  const [transformStyle, setTransformStyle] = useState({});
  
  // Store previous angle to prevent sudden 360 jumps
  const prevAngleRef = useRef(0);

  // Ref to the outer ring element to calculate its position on the screen
  const ringRef = useRef(null);

  // Constants for ring dimensions and movement limits
  const RING_SIZE_PX = 500;
  // Maximum distance (in pixels) the mouse affects the bend
  // Increased to allow distortion at greater distances
  const MAX_EFFECTIVE_DISTANCE = 800;
  // Maximum vertical compression (scaleY) to simulate the bend (e.g., 0.05 is 5% compression)
  const MAX_BEND_FACTOR = 0.06; 

  /**
   * Handles the mouse move event, calculates the required rotation and compression, 
   * and updates the component's transform style.
   */
  const handleMouseMove = useCallback((e) => {
    if (!ringRef.current) return;

    // 1. Get the bounding box and center of the ring element
    const { left, top, width, height } = ringRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // 2. Calculate the difference vector (mouse position - ring center)
    const diffX = e.clientX - centerX;
    const diffY = e.clientY - centerY;

    // 3. Calculate Angle and Distance
    const angleRad = Math.atan2(diffY, diffX);
    // Convert angle to degrees for CSS rotation
    // Add 90 degrees to rotate the compression axis perpendicular to the mouse direction
    let angleDeg = angleRad * (180 / Math.PI) + 90;
    
    // Normalize angle to stay within -180 to 180 range to prevent accumulations
    // This keeps the rotation smooth without allowing infinite rotation
    while (angleDeg > 180) angleDeg -= 360;
    while (angleDeg < -180) angleDeg += 360;
    
    const distance = Math.hypot(diffX, diffY);

    // 4. Normalize distance (0 to 1) and calculate bend amount
    // The bend only happens if the mouse is within the MAX_EFFECTIVE_DISTANCE
    const normalizedDistance = Math.min(1, distance / MAX_EFFECTIVE_DISTANCE);

    // Use a cubic easing function for a softer effect: x^3
    const easedDistance = normalizedDistance ** 3;
    
    // Calculate compression (scaleY)
    // Scale starts at 1.0 (no bend) and decreases as distance increases.
    const bendAmount = easedDistance * MAX_BEND_FACTOR;
    const scaleY = 1.0 - bendAmount; 

    // 5. Apply the calculated transforms
    setTransformStyle({
      // Rotate the element towards the mouse, then compress it vertically (scaleY).
      // This compression simulates the 'pull' or 'bend' towards the mouse.
      transform: `rotate(${angleDeg}deg) scaleY(${scaleY})`,
      // No transition to prevent visual jumps during circular motion
    });
  }, []);

  // Effect to attach and clean up the mousemove listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
      <div
        ref={ringRef}
        className="relative"
        style={{
          width: `${RING_SIZE_PX}px`,
          height: `${RING_SIZE_PX}px`,
          // boxShadow: '0 0 50px rgba(129, 140, 248, 0.4)',
          borderRadius: '50%',
        }}
      >
        {/* Outer Ring - Less affected by mouse */}
        <div
          className="absolute inset-0 rounded-full border-8 border-[#65E1DA]"
          style={{
            boxShadow: 'inset 0 0 10px rgba(79, 70, 229, 0.5)',
            ...transformStyle, // Apply the base transform
          }}
        ></div>

        {/* Inner Concentric Ring - More affected by mouse */}
        <div
          className="absolute inset-7 rounded-full border-6 border-[#0097E3]"
          style={{
            boxShadow: '0 0 8px rgba(165, 180, 252, 0.7)',
            // Apply stronger transform to inner circle (multiply the effect by 2)
            transform: transformStyle.transform ? transformStyle.transform.replace(/scaleY\(([^)]+)\)/, (match, p1) => {
              const scaleValue = parseFloat(p1);
              const enhancedScale = 1 - ((1 - scaleValue) * 2); // Double the bend effect
              return `scaleY(${Math.max(0.5, enhancedScale)})`; // Clamp to prevent extreme distortion
            }) : '',
            transition: transformStyle.transition,
          }}
        ></div>
      </div>
  );
};

export default Circles;
