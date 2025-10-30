import React from "react";
import Header from "./Header";
import Status from "./Status";
import Languages from "./languages";
import languages from "../languages";
import Word from "./Word";
import Keyboard from "./Keyboard";
import NewGame from "./NewGame";
import { getRandomWord } from "./farwellMessage";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Main = () => {
  const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  const [guessedLetter, setGuessedLetter] = React.useState([]);

  console.log(currentWord);
  const { width, height } = useWindowSize();

  function handleClick(alphabet) {
    setGuessedLetter((prev) => {
      const updated = prev.includes(alphabet) ? prev : [...prev, alphabet];
      return updated;
    });
  }

  function handleReset() {
    setCurrentWord(() => getRandomWord());
    setGuessedLetter([]);
  }

  const wrongLanguage = !currentWord
    .toLowerCase()
    .split("")
    .includes(guessedLetter.at(-1));

  const wrongGuessCount = guessedLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const gameLost = wrongGuessCount >= languages.length;
  const gameWon = currentWord
    .toLowerCase()
    .split("")
    .every((word) => guessedLetter.includes(word));

  const isGameOver = gameLost || gameWon;

  return (
    <main className="bg-[#171717] h-screen">
      {gameWon && <Confetti width={width} height={height} />}
      <Header />
      <Status
        gameWon={gameWon}
        gameLost={gameLost}
        gameOver={isGameOver}
        wrongGuessCount={wrongGuessCount}
        wrongLanguage={wrongLanguage}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word
        currentWord={currentWord}
        guessedLetter={guessedLetter}
        gameLost={gameLost}
      />
      <Keyboard
        handleClick={handleClick}
        guessedLetter={guessedLetter}
        currentWord={currentWord}
        gameOver={isGameOver}
      />
      {isGameOver && <NewGame handleReset={handleReset} />}
    </main>
  );
};

export default Main;
