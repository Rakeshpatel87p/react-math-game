import React, { Component } from 'react';
//import UserScore from './UserScore.js';

function MathQuestion(props) {
	
  	return (
    	<div className="equation">
		<button onClick = {() => props.gameInfo(true)}>True</button>
        <button onClick = {() => props.gameInfo(false)}>False</button>
        <p className="text">
        </p>
		</div>
    )
}	

export default MathQuestion;