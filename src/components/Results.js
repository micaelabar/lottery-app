
import React from 'react';

const Results = ({ winningNumbers, message }) => {
    return (
        <div>
            <h2>Winning Numbers</h2>
            <p>{winningNumbers.join(', ') || 'No numbers drawn yet.'}</p>
            <h3>{message}</h3>
        </div>
    );
};

export default Results;
