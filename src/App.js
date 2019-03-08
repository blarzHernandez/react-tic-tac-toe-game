import React, { Component } from 'react';
import Board from "./components/Board";
import {Setting} from "./components/Setting";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h2>Let's going to play / Tic-Tac-Toe Game</h2>
        </header>
        <Setting/>
        <Board />
      </div>
    );
  }
}

export default App;
