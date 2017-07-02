import React from 'react';
import WhatContent from './what-content';
import GameArea from './game-area';
import NewGame from './new-game';
import What from './what';
import './new-game.css';

export default class Game extends React.Component {
    constructor() {
        super();
        this.whatClicked = this.whatClicked.bind(this);
        this.newGameClicked = this.newGameClicked.bind(this);
        this.onClose = this.onClose.bind(this);
        this.addGuessedNumber = this.addGuessedNumber.bind(this);

        this.state = {
            whatHidden: true,
            winningNumber: Math.trunc(Math.random() * 100),
            newGameHidden: false,
            history: [],
            counter: 0,
            feedbackText: `Make your Guess!`
        }
    }
    whatClicked() {
        this.setState({ whatHidden: false })
    }
    newGameClicked() {
       window.location='/';
    }
    onClose() {
        this.setState({
            whatHidden: true
        })
    }
    addGuessedNumber(guessed) {
        //correct answer guessed
        console.log(guessed);
        console.log(this.state.winningNumber);

 //Update history array with input value       
            this.setState({
                history: [...this.state.history, guessed]
            })
        
        if (this.state.winningNumber == guessed) {
            this.setState({
                feedbackText: `You Won. Click new game to play again`,
                feedbackVisible: true
            });
            return true;
        }

        //incorrect answer guessed
        function feedback(state) {
            let flag = false;
            let feedbackText;

            if (Math.abs(state.winningNumber - guessed) <= 10) {
                flag = true;
                feedbackText = `hot`;
                return feedbackText;
            }
            if ((flag === false) && (Math.abs(state.winningNumber - guessed) <= 20)) {
                flag = true;
                feedbackText = `kinda hot`;
                return feedbackText;
            }
            if ((flag === false) && (Math.abs(state.winningNumber - guessed) <= 25)) {
                flag = true;
                feedbackText = `warm`;
                return feedbackText;
            }
            if ((flag === false) && (Math.abs(state.winningNumber - guessed) <= 30)) {
                flag = true;
                feedbackText = `less than warm`;
                return feedbackText;
            }
            if (flag === false) {
                feedbackText = `cold`;
                return feedbackText;
            }
        }

        if (guessed !== this.state.winningNumber) {

            this.setState(
                {
                    counter: this.state.counter + 1,
                    counterVisible: true,
                    feedbackVisible: true,
                    feedbackText: feedback(this.state),
                }
            )
        }
    }

    render() {
        return (
            <div>
                <div>
                    <What onClick={this.whatClicked} />
                    <WhatContent onClose={this.onClose} hidden={this.state.whatHidden} />
                    <NewGame onClick={this.newGameClicked} />
                </div>
                <h1 className="game-title">HOT or COLD</h1>
                <div className="game-area">
                    <GameArea
                        onGuess={this.addGuessedNumber}
                        history={this.state.history}
                        counter={this.state.counter}
                        feedbackText={this.state.feedbackText}
                        winningNumber={this.state.winningNumber}
                    />
                </div>
            </div>
        );
    }
}