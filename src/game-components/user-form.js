import React from 'react';
// import PropTypes from 'prop-types';
import './new-game.css'

//Get user's guessed input
export default class UserForm extends React.Component {
constructor(props){
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
    this.state = {
        userInput:0
    }
    // console.log(this.props.onChange);
}
onSubmit(e){
    e.preventDefault();
    this.props.onChange(this.input.value);
}

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <input className="user-input" type="text" id="guess" name="guess" ref={(input) => this.input=input} placeholder="Enter your Guess" required/>
                <button type="submit" style={{opacity: 1}}>Guess</button>
            </form>
        )
    }
}
