import React from 'react';
import './history.css';

export default function History(props) {
    console.log(props);
    if (!props[1]) {
        return <div className="guessBox">{props[0]}</div>
    }
    else {
        return (
            <div className="guessBox">{props[0] + props[1]}</div>
        );
    }
}