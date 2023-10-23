import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({handleAddGuess}) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: guess })
        handleAddGuess(guess);
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
      />
    </form>
  )
}

export default Game;
