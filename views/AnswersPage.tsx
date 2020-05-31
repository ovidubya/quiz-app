import * as React from "react";
import styled from "styled-components";
import { getAnswers } from "../utils/AnswerRecorder";

type AnswersPageProps = {};

const AnswersContainer = styled.div<{ numberOfAnswers: number }>`
  display: flex;
  flex-direction: column;
`;

const Result = styled.div<{ isCorrect: boolean }>`
  color: white;
  display: block;
  margin: 20px;
  padding: 10px 20px;
  border: 2px solid
    ${(props) => (props.isCorrect ? "var(--secondary)" : "var(--danger)")};
  border-radius: 4px;
`;

const Summary = styled.h3`
  text-align: center;
  color: white;
`;

export const AnswersPage: React.FC<AnswersPageProps> = () => {
  const answers = Object.values(getAnswers());
  return (
    <AnswersContainer numberOfAnswers={answers.length}>
      <Summary>
        You final score is {answers.filter((answer) => answer.isCorrect).length}
        /{answers.length}
        <p>
          Total points is:{" "}
          {answers.filter((answer) => answer.isCorrect).length * 10}
        </p>
      </Summary>
      {answers.map((answer, index) => {
        return (
          <Result key={index} isCorrect={answer.isCorrect}>
            <div>
              <p>Question {answer.questionNumber + 1}</p>
              <p>{answer.questionText}</p>
            </div>
            <div>
              <div>Selected answer: {answer.selectedAnswer}</div>
              {!answer.isCorrect && (
                <div> The correct answer is: {answer.correctAnswer}</div>
              )}
            </div>
          </Result>
        );
      })}
    </AnswersContainer>
  );
};
