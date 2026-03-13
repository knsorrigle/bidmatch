import { useEffect, useState } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface ScrambleTextProps {
  text: string;
}

export default function ScrambleText({ text }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    
    // We want the total animation to run for about 1.2s.
    // Each character scrambles for ~600ms (20 iterations * 30ms).
    // Stagger is 60ms (2 iterations * 30ms).
    const intervalId = setInterval(() => {
      let isComplete = true;
      
      const newText = text.split("").map((char, index) => {
        // Spaces stay spaces
        if (char === " " || char === "\n") return char;
        
        // Character i resolves at iteration 20 + i * 2
        const resolveIteration = 20 + index * 2;
        
        if (iteration >= resolveIteration) {
          return char;
        }
        
        isComplete = false;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join("");

      setDisplayText(newText);
      
      if (isComplete) {
        clearInterval(intervalId);
      }
      
      iteration++;
    }, 30);

    return () => clearInterval(intervalId);
  }, [text]);

  return <>{displayText}</>;
}
