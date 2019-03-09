import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./Square.css";
/**
 * Render the proper Icon X or O
 * @param {String} playerTurn
 */
const squareIcon = playerTurn => {
  switch (playerTurn) {
    case "X":
      return "clear";
    case "O":
      return "panorama_fish_eye";
    default:
      return "";
  }
};

const Square = ({ handleClick, value, classes }) => (
  <button className="square" onClick={handleClick}>
    {value}
  </button>
);
export default Square;
