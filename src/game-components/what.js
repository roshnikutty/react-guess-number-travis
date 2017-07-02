import React from 'react';
import './what.css';

export default class What extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
    }
    setClicked(clicked) {
        this.setState({ clicked })
    }
    render() {
        return (
            <a href="#" className="what_position" onClick={this.props.onClick} hidden={this.state.clicked}>WHAT?</a>
        );

    }
}