import React from 'react';

interface ResultsProps {
  winningNumbers: number[];
  selectedNumbers: number[];
}

const Results: React.FC<ResultsProps> = ({ winningNumbers, selectedNumbers }) => {
  const correctNumbers = selectedNumbers.filter(number => winningNumbers.includes(number));

  return (
    <div>
      <h3>Winning numbers: {winningNumbers.join(', ')}</h3>
      <h4>Your correct guesses: {correctNumbers.length}</h4>
      {correctNumbers.length > 0 ? (
        <p>Congratulations, you guessed some numbers correctly!</p>
      ) : (
        <p>You didn't guess any numbers, try again!</p>
      )}
    </div>
  );
};

export default Results;
