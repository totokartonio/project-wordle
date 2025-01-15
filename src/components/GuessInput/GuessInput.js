import React from "react";

function GuessInput({ handleAddGuess }) {
  const [word, setWord] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddGuess(word);

    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={word}
        onChange={(event) => {
          newWord = event.target.value;
          newWord = newWord.toUpperCase();
          setWord(newWord);
        }}
      />
    </form>
  );
}

export default GuessInput;
