import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';
import { rowCrossed, columnCrossed } from './utils/utils.js';

class App extends Component {
  state = { grid: [], xIsNext: true };

  componentDidMount() {
    let gridCopy = [...this.state.grid];

    for (let i = 0; i < 3; i++) {
      gridCopy.push(Array(3).fill(null));
    }

    this.setState({ grid: gridCopy });
  }

  onCellClick = (rowIndex, cellIndex) => {
    let gridCopy = [...this.state.grid];

    if( rowCrossed(gridCopy) ||
       columnCrossed(gridCopy) ||
    gridCopy[rowIndex][cellIndex]) {
      return;
    }

    gridCopy[rowIndex][cellIndex] = this.state.xIsNext ?  'x' : 'o';

    this.setState({ grid: gridCopy, xIsNext: !this.state.xIsNext });
  };
  render() {
    let playerStatus;
    playerStatus = this.state.xIsNext ? "x" : "o";
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '200px', fontFamily: 'Roboto Mono' }}>
      <div>
         <h3 style={{fontFamily: 'inherit', color: 'white', fontSize: '30px'}}>Next Player: {playerStatus}</h3>
        <Grid grid={this.state.grid} clicked={this.onCellClick} />
      </div>
      </div>
    );
  }
}

export default App;
