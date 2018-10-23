import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MathQuestion from './MathQuestion.js';
import UserScore from './UserScore.js';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  
  state = {
  	userGameData: []
  }
	generateNewGame = (gameData) => {
    	//user response equal that of correct answer
      	//push userAnsweredCorrectly: True/False
      
      	//Create new game
      	
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
			<MathQuestion gameData={this.state.userGameData}/>
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            <UserScore />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
