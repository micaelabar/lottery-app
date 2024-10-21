
import React from 'react';
import { Typography, Box } from '@mui/material';

const Results = ({ selectedNumbers, winningNumbers }) => {
    const matches = selectedNumbers.filter(number => winningNumbers.includes(number));

    return (
        <Box mt={4}>
            <Typography variant="h6">Números Ganadores: {winningNumbers.join(', ')}</Typography>
            <Typography variant="h6">Tus Números: {selectedNumbers.join(', ')}</Typography>
            <Typography variant="h5" color={matches.length > 0 ? 'green' : 'red'}>
                {matches.length > 0 ? `¡Has acertado ${matches.length} número(s)!` : 'No has acertado ningún número.'}
            </Typography>
        </Box>
    );
};

export default Results;
