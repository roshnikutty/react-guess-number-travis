import React from 'react';
import Feedback from './feedback';
import UserForm from './user-form';
import GuessCounter from './guess-counter';
import History from './history';
import './new-game.css';

export default class GameArea extends React.Component {
    constructor(props) {
        super(props);
    }

    //Adding guessed number to existing array of old guessed numbers &
    //Steps if guessed number does not match winning number

    render() {
        // console.log(this.props.history);
        const histories = this.props.history.map((history, index) =>
            <History  key={index} {...history} />
        );
        return (<div>
                    <div>
                    
                        <Feedback visible={this.props.feedbackVisible} feedbackText={this.props.feedbackText} />
                        <UserForm onChange={this.props.onGuess} />
                        <GuessCounter counter={this.props.counter} />
                        <div className="history-row">{histories}</div>
                    </div>
                </div>
        );
    }
}