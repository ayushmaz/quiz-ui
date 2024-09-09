import React from 'react';
import './score-gauge.css';

const ScoreGauge = ({
    score = 0,
    ...props
}) => {
    const getScoreColor = () => {
        if(score >= 70){
            return '#44B77B'
        }else if(score >= 40){
            return '#FFD033'
        }else{
            return '#FF3B3F'
        }
    }
    return (
        <div className='outer-circle' {...props}>
            <div className='hidding-box'></div>
            <div className='inner-circle'>
                <div className='third-circle'>
                </div>
                <div className="score-text" style={{color: `${getScoreColor()}`}}>{score}%</div>
                <div className='triangle' style={{transform: `rotate(${score * 1.8}deg)`}}></div>
            </div>
        </div>
    );
};

export default ScoreGauge;