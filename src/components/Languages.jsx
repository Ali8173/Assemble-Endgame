import React from "react";
import languages from "../languages";
import { cn } from "./utility";

const Languages = ({ wrongGuessCount }) => {
  return (
    <div className="flex flex-wrap justify-center gap-1 mx-auto mt-5 max-w-[400px]">
      {languages.map((language, index) => {
        const isActive = index < wrongGuessCount;
        const conditionalStyle = {
          "after:content-['💀'] after:flex after:items-center after:justify-center after:h-full after:w-full after:bg-[rgba(0,0,0,0.7)]  after:top-0 after:left-0 after:absolute after:rounded":
            isActive,
        };

        return (
          <button
            className={cn(`relative px-3 py-1 rounded`, conditionalStyle)}
            key={language.id}
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
          >
            {language.name}
          </button>
        );
      })}
    </div>
  );
};

export default Languages;
