import React from 'react';
import "./question.css"

const Question = ({
    question = '',
    options = []
}) => {
    return (
        <div className='question-container'>
            <p className='text-1'>
                How do you judge what should be added in the next version of the app?
            </p>
        </div>
    );
};

export default Question;