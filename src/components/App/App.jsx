import React from 'react';
import Game from '../Game';
import GuessResults from '../GuessResults';
import Header from '../Header';

function App() {
  const [guesses, setGuesses] = React.useState([]);

  const handleAddGuess = (input) => {
    console.log(`adding ${input} to guesses`)

    const nextGuesses = [
      ...guesses,
      input
    ]

    // const nextGuess = {
    //   label: input,
    //   id: crypto.randomUUID()
    // }

    // const nextGuesses = [
    //   ...guesses,
    //   nextGuess
    // ]

    console.log(nextGuesses);

    setGuesses(nextGuesses);
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <GuessResults guesses={guesses}/>
        <Game handleAddGuess={handleAddGuess} />
      </div>
    </div>
  );
}

export default App;
