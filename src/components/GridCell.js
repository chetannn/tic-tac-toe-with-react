import React from 'react';

const GridCell = ({ value,clicked, rowIndex, cellIndex }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '10px',
        border: '1px solid white',
        borderRadius: '2px',
        height: '50px',
        width: '50px',
        fontWeight: 'bold',
        fontSize: '40px',
        textAlign: 'center',
        cursor: 'pointer',
        color: 'white',
        fontFamily: 'inherit'
      }}
      onClick={() => clicked(rowIndex, cellIndex)}
    >
      {value}
    </div>
  );
};

export default GridCell;
