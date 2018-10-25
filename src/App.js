import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MathQuestion from './MathQuestion.js';


const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  
  state = {
  	userGameData: []
  }
  generateNewGame = (userResponse) => {
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;	
      console.log({values: [value1, value2, value3, proposedAnswer] , correctAnswer: false});
      console.log(userResponse);
      //record user answer and calculate # answered correctly/incorrectly
      this.setState((currentState) => ({
      	//userGameData.push()
      }));
      return (
        {values: [value1, value2, value3, proposedAnswer] , correctAnswer: false}
      )  	
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
    	  <MathQuestion 
    		gameInfo={this.generateNewGame}
			userScore = {this.state.userGameData}
		  />
        </div>
      </div>
    );
  }
}

export default App;
