import React from 'react';
import GridRow from './GridRow';

const Grid = ({ grid, clicked }) => {
  return (
    <div>
      {grid.map((item, index) => (
        <GridRow
          key={'row' + index}
          row={item}
          rowIndex={index}
          clicked={clicked}
        />
      ))}
    </div>
  );
};
export default Grid;
