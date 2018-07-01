import React from "react";
import "./ScoreCard.css";

const ScoreCard = props => (
    <div className="navbar sticky-top">
        <a className="navbar-brand" href="/React-Clicky-Game/">Clicky Game</a>
        <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
    </div>
)
 

export default ScoreCard;