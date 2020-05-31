import * as React from "react";
import styled, { css } from "styled-components";
import { QuestionContext } from "../context/QuestionContext";
import { Choice, Answer } from "../types/global";
import { saveAnswer } from "../utils/AnswerRecorder";

type QuestionsProps = {};

const QuestionsContainer = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  @media screen and (max-width: 728px) {
    & {
      margin-top: 20px;
      grid-template-rows: auto 1fr;
    }
  }
  grid-row: 2;
`;

const CurrentQuestionNumber = styled.div`
  grid-row: 1;
  align-self: end;
  & span {
    padding: 10px 20px;
    border: 2px solid var(--primary);
    color: white;
    border-radius: 10px;
  }
`;

const CurrentQuestion = styled.div`
  color: white;
  grid-row: 2;
  border: 2px solid var(--primary);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & span {
    margin: 15px 10%;
    justify-self: center;
    align-self: center;
  }
`;

const QuestionChoices = styled.div`
  display: grid;
  grid-row: 3;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

const Choice = styled.div<{ disabled: boolean }>`
  display: grid;
  border: 2px solid var(--primary);
  border-radius: 10px;
  & button {
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    color: white;
    cursor: pointer;
    font-size: 1em;
    background-color: transparent;
    align-self: center;
    border-style: none;
    justify-self: center;
  }
  ${(props) =>
    props.disabled === false &&
    css`
      &:hover {
        background-color: var(--primary);
      }
    `}
`;

const Questions: React.SFC<QuestionsProps> = () => {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setMode,
  } = React.useContext(QuestionContext);

  const selectAnswer = (index: number) => {
    const answer: Answer = {
      questionNumber: currentQuestionIndex,
      questionText: questions[currentQuestionIndex].questionText,
      selectedAnswer: questions[currentQuestionIndex].choices[index].text,
      correctAnswer: questions[currentQuestionIndex].choices.filter(
        (question) => question.correct === true
      )[0].text,
      isCorrect: questions[currentQuestionIndex].choices[index].correct,
    };

    saveAnswer(answer);

    if (currentQuestionIndex + 1 !== questions.length) {
      setCurrentQuestionIndex((index: number) => index + 1);
    } else {
      setMode("ANSWER_VIEW");
    }
  };

  return (
    <QuestionsContainer>
      <CurrentQuestionNumber>
        <span>Question {currentQuestionIndex + 1}</span>
      </CurrentQuestionNumber>
      <CurrentQuestion>
        <span>{questions[currentQuestionIndex].questionText}</span>
        <span>
          {questions[currentQuestionIndex].hasCode && (
            <pre>
              <code className="js">
                {questions[currentQuestionIndex].codeText}
              </code>
            </pre>
          )}
        </span>
      </CurrentQuestion>
      <QuestionChoices>
        {questions[currentQuestionIndex].choices.map(
          (choice: Choice, index: number) => {
            return (
              <Choice disabled={choice.remove === true} key={index}>
                <button
                  disabled={choice.remove}
                  onClick={() => selectAnswer(index)}
                >
                  {choice.remove === true ? "" : choice.text}
                </button>
              </Choice>
            );
          }
        )}
      </QuestionChoices>
    </QuestionsContainer>
  );
};

export default Questions;
