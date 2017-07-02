import React from 'react';
import './new-game.css';

export default function Feedback(props) {
    return(
        <h2 className="feedback-area" style={{visible: props.visible}}>{props.feedbackText}</h2>
    );
}
