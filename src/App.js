import React, { Component } from 'react';
import Game from './component/game/game.component';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rock Paper Scissors</h1>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
