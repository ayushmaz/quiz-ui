import React from 'react';
import ScoreChip from './ScoreChip';
import Button from '../reusableComponents/Button/Button';
import './result.css';
import ScoreGauge from '../reusableComponents/ScoreGauge/ScoreGauge';

const Result = ({onStartAgain, scoreCard}) => {
    const {totalScore, correct, incorrect} = scoreCard
    return (
        <div className='main-bg'>
            <div className='bottom-drawer'>
                <div className='results-page'>
                    <h1>Your Result</h1>
                    <ScoreGauge score={totalScore} style={{alignSelf: "center"}} />
                    <div className="result-details">
                        <ScoreChip score={correct} />
                        <ScoreChip variant='error' text='Incorrect' score={incorrect}/>
                    </div>
                    <Button onClick={onStartAgain}>Start Again</Button>
                </div>
            </div>
        </div>
    );
};

export default Result;