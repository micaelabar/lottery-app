
import React, { useState, useEffect } from 'react';
import NumberSelection from './NumberSelection';
import Results from './Results';
import { Button, Container, Typography, Box } from '@mui/material';

const Lottery = () => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [isDrawn, setIsDrawn] = useState(false);

    const handleNumberSelect = (number) => {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter(n => n !== number));
        } else if (selectedNumbers.length < 5) {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    const drawWinningNumbers = () => {
        const drawnNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1);
        setWinningNumbers(drawnNumbers);
        setIsDrawn(true);
    };

    
    const resetGame = () => {
        setSelectedNumbers([]);
        setWinningNumbers([]);
        setIsDrawn(false);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Lotería Interactiva</Typography>
            <NumberSelection selectedNumbers={selectedNumbers} onSelect={handleNumberSelect} />
            <Box mt={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={drawWinningNumbers}
                    disabled={selectedNumbers.length < 5}
                    style={{ marginRight: '10px' }}
                >
                    Sortear
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={resetGame}
                >
                    Reiniciar
                </Button>
            </Box>
            {isDrawn && <Results selectedNumbers={selectedNumbers} winningNumbers={winningNumbers} />}
        </Container>
    );
};

export default Lottery;
