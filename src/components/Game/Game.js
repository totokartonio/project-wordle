import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("running");

  function handleAddGuess(word) {
    const nextGuesses = [...guesses, word];

    setGuesses(nextGuesses);

    if (word === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      {gameStatus === "lost" && <LostBanner answer={answer} />}
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      <GuessInput gameStatus={gameStatus} handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
