import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MathQuestion from './MathQuestion.js';
import UserScore from './UserScore.js';


const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  
  state = {
  	correctAnswer: 0,
    numQuestions: 0,
  };

handleAnswer = answerWasCorrect => {
	if (answerWasCorrect) {
    	this.setState(currState => ({
        	correctAnswer: currState.correctAnswer + 1,
        }))
    }
    this.setState(currState => ({
    	numQuestions: currState.numQuestions + 1,
    }));
};
  
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
		<MathQuestion />  
  		<UserScore 
			numCorrect={this.state.correctAnswer} 
			numQuestions={this.state.numQuestions}
		  />
        </div>
      </div>
    );
  }
}

export default App;
