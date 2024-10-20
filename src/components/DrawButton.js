import React from 'react';

const DrawButton = ({ drawNumbers }) => {
    return (
        <div>
            <button onClick={drawNumbers} style={{ marginTop: '20px', padding: '10px' }}>
                Draw Numbers
            </button>
        </div>
    );
};

export default DrawButton;
