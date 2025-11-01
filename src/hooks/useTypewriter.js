import { useState, useEffect } from 'react';

/**
 * A custom hook for creating a typewriter effect.
 * @param {string} text The full text to be typed out.
 * @param {number} speed The speed of the typing effect in milliseconds.
 * @returns {string} The text that has been typed out so far.
 */
export function useTypewriter(text, speed = 30) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (text) {
      setDisplayedText(''); // Reset when text changes
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      // Cleanup function to clear the interval if the component unmounts
      // or if the text prop changes before the effect is finished.
      return () => clearInterval(intervalId);
    }
  }, [text, speed]);

  return displayedText;
}
