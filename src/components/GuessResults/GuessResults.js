import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

import Guess from "../Guess/Guess.js";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} word={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
