import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
const oBoard = new Board();
it("Check Winner", () => {
  const square = ["X", "X", "X", null, "O", null, null, null, "O"];
  expect(oBoard.computesWinner(square)).toEqual("X");
});

it("Check if its a draw", () => {
  const square = ["X", "X", "X", null, "O", null, null, null, "O"];
  const step = 9;
  expect(oBoard.isaDraw(step, square.length)).toEqual(true);
});

it("Should start a new game", () => {
  // the current state
  const state = {
    boardSize: 4,
    squares: Array(9).fill("X"),
    player1IsNext: false,
    step: 0,
    selectedValue: "player1"
  };

  //expected state
  const expectedState = {
    boardSize: 3,
    squares: Array(9).fill(null),
    player1IsNext: true,
    step: 0,
    selectedValue: "player1"
  };
  expect(state).toEqual(expectedState);
});
