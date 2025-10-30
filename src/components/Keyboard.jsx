import React from "react";
import { cn } from "./utility";

const Keyboard = ({ handleClick, guessedLetter, currentWord, gameOver }) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  /*  function getColor(letter) {
    if (!guessedLetter.includes(letter)) return "bg-yellow-500";
    return currentWord.toLowerCase().includes(letter)
      ? "bg-green-500"
      : "bg-red-500";
  } */

  return (
    <section className="flex flex-wrap justify-center gap-2 mx-auto mt-5 max-w-[420px]">
      {[...alphabets].map((alphabet) => {
        const isGuesed = guessedLetter.includes(alphabet);
        const isCorrect = isGuesed && currentWord.includes(alphabet);
        const isWrong = isGuesed && !currentWord.includes(alphabet);

        const conditionalStyle = {
          "bg-green-500 disabled:bg-green-300 disabled:opacity-30": isCorrect,
          "bg-red-500 disabled:bg-red-300 disabled:opacity-30": isWrong,
        };

        return (
          <button
            onClick={() => {
              handleClick(alphabet);
            }}
            key={alphabet}
            disabled={gameOver}
            aria-disabled={guessedLetter.includes(alphabet)}
            aria-label={`Letter ${alphabet}`}
            className={cn(
              `bg-yellow-500 disabled:bg-yellow-300 disabled:opacity-30 border border-[#D7D7D7] rounded-sm w-[35px] h-[35px] font-semi-bold text-xl cursor-pointer`,
              conditionalStyle
            )}
          >
            {alphabet.toUpperCase()}
          </button>
        );
      })}
    </section>
  );
};

export default Keyboard;
