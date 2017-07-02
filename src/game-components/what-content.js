import React from 'react';
import './what.css';

export default function WhatContent(props) {
    // console.log(props);
        return (<div className="what-popup"  hidden={props.hidden}>
                    <div className="what_content" >
                    <h3>What do I do?</h3>
                    <div>
                        <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
                        <ul>
                            <li>1. I pick a random secret number between 1 to 100 and keep it hidden.</li>
                            <li>2. You need to guess until you can find the hidden secret number.</li>
                            <li>3. You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
                        </ul>
                        <p>So, are you ready?</p>
                    </div>
                <button className="close" onClick={props.onClose} >Got It!</button>                   
                </div>
                </div>);
    }

