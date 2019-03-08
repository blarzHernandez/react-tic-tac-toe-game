import React,{Component} from "react";
import {Square} from "./Square";
import './Board.css';


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
        //Check if a square is alread filled
        console.log(squares[index]);
        if(squares[index]){
            return;
        }
        squares[index] = this.whoIsNext();
        this.setState({
            squares,
            player1IsNext:!this.state.player1IsNext
        })

    }

    //Knowing player's turn
    whoIsNext(){
        return this.state.player1IsNext ? 'X' : 'O';
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
    /**
     * Calculate who is the winner,based on 
     * the odds (board size)
     * @param {Array} squares 
     */
    computesWinner(squares){
        const odds = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        //Traverse our odds array
        for (let i = 0; i < odds.length; i++) {
            //destructuring the current value, we are getting the n  index there
            const [a,b,c] = odds[i];
            //Validate
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    render(){
        const winner = this.computesWinner(this.state.squares);
        let headerState;
        const player = this.whoIsNext();
        if(winner){            
            headerState = `Player   ${winner}  won!`;
        }else{
            headerState = `Its your turn: ${player}`;
        }
        return(
            <div className ="board-wrapper">
                <div className="board-header">{headerState}</div>
                <div className="board-body">

                    <div className="row">
                        {this.drawSquare(0)}
                        {this.drawSquare(1)}
                        {this.drawSquare(2)}
                    </div>
                    <div className="row">
                        {this.drawSquare(3)}
                        {this.drawSquare(4)}
                        {this.drawSquare(5)}
                    </div>
                    <div className="row">
                        {this.drawSquare(6)}
                        {this.drawSquare(7)}
                        {this.drawSquare(8)}
                    </div>

                </div>
            </div>
        )
    }
}
export default Board;