import React,{Component} from "react";
import {Square} from "./Square";
class Board extends Component{
    constructor(props){
        super(props);
     //Initial state
     this.state = {
         squares:Array(9).fill(null), //board size
         player1IsNext : true //By default start up player 1 (x)
     }
    }

    /**
     * It trigger when user click a square
     * @param {int} index 
     */
    handleClick(index){
        const squares = this.state.squares.slice();
        squares[index] = this.state.player1IsNext ? 'X' : 'O';
        this.setState({
            squares,
            player1IsNext:!this.state.player1IsNext
        })

    }

   /**
    * Render each square
    * @param {int} index 
    */
    drawSquare(index){
        return(
            <Square 
                value={this.state.squares[index]}
                handleClick={() => this.handleClick(index)}
            />
        )
    }

    render(){
        return(
            <div className = "board-wrapper">
                <div className="board-header">Current Player</div>
                <div className="board-body">
                    <div className="row">{this.drawSquare(0)}</div>
                </div>
            </div>
        )
    }
}
export default Board;