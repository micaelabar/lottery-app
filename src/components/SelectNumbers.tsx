import React from 'react';
import { Button, Checkbox, FormControlLabel, Grid } from '@mui/material';

interface SelectNumbersProps {
  selectedNumbers: number[];
  setSelectedNumbers: React.Dispatch<React.SetStateAction<number[]>>;
}

const allNumbers = Array.from({ length: 50 }, (_, index) => index + 1);

const SelectNumbers: React.FC<SelectNumbersProps> = ({ selectedNumbers, setSelectedNumbers }) => {
  const handleChange = (number: number) => {
    setSelectedNumbers(prev => 
      prev.includes(number) ? prev.filter(num => num !== number) : [...prev, number]
    );
  };

  return (
    <div>
      <h3>Select your numbers (1 to 50):</h3>
      <Grid container spacing={2}>
        {allNumbers.map(number => (
          <Grid item key={number}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedNumbers.includes(number)}
                  onChange={() => handleChange(number)}
                  disabled={selectedNumbers.length >= 6 && !selectedNumbers.includes(number)}
                />
              }
              label={number.toString()}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SelectNumbers;

