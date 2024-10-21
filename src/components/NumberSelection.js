
import React from 'react';
import { Grid, Button } from '@mui/material';

const NumberSelection = ({ selectedNumbers, onSelect }) => {
    return (
        <Grid container spacing={2}>
            {Array.from({ length: 50 }, (_, i) => i + 1).map((number) => (
                <Grid item xs={2} key={number}>
                    <Button
                        variant={selectedNumbers.includes(number) ? 'contained' : 'outlined'}
                        color="primary"
                        onClick={() => onSelect(number)}
                    >
                        {number}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default NumberSelection;
