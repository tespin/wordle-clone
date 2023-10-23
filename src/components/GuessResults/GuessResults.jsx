import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses }) {

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const guess = guesses[num]
          ? guesses[num]
          : undefined
        ;

        // console.log(guess);
        
        // // const guess = guesses
        // //   ? guesses[num]
        // //   : {label: 'tests', id: ''}
        // //   ;
        
        // // console.log(`${guess.label} from results`)
        
        return (
          <Guess key={num} guess={guess} />
        )
      })}
    </div>
  )
}

export default GuessResults;