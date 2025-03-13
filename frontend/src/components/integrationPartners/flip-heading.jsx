import React from "react";
import { FlipWords } from "./flip-words.jsx";

export function FlipWordsDemo() {
  const words = ["Financer", "Insurer", "Manufacturer", "Recycler"];
  return (
    <div className="h-[5rem] flex justify-center items-top px-4">
      <div
        className="text-4xl mx-auto font-bold text-black-600 relative">
        Single platform for every new age<span className="inline-block" style={{ minWidth: "270px" }}>
          <FlipWords words={words} duration={2500}/>
        </span>
      </div>
    </div>
  );
}