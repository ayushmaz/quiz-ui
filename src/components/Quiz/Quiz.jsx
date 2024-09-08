import React from 'react';
import UpraisedLogo from '../reusableComponents/UpraisedLogo';
import './quiz.css';
import QuizStartCircle from './QuizStartCircle';
import Button from '../reusableComponents/Button/Button';

const Quiz = () => {
    return (
        <div className='quiz-start-page'>
            <UpraisedLogo />
            <QuizStartCircle />
            <Button>Start</Button>
        </div>
    );
};

export default Quiz;