import React from 'react';
import './homepage.css';
import UpraisedLogo from '../reusableComponents/UpraisedLogo';
import QuizStartCircle from './QuizStartCircle';
import Button from '../reusableComponents/Button/Button';

const Homepage = ({onStartClicked, questionsLoading = false}) => {
    return (
        <div className='quiz-homepage'>
            <div className='quiz-start-page'>
                <UpraisedLogo />
                <QuizStartCircle />
                <Button onClick={onStartClicked} loading={questionsLoading}>Start</Button>
            </div>
        </div>
    );
};

export default Homepage;