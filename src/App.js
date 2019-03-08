import React, { Component } from 'react';
import Board from "./components/Board";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h2>Let's going to play / Tic-Tac-Toe Game</h2>
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
