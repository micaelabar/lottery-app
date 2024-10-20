import React from 'react';

const NumberSelection = ({ handleSelection, selectedNumbers }) => {
    const numbers = Array.from({ length: 49 }, (_, index) => index + 1); // Numbers from 1 to 49

    return (
        <div>
            <h2>Select Your Numbers</h2>
            {numbers.map(number => (
                <button
                    key={number}
                    onClick={() => handleSelection(number)}
                    style={{
                        backgroundColor: selectedNumbers.includes(number) ? 'lightgreen' : 'lightgray',
                        margin: '5px'
                    }}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default NumberSelection;
