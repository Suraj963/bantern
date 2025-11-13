/* src/components/ScrollingWords.jsx */

import React from "react";

// You can change these words to whatever you like
const row1Words = ["Innovative", "Passionate", "Creative", "Dedicated", "Agile"];
const row2Words = ["Focused", "Driven", "Strategic", "Reliable", "Expert"];

// This component renders one scrolling row
const ScrollerRow = ({ words, direction }) => {
  // We use Tailwind's arbitrary value support to hook into the animations
  const animationClass =
    direction === "left"
      ? "animate-[scroll-left_40s_linear_infinite]"
      : "animate-[scroll-right_40s_linear_infinite]";

  return (
    <div className={`flex w-max ${animationClass}`}>
      {/* Render the list twice for a seamless loop */}
      {[...words, ...words].map((word, i) => (
        <div key={i} className="flex-shrink-0 flex items-center justify-center mx-4">
          {/* The Word */}
          <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-foreground">
            {word}
          </span>
          {/* The Diamond Separator */}
          <span className="text-3xl sm:text-4xl lg:text-5xl text-primary mx-2 sm:mx-4">
            ◆
          </span>
        </div>
      ))}
    </div>
  );
};

const ScrollingWords = () => {
  return (
    // The main wrapper with overflow-hidden and a fade-out mask
    <div 
      className="w-full py-8 overflow-hidden"
      style={{
        // This creates the fade-out effect on the left and right edges
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}
    >
      {/* Top Row - Scroll Left */}
      <div className="flex w-full mb-4">
        <ScrollerRow words={row1Words} direction="left" />
      </div>
      {/* Bottom Row - Scroll Right */}
      <div className="flex w-full">
        <ScrollerRow words={row2Words} direction="right" />
      </div>
    </div>
  );
};

export default ScrollingWords;