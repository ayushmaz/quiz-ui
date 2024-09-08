import React, { useRef, useState } from "react";
import "./questionPage.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../reusableComponents/Button/Button";
import Question from "../Question/Question";
import axios from "axios";
import { API_POST_ANSWER } from "../../service/api";

const QuestionPage = ({
  question,
  setQuestionIndex,
  questionIndex,
  totalQuestions,
  onSubmit
}) => {
  const entryDate = useRef(Date.now());
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const onNextClicked = () => {
    setLoading(true);
    const payload = {
      answer: selectedOptions,
      timeSpent: Date.now() - entryDate.current
    }
    API_POST_ANSWER(questionIndex, payload)
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
    .finally(() => {
      setLoading(false);
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
          loading={loading}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuestionPage;
