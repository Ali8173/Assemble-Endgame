import React from "react";
import { cn } from "./utility";

const Word = ({ currentWord, guessedLetter, gameLost }) => {
  return (
    <section className="flex justify-center mt-10">
      <div className="flex gap-0.5 rounded-t-md">
        {currentWord.split("").map((word, index) => {
          const notGuessed = !guessedLetter.includes(word);
          const lost = {
            "text-red-500": notGuessed,
          };
          return (
            <span
              className={cn(
                "inline-block bg-[#1f1f1f] px-2 border-gray-400 border-b-2 min-w-6 min-h-7 font-semi-bold text-white text-xl text-center",
                lost
              )}
              key={index}
            >
              {gameLost
                ? word.toUpperCase()
                : guessedLetter.includes(word.toLowerCase())
                ? word.toUpperCase()
                : ""}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Word;
