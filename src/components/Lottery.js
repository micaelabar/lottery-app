import React, { useState, useEffect } from 'react';
import NumberSelection from './NumberSelection';
import Results from './Results';
import { Button, Container, Typography, IconButton, Box } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay'; 

const Lottery = () => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [isDrawn, setIsDrawn] = useState(false);
    const [message, setMessage] = useState('');

    
    const handleNumberSelect = (number) => {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter(n => n !== number));
        } else if (selectedNumbers.length < 6) {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    
    const drawWinningNumbers = () => {
        const drawnNumbers = [];
        while (drawnNumbers.length < 6) {
            const num = Math.floor(Math.random() * 49) + 1;
            if (!drawnNumbers.includes(num)) {
                drawnNumbers.push(num);
            }
        }
        setWinningNumbers(drawnNumbers);
        setIsDrawn(true);
    };

    
    const resetGame = () => {
        setSelectedNumbers([]);
        setWinningNumbers([]);
        setIsDrawn(false);
        setMessage('');
    };

    
    useEffect(() => {
        if (isDrawn) {
            const matches = selectedNumbers.filter(num => winningNumbers.includes(num));
            if (matches.length === 6) {
                setMessage('¡Felicidades! Has acertado todos los números.');
            } else if (matches.length > 0) {
                setMessage(`Has acertado ${matches.length} número(s): ${matches.join(', ')}`);
            } else {
                setMessage('Lo sentimos, no has acertado ningún número.');
            }
        }
    }, [winningNumbers, selectedNumbers, isDrawn]);

    return (
        <Box
            sx={{
                backgroundImage: 'url(/path/to/your/image.jpg)', // Ruta de la imagen de fondo
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Container>
                <Typography variant="h4" gutterBottom>Lotería Interactiva</Typography>

                
                <NumberSelection selectedNumbers={selectedNumbers} onSelect={handleNumberSelect} />

               
                <Button
                    variant="contained"
                    color="primary"
                    onClick={drawWinningNumbers}
                    disabled={selectedNumbers.length < 6}
                    style={{ marginTop: '20px', marginRight: '10px' }}
                >
                    Sortear
                </Button>

                
                <IconButton
                    color="secondary"
                    onClick={resetGame}
                    style={{ marginTop: '20px' }}
                >
                    <ReplayIcon />
                </IconButton>

                
                {isDrawn && <Results winningNumbers={winningNumbers} message={message} />}
            </Container>
        </Box>
    );
};

export default Lottery;
