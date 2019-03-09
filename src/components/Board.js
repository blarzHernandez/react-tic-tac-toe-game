import React, { Component } from "react";
import Square from "./Square";
import Setting from "./Setting";
import "./Board.css";

class Board extends Component {
  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      boardSize: 3,
      squares: Array(9).fill(null), //board size
      player1IsNext: true, //By default start up player 1 (x)
      step: 0,
      selectedValue: "player1"
    };
  }

  /**
   * It trigger when user click a square
   * @param {int} index
   */
  handleClick(index) {
    const squares = this.state.squares.slice();
    //Check if a square is already fulled and also if someone has won the game
    if (squares[index] || this.computesWinner(squares)) {
      return;
    }
    squares[index] = this.whoIsNext();
    this.setState({
      squares,
      player1IsNext: !this.state.player1IsNext,
      step: this.state.step + 1
    });
  }

  /**
   * Dinamically change the board size NxN
   * @param {Event} e
   */
  handleChange(e) {
    this.setState({
      [e.target.name]:
        e.target.value === 0 ? this.state.boardSize : e.target.value
    });
  }

  switchPlayer(e) {
    this.setState({
      [e.target.name]: e.target.value,
      player1IsNext: !this.state.player1IsNext
    });
  }

  //Knowing player's turn
  whoIsNext() {
    return this.state.player1IsNext ? "X" : "O";
  }

  /**
   * Render each square
   * @param {int} index
   */
  drawSquare(index) {
    return (
      <Square
        key={index}
        value={this.state.squares[index]}
        handleClick={() => this.handleClick(index)}
      />
    );
  }
  /**
   * Calculate who is the winner,based on
   * the odds (board size)
   * @param {Array} squares
   */
  computesWinner(squares) {
    const odds = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    //Traverse our odds array
    for (let i = 0; i < odds.length; i++) {
      //destructuring the current value, we are getting the n  index there
      const [a, b, c] = odds[i];
      //Validate
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  //Start the game
  rePlayGame() {
    this.setState({
      step: 0,
      squares: Array(9).fill(null),
      player1IsNext: true,
      selectedValue: "player1"
    });
  }

  //render rows and cells
  renderCells() {
    const board = this.state.boardSize;

    const rows = [];
    let cellId = 0;
    for (let c = 0; c < board; c++) {
      const cells = [];

      let rowId = `row-${c}`;
      for (let row = 0; row < board; row++) {
        cells.push(this.drawSquare(cellId));
        cellId++;
      }

      rows.push(
        <div className="row" key={rowId}>
          {cells}
        </div>
      );
    }

    return rows;
  }

  isaDraw(step, squaresL) {
    if (step === squaresL) {
      return true;
    }
    return false;
  }

  render() {
    const winner = this.computesWinner(this.state.squares);
    let headerState;
    const player = this.whoIsNext() === "X" ? "Player 1" : "Player 2";
    if (winner) {
      headerState = `${winner === "X" ? "Player 1" : "Player 2"}  wins!`;
    } else {
      if (this.isaDraw(this.state.step, this.state.squares.length)) {
        headerState = `Its a draw!`;
      } else {
        headerState = `Its your turn: ${player}`;
      }
    }
    const { selectedValue } = this.state;

    return (
      <div>
        <Setting
          handleChange={e => {
            this.handleChange(e);
          }}
          switchPlayer={e => this.switchPlayer(e)}
          selectedValue={selectedValue}
          rePlayGame={() => this.rePlayGame()}
        />
        <div className="board-wrapper">
          <div className="board-header">{headerState}</div>
          <div className="grid">
            <div className="board-body">{this.renderCells()}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Board;
