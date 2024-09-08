import React from 'react';
import "./score-chip.css";

const ScoreChip = ({score = 0, text="Correct", variant="success"}) => {
    return (
        <div className={`score-chip ${variant}`}>
            <div className={`dot ${variant}`}></div>
            <div className='score'>{score}</div>
            <div className='status'>{text}</div>
        </div>
    );
};

export default ScoreChip;