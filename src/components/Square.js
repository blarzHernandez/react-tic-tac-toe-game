import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const iconStyle = {
  background: "#fff",
  border: "1px solid #999",
  float: "left",
  fontSize: "6em",
  fontWeight: "bold",
  height: "100",
  marginRight: "-1px",
  marginTop: "-1px",
  padding: 0,
  textAlign: "center",
  width: "100"
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
