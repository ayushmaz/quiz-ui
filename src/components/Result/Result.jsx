import React from 'react';
import ScoreChip from './ScoreChip';
import Button from '../reusableComponents/Button/Button';
import './result.css';

const Result = ({onStartAgain}) => {
    return (
        <div className='main-bg'>
            <div className='bottom-drawer'>
                <div className='results-page'>
                    <h1>Your Result</h1>
                    <h1>60%</h1>
                    <div className="result-details">
                        <ScoreChip />
                        <ScoreChip variant='error' />
                    </div>
                    <Button onClick={onStartAgain}>Start Again</Button>
                </div>
            </div>
        </div>
    );
};

export default Result;