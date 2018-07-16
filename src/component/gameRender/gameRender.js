import React from 'react';
import PopUp from '../popUp/popUp.component';
import './gameRender.scss';

class gameRender extends React.Component {
  render() {

    return (
      <div>
        {this.props.data.showPopup ?
          <PopUp
            info={`Overall winner is ${this.props.data.overallWinner}`}
            closePopup={() => this.props.togglePopup()}
          />
          : null
        }
        <p>Pick your option</p>
        {this.props.data.options.map((item, i) => {
          return (
            <button
              className="btn"
              key={i}
              onClick={() => this.props.handleRandomise(item)}
            ><span>
              {item}
              </span>
            </button>
          )
        })}
        <div className="sub_text">
          <p>Your Selection is: <b>{this.props.data.randomUserOption}</b></p>
          <p>A I Selection is: <b>{this.props.data.randomValueAI}</b></p>
        </div>
        {this.props.data.roundWinner === 'Draw' &&
        <p>There was no winner, its a draw</p>
        }
        {this.props.data.roundWinner !== undefined && this.props.data.roundWinner !== 'Draw' &&
        <p>Round winner goes to {this.props.data.roundWinner}</p>
        }
      </div>
    )
  }
};

export default gameRender;