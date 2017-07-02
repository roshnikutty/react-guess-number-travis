import React from 'react';
import './guess-counter.css';

export default function GuessCounter(props) {
    return (<div>
                <span className="counterText">Guess #</span>
                <div className="counterNumber">{props.counter}</div>
                <span className="counterText">!</span>
            </div>
    );
}