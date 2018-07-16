import React, { Component } from 'react';
import isRock from '../../helpers/isRock';
import isPaper from '../../helpers/isPaper';
import isScissors from '../../helpers/isScissors';
import isDraw from '../../helpers/isDraw';
import GameRender from '../gameRender/gameRender';
import './game.scss';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  /* since I'm managing data in states, I need to be able to reset data whenever I want to
    the getInitialState() method allows for me to choose when to reset this data.
   */
  getInitialState = () => {
    const initialState = {
      winner: [],
      roundWinner: undefined,
      showPopup: false,
      draw: undefined,
      randomValueAI: undefined,
      randomUserOption: undefined,
      overallWinner: undefined,
      options: [
        'rock',
        'paper',
        'scissors'
      ],
      aIOptions: [
        'rock',
        'paper',
        'scissors'
      ]
    };
    return initialState;
  };

  // function to reset state after overall winner
  resetState = () => {
    this.setState(this.getInitialState());
  };

  //Randomising method. this uses the random math method to allow the computer to  ake a selection
  handleRandomise = item => {
    const { aIOptions } = this.state;

    let randomIndex = Math.floor(Math.random() * aIOptions.length);
    let randomValueAI = aIOptions[randomIndex];

    this.setState({
      randomValueAI,
      randomUserOption: item
    });

    /* start of helper function to decide logic */
    if(isRock(item,randomValueAI) !== undefined) {
      this.state.winner.push(isRock(item,randomValueAI));
    }
    if(isPaper(item,randomValueAI) !== undefined) {
      this.state.winner.push(isPaper(item,randomValueAI));
    }
    if(isScissors(item,randomValueAI) !== undefined) {
      this.state.winner.push(isScissors(item,randomValueAI));
    }
    if(isDraw(item,randomValueAI) !== undefined) {
      this.state.winner.push(isDraw(item,randomValueAI));
    }
    /* end of helper function to decide logic */

    this.setState({
      roundWinner: this.state.winner.slice(-1)[0]
    });
    console.log('Winner:', this.state.winner, 'roundWinner:', this.state.roundWinner);

    // call function to decide overall winner after 5 successful tries
    /* @TODO strip out draw so the data only cares about user and computer
    * */

    this.mode(this.state.winner.filter(item => item !== 'Draw'));
    console.log(this.state.winner)
  };

  // function to decide overall winner after 5 successful tries
  mode = (store) => {
    let frequency = {};  // array of frequency.
    let max = 2;  // holds the max frequency.
    let result;   // holds the max frequency element.
    for(let v in store) {
      frequency[store[v]]=(frequency[store[v]] || 0)+1; // increment frequency.
      if(frequency[store[v]] > max) { // is this frequency > max so far ?
        max = frequency[store[v]];  // update max.
        result = store[v];        // update result.
      }
    }
    this.setState({ overallWinner: result });

    if(result !== undefined) {
      // call function to show overall winner after 5 successful tries
      this.togglePopup();
    }
    console.log('result', result);
  };

  // function to show overall winner after 5 successful tries
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });

    if(this.state.showPopup === true) {
      // call function to reset state after overall winner is produced
      this.resetState();
    }
  };

  render() {
    return (
     <div className="game_wrapper">
       <GameRender
         data={this.state}
         handleRandomise={(item) => this.handleRandomise(item)}
         togglePopup={() => this.togglePopup()}
       />
     </div>
    )
  }
}

export default Game;