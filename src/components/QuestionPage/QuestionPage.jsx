import React, { useRef } from "react";
import "./questionPage.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../reusableComponents/Button/Button";
import Question from "../Question/Question";
import axios from "axios";

const QuestionPage = ({
  question,
  setQuestionIndex,
  questionIndex,
  totalQuestions,
  onSubmit
}) => {
  const entryDate = useRef(Date.now());
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const onNextClicked = () => {
    axios.post(`http://localhost:8000/question/${questionIndex}/answer`, {
      answer: selectedOptions,
      timeSpent: Date.now() - entryDate.current
    }, { withCredentials: true,'Content-Type': 'application/json'  })
    .then((res) => {
      if(questionIndex === totalQuestions) {
        onSubmit();
      }else{
        setQuestionIndex((prev) => prev + 1);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className="main-bg">
      <div className="bottom-drawer">
        <div className="progress-circle">
          <CircularProgressbarWithChildren
            value={1}
            minValue={0}
            maxValue={5}
            styles={{
              path: {
                stroke: `#44b77b`,
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
              trail: {
                stroke: "#f3f4fa",
              },
            }}
          >
            <div>
              <span
                style={{ color: "#000", fontSize: "2.5rem", fontWeight: "900" }}
              >
                {questionIndex}
              </span>
              <span
                style={{
                  color: "#aeaeae",
                  fontSize: "1rem",
                  fontWeight: "900",
                }}
              >
                /{totalQuestions}
              </span>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <Question
          questionObj={question}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
        <Button
          onClick={onNextClicked}
          showRightIcon={true}
          disabled={selectedOptions.length === 0}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuestionPage;
