import { useState, useEffect } from 'react';

/**
 * A custom hook for creating a typewriter effect.
 * @param {string} text The full text to be typed out.
 * @param {number} speed The speed of the typing effect in milliseconds.
 * @returns {{displayedText: string, isFinished: boolean, finish: () => void}}
 */
export function useTypewriter(text, speed = 30) {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (text) {
      setDisplayedText(''); // Reset when text changes
      setIsFinished(false);
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(intervalId);
          setIsFinished(true);
        }
      }, speed);

      // Cleanup function to clear the interval if the component unmounts
      // or if the text prop changes before the effect is finished.
      return () => clearInterval(intervalId);
    } else {
      // Ensure cleanup when text is empty
      setDisplayedText('');
      setIsFinished(true);
    }
  }, [text, speed]);

  const finish = () => {
    setDisplayedText(text || '');
    setIsFinished(true);
  };

  return { displayedText, isFinished, finish };
}
