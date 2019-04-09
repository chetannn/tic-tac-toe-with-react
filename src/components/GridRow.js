import React from 'react';
import GridCell from './GridCell';

const GridRow = ({ row, clicked, rowIndex }) => {
  return (
    <div style={{ display: 'flex' }}>
      {row.map((item, index) => (
        <GridCell
          key={'cell' + index}
          value={item}
          rowIndex={rowIndex}
          cellIndex={index}
          clicked={clicked}
        />
      ))}
    </div>
  );
};

export default GridRow;
