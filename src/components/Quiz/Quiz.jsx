import React from 'react';
import Homepage from '../HomePage/Homepage';
import QuestionPage from '../QuestionPage/QuestionPage';

const Quiz = () => {
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const onStartClicked = () => {
        setQuestionIndex(1);
    }

    const renderMainScreen = () => {
        switch(questionIndex){
            case 0:
                return <Homepage onStartClicked={onStartClicked} />;
            default:
                return <QuestionPage />;
        }
    }
    return (
        <>
            {renderMainScreen()}
        </>
    );
};

export default Quiz;