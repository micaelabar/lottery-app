import React, { useState, useEffect } from 'react';
import NumberSelection from './NumberSelection';
import DrawButton from './DrawButton';
import Results from './Results';

const Lottery = () => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [message, setMessage] = useState('');

    const handleSelection = (number) => {
        setSelectedNumbers(prev => {
            if (prev.includes(number)) {
                return prev.filter(n => n !== number); // Remove if already selected
            } else {
                return [...prev, number]; // Add if not selected
            }
        });
    };

    const drawNumbers = () => {
        const winners = [];
        while (winners.length < 6) { // Draw 6 numbers
            const num = Math.floor(Math.random() * 49) + 1; // Numbers between 1 and 49
            if (!winners.includes(num)) {
                winners.push(num);
            }
        }
        setWinningNumbers(winners);
    };

    useEffect(() => {
        if (winningNumbers.length > 0) {
            const matches = selectedNumbers.filter(num => winningNumbers.includes(num));
            if (matches.length === 6) {
                setMessage('Congratulations! You have won with all your numbers!');
            } else if (matches.length > 0) {
                setMessage(`You matched ${matches.length} number(s): ${matches.join(', ')}`);
            } else {
                setMessage('Sorry, you didn’t match any numbers.');
            }
        }
    }, [winningNumbers, selectedNumbers]);

    return (
        <div>
            <h1>Lottery Draw Simulation</h1>
            <NumberSelection handleSelection={handleSelection} selectedNumbers={selectedNumbers} />
            <DrawButton drawNumbers={drawNumbers} />
            <Results winningNumbers={winningNumbers} message={message} />
        </div>
    );
};

export default Lottery;
