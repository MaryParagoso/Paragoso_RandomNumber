/* Game.js */
import React, { Component } from "react";
import './App.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
    };
  }

  handleClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;

    this.setState((prevState) => ({
      randomNumber: newRandomNumber,
    }));
  };

  render() {
    return (
      <div className="gameContainer">
        <div className="randomNumber">Random Number:</div>
        <div className="number">{this.state.randomNumber}</div>
        <button onClick={this.handleClick}>GENERATE RANDOM NUMBER</button>
      </div>
    );
  }
}

export default Game;