import React from "react";

const NewGame = ({ handleReset }) => {
  return (
    <button
      onClick={handleReset}
      className="flex justify-center bg-[#2ED3E9] mx-auto mt-10 px-20 py-2 rounded text-xl"
    >
      New Game
    </button>
  );
};

export default NewGame;
