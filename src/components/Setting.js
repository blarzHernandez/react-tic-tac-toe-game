import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  label: {
    color: "white",
    display: "flex",
    paddingRight: "5px",
    justifyContent: "space-between"
  },
  boardSize: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },

  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  btnReplay: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "auto"
  }
});

class Setting extends React.Component {
  render() {
    const { classes, handleChange, selectedValue, rePlayGame } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Tic-Tac-Toe - Blarz
            </Typography>
            <div className={classes.boardSize}>
              <InputBase
                onChange={handleChange}
                placeholder="Board size..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                name="boardSize"
              />
            </div>
            <FormLabel className={classes.label} component="legend">
              Choose : {""}{" "}
            </FormLabel>
            <FormLabel className={classes.label} component="legend">
              Player 1(x)
            </FormLabel>
            <Radio
              checked={selectedValue === "player1"}
              onChange={handleChange}
              value="player1"
              name="selectedValue"
              aria-label="player1"
            />
            <FormLabel className={classes.label} component="legend">
              Player 2(o)
            </FormLabel>
            <Radio
              checked={selectedValue === "player2"}
              onChange={handleChange}
              value="player2"
              name="selectedValue"
              aria-label="player2"
              color="default"
            />
            <Button
              variant="contained"
              className={classes.btnReplay}
              color="secondary"
              onClick={rePlayGame}
            >
              Re-play
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Setting);
