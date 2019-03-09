import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { white } from "ansi-colors";

const iconStyle = {
  border: "2px solid rgba(255,255,255,0.5)",
  fontSize: "8em",
  fontWeight: "bold",
  verticalAlign: "middle",
  height: "100",
  textAlign: "center",
  width: "100",
  color: white
};

const styles = theme => ({
  iconStyle: iconStyle
});
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
  <Icon className={classes.iconStyle} onClick={handleClick}>
    {squareIcon(value)}
  </Icon>
);
export default withStyles(styles)(Square);
