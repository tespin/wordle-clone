import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {

  return (
    <p className='guess'>
      {range(5).map((num) => {
        const letter = guess
          ? guess.split('')[num]
          : ''
        ;


        return (
          <span key={num} className='cell'>{letter}</span>
        )
      })}
    </p>
  )
}

export default Guess;