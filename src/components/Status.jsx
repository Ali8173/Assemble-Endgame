import React from "react";
import { cn } from "./utility";
import languages from "../languages";
import { getFarewellText } from "./farwellMessage";

const Status = ({
  gameLost,
  gameWon,
  gameOver,
  wrongGuessCount,
  wrongLanguage,
}) => {
  const conditional = {
    "bg-red-500 px-10 py-2": gameLost,
    "bg-green-500 px-10 py-2": gameWon,
  };
  return (
    <>
      <section
        aria-live="polite"
        role="status"
        className={cn(
          "mx-auto mt-5 px-10 py-10 rounded min-w-100 max-w-fit text-white text-center",
          conditional
        )}
      >
        {gameOver ? (
          gameWon ? (
            <>
              <h2 className="font-semibold text-2xl">You Won!</h2>
              <p className="font-semibold text-xl">Well done🎉</p>
            </>
          ) : (
            <>
              <h2 className="font-semibold text-2xl">You Loose!</h2>
              <p className="font-semibold text-xl">
                You loose! Better start learning Assembly😭
              </p>
            </>
          )
        ) : (
          <>
            {wrongLanguage && wrongGuessCount > 0 && (
              <section
                role="status"
                aria-live="polite"
                className="bg-pink-500 mx-auto -mt-10 -mb-7 px-10 py-8 rounded min-w-100 max-w-fit text-white text-center"
              >
                <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
              </section>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Status;
