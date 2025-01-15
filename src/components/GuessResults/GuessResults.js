import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

import Guess from "../Guess/Guess.js";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} word={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
