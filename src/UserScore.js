import React from 'react';

const UserScore = props => {
	return (
    	<p className="text">
      		Your score: {props.numCorrect}/{props.numQuestions}
		</p>
    );
};
export default UserScore;